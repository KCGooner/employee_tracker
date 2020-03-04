const inquirer = require("inquirer");
const figlet = require("figlet");


async function init() {
    console.log(figlet.textSync('Employee', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }));
    console.log(figlet.textSync('Tracker', {
      font: 'Standard',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }));
};

init();

function run() {
    inquirer.prompt([{
        type: "list",
        name: "options",
        message: "What would you like to do?",
        choices: ["View All Employees", "View All Employees by Department", "View All Employees by Manager",
        "Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager"]
    },
])


}
run();