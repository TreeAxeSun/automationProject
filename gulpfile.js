const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
    gulp.src('./src/css/*.css')
      .pipe(autoprefixer({
          browsers: ['last 2 versions']
      }))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./dist/css/'))
  });