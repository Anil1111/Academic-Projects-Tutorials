class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement; //elements from the form
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;


  constructor(){
    this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
    this.hostElement = <HTMLDivElement>document.getElementById('app')!;

    const importedNode = document.importNode(this.templateElement.content, true); //true is used to tell TS that all the children should be imported
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input'; //providing id to form element for attaching css

    //fetching form values
    this.titleInputElement = <HTMLInputElement>this.element.querySelector('#title')!;
    this.descriptionInputElement = <HTMLInputElement>this.element.querySelector('#description')!;
    this.peopleInputElement = <HTMLInputElement>this.element.querySelector('#people')!;
    
    this.configure();
    this.attach();
  }

  //method to remder the HTML DOM
  private attach(){
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
    // this.hostElement.appendChild(this.element);
  }

  //method to configure the Project by listening to submit event
  private configure(){
    this.element.addEventListener('submit', this.submitHandler.bind(this));

  }

  //submitHandler from configure()
  private submitHandler(event:Event){
    event.preventDefault();
    console.log(this.titleInputElement.value);

  }
}

const prjInput = new ProjectInput();




