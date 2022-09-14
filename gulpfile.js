const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

function css() {
    return gulp.src('dev/css/*')
        .pipe(sourcemaps.init())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
}

exports.default = css