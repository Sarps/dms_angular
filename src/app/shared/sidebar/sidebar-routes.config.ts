import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '/home', title: 'Home', icon: 'ft-home', class: '', badge: '', badgeClass: '', submenu: []
    },
    {
        path: '', title: 'Inventory', icon: 'ft-align-left', class: 'has-sub', badge: '', badgeClass: '',
        submenu: [
            { path: '/inventory/list', title: 'Management', icon: 'fa fa-cogs', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/part', title: 'New Part', icon: 'ft-tool', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/enquiries/list', title: 'Purchase Enquiries', icon: 'fa fa-sticky-note-o', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/orders/list', title: 'Purchase Orders', icon: 'fa fa-stack-overflow', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/orders/new', title: 'New Enquiry/Order', icon: '', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/orders/incomplete', title: 'Backorders', icon: 'icon-notebook', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/inventory/receipts/list', title: 'Receipt Documents', icon: 'icon-calendar', class: '', badge: '', badgeClass: '', submenu: [] },
        ]
    },
    {
        path: '', title: 'Servicing', icon: 'fa fa-wrench', class: 'has-sub', badge: '', badgeClass: '',
        submenu: [
            { path: '/servicing/list', title: 'Management', icon: 'ft-layers', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/servicing/customers/new', title: 'New Customer Acct', icon: '', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/servicing/vehicles/new', title: 'Add Vehicle', icon: '', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/servicing/orders/list', title: 'Service Orders', icon: 'fa fa-address-card-o', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/servicing/orders/add', title: 'New Service Order', icon: '', class: '', badge: '', badgeClass: '', submenu: [] },
        ]
    },
    {
        path: '/maintenance', title: 'Financial', icon: 'ft-trending-down', class: '', badge: '', badgeClass: '', submenu: []
    },
    {
        path: '', title: 'Management', icon: 'ft-users', class: 'has-sub', badge: '', badgeClass: '', submenu: [
            // { path: '/management/companies', title: 'Companies', icon: 'ft-layout', class: '', badge: '', badgeClass: '', submenu: [] },
            { path: '/management/suppliers', title: 'Suppliers', icon: 'ft-wind', class: '', badge: '', badgeClass: '', submenu: [] },
        ]
    },
    { path: '/trash', title: 'Trash Can', icon: 'icon-trash', class: '', badge: '', badgeClass: '', submenu: [] },
    { path: 'https://github.com/Sarps', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', submenu: [], isExternalLink: true },
];
