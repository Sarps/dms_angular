import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';

import {FullLayoutComponent} from './layouts/full/full-layout.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';

import {AuthGuard} from './shared/auth/auth-guard.service';

const appRoutes: Routes = [
    {
        path: '', component: FullLayoutComponent, data: {title: 'full Views'}, canActivate: [AuthGuard], children: [
            {
                path: 'inventory',
                loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
            },
            {
                path: 'management',
                loadChildren: () => import('./management/management.module').then(m => m.ManagementModule)
            },
            {
                path: '',
                loadChildren: () => import('./pages/full-layout-page/full-pages.module').then(m => m.FullPagesModule)
            }
        ]
    },
    {
        path: '', component: ContentLayoutComponent, data: {title: 'content Views'}, canActivate: [], children: [
            {
                path: '',
                loadChildren: () => import('./pages/content-layout-page/content-pages.module').then(m => m.ContentPagesModule)
            }
        ]
    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
