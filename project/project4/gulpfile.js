const gulp = require('gulp');
const bs = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('sass',function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(bs.stream());
})
gulp.task('js',function(){
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(bs.stream());
})
gulp.task('server',['sass'],function() {
    bs.init({
        server: './src'
    })
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss','src/scss/**/*.scss'],['sass']);
    gulp.watch('src/*.html').on('change',bs.reload);
})
gulp.task('font',function(){
    return gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(gulp.dest('src/fonts')); 
})
gulp.task('fa',function(){
    return gulp.src('node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css')
    .pipe(gulp.dest('src/css')); 
})
gulp.task('default',['js','server','font','fa']);