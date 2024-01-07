import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServizioProvaService {
  persons = [
    { Nome: 'Marco', Cognome: 'Rossi', isOnline: true, color: 'blue' },
    { Nome: 'Francesca', Cognome: 'Verdi', isOnline: false, color: 'green' },
    { Nome: 'Luigi', Cognome: 'Neri', isOnline: true, color: 'red' },
    { Nome: 'Maria', Cognome: 'Bianchi', isOnline: false, color: 'orange' },
    { Nome: 'Paolo', Cognome: 'Scuri', isOnline: true, color: 'purple' },
  ];

  constructor() {}

  // Possiamo far accedere ai dati di persons anche tramite un metodo creato, esempio:
  getPersons() {
    return this.persons;
  }

  // Routing
  // Metodo per il routing con parametri

  getPersons2() {
    return this.persons;
  }

  getPersons3(index: number) {
    return this.persons[index];
  }
}
