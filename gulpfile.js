var gulp = require('gulp');

gulp.task('copy:css', ['font-awesome:webfonts'], function() {
  gulp.src([
    'node_modules/bulma/css/bulma.css',
    'node_modules/font-awesome/css/font-awesome.css'
  ])
  .pipe( gulp.dest('source/lib/css') );
});

gulp.task('font-awesome:webfonts', function() {
  gulp.src([
    'node_modules/font-awesome/fonts/fontawesome-webfont.eot',
    'node_modules/font-awesome/fonts/fontawesome-webfont.svg',
    'node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff',
    'node_modules/font-awesome/fonts/fontawesome-webfont.woff2',
    'node_modules/font-awesome/fonts/FontAwesome.otf'
  ])
  .pipe( gulp.dest('source/lib/fonts') );
});

gulp.task('default', ['copy:css']);
