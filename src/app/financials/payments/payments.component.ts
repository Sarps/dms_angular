import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NewPaymentComponent} from '../new-payment/new-payment.component';

@Component({
    selector: 'app-payments',
    templateUrl: './payments.component.html',
    styleUrls: ['./payments.component.scss']
})

export class PaymentsComponent implements OnInit {

    public customers: Array<any>;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService, private modalService: NgbModal) {
        this.customers = [];
    }

    async ngOnInit() {
        this.customers = <Array<any>> await this.apiService.getCustomerList();
        console.log(this.customers);
    }

    async delete(id: number) {
        try {
            await this.apiService.deleteCustomer(id);
            this.toastr.success('Deleted');
            await this.router.navigate(['/trash']);
        } catch (e) {
            this.toastr.error('Item not deleted');
        }
    }

    addNew() {
        this.modalService.open(NewPaymentComponent, {size: <any>'xl', centered: true})
    }
}
