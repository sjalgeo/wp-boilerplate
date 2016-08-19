var gulp          = require('gulp');
var autoprefixer  = require('gulp-autoprefixer');
var sass          = require('gulp-sass');

gulp.task('default', function(){
  // default task
  console.log('default gulp task')
});

var sassFiles = './sass/**/*.sass';

// Let's get sassy; prefix and minify our stylesheet
gulp.task('sass', function(){
  gulp.src(sassFiles)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./'));
});

// Watch
gulp.task('sass:watch', function(){
  gulp.watch(sassFiles, ['sass'])
});

// Just run `$ gulp` in the terminal to compile everything and watch sass
gulp.task('default', ['sass', 'sass:watch']);
