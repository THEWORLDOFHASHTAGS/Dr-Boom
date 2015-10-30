
var countries = [
    {
        "country_name": "United States of America",
        "country_code": "USA"
    },
    {
        "country_name": "Japan",
        "country_code": "JPN"
    },
    {
        "country_name": "Russia",
        "country_code": "RUS"
    },
    {
        "country_name": "India",
        "country_code": "IND"
    },
    {
        "country_name": "Australia",
        "country_code": "AUS"
    },
    {
        "country_name": "Sweden",
        "country_code": "SWE"
    }
];

$(function(e) {
   
    for (i = 0; i < countries.length; i++) {
    $('#'+countries[i].country_code).data('country', countries[i]);
    }
    
    $('.map g').click(function() {
        var country_data= $(this).data('country');
        $('<div class="model">'+country_data.country_name+'<br><button class="close">close</button></div>').appendTo('body');
    }); 
    
    $('body').on('click', '.close', function() {
        $('.model').remove();
    });
});
