import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplierComponent} from './supplier/supplier.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ManagementRoutingModule} from './management-routing.module';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CompanyComponent } from './company/company.component';

@NgModule({
    declarations: [SupplierComponent, ManufacturerComponent, CompanyComponent],
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        ManagementRoutingModule
    ]
})
export class ManagementModule {
}
