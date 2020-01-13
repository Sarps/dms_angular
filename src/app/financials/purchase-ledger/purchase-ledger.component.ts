import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inventory-maintenance',
    templateUrl: './purchase-ledger.component.html',
    styleUrls: ['./purchase-ledger.component.scss']
})

export class PurchaseLedgerComponent implements OnInit {

    public customers: Array<any>;

    constructor(private apiService: ApiService, private router: Router) {
        this.customers = [];
    }

    async ngOnInit() {
        this.customers = <Array<any>> await this.apiService.getCustomerList();
        console.log(this.customers);
    }

    async delete(id: number) {
        await this.apiService.deleteCustomer(id);
        await this.router.navigate(['/trash']);
    }
}