import del from 'del';
import {isDevelopment} from '../utils/env';
import {
    path
} from '../config';

const clean = () => {
    if (isDevelopment) {
        return del(path.root);
    } else {
        return del([path.root, path.dist]);
    }
};

export default clean;
