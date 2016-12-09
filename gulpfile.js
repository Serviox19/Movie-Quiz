var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    watch      = require('gulp-watch'),
    concat     = require('gulp-concat'),
    rename     = require('gulp-rename'),
    plumber    = require('gulp-plumber'),
    minify_css = require('gulp-minify-css');

gulp.task('styles', function () {
  gulp.src('./src/css/index.sass')
  .pipe(plumber())
  .pipe(sass({ style: 'compressed' }))
  .pipe(minify_css())
  .pipe(concat('style.min.css'))
  .pipe(gulp.dest('./build/css'))
});


gulp.task('watch', function () {
  gulp.watch('./src/css/**/*.sass', ['styles'])
});

gulp.task('default', ['watch', 'styles']);
