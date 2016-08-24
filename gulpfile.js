var gulp          	= require('gulp');
var replace 		= require('gulp-replace');
var autoprefixer  	= require('gulp-autoprefixer');
var sass          	= require('gulp-sass');

var sassFiles = './sass/**/*.sass';

var themeNamePlaceholder = '{{{THEME_NAME}}}';
var currentThemeName = 'UPDATE THEME NAME';


// Let's get sassy; prefix and minify our stylesheet
gulp.task('sass', function(){
	gulp.src(sassFiles)
	  .pipe(sass.sync().on('error', sass.logError))
	  .pipe(autoprefixer('last 2 versions'))
	  .pipe(replace(themeNamePlaceholder, currentThemeName))
	  .pipe(gulp.dest('./'));
});

// Watch
gulp.task('sass:watch', function(){
	gulp.watch(sassFiles, ['sass'])
});

// Just run `$ gulp` in the terminal to compile everything and watch sass
gulp.task('default', [
	// 'sass:watch',
	'sass'
]);
