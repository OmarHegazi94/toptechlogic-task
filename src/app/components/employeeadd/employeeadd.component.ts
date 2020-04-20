import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/_services/employee.service';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  styleUrls: ['./employeeadd.component.scss']
})
export class EmployeeaddComponent implements OnInit {

  addEmployeeForm: FormGroup;
  generalFormError: boolean = false;
  messageSuccess: boolean = false;

  // selectedImage: File | null = null;

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private employeeService: EmployeeService,
    ) { }

  ngOnInit(): void {
    this.addEmployeeForm = this.fb.group({
      id: [null, Validators.required],
      Name: [null, Validators.required],
      Email: [null, [Validators.required, Validators.email]],
      Password: [null, Validators.required],
      Phone: [null, Validators.required],
      // Image: [null, Validators.required]
    });
  }

  // onFileSelected(event){
  //   this.selectedImage = <File>event.target.files[0];

  //   this.addEmployeeForm.patchValue({
  //     Image: this.selectedImage
  //   });
  // }


  addEmployee(){
    console.log(this.addEmployeeForm.controls.Email);

    if(this.addEmployeeForm.valid) {
      console.log(this.addEmployeeForm.controls.Email);

      // let formData = new FormData;
      // formData.append('image', this.selectedImage, this.selectedImage.name)

      this.employeeService.addEmployee(this.addEmployeeForm.value).subscribe(
        data => {
          console.log(data);
          this.messageSuccess = true;
          setTimeout(() => {
            this.router.navigateByUrl('/');
        }, 2000);

        }, error => {
          console.log(error);
        }
      );
    } 
    else {
      this.generalFormError = true;
    }
  }

}
