import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient, private empolyeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empolyeeService.getAllEmployess().subscribe(
      (data) => {
        // console.log(data);
        this.Employees = data;
      }
    );
  }

  goToAddEmployee() :void {
    this.router.navigateByUrl('/add');
  }

}
