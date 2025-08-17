import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Task {
  title: string;
  completed: boolean;
  dueDate: Date;
}

@Component({
  selector: 'app-attribute',
  imports: [FormsModule, CommonModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css',
})
export class AttributeComponent {
  tasks: Task[] = [
    {
      title: 'Finish Angular Project',
      completed: false,
      dueDate: new Date('2025-08-20'),
    },
    {
      title: 'Read TypeScript Notes',
      completed: true,
      dueDate: new Date('2025-08-10'),
    },
    {
      title: 'Prepare Interview Questions',
      completed: false,
      dueDate: new Date('2025-08-25'),
    },
  ];

  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({
        title: this.newTask,
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 2)), // default 2 days ahead
      });
      this.newTask = '';
    }
  }

  toggleTask(task: Task) {
    task.completed = !task.completed;
  }

  isOverdue(task: Task): boolean {
    return !task.completed && new Date(task.dueDate) < new Date();
  }
}
