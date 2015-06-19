
var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');


gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('babel', function() {
  gulp.src('./src/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./js'));
});

