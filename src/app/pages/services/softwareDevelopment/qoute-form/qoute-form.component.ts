import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuoteFormDetails } from 'src/app/core/models/quoteForm';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit{
  quoteForm!: FormGroup;
  showPopup = false;
  successMessage = '✅ Your quote request has been received!';
  id!: string;

  constructor(private fb: FormBuilder, private quoteService: ContactFormService) {}


  ngOnInit(): void {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?\d{10,15}$/)]],
      service: ['', Validators.required],
      location: [''],
      contactMethod: [''],
      message: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.quoteForm.valid) {

      const quoteFormDetails = new QuoteFormDetails(
        this.id,
        this.quoteForm.value.name,
        this.quoteForm.value.email,
        this.quoteForm.value.phone,
        this.quoteForm.value.service,
        this.quoteForm.value.location,
        this.quoteForm.value.contactMethod,
        this.quoteForm.value.message,
        new Date().toISOString()
      )

      // Handle form submission logic
      this.quoteService.sendQuoteFormDetails(quoteFormDetails).subscribe((res) => {
        console.log("Form has been submitted with response: ", res);
        
      this.showPopup = true;
      })


      setTimeout(() => {
        this.showPopup = false;
        this.quoteForm.reset();
      }, 4000); // Hide popup after 3s
    } else {
      this.quoteForm.markAllAsTouched();
    }
  }
}
