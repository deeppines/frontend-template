import gulp from 'gulp';
import path from 'path';
import file from 'gulp-file';
import plumber from 'gulp-plumber';
import {
    plumberConfig
} from '../config';

const modules = () => {
    // let pathArray = path.split('\\');
    // let folderName = pathArray[pathArray.length-1];

    return gulp.src(['/*', '!/_*'], {cwd: 'source/modules'})
        .pipe(file(path.dirname + '.js', 'test'))
        // .pipe(plumber(plumberConfig))
        // .pipe(path.dirname)
        // .pipe(file(folderName + '.pug', '//- ' + folderName + ' module'))
        // .pipe(file(folderName + '.scss', '/* ' + folderName + ' style */'))
        // .pipe(file(folderName + '.js', '// ' + folderName + ' JavaScript'))
        .pipe(gulp.dest('source/modules/'));
};

export default modules;

// module.exports = function (options) {
//     return function () {
//         var watcher = gulp.watch(options.path);

//         watcher.on('addDir', function (path, stats) {
//             var pathArray = path.split('\\');
//             var folderName = pathArray[pathArray.length-1];

//             if (options.addJs === false) {
//                 return gulp.src(path + '/*')
//                     .pipe($.file(folderName + '.pug', '//- ' + folderName + ' module'))
//                     .pipe($.file(folderName + '.scss', '/* ' + folderName + ' style */'))
//                     .pipe(gulp.dest(path));
//             } else {
//                 return gulp.src(path + '/*')
//                     .pipe($.file(folderName + '.pug', '//- ' + folderName + ' module'))
//                     .pipe($.file(folderName + '.scss', '/* ' + folderName + ' style */'))
//                     .pipe($.file(folderName + '.js', '// ' + folderName + ' JavaScript'))
//                     .pipe(gulp.dest(path));
//             }
//         });
//     };
// };
