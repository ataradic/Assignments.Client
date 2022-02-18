import { MessageService } from 'primeng/api';


import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router,private MessageService:MessageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        debugger
        if (error) {
              console.log(error.status+":" + error.error);
              this.MessageService.add({ severity: 'error', summary: 'Error', detail: 'Handeling errores' });
          }
        return throwError(error);
      })
    );
  }
}
