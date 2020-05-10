import { Component, OnInit } from '@angular/core';
import { CovidserviceService } from '../covidservice.service';

@Component({
  selector: 'app-viewpass',
  templateUrl: './viewpass.component.html',
  styleUrls: ['./viewpass.component.css']
})
export class ViewpassComponent implements OnInit {

  passes: any;

  constructor(private service: CovidserviceService) { }

  ngOnInit() {

    let response = this.service.getPasses();
    response.subscribe((data)=> this.passes = data);
  }

  /**
   * getPasses to retrieve all passes
   */
}
