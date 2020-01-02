import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AssetService {

    public suppliers: Observable<Array<any>>;
    public manufacturers: Observable<Array<any>>;
    public models: Observable<Array<any>>;
    public franchises: Observable<Array<any>>;

    constructor() {
    }
}
