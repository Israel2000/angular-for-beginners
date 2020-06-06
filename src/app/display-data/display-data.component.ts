import { Component, OnInit } from '@angular/core';
import { Sport } from './sport';

@Component({
  selector: 'app-display-data',
  template: `
    <h1>{{greeting}}
      <h2>My favorite sport is: {{mySport.name}}</h2>
  `,
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  greeting = 'hello world!';
  sports = [
    new Sport(1, 'Soccer'),
    new Sport(2, 'Basketball'),
    new Sport(4, 'Baseball'),
    new Sport(6, 'Soccer'),
  ];
  mySport = this.sports[0];

  constructor() { }

  ngOnInit(): void {
  }

}
