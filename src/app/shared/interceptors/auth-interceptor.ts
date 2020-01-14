import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthGuard} from '../auth/auth-guard.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private auth: AuthGuard) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user = this.auth.user;
        console.log('headers');
        if (user && user.api_token) {
            console.log(user.api_token);
            request = request.clone({
                setHeaders: {Authorization: `Bearer ${user.api_token}`}
            });
        }

        return next.handle(request).pipe(tap(() => {},
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        this.auth.logout();
                        this.router.navigate(['/login']);
                    }
                }
            })
        );
    }
}
