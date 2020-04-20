import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss']
})
export class EmployeelistComponent implements OnInit {

  Employees: Employee[];

  constructor(private empolyeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empolyeeService.getAllEmployess().subscribe(
      (data) => {
        // console.log(data);
        this.Employees = data;
      }, error => {
        console.log(error)
      }
    );
  }

  deleteEmployee(employeeID: number) :void {
    this.empolyeeService.deleteEmployee(employeeID).subscribe(
      data => {
        console.log(data);
      }
    );
    this.empolyeeService.getAllEmployess().subscribe(
      (data) => {
        this.Employees = data;
      }, error => {
        console.log(error)
      }
    );
  }

  goToAddEmployee() :void {
    this.router.navigateByUrl('/add');
  }

}
