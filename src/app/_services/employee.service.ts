import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getEmployeeData(ID:number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${ID}`);
  }

  deleteEmployee(ID:number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${ID}`);
  }
}
