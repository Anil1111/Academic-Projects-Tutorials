import { Component } from "./base-components.js";
import { DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { ProjectItem } from "./project-item.js";
import { projectState } from "../state/project-state.js";
import { Autobind } from "../decorators/autobind.js";

//Project List represent Active & Finished projects
export class ProjectList extends Component<HTMLDivElement, HTMLElement>
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
    const prjId = event.dataTransfer!.getData("text/plain");
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.ACTIVE : ProjectStatus.FINISHED
    ); //this.type ensures that the element has been dropped at the right Projectr List ie moving from active to finished
  }

  @Autobind //when dragged element leaves the target element
  dragLeaveHandler(_event: DragEvent) {
    const listEl = this.element.querySelector("ul");
    listEl?.classList.remove("droppable"); //removes css
  }
}
