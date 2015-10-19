var countries = [
    {
        "country_name": "France",
        "country_code": "fr",
        "population": 900000
    }
]

$(document).ready(function(e) {
    
    $('g').click(function() {
        var div = $('<div class="model"><h2>Vive la France!</h2><button class="close">close</button></div>').appendTo('body');
    });
    
    $('body').on('click', '.close', function() {
        $('.model').remove();
    });
});
