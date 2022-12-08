import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CarcdProductComponent } from './carcd-product/carcd-product.component';

const myRouter:Routes = [
  {
    path : "",
    component : AdminLoginComponent
  },
  {
    path: "register",
    component : UserSignupComponent
  },
  {
    path: "add",
    component : AddProductComponent
  },
  {
    path:"view",
    component : ViewProductComponent
  },
  {
    path:"search",
    component : SearchProductComponent
  },
  {
    path : "userLogin",
    component:UserLoginComponent
  },
  {
    path: "cardProduct",
    component : CarcdProductComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserSignupComponent,
    AddProductComponent,
    ViewProductComponent,
    SearchProductComponent,
    UserLoginComponent,
    CarcdProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRouter),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
