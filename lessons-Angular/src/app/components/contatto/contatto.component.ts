import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServizioProvaService } from 'src/app/servizi/servizio-prova.service';

@Component({
  selector: 'app-contatto',
  templateUrl: './contatto.component.html',
  styleUrls: ['./contatto.component.css'],
})
export class ContattoComponent implements OnInit {
  id!: number;
  persona2: any;

  constructor(
    private servizioProva: ServizioProvaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // il + ha la stessa funzione di parseInt(), quindi mi trasforma il mio output da stringa in number
    // this.id = +this.route.snapshot.paramMap.get('id')!;
    // this.persona2 = this.servizioProva.getPersons3(this.id);

    // Ci andiamo ad "iscrivere"(subscribe) alla mappa dei parametri(paramMap), per cambiare lo snapshot che avevamo prima, e quindi cambiarlo il modo dinamico
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.persona2 = this.servizioProva.getPersons3(this.id);
    });
  }
}
