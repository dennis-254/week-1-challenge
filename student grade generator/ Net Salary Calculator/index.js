
const salary = document.getElementById("salary");
const benefits = document.getElementById("benefits");
let gSalary;
let benefit;
let taxablePay;
const nssf = 200;
let PAYE;

// calculating PAYE
function netSalary(){
    let gSalary = salary.value;
    const benefit = benefits.value;
    let PAYE;
    const taxablePay = gSalary - benefit;
    gSalary = salary.value;
    benefit = benefits.value;
    taxablePay = gSalary - benefit;
}
    document.getElementById("grossP").textContent = `Your gross salary is ${gSalary} KSH`;
    document.getElementById("benefitP").textContent = `Your benefits totals to ${benefit} KSH`;
    document.getElementById("taxable").textContent = `Your taxable pay totals to ${taxablePay} KSH`;
    document.getElementById("NSSF").textContent = `NSSF old rates total to ${nssf} KSH`;

    if(taxablePay < 24000)
        PAYE = (taxablePay * 10)/100;
 function netSalary(){

}

// calculating NHIF fee
let NHIF;
function switchStatement(){
     let grossSalary = salary.value;
let NHIF;
    switch (true) {
        case (grossSalary <= 5999):
            NHIF = 150;
            console.log(NHIF);
            break;
        case (grossSalary >= 6000 && grossSalary <= 7999):
            NHIF = 300; function switchStatement(){
            break;
        default: 
            NHIF = "Invalid amount."
            break;


        return NHIF;
            }
    }
    document.getElementById("nhif").textContent = `Your NHIF pay totals to ${NHIF} KSH`;
    return NHIF;
}

function nssfPay(){

}
// calculating and displaying net salary
 function netSalaryAfter(){
    const netSalaryAll = (gSalary - PAYE - nssf - NHIF);
 
 }