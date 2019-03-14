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
    
    return{
        fetchData: fetchData,
        getCountrynames: getCountrynames
    };
})();