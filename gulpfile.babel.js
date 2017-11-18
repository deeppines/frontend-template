import {task, series} from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import clear from './gulp/tasks/clear';
import zip from './gulp/tasks/zip';

// Debug tasks
task('html', html);
task('clear', clear);

// Main tasks
task('build', build);
task('zip', zip);

// Default task
task('default', series('html'));
