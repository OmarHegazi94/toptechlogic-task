import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeaddComponent } from './components/employeeadd/employeeadd.component';
import { EmployeeeditComponent } from './components/employeeedit/employeeedit.component';


const routes: Routes = [
  { path: "", component: EmployeelistComponent, pathMatch: "full" },
  { path: "add", component: EmployeeaddComponent, pathMatch: "full" },
  { path: "edit/:id", component: EmployeeeditComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
