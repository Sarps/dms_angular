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

    public orders: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.orders = [];
    }

    ngOnInit(): void {
        this.apiService.getOrderList().then((resp: Array<any>) => this.orders = resp);
    }

    async delete(id: number) {
        try {
            await this.apiService.deleteOrder(id);
            this.toastr.success('Deleted');
            await this.router.navigate(['/trash']);
        } catch (e) {
            this.toastr.error('Item not deleted')
        }
    }

}
