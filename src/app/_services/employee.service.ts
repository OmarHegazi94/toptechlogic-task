import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../_models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = 'http://localhost:3000/employees';

  constructor(private http: HttpClient) { }

  getAllEmployess(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl);
  }

  addEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }


  // addEmployee(employee: Employee) {
  //   const options = {
  //     headers : new HttpHeaders({
  //       'Content-type': 'application/json'
  //     }),
  //     body: {
  //       employee: employee
  //     }
  //   }
  //   return this.http.post<Employee>(this.baseUrl, options);
  // }
  
  // updateEmployee(employee: Employee) {
  //   return this.http.put<Employee>(this.baseUrl, employee);
  // }

  updateEmployee(employee: Employee, ID: number) {
    const options = {
      headers : new HttpHeaders({
        'Content-type': 'application/json'
      }),
      body: {
        employee: employee
      }
    }
    return this.http.put<Employee>(`${this.baseUrl}/${ID}`, options);
  }

  getEmployeeData(ID:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${ID}`);
  }

  deleteEmployee(ID:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${ID}`);
  }
  
}
