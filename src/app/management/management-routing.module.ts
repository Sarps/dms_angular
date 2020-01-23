import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SupplierComponent} from './supplier/supplier.component';
import {CompanyComponent} from './company/company.component';
import {CompanyInformationComponent} from './company-information/company-information.component';
import {UserPrivilegesComponent} from './user-privileges/user-privileges.component';
import {DocumentsMarginsComponent} from './documents-margins/documents-margins.component';


const routes: Routes = [
    {
        path: 'suppliers',
        component: SupplierComponent,
        data: { title: 'Supplier Management' },
    },
    {
        path: 'companies',
        component: CompanyComponent,
        data: { title: 'Companies Management' },
    },
    {
        path: 'company/edit',
        component: CompanyInformationComponent,
        data: { title: 'Company Management' },
    },
    {
        path: 'users',
        component: UserPrivilegesComponent,
        data: { title: 'Company Management' },
    },
    {
        path: 'documents',
        component: DocumentsMarginsComponent,
        data: { title: 'Documents & Margins' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManagementRoutingModule {
}
