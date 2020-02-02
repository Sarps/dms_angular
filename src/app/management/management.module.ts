import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SupplierComponent} from './supplier/supplier.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {ManagementRoutingModule} from './management-routing.module';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { CompanyComponent } from './company/company.component';
import {CompanyInformationComponent} from './company-information/company-information.component';
import {FormsModule} from '@angular/forms';
import {PipesModule} from '../shared/pipes/pipes.module';
import {UserPrivilegesComponent} from './user-privileges/user-privileges.component';
import {DocumentsMarginsComponent} from './documents-margins/documents-margins.component';
import {MatchHeightModule} from '../shared/directives/match-height.directive';

@NgModule({
    declarations: [
        SupplierComponent,
        ManufacturerComponent,
        CompanyComponent,
        CompanyInformationComponent,
        UserPrivilegesComponent,
        DocumentsMarginsComponent
    ],
    imports: [
        CommonModule,
        Ng2SmartTableModule,
        ManagementRoutingModule,
        FormsModule,
        PipesModule,
        MatchHeightModule
    ]
})
export class ManagementModule {
}
