import { Component, OnInit } from '@angular/core';
import { PassRegistrationService } from '../pass-registration.service';

@Component({
  selector: 'app-viewpass',
  templateUrl: './viewpass.component.html',
  styleUrls: ['./viewpass.component.css']
})
export class ViewpassComponent implements OnInit {

  passes: any;

  constructor(private service: PassRegistrationService) { }

  ngOnInit() {

    let response = this.service.getPasses();
    response.subscribe((data)=> this.passes = data);
  }

  /**
   * getPasses to retrieve all passes
   */
}
