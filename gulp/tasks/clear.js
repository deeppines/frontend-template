import del from 'del';
import {
    path
} from '../config';

const clear = () => {
    return del(path.root);
};

export default clear;
