import {task} from 'gulp';
import build from './gulp/tasks/build';
import html from './gulp/tasks/html';
import css from './gulp/tasks/scss';
import clean from './gulp/tasks/clean';
import zip from './gulp/tasks/zip';
import {assets} from './gulp/tasks/assets';
import {server} from './gulp/tasks/server';
import dev from './gulp/tasks/dev';
import scripts from './gulp/tasks/scripts';

// Debug tasks
task('html', html);
task('css', css);
task('scripts', scripts);
task('assets', assets);
task('server', server);

// Main tasks
task('dev', dev);
task('build', build);
task('zip', zip);
task('clean', clean);

// Default task
task('default', dev);
