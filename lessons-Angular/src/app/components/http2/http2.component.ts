import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/servizi/firebase.service';

@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css'],
})
export class Http2Component implements OnInit {
  persone: any;

  constructor(private firebase: FirebaseService) {}

  ngOnInit(): void {
    this.firebase
      .getPersone(
        'https://lezione-angular-default-rtdb.europe-west1.firebasedatabase.app/persone.json'
      )
      .subscribe((data: any) => {
        console.log(data);
        this.persone = Object.keys(data).map((key) => {
          data[key]['id'] = key;
          return data[key];
        });
        console.log(this.persone);
      });
  }
}
