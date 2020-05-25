enum ProjectStatus {
  ACTIVE,
  FINISHED,
}

//created a class as we need to instantiate a project
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

//created a type as it is used only as a type
type Listener = (items: Project[]) => void;

//singleton class to manage state of Project
class ProjectState {
  private projects: Project[] = [];
  private static instance: ProjectState;
  private listeners: Listener[] = []; //array of listener functions
  private constructor() {}

  static getInstance() {
    if (ProjectState.instance) {
      return ProjectState.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, people: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      people,
      ProjectStatus.ACTIVE
    );
    this.projects.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); //passing a new array of projects to the listenerFn that is a reference to the function that gets executed in the respective sources as a response to the event that has occured
    }
  }

  //adding the listeners so that they can be executed/action performed when the event occuers
  addListener(listenedFn: Listener) {
    this.listeners.push(listenedFn);
  }
}

const projectState = ProjectState.getInstance();

interface Validatable {
  value: string | number;
  required: boolean;
  minLength?: number; //? - for making it optional, we can also define an undefined type
  maxLength?: number;
  min?: number;
  max?: number;
}

function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  //!= null will check for undefined and null, but will allow 0
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }
  return isValid;
}

function Autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}


//component class for DRY COde, abstract as it need not be instantiated
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  protected templateElement: HTMLTemplateElement;
  protected hostElement: T;
  protected element: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string //optional params should always be last
  ) {
    this.templateElement = <HTMLTemplateElement>document.querySelector(templateId)!;
    this.hostElement = <T>document.querySelector(hostElementId);
    const importNode = document.importNode(this.templateElement.content, true);
    this.element = <U>importNode.firstElementChild;

    if (newElementId){
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
      this.hostElement.insertAdjacentElement(insertAtStart ? 'afterbegin': 'beforeend', this.element);
  }

  abstract configure(): void;
  abstract renderContent(): void;
}

class ProjectList extends Component<T,U> {
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("#project-list", "#app", false, `${type}-projects`);
    this.assignedProjects = [];

    //This will be executed later only when new projects are added
    //appends the below anonymous function as a listener into the ProjectState so that whenever a new project is added, the below function gets executed with the list of projects available in the singleton class of ProjectState. As it has only one instance, all the added projects are appended into the same project list
    projectState.addListener((projects: Project[]) => {
      //filtering projects based on status
      const relevantProjects = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.ACTIVE;
        } else {
          return project.status === ProjectStatus.FINISHED;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });

    this.renderContent();
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  //gets executed later only when a new project is added to the list
  private renderProjects() {
    const listEl = <HTMLUListElement>(
      document.getElementById(`${this.type}-projects-list`)!
    );
    listEl.innerHTML = ""; //removing existing list so that we dont duplicate the list each time
    for (const prjItems of this.assignedProjects) {
      //rendering all the projects available in the project-list
      const listItem = document.createElement("li");
      listItem.textContent = prjItems.title;
      listEl.appendChild(listItem);
    }
  }
}

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement; //elements from the form
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById("project-input")!
    );
    this.hostElement = <HTMLDivElement>document.getElementById("app")!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); //true is used to tell TS that all the children should be imported
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input"; //providing id to form element for attaching css

    //fetching form values
    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector("#title")!
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.element.querySelector("#description")!
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.element.querySelector("#people")!
    );

    this.configure();
    this.attach();
  }

  //method to remder the HTML DOM
  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
    // this.hostElement.appendChild(this.element);
  }

  //method to configure the Project by listening to submit event
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  //submitHandler from configure()
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      projectState.addProject(title, description, people);
      this.clearInputs();
    }
  }

  //returning tuple with the project details
  private gatherUserInput(): [string, string, number] | void {
    const title = this.titleInputElement.value;
    const description = this.descriptionInputElement.value;
    const people = +this.peopleInputElement.value;

    //we could also make Validate a class and use its constructor
    const titleValidatable: Validatable = {
      value: title,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: description,
      required: true,
      minLength: 2,
    };
    const peopleValidatable: Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid Input");
      return;
    } else {
      return [title, description, +people];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }
}

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active"); //can use the enum type also
const finishedPrjList = new ProjectList("finished");
