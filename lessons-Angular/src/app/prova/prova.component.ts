// model

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css'],
})
export class ProvaComponent
  implements
    OnInit,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnDestroy
{
  // Card
  cani = [
    {
      nome: 'roger',
      razza: 'golden',
      descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz
    breeds of dog from Japan. A small, agile dog that copes very well with
    mountainous terrain, the Shiba Inu was originally bred for hunting.`,
    },
  ];

  // Button
  isDisabled = false;

  // Card Image
  img = '';
  img1 =
    'https://t4.ftcdn.net/jpg/05/65/20/27/360_F_565202786_towUjm2KMittPXHT7yF7H4SFPAxv0xjD.jpg';
  img2 = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  constructor() {
    console.log('construttore');
  }
  ngOnInit(): void {
    console.log('ngOnInit');

    // setInterval for button: Ogni 2 secondi mi attiva e disattiva il button
    setInterval(() => {
      this.isDisabled = !this.isDisabled;
    }, 2000);

    // setInterval for card image
    let count = 0;
    setInterval(() => {
      if (count % 2 === 0) {
        this.img = this.img1;
      } else this.img = this.img2;
      count++;
    }, 2000);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
