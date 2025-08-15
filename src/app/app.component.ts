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
import { ClassBindingComponent } from "./data-binding/class-binding/class-binding.component";
import { EventBindingComponent } from "./data-binding/event-binding/event-binding.component";
import { TwoWayComponent } from "./data-binding/two-way/two-way.component";
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
    TwoWayComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //properties for the component
  title = 'my-app-19';
  name = 'Angular 19 Application';

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

  //Angular CLI
  //Angular CLI is a command line interface for Angular
  //Angular CLI is used to create, develop, and maintain Angular applications
  //Angular CLI is used to create new Angular projects, generate components, services, and other Angular features
  //Angular CLI is used to run the application, build the application, and test the application
  //To use Angular CLI, we need to install it globally using npm
  //To install Angular CLI globally, we can use the command: npm install -g @angular/cli
  //To create a new Angular project, we can use the command: ng new my-app
  //To run the application, we can use the command: ng serve
  //To build the application, we can use the command: ng build
  //To test the application, we can use the command: ng test
  //To generate a new component, we can use the command: ng generate component my-component
  //To generate a new service, we can use the command: ng generate service my-service
  //To generate a new module, we can use the command: ng generate module my-module
  //To generate a new directive, we can use the command: ng generate directive my-directive
  //To generate a new pipe, we can use the command: ng generate pipe my-pipe
  //To generate a new guard, we can use the command: ng generate guard my-guard
  //To generate a new interceptor, we can use the command: ng generate interceptor my-interceptor
  //To generate a new class, we can use the command: ng generate class my-class
  //To generate a new interface, we can use the command: ng generate interface my-interface
  //To generate a new enum, we can use the command: ng generate enum my-enum
  //To generate a new module with routing, we can use the command: ng generate module my-module --routing
  //To generate a new component with routing, we can use the command: ng generate component my-component --routing
  //To generate a new service with routing, we can use the command: ng generate service my-service --routing
  //To generate a new directive with routing, we can use the command: ng generate directive my-directive --routing
  //To generate a new pipe with routing, we can use the command: ng generate pipe my-pipe --routing
  //To generate a new guard with routing, we can use the command: ng generate guard my-guard --routing
  //To generate a new interceptor with routing, we can use the command: ng generate interceptor my-interceptor --routing
  //To generate a new class with routing, we can use the command: ng generate class my-class --routing
  //To generate a new interface with routing, we can use the command: ng generate interface my-interface --routing
  //To generate a new enum with routing, we can use the command: ng generate enum my-enum --routing
  //To generate a new module with lazy loading, we can use the command: ng generate module my-module --route my-route --module app.module
  //To generate a new component with lazy loading, we can use the command: ng generate  component my-component --route my-route --module app.module
  //To generate a new service with lazy loading, we can use the command: ng generate service my-service --route my-route --module app.module
  //To generate a new directive with lazy loading, we can use the command: ng generate  directive my-directive --route my-route --module app.module
  //To generate a new pipe with lazy loading, we can use the command: ng generate pipe my-pipe --route my-route --module app.module
  //To generate a new guard with lazy loading, we can use the command: ng generate  guard my-guard --route my-route --module app.module
  //To generate a new interceptor with lazy loading, we can use the command: ng generate  interceptor my-interceptor --route my-route --module app.module
  //To generate a new class with lazy loading, we can use the command: ng generate class my-class --route my-route --module app.module
  //To generate a new interface with lazy loading, we can use the command: ng generate interface my-interface --route my-route --module app.module
  //To generate a new enum with lazy loading, we can use the command: ng generate enum my-enum --route my-route --module app.module
  //To generate a new module with standalone components, we can use the command: ng generate module my-module --standalone
  //To generate a new component with standalone components, we can use the command: ng generate component my-component --standalone
  //To generate a new service with standalone components, we can use the command: ng generate service my-service --standalone
  //To generate a new directive with standalone components, we can use the command: ng generate directive my-directive --standalone
  //To generate a new pipe with standalone components, we can use the command: ng generate pipe my-pipe --standalone
  //To generate a new guard with standalone components, we can use the command: ng generate guard my-guard --standalone
  //To generate a new interceptor with standalone components, we can use the command: ng generate interceptor my-interceptor --standalone
  //To generate a new class with standalone components, we can use the command: ng generate class my-class --standalone
  //To generate a new interface with standalone components, we can use the command: ng generate interface my-interface --standalone
  //To generate a new enum with standalone components, we can use the command: ng generate enum my-enum --standalone
  //To generate a new module with standalone components and routing, we can use the command:  ng generate module my-module --standalone --routing
  //To generate a new component with standalone components and routing, we can use the command: ng generate component my-component --standalone --routing
  //To generate a new service with standalone components and routing, we can use the command: ng generate service my-service --standalone --routing
  //To generate a new directive with standalone components and routing, we can use the command: ng generate directive my-directive --standalone --routing
  //To generate a new pipe with standalone components and routing, we can use the command:  ng generate pipe my-pipe --standalone --routing
  //To generate a new guard with standalone components and routing, we can use the command: ng generate guard my-guard --standalone --routing
  //To generate a new interceptor with standalone components and routing, we can use the command: ng generate interceptor my-interceptor --standalone --routing
  //To generate a new class with standalone components and routing, we can use the command: ng generate class my-class --standalone --routing
  //To generate a new interface with standalone components and routing, we can use the command: ng generate interface my-interface --standalone --routing
  //To generate a new enum with standalone components and routing, we can use the command: ng generate enum my-enum --standalone --routing
  //To generate a new module with standalone components and lazy loading, we can use the command: ng generate module my-module --standalone --route my-route --module app.module
  //To generate a new component with standalone components and lazy loading, we can use the command: ng generate component my-component --standalone --route my-route --module app.module
  //To generate a new service with standalone components and lazy loading, we can use the command: ng generate service my-service --standalone --route my-route --module app.module
  //To generate a new directive with standalone components and lazy loading, we can use the command: ng generate directive my-directive --standalone --route my-route --module app.module
  //To generate a new pipe with standalone components and lazy loading, we can use the command: ng generate pipe my-pipe --standalone --route my-route --module app.module
  //To generate a new guard with standalone components and lazy loading, we can use the command: ng generate guard my-guard --standalone --route my-route --module app.module
  //To generate a new interceptor with standalone components and lazy loading, we can use the command: ng generate interceptor my-interceptor --standalone --route my-route --module app.module
  //To generate a new class with standalone components and lazy loading, we can use the command: ng generate class my-class --standalone --route my-route --module app.module
  //To generate a new interface with standalone components and lazy loading, we can use the command: ng generate interface my-interface --standalone --route my-route --module app.module
  //To generate a new enum with standalone components and lazy loading, we can use the command: ng generate enum my-enum --standalone --route my-route --module app.module
  //To generate a new module with standalone components and lazy loading, we can use the command: ng generate module my-module --standalone --route my-route --module app.module
  //To generate a new component with standalone components and lazy loading, we can use the command : ng generate component my-component --standalone --route my-route --module app.module
  //To generate a new service with standalone components and lazy loading, we can use the command: ng generate service my-service --standalone --route my-route --module app.module
  //To generate a new directive with standalone components and lazy loading, we can use the command: ng generate directive my-directive --standalone --route my-route --module app.module
  //To generate a new pipe with standalone components and lazy loading, we can use the command: ng generate pipe my-pipe --standalone --route my-route --module app.module
  //To generate a new guard with standalone components and lazy loading, we can use the command: ng generate guard my-guard --standalone --route my-route --module app.module

  handleClick() {
    console.log('Button clicked!');
    this.otherFunction();
  }

  otherFunction() {
    console.log('This is another function in the component.');
  }

  //DATATYPES IN ANGULAR 19
  //Angular 19 supports various data types, including:
  //1. String: Represents a sequence of characters, e.g., 'Hello World'.
  //2. Number: Represents numeric values, e.g., 42, 3.14.
  //3. Boolean: Represents true or false values.
  //4. Array: Represents a collection of values, e.g., [1, 2, 3].
  //5. Object: Represents a collection of key-value pairs, e.g., { name: 'John', age: 30 }.
  //6. Null: Represents the absence of a value.
  //7. Undefined: Represents a variable that has been declared but not assigned a value.
  //8. Any: Represents any data type, allowing for flexibility in variable assignments.
  //9. Void: Represents the absence of a value, typically used in functions that do not return a value.
  //10. Tuple: Represents an array with a fixed number of elements, where each element can have a different type, e.g., [string, number].
  //11. Enum: Represents a set of named constants, e.g., enum Color { Red, Green, Blue }.
  //12. Never: Represents a value that never occurs, typically used in functions that throw an error or have infinite loops.
  //13. Type Assertion: Allows you to specify a more specific type for a variable,  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length;
  //14. Interface: Defines a contract for the structure of an object, e.g.,
  //interface User { name: string; age: number; }
  //15. Type Alias: Creates a new name for a type, e.g., type StringOrNumber = string | number;
  //16. Union Types: Allows a variable to hold values of multiple types, e.g., let value: string | number;
  //17. Intersection Types: Combines multiple types into one, e.g., type A = { x: number; }; type B = { y: number; }; type C = A & B;
  //18. Literal Types: Represents specific values, e.g., let direction: 'left' | 'right' | 'up' | 'down';
  //19. Function Types: Represents the type of a function, e.g., type Add = (a: number, b: number) => number;
  //20. Generics: Allows you to create reusable components that can work with any data type, e.g., function identity<T>(arg: T): T { return arg; }
  //21. Promises: Represents a value that may be available now, or in the future, or never, e.g., let promise: Promise<string> = new Promise((resolve, reject) => { resolve('Hello'); });
  //22. Observables: Represents a stream of values over time, commonly used in Angular applications for handling asynchronous data, e.g., import { Observable } from 'rxjs'; let observable: Observable<number> = new Observable((observer) => { observer.next(1); observer.complete(); });
  //23. Decorators: Special annotations that can be attached to classes, methods, properties, or parameters to modify their behavior, e.g., @Component({ selector: 'app-root', templateUrl: './app.component.html' }) class AppComponent { }
  //24. Modules: Used to organize code into cohesive blocks, e.g., import { NgModule } from '@angular/core'; @NgModule({ declarations: [AppComponent], imports: [BrowserModule], bootstrap: [AppComponent] }) export class AppModule { }
  //25. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; }
  //26. Type Inference: The compiler automatically infers the type of a variable based on its initial value, e.g., let count = 10; // inferred as number
  //27. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //28. Type Aliases: Allows you to create a new name for a type, e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //29. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  //30. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //31. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; } // valid
  //32. Type Inference: The compiler automatically infers the type of a variable based on its initial value, e.g., let count = 10; // inferred as number
  //33. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //34. Type Aliases: Allows you to create a new name for a type, e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //35. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  //36. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //37. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; } // valid
  //38. Type Inference: The compiler automatically infers the type of a variable based on its initial value, e.g., let count = 10; // inferred as number
  //39. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //40. Type Aliases: Allows you to create a new name for a type,
  //e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //41. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  //42. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //43. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; } // valid
  //44. Type Inference: The compiler automatically infers the type of a variable based  on its initial value, e.g., let count = 10; // inferred as number
  //45. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //46. Type Aliases: Allows you to create a new name for a type, e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //47. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  //48. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //49. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; } // valid
  //50. Type Inference: The compiler automatically infers the type of a variable based

  //on its initial value, e.g., let count = 10; // inferred as number
  //51. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //52. Type Aliases: Allows you to create a new name for a type,
  //e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //53. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  // 54. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //55. Type Guards: Functions that check the type of a variable at runtime, e.g., function isString(value: any): value is string { return typeof value === 'string'; } // valid
  //56. Type Inference: The compiler automatically infers the type of a variable based
  //on its initial value, e.g., let count = 10; // inferred as number
  //57. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible
  //if they have the same structure, regardless of their names, e.g., let obj1 = { x: 10, y: 20 }; let obj2 = { x: 30, y: 40 }; obj1 = obj2; // valid due to structural typing
  //58. Type Aliases: Allows you to create a new name for a type, e.g., type StringOrNumber = string | number; let value: StringOrNumber = 'Hello'; // valid
  //59. Type Assertions: Allows you to specify a more specific type for a variable,
  //e.g., let someValue: any = 'Hello'; let strLength: number = (someValue as string).length; // valid
  //60. Type Compatibility: Angular 19 follows structural typing, meaning that types are compatible

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

// void is typically used for functions that do not return a value
//  const neverVariable = (() => { throw new Error('This function never returns'); })();
// const unknownVariable = 'This could be anything, but we need to check its type before using it';

// bigintVariable: bigint = 1234567890123456789012345678901234567890n; // Uncomment if bigint is supported in your environment
// symbolVariable: symbol = Symbol('unique'); // Uncomment if symbol is supported in your environment

// Additional complex types (uncomment if needed)
// dateVariable: Date = new Date();

// promiseVariable: Promise<string> = new Promise((resolve) => resolve('Promise resolved!'));
// observableVariable: Observable<number> = new Observable((observer) => {
//   observer.next(1);
//   observer.complete();
// });
// functionVariable: (x: number, y: number) => number = (x, y) => x + y;
// classVariable: MyClass = new MyClass(); // Assuming MyClass is a class defined elsewhere

// interfaceVariable: MyInterface = { prop1: 'value1', prop2: 42 }; // Assuming MyInterface is an interface defined elsewhere
