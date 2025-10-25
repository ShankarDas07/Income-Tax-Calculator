const form = document.getElementById('form'); // tag bases select
const income = document.getElementById('Income'); // id bases select
const result = document.querySelector('h2'); // tag bases select


form.addEventListener('submit', (e)=>{
    const amount = parseInt(income.value); // because all value are string we are also convert into string 
    e.preventDefault();
    let totalTax = 0;

    if(amount<= 1200000) totalTax = 0;
    else if(amount<=1600000){
        totalTax = (amount-1200000) * 0.15;
    }
    else if(amount<=2000000){
        totalTax = (amount-1600000) * 0.20 + 60000;
    }
    else if(amount<=2400000){
        totalTax = (amount-2000000) * 0.25 + 60000 + 80000;
    }
    else {
        totalTax = (amount-2400000) * 0.30 + 60000 + 80000 + 100000;
    }

    result.textContent = `Total Tax  : ${totalTax}`
    e.reset();
})