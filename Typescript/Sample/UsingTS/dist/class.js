"use strict";
console.log("----------------Class-------------------------");
class Department {
    constructor(n) {
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
accountingCopy.describe();
class Department2 {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department2:" + this.name);
    }
}
const accounting2 = new Department2("Accounting");
console.log(accounting2);
const accountingCopy2 = {
    describe: accounting2.describe,
};
console.log("----------------Access Modifiers-------------------------");
class Department3 {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department2:" + this.name);
    }
    addEmployee(employee) {
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
accounting3.describe();
accounting3.printEmployeeInformation();
class Department4 {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department2:" + this.name);
    }
    addEmployee(employee) {
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
console.log("----------------Shorthand initialization-------------------------");
class Department5 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
}
const accounting5 = new Department5("id1", "Accounting");
console.log(accounting5);
accounting5.describe();
console.log("----------------Readonly property-------------------------");
class Department6 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
console.log("----------------Inheritance-------------------------");
class ITDepartment extends Department6 {
}
const accounting6 = new ITDepartment("id2", "ITD");
console.log(accounting6);
class ITDepartment2 extends Department6 {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const it = new ITDepartment2("id3", ["Max", "Rich"]);
console.log(it);
class AccountingDepartment extends Department6 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    addReport(report) {
        this.reports.push(report);
    }
    printReports() {
        console.log(this.reports);
    }
}
const accDep = new AccountingDepartment("id4", []);
accDep.addReport("Something went wrong!");
accDep.printReports();
console.log("----------------Overriding Properties & Protected-------------------------");
class AccountingDepartment2 extends Department6 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
    }
}
class Department7 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class AccountingDepartment3 extends Department7 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const accDep3 = new AccountingDepartment3("id4", []);
accDep3.addEmployee("Samuel");
console.log(accDep3);
console.log("----------------Getters and Setters-------------------------");
class AccountingDepartment4 extends Department7 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this._lastReport = reports[0];
    }
    get lastReport() {
        if (this._lastReport) {
            return this._lastReport;
        }
        throw new Error("No report found!");
    }
    set lastReport(value) {
        if (!value) {
            throw new Error("Please pass valid value!");
        }
        this.addReport(value);
    }
    addReport(report) {
        this.reports.push(report);
        this._lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accDep4 = new AccountingDepartment4("id5", []);
accDep4.addReport("Something went wrong!");
console.log(accDep4.lastReport);
accDep4.lastReport = "new report";
console.log(accDep4.lastReport);
console.log("----------------Static Method and properties-------------------------");
let Department8 = (() => {
    class Department8 {
        constructor(id, name) {
            this.id = id;
            this.name = name;
            this.employees = [];
            console.log(Department8.fiscalyear);
        }
        describe() {
            console.log(`Department (${this.id}): ${this.name}`);
        }
        addEmployee(employee) {
            this.employees.push(employee);
        }
        static createEmployee(name) {
            return { name: name };
        }
    }
    Department8.fiscalyear = 2020;
    return Department8;
})();
const employee1 = Department8.createEmployee("Rich");
console.log(employee1, Department8.fiscalyear);
console.log("----------------Abstract Classes-------------------------");
class Department9 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
class ITDepartment9 extends Department9 {
    constructor(id, admins) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log('IT department' + this.id);
    }
}
const it9 = new ITDepartment9("id9", ["Max", "Rich"]);
it9.describe();
console.log("----------------Singletons and Private Constructors-------------------------");
class AccountingDepartment5 extends Department7 {
    constructor(id, reports) {
        super(id, "IT");
        this.reports = reports;
        this._lastReport = reports[0];
    }
    static getInstance() {
        if (AccountingDepartment5.instance) {
            return AccountingDepartment5.instance;
        }
        this.instance = new AccountingDepartment5('id5', []);
        return this.instance;
    }
}
const accDep5 = AccountingDepartment5.getInstance();
const accDep6 = AccountingDepartment5.getInstance();
console.log(accDep5, accDep6);
console.log("----------------Abstract Classes-------------------------");
//# sourceMappingURL=class.js.map