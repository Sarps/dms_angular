import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

    public confirmedOrders: Array<any>;
    public unconfirmedOrders: Array<any>;

    constructor(private apiService: ApiService, private router: Router) {
        this.unconfirmedOrders = this.confirmedOrders = [];
    }

    async ngOnInit() {
        const resp = <Array<any>>await this.apiService.getOrderList();
        this.unconfirmedOrders = resp.filter(o => o.status === 'UNCONFIRMED');
        this.confirmedOrders = resp.filter(o => o.status === 'CONFIRMED');
    }

    async delete(id: number) {
        await this.apiService.deleteOrder(id);
        await this.router.navigate(['/trash']);
    }

}
