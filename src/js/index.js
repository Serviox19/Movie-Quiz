$(document).ready(function () {

  var apiKey = "7994f4e755abfbedc336fd963e4a1bb3";
  var apiUrl = "https://api.themoviedb.org";
  apiUrl += "/3/discover/movie";
  apiUrl += "?api_key=" + apiKey;
  apiUrl += "&with_people=287";
  apiUrl += "&sort_by=popularity.desc";


  $.getJSON(apiUrl, function(data) {
    for (var i = 0; i < data.results.length; i++) {
      var movies = data.results[i];
      console.log(movies);
      var release_date = moment(movies.release_date).format('MMMM Do YYYY');

      $('#content').append(
        '<div class="col-xs-12 col-md-4">\
          <div class="thumbnail">\
            <img src="https://image.tmdb.org/t/p/w500' + movies.backdrop_path +'" alt="">\
            <div class="caption">\
              <h3>'+ movies.title +'</h3>\
              <p class="thumbnail-actions">\
                <a class="btn btn-primary" data-toggle="modal" data-target="#'+ movies.id +'">Info</a>\
                <a class="btn btn-default" href="/movies/'+ movies.id +'">Quiz</a>\
              </p>\
            </div>\
          </div>\
        </div>\
        <div class="modal fade" id="'+ movies.id +'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">\
          <div class="modal-dialog" role="document">\
            <div class="modal-content">\
              <div class="modal-header">\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                  <span aria-hidden="true">&times;</span>\
                </button>\
                <h3 class="modal-title" id="myModalLabel">'+ movies.title +'</h3>\
              </div>\
              <div class="modal-body">\
                <p>'+ movies.overview +'</p>\
                <p>Release Date:&nbsp;&nbsp;<strong>'+ release_date +'</strong></p>\
              </div>\
              <div class="modal-footer">\
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>\
              </div>\
            </div>\
          </div>\
        </div>');
    }; // End content loop
  });
});
