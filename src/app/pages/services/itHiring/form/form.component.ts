import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItHiringFormDetails } from 'src/app/core/models/itHiring';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  quoteForm!: FormGroup;
  successMessage: string = '';
  showPopup: boolean = false;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private hiringService: ContactFormService
  ) {}

  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      organization: [''],
      projectType: ['', Validators.required],
      developerType: ['', Validators.required],
      projectDuration: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.quoteForm.valid) {
      const hiringFormDetails = new ItHiringFormDetails(
        this.id,
        this.quoteForm.value.name,
        this.quoteForm.value.email,
        this.quoteForm.value.phone,
        this.quoteForm.value.organization,
        this.quoteForm.value.projectType,
        this.quoteForm.value.developerType,
        this.quoteForm.value.projectDuration,
        this.quoteForm.value.message,
        new Date().toISOString()
      );

      console.log('Hiring Form Details: ', hiringFormDetails);

      this.hiringService
        .sendHiringFormDetails(hiringFormDetails)
        .subscribe((response) => {
          console.log(
            'Hiring Form has been submitted with response: ',
            response
          );
          this.showPopup = true;
        });

      this.successMessage = '✅ Form submitted successfully!';
      setTimeout(() => {
        this.successMessage = ''; // Hide message after 3 seconds
        this.showPopup = false;
      }, 3000);
      this.quoteForm.reset();
    }
  }
}
