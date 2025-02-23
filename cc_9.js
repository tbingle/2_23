//Inital Commit
class Employee {
    // Class to initialize employee details
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    }
    // Formatted employee details
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }  // Method to calculate annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000); // Log employee details and annual salary
console.log(emp1.getDetails()); // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"  
console.log(emp1.calculateAnnualSalary()); 

//Task 2
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); //Employee constructor
        this.teamSize = teamSize; //Team size
    }; 
    // Manager Constructor
    getDetails() {
        return `Manager: ${this.name}, Id: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, Team Size: ${this.teamSize}`;
    } // manager details
    calculateBonus() {
        return this.salary * 12 * 0.10; //Calculate Bonus
    }};
    const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus());

//Task 3
class Company {
    constructor(name) {
        this.name = name; //Name
        this.employees = []; //Employees
    }; 
    //Constructor
    addEmployee(employee) {
        this.employees.push(employee); //Add Employees to Company
    }
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails())); // All Employees
    }}
    const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();

