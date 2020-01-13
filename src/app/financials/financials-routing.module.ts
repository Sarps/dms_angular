import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SalesLedgerComponent} from './sales-ledger/sales-ledger.component';
import {PurchaseLedgerComponent} from './purchase-ledger/purchase-ledger.component';


const routes: Routes = [
    {
        path: 'sales',
        component: SalesLedgerComponent,
        data: { title: 'Part List' },
    },
    {
        path: 'purchase',
        component: PurchaseLedgerComponent,
        data: { title: 'New Part' },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FinancialsRoutingModule {}
