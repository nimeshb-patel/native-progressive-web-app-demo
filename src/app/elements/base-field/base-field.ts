import { FieldConfig } from '../../interfaces/field-config.interface';
import { FormControl, Validators, ValidationErrors } from '@angular/forms';

import { ControlTypes } from '../../enums/control-types.enum';

export class BaseField {

    private elementId: string;
    private elementType: ControlTypes;
    private formLabel: string;
    private formRow: number;
    private isRequired: boolean;
    public formControl: FormControl;

    constructor(fieldConfig: FieldConfig) {
        this.elementId = fieldConfig.elementId;
        this.elementType = fieldConfig.elementType;
        this.formLabel = fieldConfig.formLabel;
        this.formRow = fieldConfig.formRow;
        this.isRequired = fieldConfig.isRequired;
        this.formControl = (this.isRequired === true) ? new FormControl('', Validators.required) : new FormControl();
    }

    getFormRow(): number {
        return this.formRow;
    }

    getElementId(): string {
        return this.elementId;
    }

    getElementType(): ControlTypes {
        return this.elementType;
    }

    getFormLabel(): string {
        return this.formLabel;
    }

    getIsRequired(): boolean {
        return this.isRequired;
    }

    isInValid(): boolean {
        return this.formControl && this.formControl.invalid && (this.formControl.dirty || this.formControl.touched);
    }

    errors(): ValidationErrors {
        return this.formControl && this.formControl.errors;
    }
}
