/** @format */
import gulp from "gulp";
import pug from "gulp-pug";
import sass from "gulp-sass";
import imagemin from "gulp-imagemin";
import babel from "gulp-babel";
import concat from "gulp-concat";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";

gulp.task("pug", () => {
  return gulp
    .src("./dev/views/pages/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./public"));
});

gulp.task("sass", () => {
  return gulp
    .src("./dev/sass/style.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"));
});

gulp.task("imagemin", () => {
  return gulp
    .src("./dev/assets/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./public/assets/images"));
});
gulp.task("babel", () => {
  return gulp
    .src("./dev/src/index.js")
    .pipe(plumber())
    .pipe(concat("scripts-min.js"))
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(gulp.dest("./public/js"));
});

gulp.task("default", () => {
  gulp.watch("./dev/views/**/*.pug", gulp.series("pug"));
  gulp.watch("./dev/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./dev/assets/**/*", gulp.series("imagemin"));
  gulp.watch("./dev/src/**/*.js", gulp.series("babel"));
});
