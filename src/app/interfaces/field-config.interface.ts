import { ControlTypes } from '../enums/control-types.enum';

export interface FieldConfig {
    elementId: string;
    elementType: ControlTypes;
    formLabel: string;
    formRow: number;
    isRequired: boolean;
}
