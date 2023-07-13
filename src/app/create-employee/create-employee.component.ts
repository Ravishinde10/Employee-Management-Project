import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {


  employee: Employee=new Employee();

  constructor(private employeeservice : EmployeeService,
    private router : Router){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  saveEmployee(){
    this.employeeservice.createEmployee(this.employee).subscribe( data=>{
          console.log(data);
          this.goToEmployeeList();
    },
 error => console.log(error));
    
  }

  goToEmployeeList(){
this.router.navigate(['/employee']);

  }

  onSubmit(){

    console.log(this.employee);
    this.saveEmployee();
    window.alert("add successfully")

  }
}
