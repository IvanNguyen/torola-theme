var postcss = require('gulp-postcss');
var gulp = require('gulp');

var browserSync = require('browser-sync').create(); // auto load the page when the index file change
var precss = require ('precss');
var advancedVariables = require('postcss-advanced-variables');
var cssnext = require('postcss-cssnext');
// var cssnano = require('cssnano');
var extendRule = require('postcss-extend-rule');
var nestedProps = require('postcss-nested-props');
// var filterGradient = require('postcss-filter-gradient');
// var oldie = require('oldie');
// var autoprefixer = require('autoprefixer');
// var colorHwb = require('postcss-color-hwb');
// var awesome = require ('postcss-font-awesome');
// var postcssFlexbox = require ('postcss-flexbox');
// var fontMagician = require ('postcss-font-magician');

gulp.task('serve', ['css'], function(){

    browserSync.init({
        server: "./"
    });

    gulp.watch("./css/*.css", ['css']).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('css', function(){
    var plugins = [
        // postcssFlexbox(),
        // fontMagician(),
        // awesome(),
        precss(),
        advancedVariables(),
        // cssnano(),
        cssnext(),
        extendRule(),
        nestedProps()
        
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});

gulp.task('default', ['serve']);
