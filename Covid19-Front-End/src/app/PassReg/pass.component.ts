import { Component, OnInit } from '@angular/core';
import { PassEntity } from '../PassEntity';
import { PassRegistrationService } from '../pass-registration.service';

@Component({
  selector: 'app-pass',
  templateUrl: './pass.component.html',
  styleUrls: ['./pass.component.css']
})
export class PassComponent implements OnInit {

  pass: PassEntity = new PassEntity('', 0, '', '', 0, '');
  message: any;

  constructor(private service: PassRegistrationService) { }

  ngOnInit(): void {
  }

  /**
   * submitPassForm Getting the form details using passentity and invokking the passregister methos in service class
   */
  public submitPassForm() {

    let response = this.service.passRegistration(this.pass);
    response.subscribe((data)=>this.message = data);
     }


}
