import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../shared/auth/auth.service';
import {AuthGuard} from '../../shared/auth/auth-guard.service';

@Component({
    selector: 'app-bordered',
    templateUrl: './company-information.component.html',
    styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {
    public company: any;
    public file: any;

    public priceInc: number;
    public priceExc: number;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder,
                private router: Router, private toastr: ToastrService, private auth: AuthGuard) {
        this.company = {...auth.user.company};
    }

    ngOnInit() {}

    async onSubmit(event) {
        console.warn(event);
        const formData = new FormData(event.target);
        try {
            await this.apiService.addPart(formData);
            await this.router.navigate(['/inventory/list']);
            this.toastr.success('Successfully persisted', 'Not Saved');
        } catch (e) {
            this.toastr.error(e.statusText, 'Not Saved');
            console.error(e);
        }
    }

    reset() {
        this.company = {...this.auth.user.company};
    }

    calculate(isBackwards: boolean) {
        if (!isBackwards) {
            this.priceExc = +this.priceInc / 1.03;
        } else {
            this.priceInc = +this.priceExc * 1.03;
        }
    }
}
