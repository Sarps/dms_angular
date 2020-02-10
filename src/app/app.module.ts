import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from './shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {
    PerfectScrollbarModule,
    PERFECT_SCROLLBAR_CONFIG,
    PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';

import {AppComponent} from './app.component';
import {ContentLayoutComponent} from './layouts/content/content-layout.component';
import {FullLayoutComponent} from './layouts/full/full-layout.component';

import {AuthService} from './shared/auth/auth.service';
import {AuthGuard} from './shared/auth/auth-guard.service';
import {AuthInterceptor} from './shared/interceptors/auth-interceptor';
import {TrashCanComponent} from './trash-can/trash-can.component';
import {PipesModule} from './shared/pipes/pipes.module';
import {ToastrModule} from 'ngx-toastr';
import {InvoicePageComponent} from './invoice/invoice-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FinancialsModule} from './financials/financials.module';
import {ServicingModule} from './servicing/servicing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContentInvoicePageComponent} from './invoice/content-invoice-page.component';
import {FullInvoicePageComponent} from './invoice/full-invoice-page.component';
import {ChartistModule} from 'ng-chartist';
import {MatchHeightModule} from './shared/directives/match-height.directive';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        TrashCanComponent,
        InvoicePageComponent,
        DashboardComponent,
        ContentInvoicePageComponent,
        FullInvoicePageComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        PerfectScrollbarModule,
        PipesModule,
        ReactiveFormsModule,
        FormsModule,
        FinancialsModule,
        ServicingModule,
        ChartistModule,
        MatchHeightModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        {provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG},
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
