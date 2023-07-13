import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";
  constructor(private httpCilent: HttpClient) { }
 
  getEmployeesList(): Observable<Employee[]>{

    return this.httpCilent.get<Employee[]>(this.baseURL);
  }

  getEmployeeById(id: number): Observable<Employee>{

    return this.httpCilent.get<Employee>('http://localhost:8080/employees/'+ id);
  }

  createEmployee(employee: Employee): Observable<object>{

    return this.httpCilent.post(this.baseURL, employee);

  }

  deleteEmployee(id: number): Observable<object>{

    return this.httpCilent.delete('http://localhost:8080/employees/'+id);
  }

  updateEmployee(id: number, employee: Employee): Observable<Object>{

    return this.httpCilent.put('http://localhost:8080/employees/'+id, employee);
  }

}
