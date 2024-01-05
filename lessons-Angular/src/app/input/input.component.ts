import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  // Creo il metodo onClick()
  onClick() {
    console.log('Ho cliccato');
  }

  onClick2(e: any) {
    console.log(e);
  }

  onClick3(e: Event) {
    this.text = 'ho cliccato sul bottone';
  }

  // Creo il metodo onInput()
  onInput(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
  }

  text = 'text';
}
