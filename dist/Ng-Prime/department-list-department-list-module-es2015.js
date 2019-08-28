(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department-list-department-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/department/department-list/department-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/department/department-list/department-list.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-breadcrumb></app-header-breadcrumb>\r\n<p-panel header=\"Department List\">\r\n    <p-table [value]=\"departments\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th *ngFor=\"let col of columns\">\r\n                    {{col.header}}\r\n                </th>\r\n                <th></th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-department>\r\n            <tr>\r\n                <td *ngFor=\"let col of columns\">\r\n                    {{department[col.field]}}\r\n                </td>\r\n                <td>\r\n                    <a (click)=\"goToDepartmentDetails(department.Id)\">Details</a>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/department/department-list/department-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/department/department-list/department-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC1saXN0L2RlcGFydG1lbnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/department/department-list/department-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/department/department-list/department-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: DepartmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentListComponent", function() { return DepartmentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _department_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../department-data.service */ "./src/app/department/department-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DepartmentListComponent = class DepartmentListComponent {
    constructor(departmentService, routeStateService, router) {
        this.departmentService = departmentService;
        this.routeStateService = routeStateService;
        this.router = router;
        this.columns = [
            { field: 'Name', header: 'Name' },
            { field: 'Description', header: 'Description' }
        ];
    }
    ngOnInit() {
        this.departments = this.departmentService.getAllDepartments();
    }
    goToDepartmentDetails(department) {
        this.routeStateService.add("Department details", "/main/departments/department-detail", department, false);
    }
};
DepartmentListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-department-list',
        template: __webpack_require__(/*! raw-loader!./department-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/department/department-list/department-list.component.html"),
        styles: [__webpack_require__(/*! ./department-list.component.css */ "./src/app/department/department-list/department-list.component.css")]
    }),
    __metadata("design:paramtypes", [_department_data_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentDataService"], _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], DepartmentListComponent);



/***/ }),

/***/ "./src/app/department/department-list/department-list.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/department/department-list/department-list.module.ts ***!
  \**********************************************************************/
/*! exports provided: DepartmentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentListModule", function() { return DepartmentListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _department_list_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-list.routing */ "./src/app/department/department-list/department-list.routing.ts");
/* harmony import */ var _department_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-list.component */ "./src/app/department/department-list/department-list.component.ts");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/header-breadcrumb/header-breadcrumb.module */ "./src/app/layout/header-breadcrumb/header-breadcrumb.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let DepartmentListModule = class DepartmentListModule {
};
DepartmentListModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _department_list_routing__WEBPACK_IMPORTED_MODULE_2__["DepartmentListRoutingModule"],
            _app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]
        ],
        declarations: [
            _department_list_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentListComponent"]
        ]
    })
], DepartmentListModule);



/***/ }),

/***/ "./src/app/department/department-list/department-list.routing.ts":
/*!***********************************************************************!*\
  !*** ./src/app/department/department-list/department-list.routing.ts ***!
  \***********************************************************************/
/*! exports provided: DepartmentListRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentListRoutingModule", function() { return DepartmentListRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _department_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-list.component */ "./src/app/department/department-list/department-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _department_list_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentListComponent"]
    }
];
let DepartmentListRoutingModule = class DepartmentListRoutingModule {
};
DepartmentListRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], DepartmentListRoutingModule);



/***/ })

}]);
//# sourceMappingURL=department-list-department-list-module-es2015.js.map