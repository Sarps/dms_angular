import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesLedgerComponent} from './sales-ledger/sales-ledger.component';
import {PurchaseLedgerComponent} from './purchase-ledger/purchase-ledger.component';
import {FinancialsRoutingModule} from './financials-routing.module';
import {UiSwitchModule} from 'ngx-ui-switch';

@NgModule({
    declarations: [
        SalesLedgerComponent,
        PurchaseLedgerComponent
    ],
  imports: [
    CommonModule,
    FinancialsRoutingModule,
    UiSwitchModule
  ]
})
export class FinancialsModule {
}
