import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MaintenancePageComponent} from '../content-layout-page/maintenance/maintenance-page.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InvoicePageComponent} from './invoice/invoice-page.component';

const routes: Routes = [
    {
        path: 'home',
        component: DashboardComponent,
        data: {title: 'Home'},
    },
    {
        path: 'inventory/invoice',
        component: InvoicePageComponent,
        data: {title: 'Home'},
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FullPagesRoutingModule {
}
