(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employees-employees-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/employees/employees.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-breadcrumb></app-header-breadcrumb>\r\n<p-panel header=\"Employees List\">\r\n    <div class=\"ui-g\">\r\n        <div class=\"ui-g-10 ui-sm-8\"><label style=\"float:right;\">Page Size:</label></div>\r\n        <div class=\"ui-g-2 ui-sm-4\"><input type=\"text\" pInputText [(ngModel)]=\"pageSize\"></div>\r\n    </div>\r\n    <p-table [value]=\"employees\" [paginator]=\"true\" [rows]=\"pageSize\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-employee>\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    <div *ngIf=\"col.field != 'Department'\">{{employee[col.field]}}</div>\r\n                    <div *ngIf=\"col.field == 'Department'\"><a (click)=\"goToDepartmentDetails(employee.DepartmentId)\">{{employee[col.field]}}</a></div>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
/* harmony import */ var _employee_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-data.service */ "./src/app/employees/employee-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



function httpGET(path, dataObj, callback) {
    var endpoint = "";
    var httpGet = new XMLHttpRequest();
    httpGet.onreadystatechange = () => {
        if (httpGet.readyState == 4 && httpGet.status == 200) {
            var response = JSON.parse(httpGet.responseText);
            callback(response);
        }
    };
    var quertObj = Object.keys(dataObj).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(dataObj[k])}`).join('&');
    httpGet.open('GET', "http://2f82b78c.ngrok.io" + path + "?" + quertObj, true);
    httpGet.send();
}
let EmployeesComponent = class EmployeesComponent {
    constructor(routeStateService, employeeService) {
        this.routeStateService = routeStateService;
        this.employeeService = employeeService;
    }
    ngOnInit() {
        httpGET("/fields/user", { status: "trust" }, (response) => {
            this.main = response;
            console.log(response);
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
    goToDepartmentDetails(department) {
        this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
    }
};
EmployeesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-employees',
        template: __webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/index.js!./src/app/employees/employees.component.html"),
        styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
    }),
    __metadata("design:paramtypes", [_core_services_route_state_service__WEBPACK_IMPORTED_MODULE_1__["RouteStateService"],
        _employee_data_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeDataService"]])
], EmployeesComponent);



/***/ }),

/***/ "./src/app/employees/employees.module.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employees.module.ts ***!
  \***********************************************/
/*! exports provided: EmployeesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesModule", function() { return EmployeesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _employees_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees.routing */ "./src/app/employees/employees.routing.ts");
/* harmony import */ var _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../layout/header-breadcrumb/header-breadcrumb.module */ "./src/app/layout/header-breadcrumb/header-breadcrumb.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let EmployeesModule = class EmployeesModule {
};
EmployeesModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _employees_routing__WEBPACK_IMPORTED_MODULE_4__["EmployeesRoutingModule"],
            _app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"],
            _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]
        ],
        declarations: [
            _employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"]
        ]
    })
], EmployeesModule);



/***/ }),

/***/ "./src/app/employees/employees.routing.ts":
/*!************************************************!*\
  !*** ./src/app/employees/employees.routing.ts ***!
  \************************************************/
/*! exports provided: EmployeesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesRoutingModule", function() { return EmployeesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employees.component */ "./src/app/employees/employees.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _employees_component__WEBPACK_IMPORTED_MODULE_2__["EmployeesComponent"]
    }
];
let EmployeesRoutingModule = class EmployeesRoutingModule {
};
EmployeesRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], EmployeesRoutingModule);



/***/ })

}]);
//# sourceMappingURL=employees-employees-module-es2015.js.map