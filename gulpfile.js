// Gulpfile for minifying repository.

var gulp = require('gulp');
// var coffee = require('gulp-coffee'); 
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['js', 'css']);

gulp.task('js', function(){
	return gulp.src('./js/src/*.js')
	.pipe(uglify()) 
	.pipe(rename({extname: '.min.js'}))
	.pipe(gulp.dest('./js/'));
});

gulp.task('css', function(){
	return gulp.src('./css/src/*.css')
	.pipe(autoprefixer('last 2 versions')) 
	.pipe(gulp.dest('./css/')) 
	.pipe(minifyCss()) 
	.pipe(rename({extname: '.min.css'})) 
	.pipe(gulp.dest('./css/'));
});