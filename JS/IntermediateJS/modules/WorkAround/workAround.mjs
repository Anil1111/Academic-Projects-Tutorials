// import Employee from './employee.mjs';
// import {Employee, cadre, tax, benefits, bonus, reimbursement} from './employee.mjs';

 import Employee from './employee.mjs';
 import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from './employee.mjs';

// function getEmployeeInformation(inputSalary) {
//   Employee.salary = inputSalary;
//   console.log('Cadre: ' + cadre());
//   console.log('Tax: ' + tax());
//   console.log('Benefits: ' + benefits());
//   console.log('Bonus: ' + bonus());
//   console.log('Reimbursement Eligibility: ' + reimbursement() + '\n');
// }

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);