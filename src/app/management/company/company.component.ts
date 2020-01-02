import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';
import {ServerDataSource} from 'ng2-smart-table';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

    source: any;
    settings: any;
    endPoint: string;

    constructor(private apiService: ApiService) {
        this.source = new ServerDataSource(apiService._http, {
            endPoint: `${environment.apiUrl}/companies/dt`,
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            dataKey: 'data',
        });
        this.settings = {
            columns: {
                name: {title: 'Company Name', filter: false},
                address: {title: 'Address Line', filter: false},
                contact: {title: 'Contact Number', filter: false},
                motto: {title: 'Motto', filter: false},
                skin: {title: 'Skin', filter: false},
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
            {field: 'name', search: query},
            {field: 'address', search: query},
            {field: 'contact', search: query},
        ], false);
    }

    async onDeleteConfirm(event) {
        try {
            const status = confirm(`Are you sure you want to delete ${event.data.name}`);
            if (!status) {
                return await event.confirm.reject();
            }
            await this.apiService.deleteCompany(event.data.id);
            await event.confirm.resolve();
        } catch (e) {
            window.alert('Couldn\'t delete!!!');
            await event.confirm.reject();
        }
    }

    async onSaveConfirm(event) {
        try {
            await this.apiService.updateCompany(event.data.id, event.newData);
            await event.confirm.resolve();
        } catch (e) {
            window.alert('Error updating!!!');
            await event.confirm.reject();
        }
    }

    async onCreateConfirm(event) {
        console.log(event);
        try {
            await this.apiService.addCompany(event.newData);
            await event.confirm.resolve();
        } catch (e) {
            window.alert('Failed');
            await event.confirm.reject();
        }
    }

}
