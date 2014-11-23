var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sequence = require('gulp-sequence');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');

gulp.task('sass', function(cb) {
    gulp.src('sass/offcanvasSidebar.scss')
      .pipe(sass())
      .pipe(gulp.dest('.'));
      if(cb){
      	cb();
      }
});

gulp.task('js',function(cb){


	gulp.src(['lib/modernizr.custom.js','offcanvasSidebar.min.js'])
	  .pipe(concat('offcanvasSidebar.bundle.min.js'))
	  .pipe(gulp.dest('.'));

	  if(cb){
	  	cb();
	  }
});

gulp.task('min-js', function(cb) {
  	gulp.src('offcanvasSidebar.js')
	  .pipe(uglify())
	  .pipe(rename('offcanvasSidebar.min.js'))
	  .pipe(gulp.dest('.'));

	gulp.src(['offcanvasSidebar.css'])
	  .pipe(uglifycss())
	  .pipe(rename('offcanvasSidebar.min.css'))
	  .pipe(gulp.dest('.'));
	  
	  if(cb){
	  	cb();
	  }
});

gulp.task('min-css', function(cb) {
	gulp.src(['offcanvasSidebar.css'])
	  .pipe(uglifycss())
	  .pipe(rename('offcanvasSidebar.min.css'))
	  .pipe(gulp.dest('.'));
	  
	  if(cb){
	  	cb();
	  }
});

gulp.task('copy-js', function(cb) {
    gulp.src(['offcanvasSidebar.js', 'offcanvasSidebar.min.js','offcanvasSidebar.bundle.min.js'])
    .pipe(gulp.dest('example/js'));

    gulp.src(['offcanvasSidebar.js', 'offcanvasSidebar.min.js','offcanvasSidebar.bundle.min.js'])
    .pipe(gulp.dest('example-bootstrap/js'));

    if(cb){
    	cb();
    }
});

gulp.task('copy-css', function(cb) {

    gulp.src(['offcanvasSidebar.css','offcanvasSidebar.min.css'])
    .pipe(gulp.dest('example/css'));

    gulp.src(['offcanvasSidebar.css','offcanvasSidebar.min.css'])
    .pipe(gulp.dest('example-bootstrap/css'));

    if(cb){
    	cb();
    }
});

gulp.task('dev', function() {
    gulp.watch(['sass/**/*.scss', 'offcanvasSidebar.js'],['build']);
});

gulp.task('build', function() {
    sequence('sass', 'js', ['min-js', 'min-css'], ['copy-js', 'copy-css'])();
});

