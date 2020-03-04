const inquirer = require("inquirer");

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