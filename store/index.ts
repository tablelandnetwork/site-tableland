import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { connect, createTable, runQuery, myTables } from '@textile/tableland';

export interface Task {
  complete: boolean;
  name: string;
  deleted: boolean;
  id: number;
};


export const state = function () {
  return {
    ethAddress: '',
    playgroundResponse: {} as any,
    tablesTable: [] as any,
    tablesTableId: '' as string,
    allTables: [] as any[],
    allTableIds: [] as string[],
    currentTableId: '' as string,
    currentTableName: '' as string,
    tasks: [] as Task[]
  };
};

export type RootState = ReturnType<typeof state>

interface KeyVal {
  key: string;
  value: any;
};

export const mutations: MutationTree<RootState> = {
  set: function (state: any, data: KeyVal) {
    state[data.key] = data.value;
  }
};


export const actions: ActionTree<RootState, RootState> = {
  connect: async function (context) {
    // connect to tableland
    console.log(`connecting to validator at: ${process.env.validatorHost}`);
    const res = await connect(process.env.validatorHost as string);
    const { ethAccounts } = res;

    // save the user's eth account address
    context.commit('set', {key: 'ethAddress', value: ethAccounts[0]});

    // get all of the user's existing tables
    await context.dispatch('loadTables');
    /*
    // get all the tables controlled by this user's eth address
    const tables: any = await myTables();
    if (tables.error) return console.log(tables.error);
    context.commit('set', {key: 'allTables', value: tables});
    */
  },
  runSql: async function (context, query) {
    context.commit('set', {key: 'playgroundResponse', value: {}});
    const res = await runQuery(query, context.state.currentTableId) as any;

    console.log(res);
    context.commit('set', {key: 'playgroundResponse', value: res});
  },
  createTable: async function (context, createStatement) {
    try {
      console.log(createStatement);
      // TODO: table is a variation of a v4 uuid with 0x prepended and no dashes
      const table = await createTable(createStatement, 'TODO: API changes need to propagate before this will work');
      console.log(table);
      const tableId = formatUuid(table.slice(2));
      // TODO: setup table to track tables created here
      const tablesTable = await runQuery(sql.insertTable(parseName(createStatement), tableId), context.state.tablesTableId) as any;

      if (tablesTable.error) {
        context.commit('set', {key: 'playgroundResponse', value: tablesTable});
        console.log(tablesTable.error);
        return;
      }

      // refresh the list of all of the user's existing tables
      await context.dispatch('loadTables');
    } catch (err) {
      context.commit('set', {key: 'playgroundResponse', value: {error: err}});
    }
  },
  loadTables: async function (context) {
    // get all the tables controlled by this user's eth address
    const tables: any = await myTables();

    if (tables.error) {
      console.log(tables.error);
      context.commit('set', {key: 'allTables', value: []});
      return;
    }

    let tablesTableExists;
    // TODO: we are gonna add another column to the registry table so this won't be quite so cumbersome
    //       how we use the new columns to query will potentially be useful here
    for (let i = 0; i < tables.length; i++) {
      // We are going to loop through every table uuid this ethAccount has in the registry table,
      // NOTE: some of these might not have anything to do with the todo app
      const uuid = tables[i].uuid;
      let tablesTable = {} as any;
      try {
        let tablesTable = await runQuery(sql.selectTablesTable(), uuid) as any;
      } catch (err) {
        console.log('fail to get tablesTable with uuid: ' + uuid);
        console.log(err);
      }
      console.log(tablesTable);
      // if the uuid matches a table with the right name for this app we will assume it is storing the list names
      // NOTE: this is definitely not a legitimate way to build a dApp since malicious dApps could have created this table
      //       with some sort of bad intent
      if (tablesTable.result) {
        context.commit('set', {key: 'tablesTableId', value: uuid});
        context.commit('set', {key: 'tablesTable', value: tablesTable.result.data});
        tablesTableExists = true;
        break;
      }
    }

    if (!tablesTableExists) {
      try {
        console.log('tablesTable does not exist, gonna try to create');
        const tableIdNoFormat = await createTable(sql.createtablesTable(), 'TODO: API changes need to propagate before this will work');
        console.log(tableIdNoFormat);

        const tablesTableId = formatUuid(tableIdNoFormat.slice(2));

        context.commit('set', {key: 'tablesTableId', value: tablesTableId || ''});
        const tablesTable = await runQuery(sql.selectTablesTable(), tablesTableId) as any;

        console.log(tablesTable);
        if (tablesTable.result) {
          context.commit('set', {key: 'tablesTable', value: tablesTable.result.data});
          tablesTableExists = true;
        }
      } catch (err) {
        console.log(err);
      }
    }

    // Save there their tables for later, if a table doesn't exist they can use the button to create a table...
    const tablesTables = context.state.tablesTable ? tables.map((registryData: any) => {
      const list = context.state.tablesTable.find((list: any) => compareUuids(list.uuid, registryData.uuid));

      return list;
    }).filter((t: any) => t) : [];
    context.commit('set', {key: 'allTables', value: tablesTables});
  }
};

const getNextId = function (tasks: Task[]) {
  const taskIds = tasks.map((task: Task) => task.id).sort((a: number, b: number) => a > b ? 1 : -1);
  const lastId = taskIds[taskIds.length - 1];

  return (lastId || 0) + 1;
};

// RPC responds with rows and columns in separate arrays, this will combine to an array of objects
const parseRpcResponse = function (data: {rows: any[], columns: {name: string}[]}) {
  return data.rows.map((rowArr) => {
    const row = {} as {[key: string]: any};
    for (let i = 0; i < data.columns.length; i++) {
      const key = data.columns[i].name;
      row[key] = rowArr[i];
    }

    return row;
  });
};

const parseName = function (createStatement: string) {
  if (!createStatement) return '';

  // get each individual word
  const words = createStatement.split(' ').filter(s => s);

  if (words[0].toUpperCase() === 'CREATE' && words[1].toUpperCase() === 'TABLE') {
    return words[2];
  }

  // TODO: this whole function can go away once the createTable call returns the name
  //       for now we are just assuming they are only running CREATE TABLE <name> statements
  return '';
};

const compareUuids = function (a: string, b: string) {
  return a.replaceAll(' ', '').replaceAll('-', '') === b.replaceAll(' ', '').replaceAll('-', '');
};

const formatUuid = function (val: string) {
  return [val.slice(0, 8), val.slice(8, 12), val.slice(12, 16), val.slice(16, 20), val.slice(20)].join('-');
};

const tablesTableName = 'playground_tables_table';
const sql = {
  createtablesTable: () => `CREATE TABLE ${tablesTableName} (
    table_name TEXT NOT NULL,
    uuid TEXT NOT NULL
  );`,
  insertTable: (name: string, uuid: string) => `INSERT INTO ${tablesTableName}(table_name, uuid) VALUES ('${name}', '${uuid}');`,
  selectTablesTable: () => `SELECT * FROM ${tablesTableName}`
};

const wait = function (ms: number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => resolve(void 0), ms);
  });
};
