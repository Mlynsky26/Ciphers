import { Component, Input } from '@angular/core';
import { BasicFormLabels, labels } from '../../cezar/cezar-form/labels';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrithemiusCipher } from 'src/app/services/trithemius/trithemius-cipher';
import { trithemiusKeyValidator } from './trithemius-key-validator';

@Component({
  selector: 'app-trithemius-form',
  templateUrl: './trithemius-form.component.html',
  styleUrls: ['./trithemius-form.component.scss']
})
export class TrithemiusFormComponent {
  @Input() type: string = '';
  labels?: BasicFormLabels;
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
        outputValue = TrithemiusCipher.encode(input, key)
        break;
      case 'decode':
        outputValue = TrithemiusCipher.decode(input, key)
        break;
    }

    outputControl?.setValue(outputValue);
  }

  canShowInputError(key: string): boolean {
    const control = this.form.get(key)
    if (!control) return false
    return control.invalid && (control.dirty || control.touched)
  }

  private initForm() {
    return new FormGroup({
      input: new FormControl(null, Validators.required),
      key: new FormControl('A', [Validators.required, trithemiusKeyValidator()]),
      output: new FormControl({value: '', disabled: true}),
    });
  }
}
