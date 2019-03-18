var api = (function(){

    async function fetchData(url)
    {
        let promise = await fetch(url);
        let data = await promise.json();
        return data;
    }

    async function storeData()
    {
        var currencies = await fetchData('https://api.exchangeratesapi.io/latest');
        localStorage.setItem("rates", JSON.stringify(currencies));
    }

    async function getCountrynames(rateslist)
    {
        let Countrylist = [];
        for(var item in rateslist) {
            let countrycode = item.substr(0, 2);
            let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${countrycode}`);
            let Country = await res.json();
            //console.log(Country.currencies[0].name);
            Countrylist.push(Country.currencies[0].name + " " + item.substr(0,3));
        };
        return Countrylist;
    }
    async function fillDropdowns()
    {
        //var currencies = await fetchData('https://api.exchangeratesapi.io/latest');
        var rates = localStorage.getItem("rates");
        var currencies = JSON.parse(rates);
        var CountryList = await getCountrynames(currencies.rates);
    
        var list = document.getElementById("countryList");
        var list2 = document.getElementById("countryList2");
        CountryList.forEach(function(item) {
            var option = document.createElement('option');
            var arr = item.split(" ");
            var name = "";
            for(var i = 0; i < arr.length -1; i ++)
            {
                name =name + arr[i] + " ";
            }
            option.value = name;
            option.innerHTML = arr.pop(); 
            list.appendChild(option);
            //list2.appendChild(option);
          });
    }

    async function getExchange(fromCurr, toCurr)
    {
        console.log(fromCurr);
        console.log(toCurr);
        let rate;
        let storeddata = localStorage.getItem(fromCurr + toCurr);
        if(storeddata == null)
        {
            //promise = await fetch(`https://api.exchangeratesapi.io/latest?symbols=${fromCurr},${toCurr}`);
            var rates = await fetch(`https://api.exchangeratesapi.io/latest?base=SEK&symbols=USD`);
            rate = rates.json();
            console.log(rate);
        }
        else
        {
            rate = JSON.parse(storeddata);
        }
        var amount = document.querySelector("#Amount");

        document.querySelector("#toResult").value = amount * rate;
        
    }
    
    return{
        fetchData: fetchData,
        getCountrynames: getCountrynames,
        fillDropdowns: fillDropdowns,
        storeData: storeData,
        getExchange: getExchange
    };
})();