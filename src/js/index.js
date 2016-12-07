$(document).ready(function () {

  var apiKey = "7994f4e755abfbedc336fd963e4a1bb3";
  var apiUrl = "https://api.themoviedb.org";
  apiUrl += "/3/discover/movie";
  apiUrl += "?api_key=" + apiKey;
  apiUrl += "&with_people=287";
  apiUrl += "&sort_by=";

  $.getJSON(apiUrl, function (data) {
    for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i]);
    }
  });

});
