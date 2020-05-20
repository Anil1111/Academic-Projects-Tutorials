console.log("----------------Class-------------------------");

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department:" + this.name);
  }
}

const accounting = new Department("Accounting");
console.log(accounting);

const accountingCopy = {
  describe: accounting.describe,
};
// const accountingCopy = {
//   describe: accounting.describe.bind(accounting),
// };
accountingCopy.describe(); //return undefined as this not bound

//Solution--------------

class Department2 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department2) {
    console.log("Department2:" + this.name);
  }
}

const accounting2 = new Department2("Accounting");
console.log(accounting2);

const accountingCopy2 = {
  describe: accounting2.describe,
};
// console.log(accountingCopy2.describe()); //throws lint error and thus cannot be run

console.log("----------------Access Modifiers-------------------------");

class Department3 {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department2) {
    console.log("Department2:" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting3 = new Department3("Accounting");
accounting3.addEmployee("Max");
accounting3.addEmployee("Max");

// accounting3.employees[2] = 'Richie';  // but we do not want anyone to directly add an employee other than by using the addEmployee

accounting3.describe();
accounting3.printEmployeeInformation();

//Solution--------------

class Department4 {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department2) {
    console.log("Department2:" + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting4 = new Department4("Accounting");
accounting4.addEmployee("Max");
accounting4.addEmployee("Max");
//accounting4.employees[2] = 'Richie'; //will throw error now

console.log(
  "----------------Shorthand initialization-------------------------"
);

class Department5 {
  private employees: string[] = [];

  constructor(private id: string, public name: string) {}
  describe(this: Department5) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
}

const accounting5 = new Department5("id1", "Accounting");
console.log(accounting5);
accounting5.describe();

console.log("----------------Readonly property-------------------------");

class Department6 {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department6) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    // this.id = 'd2'; //will throw error
    this.employees.push(employee);
  }
}

console.log("----------------Inheritance-------------------------");
//inherits from Department
class ITDepartment extends Department6 {}

const accounting6 = new ITDepartment("id2", "ITD");
console.log(accounting6);

class ITDepartment2 extends Department6 {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const it = new ITDepartment2("id3", ["Max", "Rich"]);
console.log(it);

class AccountingDepartment extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }
  addReport(report: string) {
    this.reports.push(report);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accDep = new AccountingDepartment("id4", []);
accDep.addReport("Something went wrong!");
accDep.printReports();

console.log(
  "----------------Overriding Properties & Protected-------------------------"
);

class AccountingDepartment2 extends Department6 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }

  //overriding
  //AccountingDepartment2 doesnt have direct access to this.employees as it is a private property
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    // this.employees.push(name); //error as employees is private
  }
}

//Solution--------------

class Department7 {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department7) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class AccountingDepartment3 extends Department7 {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name); //no error
  }
}

const accDep3 = new AccountingDepartment3("id4", []);
accDep3.addEmployee("Samuel");
console.log(accDep3);

console.log("----------------Getters and Setters-------------------------");

class AccountingDepartment4 extends Department7 {
  private _lastReport: string;

  constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this._lastReport = reports[0];
  }
  get lastReport() {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error("No report found!");
  }
  set lastReport(value: string) {
    if (!value) {
      throw new Error("Please pass valid value!");
    }
    this.addReport(value);
  }
  addReport(report: string) {
    this.reports.push(report);
    this._lastReport = report;
  }
  printReports() {
    console.log(this.reports);
  }
}

const accDep4 = new AccountingDepartment4("id5", []);
accDep4.addReport("Something went wrong!");
console.log(accDep4.lastReport); //access the getter lastReport as a property not as a method

accDep4.lastReport = "new report"; //using the setter to add new report
console.log(accDep4.lastReport);

console.log(
  "----------------Static Method and properties-------------------------"
);

class Department8 {
  public static fiscalyear = 2020;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalyear); //will give an error as this corresponds to the instance of the class whereas static properties are available on the class itself
    console.log(Department8.fiscalyear); 
  }

  describe(this: Department8) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  static createEmployee(name: string) {
    return { name: name };
  }
}

const employee1 = Department8.createEmployee("Rich");
console.log(employee1, Department8.fiscalyear);

console.log(
  "----------------Abstract Classes-------------------------"
);

abstract class Department9 {
  protected employees: string[] = [];
  constructor(protected readonly id: string, public name: string) {}
  
  abstract describe(): void; 
  
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment9 extends Department9 {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }
  describe(){
    console.log('IT department' + this.id);
  }
}

const it9 = new ITDepartment9("id9", ["Max", "Rich"]);
it9.describe();


console.log(
  "----------------Singletons and Private Constructors-------------------------"
);

class AccountingDepartment5 extends Department7 {
  private _lastReport: string;
  private static instance: AccountingDepartment5;

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this._lastReport = reports[0];
  }
  //will only declare the AccountingDepartment5 object once and every other time it will return its instance
  static getInstance(){
    if (AccountingDepartment5.instance){
      return AccountingDepartment5.instance;
    }
    this.instance = new AccountingDepartment5('id5', []);
    return this.instance;
  }
}

// const accDep5 = new AccountingDepartment5("id5", []); //error as constructor is private
const accDep5 = AccountingDepartment5.getInstance();
const accDep6 = AccountingDepartment5.getInstance();
console.log(accDep5, accDep6); // both will be same as only singleton pattern causes only object to be created


console.log(
  "----------------Abstract Classes-------------------------"
);
