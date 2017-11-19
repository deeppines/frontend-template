import del from 'del';
import {
    path
} from '../config';

const clean = () => {
    return del(path.root);
};

export default clean;
