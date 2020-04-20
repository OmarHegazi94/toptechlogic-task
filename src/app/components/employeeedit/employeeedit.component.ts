import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/_models/employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.scss']
})
export class EmployeeeditComponent implements OnInit {

  editEmployeeForm: FormGroup;
  generalFormError: boolean = false;
  messageSuccess: boolean = false;


  Employee: Employee = new Employee(null,null,null,null,null);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.employeeService.getEmployeeData(params.id).subscribe(
        employee => {
          this.Employee = employee;
        }
      )
    )

    this.editEmployeeForm = this.fb.group({
      id: [this.Employee.id, Validators.required],
      Name: [this.Employee.Name, Validators.required],
      Email: [this.Employee.Email, Validators.required],
      Password: [this.Employee.Password, Validators.required],
      Phone: [this.Employee.Phone, Validators.required]
    })
  }


  saveEmployee(){
    if(this.editEmployeeForm.valid) {

      this.activatedRoute.params.subscribe(
        params => {
          this.employeeService.updateEmployee(this.editEmployeeForm.value, params.id).subscribe(
            data => {
              console.log(data)
              this.messageSuccess = true;
              setTimeout( () => {
                this.router.navigateByUrl('/');
              }, 2000);
            },
            error => {
              console.log(error)
            }
          )
        }
      )


    }
    else {
      this.generalFormError = true;
    }
  }
  

}
