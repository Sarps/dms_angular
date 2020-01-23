import {Component, OnInit} from '@angular/core';
import {ServerDataSource} from 'ng2-smart-table';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-supplier',
    templateUrl: './general-ledger.component.html',
    styleUrls: ['./general-ledger.component.scss']
})
export class GeneralLedgerComponent implements OnInit {

    source: any;
    settings: any;
    endPoint: string;

    constructor(private apiService: ApiService, private toastr: ToastrService) {
        this.source = new ServerDataSource(apiService._http, {
            endPoint: `${environment.apiUrl}/suppliers/dt`,
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            dataKey: 'data',
        });
        this.settings = {
            columns: {
                type: {title: 'Type', filter: false},
                account_name: {title: 'Account Name', filter: false},
                account_no: {title: 'Account Number', filter: false},
                description: {title: 'Description', filter: false},
                bank: {title: 'Bank', filter: false},
                group_id: {title: 'Group Id', filter: false},
                created_by: {title: 'Created By', filter: false},
                created_at: {title: 'Date Created', filter: false},
                modified_by: {title: 'Modified By', filter: false},
                modified_at: {title: 'Date Modified', filter: false},
            },
            attr: {
                class: 'table table-responsive'
            },
            edit: {
                confirmSave: true,
                editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>',
                saveButtonContent: '<i class="ft-check danger font-medium-1 mr-2"></i>',
                cancelButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
            },
            delete: {
                confirmDelete: true,
                deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
            },
            add: {
                confirmCreate: true,
                createButtonContent: '<i class="ft-check danger font-medium-1 mr-2"></i>',
                cancelButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
            },
            pager: {
                perPage: 15,
            }
        };
    }

    ngOnInit() {
    }

    onSearch(query: string = '') {
        this.source.setFilter([
            {field: 'id', search: query},
            {field: 'name', search: query},
            {field: 'username', search: query},
            {field: 'email', search: query},
        ], false);
    }

    async onDeleteConfirm(event) {
        try {
            const status = confirm(`Are you sure you want to delete ${event.data.name}`);
            if (!status) {
                return await event.confirm.reject();
            }
            // await this.apiService.deleteSupplier(event.data.id);
            await event.confirm.resolve();
        } catch (e) {
            this.toastr.error('Couldn\'t delete!!!');
            await event.confirm.reject();
        }
    }

    async onSaveConfirm(event) {
        try {
            // await this.apiService.updateSupplier(event.data.id, event.newData);
            await event.confirm.resolve();
        } catch (e) {
            this.toastr.error('Error updating!!!');
            await event.confirm.reject();
        }
    }

    async onCreateConfirm(event) {
        console.log(event);
        try {
            // await this.apiService.addSupplier(event.newData);
            await event.confirm.resolve();
        } catch (e) {
            this.toastr.error('Couldn\'t create', e.error.message);
            await event.confirm.reject();
        }
    }

}
