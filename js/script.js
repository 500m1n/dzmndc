function getJSONData() {
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback?";
    $.getjSON(flickrAPI, {
            id: "165128840@N04",
            format: "json",
        },
        doneFn
    );
}

function doneFn (result){
    for (var i=0; i<result.items.length; i++){
        console.log(result.items[i].link);
        var img = $('<img>');
        image.attr('src', result.items[i].media.m);
        image.attr('height', '100');
        image.attr('padding', '10px');
        $('#content').append(image);
    }
}

$(document).ready(function(){
    getJSONData();
});