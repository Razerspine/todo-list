const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const rigger = require('gulp-rigger');
const rename = require('gulp-rename');
const prefix = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const plumber = require('gulp-plumber');
const svgSprite = require('gulp-svg-sprites');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');
const babel = require('gulp-babel');
const notifier = require('node-notifier');
const eslint = require('gulp-eslint');
const path = require('path');
const sassLint = require('sass-lint');
const through = require('through2');
const svgToSss = require('gulp-svg-to-css');
const insert = require('gulp-insert');
const runSequence = require('run-sequence');

const {reload} = browserSync;

const pathes = {
    dist: {
        js: 'dist/js',
        css: 'dist/css',
        fonts: 'dist/fonts',
    },
    src: {
        js: 'src/js',
        sass: 'src/sass',
        fonts: 'src/fonts',
    },
};

const config = {
    jsBuild: [
        `${pathes.src.js}/main.js`
    ]
};

function plumberFn(error) {
    notifier.notify(error.message);
}

gulp.task('copy', () => {
    gulp
        .src(`${pathes.src.fonts}/**/*`)
        .pipe(gulp.dest(`${pathes.dist.fonts}`));
});

gulp.task('sass', () =>
    gulp
        .src([`${pathes.src.sass}/style.scss`])
        .pipe(plumber(plumberFn))
        .pipe(sass())
        .pipe(prefix(['> 1%', 'ie 10']))
        .pipe(gulp.dest(pathes.dist.css))
        .pipe(reload({stream: true}))
);

gulp.task('css-min-style', ['sass'], () =>
    gulp
        .src([`${pathes.dist.css}/style.css`])
        .pipe(plumber(plumberFn))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(pathes.dist.css))
        .pipe(reload({stream: true}))
);

gulp.task('js', () =>
    gulp
        .src(config.jsBuild)
        .pipe(plumber(plumberFn))
        .pipe(
            babel({
                presets: ['babel-preset-es2015'],
            })
        )
        .pipe(concat('build.js'))
        .pipe(uglify())
        .pipe(gulp.dest(pathes.dist.js))
        .pipe(reload({stream: true}))
);


gulp.task('build', callback => {
    runSequence(
        'js',
        ['copy'],
        'css-min-style',

        callback
    );
});

gulp.task('watch', ['build'], () => {
    gulp.watch(`${pathes.src.js}/**/*.js`, ['js']);
    gulp.watch(`${pathes.src.sass}/**/*.scss`, ['css-min-style']);

});

gulp.task('default', ['watch']);
