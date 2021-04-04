const {
  src,
  dest,
  watch,
  parallel,
  series
} = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const fileinclude = require('gulp-file-include');
const del = require('del');
const browserSync = require('browser-sync').create();

// **************************************** //
// ***********BROWSER-SYNC************** //
function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    notify: false
  })
}
// ***********STYLES************** //
function styles() {
  return src([
      'node_modules/slick-carousel/slick/slick.scss',
      'node_modules/ion-rangeslider/css/ion.rangeSlider.css',
      'node_modules/rateyo/src/jquery.rateyo.css',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
      'app/scss/style.scss'
    ])
    .pipe(scss({
      outputStyle: 'compressed'
    }))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 versions'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}
// ***********SCRIPTS************** //
function scripts() {
  return src([
      'node_modules/jquery/dist/jquery.js',
      'node_modules/slick-carousel/slick/slick.js',
      'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
      'node_modules/ion-rangeslider/js/ion.rangeSlider.js',
      'node_modules/rateyo/src/jquery.rateyo.js',
      'node_modules/mixitup/dist/mixitup.min.js',
      'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}
// ***********INCLUDE************** //
function fileInclude() {
  return src(['app/html/*.html',
      '!app/html/parts/*.html'
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('app/'))
    .pipe(browserSync.stream());
}
// ***********IMAGES************** //
function images() {
  return src('app/images/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 5
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(dest('dist/images'))
}

// ***********BUILD************** //
function build() {
  return src([
      'app/**/*.html',
      'app/css/style.min.css',
      'app/js/main.min.js'
    ], {
      base: 'app'
    })
    .pipe(dest('dist'))
}
// ***********DEL************** //
function cleanDist() {
  return del('dist')
}
// **************WATCHING******************* //
function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/**/*.html']).on('change', browserSync.reload);
}
// **************************************** //
exports.styles = styles;
exports.scripts = scripts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.images = images;
exports.cleanDist = cleanDist;
exports.fileInclude = fileInclude;
exports.build = series(cleanDist, images, build);

exports.default = parallel(styles, scripts, fileInclude, browsersync, watching);