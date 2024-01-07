import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APIKey = 'AIzaSyBPjrP5knGpGdMYYXdYDglM7fftGqUdTx4';
  isLoggedIn = true;
  isAdmin = true;
  signUpURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.APIKey}`;

  signInURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.APIKey}`;
  user!: User;

  constructor(private http: HttpClient, private router: Router) {}

  isAuthenticated() {
    return this.isLoggedIn;
  }

  isRoleAdmin() {
    return this.isAdmin;
  }

  // Metodo per il SignUp
  signUp(email: string, password: string) {
    return this.http.post(this.signUpURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  // Metodo per il SignIn
  signIn(email: string, password: string) {
    return this.http.post(this.signInURL, {
      email: email,
      password: password,
      returnSecureToken: true,
    });
  }

  createUser(email: string, id: string, token: string, expirationDate: Date) {
    this.user = new User(email, id, token, expirationDate);
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
    this.user = null!;
    localStorage.removeItem('user');
    // Ritorna al Login
    this.router.navigate(['/signin']);
  }
}
