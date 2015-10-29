var countries = [
    {
        "country_name": "United States of America",
        "country_code": "Usa",
        "population": 900000
    }
]
var temp_array= countries.map(function(item)) {
                              return item.population;
                              });
for (i = 0; i < countries.length; i++) {
    $('#'+ countries[i].country_code)
    .css({'fill': 'rgba(11, 104, 170,' 
         + countries[i].population/highest_value 
         +')'}).data('country', countries[i]);
}
$(document).ready(function(e) {
    
    $('.map g').click(function() {
        var country_data= $(this).data('country');
       $('<div class="model"><h2>Vive la France!</h2><button class="close">close</button></div>').appendTo('body');
    }); 
    
    $('body').on('click', '.close', function() {
        $('.model').remove();
    });
});
