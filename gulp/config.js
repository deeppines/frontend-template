import errorHandler from './utils/errorHandler';
import attrSorter from 'posthtml-attrs-sorter';

export const path = {
    root: 'web',
    build: 'dist'
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
                'class',
                'id',
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
}
