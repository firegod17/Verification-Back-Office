import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteStateService } from '../core/services/route-state.service';
import { EmployeeDataService } from './employee-data.service';

function httpGET(path,dataObj,callback){
var endpoint = "" ;

var httpGet = new XMLHttpRequest();
httpGet.onreadystatechange = ()=>{
  if (httpGet.readyState == 4 && httpGet.status == 200) {
      var response = JSON.parse(httpGet.responseText);
      callback(response)
  }
};
var quertObj= Object.keys(dataObj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(dataObj[k])}`).join('&');
httpGet.open('GET', "http://2f82b78c.ngrok.io"+path+"?"+quertObj, true);
httpGet.send();
}

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  columns: any[];

  employees: any[];

  pageSize: number;

  main: any[];



  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService) { }

  ngOnInit() {


    httpGET("/fields/user",{status: "trust"},(response)=>{
        this.main=response;
        console.log(response)
    });


    this.pageSize = 10;

    this.columns = [
      { field: '_id', header: this.main },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'number', header: 'Number' },
      { field: 'email', header: 'Email' },
      { field: 'username', header: 'Username' },


    ];

    this.employees = this.employeeService.getEmployeeList();
  }

  goToDepartmentDetails(department: number) {
    this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
  }
}
