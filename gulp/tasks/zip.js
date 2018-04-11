import gulp from 'gulp';
import gulpZip from 'gulp-zip';
import zipName from '../utils/getZipFileName';
import {
    path
} from '../config';

const zip = () => {
    return gulp.src(path.root+'/**/*.*')
        .pipe(gulpZip(zipName))
        .pipe(gulp.dest(path.dist));
};

export default zip;
