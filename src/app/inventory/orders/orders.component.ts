import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

    public confirmedOrders: Array<any>;
    public unconfirmedOrders: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.unconfirmedOrders = this.confirmedOrders = [];
    }

    async ngOnInit() {
        const resp = <Array<any>>await this.apiService.getOrderList();
        this.unconfirmedOrders = resp.filter(o => o.status === 'UNCONFIRMED');
        this.confirmedOrders = resp.filter(o => o.status === 'CONFIRMED');
    }

    async delete(id: number) {
        try {
            await this.apiService.deleteOrder(id);
            this.toastr.success('Deleted successfully');
            await this.router.navigate(['/trash']);
        } catch (e) {
            this.toastr.error('Item not deleted');
        }
    }

}
