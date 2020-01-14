import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-bordered',
    templateUrl: './add-order.component.html',
    styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
    public vehicle: any;
    public vehicles: Array<any> = [];
    public customers: Array<any> = [];
    public order: any;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder,
                private router: Router, private toastr: ToastrService) {
        this.order = {};
        this.vehicle = {
            'number': '',
            'name': '',
            'retail_price': 0.0,
            'cost_price': 0.0,
            'category_id': null,
            'manufacturer_id': null,
            'model_id': null,
            'quantity': 0
        };
    }

    ngOnInit() {
        this.apiService.getCustomerList().then((resp: Array<any>) => this.customers = resp);
    }

    async onSubmit(event) {
        console.warn(event);
        const formData = new FormData(event.target);
        try {
            await this.apiService.addPart(formData);
            this.toastr.success('Saved succesfully');
            await this.router.navigate(['/inventory/list']);
        } catch (e) {
            this.toastr.error(e.error.message, 'Not Saved');
            console.error(e);
        }
    }

    loadVehicle($event: number) {
        if ($event === null) {
            return;
        }
        this.apiService.getCustomerVehicles($event).then((resp: Array<any>) => this.vehicles = resp);
    }
}
