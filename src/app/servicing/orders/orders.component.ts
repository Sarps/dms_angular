import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})

export class OrdersComponent implements OnInit {

    public orders: Array<any>;

    constructor(private apiService: ApiService, private router: Router) {
        this.orders = [];
    }

    ngOnInit(): void {
        this.apiService.getOrderList().then((resp: Array<any>) => this.orders = resp);
    }

    async delete(id: number) {
        await this.apiService.deleteOrder(id);
        await this.router.navigate(['/trash']);
    }

}
