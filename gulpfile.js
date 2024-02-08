// Главный модуль
import gulp from "gulp";
// Импорт путей
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { javascript } from "./gulp/tasks/javascript.js";

global.app = {
    isBuild: process.argv.includes("--build"),
    isDevelop: !process.argv.includes("--build"),
    path: path,
    gulp: gulp,
    plugins: plugins
}

function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.js, javascript);
}

const mainTasks = gulp.parallel(copy, html, javascript);
const develop = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));

gulp.task("default", develop);