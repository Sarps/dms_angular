import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../shared/services/api.service';
import {AuthGuard} from '../shared/auth/auth-guard.service';

@Component({
    selector: 'app-invoice-page',
    templateUrl: './invoice-page.component.html',
    styleUrls: ['./invoice-page.component.scss']
})

export class ContentInvoicePageComponent implements OnInit {

    private sub: any;
    purchase: any;
    subTotal: number;
    tax: number;
    idPrefix: string;
    user: any;
    printing = true;

    constructor(private route: ActivatedRoute, private apiService: ApiService,
                private router: Router, public auth: AuthGuard, private toastr: ToastrService) {}

    ngOnInit() {
        this.user = this.auth.user;
        this.loadData().then(() => {
            setTimeout(window.print, 1000);
        });
    }

    async loadData() {
        try {
            this.route.queryParams.subscribe(async params => {
                switch (params.type) {
                    case 'enquiry':
                        this.purchase = await this.apiService.getEnquiry(params.id);
                        this.idPrefix = 'EN';
                        break;

                    case 'order':
                        this.purchase = await this.apiService.getOrder(params.id);
                        this.idPrefix = 'PO';
                        break;
                    default:
                        alert('Unknown purchase');
                        await this.router.navigate(['/inventory/list']);
                        break;
                }
                this.subTotal = this.purchase.parts.reduce((acc, cur) => acc + cur.retail_price, 0);
                this.tax = this.subTotal * 0.03;
            });
        } catch (e) {
            this.toastr.error('Error loading invoice details');
            console.error(e);
        }
    }

}
