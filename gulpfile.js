var gulp = require('gulp'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    del = require('del'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    gulpJade = require('gulp-jade'),
    jade = require('jade'),
    data = require('gulp-data'),
    path = require('path'),
    fs = require('fs'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    process = require('child_process');

// Error handling - Send error to notification center with gulp-notify
var handleErrors = function() {
  notify.onError({
    title: "Compile Error",
    message: "<%= error.message %>"
  }).apply(this, arguments);
  this.emit('end');
};

gulp.task('clean-html', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['public/dist/**/*.html'], cb);
});
gulp.task('clean-css', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['public/dist/css/*.css'], cb);
});
gulp.task('clean-js', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['public/dist/js/*.js'], cb);
});

gulp.task('default', ['browser-sync', 'watch']);

// Watch task
gulp.task('watch', function() {
  gulp.watch('public/src/templates/**/*.jade', ['jade','assets']);
  gulp.watch('public/src/sass/**/*.scss', ['sass','assets']);
  gulp.watch('public/src/js/**/*.js', ['assets']);
});

//SASS Task
gulp.task('sass', ['clean-css'], function() {
    gulp.src('public/src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/dist/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify('Css task complete!'));
});

//Assets Task
gulp.task('assets', ['clean-js'], function() {
    gulp.src('public/src/fonts/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('public/dist/fonts/'));
    gulp.src('public/src/images/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('public/dist/images/'));
    gulp.src('public/src/js/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('public/dist/js/'));
    gulp.src('public/src/vendor/**/*.*')
        .pipe(plumber())
        .pipe(gulp.dest('public/dist/vendor/'));
});

// Jade task
gulp.task('jade', ['clean-html'], function() {
  return gulp.src('public/src/templates/**/*.jade')
    .pipe(plumber())
    .pipe(changed('dist', {extension: '.html'}))
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('public/dist/'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify('Templates task complete!'));
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
    script: 'server.js'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
  });
});
gulp.task('browser-sync', ['jade','sass','assets', 'nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        port: 7000,
	});
});
// Browser-sync task
//gulp.task('browser-sync', ['jade','sass','assets'], function() {
//  return browserSync.init(null, {
//    server: {
//      baseDir: 'dist'
//    }
//  });
//});