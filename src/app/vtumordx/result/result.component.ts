import { Component, Input } from '@angular/core';
import { MyObject } from '../../my-interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input() myObj!: {photo: string, detectedType: string};

  constructor() {
    console.log("We are here", this.myObj);
  }

  getPhoto() {
    return this.myObj.photo;
  }

  getDetectionStatus() {
    return this.myObj.detectedType;
  }

}
