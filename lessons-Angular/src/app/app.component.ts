import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, interval } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'lessons-Angular';

  //Login
  constructor(private authService: AuthService) {}

  // Passare dati da Parent(app) a Child(prova2)

  persone = [
    { Nome: 'Luca', Cognome: 'Rossi', isOnline: true, color: 'blue' },
    { Nome: 'Marco', Cognome: 'Verdi', isOnline: false, color: 'green' },
    { Nome: 'Anna', Cognome: 'Neri', isOnline: true, color: 'red' },
    { Nome: 'Giovanni', Cognome: 'Bianchi', isOnline: false, color: 'orange' },
    { Nome: 'Leonardo', Cognome: 'Scuri', isOnline: true, color: 'purple' },
  ];

  OnClick() {
    this.persone = [
      { Nome: 'Alessandro', Cognome: 'Rossi', isOnline: true, color: 'blue' },
      { Nome: 'Antonio', Cognome: 'Verdi', isOnline: false, color: 'green' },
      { Nome: 'Lorenzo', Cognome: 'Neri', isOnline: true, color: 'red' },
      { Nome: 'Joele', Cognome: 'Bianchi', isOnline: false, color: 'orange' },
      { Nome: 'Jefferson', Cognome: 'Scuri', isOnline: true, color: 'purple' },
    ];
  }

  /////////////////////////

  // Passare dati da Child(prova3) a Parent(app)
  onRiceviDati(value: string) {
    console.log(value);
  }

  /////////////////////////

  // Prendere reference elemento HTML in typescript

  @ViewChild('inputSaluti') inputSaluti!: ElementRef<HTMLInputElement>;

  ngOnInit(): void {
    console.log('ngOnInit');
    console.log(this.inputSaluti);

    // Observable
    // crearne uno con interval
    // interval(1000).subscribe((numero) => {
    //   console.log(numero);
    // });

    // Observable
    // crearne uno da zero
    // new Observable((observer) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // }).subscribe((numero) => {
    //   console.log(numero);
    // });

    // Login
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user')!);
      this.authService.createUser(
        user.email,
        user.id,
        user._token,
        user._expirationDate
      );
    }
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.inputSaluti);
  }

  onClick() {
    console.log(this.inputSaluti.nativeElement.value);
  }

  /////////////////////////

  // Direttiva

  // proprietà per Direttiva
  // colore = 'purple';
  colore = '';

  // metodo esempio per Direttiva
  cambiacoloreEvidenziatore(colore: string) {
    this.colore = colore;
  }

  /////////////////////////

  // Pipes

  text = 'Corso-Angular';

  dataOggi = Date.now();

  numero = 5.876786865;
  numero2 = 10;

  /////////////////////////

  // Logout
  onLogout() {
    this.authService.logout();
  }
}
