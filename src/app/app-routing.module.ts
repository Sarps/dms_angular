import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';

import {AuthGuard} from './shared/auth/auth-guard.service';
import {TrashCanComponent} from './trash-can/trash-can.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Content} from '@angular/compiler/src/render3/r3_ast';
import {ContentInvoicePageComponent} from './invoice/content-invoice-page.component';
import {FullInvoicePageComponent} from './invoice/full-invoice-page.component';

const appRoutes: Routes = [
    {
        path: '', component: FullLayoutComponent, data: {title: 'Full Views'}, canActivate: [AuthGuard], children: [
            {
                path: 'inventory',
                loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
            },
            {
                path: 'servicing',
                loadChildren: () => import('./servicing/servicing.module').then(m => m.ServicingModule)
            },
            {
                path: 'financials',
                loadChildren: () => import('./financials/financials.module').then(m => m.FinancialsModule)
            },
            {
                path: 'management',
                loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
            },
            {
                path: 'inventory/invoice', component: FullInvoicePageComponent, data: {title: 'Invoice'},
            },
            {
                path: 'trash', component: TrashCanComponent,
            },
            {
                path: 'home', component: DashboardComponent, data: {title: 'Home'},
            },
            {path: '', redirectTo: '/home', pathMatch: 'prefix'},
        ]
    },
    {
        path: '', component: ContentLayoutComponent, data: {title: 'content Views'}, canActivate: [], children: [
            {
                path: 'invoice',
                component: ContentInvoicePageComponent,
                data: {title: 'Invoice'},
                canActivate: [AuthGuard]
            }
        ]
    },
    {path: '', redirectTo: '/home', pathMatch: 'full',},
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
