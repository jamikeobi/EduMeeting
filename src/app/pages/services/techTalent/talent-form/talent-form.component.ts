import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TechTalentFormDetails } from 'src/app/core/models/techtalent';
import { ContactFormService } from 'src/app/core/services/FormService/contact-form.service';

@Component({
  selector: 'app-talent-form',
  templateUrl: './talent-form.component.html',
  styleUrls: ['./talent-form.component.css'],
})
export class TalentFormComponent implements OnInit {
  form!: FormGroup;
  showPopup = false;
  id!: string;

  constructor(
    private fb: FormBuilder,
    private techTalentService: ContactFormService
  ) {}

  ngOnInit(): void {
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

  onSubmit() {
    if (this.form.valid) {
      const talentFormDetails = new TechTalentFormDetails(
        this.id,
        this.form.value.name,
        this.form.value.email,
        this.form.value.phone,
        this.form.value.organization,
        this.form.value.jobRole,
        this.form.value.employmentType,
        this.form.value.additionalDetail,
        new Date().toISOString()
      );

      console.log('Tech Talent Form Details: ', talentFormDetails);

      this.techTalentService
        .sendTechTalentFormDetails(talentFormDetails)
        .subscribe((response) => {
          console.log(
            'Tech Talent Form has been submitted with response: ',
            response
          );
          this.showPopup = true;
        });
      setTimeout(() => {
        this.showPopup = false;
      }, 4000);
      this.form.reset();
    }
  }
}
