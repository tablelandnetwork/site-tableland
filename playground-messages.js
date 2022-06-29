export default {
  connected:
    "Connected!\n" +
    "This is your basic Tableland Terminal, you can type SQL commands to interact with a Tableland Validator.\n" +
    "Run `help` to learn more and see some example commands.",
  creating:
    "Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n",
  docs: "Read the full docs here: https://docs.tableland.xyz",
  fetching: "Getting receipt for transaction",
  help:
    "Available commands:\n" +
    "    connect   Connect to tableland with Metamask. You must\n" +
    "              do this before any other commands can be run.\n" +
    "    list      List your tables\n" +
    "    clear     Clear this terminal\n" +
    "    whoami    See your Eth Address\n" +
    "    docs      Show url to the documentation\n" +
    "    help      Show this message again\n\n" +
    "Example Read Queries:\n" +
    "    SELECT * FROM mytable_5_30;\n" +
    "    SELECT * FROM mytable_5_30 WHERE id = 0;\n" +
    "Example Create and Write Queries:\n" +
    "    CREATE TABLE trees (climate TEXT, name TEXT);\n" +
    "    INSERT INTO trees_5_<tableId> ('climate', 'name') VALUES ('cold', 'aspen');",
  running: "Running SQL on the Validator",
  warn: {
    address:
      "Get whitelisted on the Tableland Discord.\nhttps://discord.gg/hpd5WWn4Ys",
    connect:
      "Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask or the Brave browser. Make sure you are using one of those, then type `connect` and hit return.",
    statement: "WARN: that is not a SQL statement that Tableland can use",
  },
};
