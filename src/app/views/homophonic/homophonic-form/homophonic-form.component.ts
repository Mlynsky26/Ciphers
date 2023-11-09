import { Component, Input } from '@angular/core';
import { PolybiusFormLabels, labels } from '../../cezar/cezar-form/labels';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomophonicCipher } from 'src/app/services/homophonic/homophonic-cipher';
import { homophonicKeyValidator } from './homophonic-key-validator';

@Component({
  selector: 'app-homophonic-form',
  templateUrl: './homophonic-form.component.html',
  styleUrls: ['./homophonic-form.component.scss']
})
export class HomophonicFormComponent {
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
    const outputControl = this.form.get('output')
    let outputValue = '';

    switch (this.type) {
      case 'encode':
        outputValue = HomophonicCipher.encode(input, key)
        break;
      case 'decode':
        outputValue = HomophonicCipher.decode(input, key)
        break;
    }

    outputControl?.setValue(outputValue);
  }


  getRandomKey(): void {
    const keyControl = this.form.get('key')
    keyControl?.setValue(HomophonicCipher.getRandomKey());
  }

  canShowInputError(key: string): boolean {
    const control = this.form.get(key)
    if (!control) return false
    return control.invalid && (control.dirty || control.touched)
  }

  private initForm() {
    return new FormGroup({
      input: new FormControl(null, Validators.required),
      key: new FormControl('', [Validators.required, homophonicKeyValidator()]),
      output: new FormControl({ value: '', disabled: true }),
    });
  }
}
