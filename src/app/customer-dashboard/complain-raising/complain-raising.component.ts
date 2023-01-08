import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ComplainService } from 'src/app/shared/complain-service.service';
import { enumValues } from 'src/environment/causes';
import { ComplainFields, complainStatus } from '../../shared/complain-fields';

import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-complain-raising',
  templateUrl: './complain-raising.component.html',
  styleUrls: ['./complain-raising.component.scss'],
})
export class ComplainRaisingComponent implements OnInit {
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
    complainReason: new FormControl('', Validators.required),
    otherReason: new FormControl(''),
    status: new FormControl(complainStatus.New),
  });
  errorMessage: string = '';
  resons: any = Object.values(enumValues.causes);
  selectedOtherCause: boolean = false;
  otherCause: string;
  submitted: boolean = false;
  otherText: string = 'Other then above';
  currentIndex = -1;

  constructor(public complainService: ComplainService, public router: Router) {}

  ngOnInit() {
    const list = this.complainService.getAllComplains();
    this.complainForm
      .get('complainReason')
      ?.setValue(
        this.complainForm.get('complainReason')?.value
          ? this.complainForm.get('complainReason')?.value
          : this.resons[0].name
      );
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
  }

  onSubmit(data: any) {
    console.log('data value', data);
    const complainId = uuidv4();
    data.complainId = complainId;
    const _values = data;
    this.addNewComplain(_values);
  }

  addNewComplain(_values: ComplainFields) {
    this.complainService.create(_values).then(() => {
      this.submitted = true;
    });
  }

  goToReview() {
    this.router.navigate(['complain-review']);
  }
}
