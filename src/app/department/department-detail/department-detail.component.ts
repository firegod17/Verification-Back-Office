import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from '../department-data.service';
import { Department } from '../../core/models/department.model';
import { RouteStateService } from '../../core/services/route-state.service';


function httpRequest(method,path,dataObj,callback){
    var endpoint = "http://2f82b78c.ngrok.io"

    var httpPost = new XMLHttpRequest();

    httpPost.onload = function(err) {
        if (httpPost.readyState == 4 && httpPost.status == 200){
            var response=JSON.parse(httpPost.responseText)//here you will get uploaded image id
            callback(response);
        } else {
            console.log(err);
        }
    }
    httpPost.open(method, endpoint+path, true);
    httpPost.setRequestHeader('Content-Type', 'application/json');//Specifies type of request
    httpPost.send(JSON.stringify(dataObj))
}

function httpGET(path,dataObj,callback){
  var endpoint = "http://2f82b78c.ngrok.io";

    var httpGet = new XMLHttpRequest();
    httpGet.onreadystatechange = ()=>{
      if (httpGet.readyState == 4 && httpGet.status == 200) {
          var response = JSON.parse(httpGet.responseText);
          callback(response)
      }
    };
    var queryString = Object.keys(dataObj).map(function(key) {
        return key + '=' + dataObj[key]
    }).join('&');
    httpGet.open('GET', endpoint+path+"?"+queryString, true);
    httpGet.send();
}

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  department: any;

  constructor(
    private departmentService: DepartmentDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.department = this.departmentService.getDepartmentById(routeState.data);




    //Get trust
    httpGET("/fields/trust",{userId:'5d5580ae7c213e60b8eff18f'},(response)=>{
        this.department = JSON.stringify(response, null, 4);
    })
  }

  back() {
    this.routeStateService.loadPrevious();
  }

  reject(){
    var dataObj={
    userId:'5d5580ae7c213e60b8eff18f',
    status:"trustRejected",
    text:'...'
    }
    httpRequest("POST",'/status',dataObj,(response)=>{
        console.log(response)
    })
  }

  submit(){
    var dataObj={
    userId:'5d5580ae7c213e60b8eff18f',
    status:"trustSubmited",
    text:"Your Trust has been submitted<br>"+
        "Please go back and continue registration"
    }
    httpRequest("POST",'/status',dataObj,(response)=>{
        console.log(response)
    })
  }
}
