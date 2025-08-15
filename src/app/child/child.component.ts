import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() greet = '';
   @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit("Hello from Child!");
  }

  // =============================================
  // @Output() changeValue=new EventEmitter<number>();
  //   counter=0;

  //    changedValue(){
  //     this.counter=this.counter+1;
  //     this.changeValue.emit(this.counter);
  //   }
    
}
