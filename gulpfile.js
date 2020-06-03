const {
  src,
  dest,
  series,
  watch,
} = require('gulp');
const sass = require('gulp-sass');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const gcmq = require('gulp-group-css-media-queries');
const sync = require('browser-sync').create();


function html() {
  return src('src/**.html')
    .pipe(dest('dist'));
}

function img() {
  return src('src/img/*')
    .pipe(dest('dist'));
}

function js() {
  return src('src/js/**.js')
    .pipe(dest('dist'));
}

function styles() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gcmq())
    .pipe(cssbeautify())
    .pipe(dest('dist'));
}

function clear() {
  return del('dist');
}

function serve() {
  sync.init({
    server: './dist',
  });


  watch('src/**.html', series(html)).on('change', sync.reload);
  watch('src/scss/**.scss', series(styles)).on('change', sync.reload);
  watch('src/js/**.js', series(js)).on('change', sync.reload);
}


exports.html = html;
exports.styles = styles;
exports.img = img;
exports.js = js;
exports.clear = clear;
exports.build = series(clear, styles, html, img, js);
exports.serve = series(clear, styles, html, img, js, serve);
