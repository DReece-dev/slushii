const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

gulp.task('css', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('purgecss', () => {
    return gulp.src('./dist/**/*.css')
        .pipe(purgecss({
            safelist: [],
            content: ['src/**/*.html'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }))
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist'))
});

gulp.task('mini', () => {
    let nano = [
        cssnano
    ];
    return gulp.src('./dist/all.css')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(postcss(nano))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});
