import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {StorageService} from '../services/storage.service';
import {ApiService} from '../services/api.service';

@Injectable()
export class AuthGuard implements CanActivate {

    public _user;

    constructor(private authService: AuthService, private storageService: StorageService,
                private router: Router, private apiService: ApiService) {
    }

    set user(v) {
        this._user = v;
        this.storageService.saveInfo('user', JSON.stringify(v));
    }

    get user() {
        return this._user;
    }

    canActivate() {
        try {
            if (this.user) {
                return true;
            }
            const response = JSON.parse(this.storageService.getInfo('user'));
            if (response === null || !response.api_token) {
                this.router.navigate(['/login']);
                return false;
            }
            this.user = response;
        } catch (e) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    logout() {
        this._user = null;
        this.storageService.saveInfo('user', JSON.stringify(null));
    }

}
