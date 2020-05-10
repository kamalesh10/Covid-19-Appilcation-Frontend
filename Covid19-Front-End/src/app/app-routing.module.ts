import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassComponent } from './PassReg/pass.component';
import { HomeComponent } from './home/home.component';
import { ViewpassComponent } from './viewpass/viewpass.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { FreefoodComponent } from './freefood/freefood.component';
import { ViewdocappointmentsComponent } from './viewdocappointments/viewdocappointments.component';
import { OnlinecoursesComponent } from './onlinecourses/onlinecourses.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'services/addpass', component: PassComponent},
  {path: 'home', component: HomeComponent},
  {path: 'services/viewpass', component: ViewpassComponent},
  {path: 'services/fixappointment', component: DocAppointmentComponent},
  {path: 'services/viewappointments', component: ViewdocappointmentsComponent},
  {path: 'services', component: OurservicesComponent},
  {path: 'services/healthcare', component: HealthcareComponent},
  {path: 'services/freefood', component: FreefoodComponent},
  {path: 'services/onlinecourses', component: OnlinecoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
