import { Component, Input, EventEmitter } from '@angular/core';
import { MyObject } from '../my-interface';

@Component({
  selector: 'app-vtumordx',
  templateUrl: './vtumordx.component.html',
  styleUrls: ['./vtumordx.component.css']
})
export class VtumordxComponent {
  @Input() imageUrl!: string;
  @Input() classStatus!: string;

  @Input() myevent!: {photo: string, detectedType: string};  

  setImage(url: any) {
    console.log("Here it is working");
    this.imageUrl = url['photo'];
    this.classStatus = url['detectedType']
    this.myevent = url;
  }

}
