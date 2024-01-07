import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  // Post
  // Esempio nel component http
  insertPersona(url: string, body: {}) {
    return this.http.post(url, body);
  }

  // Get
  // Esempio nel component http2
  getPersone(url: string) {
    return this.http.get(`${url}?auth=${this.authService.user.token}`);
  }

  // Delete
  // Esempio nel component http
  deletePersona(url: string, id: string) {
    return this.http.delete(`${url}/${id}.json`);
  }

  // Patch
  // Esempio nel component http
  patchPersona(url: string, id: string, body: {}) {
    return this.http.patch(`${url}/${id}.json`, body);
  }
}
