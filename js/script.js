var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.flickr.com/services/rest/?method=flickr.people.getPhotos&api_key=0cd6f618bad7076ac88fc8f7f1b5cbdb&user_id=165128840@N04&format=json&nojsoncallback=1",
	"method": "GET",
	"headers": {}
  }
  
  $.ajax(settings).done(function (data) {
	console.log(data);
	

$("#galleryTitle").append(data.photos.photo[0].title + " Gallery");
$.each( data.photos.photo, function( i, gp ) {

var farmId = gp.farm;
var serverId = gp.server;
var id = gp.id;
var secret = gp.secret;

console.log(farmId + ", " + serverId + ", " + id + ", " + secret);

//  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

$("#content").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');

});
});
