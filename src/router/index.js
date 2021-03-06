import React from 'react';
import Loadable from 'react-loadable';

let config = [
    {
        name: '/',
        path: '/',
        exact: true,
        component: Loadable({
            loader: () => import('../components/articles/articles.js'),
            loading: () => <div />
        })
    }
]

export default config