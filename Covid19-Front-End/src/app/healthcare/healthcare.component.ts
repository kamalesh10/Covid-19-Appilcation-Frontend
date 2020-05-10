import { Component, OnInit } from '@angular/core';
import { PassRegistrationService } from '../pass-registration.service';

@Component({
  selector: 'app-healthcare',
  templateUrl: './healthcare.component.html',
  styleUrls: ['./healthcare.component.css']
})
export class HealthcareComponent implements OnInit {

  details: any;

  constructor(private service: PassRegistrationService) { }

  ngOnInit(){

    let response = this.service.getEssentialResource();
    response.subscribe((data)=> this.details = [data]);

  }

}
