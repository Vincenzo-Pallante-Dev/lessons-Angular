import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prova3',
  templateUrl: './prova3.component.html',
  styleUrls: ['./prova3.component.css'],
})
export class Prova3Component {
  // Passare dati da Child(prova3) a Parent(app)
  @Output() mandaDatiEvento = new EventEmitter<string>();

  nome = 'Luca';

  mandaDati() {
    this.mandaDatiEvento.emit(this.nome);
  }
}
