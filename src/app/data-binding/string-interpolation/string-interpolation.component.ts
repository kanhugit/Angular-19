import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  imports: [],
  templateUrl: './string-interpolation.component.html',
  styleUrl: './string-interpolation.component.css',
})
export class StringInterpolationComponent {
  a: number = 10;
  b: number = 20;
  name: string = 'Kanha';
  arr = [3, 1, 5, 8];
  user = { name: 'kanha', age: '24', mob: '8112146097' };

  //  reverseString(x:string) {
  //   return x.split('').reverse().join('');
  // };

  // reverseString = function (x: string) {
  //   return x.split('').reverse().join('');
  // };

  reverseString = (x: string) => {
    return x.split('').reverse().join('');
  };
}
