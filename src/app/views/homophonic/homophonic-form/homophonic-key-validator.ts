import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { HomophonicCipher } from 'src/app/services/homophonic/homophonic-cipher';

export function homophonicKeyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) return null;

    if (typeof value != 'string') return null

    const isValid = HomophonicCipher.validateKey(value);

    return !isValid ? { homophonicKey: true } : null;
  }
}
