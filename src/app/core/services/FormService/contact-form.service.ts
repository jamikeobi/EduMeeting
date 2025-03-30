import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactFormDetails } from '../../models/contactForm';
import { map, Observable } from 'rxjs';
import { BookSessionFormDetails } from '../../models/bookSession';
import { ItHiringFormDetails } from '../../models/itHiring';
import { QuoteFormDetails } from '../../models/quoteForm';
import { TechTalentFormDetails } from '../../models/techtalent';
import { TrainingFormDetails } from '../../models/trainingForm';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  private apiUrl = "https://morrhtechsolution-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }


  // CONTACT FORM HTTP REQUESTS
  sendContactFormDetails(contactFormDetails: ContactFormDetails){
    const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
    return this.http.post(this.apiUrl + '/contactForm.json', contactFormDetails, {headers: headers});
  }

  getContactFormData(): Observable<ContactFormDetails[]> {
    const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
    return this.http
      .get<{ [key: string]: ContactFormDetails }>(
        `${this.apiUrl + '/contactForm.json'}`,
        { headers: headers }
      )
      .pipe(
        map((response) => {
          let forms: ContactFormDetails[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              forms.push({...response[key], id: key});
            }
          }

          return forms;
        })
      );
  }



  // BOOK-A-SESSION HTTP REQUESTS

  sendBookSessionFormDetails(bookSessionFormDetails: BookSessionFormDetails){
    const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
    return this.http.post(this.apiUrl + '/bookSession.json', bookSessionFormDetails, {headers: headers});
  }

  getBookSessionFormDetails(): Observable<BookSessionFormDetails[]> {
    const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
    return this.http
      .get<{ [key: string]: BookSessionFormDetails }>(
        `${this.apiUrl + '/bookSession.json'}`,
        { headers: headers }
      )
      .pipe(
        map((response) => {
          let forms: BookSessionFormDetails[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              forms.push({...response[key], id: key});
            }
          }

          return forms;
        })
      );
  }


  // Hiring HTTP REQUESTS

  sendHiringFormDetails(sendHiringFormDetails: ItHiringFormDetails){
    const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
    return this.http.post(this.apiUrl + '/hiring.json', sendHiringFormDetails, {headers: headers});
  }

  getHiringFormDetails(): Observable<ItHiringFormDetails[]> {
    const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
    return this.http
      .get<{ [key: string]: ItHiringFormDetails }>(
        `${this.apiUrl + '/hiring.json'}`,
        { headers: headers }
      )
      .pipe(
        map((response) => {
          let forms: ItHiringFormDetails[] = [];
          for (const key in response) {
            if (response.hasOwnProperty(key)) {
              forms.push({...response[key], id: key});
            }
          }

          return forms;
        })
      );
  }

 // Hiring HTTP REQUESTS

 sendQuoteFormDetails(sendQuoteFormDetails: QuoteFormDetails){
  const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
  return this.http.post(this.apiUrl + '/quoteForm.json', sendQuoteFormDetails, {headers: headers});
}

getQuoteFormDetails(): Observable<QuoteFormDetails[]> {
  const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
  return this.http
    .get<{ [key: string]: QuoteFormDetails }>(
      `${this.apiUrl + '/quoteForm.json'}`,
      { headers: headers }
    )
    .pipe(
      map((response) => {
        let forms: QuoteFormDetails[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            forms.push({...response[key], id: key});
          }
        }

        return forms;
      })
    );
}


// Hiring HTTP REQUESTS

sendTechTalentFormDetails(sendTechTalentFormDetails: TechTalentFormDetails){
  const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
  return this.http.post(this.apiUrl + '/techTalent.json', sendTechTalentFormDetails, {headers: headers});
}

getTechTalentFormDetails(): Observable<TechTalentFormDetails[]> {
  const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
  return this.http
    .get<{ [key: string]: TechTalentFormDetails }>(
      `${this.apiUrl + '/techTalent.json'}`,
      { headers: headers }
    )
    .pipe(
      map((response) => {
        let forms: TechTalentFormDetails[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            forms.push({...response[key], id: key});
          }
        }

        return forms;
      })
    );
}






// Hiring HTTP REQUESTS

sendTrainingFormDetails(trainingFormDetails: TrainingFormDetails){
  const headers = new HttpHeaders({headers: "MorrhtechSolutions_2024"});
  return this.http.post(this.apiUrl + '/training.json', trainingFormDetails, {headers: headers});
}

getTrainingFormDetails(): Observable<TrainingFormDetails[]> {
  const headers = new HttpHeaders({ header: 'MorrhtechSolutions_2024' });
  return this.http
    .get<{ [key: string]: TrainingFormDetails }>(
      `${this.apiUrl + '/training.json'}`,
      { headers: headers }
    )
    .pipe(
      map((response) => {
        let forms: TrainingFormDetails[] = [];
        for (const key in response) {
          if (response.hasOwnProperty(key)) {
            forms.push({...response[key], id: key});
          }
        }

        return forms;
      })
    );
}






deleteAllFormData(formType: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${formType}.json`);
}

}
