import { Directive, HostBinding, HostListener, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appPropertyBindingHighlight]'
})
export class PropertyBindingHighlightDirective implements OnInit{
  // directive that allows binding values to its custom properties
  @Input() defaultColor = 'pink';
  // @Input('appPropertyBindingHighlight') highlightColor = 'orange';
  @Input() highlightColor = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
  @HostBinding('style.color') color = 'white';

  constructor() { }

  ngOnInit() {  }

  // mouseenter is the event supported by the DOM element
  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    this.color = 'black';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
