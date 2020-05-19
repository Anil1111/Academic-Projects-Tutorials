"use strict";
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
var Department = (function () {
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
accountingCopy.describe();
var Department2 = (function () {
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
console.log("----------------Access Modifiers-------------------------");
var Department3 = (function () {
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
accounting3.describe();
accounting3.printEmployeeInformation();
var Department4 = (function () {
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
console.log("----------------Shorthand initialization-------------------------");
var Department5 = (function () {
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
var Department6 = (function () {
    function Department6(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department6.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department6.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department6;
}());
console.log("----------------Inheritance-------------------------");
var ITDepartment = (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ITDepartment;
}(Department6));
var accounting6 = new ITDepartment("id2", "ITD");
console.log(accounting6);
var ITDepartment2 = (function (_super) {
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
var AccountingDepartment = (function (_super) {
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
var AccountingDepartment2 = (function (_super) {
    __extends(AccountingDepartment2, _super);
    function AccountingDepartment2(id, reports) {
        var _this = _super.call(this, id, "IT") || this;
        _this.reports = reports;
        return _this;
    }
    AccountingDepartment2.prototype.addEmployee = function (name) {
        if (name === "Max") {
            return;
        }
    };
    return AccountingDepartment2;
}(Department6));
var Department7 = (function () {
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
var AccountingDepartment3 = (function (_super) {
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
        this.employees.push(name);
    };
    return AccountingDepartment3;
}(Department7));
var accDep3 = new AccountingDepartment3("id4", []);
accDep3.addEmployee("Samuel");
console.log(accDep3);
console.log("----------------Getters and Setters-------------------------");
var AccountingDepartment4 = (function (_super) {
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
                throw new Error('Please pass valid value!');
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
console.log(accDep4.lastReport);
accDep4.lastReport = 'new report';
console.log(accDep4.lastReport);
console.log("----------------Getters and Setters-------------------------");
//# sourceMappingURL=app.js.map