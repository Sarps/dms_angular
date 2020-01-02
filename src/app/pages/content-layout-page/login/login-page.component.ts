import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthGuard} from '../../../shared/auth/auth-guard.service';
import {ApiService} from '../../../shared/services/api.service';
import {StorageService} from '../../../shared/services/storage.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent {

    @ViewChild('f', {static: false}) loginForm: NgForm;
    email: string;
    password: string;

    constructor(private router: Router, private auth: AuthGuard, private storageService: StorageService,
                private route: ActivatedRoute, private apiService: ApiService) {
    }

    // On submit button click
    async onSubmit() {
        try {
            this.auth.user = await this.apiService.login({
                email: this.email,
                password: this.password
            });
            await this.router.navigate(['/home'], {relativeTo: this.route.parent});
        } catch (e) {
            console.error(e);
            alert('Login Failed');
        }
    }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], {relativeTo: this.route.parent});
    }

    // On registration link click
    onRegister() {
        this.router.navigate(['register'], {relativeTo: this.route.parent});
    }
}
