import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeaddComponent } from './components/employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './components/employeeedit/employeeedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmployeeaddComponent,
    EmployeeeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
