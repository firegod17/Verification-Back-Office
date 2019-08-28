import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouteStateService } from '../core/services/route-state.service';
import { EmployeeDataService } from './employee-data.service';

function httpGET(path,dataObj,callback){
var endpoint = "http://alcyone.meta-exchange.info/kyc/api/" ;

var httpGet = new XMLHttpRequest();
httpGet.onreadystatechange = ()=>{
  if (httpGet.readyState == 4 && httpGet.status == 200) {
      var response = JSON.parse(httpGet.responseText);
      callback(response)
  }
};
var quertObj= Object.keys(dataObj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(dataObj[k])}`).join('&');
httpGet.open('GET', endpoint+path+"?"+quertObj, true);
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

  main:any[]=[];
  i=0;



  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService) { }

    getDepartmentById(id: number) {
        var data;
        this.columns.forEach(element => {
          console.log(element.field);
            if (element.field === id) {
                data = element;
            }
        });
        return data;
    }

  ngOnInit() {



// console.log(this.main);

    this.pageSize = 10;


    this.columns = [
      { field: '_id', header: this.main },
      { field: 'firstName', header: 'First Name' },
      { field: 'lastName', header: 'Last Name' },
      { field: 'number', header: 'Number' },
      { field: 'email', header: 'Email' },
      { field: 'username', header: 'Username' },
      { field: 'status', header: 'Status' },
      // { field: 'trustId', header: 'Trust' },
      // { field: 'dataId', header: 'Dataid' },





    ];



  }
  trust(){
    httpGET("/fields/user",{status: "trust"},(response)=>{
        this.main = response;
        console.log(response);
        console.log(this.main);
        this.employees = this.main;

        // for( var i = 1;i<this.main.length;i++) {
        // console.log(this.main[i]);
        // this.employees = this.main;
        //
        // // this.employees = this.employeeService.getEmployeeList();
        // }
          // console.log(this.main["0"].status);
    });
  }



  goToDepartmentDetails(department: String) {
    // var id = this.main.fields.id;

          if (this.main["0"].status == 'docUpdated'){


            this.routeStateService.add("Document Status", "/main/departments/department-detail", department, false);
          }
          if (this.main["0"].status == 'trust'){


            this.routeStateService.add("Trust Status", "/main/departments/department-detail", department,  false);
          }

  }
}
