import { Component, OnInit } from '@angular/core';
import { PassRegistrationService } from '../pass-registration.service';

@Component({
  selector: 'app-freefood',
  templateUrl: './freefood.component.html',
  styleUrls: ['./freefood.component.css']
})
export class FreefoodComponent implements OnInit {

  details: any;

  constructor(private service: PassRegistrationService) { }

  ngOnInit(){

    let response = this.service.getEssentialResource();
    response.subscribe((data)=> this.details = [data]);
  }

}
