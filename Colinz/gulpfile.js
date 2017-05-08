var gulp = require('gulp');

var spritesmith = require('gulp.spritesmith');

var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

var imagemin = require('gulp-imagemin');

gulp.task('sprite', function () {
  return gulp.src('src/png/*.png')
    .pipe(spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.css',
      padding: 2
    }))
    .pipe(gulp.dest('src/img/'));
});

gulp.task('html', function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('./'))
});

gulp.task('css', function(){
	return gulp.src('src/css/main.css')
		.pipe(cleanCSS())
		.pipe(gulp.dest('css/'))
});

gulp.task('js', function(){
  return gulp.src('src/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
});

gulp.task('img', function(){
  return gulp.src('src/img/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/'))
});

gulp.task('fonts', function(){
  return gulp.src('src/fonts/**/*.*')
        .pipe(gulp.dest('fonts/'))
});

gulp.task('default', ['html', 'css', 'js', 'img', 'fonts']);