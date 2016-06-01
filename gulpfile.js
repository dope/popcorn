/**
* The packages we are using
**/
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");


/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/
gulp.task('sass', function() {
    gulp.src('scss/*.scss')
    .pipe(sass())
        .on('error', sass.logError)
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
    .pipe(gulp.dest('dist'))
    .pipe(sass({outputStyle: 'compressed'}))
        .on('error', sass.logError)
    .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
    .pipe(rename({
        suffix: ".min",
    }))
    .pipe(gulp.dest('dist'));
});

/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
    browserSync.init(['dist/*.css', 'dist/*.js', 'index.html'], {
        server: {
            baseDir: './'
        }
    });
});

/**
* Move Icons to src
*/
gulp.task('icons', function() {
    gulp.src('icons/**/*')
    .pipe(gulp.dest('dist/icons'));
});


/**
*
* Javascript
* - Uglify
*
**/
gulp.task('scripts', function() {
    gulp.src('js/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({
        suffix: ".min",
    }))
    .pipe(gulp.dest('dist'));
});

/**
*
* Default task
* - Builds out sass, scripts and icons.
*
**/
gulp.task('default', ['sass', 'scripts', 'icons']);

/**
*
* Watch Task
* - Runs sass, browser-sync, scripts and icons tasks
* - Watchs for file changes for icons, scripts and sass/css
*
**/
gulp.task('watch', ['sass', 'browser-sync', 'scripts', 'icons'], function () {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('icons/*', ['icons']);
});