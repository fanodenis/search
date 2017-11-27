var url = "http://80.12.13.71/search/compass/SearchVideos?text=gravity&max_results=10&image_name=COVER_4&fuzzy=true&services=2424VIDEO,SVODTEMATIC&from=0&count=10&client=json&content_type=movie";
var request = new XMLHttpRequest();
request.open("GET", url, true);
request.onreadystatechange = function() {
if (request.readyState == 4) {
if (request.status == 200 || request.status == 304) {
var response = eval(request.responseText); // convert the response
text to javascript objects
// do something with response
}
}
}
request.send(null);
