(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-user-register-user-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/register-user/register-user.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register-user/register-user.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-regisration\">\r\n  <div class=\"p-grid p-nogutter p-justify-center p-align-center\" style=\"height:100%\">\r\n    <div class=\"p-xl-3 p-lg-6 p-md-8 p-sm-10\">\r\n      <form [formGroup]=\"userform\" (ngSubmit)=\"onClickRegisterUser()\">\r\n        <p-panel header=\"User Registration\">\r\n          <div class=\"p-grid p-justify-center p-align-center\">\r\n            <div class=\"p-xl-6 p-lg-6 p-md-8 p-sm-10\">\r\n              <img src=\"../assets/images/logo-large.png\" class=\"login-logo\">\r\n            </div>\r\n            <div class=\"p-col-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n                <input id=\"float-input-username\" type=\"text\" size=\"30\" pInputText formControlName=\"name\" placeholder=\"user name\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-col-12\" *ngIf=\"userform.controls['name'].errors && userform.controls['name'].dirty\">\r\n              <p-message severity=\"error\" text=\"User name is required\" *ngIf=\"userform.controls['name'].errors['required']\"></p-message>\r\n            </div>\r\n            <div class=\"p-col-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-key\"></i></span>\r\n                <input id=\"float-input-password\" type=\"password\" size=\"30\" pInputText formControlName=\"password\"\r\n                  placeholder=\"password\" required>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-col-12\" *ngIf=\"userform.controls['password'].errors && userform.controls['password'].dirty\">\r\n              <p-message severity=\"error\" text=\"Password is required\" *ngIf=\"userform.controls['password'].errors['required']\"></p-message>\r\n              <p-message severity=\"error\" text=\"Minimum 6 characters required.\" *ngIf=\"userform.controls['password'].errors['minlength'] \"></p-message>\r\n            </div>\r\n            <div class=\"p-col-12\">\r\n              <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-at\"></i></span>\r\n                <input id=\"float-input-emailid\" type=\"email\" size=\"30\" pInputText formControlName=\"emailId\" placeholder=\"Email Id\"\r\n                  required>\r\n              </div>\r\n            </div>\r\n            <div class=\"p-col-12\" *ngIf=\"userform.controls['emailId'].errors && userform.controls['emailId'].dirty\">\r\n              <p-message severity=\"error\" text=\"Email is required\" *ngIf=\"userform.controls['emailId'].errors['required']\"></p-message>\r\n              <p-message severity=\"error\" text=\"Email is invalid\" *ngIf=\"userform.controls['emailId'].errors['email']\"></p-message>\r\n            </div>\r\n            <div class=\"p-col-12\">\r\n              <p-calendar formControlName=\"birthDate\" placeholder=\"Birth date\" [showIcon]=true></p-calendar>\r\n            </div>\r\n            <div class=\"p-col-12\" *ngIf=\"userform.controls['birthDate'].errors && userform.controls['birthDate'].dirty\">\r\n              <p-message severity=\"error\" text=\"Birthdate is required\" *ngIf=\"userform.controls['birthDate'].errors['required']\"></p-message>\r\n              <p-message severity=\"error\" text=\"Minimum age should be 10 years.\" *ngIf=\"userform.controls['birthDate'].errors['invalidBirthDate']\"></p-message>\r\n            </div>\r\n          </div>\r\n          <p-footer>\r\n            <div class=\"p-grid\">\r\n              <div class=\"p-col-6\">\r\n                <button pButton type=\"submit\" label=\"Register\" class=\"ui-button-raised\" [disabled]=\"!userform.valid\"></button>\r\n              </div>\r\n              <div class=\"p-col-6\">\r\n                <button pButton type=\"button\" label=\"Login\" class=\"ui-button-raised\" (click)=\"onClickGoToLogin()\"></button>\r\n              </div>\r\n            </div>\r\n          </p-footer>\r\n        </p-panel>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/validators/birthdate.validators.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/validators/birthdate.validators.ts ***!
  \*********************************************************/
/*! exports provided: birthDateValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "birthDateValidator", function() { return birthDateValidator; });
/**
 * validation function
 * birth date should be less than 10 years
 * @param control
 */
function birthDateValidator(control) {
    var value = control.value;
    var today = new Date();
    var birthDate = new Date(value);
    var age = today.getFullYear() - birthDate.getFullYear();
    var min = 10;
    if (age > min + 1) {
        return null;
    }
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    var reuslt = age >= min ? null : { 'invalidBirthDate': true };
    return reuslt;
}


/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/user-data.service */ "./src/app/core/services/user-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _core_validators_birthdate_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/validators/birthdate.validators */ "./src/app/core/validators/birthdate.validators.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(userService, router, fb, toastService) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.toastService = toastService;
    }
    RegisterUserComponent.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])),
            'emailId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]),
            'birthDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _core_validators_birthdate_validators__WEBPACK_IMPORTED_MODULE_5__["birthDateValidator"]])
        });
    };
    RegisterUserComponent.prototype.onClickRegisterUser = function () {
        var isRegistered = this.userService.addUser(this.userform.controls["name"].value, this.userform.controls["password"].value, this.userform.controls["emailId"].value, this.userform.controls["birthDate"].value);
        if (isRegistered) {
            this.router.navigate(['/login']);
            this.toastService.addSingle("success", "", "User registered.");
        }
    };
    RegisterUserComponent.prototype.onClickGoToLogin = function () {
        this.router.navigate(['/login']);
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! raw-loader!./register-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        __metadata("design:paramtypes", [_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _core_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/register-user/register-user.module.ts ***!
  \*******************************************************/
/*! exports provided: RegisterUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserModule", function() { return RegisterUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-user.component */ "./src/app/register-user/register-user.component.ts");
/* harmony import */ var _register_user_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register-user.routing */ "./src/app/register-user/register-user.routing.ts");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.common.module */ "./src/app/app.common.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterUserModule = /** @class */ (function () {
    function RegisterUserModule() {
    }
    RegisterUserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _register_user_routing__WEBPACK_IMPORTED_MODULE_3__["RegisterUserRoutingModule"],
                _app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]
            ],
            declarations: [_register_user_component__WEBPACK_IMPORTED_MODULE_2__["RegisterUserComponent"]]
        })
    ], RegisterUserModule);
    return RegisterUserModule;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/register-user/register-user.routing.ts ***!
  \********************************************************/
/*! exports provided: RegisterUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserRoutingModule", function() { return RegisterUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register-user.component */ "./src/app/register-user/register-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _register_user_component__WEBPACK_IMPORTED_MODULE_2__["RegisterUserComponent"]
    }
];
var RegisterUserRoutingModule = /** @class */ (function () {
    function RegisterUserRoutingModule() {
    }
    RegisterUserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegisterUserRoutingModule);
    return RegisterUserRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=register-user-register-user-module-es5.js.map