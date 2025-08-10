import { Component } from "@angular/core";

@Component({
    selector: "app-profile",
    imports: [],
    template: `<h1>Profile Component(coustom componet)</h1>
               <p style="color: blueviolet;">Welcome to the profile page!</p>`,
    styles: "   h1 { color: blue; } ",
})
export class ProfileComponent {
    title = "my-app-19";
}   