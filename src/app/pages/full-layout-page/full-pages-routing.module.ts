import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {InvoicePageComponent} from './invoice-page.component';

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
