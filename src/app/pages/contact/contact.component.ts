import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormDetails } from 'src/app/core/models/contactForm';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  contactForm!: FormGroup;
  submitted = false;
  message: string = '';
  showMessage: boolean = false;
  id:any;


  constructor(private fb: FormBuilder, private contactService: ContactFormService) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: [''],
      message: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
  
    if (this.contactForm.valid) {
      const contactFormDetails = new ContactFormDetails(
        this.id,
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.phone,
        this.contactForm.value.subject,
        this.contactForm.value.message,
        new Date().toISOString()
      );
  
      console.log('Contact Form Details: ', contactFormDetails);

      this.contactService.sendContactFormDetails(contactFormDetails).subscribe((response) => {
        console.log('Form has been submitted successfully with response name: ', response);
      this.showMessage = true;
        
      });
      
      this.message = "✅ Form has been submitted successfully";
  
      // Hide the message after 3 seconds
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);
  
      this.contactForm.reset();
      this.submitted = false;
    } else {
      console.log("Form is invalid, please correct errors.");
    }
  }
  
}
