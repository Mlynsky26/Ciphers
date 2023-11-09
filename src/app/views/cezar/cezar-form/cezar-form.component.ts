import { Component, OnInit, Input } from '@angular/core';
import { labels, BasicFormLabels } from './labels'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CezarCipher } from 'src/app/services/cezar/cezar-cipher';

@Component({
  selector: 'app-cezar-form',
  templateUrl: './cezar-form.component.html',
  styleUrls: ['./cezar-form.component.scss']
})
export class CezarFormComponent implements OnInit{
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
        outputValue = CezarCipher.encode(input, key)
        break;
      case 'decode':
        outputValue = CezarCipher.decode(input, key)
        break;
    }

    outputControl?.setValue(outputValue);
  }

  private initForm() {
    return new FormGroup({
      input: new FormControl(null, Validators.required),
      key: new FormControl(3, [Validators.required, Validators.min(1), Validators.max(34)]),
      output: new FormControl({value: '', disabled: true}),
    });
  }
}
