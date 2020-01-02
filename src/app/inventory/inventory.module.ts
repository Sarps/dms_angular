import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InventoryMaintenanceComponent} from './maintenance/inventory-maintenance.component';
import {InventoryRoutingModule} from './inventory-routing.module';
import {AddPartComponent} from './add-part/add-part.component';
import {EnquiriesComponent} from './enquiries/enquiries.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OrdersComponent} from './orders/orders.component';
import {NewEnquiryComponent} from './new-enquiry/new-enquiry.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PipesModule} from '../shared/pipes/pipes.module';
import {BackordersComponent} from './backorders/backorders.component';
import {ReceiveOrderComponent} from './receive-order/receive-order.component';
import {ReceiptsComponent} from './receipts/receipts.component';
import {TrashCanComponent} from './trash-can/trash-can.component';

@NgModule({
    declarations: [
        InventoryMaintenanceComponent,
        AddPartComponent,
        EnquiriesComponent,
        OrdersComponent,
        NewEnquiryComponent,
        BackordersComponent,
        ReceiveOrderComponent,
        ReceiptsComponent,
        TrashCanComponent
    ],
    imports: [
        CommonModule,
        InventoryRoutingModule,
        NgbModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule,
    ],
    exports: []
})
export class InventoryModule {
}

