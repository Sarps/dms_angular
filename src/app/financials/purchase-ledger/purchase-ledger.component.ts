import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PurchaseLedgerDetailsComponent} from '../purchase-ledger-details/purchase-ledger-details.component';

@Component({
    selector: 'app-inventory-maintenance',
    templateUrl: './purchase-ledger.component.html',
    styleUrls: ['./purchase-ledger.component.scss']
})

export class PurchaseLedgerComponent implements OnInit {

    public suppliers: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private modalService: NgbModal) {
        this.suppliers = [];
    }

    async ngOnInit() {
        this.suppliers = <Array<any>>await this.apiService.getSupplierLedger();
        console.log(this.suppliers);
    }

    async delete(id: number) {
        try {
            await this.apiService.deleteSupplier(id);
            this.toastr.success('Deleted successfully');
            await this.router.navigate(['/trash']);
        } catch (e) {
            this.toastr.error('Item not deleted');
        }
    }

    view(supplier: any) {
        if (supplier.total === 0) {
            return;
        }
        const modalRef = this.modalService.open(PurchaseLedgerDetailsComponent, {size: 'lg', centered: true});
        // modalRef.componentInstance.name = 'World';
    }
}
