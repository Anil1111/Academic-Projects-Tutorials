import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element2',
  templateUrl: './server-element2.component.html',
  styleUrls: ['./server-element2.component.css'],
})
export class ServerElement2Component
  implements
    OnInit,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() name: string;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentPara', {static: true}) contentPara: ElementRef;

  constructor() {
    console.log('CONSTRUCTOR called');
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes); // element: SimpleChange; where element is the property whose value we receive as input
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log('Text content is ' + this.heading.nativeElement.textContent); // will return empty as View not initialised
    console.log('Para content is ' + this.contentPara.nativeElement.textContent); // will return empty as Content not initialised
  }

  // commented as we cannot run both ngOnChanges and ngDoCheck
  // ngDoCheck() {
  //   console.log('Do Check called');
  // }

  ngAfterContentInit() {
    console.log('ng after content init called');
    // will be called only once as only when we add new servers does the ng-content gets projected
    console.log('Para content is ' + this.contentPara.nativeElement.textContent); // returns the content para
  }

  ngAfterContentChecked() {
    console.log('ng after content checked called');
  }
  ngAfterViewInit() {
    console.log('ng after view init called');
    console.log('Text content is ' + this.heading.nativeElement.textContent);
    // returns the server name as the view is now initialised
  }
  ngAfterViewChecked() {
    console.log('ng after view checked called');
  }
  ngOnDestroy() {
    console.log('ngOndestroyed called');
  }
}
