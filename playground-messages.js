export default {
  connected: 'Connected!\n' +
    'This is your basic Tableland Terminal, you can type SQL commands interact to with a Tableland Validator.\n' +
    'Run `help` to learn more and see some example commands.',
  creating: 'Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n',
  docs: 'Read the full docs here: https://docs.tableland.xyz',
  help: 'Available commands:\n' +
    '    connect   Connect to tableland with Metamask. You must\n' +
    '              do this before any other commands can be run.\n' +
    '    list      List your tables\n' +
    '    clear     Clear this terminal\n' +
    '    whoami    See your Eth Address\n' +
    '    docs      Show url to the documentation\n' +
    '    help      Show this message again\n\n' +
    'Example Read Queries:\n' +
    '    SELECT * FROM LootAttributes_3;\n' +
    '    SELECT * FROM todo_todos_example_34 ORDER BY id ASC;',
  running: 'Running SQL on the Validator',
  warn: {
    connect: 'Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask. Make sure it\'s installed, then type `connect` and hit return.',
    statement: 'WARN: that is not a SQL statement that Tableland can use'
  }
};
