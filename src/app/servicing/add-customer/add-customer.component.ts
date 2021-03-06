import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-bordered',
    templateUrl: './add-customer.component.html',
    styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
    public part: any;
    public suppliers: Array<any> = [];

    constructor(private apiService: ApiService, private formBuilder: FormBuilder,
                private router: Router, private toastr: ToastrService) {
        this.part = {};
    }

    ngOnInit() {
    }

    async onSubmit(event) {
        console.warn(event);
        const formData = new FormData(event.target);
        try {
            await this.apiService.addCustomer(formData);
            this.toastr.success('Saved Successfully');
            await this.router.navigate(['/servicing/list']);
        } catch (e) {
            this.toastr.error('Not saved');
            console.error(e);
        }
    }

}
