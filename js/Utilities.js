var utilities = (function(){
    
    function getExchange()
    {
        var storeddata = localStorage.getItem("currentrate");
        let rate = JSON.parse(storeddata);
        console.log(rate + " cached");
        let amount = document.querySelector("#Amount");
        document.querySelector("#toResult").value = amount.value * rate;        
    }

    function getReverseExchange()
    {
        var storeddata = localStorage.getItem("currentrate");
        let rate = JSON.parse(storeddata);
        console.log(rate + " cached");
        let result = document.querySelector("#toResult");
        document.querySelector("#Amount").value = result.value / rate;        
    }

    return{
        getExchange: getExchange,
        getReverseExchange: getReverseExchange
    };
})();