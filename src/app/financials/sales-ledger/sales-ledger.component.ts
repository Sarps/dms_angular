import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-inventory-maintenance',
    templateUrl: './sales-ledger.component.html',
    styleUrls: ['./sales-ledger.component.scss']
})

export class SalesLedgerComponent implements OnInit {

    public customers: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.customers = [];
    }

    async ngOnInit() {
        this.customers = <Array<any>> await this.apiService.getCustomerList();
        console.log(this.customers);
    }

    async delete(id: number) {
        try {
            await this.apiService.deleteCustomer(id);
            this.toastr.success('Deleted successfully');
            await this.router.navigate(['/trash']);
        } catch (e) {
            this.toastr.error('Item not deleted');
        }
    }
}
