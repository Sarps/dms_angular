import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {OrdersComponent} from './orders/orders.component';
import {AddOrderComponent} from './add-order/add-order.component';

const routes: Routes = [
    // {
    //     path: 'customers/list',
    //     component: ,
    //     data: { title: 'Part List' },
    // },
    {
        path: 'customers/new',
        component: AddCustomerComponent,
        data: { title: 'New Part' },
    },
    {
        path: 'vehicles/new',
        component: AddVehicleComponent,
        data: { title: 'Enquiries' },
    },
    {
        path: 'orders/list',
        component: OrdersComponent,
        data: { title: 'Orders' },
    },
    {
        path: 'orders/new',
        component: AddOrderComponent,
        data: { title: 'New Purchase' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServicingRoutingModule {
}
