import { Component, OnInit } from '@angular/core';
import { empData, Employee } from '../models/employee';
import { EmployeeService } from '../service/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  employees = empData;
  selectedEmployeeData: Employee | undefined;
  officeAddress = "1 Cigna Drive Dallas Tx";

  constructor(readonly empSvc: EmployeeService) { }

  selectedEmployee(empRec: Employee) {
    this.selectedEmployeeData = empRec;
    this.officeAddress = 'To moon or bust';
  }

  onNgInit() {
    
    this.empSvc.getEmployesFromAxios().then(res => {
      var empList = res.data;
    })
  }
}
