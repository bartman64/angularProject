import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  title: string;
  dueDate: Date;
  description: string;
  panelOpenState: boolean = false;
  status: string;

  constructor() { 
    this.title = "Test Title";
    this.dueDate =  new Date('December 17, 2018');
    this.description = "Description";
  }

  ngOnInit() {
  }

}
