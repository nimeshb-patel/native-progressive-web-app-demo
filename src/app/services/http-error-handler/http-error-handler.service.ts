import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HttpErrorHandlerService {

    constructor() { }

    handleError<T>(serviceName: string = '', operation: string = 'operation', result: T = {} as T) {
        // we can use serviceName, operation and result to store errors for future reference
        return (error: HttpErrorResponse): Observable<T> => {
            return throwError(error.message);
        };
    }
}
