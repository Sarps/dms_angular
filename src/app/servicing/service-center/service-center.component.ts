import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ServiceCostingComponent} from '../service-costing/service-costing.component';

@Component({
    selector: 'app-bordered',
    templateUrl: './service-center.component.html',
    styleUrls: ['./service-center.component.scss']
})
export class ServiceCenterComponent implements OnInit {
    public vehicles: Array<any> = [];
    public customers: Array<any> = [];
    public job: any;
    public isNew: boolean;

    constructor(private apiService: ApiService, private formBuilder: FormBuilder,
                private router: Router, private toastr: ToastrService, private modalService: NgbModal) {
        this.job = {};
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

    loadJobs($event: number) {
        if ($event === null) {
            return;
        }
        // this.apiService.getCustomerJobs($event).then((resp: Array<any>) => this.vehicles = resp);
    }

    loadVehicles($event: any) {
        if ($event === null) {
            return;
        }
        this.apiService.getCustomerVehicles($event.id).then((resp: Array<any>) => this.vehicles = resp);
    }

    openCosting(resp: any) {
        const modal = this.modalService.open(ServiceCostingComponent, {size: <any>'xl', centered: true});
        modal.componentInstance.job = resp;
    }

    async saveJob() {
        try {
            // TODO: Process 3 Date and Time Pairs
            const resp = await this.apiService.addJob(this.job);
            this.openCosting(resp);
        } catch (e) {
            console.log(e);
        }
    }
}
