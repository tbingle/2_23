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