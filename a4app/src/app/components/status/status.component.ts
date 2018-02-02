import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  status: string[]

  constructor() { 
    this.status = ['ToDo', 'Done'];
  }

  ngOnInit() {
  }

}
