import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-inventory-maintenance',
    templateUrl: './inventory-maintenance.component.html',
    styleUrls: ['./inventory-maintenance.component.scss']
})

export class InventoryMaintenanceComponent implements OnInit {

    public parts: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.parts = [];
    }

    ngOnInit(): void {
        this.apiService.getPartList().then((resp: Array<any>) => this.parts = resp);
    }

    async delete(id: number) {
        await this.apiService.deletePart(id);
        this.toastr.info('Deleted');
        await this.router.navigate(['/trash']);
    }
}
