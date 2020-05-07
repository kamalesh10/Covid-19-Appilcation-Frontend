import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PassRegistrationService {

  constructor(private http: HttpClient) {}

  public passRegistration(pass){
  
    return this.http.post('http://localhost:8080/pass/addpass', pass, {responseType:'text' as 'json'});

  }

  public getPasses(){

    return this.http.get('http://localhost:8080/pass/viewpass');
  }

}
