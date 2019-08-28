(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department-detail-department-detail-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/department/department-detail/department-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/department/department-detail/department-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header-breadcrumb></app-header-breadcrumb>\r\n<p-panel header=\"Department Details\">\r\n  <p>\r\n    <b>Department Name :</b> {{department.Name}}\r\n  </p>\r\n  <p>\r\n    <b>Department Description :</b> {{department.Description}}\r\n  </p>\r\n  <p-footer>\r\n    <button pButton type=\"button\" label=\"Back\" class=\"ui-button-secondary prime-button\" (click)=\"back()\"></button>\r\n  </p-footer>\r\n</p-panel>"

/***/ }),

/***/ "./src/app/department/department-detail/department-detail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/department/department-detail/department-detail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC1kZXRhaWwvZGVwYXJ0bWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/department/department-detail/department-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/department/department-detail/department-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DepartmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailComponent", function() { return DepartmentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _department_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../department-data.service */ "./src/app/department/department-data.service.ts");
/* harmony import */ var _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let DepartmentDetailComponent = class DepartmentDetailComponent {
    constructor(departmentService, routeStateService) {
        this.departmentService = departmentService;
        this.routeStateService = routeStateService;
    }
    ngOnInit() {
        var routeState = this.routeStateService.getCurrent();
        this.department = this.departmentService.getDepartmentById(routeState.data);
    }
    back() {
        this.routeStateService.loadPrevious();
    }
};
DepartmentDetailComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-department-detail',
        template: __webpack_require__(/*! raw-loader!./department-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/department/department-detail/department-detail.component.html"),
        styles: [__webpack_require__(/*! ./department-detail.component.css */ "./src/app/department/department-detail/department-detail.component.css")]
    }),
    __metadata("design:paramtypes", [_department_data_service__WEBPACK_IMPORTED_MODULE_1__["DepartmentDataService"],
        _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_2__["RouteStateService"]])
], DepartmentDetailComponent);



/***/ }),

/***/ "./src/app/department/department-detail/department-detail.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/department/department-detail/department-detail.module.ts ***!
  \**************************************************************************/
/*! exports provided: DepartmentDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailModule", function() { return DepartmentDetailModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _department_detail_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-detail.routing */ "./src/app/department/department-detail/department-detail.routing.ts");
/* harmony import */ var _department_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department-detail.component */ "./src/app/department/department-detail/department-detail.component.ts");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layout/header-breadcrumb/header-breadcrumb.module */ "./src/app/layout/header-breadcrumb/header-breadcrumb.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let DepartmentDetailModule = class DepartmentDetailModule {
};
DepartmentDetailModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _department_detail_routing__WEBPACK_IMPORTED_MODULE_2__["DepartmentDetailRoutingModule"],
            _app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _layout_header_breadcrumb_header_breadcrumb_module__WEBPACK_IMPORTED_MODULE_5__["HeaderBreadCrumbModule"]
        ],
        declarations: [
            _department_detail_component__WEBPACK_IMPORTED_MODULE_3__["DepartmentDetailComponent"]
        ]
    })
], DepartmentDetailModule);



/***/ }),

/***/ "./src/app/department/department-detail/department-detail.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/department/department-detail/department-detail.routing.ts ***!
  \***************************************************************************/
/*! exports provided: DepartmentDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailRoutingModule", function() { return DepartmentDetailRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _department_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department-detail.component */ "./src/app/department/department-detail/department-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _department_detail_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentDetailComponent"]
    }
];
let DepartmentDetailRoutingModule = class DepartmentDetailRoutingModule {
};
DepartmentDetailRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], DepartmentDetailRoutingModule);



/***/ })

}]);
//# sourceMappingURL=department-detail-department-detail-module-es2015.js.map