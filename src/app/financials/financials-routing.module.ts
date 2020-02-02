import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SalesLedgerComponent} from './sales-ledger/sales-ledger.component';
import {PurchaseLedgerComponent} from './purchase-ledger/purchase-ledger.component';
import {GeneralLedgerComponent} from './general-ledger/general-ledger.component';
import {NewPaymentComponent} from './new-payment/new-payment.component';
import {PurchaseLedgerDetailsComponent} from './purchase-ledger-details/purchase-ledger-details.component';


const routes: Routes = [
    {
        path: 'sales',
        component: SalesLedgerComponent,
        data: { title: 'Sales Ledger' },
    },
    {
        path: 'purchase',
        component: PurchaseLedgerComponent,
        data: { title: 'Purchase Ledger' },
    },
    {
        path: 'general',
        component: GeneralLedgerComponent,
        data: { title: 'General Ledger' },
    },
    {
        path: 'payment/new',
        component: NewPaymentComponent,
        data: { title: 'Add New Payment' },
    },
    {
        path: 'k',
        component: PurchaseLedgerDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FinancialsRoutingModule {}
