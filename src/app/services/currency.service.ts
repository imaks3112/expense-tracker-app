import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Example API

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
