Init();

async function Init(){
    var currencies = await api.fetchData('https://api.exchangeratesapi.io/latest');
    console.log(currencies);
    var CountryList = await api.getCountrynames(currencies.rates);
    console.log(CountryList);

    var list = document.getElementById("countryList");
    console.log(list);
    CountryList.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
      });
}