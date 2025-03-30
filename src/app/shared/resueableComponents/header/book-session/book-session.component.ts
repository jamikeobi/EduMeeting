import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookSessionFormDetails } from 'src/app/core/models/bookSession';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-book-session',
  templateUrl: './book-session.component.html',
  styleUrls: ['./book-session.component.css'],
})
export class BookSessionComponent implements OnInit {
  sessionForm!: FormGroup;
  showPopup = false;
  successMessage = '✅ Your session has been successfully booked!';
  id!: string;

  constructor(
    private fb: FormBuilder,
    private bookSessionService: ContactFormService
  ) {}

  ngOnInit(): void {
    this.sessionForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      course: ['', Validators.required],
      sessionDate: ['', Validators.required],
      sessionTime: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit() {
    if (this.sessionForm.valid) {
      // Handle form submission

      const sessionFormDetails = new BookSessionFormDetails(
        this.id,
        this.sessionForm.value.name,
        this.sessionForm.value.email,
        this.sessionForm.value.phone,
        this.sessionForm.value.course,
        this.sessionForm.value.sessionDate,
        this.sessionForm.value.sessionTime,
        this.sessionForm.value.message,
        new Date().toISOString()
      );

      console.log(
        'Book a Session submitted with details: ',
        sessionFormDetails
      );
      this.bookSessionService
        .sendBookSessionFormDetails(sessionFormDetails)
        .subscribe((response) => {
          console.log('Form has been submitted with response: ', response);
          this.showPopup = true;
        });
      setTimeout(() => {
        this.showPopup = false;
        this.sessionForm.reset();
      }, 3000); // Hide popup after 3 seconds
    } else {
      this.sessionForm.markAllAsTouched();
    }
  }
}
