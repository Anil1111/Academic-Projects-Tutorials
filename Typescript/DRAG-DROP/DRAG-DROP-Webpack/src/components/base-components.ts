export default abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  protected templateElement: HTMLTemplateElement;
  protected hostElement: T;
  protected element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string 
  ) {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateId)!
    );
    this.hostElement = <T>document.getElementById(hostElementId);
    const importNode = document.importNode(this.templateElement.content, true); 
    this.element = <U>importNode.firstElementChild;

    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  //method to remder the HTML DOM
  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element
    );
  }

  // abstract configure?(): void;
  abstract configure(): void;
  abstract renderContent(): void;
}
