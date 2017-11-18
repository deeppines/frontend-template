import {task, series} from 'gulp';
import html from './gulp/tasks/html';

task('html', html);

// Default task
task('default', series('html'));
