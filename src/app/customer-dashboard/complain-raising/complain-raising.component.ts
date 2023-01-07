import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ComplainService } from 'src/app/shared/complain-service.service';
import { enumValues } from 'src/environment/causes';
import { ComplainFields } from '../../shared/complain-fields';

import { Router } from '@angular/router';

@Component({
  selector: 'app-complain-raising',
  templateUrl: './complain-raising.component.html',
  styleUrls: ['./complain-raising.component.scss'],
})
export class ComplainRaisingComponent implements OnInit {
  // complainForm: FormGroup<any>;
  complainForm = new FormGroup({
    customerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
    ]),
    customerEmail: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ])
    ),
    customerNumber: new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.pattern('[- +()0-9]{10,12}'),
      ])
    ),
    cause: new FormControl('', Validators.required),
    otherReason: new FormControl(''),
  });
  errorMessage: string = '';
  resons: any = Object.values(enumValues.causes);
  selectedOtherCause: boolean = false;
  otherCause: string;
  submitted: boolean = false;
  otherText: string = 'Other then above';
  currentIndex = -1;

  constructor(
    private formBuilder: FormBuilder,
    public complainService: ComplainService,
    public router: Router
  ) {}

  ngOnInit() {
    const list = this.complainService.getAllComplains();
    console.log(list);
    console.log(this.resons);

    console.log(this.complainForm.get('cause')?.value);
    this.complainForm
      .get('cause')
      ?.setValue(
        this.complainForm.get('cause')?.value
          ? this.complainForm.get('cause')?.value
          : this.resons[0].name
      );
    // const defaultCause = this.complainForm.get('cause')?.value
    //   ? this.complainForm.get('cause')?.value
    //   : this.causes[0];
  }

  validation_messages = {
    customerEmail: [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' },
    ],
    // password: [
    //   { type: 'required', message: 'Password is required.' },
    //   {
    //     type: 'minlength',
    //     message: 'Password must be at least 5 characters long.',
    //   },
    // ],
  };

  onSelectCause(evt: any) {
    console.log(evt);
    if (evt.value.name === this.otherText) {
      this.selectedOtherCause = true;
    }
    console.log(this.selectedOtherCause);
  }

  onSubmit(data: any) {
    console.log(this.complainForm.value);
    console.log('data value', data);
    const _values = data;
    this.addNewComplain(_values);
  }

  addNewComplain(_values: ComplainFields) {
    this.complainService.create(_values).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  goToReview() {
    this.router.navigate(['complain-review']);
  }
}
