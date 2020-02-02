import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../shared/services/api.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-purchase-ledger-details',
    templateUrl: './purchase-ledger-details.component.html',
    styleUrls: ['./purchase-ledger-details.component.scss']
})

export class PurchaseLedgerDetailsComponent implements OnInit {

    public parts: Array<any>;
    public supplier: any;

    constructor(private apiService: ApiService, private router: Router, private toastr: ToastrService) {
        this.parts = [];
        this.supplier = {
            'id': 3,
            'name': 'Some Supplier',
            'address': 'Box 4421, Adum',
            'contact': '+233554253285',
            'created_at': '2020-02-01 21:22:07',
            'updated_at': '2020-02-01 21:22:07',
            'deleted_at': null,
            'receipts': [
                {
                    'id': 1,
                    'order_id': 4,
                    'created_at': '2020-02-01 22:42:13',
                    'updated_at': '2020-02-01 22:42:13',
                    'deleted_at': null,
                    'laravel_through_key': 3,
                    'parts': [
                        {
                            'id': 1,
                            'number': 1,
                            'name': 'Fan belt',
                            'retail_price': 3213,
                            'cost_price': 687,
                            'quantity': 200,
                            'reorder': 23,
                            'description': 'Not very necessary',
                            'created_at': '2020-02-01 21:23:24',
                            'updated_at': '2020-02-01 21:23:24',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 1,
                                'purchasable_type': 'App\\Receipt',
                                'price': 3213,
                                'delivered': 15
                            }
                        },
                        {
                            'id': 2,
                            'number': 2,
                            'name': 'Gear Box',
                            'retail_price': 500,
                            'cost_price': 300,
                            'quantity': 120,
                            'reorder': 50,
                            'description': 'Home use is acceptable',
                            'created_at': '2020-02-01 21:26:45',
                            'updated_at': '2020-02-01 21:26:45',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 2,
                                'purchasable_type': 'App\\Receipt',
                                'price': 500,
                                'delivered': 5
                            }
                        },
                        {
                            'id': 3,
                            'number': 3,
                            'name': 'Brake Pad',
                            'retail_price': 1234,
                            'cost_price': 1000,
                            'quantity': 500,
                            'reorder': 200,
                            'description': 'Only brand new',
                            'created_at': '2020-02-01 21:29:56',
                            'updated_at': '2020-02-01 21:29:56',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 3,
                                'purchasable_type': 'App\\Receipt',
                                'price': 1234,
                                'delivered': 0
                            }
                        }
                    ],
                    'order': {
                        'id': 4,
                        'type': 'STOCK',
                        'status': 'CONFIRMED',
                        'due_date': '2019-12-24 00:00:00',
                        'supplier_id': 3,
                        'user_id': 1,
                        'created_at': '2020-02-01 22:41:24',
                        'updated_at': '2020-02-01 22:41:37',
                        'deleted_at': null
                    }
                },
                {
                    'id': 1,
                    'order_id': 4,
                    'created_at': '2020-02-01 22:42:13',
                    'updated_at': '2020-02-01 22:42:13',
                    'deleted_at': null,
                    'laravel_through_key': 3,
                    'parts': [
                        {
                            'id': 1,
                            'number': 1,
                            'name': 'Fan belt',
                            'retail_price': 3213,
                            'cost_price': 687,
                            'quantity': 200,
                            'reorder': 23,
                            'description': 'Not very necessary',
                            'created_at': '2020-02-01 21:23:24',
                            'updated_at': '2020-02-01 21:23:24',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 1,
                                'purchasable_type': 'App\\Receipt',
                                'price': 3213,
                                'delivered': 15
                            }
                        },
                        {
                            'id': 2,
                            'number': 2,
                            'name': 'Gear Box',
                            'retail_price': 500,
                            'cost_price': 300,
                            'quantity': 120,
                            'reorder': 50,
                            'description': 'Home use is acceptable',
                            'created_at': '2020-02-01 21:26:45',
                            'updated_at': '2020-02-01 21:26:45',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 2,
                                'purchasable_type': 'App\\Receipt',
                                'price': 500,
                                'delivered': 5
                            }
                        },
                        {
                            'id': 3,
                            'number': 3,
                            'name': 'Brake Pad',
                            'retail_price': 1234,
                            'cost_price': 1000,
                            'quantity': 500,
                            'reorder': 200,
                            'description': 'Only brand new',
                            'created_at': '2020-02-01 21:29:56',
                            'updated_at': '2020-02-01 21:29:56',
                            'deleted_at': null,
                            'pivot': {
                                'purchasable_id': 1,
                                'part_id': 3,
                                'purchasable_type': 'App\\Receipt',
                                'price': 1234,
                                'delivered': 0
                            }
                        }
                    ],
                    'order': {
                        'id': 4,
                        'type': 'STOCK',
                        'status': 'CONFIRMED',
                        'due_date': '2019-12-24 00:00:00',
                        'supplier_id': 3,
                        'user_id': 1,
                        'created_at': '2020-02-01 22:41:24',
                        'updated_at': '2020-02-01 22:41:37',
                        'deleted_at': null
                    }
                }
            ]
        };
    }

    ngOnInit(): void {
        this.apiService.getPartList().then((resp: Array<any>) => this.parts = resp);
    }

    async delete(id: number) {
        await this.apiService.deletePart(id);
        this.toastr.info('Deleted');
        await this.router.navigate(['/trash']);
    }

    total = (receipt) => receipt.parts.reduce((acc: number, cur: any) => +cur.cost_price * cur.quantity + acc, 0)

}

