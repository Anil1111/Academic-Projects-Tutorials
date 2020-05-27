namespace App {
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
      //additional check to avoid rerendering of DOM everytime you drag the list somewhere
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListener();
      }
    }
  
    //adding the listeners so that they can be executed/action performed when the event occuers
    addListener(listenerFn: Listener<Project>) {
      this.listeners.push(listenerFn);
    }
  
    updateListener() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice()); //passing a new array of projects to the listenerFn that is a reference to the function that gets executed in the respective sources as a response to the event that has occured
      }
    }
  }
  
  export const projectState = ProjectState.getInstance();
  

}