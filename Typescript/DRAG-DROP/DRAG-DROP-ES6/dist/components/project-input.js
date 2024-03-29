var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from "./base-components.js";
import { projectState } from "../state/project-state.js";
import { Autobind } from "../decorators/autobind.js";
import { validate } from "../util/validation.js";
let ProjectInput = (() => {
    class ProjectInput extends Component {
        constructor() {
            super("project-input", "app", true, "user-input");
            this.titleInputElement = (this.element.querySelector("#title"));
            this.descriptionInputElement = (this.element.querySelector("#description"));
            this.peopleInputElement = (this.element.querySelector("#people"));
            this.configure();
        }
        configure() {
            this.element.addEventListener("submit", this.submitHandler);
        }
        renderContent() { }
        submitHandler(event) {
            event.preventDefault();
            const userInput = this.gatherUserInput();
            if (Array.isArray(userInput)) {
                const [title, description, people] = userInput;
                projectState.addProject(title, description, people);
                this.clearInputs();
            }
        }
        gatherUserInput() {
            const title = this.titleInputElement.value;
            const description = this.descriptionInputElement.value;
            const people = +this.peopleInputElement.value;
            const titleValidatable = {
                value: title,
                required: true,
            };
            const descriptionValidatable = {
                value: description,
                required: true,
                minLength: 2,
            };
            const peopleValidatable = {
                value: people,
                required: true,
                min: 1,
                max: 5,
            };
            if (!validate(titleValidatable) ||
                !validate(descriptionValidatable) ||
                !validate(peopleValidatable)) {
                alert("Invalid Input");
                return;
            }
            else {
                return [title, description, +people];
            }
        }
        clearInputs() {
            this.titleInputElement.value = "";
            this.descriptionInputElement.value = "";
            this.peopleInputElement.value = "";
        }
    }
    __decorate([
        Autobind
    ], ProjectInput.prototype, "submitHandler", null);
    return ProjectInput;
})();
export { ProjectInput };
//# sourceMappingURL=project-input.js.map