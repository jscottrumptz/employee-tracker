class CRUD {
  
    get findEmployees() {
      return `SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
      FROM employee 
      LEFT JOIN role on employee.role_id = role.id 
      LEFT JOIN department on role.department_id = department.id 
      LEFT JOIN employee manager on manager.id = employee.manager_id;` 
    }
  
    get findDepartments() {
      return "SELECT * FROM department;"
    }
  
    get findRoles() {
      return `SELECT role.id, role.title, department.name AS department, role.salary 
      FROM role 
      LEFT JOIN department on role.department_id = department.id;`
    }
    
    get createEmployee() {
      return "INSERT INTO employee SET ?"// employee
    }
  
    get createDepartment() {
      return "INSERT INTO department SET ?" // department
    }
  
    get createRole() {
      return "INSERT INTO role SET ?" // role
    }
  
    get updateRole() {
      return "UPDATE employee SET role_id = ? WHERE id = ?" // [roleId, employeeId]
    }
  
    get removeRole() {
      return "DELETE FROM role WHERE id = ?" // id
    }
    
    get title () {
      return`
  
       ___________________________________
      |                                   |
      |  +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+  |
      |  |E| |M| |P| |L| |O| |Y| |E| |E|  |
      |  +-+ +-+ +-+ +-+ +-+ +-+ +-+ +-+  |
      |   +-+ +-+ +-+ +-+ +-+ +-+ +-+     |
      |   |M| |A| |N| |A| |G| |E| |R|     |
      |    +-+ +-+ +-+ +-+ +-+ +-+ +-+    |
      |           version 1.0             |
      |___________________________________|     
  
                by J. Scott Rumptz
   
      `
    }
    get goodbye() {
      return`
                                    
      ,---.              ||               |
      |  _.,---.,---.,---||---.,   .,---. |
      |   ||   ||   ||   ||   ||   ||---' 
      '---''---''---''---''---''---|'---' o
                               '---'      
`
    }
  }
  
  module.exports = new CRUD();