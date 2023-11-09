import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TrithemiusCipher } from 'src/app/services/trithemius/trithemius-cipher';


export function trithemiusKeyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) return null;

    if (typeof value != 'string') return null

    const isValid = TrithemiusCipher.validateKey(value);

    return !isValid ? { trithemiusKey: true } : null;
  }
}
