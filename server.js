const inquirer = require("inquirer");
const figlet = require("figlet");
const mysql = require('mysql');

async function figletText() {
  console.log(figlet.textSync("Employee", {
    font: "slant",
    horizontalLayout: "default",
    verticalLayout: "default",
  }));
  console.log(figlet.textSync("Tracker", {
    font: "slant",
    horizontalLayout: "default",
    verticalLayout: "default",
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

connection.connect(function (err) {
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
        "View Department",
        "Update Employee Role",
        "Add Employee",
        "Exit"
      ]

    })
    .then(function (answer) {
      console.log(answer)
      switch (answer.options) {
        case "View All Employees":
          allEmployees()
          break;

        case "View Department":
          viewDepartment()
          break;

        case "Add Employee":
          addEmployee()
          break;

        case "Update Employee Role":
          employeeRole()
          break;

        case "exit":
          connection.end()
          break;
      }
    })
}

function allEmployees() {
  var query = "SELECT * FROM employee"
  connection.query(query, function (err, res) {
    if (err) throw err
    console.table(res)
    run()
  })
}

function viewDepartment() {
  inquirer
    .prompt({
      type: "checkbox",
      name: "choice",
      message: "Departments: ",
      choices: ["HR",
        "Accounting",
        "Marketing",
        "Sales",
        "Manager"
      ]
    })
    .then(function (answer) {
      connection.query(`SELECT * FROM department WHERE name = "${answer.choice}"`, function (err, res) {
        if (err) throw err
        console.table(res)
        run()
      })
    })
}




