export default {
  connected:
    "Connected!\n" +
    "Your Wallet is now connected, you may access tables to mint.\n" +
    "Run `help` to learn more and see some example commands.",
  creating:
    "Creating Your Table, the steps are:\n  Mint the table on Ethereum\n  Register it with the Validator\n  It may take a little while\n",
  docs: "Read the full docs here: https://docs.tableland.xyz",
  help:
    "Welcome to the Rig Minter!\n" +
    "Use this terminal to access information about rigs before minting\n" +
    "\n" +
    "Available commands:\n" +
    "    connect   Connect to tableland with Metamask. You must\n" +
    "              do this before any other commands can be run.\n" +
    "    parts     List your tables\n" +
    "    clear     Clear this terminal\n" +
    "    whoami    See your Eth Address\n" +
    "    docs      Show url to the documentation\n" +
    "    help      Show this message again\n\n" +
    "Example Read Queries:\n" +
    "    SELECT * FROM LootAttributes_3;\n" +
    "    SELECT * FROM todo_todos_example_34 ORDER BY id ASC;",
  running: "Running SQL on the Validator",
  warn: {
    address:
      "Get whitelisted on the Tableland Discord.\nhttps://discord.gg/dc8EBEhGbg",
    connect:
      "Before running commands you need to connect with a Tableland Validator. We currently only support connecting via Metamask or the Brave browser. Make sure you are using one of those, then type `connect` and hit return.",
    statement: "WARN: that is not a SQL statement that Tableland can use",
  },
};
