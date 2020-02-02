import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {OrdersComponent} from './orders/orders.component';
import {ServiceCenterComponent} from './service-center/service-center.component';
import {CustomersComponent} from './customers/customers.component';

const routes: Routes = [
    {
        path: 'customers/list',
        component: CustomersComponent,
        data: { title: 'Part List' },
    },
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
        path: 'orders/add',
        component: ServiceCenterComponent,
        data: { title: 'New Purchase' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ServicingRoutingModule {
}
