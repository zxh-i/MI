const gulp = require("gulp");
const sass = require("gulp-sass");
// const babel=require("gulp-babel");
//  const concat=require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("html", done => {
    gulp.src("*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
    done();
});
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
})
gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
    done();
})
gulp.task("img", done => {
    gulp.src("img/*")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
    done();
})


//监听
gulp.task("watch", done => {
    gulp.watch("*.html", gulp.series("html"));
    gulp.watch("sass/*.scss", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("img/*", gulp.series("img"));
    done();
})
//服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
})

gulp.task("build", gulp.parallel("html", "sass", "js", "img"));
gulp.task("default", gulp.series("build", "server", "watch"));