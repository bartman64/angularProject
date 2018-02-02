import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.css']
})
export class NavCategoriesComponent implements OnInit {

  categories: string[];

  constructor() { }

  ngOnInit() {
  }

}
