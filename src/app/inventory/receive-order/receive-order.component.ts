import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbInputDatepicker} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-bordered',
    templateUrl: './receive-order.component.html',
    styleUrls: ['./receive-order.component.scss']
})
export class ReceiveOrderComponent implements OnInit {

    suppliers: Array<any>;
    parts: Array<any>;
    currentSupplier: Supplier;
    supplierId: number;
    requestType = 'order';
    editMode = true;
    dueDate: any;
    orderId: number;
    savable = false;

    constructor(private apiService: ApiService, private router: Router,
                private route: ActivatedRoute, private toastr: ToastrService) {
        this.parts = [];
    }

    ngOnInit(): void {
        this.prePopulate();
    }

    async save() {
        const parts = this.parts.filter(part => part.delivered > 0);
        if (parts.length < 1) {return ;}
        try {
            await this.apiService.receiveOrder(this.orderId, {
                receipt: this.parts.reduce((acc, part) => {
                    acc[part.id] = {price: part.price, delivered: part.delivered};
                    return acc;
                }, {}),
                order: this.parts.reduce((acc, part) => {
                    acc[part.id] = {delivered: part.initialQty - part.quantity + part.delivered};
                    return acc;
                }, {})
            });
            this.toastr.success('Order received');
            await this.router.navigate(['/inventory/receipts/list']);
        } catch (e) {
            this.toastr.error('Couldn\'t receive order');
            console.error(e);
        }
    }

    async prePopulate() {
        try {
            this.route.params.subscribe(async params => {
                this.orderId = params.id;
                const purchase: any = await this.apiService.getOrder(params.id);
                this.parts = purchase.parts.map(part => ({
                    id: part.id,
                    image_url: part.image_url,
                    name: part.name,
                    number: part.number,
                    model: `${part.manufacturer.name} - ${part.model.name}`,
                    category: part.category.name,
                    price: part.pivot.price,
                    initialQty: part.pivot.quantity,
                    quantity: part.pivot.quantity - part.pivot.delivered,
                    delivered: 0
                }));
                this.suppliers = [purchase.supplier];
                this.supplierId = purchase.supplier.id;
            });
        } catch (e) {
            this.toastr.error('Error loadign order details');
            console.error(e);
        }
    }

    modifyDelivered(part: any, by: number) {
        const total = part.delivered + by;
        if (total < 0 || total > part.quantity) {
            return;
        }
        part.delivered += by;
        this.savable = this.parts.findIndex(p => p.delivered > 0) > -1;
    }

}

interface Supplier {
    id: string;
    name: string;
    number: string;
    parts: Array<any>;
}
