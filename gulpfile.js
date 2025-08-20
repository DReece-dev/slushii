// Require necessary Gulp plugins
/* eslint-env es6, node */
const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const gulpif = require("gulp-if");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const cached = require("gulp-cached");

// Task: Compile SCSS files to CSS
gulp.task("css", function () {
    let processors = [autoprefixer];
    return gulp
        .src("./src/*.scss")
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(cached("css"))
        .pipe(sass().on("error", sass.logError))
        .pipe(postcss(processors))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dist"));
});

// Task: Minify CSS files
gulp.task("mini", () => {
    let nano = [cssnano];
    // Minify CSS files in ./dist only if NODE_ENV is 'production'
    return gulp
        .src("./dist/*.css")
        .pipe(gulpif(process.env.NODE_ENV === "production", postcss(nano)))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"));
});

// Task: Remove unused CSS rules
gulp.task("purgecss", () => {
    // Configure PurgeCSS options
    return gulp
        .src("./dist/**/*.css")
        .pipe(
            purgecss({
                safelist: [], // no explicit safelist
                content: ["src/**/*.html"], // use HTML files to determine used CSS rules
                defaultExtractor: (content) =>
                    content.match(/[\w-/:]+(?<!:)/g) || [], // extract CSS selectors
            }),
        )
        .pipe(gulp.dest("./dist")); // output to ./dist
});

// Task: Watch for changes to SCSS files
gulp.task("watch", function () {
    gulp.watch("./src/*.scss", gulp.series("css"));
});

// Default task: Run 'css' and 'mini' tasks in parallel, then watch for changes
gulp.task("default", gulp.series(gulp.parallel("css", "mini"), "watch"));
