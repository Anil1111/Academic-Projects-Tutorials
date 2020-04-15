const employee = require('./employee.js');

function getEmployeeInformation(inputSalary) {
  employee.salary = inputSalary;
  console.log('Cadre: ' + employee.getCadre());
  console.log('Tax: ' + employee.calculateTax());
  console.log('Benefits: ' + employee.getBenefits());
  console.log('Bonus: ' + employee.calculateBonus());
  console.log('Reimbursement Eligibility: ' + employee.reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);