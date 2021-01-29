const imagemin = require('gulp-imagemin');

let project_folder = "dist";
let source_folder = "src";

let path = {
  build: {
    html: project_folder + "/",
    css: project_folder + "/css/",
    js: project_folder + "/js/",
    img: project_folder + "/img/",
    fonts: project_folder + "/fonts/",
  },
  src: {
    html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
    css: source_folder + "/sass/style.sass",
    js: source_folder + "/js/script.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder + "/fonts/*.ttf",
  },
  watch: {
    html: source_folder + "/**/*.html",
    css: source_folder + "/sass/**/*.sass",
    js: source_folder + "/js/**/*.js",
    img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/"
};

let {src, dest} = require('gulp'),
  gulp = require('gulp'), // подключаем плагины из npm
  browsersync = require("browser-sync").create(); // плагин browsersync
  fileinclude = require("gulp-file-include"),  // плагин для подключения файлов
  del = require("del"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  groupMedia = require("gulp-group-css-media-queries"),
  cleanCss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  imageMin = require("gulp-imagemin"),
  webp = require("gulp-webp"),
  webpHtml = require("gulp-webp-html"),
  svgSprite = require("gulp-svg-sprite"),
  ttf2woff = require("gulp-ttf2woff");
  ttf2woff2 = require("gulp-ttf2woff2");

// Настройка browserSync
function browserSync(params) { 
  browsersync.init({
    server: {
      baseDir: "./" + project_folder + "/"
    },
    port: 5000,
    notify: false
  });
}

// Создаем функцию для записи данных в src для копирования в build
function html() {
  return src(path.src.html)
    .pipe(fileinclude()) // подключение файлов
    .pipe(webpHtml())
    .pipe(dest(path.build.html)) // через pipe пишем команды для Gulp, пишем путь к папке результата
    .pipe(browsersync.stream());
}

// Редактируем картинки (сначала конверт в webp, потом выгрузка, потом сжатие, потом снова выгрузка(jpg тоже останется))
function images() {
  return src(path.src.img)
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(dest(path.build.img))
    .pipe(src(path.src.img))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins:[{removeViewBox: false}],
        interlaced: true,
        optimizationLevel: 3
      })
    )
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

// Создаем функцию для отслеживания изменений в реальном времени
function watchFiles(params) {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.img], images);
}

// Функция очистки папки
function clean(params) {
  return del(path.clean);
}

function fonts(params) {
  src(path.src.fonts)
    .pipe(ttf2woff())
    .pipe(dest(path.build.fonts));
  return src(path.src.fonts)
    .pipe(ttf2woff2())
    .pipe(dest(path.build.fonts));
}

// Функцию нужно вызвать отдельно для создания спрайтов
gulp.task('svgSprite', function() {
  return gulp.src([source_folder + '/iconsprite/*.svg'])
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../icons/icons.svg",
          example: true
        }
      }
    }))
    .pipe(dest(path.build.img));
});

// Генерируем sass в css
function css() {
  return src(path.src.css)
    .pipe (
      sass({
        outputStyle: "expanded"
      })
    )
    .pipe(
      groupMedia()
    )
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 5 versions"],
        cascade: true
      })
    )
    .pipe(dest(path.build.css))
    .pipe(cleanCss())
    .pipe(
      rename({
        extname: ".min.css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

let build = gulp.parallel(css, html, images); // генерируем sass в css и добавляем новые файлы
let watch = gulp.parallel(build, watchFiles, browserSync); // сценарий выполнения функций

exports.fonts = fonts;
exports.images = images;
exports.css = css;
exports.html = html;
exports.build = build;
exports.default = watch;

