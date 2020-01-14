import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './backorders.component.html',
    styleUrls: ['./backorders.component.scss']
})

export class BackordersComponent implements OnInit {

    public orders: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.orders = [];
    }

    ngOnInit(): void {
        this.apiService.getBackOrderList().then((resp: Array<any>) => this.orders = resp);
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
