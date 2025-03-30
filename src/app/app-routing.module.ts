import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { MeetingComponent } from './pages/meeting/meeting/meeting.component';
import { MeetingDetailsComponent } from './pages/meetingDetails/meeting-details/meeting-details.component';
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
import { MobileAppComponent } from './pages/training/mobile-app/mobile-app.component';
import { DataAnalyticsComponent } from './pages/training/data-analytics/data-analytics.component';
import { CyberSecurityComponent } from './pages/training/cyber-security/cyber-security.component';
import { UIUXComponent } from './pages/training/ui-ux/ui-ux.component';
import { BookSessionComponent } from './shared/resueableComponents/header/book-session/book-session.component';
import { QouteFormComponent } from './pages/services/softwareDevelopment/qoute-form/qoute-form.component';
import { ItHiringInfoComponent } from './pages/services/itHiring/it-hiring-info/it-hiring-info.component';
import { DashboardComponent } from './core/dashboard/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services', component: MeetingComponent},
  {path: 'about', component: MeetingDetailsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'book-a-session', component: BookSessionComponent},
  {path: 'get-a-quote', component: QouteFormComponent},

  // Services Routes
  {path: 'services/web-development', component: WebDevelopmentComponent},
  {path: 'services/custom-software', component: CustomSoftwareDevelopmentComponent},
  {path: 'services/mobile-app', component: MobileAppDevelopmentComponent},

  // IT HIRING
  {path: 'IT-hiring', component: ItHiringInfoComponent},
  {path: 'services/angular-developer', component: AngularDevComponent},
  {path: 'services/react-developer', component: ReatJSDevComponent},
  {path: 'services/python-developer', component: PythonDevComponent},
  {path: 'services/nodejs-developer', component: NodeJSDevComponent},
  {path: 'services/laravel-developer', component: LaravelDevComponent},

  {path: 'services/it-talent-acquisition', component: ItTalentAcquisitionComponent},
  {path: 'services/it-staffing-recruitment', component: ItStaffingAndRecruitmentComponent},
  {path: 'services/tech-consulting', component: TechConsultingComponent},


  // Training
  {path: 'training/web-development', component: TrainingWebDevelopmentComponent},
  {path: 'training/mobile-app', component: MobileAppComponent},
  {path: 'training/data-analysis', component: DataAnalyticsComponent},
  {path: 'training/cyber-security', component: CyberSecurityComponent},
  {path: 'training/ui-ux', component: UIUXComponent},
  {path: 'DC', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
