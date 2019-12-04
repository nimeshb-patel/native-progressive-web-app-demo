import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ControlTypes } from '../enums/control-types.enum';
import { Colors } from '../enums/colors.enum';

import { BaseField } from '../elements/base-field/base-field';

import { FormService } from '../services/form/form.service';
import { LoadingService } from '../services/loading/loading.service';
import { ToastService } from '../services/toast/toast.service';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    formElements: Array<BaseField>;
    formgroup: FormGroup;
    controlTypes = ControlTypes;
    colors = Colors;

    constructor(private formService: FormService, private toastService: ToastService, private loadingService: LoadingService) { }

    ngOnInit() {
        this.formElements = this.formService.getFormData();
        this.formgroup = new FormGroup(this.createGroup());
    }

    createGroup() {
        const formObj = {};
        this.formElements.forEach(element => {
            formObj[element.getElementId()] = element.formControl;
        });
        return formObj;
    }

    onFormSubmit() {
        this.loadingService.showLoader();
        this.formService.postFormData(this.formgroup.value).subscribe(
            async (response: any) => {
                await this.loadingService.HideLoader();
            },
            async (error: string) => {
                await this.loadingService.HideLoader();
                await this.toastService.showToast(error, Colors.danger);
            }
        );
    }

}
