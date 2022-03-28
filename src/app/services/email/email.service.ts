import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseUrl: string = environment.baseUrl;
  



  constructor( private http : HttpClient) { }

  sendEmail (body : string) {
 
    const headers = new HttpHeaders()
   headers.set('Content-Type', 'application/json');
   headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
   headers.set('Access-Control-Allow-Origin', '*');

    return this.http.post<any> (`${this.baseUrl}api/send-mail`,body, {headers:headers})
 
  }

}