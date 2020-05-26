  export {Draggable, DragTarget,ProjectStatus, Project, Listener, State, ProjectState, Validatable, Autobind, Component, ProjectItem, ProjectList, ProjectInput};
  
  //Drag & Drop Interfaces
  interface Draggable {
    //set of eventHandlers
    dragStartHandler(event: DragEvent): void; //listener that listens to start of dragging element
    dragEndHandler(event: DragEvent): void; //listener that listens to end of dragging element
  }

  interface DragTarget {
    dragOverHandler(event: DragEvent): void; //facilitate the drag by identifying the drop target
    dropHandler(event: DragEvent): void; //reacting to actual drop
    dragLeaveHandler(event: DragEvent): void; //give visual feedback
  }

  //Project type
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
  //gets a type of Project from State class
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    //passing type of Project into T from ProjectState class
    protected listeners: Listener<T>[] = []; //array of listener functions

    //adding the listeners so that they can be executed/action performed when the event occuers
    addListener(listenedFn: Listener<T>) {
      this.listeners.push(listenedFn);
    }
  }
  //singleton class to manage state of Project
  class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;
    private constructor() {
      super();
    }

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

      this.updateListener();
    }

    moveProject(projectId: string, newStatus: ProjectStatus){
      const project = this.projects.find(project => project.id === projectId);
      //additional check to avoid rerendering of DOM everytime you drag the list somewhere
      if (project && project.status !== newStatus){
        project.status = newStatus;
        this.updateListener();
      }

    }

    //adding the listeners so that they can be executed/action performed when the event occuers
    addListener(listenerFn: Listener<Project>) {
      this.listeners.push(listenerFn);
    }

    updateListener(){
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice()); //passing a new array of projects to the listenerFn that is a reference to the function that gets executed in the respective sources as a response to the event that has occured
      }
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
      this.templateElement = <HTMLTemplateElement>(
        document.getElementById(templateId)!
      );
      this.hostElement = <T>document.getElementById(hostElementId);
      const importNode = document.importNode(this.templateElement.content, true); //true is used to tell TS that all the children should be imported
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
      // this.hostElement.appendChild(this.element);
    }

    // abstract configure?(): void;
    abstract configure(): void;
    abstract renderContent(): void;
  }

  //Project item corresponds to each Project box inside respective projects
  class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable {
    private project: Project;

    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;

      this.configure();
      this.renderContent();
    }

    get people() {
      if (this.project.people === 1) {
        return "1 person";
      } else {
        return `${this.project.people} persons`;
      }
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent = this.project.description;
      this.element.querySelector("p")!.textContent = this.people + " assigned";
    }

    @Autobind
    dragStartHandler(event: DragEvent) {
      //not all drag elements provide support for dataTransfer
      //transfer data in text/plain format
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move"; //allowing movement
    }

    @Autobind
    dragEndHandler(_event: DragEvent) {
      console.log("drag ended");
    }
  }

  //Project List represent Active & Finished projects
  class ProjectList extends Component<HTMLDivElement, HTMLElement>
    implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: "active" | "finished") {
      super("project-list", "app", false, `${type}-projects`);
      this.assignedProjects = [];

      this.configure();
      this.renderContent();
    }

    renderContent() {
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
      for (const prjItem of this.assignedProjects) {
        //rendering all the projects available in the project-list -old code replaced by ProjectItem class
        // const listItem = document.createElement("li");
        new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
        // listItem.textContent = prjItem.title;
        // listEl.appendChild(listItem);
      }
    }

    configure() {
      this.element.addEventListener("dragover", this.dragOverHandler);
      this.element.addEventListener("drop", this.dropHandler);
      this.element.addEventListener("dragleave", this.dragLeaveHandler);

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
    }

    @Autobind //when dragged on top of an element
    dragOverHandler(event: DragEvent) {
      if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault(); //to allow dropping as default setting is not to allow in JS
        const listEl = this.element.querySelector("ul");
        listEl?.classList.add("droppable"); //adds css to identify drag source to drop target
      }
    }
    @Autobind
    dropHandler(event: DragEvent) {
      // event.dataTransfer?.getData('text/plain') gives the id of the element dragged
      const prjId = event.dataTransfer!.getData('text/plain');
      projectState.moveProject(prjId, this.type === 'active'? ProjectStatus.ACTIVE : ProjectStatus.FINISHED); //this.type ensures that the element has been dropped at the right Projectr List ie moving from active to finished
    }

    @Autobind //when dragged element leaves the target element
    dragLeaveHandler(_event: DragEvent) {
      const listEl = this.element.querySelector("ul");
      listEl?.classList.remove("droppable"); //removes css
    }
  }

  class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement; //elements from the form
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
      super("project-input", "app", true, "user-input");

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
    }

    //method to configure the Project by listening to submit event
    configure() {
      this.element.addEventListener("submit", this.submitHandler);
    }

    renderContent() {}

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
