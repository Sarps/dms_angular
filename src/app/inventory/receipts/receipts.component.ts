import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './receipts.component.html',
    styleUrls: ['./receipts.component.scss']
})

export class ReceiptsComponent implements OnInit {

    public receipts: Array<any>;

    constructor(private apiService: ApiService) {
        this.receipts = [];
    }

    ngOnInit(): void {
        this.apiService.getReceiptList().then((resp: Array<any>) => this.receipts = resp);
    }

}
