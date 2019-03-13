Init();

function Init(){
    var test = ["test", "hojme", "knarkblod"];
    var list = document.getElementById("countryList");
    console.log(list);
    test.forEach(function(item) {
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
      });
}