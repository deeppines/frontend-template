import errorHandler from './utils/errorHandler';
import attrSorter from 'posthtml-attrs-sorter';
import autoprefixer from 'autoprefixer';

export const path = {
    root: 'web',
    dist: 'dist',
    build: {
        js: 'web/js',
        css: 'web/css',
        img: 'web/images',
        fonts: 'web/fonts'
    }
};

export const plumberConfig = {
    errorHandler
};

export const pugConfig = {
    pretty: '\t'
};

export const prettifyConfig = {
    'unformatted': ['pre', 'code', 'textarea'],
    'extra_liners': ['head', 'body', '/html', 'header', 'main', 'footer'],
    'indent_size': 4,
    'indent_char': ' ',
    'indent_with_tabs': false,
    'eol': '\n',
    'end-with-newline': true,
    'preserve_newlines': true,
    'indent-inner-html': true,
    'brace_style': 'expand'
};

export const posthtmlConfig = {
    plugins: [
        attrSorter({
            order: [
                'id',
                'class',
                'name',
                'data',
                'ng',
                'src',
                'for',
                'type',
                'href',
                'values',
                'title',
                'alt',
                'role',
                'aria',
                'tabindex'
            ]
        })
    ],
    options: {}
};

export const sassConfig = {
    outputStyle: 'expanded'
};

export const postcssConfig = [
    autoprefixer({
        cascade: true
    }),
];

export const mmqConfig = {
    log: true,
    use_external: false
};

export const csscombConfig = {
    file: 'csscomb.json'
};

export const cssoConfig = {
    filename: '*.min.css'
};
