const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('default', ['css', 'imagemin', 'js'])

gulp.task('css', () => {
    gulp.src('./src/css/*.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions']
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css/'))
    gulp.watch('./src/css/*.css', ['css'])
  });

  gulp.task('imagemin', () => {
    gulp.src('./src/images/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./dist/img/'))
  });

  gulp.task('js', () => {
    gulp.src('./src/js/*.js')
      .pipe(babel({
          presets: ['env']
      }))
      .pipe(concat('main.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./dist/js/'))
  });