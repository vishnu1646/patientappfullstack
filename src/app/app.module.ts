import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:NavbarComponent
},
{
  path:"view",
  component:ViewpatientComponent
},
{
  path:"add",
  component:AddpatientComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewpatientComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
