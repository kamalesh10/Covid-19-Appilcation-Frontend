import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidserviceService {

  private BASE_URL = "http://covid19-tracker.cloudjiffy.net";
  private PASS_REGISTRATION = this.BASE_URL +'/pass/addpass';
  private VIEW_PASS_URL = this.BASE_URL + '/pass/viewpass';
  private VIEW_DOCTOR_APPOINTMENTS = this.BASE_URL + '/doctor/viewappointments';
  private FIX_APPOINTMENT = this.BASE_URL + '/doctor/fixappointment';


  constructor(private http: HttpClient) {}

  public passRegistration(pass){
  
    return this.http.post(this.PASS_REGISTRATION, pass, {responseType:'text' as 'json'});

  }

  public getPasses(){

    return this.http.get(this.VIEW_PASS_URL);
  }

  public getAppointments(){

    return this.http.get(this.VIEW_DOCTOR_APPOINTMENTS);
  }


  public fixdocappointment(fixappointment){
    return this.http.post(this.FIX_APPOINTMENT, fixappointment, {responseType:'text' as 'json'})
    }


  public getCaseReport(){
    return this.http.get('https://api.covid19india.org/data.json');
    
  }

  public getEssentialResource(){
    return this.http.get('https://api.covid19india.org/resources/resources.json')
  }
}
