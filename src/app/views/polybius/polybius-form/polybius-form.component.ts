import { Component, Input } from '@angular/core';
import { PolybiusFormLabels, labels } from '../../cezar/cezar-form/labels';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PolybiusCipher } from 'src/app/services/polybius/polybius-cipher';
import { polybiusKeyValidator } from './polybius-key-validator';

@Component({
  selector: 'app-polybius-form',
  templateUrl: './polybius-form.component.html',
  styleUrls: ['./polybius-form.component.scss']
})
export class PolybiusFormComponent {

  @Input() type: string = '';
  labels?: PolybiusFormLabels;
  form: FormGroup;

  constructor() {
    this.form = this.initForm();
  }

  ngOnInit(): void {
    this.labels = labels.find((data) => data.name == this.type);
  }

  onSubmitForm() {
    const input = this.form.value['input'];
    const key = this.form.value['key'];
    const prime = this.form.value['prime'];
    const outputControl = this.form.get('output')
    let outputValue = '';

    switch (this.type) {
      case 'encode':
        outputValue = PolybiusCipher.encode(input, key, prime)
        break;
      case 'decode':
        outputValue = PolybiusCipher.decode(input, key, prime)
        break;
    }

    outputControl?.setValue(outputValue);
  }


  getRandomKey(): void {
    const keyControl = this.form.get('key')
    keyControl?.setValue(PolybiusCipher.getRandomKey());
  }

  canShowInputError(key: string): boolean {
    const control = this.form.get(key)
    if (!control) return false
    return control.invalid && (control.dirty || control.touched)
  }

  private initForm() {
    return new FormGroup({
      input: new FormControl(null, Validators.required),
      key: new FormControl('', [Validators.required, polybiusKeyValidator()]),
      output: new FormControl({ value: '', disabled: true }),
      prime: new FormControl(true),
    });
  }
}
