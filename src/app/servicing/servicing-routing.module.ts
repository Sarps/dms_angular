import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddCustomerComponent} from './add-customer/add-customer.component';
import {AddVehicleComponent} from './add-vehicle/add-vehicle.component';
import {ServiceCenterComponent} from './service-center/service-center.component';
import {CustomersComponent} from './customers/customers.component';
import {TaskboardComponent} from './taskboard/taskboard.component';

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
        path: 'jobs/list',
        component: TaskboardComponent,
        data: { title: 'Orders' },
    },
    {
        path: 'jobs/add',
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
