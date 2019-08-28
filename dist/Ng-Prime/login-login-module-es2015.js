(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-panel\">\r\n  <div class=\"language-menu\">\r\n    <select (change)=\"onLanguageChange($event)\">\r\n      <option value=\"en\" [selected]=\"locale == 'en'\">English</option>\r\n      <option value=\"hi\" [selected]=\"locale == 'hi'\">Hindi</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"p-grid p-nogutter p-justify-center\tp-align-center\" style=\"height:100%\">\r\n    <div class=\"p-xl-3 p-lg-6 p-md-8 p-sm-10\">\r\n      <p-panel header=\"{{ 'Ng-PrimeLogin' | translate}}\">\r\n        <div class=\"p-grid p-justify-center p-align-center\">\r\n          <div class=\"p-xl-6 p-lg-6 p-md-8 p-sm-10\">\r\n            <img src=\"../assets/images/logo-large.png\" class=\"login-logo\">\r\n          </div>\r\n          <div class=\"p-col-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-user\"></i></span>\r\n              <input id=\"input-username\" type=\"text\" size=\"30\" pInputText [(ngModel)]=\"userName\"\r\n                placeholder=\"user name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"p-col-12\">\r\n            <div class=\"ui-inputgroup\">\r\n              <span class=\"ui-inputgroup-addon\"><i class=\"fa fa-key\"></i></span>\r\n              <input id=\"input-password\" type=\"password\" size=\"30\" pInputText [(ngModel)]=\"password\"\r\n                placeholder=\"password\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p-footer>\r\n          <div class=\"p-grid\">\r\n            <div class=\"p-col-6\">\r\n              <button pButton type=\"button\" label=\"{{ 'Login' | translate}}\" class=\"ui-button-raised\" (click)=\"onClickLogin()\"></button>\r\n            </div>\r\n            <div class=\"p-col-6\">\r\n              <button pButton type=\"button\" label=\"{{ 'Register' | translate}}\" class=\"ui-button-raised\"\r\n                [routerLink]=\"['/register']\"></button>\r\n            </div>\r\n          </div>\r\n        </p-footer>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".language-menu {\r\n    position: absolute;\r\n    right: 0px;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZ3VhZ2UtbWVudSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/user-data.service */ "./src/app/core/services/user-data.service.ts");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/route-state.service */ "./src/app/core/services/route-state.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _core_services_user_context_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/user-context.service */ "./src/app/core/services/user-context.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







let LoginComponent = class LoginComponent {
    constructor(userService, toastService, routeStateService, sessionService, translate, userContextService) {
        this.userService = userService;
        this.toastService = toastService;
        this.routeStateService = routeStateService;
        this.sessionService = sessionService;
        this.translate = translate;
        this.userContextService = userContextService;
    }
    ngOnInit() {
        this.userName = "";
        this.password = "";
        this.locale = this.sessionService.getItem("ng-prime-language");
    }
    onClickLogin() {
        let user = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
        if (user) {
            this.userContextService.setUser(user);
            this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
            return;
        }
        this.toastService.addSingle('error', '', 'Invalid user.');
        return;
    }
    onLanguageChange($event) {
        this.locale = $event.target.value;
        if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
            this.locale = "en";
        }
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(this.locale);
        this.sessionService.setItem("ng-prime-language", this.locale);
    }
};
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [_core_services_user_data_service__WEBPACK_IMPORTED_MODULE_1__["UserDataService"],
        _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"],
        _core_services_route_state_service__WEBPACK_IMPORTED_MODULE_3__["RouteStateService"],
        _core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _core_services_user_context_service__WEBPACK_IMPORTED_MODULE_6__["UserContextService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: HttpLoaderFactory, LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _login_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.routing */ "./src/app/login/login.routing.ts");
/* harmony import */ var _app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.common.module */ "./src/app/app.common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _login_routing__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]]
                },
                isolate: false
            })
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login/login.routing.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.routing.ts ***!
  \****************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map