import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // Observable - subscribe - unsubscribe
  sottoscrizione: any;

  ngOnInit(): void {
    // subscribe
    this.sottoscrizione = interval(1000).subscribe((numero) => {
      console.log(numero);
    });
  }

  ngOnDestroy(): void {
    // unsubscribe
    this.sottoscrizione.unsubscribe();
  }
}
