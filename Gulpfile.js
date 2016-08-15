var gulp = require('gulp');
var config = require('./gulp.config')();

var $ = require('gulp-load-plugins')({lazy:true});
var del = require('del');
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

gulp.task('styles',function () {
    return gulp.src(config.less)
        .pipe($.debug({title: 'debug1:'}))
        .pipe($.plumber())
        .pipe($.less())
        .pipe($.autoprefixer({browser:['last 2 version','> 5%']}))
        .pipe(gulp.dest(config.temp));
});

gulp.task('less-watcher' ,function () {
    gulp.watch([config.less],['styles']);

})



gulp.task('clean_styles' ,function (done) {
   var files = config.temp ;
    console.log( "sdsdds" + files);
    clean(files,done);

});
function clean (path,done){
    console.log( "del " + path);
    del(path,done);
}






