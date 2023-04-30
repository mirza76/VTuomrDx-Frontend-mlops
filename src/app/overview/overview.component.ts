import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {

  currText?: string;

  screenText: any = [
    {
      title: "Motivation",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro quam optio repellat sit sunt odit enim maiores consequatur dolor corrupti nisi velit praesentium fugit, magnam animi. Exercitationem, dicta libero.",
    },
    {
      title: "What is Tumor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro quam optio repellat sit sunt odit enim maiores consequatur dolor corrupti nisi velit praesentium fugit, magnam animi. Exercitationem, dicta libero.",
    },
    {
      title: "Types of Tumor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro quam optio repellat sit sunt odit enim maiores consequatur dolor corrupti nisi velit praesentium fugit, magnam animi. Exercitationem, dicta libero.",
    },
    {
      title: "Why Is It Important To Be diagonsed?",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, porro quam optio repellat sit sunt odit enim maiores consequatur dolor corrupti nisi velit praesentium fugit, magnam animi. Exercitationem, dicta libero.",
    },
  ]

  constructor() {

  }
  changeText(id: number) {
    this.currText = this.screenText[id]["description"];
  }
}
