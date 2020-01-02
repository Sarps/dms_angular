import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {InventoryMaintenanceComponent} from './maintenance/inventory-maintenance.component';
import {AddPartComponent} from './add-part/add-part.component';
import {EnquiriesComponent} from './enquiries/enquiries.component';
import {OrdersComponent} from './orders/orders.component';
import {NewEnquiryComponent} from './new-enquiry/new-enquiry.component';
import {BackordersComponent} from './backorders/backorders.component';
import {ReceiveOrderComponent} from './receive-order/receive-order.component';
import {ReceiptsComponent} from './receipts/receipts.component';
import {TrashCanComponent} from './trash-can/trash-can.component';


const routes: Routes = [
    {
        path: 'list',
        component: InventoryMaintenanceComponent,
        data: { title: 'Part List' },
    },
    {
        path: 'part',
        component: AddPartComponent,
        data: { title: 'New Part' },
    },
    {
        path: 'enquiries/list',
        component: EnquiriesComponent,
        data: { title: 'Enquiries' },
    },
    {
        path: 'orders/list',
        component: OrdersComponent,
        data: { title: 'Orders' },
    },
    {
        path: 'orders/new',
        component: NewEnquiryComponent,
        data: { title: 'New Purchase' },
    },
    {
        path: 'orders/incomplete',
        component: BackordersComponent,
        data: { title: 'Back Orders' },
    },
    {
        path: 'orders/receive/:id',
        component: ReceiveOrderComponent,
        data: { title: 'Receive Order' },
    },
    {
        path: 'orders/edit',
        component: NewEnquiryComponent,
        data: { title: 'Edit Purchase' },
    },
    {
        path: 'receipts/list',
        component: ReceiptsComponent,
        data: { title: 'Receive Order' },
    },
    {
        path: 'trash',
        component: TrashCanComponent,
        data: { title: 'Receive Order' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class InventoryRoutingModule {
}
