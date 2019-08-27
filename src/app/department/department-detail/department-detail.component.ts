// import { Component, OnInit } from '@angular/core';
// import { DepartmentDataService } from '../department-data.service';
// import { Department } from '../../core/models/department.model';
// import { RouteStateService } from '../../core/services/route-state.service';
//
// @Component({
//   selector: 'app-department-detail',
//   templateUrl: './department-detail.component.html',
//   styleUrls: ['./department-detail.component.css']
// })
// export class DepartmentDetailComponent implements OnInit {
//
//   department: Department;
//
//   constructor(
//     private departmentService: DepartmentDataService,
//     private routeStateService: RouteStateService) { }
//
//   ngOnInit() {
//     var routeState = this.routeStateService.getCurrent();
//     this.department = this.departmentService.getDepartmentById(routeState.data);
//   }
//
//   back() {
//     this.routeStateService.loadPrevious();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { DepartmentDataService } from '../department-data.service';
import { Department } from '../../core/models/department.model';
import { RouteStateService } from '../../core/services/route-state.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

function httpRequest(method,path,dataObj,callback){
    var endpoint = "http://alcyone.meta-exchange.info/kyc/api"
    var httpPost = new XMLHttpRequest();
    var idUser = null;
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
    let page = "doc";
    var endpoint = "http://alcyone.meta-exchange.info/kyc/api";
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
  text = new FormControl('');
  department: Department;
  title: String;
  visibility: boolean = true;


  constructor(
    private departmentService: DepartmentDataService,
    private routeStateService: RouteStateService) { }

  ngOnInit() {
    var routeState = this.routeStateService.getCurrent();
    this.department = this.departmentService.getDepartmentById(routeState.data);
    console.log(this.text);
    this.title = routeState.title;
    console.log(routeState);





    //Get trust
    if (routeState.title==="Trust Status"){
      httpGET("/fields/trust",{userId:'5d5580ae7c213e60b8eff18f'},(response)=>{
          document.getElementById("json").innerHTML  = JSON.stringify(response, null, 4);




      })
    }else if (routeState.title==="Document Status"){
      this.visibility=!this.visibility;
      // httpGET("/data/doc",{userId:'5d5580ae7c213e60b8eff18f'},(response)=>{
      //     document.getElementById("json").innerHTML  = JSON.stringify(response, null, 4);

      }
  }

  back() {

    this.routeStateService.loadPrevious();
    // trust();
  }

  reject(){

    if(this.title==="Trust Status"){
      var dataObj={
      userId:'5d5580ae7c213e60b8eff18f',
      status:"trustRejected",
      text: this.text.value
      }
      httpRequest("POST",'/status',dataObj,(response)=>{
          console.log(response)
      })
    }else if (this.title=="Document Status"){
      var dataObj={
      userId:'5d65373ed5fd797cc80d6c90',
      status:"docRejected",
      text: this.text.value
      }
      httpRequest("POST",'/status',dataObj,(response)=>{
        console.log(response)
      })
    }
  }



  submit(){
    if(this.title==="Trust Status"){
      var dataObj={
      userId:'5d5580ae7c213e60b8eff18f',
      status:"trustSubmited",
      text:"Your Trust has been submitted<br>"+
          "Please go back and continue registration"
      }
      httpRequest("POST",'/status',dataObj,(response)=>{
          console.log(response)
      })
    }else if (this.title=="Document Status"){
      var dataObj={
      userId:'5d65373ed5fd797cc80d6c90',
      status:"docSubmited",
      text:"Your Docs has been submitted<br>"+
          "Please go back and continue registration"
      }
      httpRequest("POST",'/status',dataObj,(response)=>{
          console.log(response)
      })
    }
    }
    docOpen(){
      var	endpoint = 'http://alcyone.meta-exchange.info/kyc/api';
   // httpGET('/data/doc',{userId:'5d55413393a5416114a113df',method:"download"});
  window.open(endpoint+'/data/doc?userId='+'5d55413393a5416114a113df')
    }
}
