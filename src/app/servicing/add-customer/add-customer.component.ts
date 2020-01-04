import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-bordered',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    public part: any;
    public suppliers: Array<any> = [];
    public categories: Array<any> = [];
    public manufacturers: Array<any> = [];
    public models: Array<any> = [];
    public file: any;

    public priceInc: number;
    public priceExc: number;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) {
        this.suppliers = [];
        this.part = {
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
        this.apiService.getSupplierList().then((resp: Array<any>) => this.suppliers = resp);
        this.apiService.getManufacturerList().then((resp: Array<any>) => this.manufacturers = resp);
        this.apiService.getModelList().then((resp: Array<any>) => this.models = resp);
        this.apiService.getCategories().then((resp: Array<any>) => this.categories = resp);
    }

    async onSubmit(event) {
        console.warn(event);
        const formData = new FormData(event.target);
        try {
            await this.apiService.addPart(formData);
            await this.router.navigate(['/inventory/list']);
        } catch (e) {
            console.error(e);
        }
    }

    onFileSelect(event) {
        if (event.target.files.length > 0) {
            this.file = event.target.files[0];
        }
    }

    calculate(isBackwards: boolean) {
        if (!isBackwards) {
            this.priceExc = +this.priceInc / 1.03;
        } else {
            this.priceInc = +this.priceExc * 1.03;
        }
    }
}
