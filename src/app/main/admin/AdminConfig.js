import React from 'react';
import i18next from 'i18next';
import en from './i18n/en';
import tr from './i18n/tr';
import ar from './i18n/ar';

i18next.addResourceBundle('en', 'adminPage', en);
i18next.addResourceBundle('tr', 'adminPage', tr);
i18next.addResourceBundle('ar', 'adminPage', ar);


const AdminConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/admin/macro_editor',
            component: React.lazy(() => import('./templates/MacroEditor'))
        },
        {
          path     : '/admin/template_editor',
          component: React.lazy(() => import('./templates/TemplateEditor'))
        },
        {
          path     : '/admin/dynamic_element',
          component: React.lazy(() => import('./templates/DynamicElement'))
        },
        {
          path     : '/admin/patients',
          component: React.lazy(() => import('./templates/Patients'))
        },
        {
          path     : '/admin/system_users',
          component: React.lazy(() => import('./templates/SystemUsers'))
        },
        {
          path     : '/admin/providers',
          component: React.lazy(() => import('./templates/Provider'))
        },
        {
          path     : '/admin/specialities',
          component: React.lazy(() => import('./templates/Specialities'))
        },
        {
          path     : '/admin/provider_types',
          component: React.lazy(() => import('./templates/ProviderTypes'))
        },
        {
          path     : '/admin/location',
          component: React.lazy(() => import('./templates/Locations'))
        },
        {
          path     : '/admin/medications',
          component: React.lazy(() => import('./templates/Medications'))
        },
        {
          path     : '/admin/adverse_drug_reaction',
          component: React.lazy(() => import('./templates/AdverseDR'))
        },
        {
          path     : '/admin/icd_10',
          component: React.lazy(() => import('./templates/ICD'))
        },
        {
          path     : '/admin/cpt',
          component: React.lazy(() => import('./templates/CPT'))
        },
        {
          path     : '/admin/races',
          component: React.lazy(() => import('./templates/Races'))
        },
        {
          path     : '/admin/substances',
          component: React.lazy(() => import('./templates/Substances'))
        },
        {
          path     : '/admin/social_history',
          component: React.lazy(() => import('./templates/SocialHistory'))
        },
        {
          path     : '/admin/ros_master',
          component: React.lazy(() => import('./templates/ROSMaster'))
        },
        {
          path     : '/admin/pem',
          component: React.lazy(() => import('./templates/PhysicalExam'))
        },
        {
          path     : '/admin/associated_diagnoses',
          component: React.lazy(() => import('./templates/AD'))
        },
        

    ]
};

export default AdminConfig;