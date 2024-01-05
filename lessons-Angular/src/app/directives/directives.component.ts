import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  isVisible = false;
  isVisible2 = true;

  persone = [
    { Nome: 'Luca', Cognome: 'Rossi', isOnline: true },
    { Nome: 'Marco', Cognome: 'Verdi', isOnline: false },
    { Nome: 'Anna', Cognome: 'Neri', isOnline: true },
    { Nome: 'Giovanni', Cognome: 'Bianchi', isOnline: false },
    { Nome: 'Leonardo', Cognome: 'Scuri', isOnline: true },
  ];

  numero = 3;
  stringa = 'Topolino';
}
