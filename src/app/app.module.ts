import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';

const myRoute:Routes=[
  {
    path:"",
    component:AddpatientComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    AddpatientComponent,
    ViewpatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
