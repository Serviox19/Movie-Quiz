$(document).ready(function () {

  var apiKey = "7994f4e755abfbedc336fd963e4a1bb3";
  var apiUrl = "https://api.themoviedb.org";
  apiUrl += "/3/discover/movie";
  apiUrl += "?api_key=" + apiKey;
  apiUrl += "&with_people=287";
  apiUrl += "&sort_by=popularity.desc";

  $.getJSON(apiUrl, function (data) {
    for (var i = 0; i < data.results.length; i++) {
      var movies = data.results[i];
      console.log(movies);

      $('#content').append('<div class="col-md-4">\
                              <div class="thumbnail">\
                                <img src="https://image.tmdb.org/t/p/w500' + movies.backdrop_path +'" alt="">\
                                <div class="caption">\
                                  <h3>'+ movies.title +'</h3>\
                                  <p><a href="#" class="btn btn-primary" role="button">Info</a> <a href="#" class="btn btn-default" role="button">Quiz</a></p>\
                                </div>\
                              </div>\
                            </div>');
    }
  });

});
