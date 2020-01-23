import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesLedgerComponent} from './sales-ledger/sales-ledger.component';
import {PurchaseLedgerComponent} from './purchase-ledger/purchase-ledger.component';
import {FinancialsRoutingModule} from './financials-routing.module';
import {UiSwitchModule} from 'ngx-ui-switch';
import {GeneralLedgerComponent} from './general-ledger/general-ledger.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {NewPaymentComponent} from './new-payment/new-payment.component';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
    declarations: [
        SalesLedgerComponent,
        PurchaseLedgerComponent,
        GeneralLedgerComponent,
        NewPaymentComponent
    ],
    imports: [
        CommonModule,
        FinancialsRoutingModule,
        UiSwitchModule,
        Ng2SmartTableModule,
        NgbDatepickerModule,
        NgSelectModule
    ]
})
export class FinancialsModule {
}
