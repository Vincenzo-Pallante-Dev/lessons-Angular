import { Component, OnInit } from '@angular/core';
import { ServizioProvaService } from '../servizi/servizio-prova.service';

@Component({
  selector: 'app-prova-for-services',
  templateUrl: './prova-for-services.component.html',
  styleUrls: ['./prova-for-services.component.css'],
})
export class ProvaForServicesComponent implements OnInit {
  constructor(private servizioProva: ServizioProvaService) {}

  ngOnInit(): void {
    console.log(this.servizioProva.persons);
    // possiamo accedere a persons anche tramite un metodo(creato da noi), esempio:
    console.log(this.servizioProva.getPersons());
  }
}
