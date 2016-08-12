var gulp = require('gulp');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy:true});
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');

gulp.task('hello-world' ,function (){
    console.log('hello');
});


gulp.task('lint', function() {
    return gulp.src(config.allJs)
        .pipe($.jshint())
        .pipe($.jshint.reporter($.stylish))
        .pipe($.print(function (filepath){
            return "built  :" + filepath;
        }));
});




