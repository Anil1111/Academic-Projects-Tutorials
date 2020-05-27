"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var App;
(function (App) {
    class Component {
        constructor(templateId, hostElementId, insertAtStart, newElementId) {
            this.templateElement = (document.getElementById(templateId));
            this.hostElement = document.getElementById(hostElementId);
            const importNode = document.importNode(this.templateElement.content, true);
            this.element = importNode.firstElementChild;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart);
        }
        attach(insertAtStart) {
            this.hostElement.insertAdjacentElement(insertAtStart ? "afterbegin" : "beforeend", this.element);
        }
    }
    App.Component = Component;
})(App || (App = {}));
var App;
(function (App) {
    function Autobind(_target, _methodName, descriptor) {
        const originalMethod = descriptor.value;
        const adjDescriptor = {
            configurable: true,
            enumerable: false,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            },
        };
        return adjDescriptor;
    }
    App.Autobind = Autobind;
})(App || (App = {}));
var App;
(function (App) {
    function validate(validatableInput) {
        let isValid = true;
        if (validatableInput.required) {
            isValid = isValid && validatableInput.value.toString().trim().length !== 0;
        }
        if (validatableInput.minLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length >= validatableInput.minLength;
        }
        if (validatableInput.maxLength != null &&
            typeof validatableInput.value === "string") {
            isValid =
                isValid && validatableInput.value.length <= validatableInput.maxLength;
        }
        if (validatableInput.min != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value >= validatableInput.min;
        }
        if (validatableInput.max != null &&
            typeof validatableInput.value === "number") {
            isValid = isValid && validatableInput.value <= validatableInput.max;
        }
        return isValid;
    }
    App.validate = validate;
})(App || (App = {}));
var App;
(function (App) {
    class State {
        constructor() {
            this.listeners = [];
        }
        addListener(listenedFn) {
            this.listeners.push(listenedFn);
        }
    }
    class ProjectState extends State {
        constructor() {
            super();
            this.projects = [];
        }
        static getInstance() {
            if (ProjectState.instance) {
                return ProjectState.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }
        addProject(title, description, people) {
            const newProject = new App.Project(Math.random().toString(), title, description, people, App.ProjectStatus.ACTIVE);
            this.projects.push(newProject);
            this.updateListener();
        }
        moveProject(projectId, newStatus) {
            const project = this.projects.find((project) => project.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListener();
            }
        }
        addListener(listenerFn) {
            this.listeners.push(listenerFn);
        }
        updateListener() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }
    App.ProjectState = ProjectState;
    App.projectState = ProjectState.getInstance();
})(App || (App = {}));
var App;
(function (App) {
    let ProjectInput = (() => {
        class ProjectInput extends App.Component {
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
                    App.projectState.addProject(title, description, people);
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
                if (!App.validate(titleValidatable) ||
                    !App.validate(descriptionValidatable) ||
                    !App.validate(peopleValidatable)) {
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
            App.Autobind
        ], ProjectInput.prototype, "submitHandler", null);
        return ProjectInput;
    })();
    App.ProjectInput = ProjectInput;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectStatus;
    (function (ProjectStatus) {
        ProjectStatus[ProjectStatus["ACTIVE"] = 0] = "ACTIVE";
        ProjectStatus[ProjectStatus["FINISHED"] = 1] = "FINISHED";
    })(ProjectStatus = App.ProjectStatus || (App.ProjectStatus = {}));
    class Project {
        constructor(id, title, description, people, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.people = people;
            this.status = status;
        }
    }
    App.Project = Project;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectItem = (() => {
        class ProjectItem extends App.Component {
            constructor(hostId, project) {
                super("single-project", hostId, false, project.id);
                this.project = project;
                this.configure();
                this.renderContent();
            }
            get people() {
                if (this.project.people === 1) {
                    return "1 person";
                }
                else {
                    return `${this.project.people} persons`;
                }
            }
            configure() {
                this.element.addEventListener("dragstart", this.dragStartHandler);
                this.element.addEventListener("dragend", this.dragEndHandler);
            }
            renderContent() {
                this.element.querySelector("h2").textContent = this.project.title;
                this.element.querySelector("h3").textContent = this.project.description;
                this.element.querySelector("p").textContent = this.people + " assigned";
            }
            dragStartHandler(event) {
                event.dataTransfer.setData("text/plain", this.project.id);
                event.dataTransfer.effectAllowed = "move";
            }
            dragEndHandler(_event) {
                console.log("drag ended");
            }
        }
        __decorate([
            App.Autobind
        ], ProjectItem.prototype, "dragStartHandler", null);
        __decorate([
            App.Autobind
        ], ProjectItem.prototype, "dragEndHandler", null);
        return ProjectItem;
    })();
    App.ProjectItem = ProjectItem;
})(App || (App = {}));
var App;
(function (App) {
    let ProjectList = (() => {
        class ProjectList extends App.Component {
            constructor(type) {
                super("project-list", "app", false, `${type}-projects`);
                this.type = type;
                this.assignedProjects = [];
                this.configure();
                this.renderContent();
            }
            renderContent() {
                const listId = `${this.type}-projects-list`;
                this.element.querySelector("ul").id = listId;
                this.element.querySelector("h2").textContent =
                    this.type.toUpperCase() + " PROJECTS";
            }
            renderProjects() {
                const listEl = (document.getElementById(`${this.type}-projects-list`));
                listEl.innerHTML = "";
                for (const prjItem of this.assignedProjects) {
                    new App.ProjectItem(this.element.querySelector("ul").id, prjItem);
                }
            }
            configure() {
                this.element.addEventListener("dragover", this.dragOverHandler);
                this.element.addEventListener("drop", this.dropHandler);
                this.element.addEventListener("dragleave", this.dragLeaveHandler);
                App.projectState.addListener((projects) => {
                    const relevantProjects = projects.filter((project) => {
                        if (this.type === "active") {
                            return project.status === App.ProjectStatus.ACTIVE;
                        }
                        else {
                            return project.status === App.ProjectStatus.FINISHED;
                        }
                    });
                    this.assignedProjects = relevantProjects;
                    this.renderProjects();
                });
            }
            dragOverHandler(event) {
                if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
                    event.preventDefault();
                    const listEl = this.element.querySelector("ul");
                    listEl === null || listEl === void 0 ? void 0 : listEl.classList.add("droppable");
                }
            }
            dropHandler(event) {
                const prjId = event.dataTransfer.getData("text/plain");
                App.projectState.moveProject(prjId, this.type === "active" ? App.ProjectStatus.ACTIVE : App.ProjectStatus.FINISHED);
            }
            dragLeaveHandler(_event) {
                const listEl = this.element.querySelector("ul");
                listEl === null || listEl === void 0 ? void 0 : listEl.classList.remove("droppable");
            }
        }
        __decorate([
            App.Autobind
        ], ProjectList.prototype, "dragOverHandler", null);
        __decorate([
            App.Autobind
        ], ProjectList.prototype, "dropHandler", null);
        __decorate([
            App.Autobind
        ], ProjectList.prototype, "dragLeaveHandler", null);
        return ProjectList;
    })();
    App.ProjectList = ProjectList;
})(App || (App = {}));
var App;
(function (App) {
    new App.ProjectInput();
    new App.ProjectList("active");
    new App.ProjectList("finished");
})(App || (App = {}));
//# sourceMappingURL=bundle.js.map