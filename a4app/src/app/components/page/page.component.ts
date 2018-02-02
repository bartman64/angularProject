import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 1, rows: 3, color: 'lightblue'},
    {text: 'Two', cols: 3, rows: 3, color: 'lightgreen'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
