import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ContactFormService } from '../../services/FormService/contact-form.service';
import { HttpClient } from '@angular/common/http';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

declare var WOW: any;
declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  // Dictionary to store different form details dynamically
  formDetailsMap: Record<string, any[]> = {
    contact: [],
    bookSession: [],
    itHiring: [],
    quote: [],
    techTalent: [],
    training: [],
  };

  selectedFormType: string = 'contact'; // Default selected form type

  // Pagination state
  currentPage = 1;
  itemsPerPage = 10;
  paginatedForms: any[] = [];
  totalPages = 1;

  constructor(private contactService: ContactFormService, private http: HttpClient) {}

  ngOnInit() {
    this.contactService.getContactFormData().subscribe((res) => {
      this.formDetailsMap['contact'] = res;
      this.updatePagination();
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

      // Match frontend types to Firebase paths
      const formTypeMapping: Record<string, string> = {
        contact: "contactForm",
        bookSession: "bookSession",
        itHiring: "hiring",
        quote: "quoteForm",
        techTalent: "techTalent",
        training: "training"
      };

      const firebaseFormType = formTypeMapping[type] || type;

      this.http.delete(`${this.contactService['apiUrl']}/${firebaseFormType}/${id}.json`)
        .subscribe(() => {
          this.formDetailsMap[type] = this.formDetailsMap[type].filter((form) => form.id !== id);
          console.log(`Deleted task with id: ${id}`);
          this.updatePagination();
          this.taskToDelete = undefined;
        });
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
      this.updatePagination();
    }, error => {
      console.error(`Error deleting ${firebaseFormType} form data:`, error);
    });
  }

  // Function to switch displayed form type
  selectFormType(type: string) {
    this.selectedFormType = type;
    this.currentPage = 1;  // reset to first page
    this.updatePagination();
  }

  // Pagination logic
  updatePagination() {
    const forms = this.formDetailsMap[this.selectedFormType] || [];
    this.totalPages = Math.max(1, Math.ceil(forms.length / this.itemsPerPage));
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedForms = forms.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  // ✅ Export selected form data to PDF
  downloadPDF() {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(16);
    doc.text(
      `${this.selectedFormType.charAt(0).toUpperCase() + this.selectedFormType.slice(1)} Form Records`,
      14,
      20
    );

    // Get current form data
    const records = this.formDetailsMap[this.selectedFormType] || [];

    if (records.length === 0) {
      doc.text('No records found.', 14, 30);
    } else {
      // Extract headers dynamically
      const headers = Object.keys(records[0]).map((key) => this.formatHeader(key));

      // Extract rows
      const body = records.map((record) =>
        Object.keys(record).map((key) => record[key] || '')
      );

      autoTable(doc, {
        head: [headers],
        body: body,
        startY: 30,
        styles: { fontSize: 9, cellPadding: 2 },
        headStyles: { fillColor: [0, 123, 255] }, // Blue table header
        alternateRowStyles: { fillColor: [240, 240, 240] } // Zebra rows
      });
    }

    // Save file
    doc.save(`${this.selectedFormType}_records.pdf`);
  }

  // ✅ Utility to make headers more readable
  private formatHeader(key: string): string {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
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
