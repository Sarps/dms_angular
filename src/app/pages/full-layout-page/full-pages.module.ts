import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPagesRoutingModule } from './full-pages-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChartistModule} from 'ng-chartist';
import {InvoicePageComponent} from './invoice/invoice-page.component';
import {PipesModule} from '../../shared/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        ChartistModule,
        FullPagesRoutingModule,
        PipesModule,
    ],
    declarations: [
        DashboardComponent,
        InvoicePageComponent,
    ],
})
export class FullPagesModule { }
