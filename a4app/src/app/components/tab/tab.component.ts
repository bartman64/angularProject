import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  tabs: string[];

  constructor() { 
    this.tabs = ['Private', 'Hochschule', 'Sonstiges']
  }

  ngOnInit() {
  }

}
