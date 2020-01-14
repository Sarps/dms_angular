import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/services/api.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-basic-cards',
    templateUrl: './trash-can.component.html',
    styleUrls: ['./trash-can.component.scss']
})

export class TrashCanComponent implements OnInit {

    public trash: Array<any>;

    constructor(private apiService: ApiService, private toastr: ToastrService) {
        this.trash = [];
    }

    ngOnInit(): void {
        this.apiService.getTrash().then((resp: Array<any>) => this.trash = resp);
    }

    async restore(t: any) {
        try {
            await this.apiService.restore({id: t.id, type: t.model_type});
            this.trash.splice(this.trash.findIndex(tr => tr.id === t.id && tr.model_type === t.model_type), 1);
        } catch (e) {
            this.toastr.error('Couldn\'t restore');
        }
    }
}
