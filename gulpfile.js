const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function comprimeImagens() {
    return gulp.src('./souce/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'));
}

function compilaSass(){
    return gulp.src('./souce/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJavaScript() {
    return gulp.src('./souce/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}


exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;