import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  // Secondo "metodo": possiamo accedere ai valori del form anche cosi:
  // @ViewChild('form') form!: NgForm;

  onSubmit(form: NgForm) {
    console.log(form);
    // Continuo di: secondo "metodo", di come accedere ai valori di un form
    // console.log(this.form);
  }
}
