import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl: string = environment.baseUrl;
  hasRedirected : boolean = false;

  constructor( private http : HttpClient) { }

  sendEmail (body : string) {
 
    const headers = new HttpHeaders()
   headers.set('Content-Type', 'application/json');
   headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')
   headers.set('Access-Control-Allow-Origin', '*');

   return this.http.post<any> (`${this.baseUrl}api/send-email/revimack/data`,body, {headers:headers})
 
  }
}
