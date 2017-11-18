import {task, series} from 'gulp';
import pages from './gulp/tasks/html';

task('pages', pages);

// Default task
task('default', series('pages'));
