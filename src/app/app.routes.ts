import { Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { LoginComponent } from './routing/login/login.component';
import { ProductComponent } from './routing/product/product.component';
import { ErrorComponent } from './routing/error/error.component';
import { RegisterComponent } from './register/register.component';
import { ProductCardComponent } from './control-flow/if-else-control/product-card/product-card.component';
import { ProductDashboardComponent } from './pipes/product-dashboard.component';
import { Component } from '@angular/core';
import { P1Component } from './routing/p1/p1.component';
import { P2Component } from './routing/p2/p2.component';


export const routes: Routes = [
  // Path Location Strategies
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    //nested routing
    children: [
      { path: 'p1', component: P1Component },
      { path: 'p2', component: P2Component },
    ],
  },
  {
    path: '**',
    component: ErrorComponent,
  },

  //HashLocation Strategies
  // { path: '', component: HomeComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'product', component: ProductDashboardComponent },
  // { path: '**', component: ErrorComponent },



  //nested routing for course
 
];


