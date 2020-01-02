import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './trash-can.component.html',
    styleUrls: ['./trash-can.component.scss']
})

export class TrashCanComponent implements OnInit {

    public trash: Array<any>;

    constructor(private apiService: ApiService) {
        this.trash = [];
    }

    ngOnInit(): void {
        this.apiService.getTrash().then((resp: Array<any>) => this.trash = resp);
    }

}
