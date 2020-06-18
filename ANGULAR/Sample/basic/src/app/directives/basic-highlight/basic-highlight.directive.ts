import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
  // [] tells angular to select the directive as an attribute
})
export class BasicHighlightDirective implements OnInit{

  // getting access to the element on which the directive sits on
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
