var gulp = require('gulp'),
    gutil = require('gulp-util'),
    connect = require('gulp-connect'),
    less = require('gulp-less');

var paths = {
  views: ['./*.html'],
  scripts: ['./*.js'],
  styles: ['./*.less'],
  mainLess: './main.less'
};

gulp.task('connect', connect.server({
  root: [__dirname],
  port: 1337,
  livereload: true
}));

gulp.task('html', function() {
  gulp.src(paths.views)
    .pipe(connect.reload());
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(connect.reload());
});

gulp.task('styles', function() {
  gulp.src(paths.mainLess)
    .pipe(less())
    .pipe(gulp.dest('./'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.styles, ['styles']);
  gulp.watch(paths.views, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['connect', 'scripts', 'styles', 'watch']);
