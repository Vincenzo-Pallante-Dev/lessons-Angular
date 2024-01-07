import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  cambiaColore(colore: string) {
    this.element.nativeElement.style.backgroundColor = colore;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiaColore(this.appHighlight || this.defaultColor || 'purple');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiaColore('transparent');
  }
}
