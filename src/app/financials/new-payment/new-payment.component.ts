import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-bordered',
    templateUrl: './new-payment.component.html',
    styleUrls: ['./new-payment.component.scss']
})
export class NewPaymentComponent implements OnInit {

    suppliers: Array<any>;
    parts: Array<any>;
    currentSupplier: Supplier;
    supplierId: number;
    requestType: string;
    orderType: string;
    editMode: boolean;
    dueDate: any;

    constructor(private apiService: ApiService, private router: Router,
                private route: ActivatedRoute, private toastr: ToastrService) {
        this.parts = [];
        this.editMode = this.router.url.indexOf('/edit') > -1;
    }

    ngOnInit(): void {
        if (this.editMode) {
            this.prePopulate();
        } else {
            this.apiService.getSupplierList().then((resp: Array<any>) => this.suppliers = resp);
        }
    }

    loadParts() {
        this.apiService.getSupplier(this.supplierId).then((resp: Supplier) => this.currentSupplier = resp);
    }

    addPart(event) {
        event.quantity = 0;
        this.parts.unshift({
            ...event
        });
    }

    removePart(i: number) {
        this.parts.splice(i, 1);
    }

    async save() {
        try {
            const due_date = `${this.dueDate.year}-${this.dueDate.month}-${this.dueDate.day}`
            switch (this.requestType) {
                case 'enquiry':
                    await this.apiService.addEnquiry({
                        supplier: this.currentSupplier.id,
                        parts: this.parts.map(part => part.id),
                        due_date
                    });
                    await this.router.navigate(['/inventory/enquiries/list']);
                    break;

                case 'order':
                    await this.apiService.addOrder({
                        supplier: this.currentSupplier.id,
                        parts: this.parts.reduce((acc, part) => {
                            acc[part.id] = {price: part.retail_price, quantity: part.quantity};
                            return acc;
                        }, {}),
                        type: this.orderType,
                        due_date
                    });
                    await this.router.navigate(['/inventory/orders/list']);
                    break;
                default:
                    this.toastr.error('You need to select a purchase type');
                    break;
            }
        } catch (e) {
            this.toastr.error(e.statusText, 'Not Saved');
            console.error(e);
        }
    }

    async prePopulate() {
        try {
            this.route.queryParams.subscribe(async params => {
                this.requestType = params.type;
                let purchase: any;
                switch (this.requestType) {
                    case 'enquiry':
                        purchase = await this.apiService.getEnquiry(params.id);
                        break;

                    case 'order':
                        purchase = await this.apiService.getOrder(params.id);
                        break;
                    default:
                        alert('Unknown purchase');
                        await this.router.navigate(['/inventory/list']);
                        break;
                }
                this.parts = purchase.parts;
                this.suppliers = [purchase.supplier];
                this.supplierId = purchase.supplier.id;
                this.dueDate = new Date(purchase.due_date);
                console.log(this.dueDate);
                this.loadParts();
            });
        } catch (e) {
            console.error(e);
        }
    }
}

interface Supplier {
    id: string;
    name: string;
    number: string;
    parts: Array<any>;
}
