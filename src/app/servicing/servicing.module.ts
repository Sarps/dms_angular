import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {PipesModule} from '../shared/pipes/pipes.module';
import {AddOrderComponent} from './add-order/add-order.component';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {ServicingRoutingModule} from './servicing-routing.module';
import {OrdersComponent} from './orders/orders.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
    declarations: [
        AddVehicleComponent,
        AddOrderComponent,
        AddCustomerComponent,
        OrdersComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        FormsModule,
        ReactiveFormsModule,
        ServicingRoutingModule,
        NgbDatepickerModule,
        UiSwitchModule
    ]
})
export class ServicingModule {
}
