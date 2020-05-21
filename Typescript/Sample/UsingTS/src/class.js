var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("----------------Class-------------------------");
var Department = /** @class */ (function () {
    function Department(n) {
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Department:" + this.name);
    };
    return Department;
}());
var accounting = new Department("Accounting");
console.log(accounting);
var accountingCopy = {
    describe: accounting.describe,
};
// const accountingCopy = {
//   describe: accounting.describe.bind(accounting),
// };
accountingCopy.describe(); //return undefined as this not bound
//Solution--------------
var Department2 = /** @class */ (function () {
    function Department2(n) {
        this.name = n;
    }
    Department2.prototype.describe = function () {
        console.log("Department2:" + this.name);
    };
    return Department2;
}());
var accounting2 = new Department2("Accounting");
console.log(accounting2);
var accountingCopy2 = {
    describe: accounting2.describe,
};
// console.log(accountingCopy2.describe()); //throws lint error and thus cannot be run
console.log("----------------Access Modifiers-------------------------");
var Department3 = /** @class */ (function () {
    function Department3(n) {
        this.employees = [];
        this.name = n;
    }
    Department3.prototype.describe = function () {
        console.log("Department2:" + this.name);
    };
    Department3.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department3.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department3;
}());
var accounting3 = new Department3("Accounting");
accounting3.addEmployee("Max");
accounting3.addEmployee("Max");
// accounting3.employees[2] = 'Richie';  // but we do not want anyone to directly add an employee other than by using the addEmployee
accounting3.describe();
accounting3.printEmployeeInformation();
//Solution--------------
var Department4 = /** @class */ (function () {
    function Department4(n) {
        this.employees = [];
        this.name = n;
    }
    Department4.prototype.describe = function () {
        console.log("Department2:" + this.name);
    };
    Department4.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department4.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department4;
}());
var accounting4 = new Department4("Accounting");
accounting4.addEmployee("Max");
accounting4.addEmployee("Max");
//accounting4.employees[2] = 'Richie'; //will throw error now
console.log("----------------Shorthand initialization-------------------------");
var Department5 = /** @class */ (function () {
    function Department5(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department5.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    return Department5;
}());
var accounting5 = new Department5("id1", "Accounting");
console.log(accounting5);
accounting5.describe();
console.log("----------------Readonly property-------------------------");
var Department6 = /** @class */ (function () {
    function Department6(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department6.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department6.prototype.addEmployee = function (employee) {
        // this.id = 'd2'; //will throw error
        this.employees.push(employee);
    };
    return Department6;
}());
console.log("----------------Inheritance-------------------------");
//inherits from Department
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ITDepartment;
}(Department6));
var accounting6 = new ITDepartment("id2", "ITD");
console.log(accounting6);
var ITDepartment2 = /** @class */ (function (_super) {
    __extends(ITDepartment2, _super);
    function ITDepartment2(id, admins) {
        var _this = _super.call(this, id, "IT") || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment2;
}(Department6));
var it = new ITDepartment2("id3", ["Max", "Rich"]);
console.log(it);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department6));
var accDep = new AccountingDepartment("id4", []);
accDep.addReport("Something went wrong!");
accDep.printReports();
console.log("----------------Overriding Properties & Protected-------------------------");
var AccountingDepartment2 = /** @class */ (function (_super) {
    __extends(AccountingDepartment2, _super);
    function AccountingDepartment2(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    //overriding
    //AccountingDepartment2 doesnt have direct access to this.employees as it is a private property
    AccountingDepartment2.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        // this.employees.push(name); //error as employees is private
    };
    return AccountingDepartment2;
}(Department6));
//Solution--------------
var Department7 = /** @class */ (function () {
    function Department7(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department7.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department7.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department7;
}());
var AccountingDepartment3 = /** @class */ (function (_super) {
    __extends(AccountingDepartment3, _super);
    function AccountingDepartment3(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment3.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name); //no error
    };
    return AccountingDepartment3;
}(Department7));
var accDep3 = new AccountingDepartment3("id4", []);
accDep3.addEmployee("Samuel");
console.log(accDep3);
console.log("----------------Getters and Setters-------------------------");
var AccountingDepartment4 = /** @class */ (function (_super) {
    __extends(AccountingDepartment4, _super);
    function AccountingDepartment4(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        _this._lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment4.prototype, "lastReport", {
        get: function () {
            if (this._lastReport) {
                return this._lastReport;
            }
            throw new Error("No report found!");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass valid value!");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment4.prototype.addReport = function (report) {
        this.reports.push(report);
        this._lastReport = report;
    };
    AccountingDepartment4.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment4;
}(Department7));
var accDep4 = new AccountingDepartment4("id5", []);
accDep4.addReport("Something went wrong!");
console.log(accDep4.lastReport); //access the getter lastReport as a property not as a method
accDep4.lastReport = "new report"; //using the setter to add new report
console.log(accDep4.lastReport);
console.log("----------------Static Method and properties-------------------------");
var Department8 = /** @class */ (function () {
    function Department8(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        // console.log(this.fiscalyear); //will give an error as this corresponds to the instance of the class whereas static properties are available on the class itself
        console.log(Department8.fiscalyear);
    }
    Department8.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department8.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department8.createEmployee = function (name) {
        return { name: name };
    };
    Department8.fiscalyear = 2020;
    return Department8;
}());
var employee1 = Department8.createEmployee("Rich");
console.log(employee1, Department8.fiscalyear);
console.log("----------------Abstract Classes-------------------------");
var Department9 = /** @class */ (function () {
    function Department9(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department9.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department9;
}());
var ITDepartment9 = /** @class */ (function (_super) {
    __extends(ITDepartment9, _super);
    function ITDepartment9(id, admins) {
        var _this = _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
    }
    ITDepartment9.prototype.describe = function () {
        console.log('IT department' + this.id);
    };
    return ITDepartment9;
}(Department9));
var it9 = new ITDepartment9("id9", ["Max", "Rich"]);
it9.describe();
console.log("----------------Singletons and Private Constructors-------------------------");
var AccountingDepartment5 = /** @class */ (function (_super) {
    __extends(AccountingDepartment5, _super);
    function AccountingDepartment5(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        _this._lastReport = reports[0];
        return _this;
    }
    //will only declare the AccountingDepartment5 object once and every other time it will return its instance
    AccountingDepartment5.getInstance = function () {
        if (AccountingDepartment5.instance) {
            return AccountingDepartment5.instance;
        }
        this.instance = new AccountingDepartment5('id5', []);
        return this.instance;
    };
    return AccountingDepartment5;
}(Department7));
// const accDep5 = new AccountingDepartment5("id5", []); //error as constructor is private
var accDep5 = AccountingDepartment5.getInstance();
var accDep6 = AccountingDepartment5.getInstance();
console.log(accDep5, accDep6); // both will be same as only singleton pattern causes only object to be created
console.log("----------------Abstract Classes-------------------------");
