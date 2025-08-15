import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  childMessage = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }

  //-------------------------
  // title = 'myApp';
  // x=0;
    
  // showVal(count:number){
  //   console.log(count);
  //   this.x=count;
  // }
}
