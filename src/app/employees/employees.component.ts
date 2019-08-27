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






  constructor(
    private routeStateService: RouteStateService,
    private employeeService: EmployeeDataService) { }



    ngOnInit() {

      var value_id = {Value:0}

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

    docStatus(){
      httpGET("/fields/user",{status: "docUpdated"},(response)=>{
        this.main = response;
        console.log(response);
        console.log(this.main);
        this.employees = this.main;
      });
    }





    goToDepartmentDetails() {
      // var id = this.main.fields.id;

      // if (department == 'undefined'){
      //
      // }
      // else if
      if (this.main["0"].status == 'docUpdated'){
        var department;
        var row = document.getElementsByTagName('tr');

        [].forEach.call(row, function(elem){
          elem.addEventListener('click', function (el) {
            alert(this.children[0].innerText);
            this.value_id = this.children[0].innerText;
            console.log(this.value_id);
              // return this.value_id;
              department = this.value_id;
              return department;

          })
        });


        console.log(this.value_id);

        this.routeStateService.add("Document Status", "/main/departments/department-detail", department, false);
      }
      if (this.main["0"].status == 'trust'){
        // department = this.value_id;

        this.routeStateService.add("Trust Status", "/main/departments/department-detail", department,  false);
      }


    }
  }
