import { Project, ProjectStatus } from "../models/project.js";

type Listener<T> = (items: T[]) => void;

class State<T> {

  protected listeners: Listener<T>[] = []; 
  addListener(listenedFn: Listener<T>) {
    this.listeners.push(listenedFn);
  }
}
//singleton class to manage state of Project
export class ProjectState extends State<Project> {
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

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((project) => project.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListener();
    }
  }

  addListener(listenerFn: Listener<Project>) {
    this.listeners.push(listenerFn);
  }

  updateListener() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); 
    }
  }
}

export const projectState = ProjectState.getInstance();
