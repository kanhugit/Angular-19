import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css',
})
export class EventBindingComponent {
  title = 'Event Binding In angular';
  name = '';
  sayHi() {
    this.name = 'Hello User !! Wellcome to Event Binding';
  }

  logMessages: string[] = [];
  inputValue: string = '';
  selectedOption: string = '';
  mouseMessage: string = 'Hover over the box';
  keyMessage: string = '';

  addLog(message: string) {
    const time = new Date().toLocaleTimeString();
    this.logMessages.unshift(`${time} - ${message}`);
  }

  onClick() {
    this.addLog('Button clicked');
  }
  onDoubleClick() {
    this.addLog('Button double-clicked');
  }
  onMouseOver() {
    this.mouseMessage = 'Mouse entered the box';
    this.addLog('Mouse over box');
  }
  onMouseOut() {
    this.mouseMessage = 'Mouse left the box';
    this.addLog('Mouse out of box');
  }
  onKeyDown(event: KeyboardEvent) {
    this.keyMessage = `Key down: ${event.key}`;
    this.addLog(`Key down: ${event.key}`);
  }
  onKeyUp(event: KeyboardEvent) {
    this.keyMessage = `Key up: ${event.key}`;
    this.addLog(`Key up: ${event.key}`);
  }
  onInputChange() {
    this.addLog(`Input changed to: ${this.inputValue}`);
  }
  onSelectChange() {
    this.addLog(`Selected: ${this.selectedOption}`);
  }
  onFocus() {
    this.addLog('Input focused');
  }
  onBlur() {
    this.addLog('Input lost focus');
  }
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    this.addLog('Right-clicked');
  }
  onFormSubmit(event: Event) {
    event.preventDefault();
    this.addLog('Form submitted');
  }
}
