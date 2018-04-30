var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

// Compile sass
gulp.task('sass', function () {
  gulp.src('components/stylesheet/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// Uglify Javascripts
gulp.task('compress', function() {
  return gulp.src('components/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Watching files
gulp.task('watch', function() {
	browserSync.init({
    server: './',
    browser: "google chrome"
  });

  gulp.watch("components/scripts/*.js", ['compress']);
  gulp.watch("components/stylesheet/**/*.scss", ['sass']);
  gulp.watch("*.html").on('change', browserSync.reload);
});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['components/libs/jquery/dist/jquery.js', 'components/libs/popper.js/dist/umd/popper.js', 'components/libs/owl.carousel/dist/owl.carousel.js', 'components/libs/bootstrap/dist/js/bootstrap.js', 'components/libs/gsap/src/uncompressed/TweenMax.js', 'components/libs/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js', 'components/libs/jasny-bootstrap/dist/js/jasny-bootstrap.js'])
/*    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))*/
    .pipe(uglify())
    .pipe(concat('plugin-min.js'))
    .pipe(gulp.dest('js'));
});

// Minify Plugins CSS files
gulp.task('minifyPlugins', function() {
  return gulp.src(['components/libs/owl.carousel/dist/assets/owl.carousel.css', 'components/libs/font-awesome/css/font-awesome.css', 'components/libs/jasny-bootstrap/dist/css/jasny-bootstrap.css' ])
/*    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
*/
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concat('plugin-min.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('icons', function() { 
    return gulp.src('components/libs/font-awesome/fonts/**.*') 
        .pipe(gulp.dest('fonts')); 
});

gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
gulp.task('default', ['watch']);
