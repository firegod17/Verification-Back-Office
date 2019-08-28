(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["department-department-module"],{

/***/ "./src/app/department/department.component.css":
/*!*****************************************************!*\
  !*** ./src/app/department/department.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnQvZGVwYXJ0bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/department/department.component.ts":
/*!****************************************************!*\
  !*** ./src/app/department/department.component.ts ***!
  \****************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DepartmentComponent = /** @class */ (function () {
    function DepartmentComponent() {
    }
    DepartmentComponent.prototype.ngOnInit = function () {
    };
    DepartmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-department',
            template: '<router-outlet></router-outlet>',
            styles: [__webpack_require__(/*! ./department.component.css */ "./src/app/department/department.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentComponent);
    return DepartmentComponent;
}());



/***/ }),

/***/ "./src/app/department/department.module.ts":
/*!*************************************************!*\
  !*** ./src/app/department/department.module.ts ***!
  \*************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var _department_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./department.routing */ "./src/app/department/department.routing.ts");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.component */ "./src/app/department/department.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DepartmentModule = /** @class */ (function () {
    function DepartmentModule() {
    }
    DepartmentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _department_routing__WEBPACK_IMPORTED_MODULE_3__["DepartmentRoutingModule"],
                _app_common_module__WEBPACK_IMPORTED_MODULE_2__["AppCommonModule"]
            ],
            declarations: [
                _department_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentComponent"]
            ]
        })
    ], DepartmentModule);
    return DepartmentModule;
}());



/***/ }),

/***/ "./src/app/department/department.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/department/department.routing.ts ***!
  \**************************************************/
/*! exports provided: DepartmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentRoutingModule", function() { return DepartmentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.component */ "./src/app/department/department.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'department-list'
    },
    {
        path: 'department-list',
        component: _department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"],
        loadChildren: function () { return Promise.all(/*! import() | department-list-department-list-module */[__webpack_require__.e("common"), __webpack_require__.e("department-list-department-list-module")]).then(__webpack_require__.bind(null, /*! ./department-list/department-list.module */ "./src/app/department/department-list/department-list.module.ts")).then(function (m) { return m.DepartmentListModule; }); }
    },
    {
        path: 'department-detail',
        component: _department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"],
        loadChildren: function () { return Promise.all(/*! import() | department-detail-department-detail-module */[__webpack_require__.e("common"), __webpack_require__.e("department-detail-department-detail-module")]).then(__webpack_require__.bind(null, /*! ./department-detail/department-detail.module */ "./src/app/department/department-detail/department-detail.module.ts")).then(function (m) { return m.DepartmentDetailModule; }); }
    }
];
var DepartmentRoutingModule = /** @class */ (function () {
    function DepartmentRoutingModule() {
    }
    DepartmentRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DepartmentRoutingModule);
    return DepartmentRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=department-department-module-es5.js.map