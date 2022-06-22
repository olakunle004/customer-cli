const program = require("commander");
const { prompt } = require("inquirer");
const {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
} = require("./index");
const customer = require("./models/customer");

//Customer Questions
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "Customer First Name",
  },
  {
    type: "input",
    name: "Lastname",
    message: "Customer LastName",
  },
  {
    type: "input",
    name: "phone",
    message: "Customer phone",
  },
  {
    type: "input",
    name: "email",
    message: "Customer email",
  },
];
program.version("1.0.0").description("Client Management System");

// program
//   .command('find<name>')
//     .alias(f')
//   .description('Find a customer')
//   .action(name => findCustomer(name));
//     addCustomer({firstname, lastname, phone, email});

//Add comand
program
  .command("add")
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomer(answers));
  });

//Find command
program.parse(process.argv);

//Find Customers
const listcustomers = () => {
  customer.find().then((customers) => {
    console.info(customers), console.info("${customers,lenght} customers");
  });
};

//Export All Methods
module.exports = {
  addCustomer,
  findCustomer,
  updateCustomer,
  removeCustomer,
  listCustomers,
};

//update command
program
  .command("update <_id>")
  .alias("u")
  .description("update a customer")
  .action(() => {
    prompt(questions).then((answers) => update(Customer)(answers));
  });

//Removecomand
program
  .command("remove")
  .alias("a")
  .description("Remove a customer")
  .action((_id) => removeCustomer(_id));
prompt(questions).then((answers) => addCustomer(answers));

//List command
program
  .command("list")
  .alias("r")
  .description("list all customer")
  .action(() => {
    prompt(questions).then((answers) => removeCustomer(answers));
  });
program.parse(process.argv);
