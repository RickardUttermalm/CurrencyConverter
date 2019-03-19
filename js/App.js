Init();

async function Init(){
    await api.storeData();
    await api.fillDropdowns();

    const Result = document.querySelector("#toResult");
    const fromCurr = document.querySelector("#fromCurrency");
    const toCurr = document.querySelector("#toCurrency");
    const Amount = document.querySelector("#Amount");
    Amount.addEventListener("keydown", function(){api.getExchange(fromCurr.value, toCurr.value)});
    Amount.addEventListener("change", function(){api.getExchange(fromCurr.value, toCurr.value)});
    
}