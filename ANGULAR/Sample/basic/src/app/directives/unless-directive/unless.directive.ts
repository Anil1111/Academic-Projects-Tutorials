import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // set converts appUnless into a setter method that gets executed whenever unless changes from outside
  // must share the same name as the directive name as we are property binding on [appUnless] (which is derived from *appUnless) externally
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
      return;
    }
    this.vcRef.clear();
  }

  // since structural directives get converted into ng-template behind the scenes, we need access to the templateRef
  // unlike element ref for access to only the element
  // constructor takes the WHAT - TemplateRef, WHERE - ViewContainer
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }

}
