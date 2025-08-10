import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.component.html',
  styleUrl: './counter-app.component.css'
})
export class CounterAppComponent {

  count: number = 0;

  // increment() {
  //   this.count++;
  //   //this.count = this.count + 1; // Alternative way to increment
  //   //this.count += 1; // Another alternative way to increment  
  //   //this.count = this.count + 2; // Increment by 2
  //   //this.count += 2; // Another way to increment by 2
  // }

  // decrement() {
  //   this.count--;
  //   //this.count = this.count - 1; // Alternative way to decrement
  //   //this.count -= 1; // Another alternative way to decrement
  // }

  // reset() {
  //   this.count = 0;
  //   //this.count = 0; // Reset to zero
  //   //this.count = this.count - this.count; // Another way to reset 

  // }



  //creting one function and applying it to all the buttons
  // handleCounter(action: string) {
  //   switch (action) {
  //     case 'increment':
  //       this.increment();
  //       break;
  //     case 'decrement':
  //       this.decrement();
  //       break;
  //     case 'reset':
  //       this.reset();
  //       break;
  //     default:
  //       console.warn('Unknown action:', action);
  //   }


  handleCounterApp(value: string) {

    if(value=='increment') {
       this.count++;
    }else if(value=='decrement') {
       this.count--;  
    }else{
        this.count = 0; // Reset to zero
        //this.count = this.count - this.count; // Another way to reset
    }
  }

  }


