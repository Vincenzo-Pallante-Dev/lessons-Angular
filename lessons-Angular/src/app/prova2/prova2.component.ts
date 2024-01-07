import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-prova2',
  templateUrl: './prova2.component.html',
  styleUrls: ['./prova2.component.css'],
})
export class Prova2Component implements OnInit, OnChanges {
  // Passare dati da Parent(app) a Child(prova2)
  @Input() data: any;

  ngOnInit(): void {
    console.log(this.data);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
