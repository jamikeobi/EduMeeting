import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactFormDetails } from '../../models/contactForm';
import { ContactFormService } from '../../services/FormService/contact-form.service';
import { HttpClient } from '@angular/common/http';
import { BookSessionFormDetails } from '../../models/bookSession';
import { ItHiringFormDetails } from '../../models/itHiring';
import { QuoteFormDetails } from '../../models/quoteForm';
import { TechTalentFormDetails } from '../../models/techtalent';
import { TrainingFormDetails } from '../../models/trainingForm';

declare var WOW: any;
declare var $: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, AfterViewInit{
  // Dictionary to store different form details dynamically
  formDetailsMap: Record<string, any[]> = {
    contact: [],
    bookSession: [],
    itHiring: [],
    quote: [],
    TechTalent: [],
    training: [],
  };

  selectedFormType: string = 'contact'; // Default selected form type

  constructor(private contactService: ContactFormService, private http: HttpClient) {}

  ngOnInit() {
    this.contactService.getContactFormData().subscribe((res) => {
      this.formDetailsMap['contact'] = res;
    });

    this.contactService.getBookSessionFormDetails().subscribe((res) => {
      this.formDetailsMap['bookSession'] = res;
    });

    this.contactService.getHiringFormDetails().subscribe((res) => {
      this.formDetailsMap['itHiring'] = res;
    });

    this.contactService.getQuoteFormDetails().subscribe((res) => {
      this.formDetailsMap['quote'] = res;
    });

    this.contactService.getTechTalentFormDetails().subscribe((res) => {
      this.formDetailsMap['techTalent'] = res;
    });

    this.contactService.getTrainingFormDetails().subscribe((res) => {
      this.formDetailsMap['training'] = res;
    });

    
  }




  // Delete a single form entry
  showConfirmDialog = false;
  taskToDelete: { id: string; type: string } | undefined;

  toggleConfirmDialog(id: string, type: string) {
    this.taskToDelete = { id, type };
    this.showConfirmDialog = true;
  }

  confirmDelete() {
    if (this.taskToDelete) {
      const { id, type } = this.taskToDelete;
      this.http.delete(`https://africantropicalfish-default-rtdb.firebaseio.com/${type}/${id}.json`).subscribe(() => {
        this.formDetailsMap[type] = this.formDetailsMap[type].filter((form) => form.id !== id);
        console.log(`Deleted task with id: ${id}`);
        this.taskToDelete = undefined;
      });
    } else {
      console.log('Task id is undefined');
    }
    this.showConfirmDialog = false;
  }

  cancelDelete() {
    this.taskToDelete = undefined;
    this.showConfirmDialog = false;
  }

  // Delete all data of a selected form type
  deleteAllFormData() {
    if (!this.selectedFormType) {
      console.error("No form type selected");
      return;
    }
  
    const formTypeMapping: Record<string, string> = {
      contact: "contactForm",
      bookSession: "bookSession",
      itHiring: "hiring",
      quote: "quoteForm",
      techTalent: "techTalent",
      training: "training"
    };
  
    const firebaseFormType = formTypeMapping[this.selectedFormType] || this.selectedFormType;
  
    this.contactService.deleteAllFormData(firebaseFormType).subscribe(() => {
      this.formDetailsMap[this.selectedFormType] = []; // Clear UI
      console.log(`All ${firebaseFormType} form data has been deleted`);
    }, error => {
      console.error(`Error deleting ${firebaseFormType} form data:`, error);
    });
  }
  

  // Function to switch displayed form type
  selectFormType(type: string) {
    this.selectedFormType = type;
  }

  ngAfterViewInit(): void {
    // Initialize WOW.js
 new WOW().init();

 // Initialize OwlCarousel
 $('.owl-carousel').owlCarousel({
   loop: false,
   margin: 10,
   nav: true,
   responsive: {
     0: { items: 2 },
     600: { items: 3 },
     1000: { items: 5 }
   }
 });
}

}
