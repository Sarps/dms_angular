import {Component, OnInit} from '@angular/core';
import {ServerDataSource} from 'ng2-smart-table';
import {ApiService} from '../../shared/services/api.service';
import {environment} from '../../../environments/environment';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-supplier',
    templateUrl: './documents-margins.component.html',
    styleUrls: ['./documents-margins.component.scss']
})
export class DocumentsMarginsComponent implements OnInit {

    source: any;
    settings: any;
    defaults: any;
    taxTypeCols: any;
    accountsTypeCols: any;
    vehicleMakeCols: any;
    orderTypeCols: any;
    salesManCols: any;
    measurementCols: any;
    journalCols: any;
    part: any;

    constructor(private apiService: ApiService, private toastr: ToastrService) {
        this.part = {};

        this.source = new ServerDataSource(apiService._http, {
            endPoint: `${environment.apiUrl}/suppliers/dt`,
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            dataKey: 'data',
        });
        this.defaults = {
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
                createButtonContent: '<i class="ft-check danger font-medium-1 mr-2 text-success"></i>',
                cancelButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>',
                addButtonContent: '<i class="ft-plus danger font-medium-1 mr-2 text-primary"></i>'
            },
            pager: {
                perPage: 15,
            }
        };

        this.taxTypeCols = {
            type: {title: 'Tax Type', filter: false},
            perc: {title: 'Tax Percentage', filter: false}
        };

        this.accountsTypeCols = {
            type: {title: 'Account Type', filter: false},
            prefix: {title: 'Doc Prefix', filter: false},
            family: {title: 'Family', filter: false}
        };

        this.vehicleMakeCols = {
            make: {title: 'Make', filter: false},
        };

        this.orderTypeCols = {
            type: {title: 'Order Types', filter: false},
            disc: {title: 'Disc Percent', filter: false},
            sort_code: {title: 'Sort Code', filter: false},
        };

        this.salesManCols = {
            man: {title: 'Sales Man', filter: false},
            disc: {title: 'Disc Percent', filter: false},
        };

        this.measurementCols = {
            unit: {title: 'Units', filter: false},
        };

        this.journalCols = {
            type: {title: 'Journal Types', filter: false},
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
