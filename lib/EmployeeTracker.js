// get inquirer
const inquirer = require('inquirer');
// get console table 
const cTable = require('console.table');
// get the MySQL client
const mysql = require('mysql2');

const crud = require('../db/CRUD');
 
// create the connection to database
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '11Griffin55!!!',
    database: 'company_db'
});

// employee tracker class
class EmployeeTracker {
    constructor() {
    }

    // initialize employee tracker
    initializeEmployeeTracker() {

        // application title card
        console.log(crud.title)

        //open tracker menu
        this.trackerMenu()

    }

    // calls up a menu with the application options
    trackerMenu() {
        // prompt user to select an option
        inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'selection',
            choices: [
                'View all departments', 
                'View all roles', 
                'View all employees', 
                'View employees by manager', 
                'View employees by department', 
                'View the total utilized budget of a department', 
                'Add a department', 
                'Add a role', 
                'Add an employee', 
                'Update an employee role', 
                'Delete a department', 
                'Delete a role', 
                'Delete an employee',
                'Exit this application'
            ]
        })
        // send to the correct function based on the selection
        .then(({selection}) => {
            switch (selection) {
            case 'View all departments':
                this.viewAllDepartments();
                break;
            case 'View all roles':
                this.viewAllRoles();
                break;
            case 'View all employees':
                this.viewAllEmployees();
                break;
            case 'View employees by manager':
                this.viewAllEmployeesByManager();
                break;
            case 'View employees by department':
                this.viewAllEmployeesByDepartment();
                break;
            case 'View the total utilized budget of a department':
                this.viewTotalBudget();
                break;
            case 'Add a department':
                this.addDepartment();
                break;
            case 'Add a role':
                this.addRole();
                break;
            case 'Add an employee':
                this.addEmployee();
                break;
            case 'Update an employee role':
                this.updateEmployeeRole();
                break;
            case 'Delete a department':
                this.deleteDepartment();
                break;
            case 'Delete a role':
                this.deleteRole();
                break;
            case 'Delete an employee':
                this.deleteEmployee();
                break;
            case 'Exit this application':
                this.exitTracker();
                break;
            };
        });
    };

    // function to query the database and console log results
    displayQuery(query) {
        con.promise().query(query)
        .then( ([rows,fields]) => {
            // console log results
            console.log(`

` + cTable.getTable(rows));
            // return back to the tracker menu
            this.trackerMenu();
        })
        .catch(console.log)
    };

    // view departments
    viewAllDepartments() {
        // query all departments
        this.displayQuery(crud.findDepartments);
    };

    // view roles
    viewAllRoles() {
        // query all  rolls
        this.displayQuery(crud.findRoles);
    };

    // view employees
    viewAllEmployees() {
        // query all employees along with their role, salary, department, and manager
        this.displayQuery(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
        FROM employee 
        LEFT JOIN role on employee.role_id = role.id 
        LEFT JOIN department on role.department_id = department.id 
        LEFT JOIN employee manager on manager.id = employee.manager_id;`); 
    };

    // view employees by manager
    viewAllEmployeesByManager() {
        // show employees by manager
        console.log('Show Employees by Manager');

        //open employee menu
        this.trackerMenu();
    };

    // view employees by department
    viewAllEmployeesByDepartment() {
        // show employees by department
        console.log('Show Employees by Department');

        //open employee menu
        this.trackerMenu();
    };

    // view total budget
    viewTotalBudget() {
        // show total budget
        console.log('Show Total Budget');

        //open employee menu
        this.trackerMenu();
    };

    // add department
    addDepartment() {
        // add department
        console.log('Add Department');

        //open employee menu
        this.trackerMenu();
    };

    // add role
    addRole() {
        // add roll
        console.log('Add Role');

        //open employee menu
        this.trackerMenu();
    };

    // add an employee
    addEmployee() {
         // query for current employees
         con.promise().query(crud.findEmployees)
         .then( ([rows,fields]) => {
             // map employees to set up manager choices
             const managerChoices = rows.map(({ id, first_name, last_name }) => ({
                 name: `${first_name} ${last_name}`,
                 value: id
             }));
 
             // ad a selection for none and set it's value to null
             managerChoices.unshift({ name: "None", value: null });
 
             // get role choices
             con.promise().query(crud.findRoles)
             .then( ([rows,fields]) => {
                 const roleChoices = rows.map(({ id, title }) => ({
                     name: title,
                     value: id
                 }));
                 
                 
                // now that we have all the available choices, get the employee information
                inquirer
                .prompt([
                    {
                        type: 'text',
                        name: 'first_name',
                        message: "What is the employee's first name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("The employee's first name is required.");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'text',
                        name: 'last_name',
                        message:  "What is the employee's last name?",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("The employee's last name is required.");
                                return false;
                            }
                        }
                    },
                    {
                        name: "role_id",
                        type: "list",
                        message: "Select the employee's role?",
                        choices: roleChoices
                    },
                    {
                        name: "manager_id",
                        type: "list",
                        message: "Select the employee's manager",
                        choices: managerChoices
                    },
                ])

                // destructure values from the prompt object
                .then((newEmployee) => {
                    
                    // add to database
                    con.query(crud.createEmployee, newEmployee)

                    console.log(`

                    ${newEmployee.first_name} ${newEmployee.last_name} was added to the database
                    
                    `)

                    //open employee menu
                    this.trackerMenu();
                });
 
             })
             .catch(console.log)
         })
         .catch(console.log)
    };

    // update an employee role
    updateEmployeeRole() {
        // update employee roll
        console.log('Update Employee Role');

        //open employee menu
        this.trackerMenu();
    };

    // delete a department
    deleteDepartment() {
        // delete department
        console.log('Delete Department');

        //open employee menu
        this.trackerMenu();
    };

    // delete a role
    deleteRole() {
        // delete roll
        console.log('Delete Role');

        //open employee menu
        this.trackerMenu();
    };

    // delete an employee
    deleteEmployee() {
        // delete employee
        console.log('Delete Employee');

        //open employee menu
        this.trackerMenu();
    };

    // exit the application
    exitTracker() {
        // say goodbaye
        console.log(crud.goodbye);
        con.end();
    };
}

module.exports = EmployeeTracker;