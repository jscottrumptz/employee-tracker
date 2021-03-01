const inquirer = require('inquirer');

class EmployeeTracker {
    constructor() {
        this.manager;
        this.employees = [];
        // this.interns = [];
    }

    // initialize employee tracker
    initializeEmployeeTracker() {
        // application title card
        console.log(
`

+-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
|E| |M| |P| |L| |O| |Y| |E| |E|
+-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+
  +-+ +-+ +-+ +-+ +-+ +-+ +-+    
  |M| |A| |N| |A| |G| |E| |R|    
  +-+ +-+ +-+ +-+ +-+ +-+ +-+
         version 1.0
         
     by J. Scott Rumptz
     
`)

        //open tracker menu
        this.trackerMenu()

    }

    // a menu with the application options
    trackerMenu() {
        // prompt user to select an option
        inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'selection',
            choices: ['View all departments', 'View all roles', 'View all employees', 'View employees by manager', 'View employees by department', 'View the total utilized budget of a department', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Delete a department', 'Delete a role', 'Delete an employee','Exit this application']
        })
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

    // view departments
    viewAllDepartments() {
        // show departments
        console.log('Show Departments');
        
        //open employee menu
        this.trackerMenu();
    };

    // view roles
    viewAllRoles() {
        // show rolls
        console.log('Show Roles');

        //open employee menu
        this.trackerMenu();
    };

    // view employees
    viewAllEmployees() {
        // show employees
        console.log('Show Employees');

        //open employee menu
        this.trackerMenu();
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

    // add employee
    addEmployee() {
        // get employee information
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'firstName',
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
                name: 'lastName',
                message:  "What is the employee's last name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The employee's last name is required.");
                        return false;
                    }
                }
            }
        ])

        // destructure values from the prompt object
        .then(({firstName, lastName}) => {
            
            // add to database
            console.log(`${firstName} ${lastName} added to the data base`)

            //open employee menu
            this.trackerMenu();
        });
    };

    // update employee role
    updateEmployeeRole() {
        // update employee roll
        console.log('Update Employee Role');

        //open employee menu
        this.trackerMenu();
    };

    // delete department
    deleteDepartment() {
        // delete department
        console.log('Delete Department');

        //open employee menu
        this.trackerMenu();
    };

    // delete roll
    deleteRole() {
        // delete roll
        console.log('Delete Role');

        //open employee menu
        this.trackerMenu();
    };

    // delete employee
    deleteEmployee() {
        // delete employee
        console.log('Delete Employee');

        //open employee menu
        this.trackerMenu();
    };

    // exit application
    exitTracker() {
        // say goodbaye
        console.log('Goodbye!');
    };
}

module.exports = EmployeeTracker;