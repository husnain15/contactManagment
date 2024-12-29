import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private baseUrl = 'https://67718534ee76b92dd48fe869.mockapi.io/api';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/contact`);
  }

  getContactDetail(contactId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/contact/${contactId}`);
  }
}
