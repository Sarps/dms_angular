import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-purchase-ledger-details',
    templateUrl: './purchase-ledger-details.component.html',
    styleUrls: ['./purchase-ledger-details.component.scss']
})

export class PurchaseLedgerDetailsComponent implements OnInit {

    public supplier: any;
    @Input() supplierId: number;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {}

    ngOnInit(): void {
        if (this.supplierId !== undefined) {
            this.apiService.getSupplierLedgerDetails(this.supplierId).then(resp => this.supplier = resp);
        }
    }

    async delete(id: number) {
        await this.apiService.deletePart(id);
        this.toastr.info('Deleted');
        await this.router.navigate(['/trash']);
    }

    total = (receipt) => receipt.parts.reduce((acc: number, cur: any) => +cur.cost_price * cur.quantity + acc, 0)

}

