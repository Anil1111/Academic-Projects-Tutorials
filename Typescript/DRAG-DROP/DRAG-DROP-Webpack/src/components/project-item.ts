import Component from "./base-components";
import { Draggable } from "../models/drag-drop";
import { Project } from "../models/project";
import { Autobind } from "../decorators/autobind";

//Project item corresponds to each Project box inside respective projects
export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
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
