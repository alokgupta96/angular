import { FuseNavigation } from '../../@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'dashboards',
        title    : 'Dashboard',
        translate: 'NAV.DASHBOARDS',
        type     : 'item',
        icon     : 'dashboard',
        url      :'/dashboard',
    },
    
    {
        id       : '',
        title    : 'Users',
        translate: 'NAV.ECOMMERCE',
        type     : 'collapsable',
        icon     : 'people_outline',
        children : [
            {
                id        : '',
                title     : 'Staff',
                type      : 'item',
                url       : '/staff',
                exactMatch: true
            },
            {
                id        : '',
                title     : 'Customers',
                type      : 'item',
                url       : '/customer',
                exactMatch: true
            },
            {
                id        : '',
                title     : 'Departments',
                type      : 'item',
                url       : '/department',
                exactMatch: true
            },
        ]
    },

    {
        id       : '',
        title    : 'Forms',
        translate: 'NAV.ECOMMERCE',
        type     : 'collapsable',
        icon     : 'list',
        children : [
            {
                id        : 'products',
                title     : 'Audit Form',
                type      : 'item',
                url       : '/audit-form-table',
                exactMatch: true
            },
            {
                id        : '',
                title     : 'Incident form',
                type      : 'item',
                url       : '/incident-form',
                exactMatch: true
            },
            {
                id        : 'productDetail',
                title     : 'Categories',
                type      : 'item',
                url       : '/audit-categories',
                exactMatch: true
            },
        ]
    },

    {
        id       : '',
        title    : 'Sites',
        translate: '',
        type     : 'collapsable',
        icon     : 'domain',
        children : [
            {
                id        : 'products',
                title     : 'Sites',
                type      : 'item',
                url       : '/sites',
                exactMatch: true
            },
            // {
            //     id        : 'productDetail',
            //     title     : 'Feedback Questions',
            //     type      : 'item',
            //     url       : '/apps/e-commerce/products/1/printed-dress',
            //     exactMatch: true
            // },
        ]
    },

    {
        id       : '',
        title    : 'Training',
        translate: 'NAV.ECOMMERCE',
        type     : 'collapsable',
        icon     : 'school',
        children : [
            {
                id        : '',
                title     : 'Training category',
                type      : 'item',
                url       : '/training-category',
                exactMatch: true
            },
            {
                id        : '',
                title     : 'Trainings',
                type      : 'item',
                url       : '/trainings',
                exactMatch: true
            },
            {
                id        : '',
                title     : 'Induction Contents',
                type      : 'item',
                url       : '/induction-content',
                exactMatch: true
            },
        ]
    },

    {
        id       : '',
        title    : 'Report',
        translate: 'NAV.ECOMMERCE',
        type     : 'collapsable',
        icon     : 'report',
        children : [
            {
                id        : '',
                title     : 'Audit Reports',
                type      : 'item',
                url       : '/audit-report',
                exactMatch: true
            },
            {
                id        : 'auditPlan',
                title     : 'Action Plan',
                type      : 'item',
                url       : '/action-plan',
                exactMatch: true
            },
            {
                id        : 'trainingList',
                title     : 'Training List',
                type      : 'item',
                url       : '/training-list',
                exactMatch: true
            },
        ]
    },  
];
