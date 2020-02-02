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
import {PurchaseLedgerDetailsComponent} from './purchase-ledger-details/purchase-ledger-details.component';
import {PipesModule} from '../shared/pipes/pipes.module';

@NgModule({
    declarations: [
        SalesLedgerComponent,
        PurchaseLedgerComponent,
        GeneralLedgerComponent,
        NewPaymentComponent,
        PurchaseLedgerDetailsComponent
    ],
    imports: [
        CommonModule,
        FinancialsRoutingModule,
        UiSwitchModule,
        Ng2SmartTableModule,
        NgbDatepickerModule,
        NgSelectModule,
        PipesModule
    ],
    entryComponents: [PurchaseLedgerDetailsComponent],
    exports: [
        PurchaseLedgerDetailsComponent
    ]
})
export class FinancialsModule {
}
