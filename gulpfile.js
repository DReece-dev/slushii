const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');
const mergeMediaQueries = require('gulp-merge-media-queries');
const plumber = require('gulp-plumber');
const cached = require('gulp-cached');

gulp.task('css', function () {
    let processors = [
        autoprefixer
    ];
    return gulp.src('./src/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cached('css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(mergeMediaQueries())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('mini', () => {
    let nano = [
        cssnano
    ];
    return gulp.src('./dist/*.css')
        .pipe(gulpif(process.env.NODE_ENV === 'production', postcss(nano)))
        .pipe(rename({ suffix: '.min' }))
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
});

gulp.task('watch', function () {
    gulp.watch('./src/*.scss', gulp.series('css'));
});

gulp.task('default', gulp.series(gulp.parallel('css', 'mini'), 'watch'));
