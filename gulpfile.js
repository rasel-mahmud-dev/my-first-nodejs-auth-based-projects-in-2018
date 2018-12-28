const gulp = require('gulp')
const sass = require('gulp-sass');

// Compile Sass into Css
function style(){
   // where my scss file => src
   return gulp.src('./scss/**/*.scss')
   // pass that file throught sass compiler
   .pipe(sass()).on('error', sass.logError)
   // output src
   .pipe(gulp.dest('./asserts/css'))
}

function watch(){
  gulp.watch('./scss/**/*.scss', style)
}

exports.style = style
exports.watch = watch



// "scripts": {
//   "start": "start mongod && nodemon app.js",
//   "compile": "gulp watch"
// },