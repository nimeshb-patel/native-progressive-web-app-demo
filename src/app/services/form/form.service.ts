import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { FieldConfig } from '../../interfaces/field-config.interface';
import { BaseField } from '../../elements/base-field/base-field';
import { ControlTypes } from '../../enums/control-types.enum';
import { HttpErrorHandlerService } from '../http-error-handler/http-error-handler.service';


@Injectable({
    providedIn: 'root'
})
export class FormService {

    private data: Array<FieldConfig> = [
        {
            elementId: 'textbox1',
            elementType: ControlTypes.Textbox,
            formLabel: 'First Name',
            formRow: 1,
            isRequired: true
        },
        {
            elementId: 'textbox2',
            elementType: ControlTypes.Textbox,
            formLabel: 'Last Name',
            formRow: 2,
            isRequired: true
        }
    ];

    constructor(private http: HttpClient, private errorHandler: HttpErrorHandlerService) { }

    getFormData(): Array<BaseField> {
        return this.data.map(item => new BaseField(item)).sort((a, b) => a.getFormRow() - b.getFormRow());
    }


    postFormData(data): Observable<any> {
        const url = environment.baseUrl + '/api/register1';
        return this.http.post(url, JSON.stringify(data)).pipe(
            catchError(this.errorHandler.handleError('form service', 'post form data', data))
        );
    }
}
