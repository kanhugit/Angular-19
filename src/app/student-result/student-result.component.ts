import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-result',
  imports: [NgFor, NgClass],
  templateUrl: './student-result.component.html',
  styleUrl: './student-result.component.css',
})
export class StudentResultComponent {
  // students:any = [
  //   { name: 'Alice', marks: 45 },
  //   { name: 'Bob', marks: 30 },
  //   { name: 'Charlie', marks: 50 },
  //   { name: 'David', marks: 20 },
  //   { name: 'Eve', marks: 60 },
  //   { name: 'Frank', marks: 70 },
  //   { name: 'Grace', marks: 80 },
  //   { name: 'Hank', marks: 90 },
  //   { name: 'Ivy', marks: 25 },
  //   { name: 'Jack', marks: 55 }
  // ];

  students: any = [
    { name: 'Kanha', marks: 45 },
    { name: 'Rohan', marks: 30 },
    { name: 'Chinu', marks: 50 },
    { name: 'Bihari', marks: 20 },
    { name: 'Shivam', marks: 60 },
    { name: 'Ravi', marks: 70 },
    { name: 'Suman', marks: 80 },
    { name: 'Anjali', marks: 90 },
    { name: 'Pooja', marks: 25 },
    { name: 'Rahul', marks: 55 }
  ];
}
