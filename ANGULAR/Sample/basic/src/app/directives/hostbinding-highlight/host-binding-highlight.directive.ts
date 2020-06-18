import { Directive, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appHostBindingHighlight]'
})
export class HostBindingHighlightDirective implements OnInit {
  // '' defines to which prooperty of hosting element we want to bind
  @HostBinding('style.backgroundColor') backgroundColor = 'pink';
  @HostBinding('style.color') color = 'white';

  constructor() { }

  ngOnInit() {  }

  // mouseenter is the event supported by the DOM element
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = 'yellow';
    this.color = 'black';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'pink';
  }



}
