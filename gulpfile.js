var
    gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет
    css_nano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'); // Подключаем библиотеку для переименования файлов



gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('HW4/scss/*.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('HW4/css')) // Выгружаем результата в папку app/css
});






gulp.task('css-libs', ['sass'], function() {
    return gulp.src('hw4/css/lib-bootstrap') // Выбираем файл для минификации
        .pipe(css_nano()) // Сжимаем
        .pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('../hw4/dist')); // Выгружаем в папку app/css
});


gulp.task('watch', function() {
    gulp.watch('HW4/scss/*.scss', ['sass']); // Наблюдение за sass файлами
    // Наблюдение за другими типами файлов
});
