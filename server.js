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
        "View Employees",
        "View Department",
        "Update Employee Role",
        "Add Employee",
        "Delete Employee"]

    })
    .then(function (answer) {
      console.log(answer)
      switch (answer.options) {
        case "View Employees":
          allEmployees()
          break;

        case "View Department":
          viewDepartment()
          break;

        case "Add Employee":
          addEmployee()
          break;

        case "Delete Employee":
          deleteEmployee()
          break;

        case "Update Employee Role":
          employeeRole()
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

const addEmployee = () => {
  inquirer
    .prompt([
      { type: "input",
        message: "First name of new employee?",
        name: "first_name"},
      { type: "input",
        message: "Last name of new employee?",
        name: "last_name"},
      { type: "input",
        message: "Salary of new employee?",
        name: "salary"},
      { type: "number",
        message: "Role ID of new employee?",
        name: "role_id"},
      { type: "number",
        message: "Manager ID of new employee?",
        name: "manager_id"}
    ])
    .then(answer => {
      const query = `INSERT INTO employee (first_name, last_name, salary, role_id, manager_id) VALUE ("${answer.first_name}", "${answer.last_name}", "${answer.salary}", "${answer.role_id}", "${answer.manager_id}")`
      connection.query(query, function (err, res) {
        if (err) throw err
        console.table(res)
        run()
      })
    })
}

const employeeRole = () => {

  connection.query('SELECT * FROM employee', function (err, res) {
    if (err) throw err
    console.table(res)
    inquirer
      .prompt([
        { type: 'Number',
          message: 'ID of employee you would like to update?',
          name: 'id'},
        { type: 'number',
          message: 'What new role ID are you assigning the employee?',
          name: 'role_id'}
      ]).then(answer => {
        const query = `UPDATE employee SET role_id = "${answer.role_id}" WHERE id = ${answer.id}`
        connection.query(query, function (err, res) {
          if (err) throw err
          console.log("Role updated.")
          run()
        })
      })
  })
}

const deleteEmployee = () => {
  inquirer
    .prompt([
      { type: "input",
        message: "Employee first name?",
        name: "first_name"},
      { type: "input",
        message: "Employee last name?",
        name: "last_name"},
      { type: "input",
        message: "Salary of employee?",
        name: "salary"},
      { type: "number",
        message: "Employee role ID?",
        name: "role_id"},
      { type: "number",
        message: "Manager ID of the employee?",
        name: "manager_id"}
    ])

    .then(answer => {
      const query = `DELETE FROM employee WHERE(first_name, last_name, salary, role_id, manager_id) =("${answer.first_name}", "${answer.last_name}", "${answer.salary}", "${answer.role_id}", "${answer.manager_id}")`
      connection.query(query, function (err, res) {
        if (err) throw err
        console.table(res)
        run()
      })
    })
};