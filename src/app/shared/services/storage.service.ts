import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    public titles: Array<string>;

    constructor(private apiService: ApiService) {
        this.titles = [];
    }

    saveInfo(key: string, info: string) {
        localStorage.setItem(key, info);
    }

    getInfo(key: string) {
        return localStorage.getItem(key);
    }

    clearInfo(key: string) {
        localStorage.removeItem(key);
    }

}
