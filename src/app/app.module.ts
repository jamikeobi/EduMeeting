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
import { FormComponent } from './pages/services/itHiring/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MobileAppComponent } from './pages/training/mobile-app/mobile-app.component';
import { CyberSecurityComponent } from './pages/training/cyber-security/cyber-security.component';
import { DataAnalyticsComponent } from './pages/training/data-analytics/data-analytics.component';
import { UIUXComponent } from './pages/training/ui-ux/ui-ux.component';
import { TrainingFormComponent } from './pages/training/training-form/training-form.component';
import { BookSessionComponent } from './shared/resueableComponents/header/book-session/book-session.component';
import { QouteFormComponent } from './pages/services/softwareDevelopment/qoute-form/qoute-form.component';
import { ItHiringInfoComponent } from './pages/services/itHiring/it-hiring-info/it-hiring-info.component';
import { HttpClientModule } from '@angular/common/http';
import { TalentFormComponent } from './pages/services/techTalent/talent-form/talent-form.component';
import { DashboardComponent } from './core/dashboard/dashboard/dashboard.component';
import { LoginDashboardComponent } from './core/login-dashboard/login-dashboard.component';
import { VirtualAssistanceComponent } from './pages/training/virtual-assistance/virtual-assistance.component';
import { ArtificialIntelligenceComponent } from './pages/training/artificial-intelligence/artificial-intelligence.component';
import { DiscoverComponent } from './pages/training/cyber-security/discover/discover.component';
import { APlusCyberComponent } from './pages/training/cyber-security/discover/a-plus-cyber/a-plus-cyber.component';
import { CertificationKitComponent } from './pages/training/cyber-security/discover/certification-kit/certification-kit.component';
import { ContinuingEducationComponent } from './pages/training/cyber-security/discover/continuing-education/continuing-education.component';
import { CyberDefenseComponent } from './pages/training/cyber-security/discover/cyber-defense/cyber-defense.component';
import { CysaPlusComponent } from './pages/training/cyber-security/discover/cysa-plus/cysa-plus.component';
import { EthicalHackingComponent } from './pages/training/cyber-security/discover/ethical-hacking/ethical-hacking.component';
import { PentestComponent } from './pages/training/cyber-security/discover/pentest/pentest.component';
import { SecAIComponent } from './pages/training/cyber-security/discover/sec-ai/sec-ai.component';
import { SecOTComponent } from './pages/training/cyber-security/discover/sec-ot/sec-ot.component';
import { SecurityPlusComponent } from './pages/training/cyber-security/discover/security-plus/security-plus.component';
import { SecurityProComponent } from './pages/training/cyber-security/discover/security-pro/security-pro.component';
import { SecurityXComponent } from './pages/training/cyber-security/discover/security-x/security-x.component';



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
    TrainingWebDevelopmentComponent,
    FormComponent,
    MobileAppComponent,
    CyberSecurityComponent,
    DataAnalyticsComponent,
    UIUXComponent,
    TrainingFormComponent,
    BookSessionComponent,
    QouteFormComponent,
    ItHiringInfoComponent,
    TalentFormComponent,
    DashboardComponent,
    LoginDashboardComponent,
    VirtualAssistanceComponent,
    ArtificialIntelligenceComponent,
    DiscoverComponent,
    APlusCyberComponent,
    CertificationKitComponent,
    ContinuingEducationComponent,
    CyberDefenseComponent,
    CysaPlusComponent,
    EthicalHackingComponent,
    PentestComponent,
    SecAIComponent,
    SecOTComponent,
    SecurityPlusComponent,
    SecurityProComponent,
    SecurityXComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
