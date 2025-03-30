import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TrainingFormDetails } from 'src/app/core/models/trainingForm';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css'],
})
export class TrainingFormComponent implements OnInit {
  enrollForm!: FormGroup;
  showPopup: boolean = false;
  successMessage: string = '✅ Form submitted successfully!';
  id!: string;

  constructor(private fb: FormBuilder, private trainingFormService: ContactFormService) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      jobRole: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.enrollForm.valid) {
      const trainingFormDetails = new TrainingFormDetails(
        this.id,
        this.enrollForm.value.name,
        this.enrollForm.value.email,
        this.enrollForm.value.phone,
        this.enrollForm.value.jobRole,
        this.enrollForm.value.message,
        new Date().toISOString()
      );
      this.trainingFormService
        .sendTrainingFormDetails(trainingFormDetails)
        .subscribe((response) => {
          console.log(
            'Training Form has been submitted with response: ',
            response
          );
          this.showPopup = true;
        });
      setTimeout(() => {
        this.showPopup = false;
      }, 4000);
      this.enrollForm.reset();
    }
  }
}
