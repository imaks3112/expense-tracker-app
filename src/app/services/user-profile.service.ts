import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  url = 'http://localhost:3000/profile';

  constructor(private http: HttpClient) {}

  getUserInformation() {
    return this.http.get(this.url);
  }
}
