import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent implements OnInit {
  form!: FormGroup;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nome: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl(),
    });
  }

  onSubmit() {
    console.log(this.form);
    this.firebase
      .insertPersona(
        'https://lezione-angular-default-rtdb.europe-west1.firebasedatabase.app/persone.json',
        { nome: this.form.value.nome, email: this.form.value.email }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Creo un metodo per il delete persona
  onDeletePersona() {
    this.firebase
      .deletePersona(
        'https://lezione-angular-default-rtdb.europe-west1.firebasedatabase.app/persone',
        '-NhWiQ53qOZdzaas26eh'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }

  // Creo un metodo per la modifica dell'utente
  onPatchPersona() {
    this.firebase
      .patchPersona(
        'https://lezione-angular-default-rtdb.europe-west1.firebasedatabase.app/persone',
        '-NhWtEz_9xXcYP2xrEoL',
        { email: 'prova@provagmail.com' }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
