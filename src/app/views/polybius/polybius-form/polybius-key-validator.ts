import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PolybiusCipher } from 'src/app/services/polybius/polybius-cipher';

export function polybiusKeyValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;

    if (!value) return null;

    if (typeof value != 'string') return null

    const isValid = PolybiusCipher.validateKey(value);

    return !isValid ? { polybiusKey: true } : null;
  }
}
