import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/resueableComponents/footer/footer/footer.component';
import { HeaderComponent } from './shared/resueableComponents/header/header/header.component';
import { HomeComponent } from './pages/home/home/home.component';
import { MeetingComponent } from './pages/meeting/meeting/meeting.component';
import { MeetingDetailsComponent } from './pages/meetingDetails/meeting-details/meeting-details.component';
import { SliderComponent } from './shared/resueableComponents/header/slider/slider.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomSoftwareDevelopmentComponent } from './pages/services/softwareDevelopment/customSoftwareDevelopment/custom-software-development/custom-software-development.component';
import { MobileAppDevelopmentComponent } from './pages/services/softwareDevelopment/mobileAppDevelopment/mobile-app-development/mobile-app-development.component';
import { WebDevelopmentComponent } from './pages/services/softwareDevelopment/webDev/web-development/web-development.component';
import { AngularDevComponent } from './pages/services/itHiring/angular-dev/angular-dev.component';
import { ReatJSDevComponent } from './pages/services/itHiring/reat-jsdev/reat-jsdev.component';
import { PythonDevComponent } from './pages/services/itHiring/python-dev/python-dev.component';
import { NodeJSDevComponent } from './pages/services/itHiring/node-jsdev/node-jsdev.component';
import { LaravelDevComponent } from './pages/services/itHiring/laravel-dev/laravel-dev.component';
import { ItTalentAcquisitionComponent } from './pages/services/techTalent/it-talent-acquisition/it-talent-acquisition.component';
import { ItStaffingAndRecruitmentComponent } from './pages/services/techTalent/it-staffing-and-recruitment/it-staffing-and-recruitment.component';
import { TechConsultingComponent } from './pages/services/techConsulting/tech-consulting/tech-consulting.component';
import { TrainingWebDevelopmentComponent } from './pages/training/training-web-development/training-web-development.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MeetingComponent,
    MeetingDetailsComponent,
    SliderComponent,
    ContactComponent,
    CustomSoftwareDevelopmentComponent,
    MobileAppDevelopmentComponent,
    WebDevelopmentComponent,
    AngularDevComponent,
    ReatJSDevComponent,
    PythonDevComponent,
    NodeJSDevComponent,
    LaravelDevComponent,
    ItTalentAcquisitionComponent,
    ItStaffingAndRecruitmentComponent,
    TechConsultingComponent,
    TrainingWebDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
