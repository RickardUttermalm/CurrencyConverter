var api = (function(){

    async function fetchData(url)
    {
        let promise = await fetch(url);
        let data = await promise.json();
        return data;
    }

    async function getCountrynames(rateslist)
    {
        let Countrylist = [];
        for(var item in rateslist) {
            let countrycode = item.substr(0, 2);
            let res = await fetch(`https://restcountries.eu/rest/v2/alpha/${countrycode}`);
            let Country = await res.json();
            //console.log(Country.currencies[0].name);
            Countrylist.push(Country.currencies[0].name + " (" + item.substr(0,3) + ")");
        };
        return Countrylist;
    }
    async function fillDropdowns()
    {
        var currencies = await fetchData('https://api.exchangeratesapi.io/latest');
        console.log(currencies);
        var CountryList = await getCountrynames(currencies.rates);
        console.log(CountryList);
    
        var list = document.getElementById("countryList");
        console.log(list);
        CountryList.forEach(function(item) {
            var option = document.createElement('option');
            option.value = item;
            option.innerHTML = item.split("(").pop().substring(0, 3); 
            list.appendChild(option);
          });
    }
    
    return{
        fetchData: fetchData,
        getCountrynames: getCountrynames,
        fillDropdowns: fillDropdowns
    };
})();