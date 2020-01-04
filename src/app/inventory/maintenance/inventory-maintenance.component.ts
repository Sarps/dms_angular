import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-inventory-maintenance',
    templateUrl: './inventory-maintenance.component.html',
    styleUrls: ['./inventory-maintenance.component.scss']
})

export class InventoryMaintenanceComponent implements OnInit {

    public parts: Array<any>;

    constructor(private apiService: ApiService, private router: Router) {
        this.parts = [];
    }

    ngOnInit(): void {
        this.apiService.getPartList().then((resp: Array<any>) => this.parts = resp);
    }

    async delete(id: number) {
        await this.apiService.deletePart(id);
        await this.router.navigate(['/trash']);
    }
}
