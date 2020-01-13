import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../shared/services/api.service';
import {AuthGuard} from '../../shared/auth/auth-guard.service';

@Component({
    selector: 'app-invoice-page',
    templateUrl: '../../invoice/invoice-page.component.html',
    styleUrls: ['../../invoice/invoice-page.component.scss']
})

export class InvoicePageComponent implements OnInit {

    private sub: any;
    purchase: any;
    subTotal: number;
    tax: number;
    idPrefix: string;
    user: any;
    type: string;
    id: number;
    printing = false;

    constructor(private route: ActivatedRoute, private apiService: ApiService,
                private router: Router, public auth: AuthGuard) {

    }

    ngOnInit() {
        this.user = this.auth.user;
        this.loadData();
    }

    async loadData() {
        try {
            this.route.queryParams.subscribe(async params => {
                this.type = params.type;
                this.id = params.id;
                switch (this.type) {
                    case 'enquiry':
                        this.purchase = await this.apiService.getEnquiry(this.id);
                        this.idPrefix = 'EN';
                        break;

                    case 'order':
                        this.purchase = await this.apiService.getOrder(this.id);
                        this.idPrefix = 'PO';
                        break;
                    default:
                        alert('Unknown purchase');
                        await this.router.navigate(['/inventory/list']);
                        break;
                }
                this.subTotal = this.purchase.parts.reduce((acc, cur) => +cur.retail_price + acc, 0);
                this.tax = this.subTotal * 0.03;
            });
        } catch (e) {
            console.error(e);
        }
    }

    async confirmOrder() {
        await this.apiService.confirmOrder(this.id);
        this.purchase.status = 'CONFIRMED';
    }
}
