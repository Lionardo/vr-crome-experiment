var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('scripts', function () {
	gulp.src('static/js/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});


gulp.task('sass', function () {
	gulp.src('./private/sass/**/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function () {
	gulp.watch('./private/sass/**/*.scss', ['sass']);
	gulp.watch('./static/js/*.js', ['scripts']);
});

gulp.task('default', ['watch']);
