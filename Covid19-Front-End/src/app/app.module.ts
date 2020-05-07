import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PassComponent } from './PassReg/pass.component';
import { PassRegistrationService } from './pass-registration.service';
import { ViewpassComponent } from './viewpass/viewpass.component';
import { DocAppointmentComponent } from './doc-appointment/doc-appointment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PassComponent,
    ViewpassComponent,
    DocAppointmentComponent,
    DocAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [PassRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
