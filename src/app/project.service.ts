import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { PROJECTS } from './mock-project';

@Injectable()
export class ProjectService {

  constructor() { }

  getProjects() {
    return PROJECTS;
  }
}
