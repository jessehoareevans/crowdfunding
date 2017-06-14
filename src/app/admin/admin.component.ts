import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})

export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, description: string, starters: string, goal: number, plans: string, rewards: string) {
    var newProject: Project = new Project(name, description, starters, goal, plans, rewards);
    this.projectService.addProject(newProject);
  }

}
