var gulp = require('gulp')
var typeScript = require('gulp-tsc')
var sequence = require('gulp-sequence')

gulp.task('ESC', function () {
    gulp.src('./src/page/*.ts')
        .pipe(typeScript({
            target: 'es2015',
            module: "commonjs"
        }))
        .pipe(gulp.dest('folder'));
});

gulp.task('escc', function() {
    gulp.watch("./src/page/*.ts",function(){
        sequence(['ESC'],function(){
            console.log("esc")
        })
    })
});
