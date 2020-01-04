import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './enquiries.component.html',
    styleUrls: ['./enquiries.component.scss']
})

export class EnquiriesComponent implements OnInit {

    public enquiries: Array<any>;

    constructor(private apiService: ApiService, private router: Router) {
        this.enquiries = [];
    }

    ngOnInit(): void {
        this.apiService.getEnquiryList().then((resp: Array<any>) => this.enquiries = resp);
    }

    makePurchase() {

    }

    async delete(id: number) {
        await this.apiService.deleteEnquiry(id);
        await this.router.navigate(['/trash']);
    }
}
