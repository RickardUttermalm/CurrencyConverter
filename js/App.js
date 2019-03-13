Init();

function Init(){
    var test = ["test", "hojme", "knarkblod"];
    var list = document.getElementById("countryList");
    console.log(list);
    test.forEach(function(item) {
        // Create a new <option> element.
        var option = document.createElement('option');
        // Set the value using the item in the JSON array.
        option.value = item;
        // Add the <option> element to the <datalist>.
        list.appendChild(option);
      });
}