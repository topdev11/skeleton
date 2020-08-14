import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'chartPage', en);
i18next.addResourceBundle('tr', 'chartPage', tr);
i18next.addResourceBundle('ar', 'chartPage', ar);


const ChartingConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/charting',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/somr',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/pomr',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/summary',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/psg',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/save_complete',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/save_incomplete',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/preview',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/new_notes',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/load_notes',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/free_text',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/send',
            component: React.lazy(() => import('./Charting'))
        },
        {
            path     : '/charting/template',
            component: React.lazy(() => import('./Charting'))
        },

    ]
};

export default ChartingConfig;