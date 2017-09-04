var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var minifyCSS = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');




gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass()) // Конвертируем Sass в CSS с помощью gulp-sass
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});




gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('src/sass/**/*.scss', ['sass']); 
  // Обновляем браузер при любых изменениях в HTML или JS
  gulp.watch('src/*.html', browserSync.reload); 
  gulp.watch('src/js/**/*.js', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'src'
    },
  })
});



gulp.task('useref', function () {
    return gulp.src(['src/*.html', 'src/*.php'])
    	.pipe(useref())
    	// Минифицируем только CSS файлы
    	//.pipe(gulpIf('*.css', minifyCSS()))
	    // Uglifies only if it's a Javascript file
	    .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist'));
});


gulp.task('images', function(){
  return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
  // кэширование изображений, прошедших через imagemin
  .pipe(cache(imagemin({
      interlaced: true
    })))
  .pipe(gulp.dest('dist/img'))
});

gulp.task('fonts', function() {
  return gulp.src('src/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
});

gulp.task('uploads', function() {
  return gulp.src('src/uploads/**/*')
  .pipe(gulp.dest('dist/uploads'))
});

gulp.task('css', function() {
  return gulp.src('src/css/*/**')
  .pipe(gulp.dest('dist/css'))
});


gulp.task('js', function() {
  return gulp.src('src/js/**/*')
  .pipe(gulp.dest('dist/js'))
});

gulp.task('clean:dist', function(callback){
  del(['dist/**/*', '!dist/img', '!dist/img/**/*','!dist/fonts', '!dist/fonts/**/*', '!dist/uploads', '!dist/uploads/**/*', '!dist/js', '!dist/js/**/*'], callback)
});

gulp.task('default', function (callback) {
  runSequence(['sass', 'browserSync', 'watch'], callback)
});




gulp.task('build', function (callback) {
  runSequence(['clean:dist', 'sass', 'useref', 'images', 'js', 'fonts', 'css', 'uploads'], callback)
});

