import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/services/api.service';

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

    async restore(t: any) {
        console.log('ijkhjk');
        try {
            await this.apiService.restore({id: t.id, type: t.type});
            this.trash.splice(this.trash.findIndex(tr => tr.id === t.id && tr.type === t.type), 1);
        } catch (e) {

        }
    }
}
