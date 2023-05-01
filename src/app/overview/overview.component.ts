import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  /*
    Indexes distribution

    0 for what is brain tumor
    1 why is it important to be diagonsed earlier
    2 types
    3 motivation
  */

    screenHeadings: Array<boolean> = [false, false, false, true]; 
  constructor() {
  }

  display(id: number) {
    switch (id) {
      case 0:
        this.screenHeadings[0] = !this.screenHeadings[0];
        this.screenHeadings[1] = false;
        this.screenHeadings[2] = false;
        this.screenHeadings[3] = false;
        break;
      case 1:
        this.screenHeadings[1] = !this.screenHeadings[1];
        this.screenHeadings[0] = false;
        this.screenHeadings[2] = false;
        this.screenHeadings[3] = false;
        break;

      case 2:
        this.screenHeadings[2] = !this.screenHeadings[2];
        this.screenHeadings[0] = false;
        this.screenHeadings[1] = false;
        this.screenHeadings[3] = false;
        break;

      case 3:
        this.screenHeadings[3] = !this.screenHeadings[3];
        this.screenHeadings[0] = false;
        this.screenHeadings[1] = false;
        this.screenHeadings[2] = false;
        break;
    }

  }

  show(ele: HTMLHeadingElement) {
    ele.click();
  }

}
