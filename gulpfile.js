const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const postcssPresetEnv = require('postcss-preset-env');

gulp.task('css', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('purgecss', () => {
    return gulp.src('./dist/**/*.css')
        .pipe(purgecss({
            safelist: [],
            content: ['src/**/*.html'],
            defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('mini', () => {
    let nano = [
        cssnano
    ];
    return gulp.src('./dist/*.css')
        .pipe(postcss(nano))
        .pipe(gulp.dest('./dist'));
});