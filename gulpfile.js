const gulp = require('gulp');
const path = require('path');
const del = require('del');
//控制多个任务进行顺序执行或者并行执行
const runSequence = require('run-sequence').use(gulp);
const webpack = require("webpack");
const ROOT_PATH = process.env.ROOT_PATH;
//日志打印工具，打印日志会自动带上时间前缀
const gutil = require('gulp-util');
//颜色的插件
const chalk = require('chalk');
const packageFilePath = path.join(__dirname, "./dist/")

function buildWithWebpack(type, cb) {
    webpack(require(`./webpack/webpack.${type}.config`), (err, stats) => {
        if (err) {
            console.log(chalk.red(err));
            throw new gutil.PluginError(`webpack-${type}:build`, err, { showStack: true });
        }
        gutil.log(`[webpack-${type}:build]`, stats.toString({
            colors: true
        }));
        var jsonStats = stats.toJson();
        if (jsonStats.errors.length > 0)
            throw new gutil.PluginError(`webpack-${type}:build`, jsonStats.errors.toString(), { showStack: true });
        cb();
    });
}

gulp.task('clean', () => del([
    packageFilePath
], {
    force: true
}));

gulp.task('web', cb => {
    buildWithWebpack('web.pro', cb)
});

gulp.task('server', cb => {
    buildWithWebpack('server', cb)
});

gulp.task('default', () => {
	//顺序依次执行，后一步必须等待前一步执行完毕
    runSequence('clean', 'web', 'server')
})




