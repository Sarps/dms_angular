import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SupplierComponent} from './supplier/supplier.component';
import {CompanyComponent} from './company/company.component';


const routes: Routes = [
    {
        path: 'suppliers',
        component: SupplierComponent,
        data: { title: 'Supplier Management' },
    },
    {
        path: 'companies',
        component: CompanyComponent,
        data: { title: 'Company Management' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagementRoutingModule {
}
