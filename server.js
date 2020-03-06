const inquirer = require("inquirer");
const figlet = require("figlet");
const mysql = require('mysql');

async function figletText() {
    console.log(figlet.textSync('Employee', {
      font: 'slant',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }));
    console.log(figlet.textSync('Tracker', {
      font: 'slant',
      horizontalLayout: 'default',
      verticalLayout: 'default',
    }));
};
figletText();

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Password",
    database: "employee_track_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
    // console.log('connected as id ' + connection.threadId);
    run();
});

function run() {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View Department by Manager",
        "View Department",
        "View Employee by Role",
        "Add Employee",
        "Delete Employee",
        "Update Employee Role",
        "EXIT"
      ]
    })
}