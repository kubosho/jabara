"use strict";

var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

var browserify = require("browserify");
var del = require("del");
var merge = require("merge-stream");
var source = require("vinyl-source-stream");
var browserSync = require("browser-sync");
var reload = browserSync.reload;

var tsProject = $.typescript.createProject({
  declarationFiles: true,
  module: "commonjs",
  noImplicitAny: true,
  removeComments: true,
  sortOutput: true,
  target: "es5"
});

//////////////////////////////////////////////////

gulp.task("compile", function() {
  var tsResult = gulp.src(["./src/*.ts"])
    .pipe($.typescript(tsProject));

  return merge(
    tsResult.dts.pipe(gulp.dest("./src/")),
    tsResult.js.pipe(gulp.dest("./src/"))
  );
});

//////////////////////////////////////////////////

gulp.task("espower", function() {
  return gulp.src("./test/src/*.js")
    .pipe($.espower())
    .pipe(gulp.dest("./test/espower/"));
});

//////////////////////////////////////////////////

gulp.task("lint", function() {
  return gulp.src(["./test/src/*.js", "./src/*.js"])
    .pipe($.jshint())
    .pipe($.jshint.reporter(require("jshint-stylish")))
    .pipe($.jshint.reporter("fail"));
});

//////////////////////////////////////////////////

gulp.task("test", function(cb) {
  gulp.src("./src/*.js")
    .pipe($.istanbul())
    .pipe($.istanbul.hookRequire())
    .on("finish", function() {
      return gulp.src("./test/espower/*.js")
        .pipe($.mocha())
        .pipe($.istanbul.writeReports({
          reporters: ["lcov", "text-summary"]
        }))
        .on("end", cb);
    });
});

//////////////////////////////////////////////////

gulp.task("browserify", function() {
  return browserify("./src/jabara.js")
    .bundle()
    .pipe(source("jabara.js"))
    .pipe(gulp.dest("./dist/"));
});

//////////////////////////////////////////////////

gulp.task("serve", function() {
  browserSync({
    notify: false,
    server: "./example/"
  });

  gulp.watch(
    ["./src/*.*"],
    ["compile", "lint", "espower", "test", "browserify", reload]
  );
});

//////////////////////////////////////////////////

gulp.task('clean', del.bind(null, ["src/*.js", "test/espower/*.js"]));

//////////////////////////////////////////////////

gulp.task("default", ["serve"]);
