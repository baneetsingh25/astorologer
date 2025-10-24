const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const income = document.querySelector("#income");
    const amount = parseInt(income.value);
    const result = document.querySelector("#result");
    let incomeTax = 0;
    
    if(amount<=1200000){
        incomeTax = 0;
    }
    else if (amount<=1600000) {
        incomeTax = (amount-1200000)*0.15;
    } 
    else if(amount<=2000000){
        incomeTax = (amount-1600000)*0.20 + 0.15*400000;
    }
    else if(amount<=2400000){
        incomeTax = (amount-2000000)*0.20 + 0.2*400000 + 0.15*400000;
    }
    else if(amount<=2400000){
        incomeTax = (amount-2000000)*0.25 + 0.2*400000 + 0.15*400000;
    }
    else if(amount<=2400000){
        incomeTax = (amount-2000000)*0.25 + 0.2*400000 + 0.15*400000;
    }
    else{
        incomeTax = (amount-2400000)*0.30 + 0.2*400000 + 0.15*400000 + 0.25*400000 ;
    }
        
    result.textContent = `Total Tax:${incomeTax}`;
    form.reset();
})
