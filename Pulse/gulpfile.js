const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");

// Static server
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "src" //сервер запускає index.html в папці src
        }
    });
});

gulp.task('styles', function() {
	return gulp.src("src/sass/**/*.+(scss|sass)") //gulp шукає відповідні файли в директорії
			.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //запускає sass і показуємо помилку
			.pipe(rename({
				suffix: '.min',
				prefix: ''
			}))
			.pipe(autoprefixer())
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest("src/css")) //отримані файли кладемо сюди
			.pipe(browserSync.stream()); //після перезапису файлу sass/scss оновлюється сторінка
});

//задача, що стежить за змінами
gulp.task('watch', function() {
	gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel("styles")); //слідкує за змінами в sass та запускає styles
	gulp.watch("src/*.html").on("change", browserSync.reload); //слыдкує за html та перезапускає сторінку
});

//паралельний запуск всіх процесів
gulp.task('default', gulp.parallel('watch', 'server', 'styles'));