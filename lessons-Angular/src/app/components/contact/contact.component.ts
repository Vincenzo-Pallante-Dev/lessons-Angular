import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  // Routing con parametri

  persone: any;
  // persona: any;
  isProfile!: boolean;

  constructor(
    private servizioProva: ServizioProvaService // private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.persone = this.servizioProva.getPersons2();
    // if (this.route.snapshot.paramMap.get('id')) {
    //   this.isProfile = true;
    //   this.persona = this.servizioProva.getPersons3(
    //     parseInt(this.route.snapshot.paramMap.get('id')!)
    //   );
    // }
    //  else {
    //   this.isProfile = false;
    //   this.persone = this.servizioProva.getPersons2();
  }
}
