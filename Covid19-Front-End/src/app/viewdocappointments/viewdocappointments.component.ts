import { Component, OnInit } from '@angular/core';
import { PassRegistrationService } from '../pass-registration.service';

@Component({
  selector: 'app-viewdocappointments',
  templateUrl: './viewdocappointments.component.html',
  styleUrls: ['./viewdocappointments.component.css']
})
export class ViewdocappointmentsComponent implements OnInit {

  appointments: any

  constructor(private service: PassRegistrationService) { }

  ngOnInit(){

    let response = this.service.getAppointments();
    response.subscribe((data)=> this.appointments = data);
  }

}
