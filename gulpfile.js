const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const debug = require('gulp-debug')
const sourceMaps = require('gulp-sourcemaps')
const clean = require('gulp-clean')
const newer = require('gulp-newer')
const notify = require('gulp-notify')
const gulpResolveUrl = require('gulp-resolve-url')
const cssMin = require('gulp-cssmin')
const imagemin = require('gulp-imagemin')
const imgCompress  = require('imagemin-jpeg-recompress')
const browserSync = require('browser-sync').create()
const pug = require('gulp-pug')
const htmlmin = require('gulp-htmlmin')
const autoPrefixer = require('gulp-autoprefixer')
const webpack = require('webpack-stream')
const webPack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const rename = require('gulp-rename')
const cache = require('gulp-cached')
const replace = require('gulp-replace')
// const isDebug = process.env.NODE_ENV === 'debug'

function sassCompile() {
  return gulp.src('./src/assets/scss/style.scss')
      .pipe(sourceMaps.init())
      .pipe(sass({
        includePaths: ['node_modules']
      })).on('error', notify.onError())
      .pipe(sourceMaps.write("../css"))
      .pipe(gulp.dest('./public/assets/css/')).pipe(debug())
}

function sassCompress() {
  return gulp.src('./src/assets/scss/style.scss')
      .pipe(sourceMaps.init())
      .pipe(sass({
        includePaths: ['node_modules']
      })).on('error', notify.onError())
      .pipe(autoPrefixer({
        browsers: ['last 5 versions'],
        cascade: false
      }))
      .pipe(gulpResolveUrl())
      .pipe(cssMin())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('public/assets/css/'))
      .pipe(debug())
}

function imgCompressor() {
  return gulp.src('src/assets/img/**/*')
      .pipe(imagemin([
        imgCompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: 'high'
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
      ]))
      .pipe(gulp.dest('public/assets/img/'));
}


function js() {
  return gulp.src('./src/assets/js/index.js')
      .pipe(webpack({
        output: {
          filename: 'bundle.js'
        },
        plugins: [
          new webPack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          })
        ],
      })).on('error', notify.onError())
      .pipe(gulp.dest('./public/assets/js/'))
      .pipe(debug())
}

function jsCompress() {
  return gulp.src('./src/assets/js/index.js')
      .pipe(webpack({
        output: {
          filename: 'bundle.js'
        },
        plugins: [
          new webPack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
          }),
          new UglifyJsPlugin()
        ],
      })).on('error', notify.onError())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./public/assets/js/'))
      .pipe(debug())
}

function fonts() {
  return gulp.src('./src/assets/fonts/**/*.*')
      .pipe(newer('./public/assets/fonts/'))
      .pipe(gulp.dest('./public/assets/fonts/'))
      .pipe(debug())
}

function img() {
  return gulp.src('src/assets/img/**/*.*')
      .pipe(newer('./public/assets/img/'))
      .pipe(gulp.dest('public/assets/img/'))
      .pipe(debug())
}

function docs() {
  return gulp.src('src/assets/docs/**/*.*')
      .pipe(newer('./public/docs/'))
      .pipe(gulp.dest('public/docs/'))
      .pipe(debug())
}

function files() {
  return gulp.src(['src/*.*'])
      .pipe(newer('./public/'))
      .pipe(gulp.dest('public/'))
      .pipe(debug())
}

function pugFiles() {
  return gulp.src('./src/pages/**/*.pug')
      .pipe(pug(
          { pretty: true }
      ))
      .pipe(cache('pug'))
      .pipe(gulp.dest('public/'))
      .pipe(debug())
}

function pugCompress() {
  return gulp.src('./src/pages/**/*.pug')
      .pipe(pug(
          { pretty: true }
      ))
      .pipe(cache('pug'))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('public/'))
      .pipe(debug())
}

function deployHtml() {
  return gulp.src(['./public/*.html'])
      .pipe(replace('.css', '.min.css'))
      .pipe(replace('.min.min.css', '.min.css'))
      .pipe(replace('.js', '.min.js'))
      .pipe(replace('.min.min.js', '.min.js'))
      .pipe(gulp.dest('public/'));
}

function watch() {
  browserSync.init({
    server: 'public'
  });
  gulp.watch('./src/assets/scss/**/*.scss', sassCompile)
  gulp.watch('./src/assets/img/**/*', img)
  gulp.watch('./src/**/*.pug', pugFiles)
  gulp.watch('./src/assets/js/**/*.js', js)
  gulp.watch('./src/assets/docs/**/*', docs)
  gulp.watch('./src/*.*', files)
  gulp.watch('./public/**/*').on('change', browserSync.reload);
}

function cleanDirectory() {
  return gulp.src('public/*')
      .pipe(clean())
      .pipe(debug())
}

gulp.task('sass', sassCompile);

gulp.task('sass:compress', sassCompress);

gulp.task('img:compress', imgCompressor);

gulp.task('js', js);

gulp.task('js:compress', jsCompress);

gulp.task('fonts', fonts);

gulp.task('img', img);

gulp.task('docs', docs);

gulp.task('files', files);

gulp.task('pug', pugFiles);

gulp.task('pug:compressor', pugCompress);

gulp.task('clean', cleanDirectory);

gulp.task('watch', watch);

gulp.task('deploy-html', deployHtml);

gulp.task('collectDev', gulp.series(cleanDirectory, gulp.parallel(sassCompile, img, fonts, js, pugFiles, docs, files)));

gulp.task('collectBuild', gulp.series(cleanDirectory, gulp.parallel(sassCompress, img, imgCompressor, fonts, jsCompress, pugCompress, docs, files)));

gulp.task('dev', gulp.series('collectDev', 'watch'))

gulp.task('build', gulp.series('collectBuild', 'deploy-html'))
