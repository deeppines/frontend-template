import {task, series} from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import css from './gulp/tasks/scss';
import clear from './gulp/tasks/clear';
import zip from './gulp/tasks/zip';
import {assets} from './gulp/tasks/assets';
import {server} from './gulp/tasks/server';
import dev from './gulp/tasks/dev';

// Debug tasks
task('html', html);
task('css', css);
task('clear', clear);
task('assets', assets);
task('server', server);
task('dev', dev);

// Main tasks
task('build', build);
task('zip', zip);

// Default task
task('default', series('html'));
