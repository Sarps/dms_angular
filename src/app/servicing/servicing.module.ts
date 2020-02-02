import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {PipesModule} from '../shared/pipes/pipes.module';
import {ServiceCenterComponent} from './service-center/service-center.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ServicingRoutingModule} from './servicing-routing.module';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';
import {CustomersComponent} from './customers/customers.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ServiceCostingComponent} from './service-costing/service-costing.component';

@NgModule({
    declarations: [
        AddVehicleComponent,
        ServiceCenterComponent,
        AddCustomerComponent,
        OrdersComponent,
        CustomersComponent,
        ServiceCostingComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        ServicingRoutingModule,
        NgbDatepickerModule,
        UiSwitchModule,
        NgSelectModule,
        NgbTimepickerModule
    ],
    entryComponents: [ServiceCostingComponent]
})
export class ServicingModule {
}
