import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ApiService {

    baseUrl: string;

    constructor(public _http: HttpClient) {
        this.baseUrl = environment.apiUrl;
    }

    login(data) {
        return this._http.post(`${this.baseUrl}/login`, data).toPromise();
    }

    getPartList() {
        return this._http.get(`${this.baseUrl}/parts`).toPromise();
    }

    getEnquiryList() {
        return this._http.get(`${this.baseUrl}/enquiries`).toPromise();
    }

    getOrderList() {
        return this._http.get(`${this.baseUrl}/orders`).toPromise();
    }

    getBackOrderList() {
        return this._http.get(`${this.baseUrl}/orders/backorders`).toPromise();
    }

    getReceiptList() {
        return this._http.get(`${this.baseUrl}/receipts`).toPromise();
    }

    getSupplierList() {
        return this._http.get(`${this.baseUrl}/suppliers`).toPromise();
    }

    getManufacturerList() {
        return this._http.get(`${this.baseUrl}/manufacturers`).toPromise();
    }

    getModelList() {
        return this._http.get(`${this.baseUrl}/models`).toPromise();
    }

    getTrash() {
        return this._http.get(`${this.baseUrl}/trash`).toPromise();
    }

    getCategories() {
        return this._http.get(`${this.baseUrl}/categories`).toPromise();
    }

    getSupplier(value: number) {
        return this._http.get(`${this.baseUrl}/suppliers/${value}`).toPromise();
    }

    addPart(data) {
        return this._http.post(`${this.baseUrl}/parts`, data).toPromise();
    }

    deletePart(id) {
        return this._http.delete(`${this.baseUrl}/parts/${id}`).toPromise();
    }

    getEnquiry(id: any) {
        return this._http.get(`${this.baseUrl}/enquiries/${id}`).toPromise();
    }

    addEnquiry(data) {
        return this._http.post(`${this.baseUrl}/enquiries`, data).toPromise();
    }

    deleteEnquiry(id) {
        return this._http.delete(`${this.baseUrl}/enquiries/${id}`).toPromise();
    }

    getOrder(id: any) {
        return this._http.get(`${this.baseUrl}/orders/${id}`).toPromise();
    }

    addOrder(data) {
        return this._http.post(`${this.baseUrl}/orders`, data).toPromise();
    }

    receiveOrder(id: number, data: any) {
        return this._http.put(`${this.baseUrl}/orders/receive/${id}`, data).toPromise();
    }

    deleteOrder(id) {
        return this._http.delete(`${this.baseUrl}/orders/${id}`).toPromise();
    }

    addSupplier(data) {
        return this._http.post(`${this.baseUrl}/suppliers`, data).toPromise();
    }

    updateSupplier(id, data) {
        return this._http.put(`${this.baseUrl}/suppliers/${id}`, data).toPromise();
    }

    deleteSupplier(id) {
        return this._http.delete(`${this.baseUrl}/suppliers/${id}`).toPromise();
    }

    addCompany(data) {
        return this._http.post(`${this.baseUrl}/companies`, data).toPromise();
    }

    updateCompany(id, data) {
        return this._http.put(`${this.baseUrl}/companies/${id}`, data).toPromise();
    }

    deleteCompany(id) {
        return this._http.delete(`${this.baseUrl}/companies/${id}`).toPromise();
    }

    async restore(data: { id: any; type: any }) {
        return this._http.post(`${this.baseUrl}/trash`, data).toPromise();
    }
}
