const express = require('express'),
      app = express(),
      PORT = process.env.PORT || 3000,
      logger = require('morgan'),
      movieRouter = require('./router/movie');


app.use(logger('dev'));
app.use(express.static("src"));
app.use("/src", express.static(__dirname + "/src"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.use('/movies', movieRouter);

app.get('*', function (req, res) {
 res.sendFile(process.cwd() + '/index.html');
});


app.listen(PORT, function (req, res) {
 console.log('Listening on PORT: ' + PORT);
});
