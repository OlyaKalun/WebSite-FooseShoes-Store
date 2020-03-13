var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
   /* babel = require('gulp-babel'),*/
    sass = require('gulp-sass');
 
    gulp.task("concatScripts", function() {
        return gulp.src(['js/main.js'])
      
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js'));
      });
      
      gulp.task("minifyScripts", function() {
        return  gulp.src(['js/app.js'])
      
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js'));
      });

    /*  gulp.task("babelScript", function(){
      
        .pipe(babel())
        .pipe(gulp.dest("dist"));
      });*/
      
      gulp.task("compileSass", function() {
        return gulp.src([ 'scss/application.scss'])
      
        .pipe(sass())
        .pipe(gulp.dest('css'));
      });
      
      gulp.task("watchSass", function(){
        gulp.watch('scss/**/*.scss', gulp.parallel('compileSass'));
      })
     
    // gulp.task("build",['concatScripts','minifyScripts','compileSass']);

    gulp.task("default", function(done) {
        console.log('Yeah')
        done();
    });