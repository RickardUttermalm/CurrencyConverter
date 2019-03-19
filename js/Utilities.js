var utilities = (function(){
    
    function getExchange()
    {
        var storeddata = localStorage.getItem("currentrate");
        let rate = JSON.parse(storeddata);
        console.log(rate + " cached");
        let amount = document.querySelector("#Amount");
        document.querySelector("#toResult").value = amount.value * rate;
         
    }

    return{
        getExchange: getExchange
    };
})();