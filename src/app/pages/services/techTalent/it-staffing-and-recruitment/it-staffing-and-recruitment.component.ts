import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-it-staffing-and-recruitment',
  templateUrl: './it-staffing-and-recruitment.component.html',
  styleUrls: ['./it-staffing-and-recruitment.component.css']
})
export class ItStaffingAndRecruitmentComponent {
form: FormGroup;
  showPopup = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      organization: [''],
      jobRole: ['', Validators.required],
      employmentType: ['', Validators.required],
      additionalDetails: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.showPopup = true; // Show success popup
    setTimeout(() => {
      this.showPopup = false; // Hide popup after 3 seconds
      this.form.reset();
    }, 3000);
  }
}
