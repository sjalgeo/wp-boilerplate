var gulp          	= require('gulp');
var replace 		= require('gulp-replace');
var autoprefixer  	= require('gulp-autoprefixer');
var sass          	= require('gulp-sass');
var fs				= require('fs');

var sassFiles = './sass/**/*.sass';

var themeNamePlaceholder = '{{{THEME_NAME}}}';
var currentThemeName = 'UPDATED THEME NAME';
var currentVersion = '0.1.0';


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

// Config File
gulp.task('config', function() {
	var directory = 'config';
	var filename = 'version.php';
	var filepath = directory + '/' + filename;

	try {
		fs.mkdir(directory, null, function(){});
	} catch (e) {
		if (e.code !== 'EEXIST') throw e;
	}

	fs.open(filepath, 'w');
	var phpConstants = "define";
	fs.writeFile(filepath, currentVersion);
});

// Just run `$ gulp` in the terminal to compile everything and watch sass
gulp.task('default', [
	// 'sass:watch',
	'config',
	'sass'
]);