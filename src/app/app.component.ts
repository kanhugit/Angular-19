import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './customcomponet/profile.componet';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { EventhandlingComponent } from './eventhandling/eventhandling.component';
import { StudentResultComponent } from './student-result/student-result.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { AttributeSelectorComponent } from './component-decorator/selector/attribute-selector/attribute-selector.component';
import { ClassSelectorComponent } from './component-decorator/selector/class-selector/class-selector.component';
import { IdSelectorComponent } from './component-decorator/selector/id-selector/id-selector.component';
import { NameSelectorComponent } from './component-decorator/selector/name-selector/name-selector.component';
import { StylesComponent } from './styles/styles.component';
import { StringInterpolationComponent } from './data-binding/string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { ClassBindingComponent } from './data-binding/class-binding/class-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwoWayComponent } from './data-binding/two-way/two-way.component';
import { ChildComponent } from './child/child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    CounterAppComponent,
    EventhandlingComponent,
    StudentResultComponent,
    CapitalizePipe,
    AttributeSelectorComponent,
    ClassSelectorComponent,
    IdSelectorComponent,
    NameSelectorComponent,
    StylesComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    ClassSelectorComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TwoWayComponent,
    ChildComponent,
    ProductListComponent,
    ParentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //properties for the component
  title = 'my-app-19';
  name = 'Angular 19 Application';
  message = 'Hello Child  from parent ';
  // const title = 'my-app-19'; //we cant use (variable)const here as it is not a class property
  // const name = 'Angular 19 Application'; //we cant use const here as it is not a class property
  //in class we cant use const or let, we can only use properties of the class
  //so we use properties of the class with this keyword
  //we can define varibales in a class inside a method or constructor

  //Interoplation is used to bind data from the component to the template
  //we can use interpolation to bind data from the component to the template
  //we can excute methods in the component using interpolation
  //we can excute js code in the component using interpolation
  //we can excute js code in HTML File using interpolation
  //it is recommended to use interpolation only for simple expressions
  //for complex expressions, it is recommended to use methods in the component
  //it is deprecated to use complex expressions in interpolation
  //it is represented by {{ }} in the template
  //it's limited to one-way data binding
  //its limitation is that it can only bind data from the component to the template
  //we can not use increments or decrements in interpolation
  //we can not use arithmetic operations in interpolation
  //we can not use if else statements in interpolation
  //we can not use for loops in interpolation
  //we can not use switch case in interpolation
  //we can not use any kind of control flow statements in interpolation
  //we can not use any kind of logic in interpolation
  //we can not use any kind of functions in interpolation
  //we can not use any kind of variables in interpolation
  //we can not use any kind of operators in interpolation
  //we can not use any kind of expressions in interpolation
  //we can not use any kind of statements in interpolation
  //we can only use simple expressions in interpolation

  x = 10;
  y = 20;

  user1 = 'kanha';
  user2 = 'karthik';
  isActive: any;
  classSelector: any;

  handleClick() {
    console.log('Button clicked!');
    this.otherFunction();
  }

  otherFunction() {
    console.log('This is another function in the component.');
  }

  anyVariable: any = 'This can be anything';
  nullVariable: null = null;
  undefinedVariable: undefined = undefined;
  numberVariable: number = 42;
  stringVariable: string = 'Hello, Angular!';
  booleanVariable: boolean = true;
  arrayVariable: number[] = [1, 2, 3, 4, 5];
  objectVariable: { name: string; age: number } = { name: 'John', age: 30 };
  tupleVariable: [string, number] = ['Alice', 25];
  enumVariable: Color = Color.Red; // Now Color is defined below

  //========================================

  userName: string = 'Anil';
  data: string | number = 'This is a sample data';
  otherData: string | number | boolean = true; // Example of a union type

  updateName() {
    this.userName = 'Kanhu Charan Behera';
    console.log(`Name updated to: ${this.userName}`);
    this.data = 42; // Changing the type to number
    this.otherData = 'swati'; // Changing the type back to string
  }

  updateVariable() {
    let x: number = 10;
    console.log(x);
  }

  sum(a: number, b: number) {
    console.log(a + b);
  }
}

enum Color {
  Red,
  Green,
  Blue,
}
