import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-bordered',
    templateUrl: './add-vehicle.component.html',
    styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
    public vehicle: any;
    public staffList: Array<any> = [];
    public customers: Array<any> = [];
    public manufacturers: Array<any> = [];
    public models: Array<any> = [];
    public file: any;

    public priceInc: number;
    public priceExc: number;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
        this.staffList = [];
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
        this.apiService.getStaffList().then((resp: Array<any>) => this.staffList = resp);
        this.apiService.getManufacturerList().then((resp: Array<any>) => this.manufacturers = resp);
        this.apiService.getModelList().then((resp: Array<any>) => this.models = resp);
        this.apiService.getCustomerList().then((resp: Array<any>) => this.customers = resp);
    }

    async onSubmit(event) {
        console.warn(event);
        const formData = new FormData(event.target);
        try {
            await this.apiService.addVehicle(this.vehicle);
            this.toastr.success(`Vehicle with Reg: <b>${this.vehicle.reg_no}</b> added to customer`, 'Saved', {enableHtml: true});
            this.vehicle = {};
        } catch (e) {
            console.error(e);
        }
    }
}
