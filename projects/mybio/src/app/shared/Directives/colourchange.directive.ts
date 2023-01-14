import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColourchange]'
})
export class ColourchangeDirective {
  color: string;

  constructor(private el: ElementRef) { }
  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.color = 'blue';
    // this.el.nativeElement.style.fontSize = 'red';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.color = '';
  }

  @HostListener('keyup') onKeyUp() {
    this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();

  }



}
