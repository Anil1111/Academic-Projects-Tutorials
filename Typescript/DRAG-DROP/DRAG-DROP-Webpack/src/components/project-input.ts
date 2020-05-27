import Component from "./base-components";
import { projectState } from "../state/project-state";
import { Autobind as autobind} from "../decorators/autobind";
import * as Validation from "../util/validation";


export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
  @autobind
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
    const titleValidatable: Validation.Validatable = {
      value: title,
      required: true,
    };
    const descriptionValidatable: Validation.Validatable = {
      value: description,
      required: true,
      minLength: 2,
    };
    const peopleValidatable: Validation.Validatable = {
      value: people,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !Validation.validate(titleValidatable) ||
      !Validation.validate(descriptionValidatable) ||
      !Validation.validate(peopleValidatable)
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
