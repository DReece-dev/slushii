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

gulp.task('base', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/slushii-base.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('utlis', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/slushii-utilities.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('grid', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/slushii-grid.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dist'));
});

gulp.task('purgecss', () => {
    return gulp.src('./dist/slushii.css')
        .pipe(purgecss({
            content: ['src/**/*.html']
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