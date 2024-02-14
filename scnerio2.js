/*
Scenario:2

Imagine you are developing a simple office management system using JavaScript and Object-Oriented Programming (OOP). 
You have a base class called Empolyee with properties like
employeeName, employeeId, and employeeSalary.
Now, you want to create two derived classes: 
Manager and Developer, 
each with specific functionalities.
*/ 

// Solution

class Employee {
  empDetails(name, empid, empsalary) {
    this.name = name;
    this.empid = empid;
    this.empsalary = empsalary;
  }
}

class Manager extends Employee {
  manSal() {
    console.log(`The Manager name is ${this.name}`);
    console.log(`The Manager id is ${this.empid}`);
    console.log(`The Manager salary is ${this.empsalary}`);
  }
}

class Developer extends Employee {
  devSal() {
    console.log(`The Developer name is ${this.name}`);
    console.log(`The Developer id is ${this.empid}`);
    console.log(`The Developer salary is ${this.empsalary}`);
  }
}

let managerObj = new Manager();
let developerObj = new Developer();
managerObj.empDetails("Asim", 123342, 60000);
developerObj.empDetails("Ali", 4857429999, 60000);
managerObj.manSal();
developerObj.devSal();
