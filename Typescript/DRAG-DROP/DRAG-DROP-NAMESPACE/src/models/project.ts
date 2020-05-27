namespace App {
  //Project type
  export enum ProjectStatus {
    ACTIVE,
    FINISHED,
  }

  //created a class as we need to instantiate a project
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}