"use strict";
(self["webpackChunkchatter_app"] = self["webpackChunkchatter_app"] || []).push([["main"],{

/***/ 6356:
/*!***********************************************************!*\
  !*** ./src/app/Exceptions/404/404-not-found.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-404"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sorry, this page was not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7249:
/*!****************************************************************!*\
  !*** ./src/app/account/account-info/account-info.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInfoComponent": () => (/* binding */ AccountInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AccountInfoComponent {
    constructor() { }
    ngOnInit() {
        if (!this.currentUser) {
            console.error("Account-Info no user");
        }
    }
}
AccountInfoComponent.ɵfac = function AccountInfoComponent_Factory(t) { return new (t || AccountInfoComponent)(); };
AccountInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountInfoComponent, selectors: [["app-account-info"]], inputs: { currentUser: "currentUser" }, decls: 20, vars: 6, consts: [[1, "wrapper"], [1, "container"], [1, "section-1"], ["src", "assets/default-avatar.png", "alt", "profile-picture", 1, "pp"], [1, "divider"], [1, "section-2"]], template: function AccountInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Other stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.currentUser == null ? null : ctx.currentUser.user_name, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Firstname: ", ctx.currentUser == null ? null : ctx.currentUser.first_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Surname: ", ctx.currentUser == null ? null : ctx.currentUser.sur_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx.currentUser == null ? null : ctx.currentUser.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Phonenumber: ", ctx.currentUser == null ? null : ctx.currentUser.phonenumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Last online: ", ctx.currentUser == null ? null : ctx.currentUser.lastOnline, "");
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid black;\n  padding: 0.5rem;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #dbd9d9;\n  margin: 10px;\n  overflow: auto;\n  min-height: 350px;\n}\n.wrapper[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  text-decoration: underline;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  text-decoration: underline;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   a.divider[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1px;\n  border: 1.5px solid black;\n  background-color: black;\n  margin: 0 20px;\n  opacity: 0.15;\n  height: 300px;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n  justify-content: center;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-1[_ngcontent-%COMP%]   .pp[_ngcontent-%COMP%] {\n  padding: 0px;\n  max-width: 220px;\n  max-height: 200px;\n  height: 100%;\n  width: auto;\n  border-radius: 20px;\n  justify-content: center;\n  object-fit: contain;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .section-2[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFFUTtFQUNJLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtBQUFaO0FBSVE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQUhaO0FBTVk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBTGhCO0FBV1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBVFoiLCJmaWxlIjoiYWNjb3VudC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46IDEwcHg7ICAgXG4gICAgb3ZlcmZsb3c6YXV0bztcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcblxuICAgIGgye1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cblxuICAgICAgICBhLmRpdmlkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAuMTU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24tMXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICBcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBcbiAgICAgICAgICAgIC5wcHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDsgICBcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luOiAwcHggYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbi0ye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICB9XG5cblxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 6885:
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _account_info_account_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-info/account-info.component */ 7249);
/* harmony import */ var _personal_info_form_personal_info_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./personal-info-form/personal-info-form.component */ 666);
/* harmony import */ var _password_info_form_password_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-info-form/password-info-form.component */ 2582);
/* harmony import */ var _change_email_form_change_email_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./change-email-form/change-email-form.component */ 9974);
/* harmony import */ var _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/error-banner/error-banner.component */ 9201);








function AccountComponent_app_error_banner_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-error-banner", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("error_message", ctx_r0.error_message)("error_status", ctx_r0.error_status)("error_type", ctx_r0.error_type);
} }
class AccountComponent {
    constructor(authService) {
        this.authService = authService;
        this.showBanner = false;
    }
    ngOnInit() {
        var _a;
        this.currentUser = (_a = this.authService.currentUser) !== null && _a !== void 0 ? _a : null;
        if (!this.currentUser) {
            console.error('Current user does not exist');
        }
    }
    showBannerMessage($event) {
        this.error_message = $event.message;
        this.error_type = $event.type;
        this.error_status = $event.status;
        this.showBanner = true;
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 10, vars: 5, consts: [[1, "wrapper"], ["id", "top"], [3, "error_message", "error_status", "error_type", 4, "ngIf"], [3, "currentUser"], [1, "update-container"], [1, "personal", 3, "currentUser"], [1, "other-info"], [1, "password", 3, "currentUser"], [1, "email", 3, "currentUser", "emitBannerMessage"], [3, "error_message", "error_status", "error_type"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, AccountComponent_app_error_banner_3_Template, 1, 3, "app-error-banner", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "app-account-info", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "app-personal-info-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "app-password-info-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "app-change-email-form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("emitBannerMessage", function AccountComponent_Template_app_change_email_form_emitBannerMessage_9_listener($event) { return ctx.showBannerMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentUser", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentUser", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentUser", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("currentUser", ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _account_info_account_info_component__WEBPACK_IMPORTED_MODULE_1__.AccountInfoComponent, _personal_info_form_personal_info_form_component__WEBPACK_IMPORTED_MODULE_2__.PersonalInfoFormComponent, _password_info_form_password_info_form_component__WEBPACK_IMPORTED_MODULE_3__.PasswordInfoFormComponent, _change_email_form_change_email_form_component__WEBPACK_IMPORTED_MODULE_4__.ChangeEmailFormComponent, _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_5__.ErrorBannerComponent], styles: [".update-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.update-container[_ngcontent-%COMP%]   .personal[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-right: 1rem;\n}\n.update-container[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.update-container[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.update-container[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQUFSO0FBRVE7RUFDSSxXQUFBO0FBQVo7QUFHUTtFQUNJLFdBQUE7QUFEWjtBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBSEoiLCJmaWxlIjoiYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAucGVyc29uYWx7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgLm90aGVyLWluZm97XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5wYXNzd29yZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVtYWlse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi53cmFwcGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuXG4iXX0= */"] });


/***/ }),

/***/ 740:
/*!********************************************!*\
  !*** ./src/app/account/account.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class AccountService {
    constructor(http) {
        this.http = http;
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.php_api_url;
    }
    checkOldPassword(postData) {
        return this.http.post(this.routePrefix + "account/check-old-password", postData);
    }
    updateAccountDetails(postData) {
        return this.http.post(this.routePrefix + 'account/update-account-details', postData);
    }
    updatePassword(postData) {
        return this.http.post(this.routePrefix + 'account/update-password', postData);
    }
    updateEmail(postData) {
        return this.http.post(this.routePrefix + 'account/update-email', postData);
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AccountService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9974:
/*!**************************************************************************!*\
  !*** ./src/app/account/change-email-form/change-email-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeEmailFormComponent": () => (/* binding */ ChangeEmailFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account.service */ 740);





class ChangeEmailFormComponent {
    constructor(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.emitBannerMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        if (!this.currentUser) {
            console.error('No User');
        }
        this.initForm();
    }
    initForm() {
        this.changeEmailForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
        });
    }
    submitEmailForm() {
        var _a, _b;
        if (this.changeEmailForm.valid) {
            return;
        }
        const postData = {
            userId: (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : -1,
            email: this.emailVal,
            confirmEmail: this.confirmEmailVal,
        };
        this.accountService
            .updateEmail(postData)
            .pipe()
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    //update current user in local storage
                    localStorage.setItem('session', JSON.stringify(response.data));
                    //emit success message
                    this.emitBannerMessage.emit({
                        status: response.status,
                        message: response.message,
                        type: 'SUCCESS'
                    });
                    window.scrollTo(0, 0);
                }
                this.emitBannerMessage.emit({
                    status: response.status,
                    message: response.message,
                    type: 'ERROR'
                });
                window.scrollTo(0, 0);
            },
            error: (response) => {
                this.emitBannerMessage.emit({
                    status: 400,
                    message: 'Something went wrong',
                    type: 'ERROR'
                });
                window.scrollTo(0, 0);
            }
        });
    }
    get checkEmail() {
        return this.emailVal === this.confirmEmailVal;
    }
    get emailVal() {
        return this.changeEmailForm.controls['email'].value;
    }
    get confirmEmailVal() {
        return this.changeEmailForm.controls['confirmEmail'].value;
    }
}
ChangeEmailFormComponent.ɵfac = function ChangeEmailFormComponent_Factory(t) { return new (t || ChangeEmailFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
ChangeEmailFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChangeEmailFormComponent, selectors: [["app-change-email-form"]], inputs: { currentUser: "currentUser" }, outputs: { emitBannerMessage: "emitBannerMessage" }, decls: 16, vars: 4, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "email", 1, "form-label"], ["type", "text", "formControlName", "email", 1, "form-input"], ["for", "confirmEmail", 1, "form-label"], ["type", "text", "formControlName", "confirmEmail", 1, "form-input"], [1, "button"]], template: function ChangeEmailFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChangeEmailFormComponent_Template_form_ngSubmit_5_listener() { return ctx.submitEmailForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Confirm Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Current Email: ", ctx.currentUser == null ? null : ctx.currentUser.email, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.changeEmailForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", !ctx.checkEmail);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid black;\n  padding: 0.5rem;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #dbd9d9;\n  margin: 10px;\n  overflow: auto;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  text-decoration: underline;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  background-color: #dbd9d9;\n  border: none;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  letter-spacing: 2px;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 30px;\n  border-radius: 10px;\n  min-height: 50px;\n  border: 1.5px solid black;\n  width: 70%;\n  height: 80%;\n  padding: 3px;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  outline: none;\n}\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 10%;\n  height: auto;\n  width: 40%;\n  padding: 10px;\n  margin: 10px auto;\n  border-radius: 4px;\n  transition: 0.2s;\n  opacity: 0.9;\n  border: 2.5px solid;\n  background-color: #e2e2e2;\n  box-shadow: inset 15px 0px #151515;\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  min-height: 12%;\n  height: auto;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n  border: 2.5px solid #151515;\n}\n.login[_ngcontent-%COMP%]:hover {\n  background-color: #359a35;\n  transition: 0.5s;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  background-color: #b92020;\n  transition: 0.5s;\n}\n.error[_ngcontent-%COMP%] {\n  border: 1.5px solid red !important;\n  color: red;\n}\n.red[_ngcontent-%COMP%] {\n  border: 1.5px solid red !important;\n}\n.amber[_ngcontent-%COMP%] {\n  border: 1.5px solid orange !important;\n}\n.green[_ngcontent-%COMP%] {\n  border: 1.5 solid green !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtJQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQ0k7RUFDSSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBR1E7RUFDSSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFEWjtBQUdZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtBQURoQjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtBQUpaO0FBVUE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFQSjtBQVVBO0VBQ0ksaUJBQUE7QUFQSjtBQVVBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFQSjtBQVVBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQkFBQTtBQVBKO0FBVUE7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBUEo7QUFVQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFQSjtBQVVBO0VBQ0ksa0NBQUE7RUFDQSxVQUFBO0FBUEo7QUFVQTtFQUNJLGtDQUFBO0FBUEo7QUFVQTtFQUNJLHFDQUFBO0FBUEo7QUFTQTtFQUNJLGtDQUFBO0FBTkoiLCJmaWxlIjoiY2hhbmdlLWVtYWlsLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgbWFyZ2luOiAxMHB4OyAgIFxuICAgIG92ZXJmbG93OmF1dG87XG5cbiAgICBoM3tcbiAgICAgICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1jb250cm9se1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgXG4gICAgICAgIC5mb3JtLWxhYmVse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG5cbiAgICAgICAgICAgIC5pbWd7IFxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0taW5wdXR7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcblxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtaW4taGVpZ2h0OiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjYsIDIyNiwgMjI2KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxNXB4IDBweCByZ2IoMjEsIDIxLCAyMSk7XG59XG5cbi5idXR0b24gcHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJ1dHRvbiAubG9nb3tcbiAgICBtaW4taGVpZ2h0OiAxMiU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMTQwcHggMHB4IHJnYmEoMTQsIDE0LCAxNCwgMC41KTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmxvZ2luOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMTU0LCA1Myk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uY2xlYXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMzIsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5lcnJvcntcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiByZWQ7XG59XG5cbi5yZWR7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLmFtYmVye1xuICAgIGJvcmRlcjogMS41cHggc29saWQgb3JhbmdlICFpbXBvcnRhbnQ7XG59XG4uZ3JlZW57XG4gICAgYm9yZGVyOiAxLjUgc29saWQgZ3JlZW4gIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 2582:
/*!****************************************************************************!*\
  !*** ./src/app/account/password-info-form/password-info-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordInfoFormComponent": () => (/* binding */ PasswordInfoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account.service */ 740);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function PasswordInfoFormComponent_label_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Passwords do not match;");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PasswordInfoFormComponent_label_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Current password is incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class PasswordInfoFormComponent {
    constructor(fb, accountService, authService) {
        this.fb = fb;
        this.accountService = accountService;
        this.authService = authService;
        this.passwordMismatch = false;
        this.wrongCurrentPassword = false;
        this.emitBannerMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    ngOnInit() {
        this.initForm();
    }
    /**
     * Initialize change password form
     * @returns void
     */
    initForm() {
        this.passwordInfoForm = this.fb.group({
            currentPassword: [''],
            password: [''],
            confirmPassword: [''],
        });
    }
    /**
     * Updates user password
     * @returns void
     */
    updatePassword() {
        if (this.currentUser === null) {
            return;
        }
        const postData = {
            password: this.passwordVal,
            id: this.currentUser.id
        };
        this.accountService
            .updatePassword(postData)
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.emitBannerMessage.emit({
                        status: response.status,
                        message: response.message,
                        type: "SUCCESS"
                    });
                }
                this.emitBannerMessage.emit({
                    status: response.status,
                    message: response.message,
                    type: 'ERROR'
                });
                window.scrollTo(0, 0);
            }
        });
    }
    /**
     * Will first check users old password against inputted password then will change password
     * @returns void
     */
    submitPasswordForm() {
        if (this.passwordMismatch || this.currentUser === null) {
            return;
        }
        const checkPassData = {
            oldPassword: this.oldPasswordVal,
            id: this.currentUser.id,
        };
        this.accountService
            .checkOldPassword(checkPassData)
            .subscribe((response) => {
            if (response.data) {
                this.updatePassword();
                return;
            }
            this.passwordMismatch = true;
            this.emitBannerMessage.emit({
                status: response.status,
                message: response.message,
                type: "ERROR "
            });
        });
    }
    get checkPasswordMatch() {
        (this.passwordVal !== this.confirmPasswordVal) ? this.passwordMismatch = true : this.passwordMismatch = false;
        return this.passwordMismatch;
    }
    get passwordVal() {
        return this.passwordInfoForm.controls['password'].value;
    }
    get confirmPasswordVal() {
        return this.passwordInfoForm.controls['confirmPassword'].value;
    }
    get oldPasswordVal() {
        return this.passwordInfoForm.controls['currentPassword'].value;
    }
}
PasswordInfoFormComponent.ɵfac = function PasswordInfoFormComponent_Factory(t) { return new (t || PasswordInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
PasswordInfoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PasswordInfoFormComponent, selectors: [["app-password-info-form"]], inputs: { currentUser: "currentUser" }, outputs: { emitBannerMessage: "emitBannerMessage" }, decls: 24, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "currentPassword", 1, "form-label"], ["type", "text", "formControlName", "currentPassword", 1, "form-input"], ["for", "password", 1, "form-label"], ["type", "text", "formControlName", "password", 1, "form-input"], ["for", "confirmPassword", 1, "form-label"], ["type", "text", "formControlName", "confirmPassword", 1, "form-input"], ["for", "mismatch", "class", "error", 4, "ngIf"], ["for", "wrongPassword", "class", "error", 4, "ngIf"], ["type", "submit", 1, "button"], ["for", "mismatch", 1, "error"], ["for", "wrongPassword", 1, "error"]], template: function PasswordInfoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PasswordInfoFormComponent_Template_form_ngSubmit_3_listener() { return ctx.submitPasswordForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Current ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Confirm ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, PasswordInfoFormComponent_label_20_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, PasswordInfoFormComponent_label_21_Template, 2, 0, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.passwordInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.checkPasswordMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ctx.checkPasswordMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordMismatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.wrongCurrentPassword);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", ctx.passwordMismatch);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid black;\n  padding: 0.5rem;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #dbd9d9;\n  margin: 10px;\n  overflow: auto;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  text-decoration: underline;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  background-color: #dbd9d9;\n  border: none;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto 0;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  letter-spacing: 2px;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 30px;\n  border-radius: 10px;\n  min-height: 50px;\n  border: 1.5px solid black;\n  width: 70%;\n  height: 80%;\n  padding: 3px;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  outline: none;\n}\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 10%;\n  height: auto;\n  width: 40%;\n  padding: 10px;\n  margin: 10px auto;\n  border-radius: 4px;\n  transition: 0.2s;\n  opacity: 0.9;\n  border: 2.5px solid;\n  background-color: #e2e2e2;\n  box-shadow: inset 15px 0px #151515;\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  min-height: 12%;\n  height: auto;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n  border: 2.5px solid #151515;\n}\n.login[_ngcontent-%COMP%]:hover {\n  background-color: #359a35;\n  transition: 0.5s;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  background-color: #b92020;\n  transition: 0.5s;\n}\n.disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  opacity: 0.5;\n  background-color: #b92020;\n  transition: 0.5s;\n}\n.error[_ngcontent-%COMP%] {\n  color: red;\n  border: 2.5px solid !important;\n  padding: 5px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ1I7QUFFSTtFQUNJLFdBQUE7QUFBUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRmhCO0FBU0E7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUFOSjtBQVNBO0VBQ0ksaUJBQUE7QUFOSjtBQVNBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUFOSjtBQVNBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSwyQkFBQTtBQU5KO0FBU0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBTko7QUFTQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQU5KO0FBU0E7RUFDSSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU5KIiwiZmlsZSI6InBhc3N3b3JkLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46IDEwcHg7ICAgXG4gICAgb3ZlcmZsb3c6YXV0bztcblxuICAgIGgze1xuICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgZm9ybXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgXG4gICAgLmZvcm0tY29udHJvbHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE3LCAyMTcpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIFxuICAgICAgICAuZm9ybS1sYWJlbHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC5mb3JtLWlucHV0e1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICB3aWR0aDo3MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIG9wYWNpdHk6IC45O1xuICAgIGJvcmRlcjogMi41cHggc29saWQgO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIyNiwgMjI2LCAyMjYpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDE1cHggMHB4IHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmJ1dHRvbiBwe1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uYnV0dG9uIC5sb2dve1xuICAgIG1pbi1oZWlnaHQ6IDEyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xNDBweCAwcHggcmdiYSgxNCwgMTQsIDE0LCAwLjUpO1xuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDIxLCAyMSwgMjEpO1xufVxuXG4ubG9naW46aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAxNTQsIDUzKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5jbGVhcjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg1LCAzMiwgMzIpO1xuICAgIHRyYW5zaXRpb246IC41cztcbn1cblxuLmRpc2FibGVke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogLjU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMzIsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59ICAgXG5cbi5lcnJvcntcbiAgICBjb2xvcjogcmVkO1xuICAgIGJvcmRlcjogMi41cHggc29saWQgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ 666:
/*!****************************************************************************!*\
  !*** ./src/app/account/personal-info-form/personal-info-form.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PersonalInfoFormComponent": () => (/* binding */ PersonalInfoFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account.service */ 740);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function PersonalInfoFormComponent_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function PersonalInfoFormComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function PersonalInfoFormComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} }
function PersonalInfoFormComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function PersonalInfoFormComponent_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function PersonalInfoFormComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} }
function PersonalInfoFormComponent_img_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function PersonalInfoFormComponent_img_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function PersonalInfoFormComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} }
function PersonalInfoFormComponent_img_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} }
function PersonalInfoFormComponent_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function PersonalInfoFormComponent_img_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} }
class PersonalInfoFormComponent {
    constructor(fb, accountService) {
        this.fb = fb;
        this.accountService = accountService;
        this.emitBannerMessage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.initForm();
    }
    /**
     * Initalize all form fields
     * @returns void
     */
    initForm() {
        var _a, _b, _c, _d;
        this.personalInfoForm = this.fb.group({
            username: [((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.user_name) ? this.currentUser.user_name : ''],
            firstname: [((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.first_name) ? this.currentUser.first_name : ''],
            surname: [((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.sur_name) ? this.currentUser.sur_name : ''],
            phonenumber: [((_d = this.currentUser) === null || _d === void 0 ? void 0 : _d.phonenumber) ? this.currentUser.phonenumber : ''],
        });
    }
    /**
     * When the user submits the personal info form
     * @returns void
     */
    submitPersonalForm() {
        var _a;
        if (!this.personalInfoForm.valid) {
            return;
        }
        const postData = {
            userId: (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.id,
            username: this.checkAmberChange('username') ? this.usernameVal : null,
            firstname: this.checkAmberChange('firstname') ? this.firstnameVal : null,
            surname: this.checkAmberChange('surname') ? this.surnameVal : null,
            phonenumber: this.checkAmberChange('phonenumber') ? this.phonenumberVal.toString() : null,
        };
        this.accountService
            .updateAccountDetails(postData)
            .subscribe((response) => {
            if (response.status === 200) {
                this.emitBannerMessage.emit({
                    status: response.status,
                    message: response.message,
                    type: 'SUCCESS',
                });
            }
            this.emitBannerMessage.emit({
                status: response.status,
                message: response.message,
                type: 'ERROR',
            });
        });
    }
    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value is the same as before
     * @param string check
     * @returns boolean
     */
    checkGreenChange(check) {
        var _a, _b, _c, _d;
        switch (check) {
            case 'username':
                return this.usernameVal === ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.user_name);
            case 'firstname':
                return this.firstnameVal === ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.first_name);
            case 'surname':
                return this.surnameVal === ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.sur_name);
            case 'phonenumber':
                return this.phonenumberVal === ((_d = this.currentUser) === null || _d === void 0 ? void 0 : _d.phonenumber);
            default:
                return false;
        }
    }
    /**
     * Will check if a given, a string form control name, will return true or false
     * if that value has or has not been changed in the input field
     * @param string check
     * @returns boolean
     */
    checkAmberChange(check) {
        var _a, _b, _c, _d;
        switch (check) {
            case 'username':
                return this.usernameVal !== ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.user_name) && this.usernameVal !== '';
            case 'firstname':
                return this.firstnameVal !== ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.first_name) && this.firstnameVal !== '';
            case 'surname':
                return this.surnameVal !== ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.sur_name) && this.surnameVal !== '';
            case 'phonenumber':
                return this.phonenumberVal !== ((_d = this.currentUser) === null || _d === void 0 ? void 0 : _d.phonenumber) && this.phonenumberVal !== '';
            default:
                return false;
        }
    }
    /**
     * Will check if a given, a string form control name, will return true or false
     * if a value has been deleted
     * @param string check
     * @returns boolean
     */
    checkRedChange(check) {
        switch (check) {
            case 'username':
                return this.usernameVal === '';
            case 'firstname':
                return this.firstnameVal === '';
            case 'surname':
                return this.surnameVal === '';
            case 'phonenumber':
                return this.phonenumberVal === '';
            default:
                return false;
        }
    }
    /**
     * Returns username form control value
     */
    get usernameVal() {
        return this.personalInfoForm.controls['username'].value;
    }
    /**
    * Returns firstname form control value
    */
    get firstnameVal() {
        return this.personalInfoForm.controls['firstname'].value;
    }
    /**
    * Returns surname form control value
    */
    get surnameVal() {
        return this.personalInfoForm.controls['surname'].value;
    }
    /**
    * Returns phonenumber form control value
    */
    get phonenumberVal() {
        return this.personalInfoForm.controls['phonenumber'].value;
    }
}
PersonalInfoFormComponent.ɵfac = function PersonalInfoFormComponent_Factory(t) { return new (t || PersonalInfoFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_0__.AccountService)); };
PersonalInfoFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PersonalInfoFormComponent, selectors: [["app-personal-info-form"]], inputs: { currentUser: "currentUser" }, outputs: { emitBannerMessage: "emitBannerMessage" }, decls: 34, vars: 29, consts: [[1, "container"], [1, "personal-form", 3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "username", 1, "form-label"], ["class", "img", "src", "../../../assets/inactive-user.png", "alt", "dot", 4, "ngIf"], ["class", "img", "src", "../../../assets/afk-user.png", "alt", "dot", 4, "ngIf"], ["class", "img", "src", "../../../assets/active-user.png", "alt", "dot", 4, "ngIf"], ["type", "text", "formControlName", "username", 1, "form-input"], ["for", "firstname", 1, "form-label"], ["type", "text", "formControlName", "firstname", 1, "form-input"], ["for", "surname", 1, "form-label"], ["type", "text", "formControlName", "surname", 1, "form-input"], ["for", "phonenumber", 1, "form-label"], ["type", "text", "formControlName", "phonenumber", 1, "form-input"], [1, "button"], ["src", "../../../assets/inactive-user.png", "alt", "dot", 1, "img"], ["src", "../../../assets/afk-user.png", "alt", "dot", 1, "img"], ["src", "../../../assets/active-user.png", "alt", "dot", 1, "img"]], template: function PersonalInfoFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PersonalInfoFormComponent_Template_form_ngSubmit_3_listener() { return ctx.submitPersonalForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Username ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PersonalInfoFormComponent_img_7_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PersonalInfoFormComponent_img_8_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, PersonalInfoFormComponent_img_9_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Firstname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, PersonalInfoFormComponent_img_14_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, PersonalInfoFormComponent_img_15_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, PersonalInfoFormComponent_img_16_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Surname ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PersonalInfoFormComponent_img_21_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, PersonalInfoFormComponent_img_22_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, PersonalInfoFormComponent_img_23_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Phonenumber ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, PersonalInfoFormComponent_img_28_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PersonalInfoFormComponent_img_29_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, PersonalInfoFormComponent_img_30_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.personalInfoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkRedChange("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkAmberChange("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkGreenChange("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("amber", ctx.checkAmberChange("username"))("red", ctx.checkRedChange("username"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkRedChange("firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkAmberChange("firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkGreenChange("firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("amber", ctx.checkAmberChange("firstname"))("red", ctx.checkRedChange("firstname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkRedChange("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkAmberChange("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkGreenChange("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("amber", ctx.checkAmberChange("surname"))("red", ctx.checkRedChange("surname"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkRedChange("phonenumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkAmberChange("phonenumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.checkGreenChange("phonenumber"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("amber", ctx.checkAmberChange("phonenumber"))("red", ctx.checkRedChange("phonenumber"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid black;\n  padding: 0.5rem;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #dbd9d9;\n  margin: 10px;\n  overflow: auto;\n}\n.container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Arial, Helvetica, sans-serif;\n  letter-spacing: 2px;\n  text-decoration: underline;\n}\n.container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  background-color: #dbd9d9;\n  border: none;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%] {\n  width: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 1rem;\n  letter-spacing: 2px;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 10px;\n  width: 10px;\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n}\n.container[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  float: right;\n  margin-left: 30px;\n  border-radius: 10px;\n  min-height: 50px;\n  border: 1.5px solid black;\n  width: 70%;\n  height: 80%;\n  padding: 3px;\n  font-size: 1rem;\n  letter-spacing: 2px;\n  outline: none;\n}\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  box-sizing: border-box;\n  min-height: 10%;\n  height: auto;\n  width: 40%;\n  padding: 10px;\n  margin: 10px auto;\n  border-radius: 4px;\n  transition: 0.2s;\n  opacity: 0.9;\n  border: 2.5px solid;\n  background-color: #e2e2e2;\n  box-shadow: inset 15px 0px #151515;\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  min-height: 12%;\n  height: auto;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  border-radius: 10px;\n  box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n  border: 2.5px solid #151515;\n}\n.login[_ngcontent-%COMP%]:hover {\n  background-color: #359a35;\n  transition: 0.5s;\n}\n.clear[_ngcontent-%COMP%]:hover {\n  background-color: #b92020;\n  transition: 0.5s;\n}\n.red[_ngcontent-%COMP%] {\n  border: 1.5px solid red !important;\n}\n.amber[_ngcontent-%COMP%] {\n  border: 1.5px solid orange !important;\n}\n.green[_ngcontent-%COMP%] {\n  border: 1.5 solid green !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcnNvbmFsLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0kseUNBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ1I7QUFHSTtFQUNJLFdBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRlo7QUFJWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUFGaEI7QUFNUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLGFBQUE7QUFMWjtBQVdBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FBUko7QUFXQTtFQUNJLGlCQUFBO0FBUko7QUFXQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBUko7QUFXQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsMkJBQUE7QUFSSjtBQVdBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtBQVJKO0FBV0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBUko7QUFXQTtFQUNJLGtDQUFBO0FBUko7QUFXQTtFQUNJLHFDQUFBO0FBUko7QUFVQTtFQUNJLGtDQUFBO0FBUEoiLCJmaWxlIjoicGVyc29uYWwtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAxcHggMXB4IDBweCBpbnNldCwgcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE3LCAyMTcpO1xuICAgIG1hcmdpbjogMTBweDsgICBcbiAgICBvdmVyZmxvdzphdXRvO1xuXG4gICAgaDN7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcblxuICAgIH1cblxuICAgIGZvcm17XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1jb250cm9se1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgXG4gICAgICAgIC5mb3JtLWxhYmVse1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG5cbiAgICAgICAgICAgIC5pbWd7IFxuICAgICAgICAgICAgICAgIGhlaWdodDoxMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0taW5wdXR7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgIHdpZHRoOjcwJTtcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcblxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtaW4taGVpZ2h0OiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjYsIDIyNiwgMjI2KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxNXB4IDBweCByZ2IoMjEsIDIxLCAyMSk7XG59XG5cbi5idXR0b24gcHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJ1dHRvbiAubG9nb3tcbiAgICBtaW4taGVpZ2h0OiAxMiU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMTQwcHggMHB4IHJnYmEoMTQsIDE0LCAxNCwgMC41KTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmxvZ2luOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMTU0LCA1Myk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uY2xlYXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMzIsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG5cbi5yZWR7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLmFtYmVye1xuICAgIGJvcmRlcjogMS41cHggc29saWQgb3JhbmdlICFpbXBvcnRhbnQ7XG59XG4uZ3JlZW57XG4gICAgYm9yZGVyOiAxLjUgc29saWQgZ3JlZW4gIWltcG9ydGFudDtcbn0iXX0= */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/auth-guard.service */ 8600);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message.component */ 2478);
/* harmony import */ var _people_page_people_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./people-page/people-page.component */ 9369);
/* harmony import */ var _Exceptions_404_404_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Exceptions/404/404-not-found.component */ 6356);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);


// Component imports








const routes = [
    //TODO: replace routes with routing component
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, pathMatch: 'full' },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_6__.AccountComponent, pathMatch: 'full' },
    { path: 'message', component: _message_message_component__WEBPACK_IMPORTED_MODULE_3__.MessageComponent, pathMatch: 'full', canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService] },
    { path: 'people-page', component: _people_page_people_page_component__WEBPACK_IMPORTED_MODULE_4__.PeoplePageComponent, pathMatch: 'full', canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, pathMatch: 'full', canActivate: [_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_0__.AuthGuardService] },
    { path: '**', component: _Exceptions_404_404_not_found_component__WEBPACK_IMPORTED_MODULE_5__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/auth.service */ 8338);
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ 6499);





class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.title = 'Chatter';
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.media_api_url;
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            // if(event instanceof NavigationStart){
            //     console.log('navigationStart');
            //     let user = localStorage.getItem('session') ?? null;
            //     if(user){
            //         this.authService.autoLogin(JSON.parse(user)).subscribe({
            //             next: (response:any) => {
            //                 if(response.data){
            //                     this.router.navigate(['/']);
            //                 }
            //             }
            //         });
            //     }
            // }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__.NavMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post/post.component */ 3837);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ 6499);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _login_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/register/register.component */ 4376);
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message/message.component */ 2478);
/* harmony import */ var _people_page_people_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people-page/people-page.component */ 9369);
/* harmony import */ var _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/forgot-password/forgot-password.component */ 3827);
/* harmony import */ var _post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post-item/post-item.component */ 9112);
/* harmony import */ var _shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/sidebar-user/sidebar-user.component */ 5219);
/* harmony import */ var _message_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message/message-box/message-box.component */ 5902);
/* harmony import */ var _shared_components_manage_user_modal_manage_user_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/manage-user-modal/manage-user-modal.component */ 6970);
/* harmony import */ var _shared_components_manage_message_modal_manage_message_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/manage-message-modal/manage-message-modal.component */ 2797);
/* harmony import */ var _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/components/error-banner/error-banner.component */ 9201);
/* harmony import */ var _shared_components_comments_section_comment_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/components/comments-section/comment-section.component */ 466);
/* harmony import */ var _header_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header-interceptor.interceptor */ 2756);
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./post/create-post/create-post.component */ 8128);
/* harmony import */ var _message_message_box_header_message_box_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./message/message-box-header/message-box-header.component */ 6401);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 6526);
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./account/account.component */ 6885);
/* harmony import */ var _account_personal_info_form_personal_info_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./account/personal-info-form/personal-info-form.component */ 666);
/* harmony import */ var _account_password_info_form_password_info_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./account/password-info-form/password-info-form.component */ 2582);
/* harmony import */ var _account_account_info_account_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./account/account-info/account-info.component */ 7249);
/* harmony import */ var _account_change_email_form_change_email_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./account/change-email-form/change-email-form.component */ 9974);
/* harmony import */ var _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/components/confirmation-modal/confirmation-modal.component */ 6169);
/* harmony import */ var _shared_components_searcbar_search_bar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/components/searcbar/search-bar.component */ 6008);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 3184);


































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HTTP_INTERCEPTORS, useClass: _header_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_16__.HeaderInterceptor, multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_27__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__.NavMenuComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
        _login_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__.ForgotPasswordComponent,
        _login_register_register_component__WEBPACK_IMPORTED_MODULE_5__.RegisterComponent,
        _message_message_component__WEBPACK_IMPORTED_MODULE_6__.MessageComponent,
        _people_page_people_page_component__WEBPACK_IMPORTED_MODULE_7__.PeoplePageComponent,
        _post_post_item_post_item_component__WEBPACK_IMPORTED_MODULE_9__.PostItemComponent,
        _shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_10__.SideBarUserComponent,
        _message_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_11__.MessageBoxComponent,
        _shared_components_manage_user_modal_manage_user_modal_component__WEBPACK_IMPORTED_MODULE_12__.ManageUserModalComponent,
        _shared_components_manage_message_modal_manage_message_modal_component__WEBPACK_IMPORTED_MODULE_13__.ManageMessageModalComponent,
        _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_14__.ErrorBannerComponent,
        _shared_components_comments_section_comment_section_component__WEBPACK_IMPORTED_MODULE_15__.CommentSectionComponent,
        _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__.CreatePostComponent,
        _message_message_box_header_message_box_header_component__WEBPACK_IMPORTED_MODULE_18__.MessageBoxHeaderComponent,
        _post_post_component__WEBPACK_IMPORTED_MODULE_0__.PostComponent,
        _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__.FooterComponent,
        _shared_components_searcbar_search_bar_component__WEBPACK_IMPORTED_MODULE_26__.SearchBarComponent,
        _account_account_component__WEBPACK_IMPORTED_MODULE_20__.AccountComponent,
        _account_personal_info_form_personal_info_form_component__WEBPACK_IMPORTED_MODULE_21__.PersonalInfoFormComponent,
        _account_password_info_form_password_info_form_component__WEBPACK_IMPORTED_MODULE_22__.PasswordInfoFormComponent,
        _account_account_info_account_info_component__WEBPACK_IMPORTED_MODULE_23__.AccountInfoComponent,
        _account_change_email_form_change_email_form_component__WEBPACK_IMPORTED_MODULE_24__.ChangeEmailFormComponent,
        _shared_components_confirmation_modal_confirmation_modal_component__WEBPACK_IMPORTED_MODULE_25__.ConfirmationModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_30__.BrowserModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_29__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_31__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_27__.AppRoutingModule] }); })();


/***/ }),

/***/ 2756:
/*!***************************************************!*\
  !*** ./src/app/header-interceptor.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderInterceptor": () => (/* binding */ HeaderInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeaderInterceptor {
    intercept(req, next) {
        const authReq = req.clone({
            headers: req.headers.set('Access-Control-Allow-Origin', '*')
                .set('Access-Control-Allow-Methods', '*')
                .set('Content-Type', 'application/json')
        });
        console.log("inside interceptor: ", authReq);
        return next.handle(authReq);
    }
}
HeaderInterceptor.ɵfac = function HeaderInterceptor_Factory(t) { return new (t || HeaderInterceptor)(); };
HeaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HeaderInterceptor, factory: HeaderInterceptor.ɵfac });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/sidebar-user/sidebar-user.component */ 5219);
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../post/post.component */ 3837);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ 6526);




class HomeComponent {
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [[1, "row", "container", 2, "display", "flex"], [2, "width", "30%"], [2, "width", "65%"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-sidebar-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-footer");
    } }, directives: [_shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_0__.SideBarUserComponent, _post_post_component__WEBPACK_IMPORTED_MODULE_1__.PostComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: 'Times New Roman', Times, serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: 'Times New Roman', Times, serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\n.parent[_ngcontent-%COMP%]{\n    align-items: center;\n}\n.container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.content[_ngcontent-%COMP%]{\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin:10px;  \n    justify-content: center;\n    box-sizing: border-box;\n}\n.new-post-btn[_ngcontent-%COMP%]{\n    \n    width: 100%;    \n    border-radius: 10px;\n    border: none;\n    background-color:white;\n    justify-content: center;\n}\n.new-post-btn[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n    background-color: rgb(184, 196, 204);\n}\n.footer[_ngcontent-%COMP%]{\n    margin: 10px 0px;\n    width: 93%;\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    justify-content: center;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWMsa0JBQWtCLENBQUM7QUFFakM7SUFDSSw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksNENBQTRDO0lBQzVDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtJQUErSTtJQUMvSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsb0NBQW9DO0FBQ3hDO0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0lBQStJO0lBQy9JLG9DQUFvQztJQUNwQyx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogR2xvYmFsIFN0eWxlcyAqL1xuOjpwbGFjZWhvbGRlcnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG5oMntcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFyZW50e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uY29udGVudHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzoxcmVtIC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIDBweCAxcHggMXB4IDBweCBpbnNldCwgcmdiYSg1MCwgNTAsIDkzLCAwLjI1KSAwcHggNTBweCAxMDBweCAtMjBweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDBweCAzMHB4IDYwcHggLTMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE3LCAyMTcpO1xuICAgIG1hcmdpbjoxMHB4OyAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm5ldy1wb3N0LWJ0bntcbiAgICAvKiBtYXJnaW46IDIwcHggYXV0bzsgKi9cbiAgICB3aWR0aDogMTAwJTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm5ldy1wb3N0LWJ0bjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAjMTIxMjEyIDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg0LCAxOTYsIDIwNCk7XG59XG5cblxuLmZvb3RlcntcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHdpZHRoOiA5MyU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6MXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuIl19 */"] });


/***/ }),

/***/ 8600:
/*!*********************************************!*\
  !*** ./src/app/login/auth-guard.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuardService": () => (/* binding */ AuthGuardService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class AuthGuardService {
    constructor(authService, router, http) {
        this.authService = authService;
        this.router = router;
        this.http = http;
    }
    canActivate() {
        /**
         * TODO
         * make work when user is logged in
         */
        if (this.router.url !== '/login' && !this.authService.currentUser) {
            this.router.navigate(['login']);
        }
        if (this.authService.currentUser) {
            return true;
        }
        return false;
    }
}
AuthGuardService.ɵfac = function AuthGuardService_Factory(t) { return new (t || AuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuardService, factory: AuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3827:
/*!********************************************************************!*\
  !*** ./src/app/login/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordComponent": () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);




function ForgotPasswordComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border": a0 }; };
class ForgotPasswordComponent {
    constructor() {
        this.email = '';
    }
    ngOnInit() {
        this.forgotPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            fpEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
        });
    }
    get forgotPasswordControls() {
        return this.forgotPasswordForm.controls['fpEmail'];
    }
    submitForgotPassword() {
        const forgotPassword = { email: this.forgotPasswordForm.controls['fpEmail'].value };
    }
}
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(t) { return new (t || ForgotPasswordComponent)(); };
ForgotPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 7, vars: 5, consts: [[1, "column"], [3, "formGroup", "ngSubmit"], [1, "passwordReset"], ["type", "text", "name", "fpEmail", "formControlname", "fpEmail", "placeholder", "Enter your email to reset password", 3, "ngStyle"], ["class", "error-invalid", 4, "ngIf"], ["type", "button", 1, "button"], [1, "error-invalid"]], template: function ForgotPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ForgotPasswordComponent_Template_form_ngSubmit_1_listener() { return ctx.submitForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ForgotPasswordComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.forgotPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.forgotPasswordControls.invalid && ctx.forgotPasswordControls.touched ? "2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.forgotPasswordControls.invalid && ctx.forgotPasswordControls.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    border: 1.5px solid black;\n    border-radius: 5px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    margin-top: 5px;\n    padding: 5px;\n    width: 100%;\n    \n}\n.content[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    border: 1.5px solid black;\n    padding: 2rem;\n    border-radius: 10px;\n    width: 100%;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin: 10px;   \n}\n.passwordReset[_ngcontent-%COMP%]{\n    display: inline-block;\n    align-items: center;\n    width:400px;\n}\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 10%;\n    height: auto;\n    width: 40%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxrQkFBa0I7QUFDbEIsY0FBYyxrQkFBa0IsQ0FBQztBQUVqQztJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXOztBQUVmO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsK0lBQStJO0lBQy9JLG9DQUFvQztJQUNwQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQywwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsa0RBQWtEO0lBQ2xELG1DQUFtQztBQUN2QyIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogR2xvYmFsIFN0eWxlcyAqL1xuOjpwbGFjZWhvbGRlcnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG5oMntcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRde1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbn1cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgbWFyZ2luOiAxMHB4OyAgIFxufVxuXG4ucGFzc3dvcmRSZXNldHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDo0MDBweDtcbn1cblxuLmJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWluLWhlaWdodDogMTAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAuMzEzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIG9wYWNpdHk6IC45O1xuICAgIGJvcmRlcjogMi41cHggc29saWQgO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIyNiwgMjI2LCAyMjYpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDE1cHggMHB4IHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmJ1dHRvbiBwe1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uYnV0dG9uIC5sb2dve1xuICAgIG1pbi1oZWlnaHQ6IDEyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0xNDBweCAwcHggcmdiYSgxNCwgMTQsIDE0LCAwLjUpO1xuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDIxLCAyMSwgMjEpO1xufVxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/error-banner/error-banner.component */ 9201);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 4376);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 3827);









function LoginComponent_app_error_banner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-error-banner", 14);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("error_message", ctx_r0.errorBannerMessage)("error_type", "ERROR")("widthPercentage", 50)("error_status", ctx_r0.errorStatusCode);
} }
function LoginComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-register");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-forgot-password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "border": a0 }; };
class LoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // Error banner stuff
        this.isError = false;
        this.submitted = false;
        this.showRegisterForm = false;
        this.showForgotPasswordForm = false;
        this.loading = false;
    }
    ngOnInit() {
        // ============= attempty to setup autologin ===============
        // let user = localStorage.getItem('session') ?? null;
        // if(user){
        //     console.log('user session: ', user);
        //     this.authService.autoLogin(JSON.parse(user)).subscribe({
        //         next: (response: any) => {
        //             if(response.data){
        //                 console.log("navigate");
        //                 this.router.navigate(['/']);
        //             }
        //         }
        //     });
        // }
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(6)])
        });
    }
    get loginControls() {
        return this.loginForm.controls;
    }
    get passwordLength() {
        const passLen = this.loginForm.controls['password'].value.length;
        if (passLen !== 0) {
            return passLen;
        }
        return -1;
    }
    clear() {
        this.loginForm.reset();
    }
    switchRegister() {
        this.showRegisterForm = false;
        this.showForgotPasswordForm = !this.showForgotPasswordForm;
    }
    switchForgotPassword() {
        this.showForgotPasswordForm = false;
        this.showRegisterForm = !this.showRegisterForm;
    }
    submitLogin() {
        this.submitted = true;
        this.loading = true;
        const login = {
            email: this.loginForm.controls['email'].value,
            password: this.loginForm.controls['password'].value,
        };
        this.authService.login(login)
            .pipe()
            .subscribe({
            next: (response) => {
                if (response.status === 200) {
                    console.log('response: ', response.data);
                    localStorage.setItem('session', JSON.stringify(response.data));
                    this.authService.setCurrentUser(response.data);
                    this.loading = false;
                    this.router.navigate(['/']);
                }
                else {
                    console.error("ERROR:", response);
                    this.isError = true;
                    this.errorBannerMessage = response.message;
                    this.errorStatusCode = response.status;
                    return;
                }
            }
        });
        this.submitted = false;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 27, vars: 8, consts: [[1, "row"], [3, "error_message", "error_type", "widthPercentage", "error_status", 4, "ngIf"], [1, "content", 2, "height", "386px"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "text", "id", "email", "placeholder", "Please enter email", "formControlName", "email", 3, "ngStyle"], ["class", "error-invalid", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "placeholder", "Please enter password", "formControlName", "password"], ["type", "submit", 1, "button", "login"], ["type", "button", 1, "button", 3, "click"], ["type", "button", 1, "button", "clear", 3, "click"], ["class", "content", 4, "ngIf"], ["class", "content", "style", "height: 150px !important;", 4, "ngIf"], [3, "error_message", "error_type", "widthPercentage", "error_status"], [1, "error-invalid"], [1, "content"], [1, "content", 2, "height", "150px !important"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_app_error_banner_1_Template, 1, 4, "app-error-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_3_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, LoginComponent_p_11_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_19_listener() { return ctx.switchForgotPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_21_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_23_listener() { return ctx.switchRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](6, _c0, ctx.loginControls.email.invalid && ctx.loginControls.email.touched ? "2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loginControls.email.invalid && ctx.loginControls.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showRegisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showForgotPasswordForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_1__.ErrorBannerComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\n    border: 1.5px solid black;\n    width:100%;\n    border-radius: 5px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    margin-top: 5px;\n    padding: 5px;\n    font-family: Arial, Helvetica, sans-serif;\n    \n}\n.content[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n    border: 1.5px solid black;\n    padding: 2rem;\n    border-radius: 10px;\n    width: 45%;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin: 10px;   \n    overflow:auto;\n}\n.row[_ngcontent-%COMP%]{\n    margin: 10px;\n}\n.loginFormBtn[_ngcontent-%COMP%]{\n    margin: 10px;\n    width: 40%;    \n    border-radius: 10px;\n    background-color:white;\n    justify-content: center;\n}\n.loginFormBtn[_ngcontent-%COMP%]:hover, input[type=text][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n.error-invalid[_ngcontent-%COMP%]{\n    color: red;\n    width: auto;\n    margin-top: 5px;\n}\n\n.input-error[_ngcontent-%COMP%]{\n    border-color: 2px solid red;\n}\n.success[_ngcontent-%COMP%]{\n    background-color:rgb(74, 255, 74);\n}\n.danger[_ngcontent-%COMP%]{\n    background-color: rgb(255, 85, 85);\n}\n.default[_ngcontent-%COMP%]{\n    background-color: rgb(111, 137, 253);\n}\n.loader[_ngcontent-%COMP%] {\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n  }\n.lds-dual-ring[_ngcontent-%COMP%]:after {\n    content: \" \";\n    display: block;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border-radius: 50%;\n    border: 6px solid #fff;\n    border-color: #fff transparent #fff transparent;\n    animation: lds-dual-ring 1.2s linear infinite;\n  }\n@keyframes lds-dual-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 10%;\n    height: auto;\n    width: 40%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n}\n.login[_ngcontent-%COMP%]:hover{\n    background-color: rgb(53, 154, 53);\n    transition: .5s;\n}\n.clear[_ngcontent-%COMP%]:hover{\n    background-color: rgb(185, 32, 32);\n    transition: .5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGtCQUFrQjtBQUNsQixjQUFjLGtCQUFrQixDQUFDO0FBRWpDO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCxlQUFlO0lBQ2YsWUFBWTtJQUNaLHlDQUF5Qzs7QUFFN0M7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwrSUFBK0k7SUFDL0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxZQUFZO0lBQ1osVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUVBLGFBQWE7QUFDYjtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLG9DQUFvQztBQUN4QztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFDQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwrQ0FBK0M7SUFDL0MsNkNBQTZDO0VBQy9DO0FBQ0E7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0Y7QUFFRjtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxtQ0FBbUM7QUFDdkM7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBHbG9iYWwgU3R5bGVzICovXG46OnBsYWNlaG9sZGVye3RleHQtYWxpZ246IGNlbnRlcjt9XG5cbmgye1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0saW5wdXRbdHlwZT1wYXNzd29yZF17XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgXG59XG5cbi5jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgbWFyZ2luOiAxMHB4OyAgIFxuICAgIG92ZXJmbG93OmF1dG87XG59XG5cbi5yb3d7XG4gICAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubG9naW5Gb3JtQnRue1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB3aWR0aDogNDAlOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5sb2dpbkZvcm1CdG46aG92ZXIsIGlucHV0W3R5cGU9dGV4dF06aG92ZXIsaW5wdXRbdHlwZT1wYXNzd29yZF06aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbi5lcnJvci1pbnZhbGlke1xuICAgIGNvbG9yOiByZWQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vKiBPbiBlcnJvciAqL1xuLmlucHV0LWVycm9ye1xuICAgIGJvcmRlci1jb2xvcjogMnB4IHNvbGlkIHJlZDtcbn1cblxuLnN1Y2Nlc3N7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNzQsIDI1NSwgNzQpO1xufVxuXG4uZGFuZ2Vye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDg1LCA4NSk7XG59XG5cbi5kZWZhdWx0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEsIDEzNywgMjUzKTtcbn1cblxuLmxvYWRlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLWR1YWwtcmluZzphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIG1hcmdpbjogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCAjZmZmIHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogbGRzLWR1YWwtcmluZyAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1kdWFsLXJpbmcge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbi5idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogLjMxM3JlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICBvcGFjaXR5OiAuOTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMjYsIDIyNiwgMjI2KTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAxNXB4IDBweCByZ2IoMjEsIDIxLCAyMSk7XG59XG5cbi5idXR0b24gcHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJ1dHRvbiAubG9nb3tcbiAgICBtaW4taGVpZ2h0OiAxMiU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMTQwcHggMHB4IHJnYmEoMTQsIDE0LCAxNCwgMC41KTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmxvZ2luOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MywgMTU0LCA1Myk7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4uY2xlYXI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMzIsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59XG4gIFxuXG5cblxuIl19 */"] });


/***/ }),

/***/ 4376:
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/auth.service */ 8338);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);






function RegisterComponent_p_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please make sure both entered emails are the same ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please make sure both entered passwords are the same ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please make sure you have entered your details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { border: a0 }; };
class RegisterComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.emailConfirmFail = false;
        this.passwordConfirmFail = false;
        this.noDetailsError = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            rEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            confirmEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            rPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(6)]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(6)])
        });
    }
    ngOnInit() { }
    clear() {
        this.registerForm.reset();
    }
    get compareEmail() {
        const result = this.registerForm.value.rEmail !== this.registerForm.value.confirmEmail ? true : false;
        return result;
    }
    get comparePassword() {
        const result = this.registerForm.value.rPassword !== this.registerForm.value.confirmPassword ? true : false;
        return result;
    }
    get compareLogin() {
        return (this.registerForm.value.rEmail !== this.registerForm.value.confirmEmail) &&
            (this.registerForm.value.rPassword !== this.registerForm.value.confirm);
    }
    get comparePasswordInput() {
        return this.registerForm.value.rPassword.$touched && this.registerForm.value.confirmPassword.$touched;
    }
    get registerControls() {
        return this.registerForm.controls;
    }
    submitRegister() {
        const registerDetails = {
            user_name: this.registerForm.value.username,
            firstname: this.registerForm.value.firstname,
            surname: this.registerForm.value.surname,
            phone_number: this.registerForm.value.phoneNumber,
            email: this.registerForm.value.rEmail,
            password: this.registerForm.value.rPassword,
        };
        if (registerDetails.email === '' && registerDetails.password === '') {
            this.noDetailsError = true;
            return;
        }
        this.authService.register(registerDetails).pipe().subscribe({
            next: (response) => {
                if (response.status === 200) {
                    this.router.navigate(['/']);
                }
                //display error message
            },
            error: (error) => {
                console.error("ERROR : ", error);
            }
        });
        //display error message
    }
    generateToken() {
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 45, vars: 17, consts: [[1, "column"], [3, "formGroup", "ngSubmit"], [1, "row"], ["for", "username"], ["type", "text", "id", "username", "placeholder", "Usernam", "formControlName", "username"], ["for", "firstname"], ["type", "text", "id", "firstname", "placeholder", "Firstname", "formControlName", "firstname"], ["for", "surname"], ["type", "text", "id", "surname", "placeholder", "Surname", "formControlName", "surname"], ["for", "phoneNumber"], ["type", "text", "id", "phoneNumber", "placeholder", "Phone Number", "formControlName", "phoneNumber"], ["for", "rEmail"], ["type", "text", "id", "rEmail", "placeholder", "Email", "formControlName", "rEmail", 3, "ngStyle"], ["for", "confirmEmail"], ["type", "text", "id", "confirmEmail", "placeholder", "Confirm email", "formControlName", "confirmEmail", 3, "ngStyle"], ["class", "error-invalid", 4, "ngIf"], ["for", "rPassword"], ["type", "password", "id", "rPassword", "placeholder", "Password", "formControlName", "rPassword", 3, "ngStyle"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 3, "ngStyle"], ["type", "submit", 1, "button", 3, "disabled"], [1, "button", 3, "click"], [1, "error-invalid"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_1_listener() { return ctx.submitRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Username: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Firstname: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Surname: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Phone Number: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Confirm Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_p_29_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Confirm Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, RegisterComponent_p_38_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RegisterComponent_p_39_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_43_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.compareEmail ? " 2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx.compareEmail ? " 2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.compareEmail && (ctx.registerControls.rEmail.touched && ctx.registerControls.confirmEmail.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, ctx.comparePassword && ctx.comparePasswordInput ? " 2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](15, _c0, ctx.comparePassword && ctx.comparePasswordInput ? " 2px solid red" : "1px solid black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.comparePassword && (ctx.registerControls.rPassword.touched && ctx.registerControls.confirmPassword.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.noDetailsError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.compareLogin);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\n\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\n\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\n\ninput[type=text][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    border: 1.5px solid black;\n    border-radius: 5px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    margin-top: 5px;\n    padding: 5px;\n}\n\n.loginFormBtn[_ngcontent-%COMP%]{\n    margin: 10px;\n    width: 40%;    \n    border-radius: 10px;\n    background-color:white;\n    justify-content: center;\n}\n\n.loginFormBtn[_ngcontent-%COMP%]:hover, input[type=text][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 10%;\n    height: auto;\n    width: 40%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n}\n\n.error-invalid[_ngcontent-%COMP%]{\n    color: red;\n    width: auto;\n    margin-top: 5px;\n    overflow: hidden;\n}\n\n.success[_ngcontent-%COMP%]{\n    background-color:rgb(74, 255, 74);\n}\n\n.danger[_ngcontent-%COMP%]{\n    background-color: rgb(255, 85, 85);\n}\n\n.default[_ngcontent-%COMP%]{\n    background-color: rgb(111, 137, 253);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGNBQWMsa0JBQWtCLENBQUM7O0FBRWpDO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEMiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOjpwbGFjZWhvbGRlcnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG5oMntcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLGlucHV0W3R5cGU9cGFzc3dvcmRde1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvZ2luRm9ybUJ0bntcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgd2lkdGg6IDQwJTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9naW5Gb3JtQnRuOmhvdmVyLCBpbnB1dFt0eXBlPXRleHRdOmhvdmVyLGlucHV0W3R5cGU9cGFzc3dvcmRdOmhvdmVye1xuICAgIGJveC1zaGFkb3c6ICMxMjEyMTIgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtaW4taGVpZ2h0OiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IC4zMTNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI2LCAyMjYsIDIyNik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTVweCAwcHggcmdiKDIxLCAyMSwgMjEpO1xufVxuXG4uYnV0dG9uIHB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5idXR0b24gLmxvZ297XG4gICAgbWluLWhlaWdodDogMTIlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTE0MHB4IDBweCByZ2JhKDE0LCAxNCwgMTQsIDAuNSk7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCByZ2IoMjEsIDIxLCAyMSk7XG59XG5cbi5lcnJvci1pbnZhbGlke1xuICAgIGNvbG9yOiByZWQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zdWNjZXNze1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDc0LCAyNTUsIDc0KTtcbn1cblxuLmRhbmdlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4NSwgODUpO1xufVxuXG4uZGVmYXVsdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTExLCAxMzcsIDI1Myk7XG59Il19 */"] });


/***/ }),

/***/ 6401:
/*!****************************************************************************!*\
  !*** ./src/app/message/message-box-header/message-box-header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxHeaderComponent": () => (/* binding */ MessageBoxHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 7822);



class MessageBoxHeaderComponent {
    constructor(messageService) {
        this.messageService = messageService;
        this.emitToggleManagerUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.showError = false;
        this.toggleManageUser = false;
    }
    ngOnInit() {
        // listen for when selected user is pressed
        this.messageService.emitSelectedUser.subscribe((selectedUser) => {
            this.selectedUser = selectedUser;
        });
    }
    showManageUserModal() {
        if (!this.selectedUser) {
        }
        else {
            this.toggleManageUser = !this.toggleManageUser;
            this.emitToggleManagerUser.emit(this.toggleManageUser);
        }
    }
}
MessageBoxHeaderComponent.ɵfac = function MessageBoxHeaderComponent_Factory(t) { return new (t || MessageBoxHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
MessageBoxHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessageBoxHeaderComponent, selectors: [["app-message-box-header"]], inputs: { selectedUser: "selectedUser" }, outputs: { emitToggleManagerUser: "emitToggleManagerUser" }, decls: 12, vars: 3, consts: [[1, "row", "header"], [2, "width", "auto"], [1, "divider"], ["src", "assets/default-avatar.png", "alt", "profile-picture", 1, "pp"], [2, "width", "auto", "padding-left", "0px"], ["href", "#their profile link"], [1, "user-setting-btn", 3, "click"]], template: function MessageBoxHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Messages with");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MessageBoxHeaderComponent_Template_button_click_9_listener() { return ctx.showManageUserModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedUser ? ctx.selectedUser.user_name : "No user selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", !ctx.selectedUser);
    } }, styles: [".header[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: auto;\n}\n\na.divider[_ngcontent-%COMP%]{\n    height: 40px;\n    padding: 0px;\n    justify-content: center;\n    width: 1px;\n    border: 1.5px solid black;\n    background-color: black;\n    margin: 0 1 0px;\n    opacity: .15;\n}\n\n.pp[_ngcontent-%COMP%]{\n    padding: 0px;\n    max-width: 70px;\n    max-height: 50px;   \n    height: auto;\n    width: auto;\n    border-radius: 20px;\n    margin: 0px 10px;\n    object-fit: contain;\n}\n\n.user-setting-btn[_ngcontent-%COMP%]{\n    width: auto;\n    margin: 0px 10px;\n    background-color: transparent;\n    border: none;\n    height: 30px;\n}\n\n.user-setting-btn[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n    border-radius: 10px;\n    transition: .4s;\n}\n\n.error[_ngcontent-%COMP%]:hover{\n    box-shadow: red 0 0 0 3px, transparent 0 0 0 0;\n    border-radius: 10px;\n    transition: .4s;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYm94LWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrREFBa0Q7SUFDbEQsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5CIiwiZmlsZSI6Im1lc3NhZ2UtYm94LWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbmEuZGl2aWRlcntcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBtYXJnaW46IDAgMSAwcHg7XG4gICAgb3BhY2l0eTogLjE1O1xufVxuXG5cbi5wcHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7ICAgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4udXNlci1zZXR0aW5nLWJ0bntcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG5cbi51c2VyLXNldHRpbmctYnRuOmhvdmVye1xuICAgIGJveC1zaGFkb3c6ICMxMjEyMTIgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xufVxuXG4uZXJyb3I6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogcmVkIDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IC40cztcblxufSJdfQ== */"] });


/***/ }),

/***/ 5902:
/*!**************************************************************!*\
  !*** ./src/app/message/message-box/message-box.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBoxComponent": () => (/* binding */ MessageBoxComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message.service */ 7822);
/* harmony import */ var src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/auth.service */ 8338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_manage_message_modal_manage_message_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/manage-message-modal/manage-message-modal.component */ 2797);







function MessageBoxComponent_div_2_div_1_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageBoxComponent_div_2_div_1_div_2_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r10.calltoggleEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function MessageBoxComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseover", function MessageBoxComponent_div_2_div_1_div_2_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const user_message_r5 = ctx_r13.$implicit; const i_r6 = ctx_r13.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.hoverSettings(user_message_r5.id, i_r6); })("mouseleave", function MessageBoxComponent_div_2_div_1_div_2_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const user_message_r5 = ctx_r16.$implicit; const i_r6 = ctx_r16.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.hoverSettings(user_message_r5.id, i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MessageBoxComponent_div_2_div_1_div_2_ng_container_1_Template, 4, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r6 = ctx_r17.index;
    const user_message_r5 = ctx_r17.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("message-deleted", ctx_r7.isMessageDeleted(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.isMessageDeleted(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_message_r5.message, " ");
} }
function MessageBoxComponent_div_2_div_1_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageBoxComponent_div_2_div_1_div_3_ng_container_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4); return ctx_r19.calltoggleEdit(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function MessageBoxComponent_div_2_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MessageBoxComponent_div_2_div_1_div_3_ng_container_1_Template, 4, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r6 = ctx_r21.index;
    const user_message_r5 = ctx_r21.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.isMessageDeleted(i_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_message_r5.message, " ");
} }
function MessageBoxComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MessageBoxComponent_div_2_div_1_div_2_Template, 3, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MessageBoxComponent_div_2_div_1_div_3_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_message_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", user_message_r5.isSender);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !user_message_r5.isSender);
} }
function MessageBoxComponent_div_2_app_manage_message_modal_2_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-manage-message-modal", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("emitExit", function MessageBoxComponent_div_2_app_manage_message_modal_2_Template_app_manage_message_modal_emitExit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.manageMessageExit($event); })("emitEdit", function MessageBoxComponent_div_2_app_manage_message_modal_2_Template_app_manage_message_modal_emitEdit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r24.manageMessageEdit($event); })("emitDelete", function MessageBoxComponent_div_2_app_manage_message_modal_2_Template_app_manage_message_modal_emitDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r25.manageMessageDelete(); })("emitForward", function MessageBoxComponent_div_2_app_manage_message_modal_2_Template_app_manage_message_modal_emitForward_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r26.manageMessageForward($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isReciever", ctx_r4.recieverHover);
} }
function MessageBoxComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MessageBoxComponent_div_2_div_1_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MessageBoxComponent_div_2_app_manage_message_modal_2_Template, 1, 1, "app-manage-message-modal", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.messageData);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.toggleEdit);
} }
function MessageBoxComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Please select a user to message");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class MessageBoxComponent {
    constructor(messageService, authService) {
        this.messageService = messageService;
        this.authService = authService;
        this.loading = false;
        this.messageData = [];
        // Hover over message related properties
        this.toggleSettings = false;
        this.toggleEdit = false;
        this.recieverHover = false;
        // manage message options
        this.editMode = false;
    }
    ngOnInit() {
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
        });
        // get user from local storage
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');
        // listen for when a user on the sidebar menu is selected
        this.messageService.emitSelectedUser
            .subscribe((selectedUser) => {
            this.messageData = [];
            this.loading = true;
            this.selectedUser = selectedUser;
            // get message by the selectedUser id
            this.messageService.getMessages(this.currentUser.message_id, selectedUser.message_id)
                .subscribe((response) => {
                if (!response) {
                    return;
                }
                console.log("response: ", response);
                // work out sender after data returned from database
                // Want to base the sender of the currently logged in user
                this.findSenderAndReciever(response.data);
                this.loading = false;
            });
        });
    }
    /**
     * will send or edit a message and send the new data to the server
     *
     * @params none
     * @returns void
     */
    send() {
        var _a;
        const message = this.getMessage;
        if (message === '') {
            return;
        }
        // check if the user wants to edit the message
        if (this.editMode) {
            const message_to_edit = this.findMessageToEdit(this.messageHoverId);
            message_to_edit.message = message;
            this.messageService.editMessage(message_to_edit).pipe().subscribe({
                next: (response) => {
                    if (response.status === 200) {
                        this.findUpdatedMessage(response.data);
                    }
                    /**
                     * Throw error if necessary
                     */
                },
            });
            this.editMode = false;
            this.clearMessageBox();
            return;
        }
        const new_message = {
            sender: (_a = this.authService.currentUser) === null || _a === void 0 ? void 0 : _a.id,
            reciever: this.selectedUser.id,
            message: message,
        };
        // set message locally
        this.messageService
            .setMessage(new_message)
            .subscribe((message) => {
            if (message.status === 200) {
                this.findSenderAndReciever(message.data); // find sender and reciever
            }
            /**
             * throw error if necessary
             */
        });
        this.clearMessageBox();
    }
    /**
     * Will update message on front end with new message from backend
     * @param Message newMessage
     * @returns void
     */
    findUpdatedMessage(newMessage) {
        this.messageData.forEach((message) => {
            message.id === newMessage.id ? message.message = newMessage.message : null;
        });
    }
    /**
     * Will set the sender boolean to tell sender and reciever apart from server
     * @param message[]
     * @returns void
     */
    findSenderAndReciever(message) {
        this.messageData = [];
        message.forEach((message) => {
            if (message.user_sender_id === this.currentUser.message_id) {
                message.isSender = true;
            }
            else {
                message.isSender = false;
            }
            this.messageData.push(message);
        });
    }
    get getMessage() {
        return this.messageForm.controls['message'].value;
    }
    /*
    * Sets hover and sets the index of the message with hover
    * @property: none
    * @return: void
    */
    hoverSettings(id, index) {
        if (this.toggleEdit)
            return;
        if (this.isMessageDeleted(index)) {
            return;
        }
        this.messageHoverId = id;
        this.toggleSettings = !this.toggleSettings;
    }
    /*
    * Toggles the edit message component on and off
    * @property: none
    * @return: void
    */
    calltoggleEdit(reciever = false) {
        this.recieverHover = false;
        if (reciever) {
            this.recieverHover = true;
        }
        this.toggleEdit = !this.toggleEdit;
    }
    /*
    * Will exit the message modal when exit button is pressed
    * @property: boolean
    * @return: void
    */
    manageMessageExit(exit) { this.toggleEdit = exit; }
    /**
     * will patch tghe value to edit to the message form controls
     * @param edit boolean
     */
    manageMessageEdit(edit) {
        this.editMode = edit;
        const messageToEdit = this.findMessageToEdit(this.messageHoverId);
        this.messageForm.controls['message'].patchValue(messageToEdit.message);
    }
    /**
     * will delete a message using a messageHoverId
     *
     */
    manageMessageDelete() {
        this.messageService.deleteMessage(this.messageHoverId)
            .pipe()
            .subscribe((response) => {
            if (response.status === 200) {
                console.log("message deleted");
                this.findUpdatedMessage(response.data);
            }
            console.log('something went wrong');
        });
    }
    manageMessageForward(forward) { }
    /*
    * Will clear the message box when message is sent
    * @property: none
    * @return: void
    */
    clearMessageBox() { this.messageForm.reset(); }
    findMessageToEdit(message_id) {
        if (!message_id) {
            return;
        }
        // filter the message to edit and retreieve the first message 
        return this.messageData.filter((message) => {
            return message.id === message_id;
        })[0];
    }
    /*
    * Checks which message the user is hovering over
    * @property: number
    * @return: boolean
    */
    hoverCheck(id) { return this.toggleSettings && id === this.messageHoverId ? true : false; }
    isMessageDeleted(index) { return this.messageData[index].message === 'Message has been deleted'; }
}
MessageBoxComponent.ɵfac = function MessageBoxComponent_Factory(t) { return new (t || MessageBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService)); };
MessageBoxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MessageBoxComponent, selectors: [["app-message-box"]], inputs: { selectedUser: "selectedUser" }, decls: 9, vars: 3, consts: [[1, "message-content", 2, "display", "inline-block"], [3, "formGroup"], ["class", "row message-window", 4, "ngIf", "ngIfElse"], ["noData", ""], [1, "row", "footer-content"], ["type", "text", "placeholder", "Send a message", "formControlName", "message", 1, "message-box"], ["type", "button", 1, "button", 3, "click"], [1, "row", "message-window"], ["class", "box", 4, "ngFor", "ngForOf"], [3, "isReciever", "emitExit", "emitEdit", "emitDelete", "emitForward", 4, "ngIf"], [1, "box"], ["class", "message-box sender", 3, "message-deleted", "mouseover", "mouseleave", 4, "ngIf"], ["class", "message-box reciever", 4, "ngIf"], [1, "message-box", "sender", 3, "mouseover", "mouseleave"], [4, "ngIf"], [1, "edit", 3, "click"], [1, "divider"], [1, "message-box", "reciever"], [3, "isReciever", "emitExit", "emitEdit", "emitDelete", "emitForward"]], template: function MessageBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MessageBoxComponent_div_2_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MessageBoxComponent_ng_template_3_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MessageBoxComponent_Template_button_click_7_listener() { return ctx.send(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.messageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_components_manage_message_modal_manage_message_modal_component__WEBPACK_IMPORTED_MODULE_2__.ManageMessageModalComponent], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\ninput[type=text][_ngcontent-%COMP%]{\n    display: inline-block;\n    border: 1.5px solid black;\n    width:80%;\n    border-radius: 5px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    margin: .625rem;\n    padding: 5px;\n    \n}\n.message-btn[_ngcontent-%COMP%]{\n    margin: .625rem;\n    height: 2.5rem;\n    width: 5rem;    \n    border-radius: 10px;\n    background-color:white;\n    justify-content: center;\n}\n.message-btn[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\ninput[type=text][_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n.options[_ngcontent-%COMP%]{\n    height: 50px;\n}\n.message-content[_ngcontent-%COMP%]{\n    position: relative;\n    box-sizing: border-box;\n    border-radius: 10px;\n    margin: 0px 10px;\n    height: 90%;\n    min-height: 500px;\n    width: 100%;\n    padding: 10px;\n}\n.message-box[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    min-height: 50px;\n    border: 1.5px solid black;\n    width: 100%;\n    height: 80%;\n}\n.footer-content[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    border-top: 1px solid black;\n    align-items: center;\n    position: absolute;\n    width: 95%;\n    margin-bottom: 10px;\n    bottom: 0;\n}\n.box[_ngcontent-%COMP%]{\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: column;\n    height: auto;\n    margin: 0px;\n    overflow:scroll;\n}\n.edit[_ngcontent-%COMP%]{\n    height: 20px;\n    border: none;\n    background-color: transparent;\n}\n.message-box[_ngcontent-%COMP%]{\n    padding: 5px;\n    height: 40px;\n    border-radius: 10px;\n    transition: .5s;\n}\n.message-box[_ngcontent-%COMP%]:hover{\n    transition: .5s;\n    border-radius: 25px;\n}\n.message-deleted[_ngcontent-%COMP%]{\n    color: rgba(0, 0, 255, 0.4) !important;\n}\n.reciever[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    float: left;\n    width: auto;\n    height: auto;\n    max-width: 31.25rem;\n    margin: 5px;\n    color: red;\n    padding: 5px;\n}\n.sender[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    float: right;\n    width: auto;\n    max-width: 31.25rem;\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: 5px;\n    color: blue;\n    padding: 5px;\n}\n.sender[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n\n}\n.reciever[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n\n}\n.divider[_ngcontent-%COMP%]{\n    border: 1px solid rgb(170, 170, 170);\n    opacity: .75;\n    width: 1px;\n    height: 20px;\n    margin: 5px 10px;\n}\n.message-window[_ngcontent-%COMP%]{\n    max-height: 26.25rem;\n    overflow: scroll;\n}\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 15%;\n    height: auto;\n    width: 15%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -90px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n    transition: .5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGtCQUFrQjtBQUNsQixjQUFjLGtCQUFrQixDQUFDO0FBRWpDO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixpREFBaUQ7SUFDakQsZUFBZTtJQUNmLFlBQVk7O0FBRWhCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REO0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQ7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsU0FBUztBQUNiO0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0RBQWtEOztBQUV0RDtBQUVBO0lBQ0ksa0RBQWtEOztBQUV0RDtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLG1DQUFtQztJQUNuQywwQ0FBMEM7QUFDOUM7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaURBQWlEO0lBQ2pELG1DQUFtQztJQUNuQyxlQUFlO0FBQ25CIiwiZmlsZSI6Im1lc3NhZ2UtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbjo6cGxhY2Vob2xkZXJ7dGV4dC1hbGlnbjogY2VudGVyO31cblxuaDJ7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDo4MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgbWFyZ2luOiAuNjI1cmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBcbn1cblxuLm1lc3NhZ2UtYnRue1xuICAgIG1hcmdpbjogLjYyNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICB3aWR0aDogNXJlbTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVzc2FnZS1idG46aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbmlucHV0W3R5cGU9dGV4dF06aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbi5vcHRpb25ze1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLm1lc3NhZ2UtY29udGVudHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgbWluLWhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbn0gICBcblxuLm1lc3NhZ2UtYm94e1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODAlO1xufVxuXG4uZm9vdGVyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBibGFjaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTUlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDBweDtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG5cbi5lZGl0e1xuICAgIGhlaWdodDogMjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59ICAgXG5cbi5tZXNzYWdlLWJveHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xufVxuXG4ubWVzc2FnZS1ib3g6aG92ZXJ7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbi5tZXNzYWdlLWRlbGV0ZWR7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjQpICFpbXBvcnRhbnQ7XG59XG5cbi5yZWNpZXZlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1heC13aWR0aDogMzEuMjVyZW07XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY29sb3I6IHJlZDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG5cbi5zZW5kZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDMxLjI1cmVtO1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4uc2VuZGVyOmhvdmVye1xuICAgIGJveC1zaGFkb3c6ICMxMjEyMTIgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xuXG59XG5cbi5yZWNpZXZlcjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAjMTIxMjEyIDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcblxufVxuXG4uZGl2aWRlcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTcwLCAxNzAsIDE3MCk7XG4gICAgb3BhY2l0eTogLjc1O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG59XG5cbi5tZXNzYWdlLXdpbmRvd3tcbiAgICBtYXgtaGVpZ2h0OiAyNi4yNXJlbTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtaW4taGVpZ2h0OiAxNSU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxNSU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IC4zMTNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI2LCAyMjYsIDIyNik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTVweCAwcHggcmdiKDIxLCAyMSwgMjEpO1xufVxuXG4uYnV0dG9uIHB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbi5idXR0b24gLmxvZ297XG4gICAgbWluLWhlaWdodDogMTIlO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjojZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgLTkwcHggMHB4IHJnYmEoMTQsIDE0LCAxNCwgMC41KTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMSwgMjEsIDIxKTtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG59Il19 */"] });


/***/ }),

/***/ 2478:
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageComponent": () => (/* binding */ MessageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.service */ 7822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components/sidebar-user/sidebar-user.component */ 5219);
/* harmony import */ var _message_box_header_message_box_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message-box-header/message-box-header.component */ 6401);
/* harmony import */ var _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message-box/message-box.component */ 5902);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/footer/footer.component */ 6526);
/* harmony import */ var _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/error-banner/error-banner.component */ 9201);
/* harmony import */ var _shared_components_manage_user_modal_manage_user_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/components/manage-user-modal/manage-user-modal.component */ 6970);










function MessageComponent_app_error_banner_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-error-banner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("emitClose", function MessageComponent_app_error_banner_1_Template_app_error_banner_emitClose_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r2.closeError(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("error_message", ctx_r0.errorBannerMessage)("error_type", ctx_r0.errorBannerType);
} }
function MessageComponent_app_manage_user_modal_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-manage-user-modal", 9);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("user", ctx_r1.selectedUser);
} }
class MessageComponent {
    constructor(authService, messageService) {
        this.authService = authService;
        this.messageService = messageService;
        this.users = [];
        this.userHeaderName = 'No user selected';
        this.toggleManageUser = false;
        //Error Banner
        this.showErrorBanner = false;
    }
    ngOnInit() { }
    closeError() { this.showErrorBanner = false; }
    toggleManagerUserModel(event) {
        this.toggleManageUser = event;
    }
}
MessageComponent.ɵfac = function MessageComponent_Factory(t) { return new (t || MessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService)); };
MessageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MessageComponent, selectors: [["app-message"]], decls: 10, vars: 4, consts: [[1, "row", "container", 2, "display", "flex"], [3, "error_message", "error_type", "emitClose", 4, "ngIf"], [2, "width", "30%", "height", "100%"], [1, "column", "content", 2, "width", "65%"], [3, "selectedUser", "emitToggleManagerUser"], [3, "user", 4, "ngIf"], [1, "row", "seperator"], [3, "selectedUser"], [3, "error_message", "error_type", "emitClose"], [3, "user"]], template: function MessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MessageComponent_app_error_banner_1_Template, 1, 2, "app-error-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "app-sidebar-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "app-message-box-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("emitToggleManagerUser", function MessageComponent_Template_app_message_box_header_emitToggleManagerUser_5_listener($event) { return ctx.toggleManagerUserModel($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MessageComponent_app_manage_user_modal_6_Template, 1, 1, "app-manage-user-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-message-box", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showErrorBanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedUser", ctx.selectedUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.toggleManageUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedUser", ctx.selectedUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_sidebar_user_sidebar_user_component__WEBPACK_IMPORTED_MODULE_2__.SideBarUserComponent, _message_box_header_message_box_header_component__WEBPACK_IMPORTED_MODULE_3__.MessageBoxHeaderComponent, _message_box_message_box_component__WEBPACK_IMPORTED_MODULE_4__.MessageBoxComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _shared_components_error_banner_error_banner_component__WEBPACK_IMPORTED_MODULE_6__.ErrorBannerComponent, _shared_components_manage_user_modal_manage_user_modal_component__WEBPACK_IMPORTED_MODULE_7__.ManageUserModalComponent], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nh3[_ngcontent-%COMP%]{\n    text-decoration: underline;\n}\nh3[_ngcontent-%COMP%]:hover{\n    color: rgb(119, 119, 249)\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\n.parent[_ngcontent-%COMP%]{\n    align-items: center;\n}\n.container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.seperator[_ngcontent-%COMP%]{\n    width: 95%;\n    margin: 10px 5px;\n    height: 1px;\n    border: 1px solid gray;\n}\n.content[_ngcontent-%COMP%]{\n    background-color: rgb(219, 217, 217);\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    margin:10px;  \n    justify-content: center;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWMsa0JBQWtCLENBQUM7QUFFakM7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBRUE7SUFDSTtBQUNKO0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0lBQStJO0lBQy9JLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6Im1lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyogR2xvYmFsIFN0eWxlcyAqL1xuOjpwbGFjZWhvbGRlcnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuXG5oMntcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oM3tcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaDM6aG92ZXJ7XG4gICAgY29sb3I6IHJnYigxMTksIDExOSwgMjQ5KVxufVxuXG5sYWJlbHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFyZW50e1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uc2VwZXJhdG9ye1xuICAgIHdpZHRoOiA5NSU7XG4gICAgbWFyZ2luOiAxMHB4IDVweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4uY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6MXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIG1hcmdpbjoxMHB4OyAgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 7822:
/*!********************************************!*\
  !*** ./src/app/message/message.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);


/* RXJS */



class MessageService {
    constructor(http) {
        this.http = http;
        this.messagesChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject(); //emites a new message 
        this.emitSelectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.media_api_url;
    }
    /* pass in the user id to get messages from backend */
    getMessages(sender_id, reciever_id) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams()
            .set('senderId', sender_id).set('recieverId', reciever_id);
        return this.http.get(this.routePrefix + "messages", { params });
    }
    setMessage(message) {
        return this.http.post(this.routePrefix + "messages/set-message", message);
    }
    deleteMessage(message_id) {
        return this.http.delete(this.routePrefix + 'messages/' + message_id);
    }
    editMessage(message) {
        return this.http.post(this.routePrefix + "messages/edit", message);
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6499:
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuComponent": () => (/* binding */ NavMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_searcbar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/searcbar/search-bar.component */ 6008);






const _c0 = function () { return ["/"]; };
const _c1 = function (a0) { return { show: a0 }; };
const _c2 = function () { return ["link-active"]; };
const _c3 = function () { return ["/message"]; };
const _c4 = function () { return ["/people-page"]; };
const _c5 = function () { return ["/account"]; };
const _c6 = function () { return ["/login"]; };
class NavMenuComponent {
    constructor(authService, fb) {
        this.authService = authService;
        this.fb = fb;
        this.isExpanded = false;
    }
    ngOnInit() {
        this.authService.emitCurrentUser.subscribe((user) => {
            this.currentUser = user;
        });
        this.initForm();
        // this.findFriendsForm.controls.get('searchBar').valueChanges.subscribe(
        // (value) => {
        //     console.log(value);
        // });
    }
    initForm() {
        this.findFriendsForm = this.fb.group({
            searchBar: [''],
        });
    }
    /**
     * returns the search bar string value
     */
    get searchBarValue() {
        return this.findFriendsForm.controls['searchBar'].value;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
NavMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["app-nav-menu"]], decls: 25, vars: 28, consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["src", "../../assets/header_logo.png", "alt", "logo"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "justify-content-end", 3, "ngClass"], [1, "navbar-nav", "flex-grow", "nav-buttons", 2, "width", "100%"], [1, "nav-link", "text-dark", "align", 3, "routerLinkActive", "routerLink"], [1, "divider", "align"], [1, "text-dark", "align"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavMenuComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-search-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "PeoplesPage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx.isExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("User: ", (ctx.currentUser == null ? null : ctx.currentUser.user_name) ? ctx.currentUser == null ? null : ctx.currentUser.user_name : "Not logged in", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](20, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](21, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](22, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](23, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c2))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](!!ctx.currentUser ? "Logout" : "Login");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _shared_components_searcbar_search_bar_component__WEBPACK_IMPORTED_MODULE_1__.SearchBarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive], styles: ["a.navbar-brand[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n    \r\n}\r\n\r\ndiv.nav-title[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    text-align: center;\r\n}\r\n\r\na.divider[_ngcontent-%COMP%]{\r\n    width: 1px;\r\n    border: 1.5px solid black;\r\n    background-color: black;\r\n    margin: 0 20px;\r\n    opacity: .15;\r\n    height: 50px;\r\n}\r\n\r\n.align[_ngcontent-%COMP%]{\r\n    margin-top: 40px !important;\r\n}\r\n\r\n.find-friend[_ngcontent-%COMP%]{\r\n    width:25%;\r\n    height:40px !important;\r\n    margin-right: 20px;\r\n}\r\n\r\nhtml[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow[_ngcontent-%COMP%] {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjs7QUFFdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUNBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJmaWxlIjoibmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgICBcclxufVxyXG5cclxuZGl2Lm5hdi10aXRsZXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYS5kaXZpZGVye1xyXG4gICAgd2lkdGg6IDFweDtcclxuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgb3BhY2l0eTogLjE1O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maW5kLWZyaWVuZHtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGhlaWdodDo0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 9369:
/*!******************************************************!*\
  !*** ./src/app/people-page/people-page.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PeoplePageComponent": () => (/* binding */ PeoplePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PeoplePageComponent {
}
PeoplePageComponent.ɵfac = function PeoplePageComponent_Factory(t) { return new (t || PeoplePageComponent)(); };
PeoplePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeoplePageComponent, selectors: [["app-people-page"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function PeoplePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Peoples Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 8128:
/*!***********************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePostComponent": () => (/* binding */ CreatePostComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../post.service */ 8319);




class CreatePostComponent {
    constructor(postService) {
        this.postService = postService;
    }
    ngOnInit() {
        this.newCreatePost = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            body: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(''),
        });
    }
    createNewPost() {
        var _a, _b;
        const new_post = {
            title: (_a = this.newCreatePost.get('title')) === null || _a === void 0 ? void 0 : _a.value,
            body: (_b = this.newCreatePost.get('body')) === null || _b === void 0 ? void 0 : _b.value,
            img: '',
        };
        this.postService.setPosts(new_post).pipe().subscribe((post) => {
            console.log("response: ", post);
        });
    }
}
CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) { return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_0__.PostSerice)); };
CreatePostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CreatePostComponent, selectors: [["app-create-post"]], decls: 11, vars: 1, consts: [[1, "content"], [3, "formGroup"], [1, "row", "header-content"], [2, "width", "auto"], ["type", "text", "placeholder", "Type a title", "formControlName", "title", 1, "title-input"], [1, "row", "post-content"], [1, "body"], ["type", "text", "placeholder", "Enter some text", "formControlName", "body", 1, "body-input"], [1, "footer-content"], [1, "post-btn", 3, "click"]], template: function CreatePostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_9_listener() { return ctx.createNewPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.newCreatePost);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".content[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin:15px 0;    \n    border-radius: 10px;\n    border-top: 2px solid black;\n    border-bottom: 2px solid black;\n}\n\n.header-content[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    border-bottom: 1px solid black;\n    padding: 10px;\n    \n}\n\n.body[_ngcontent-%COMP%]{\n    min-height: 300px;\n    padding: 10px;\n}\n\n.post-content[_ngcontent-%COMP%]{\n    min-height: 350px;\n}\n\n.footer-content[_ngcontent-%COMP%]{\n    max-height: 50px;   \n}\n\n.post-btn[_ngcontent-%COMP%]{\n    width: 100%;    \n    border-radius: 10px;\n    border: none;\n    background-color:white;\n    justify-content: center;\n}\n\n.post-btn[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n    background-color: rgb(184, 196, 204);\n}\n\n.title-input[_ngcontent-%COMP%]{\n    border: none;\n    background:transparent;\n    width: 100%;\n    padding: 10px;\n}\n\n.body-input[_ngcontent-%COMP%]{\n    border: none;\n    background: transparent;   \n    width: 100%; \n    min-height: 350px;\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtEQUFrRDtJQUNsRCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakIiLCJmaWxlIjoiY3JlYXRlLXBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOjE1cHggMDsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaGVhZGVyLWNvbnRlbnR7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBcbn1cblxuLmJvZHl7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLnBvc3QtY29udGVudHtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cblxuLmZvb3Rlci1jb250ZW50e1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7ICAgXG59XG5cbi5wb3N0LWJ0bntcbiAgICB3aWR0aDogMTAwJTsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnBvc3QtYnRuOmhvdmVye1xuICAgIGJveC1zaGFkb3c6ICMxMjEyMTIgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDE5NiwgMjA0KTtcbn1cblxuLnRpdGxlLWlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5ib2R5LWlucHV0e1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgICBcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 9112:
/*!*******************************************************!*\
  !*** ./src/app/post/post-item/post-item.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostItemComponent": () => (/* binding */ PostItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _shared_components_comments_section_comment_section_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/comments-section/comment-section.component */ 466);





function PostItemComponent_app_comment_selction_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-comment-selction", 16);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("comments", ctx_r0.comments);
} }
function PostItemComponent_input_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 17);
} }
function PostItemComponent_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostItemComponent_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.comment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
// import { PostSerice } from '../post.service';
class PostItemComponent {
    constructor() {
        this.likes = 0;
        // TODO: make this input when like system is setup
        this.isLiked = false;
        this.showComment = false;
        this.toggleCommentSection = false;
    }
    ngOnInit() {
        // get comments for a certain post when inialised
        // this.comments = this.postService.getComments(this.comment_id);
        // Initialise comment box
        this.postOptionsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            commentBox: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(''),
        });
        //listen for comments change
        // this.postService.commentChange.pipe().subscribe({
        //     next: (updated_comments:Comment)=>{    
        //         this.comments.push(updated_comments)
        //     }
        // })
    }
    like() {
        this.isLiked = !this.isLiked;
        //need proper user account to save likes to account;
        // this.postService.setLike(this.isLiked, this.post_id);
    }
    comment() {
        var _a;
        const comment = (_a = this.postOptionsForm.get('commentBox')) === null || _a === void 0 ? void 0 : _a.value;
        const new_comment = { id: this.comment_id, comment };
        // this.postService.setComment(new_comment);
        this.clearComments();
    }
    clearComments() {
        this.postOptionsForm.reset();
    }
    share() {
        // console.log("Share post");
    }
    showComments() {
        this.toggleCommentSection = !this.toggleCommentSection;
    }
}
PostItemComponent.ɵfac = function PostItemComponent_Factory(t) { return new (t || PostItemComponent)(); };
PostItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostItemComponent, selectors: [["app-post-item"]], inputs: { post_id: "post_id", comment_id: "comment_id", title: "title", uploadDate: "uploadDate", img: "img", content: "content", likes: "likes" }, decls: 21, vars: 12, consts: [[1, "content"], [3, "formGroup"], [1, "row", "header-content"], [2, "width", "auto"], [1, "row", "post-content", 3, "click"], [3, "src"], [1, "body"], ["style", "padding: 0px;", 3, "comments", 4, "ngIf"], [1, "row", "footer-content"], ["for", "likes", 1, "likes-label"], [1, "divider"], ["type", "button", 1, "actionBtn", "like-button", 3, "ngStyle", "click"], ["type", "button", 1, "actionBtn", "comment-button", 3, "click"], ["type", "button", 1, "actionBtn", "share-button", 3, "click"], ["type", "text", "formControlName", "commentBox", "placeholder", "Leave a comment!", 4, "ngIf"], ["class", "actionBtn post-comment", "type", "text", 3, "click", 4, "ngIf"], [2, "padding", "0px", 3, "comments"], ["type", "text", "formControlName", "commentBox", "placeholder", "Leave a comment!"], ["type", "text", 1, "actionBtn", "post-comment", 3, "click"]], template: function PostItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostItemComponent_Template_div_click_7_listener() { return ctx.showComments(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PostItemComponent_app_comment_selction_11_Template, 1, 1, "app-comment-selction", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostItemComponent_Template_button_click_16_listener() { return ctx.like(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostItemComponent_Template_button_click_17_listener() { return ctx.showComment = !ctx.showComment; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostItemComponent_Template_button_click_18_listener() { return ctx.share(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, PostItemComponent_input_19_Template, 1, 0, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PostItemComponent_button_20_Template, 1, 0, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.postOptionsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.uploadDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggleCommentSection);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Likes: ", ctx.likes, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.isLiked ? "rgb(70, 205, 250)" : "rgb(255, 255, 255)"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showComment);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showComment);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, _shared_components_comments_section_comment_section_component__WEBPACK_IMPORTED_MODULE_0__.CommentSectionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName], styles: ["*[_ngcontent-%COMP%]{\n    margin: 10px 0px;\n}\n\n[_ngcontent-%COMP%]::placeholder{text-align: center;   }\n\n.content[_ngcontent-%COMP%]{\n    border-top: 2px solid black;\n    border-bottom: 2px solid black;\n    margin-top: 20px;\n    border-radius: 10px;\n}\n\n.content[_ngcontent-%COMP%]:hover{\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n\nimg[_ngcontent-%COMP%]{\n    max-width: 90%;\n    max-height: 300px;\n    margin-left: 10px;\n    border-radius: 5px;\n    object-fit: contain;\n}\n\ninput[type=text][_ngcontent-%COMP%]{\n    border: 1.5px solid black;\n    border-radius: 5px;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n    margin: 5px 10px;\n    padding: 5px;\n    width:50%;\n}\n\n.header-content[_ngcontent-%COMP%]{\n    border-bottom: 2px solid gray;\n    border-radius: 10px;\n    padding: 5px;\n    width: auto;\n}\n\n.footer-content[_ngcontent-%COMP%]{\n    justify-content: center;\n}\n\n.comment-button[_ngcontent-%COMP%]{\n    width: 5%;\n    margin: 10px;\n    border-radius: 50px;\n    background-image: url('comment-icon.png');\n    background-size: cover;\n    float: right;\n}\n\n.like-button[_ngcontent-%COMP%]{\n    width: 5%;\n    padding: 5px;\n    background-image: url('like-button.png');\n    background-size: cover;\n    border-radius: 20px;\n}\n\n.share-button[_ngcontent-%COMP%]{\n    width: 5%;\n    \n    background-size: cover;\n    border-radius: 20px;    \n}\n\n.post-comment[_ngcontent-%COMP%]{\n    width: 5%;\n    background-image: url('post-comment-icon.png');\n    background-size: cover;\n    border-radius: 20px;\n}\n\n.comment-button[_ngcontent-%COMP%]:hover, input[type=text][_ngcontent-%COMP%]:hover, .actionBtn[_ngcontent-%COMP%]:hover, .like-button[_ngcontent-%COMP%]:hover, .share-button[_ngcontent-%COMP%]:hover {\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.actionBtn[_ngcontent-%COMP%]{\n    margin: 5px 10px;\n    height: 35px;\n    width: 5%;    \n    border-radius: 10px;\n    background-color:white;\n    justify-content: center;\n}\n\n.post-content[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    width: 100%;\n}\n\n.body[_ngcontent-%COMP%]{\n    height: auto;\n    text-align: center;\n    width: 80%;\n    margin-left: 10px; \n}\n\n.divider[_ngcontent-%COMP%]{\n    width: 1px;\n    padding: 0px;\n    border: 1px solid gray;\n}\n\n.likes-label[_ngcontent-%COMP%]{\n    width: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBLGNBQWMsa0JBQWtCLElBQUk7O0FBRXBDO0lBQ0ksMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUZBQXlGO0FBQzdGOztBQUdBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztBQUNiOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUNBQXlEO0lBQ3pELHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWix3Q0FBd0Q7SUFDeEQsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCwrQkFBK0I7SUFDL0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCw4Q0FBOEQ7SUFDOUQsc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoicG9zdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xuICAgIG1hcmdpbjogMTBweCAwcHg7XG59XG5cbjo6cGxhY2Vob2xkZXJ7dGV4dC1hbGlnbjogY2VudGVyOyAgIH1cblxuLmNvbnRlbnR7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5jb250ZW50OmhvdmVye1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNjAsIDY0LCA2NywgMC4zKSAwcHggMXB4IDJweCAwcHgsIHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgMHB4IDJweCA2cHggMnB4O1xufVxuXG5cbmltZ3tcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XXtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICAgIG1hcmdpbjogNXB4IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOjUwJTtcbn1cblxuLmhlYWRlci1jb250ZW50e1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4uZm9vdGVyLWNvbnRlbnR7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21tZW50LWJ1dHRvbntcbiAgICB3aWR0aDogNSU7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvY29tbWVudC1pY29uLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubGlrZS1idXR0b257XG4gICAgd2lkdGg6IDUlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9saWtlLWJ1dHRvbi5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5zaGFyZS1idXR0b257XG4gICAgd2lkdGg6IDUlO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyAgICBcbn1cblxuLnBvc3QtY29tbWVudHtcbiAgICB3aWR0aDogNSU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvcG9zdC1jb21tZW50LWljb24ucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uY29tbWVudC1idXR0b246aG92ZXIsIGlucHV0W3R5cGU9dGV4dF06aG92ZXIsIC5hY3Rpb25CdG46aG92ZXIsIC5saWtlLWJ1dHRvbjpob3ZlciwgLnNoYXJlLWJ1dHRvbjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbi5hY3Rpb25CdG57XG4gICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDUlOyAgICBcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3N0LWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9keXtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxufVxuXG4uZGl2aWRlcntcbiAgICB3aWR0aDogMXB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG4ubGlrZXMtbGFiZWx7XG4gICAgd2lkdGg6IGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 3837:
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _message_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../message/message.service */ 7822);
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.service */ 8319);
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ 9089);
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ 8338);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-post/create-post.component */ 8128);
/* harmony import */ var _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-item/post-item.component */ 9112);








function PostComponent_app_create_post_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-create-post");
} }
function PostComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-post-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", post_r2.title)("img", (tmp_1_0 = post_r2.img) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "")("content", post_r2.body);
} }
class PostComponent {
    constructor(messageService, postService, userService, authService) {
        this.messageService = messageService;
        this.postService = postService;
        this.userService = userService;
        this.authService = authService;
        this.toggleCreateNewPost = false;
        this.test = "test1";
    }
    ngOnInit() {
        this.authService.emitCurrentUser.subscribe((user) => {
            this.currentUser = user;
            this.friends_list = user.friend_list;
            this.userService.hasFriendsEvent.next(user.friend_list);
        });
    }
    toggleNewPost() {
        this.toggleCreateNewPost = !this.toggleCreateNewPost;
    }
}
PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_message_message_service__WEBPACK_IMPORTED_MODULE_0__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_post_service__WEBPACK_IMPORTED_MODULE_1__.PostSerice), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService)); };
PostComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], decls: 5, vars: 2, consts: [[1, "content"], [1, "new-post-btn", 3, "click"], [4, "ngIf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [3, "title", "img", "content"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function PostComponent_Template_button_click_1_listener() { return ctx.toggleNewPost(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " New Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, PostComponent_app_create_post_3_Template, 1, 0, "app-create-post", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, PostComponent_div_4_Template, 2, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.toggleCreateNewPost);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.posts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_4__.CreatePostComponent, _post_item_post_item_component__WEBPACK_IMPORTED_MODULE_5__.PostItemComponent], styles: ["[_ngcontent-%COMP%]::placeholder{text-align: center;}\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\n.parent[_ngcontent-%COMP%]{\n    align-items: center;\n}\n.container[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n}\n.content[_ngcontent-%COMP%]{\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin:10px;  \n    width: 100%;\n    justify-content: center;\n    box-sizing: border-box;\n}\n.new-post-btn[_ngcontent-%COMP%]{\n    \n    width: 100%;    \n    border-radius: 10px;\n    border: none;\n    background-color:white;\n    justify-content: center;\n}\n.new-post-btn[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n    background-color: rgb(184, 196, 204);\n}\n.footer[_ngcontent-%COMP%]{\n    margin: 10px 0px;\n    width: 93%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esa0JBQWtCO0FBQ2xCLGNBQWMsa0JBQWtCLENBQUM7QUFFakM7SUFDSSx5Q0FBeUM7SUFDekMsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLCtJQUErSTtJQUMvSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0RBQWtEO0lBQ2xELG9DQUFvQztBQUN4QztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qIEdsb2JhbCBTdHlsZXMgKi9cbjo6cGxhY2Vob2xkZXJ7dGV4dC1hbGlnbjogY2VudGVyO31cblxuaDJ7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxubGFiZWx7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhcmVudHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6MXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46MTBweDsgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5uZXctcG9zdC1idG57XG4gICAgLyogbWFyZ2luOiAyMHB4IGF1dG87ICovXG4gICAgd2lkdGg6IDEwMCU7ICAgIFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZXctcG9zdC1idG46aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMTk2LCAyMDQpO1xufVxuXG5cbi5mb290ZXJ7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB3aWR0aDogOTMlO1xufVxuIl19 */"] });


/***/ }),

/***/ 8319:
/*!**************************************!*\
  !*** ./src/app/post/post.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSerice": () => (/* binding */ PostSerice)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class PostSerice {
    constructor(http) {
        this.http = http;
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.media_api_url;
        this.commentChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.postLikeChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() { }
    setLike(liked, post_id) { }
    setComment(new_comment) {
        this.allComments.push(new_comment);
        //Set comment
        this.commentChange.next(new_comment);
    }
    getComments(comment_id) {
        // //get Comments
        // const user_comments = this.allComments.filter((comment:Comment) => {
        //     return comment.id === comment_id;
        // })
        // return user_comments;
    }
    getPost(post_id) {
        return this.http.get("/posts/" + post_id);
    }
    getAllPosts() {
        return this.http.get(this.routePrefix + '/posts/get-all-posts');
    }
    setPosts(new_post) {
        return this.http.post(this.routePrefix + "/posts/create-post", new_post);
    }
    deletePosts(post_id) {
        return this.http.delete(this.routePrefix + "/posts/" + post_id);
    }
    editPosts() {
    }
}
PostSerice.ɵfac = function PostSerice_Factory(t) { return new (t || PostSerice)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
PostSerice.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostSerice, factory: PostSerice.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8338:
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class AuthService {
    constructor(http) {
        this.http = http;
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.php_api_url;
        this.emitCurrentUser = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    ngOnInit() {
    }
    setCurrentUser(user) {
        user.lastOnline = new Date();
        user.status = 'ACTIVE';
        this.currentUser = user;
        this.emitCurrentUser.next(user);
        return;
    }
    login(loginDetails) {
        return this.http.post(this.routePrefix + 'user/login', loginDetails);
    }
    register(user) {
        return this.http.post(this.routePrefix + 'user/create-user', user);
    }
    superLogin() {
        return this.http.post(this.routePrefix + 'user/super-login', { superLogin: true });
    }
    autoLogin(user) {
        return this.http.post(this.routePrefix + 'user/auto-login', user);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 466:
/*!*********************************************************************************!*\
  !*** ./src/app/shared/components/comments-section/comment-section.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentSectionComponent": () => (/* binding */ CommentSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function CommentSectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](comment_r1.comment);
} }
class CommentSectionComponent {
    constructor() { }
    ngOnInit() {
        console.log(this.comments);
    }
}
CommentSectionComponent.ɵfac = function CommentSectionComponent_Factory(t) { return new (t || CommentSectionComponent)(); };
CommentSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommentSectionComponent, selectors: [["app-comment-selction"]], inputs: { comments: "comments" }, decls: 3, vars: 1, consts: [[1, "container"], [1, "comment-box"], ["class", "comment", 4, "ngFor", "ngForOf"], [1, "comment"]], template: function CommentSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CommentSectionComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.comments);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".container[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction: column;\n    width: 100%;\n    align-items:center;\n    border: 1px solid gray;\n    padding:1.5rem .5rem;\n    border-radius: 5px;\n    background-color: #d5d5d5;\n    justify-content: center;\n    box-sizing: border-box;\n}\n\n.comment[_ngcontent-%COMP%]{\n    \n    border: 1px solid gray;\n    border-radius: 30px;\n    margin: 10px 0px;\n    padding: 10px;\n}\n\n.container[_ngcontent-%COMP%]:hover{\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5RkFBeUY7QUFDN0YiLCJmaWxlIjoiY29tbWVudC1zZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgIHBhZGRpbmc6MS41cmVtIC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDVkNWQ1O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb21tZW50e1xuICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jb250YWluZXI6aG92ZXJ7XG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XG59Il19 */"] });


/***/ }),

/***/ 6169:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/confirmation-modal/confirmation-modal.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationModalComponent": () => (/* binding */ ConfirmationModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ConfirmationModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ConfirmationModalComponent.ɵfac = function ConfirmationModalComponent_Factory(t) { return new (t || ConfirmationModalComponent)(); };
ConfirmationModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationModalComponent, selectors: [["app-confirmation-modal"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function ConfirmationModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "confirmation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  left: 35%;\n  flex-direction: column;\n  align-items: center;\n  border: 1.5px solid black;\n  padding: 0.5rem;\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n  background-color: #dbd9d9;\n  margin: 10px;\n  overflow: auto;\n  min-height: 350px;\n  width: 400px;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrSUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoiY29uZmlybWF0aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNSU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMS41cHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTcsIDIxNyk7XG4gICAgbWFyZ2luOiAxMHB4OyAgIFxuICAgIG92ZXJmbG93OmF1dG87XG4gICAgbWluLWhlaWdodDogMzUwcHg7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG59Il19 */"] });


/***/ }),

/***/ 9201:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/error-banner/error-banner.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBannerComponent": () => (/* binding */ ErrorBannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



const _c0 = function (a0, a1) { return { "border:": a0, "width": a1 }; };
class ErrorBannerComponent {
    constructor() {
        this.emitClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        setTimeout(() => this.emitClose.emit(), 5000); //banner closes after a certain time
    }
    get error_color() {
        //sets the background color depending on the type of error
        switch (this.error_type) {
            case "WARNING":
                return '1.5px solid rgb(252, 149, 53)';
            case "ERROR":
                return '1.5px solid rgb(232, 60, 60)';
            case "SUCCESS":
                return '1.5px solid green';
            default:
                return '1.5px solid blue';
        }
    }
}
ErrorBannerComponent.ɵfac = function ErrorBannerComponent_Factory(t) { return new (t || ErrorBannerComponent)(); };
ErrorBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorBannerComponent, selectors: [["app-error-banner"]], inputs: { error_message: "error_message", error_type: "error_type", error_status: "error_status", widthPercentage: "widthPercentage" }, outputs: { emitClose: "emitClose" }, decls: 3, vars: 5, consts: [[1, "row", "banner", 3, "ngStyle"]], template: function ErrorBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx.error_color, ctx.widthPercentage ? ctx.widthPercentage + "%" : "100%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Status: " + ctx.error_status + " - " + ctx.error_message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".banner[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  left: 12px;\n  top: 130px;\n  border-top: 4.5px solid black;\n  border-bottom: 4.5px solid black;\n  background-color: #dbd9d9 !important;\n  padding: 10px 0px;\n}\n.banner[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: auto;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUVJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBQVIiLCJmaWxlIjoiZXJyb3ItYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIHRvcDogMTMwcHg7XG4gICAgYm9yZGVyLXRvcDogNC41cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogNC41cHggc29saWQgYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjE3LCAyMTcpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG5cblxuICAgIGg0eyBcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 6526:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "row", "footer"], ["for", "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\n    margin: 10px 0px;\n    width: 93%;\n    height: 15%;\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin:10px;  \n    justify-content: center;\n    box-sizing: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwrSUFBK0k7SUFDL0ksb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlcntcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHdpZHRoOiA5MyU7XG4gICAgaGVpZ2h0OiAxNSU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6MXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46MTBweDsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59Il19 */"] });


/***/ }),

/***/ 2797:
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/manage-message-modal/manage-message-modal.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageMessageModalComponent": () => (/* binding */ ManageMessageModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



function ManageMessageModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMessageModalComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.edit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ManageMessageModalComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMessageModalComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.delete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ManageMessageModalComponent {
    constructor() {
        this.emitExit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.emitEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.emitDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.emitForward = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.isReciever) {
            console.log("changes: ", changes.isReciever);
        }
    }
    ngOnInit() {
        console.log('reciever: ', this.isReciever);
    }
    edit() {
        this.emitEdit.next(true);
        this.emitExit.next(false);
    }
    delete() {
        this.emitDelete.next(true);
        this.emitExit.next(false);
    }
    forward() {
        this.emitDelete.next(true);
        this.emitExit.next(false);
    }
    exit() { this.emitExit.next(false); }
}
ManageMessageModalComponent.ɵfac = function ManageMessageModalComponent_Factory(t) { return new (t || ManageMessageModalComponent)(); };
ManageMessageModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageMessageModalComponent, selectors: [["app-manage-message-modal"]], inputs: { isReciever: "isReciever" }, outputs: { emitExit: "emitExit", emitEdit: "emitEdit", emitDelete: "emitDelete", emitForward: "emitForward" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 2, consts: [[1, "row", "container"], ["class", "button", 3, "click", 4, "ngIf"], ["class", "button close", 3, "click", 4, "ngIf"], [1, "button", 3, "click"], [1, "button", "close", 3, "click"]], template: function ManageMessageModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ManageMessageModalComponent_button_3_Template, 2, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ManageMessageModalComponent_button_4_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMessageModalComponent_Template_button_click_5_listener() { return ctx.forward(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Forward");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageMessageModalComponent_Template_button_click_7_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReciever);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isReciever);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".container[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    width: 270px;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    margin: 10px;  \n    justify-content: center;\n    box-sizing: border-box;\n    z-index: 999;\n    background-color:rgb(219, 217, 217);\n}\n\n.close[_ngcontent-%COMP%]{\n    width: 90%;\n    text-align: center;\n    position: relative;\n    float: right;\n    border-radius: 10px;\n    background-color: transparent;\n    border: none;\n    background-color: white;\n    margin-top: 10px;\n}\n\n.close[_ngcontent-%COMP%]:hover{\n    background-color: rgb(251, 65, 65);\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 10%;\n    height: auto;\n    width: 100%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n\n.close[_ngcontent-%COMP%]:hover{\n    background-color: rgb(185, 32, 32);\n    transition: .7s;\n}\n\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -140px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n}\n\n.loginFormBtn[_ngcontent-%COMP%]:hover, input[type=text][_ngcontent-%COMP%]:hover, input[type=password][_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1tZXNzYWdlLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0lBQStJO0lBQy9JLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGtEQUFrRDtJQUNsRCxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrREFBa0Q7QUFDdEQiLCJmaWxlIjoibWFuYWdlLW1lc3NhZ2UtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHdpZHRoOiAyNzBweDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOjFyZW0gLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSkgMHB4IDFweCAxcHggMHB4IGluc2V0LCByZ2JhKDUwLCA1MCwgOTMsIDAuMjUpIDBweCA1MHB4IDEwMHB4IC0yMHB4LCByZ2JhKDAsIDAsIDAsIDAuMykgMHB4IDMwcHggNjBweCAtMzBweDtcbiAgICBtYXJnaW46IDEwcHg7ICBcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTksIDIxNywgMjE3KTtcbn1cblxuLmNsb3Nle1xuICAgIHdpZHRoOiA5MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsb3NlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDY1LCA2NSk7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbi5idXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1pbi1oZWlnaHQ6IDEwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IC4zMTNyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgb3BhY2l0eTogLjk7XG4gICAgYm9yZGVyOiAyLjVweCBzb2xpZCA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjI2LCAyMjYsIDIyNik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMTVweCAwcHggcmdiKDIxLCAyMSwgMjEpO1xufVxuXG4uY2xvc2U6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NSwgMzIsIDMyKTtcbiAgICB0cmFuc2l0aW9uOiAuN3M7XG59XG5cbi5idXR0b24gcHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuLmJ1dHRvbiAubG9nb3tcbiAgICBtaW4taGVpZ2h0OiAxMiU7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiBpbnNldCAtMTQwcHggMHB4IHJnYmEoMTQsIDE0LCAxNCwgMC41KTtcbiAgICBib3JkZXI6IDIuNXB4IHNvbGlkIHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmxvZ2luRm9ybUJ0bjpob3ZlciwgaW5wdXRbdHlwZT10ZXh0XTpob3ZlcixpbnB1dFt0eXBlPXBhc3N3b3JkXTpob3ZlcntcbiAgICBib3gtc2hhZG93OiAjMTIxMjEyIDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcbn0iXX0= */"] });


/***/ }),

/***/ 6970:
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/manage-user-modal/manage-user-modal.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageUserModalComponent": () => (/* binding */ ManageUserModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ManageUserModalComponent {
    constructor() { }
    ngOnInit() {
        console.log('selectedUser manage user modal: ', this.user);
    }
    goToUserPage() {
    }
    get name() {
        return this.user.first_name.toUpperCase() + " " + this.user.sur_name.toUpperCase();
    }
}
ManageUserModalComponent.ɵfac = function ManageUserModalComponent_Factory(t) { return new (t || ManageUserModalComponent)(); };
ManageUserModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageUserModalComponent, selectors: [["app-manage-user-modal"]], inputs: { user: "user", user_contact_details: "user_contact_details" }, decls: 29, vars: 3, consts: [[1, "row", "container"], [1, "user-info"], [1, "user-header"], [1, "user-body"], ["src", "assets/default-avatar.png", "alt", "profile-picture", 1, "pp"], [1, "divider"], [1, "user-controls"], [1, "controls-header"], [1, "controls-body"], [1, "button", 3, "click"], [1, "button", "caution"]], template: function ManageUserModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Manage User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ManageUserModalComponent_Template_button_click_19_listener() { return ctx.goToUserPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GO to user page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Unfriend user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mute user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "block user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "EXIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.user_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user_contact_details.email);
    } }, styles: [".container[_ngcontent-%COMP%]{\n    display:flex;\n    flex-direction: row;\n    position: absolute;\n    top: 200px;\n    left: 474px;\n    width: 55%;\n    height: 400px;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1.5rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin:10px;  \n    justify-content: center;\n    box-sizing: border-box;\n    z-index: 999;   \n}\n\n.caution[_ngcontent-%COMP%]:hover{\n    background-color: rgb(251, 65, 65);\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n\n\n[_ngcontent-%COMP%]::placeholder{text-align: center;}\n\nh2[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: 600;\n    text-decoration: underline;\n}\n\nlabel[_ngcontent-%COMP%]{\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: large;\n    font-weight: 600;\n    text-decoration: underline;\n    text-align: center;\n}\n\np[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n\n.divider[_ngcontent-%COMP%]{\n    display: flex;\n    width: 1px; \n    height: 100%;\n    flex-direction: column;\n    border-left: 1px gray solid;\n    opacity: .5;\n}\n\n.user-info[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    width: 45%;\n    height: 100%;\n}\n\n.user-controls[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    width: 45%;\n}\n\n.pp[_ngcontent-%COMP%]{\n    padding: 0px;\n    max-width: 170px;\n    max-height: 150px;   \n    height: auto;\n    width: auto;\n    margin: 0px auto;\n    border-radius: 20px;\n    justify-content: center;\n    object-fit: contain;\n}\n\n.controls-body[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n}\n\n.button[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content:flex-end;\n    align-items: center;\n    box-sizing: border-box;\n    min-height: 10%;\n    height: auto;\n    width: 100%;\n    padding: 10px;\n    margin: .313rem;\n    border-radius: 4px;\n    transition: 0.2s;\n    opacity: .9;\n    border: 2.5px solid ;\n    background-color:rgb(226, 226, 226);\n    box-shadow: inset 15px 0px rgb(21, 21, 21);\n}\n\n.button[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    margin-left: 50px;\n}\n\n.button[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\n    min-height: 12%;\n    height: auto;\n}\n\n.button[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    border-radius: 10px;\n    box-shadow: inset -200px 0px rgba(14, 14, 14, 0.5);\n    border: 2.5px solid rgb(21, 21, 21);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS11c2VyLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLCtJQUErSTtJQUMvSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxrREFBa0Q7QUFDdEQ7O0FBRUEsa0JBQWtCOztBQUNsQixjQUFjLGtCQUFrQixDQUFDOztBQUVqQztJQUNJLHlDQUF5QztJQUN6QyxnQkFBZ0I7SUFDaEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrREFBa0Q7SUFDbEQsbUNBQW1DO0FBQ3ZDIiwiZmlsZSI6Im1hbmFnZS11c2VyLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDQ3NHB4O1xuICAgIHdpZHRoOiA1NSU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nOjEuNXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46MTBweDsgIFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogOTk5OyAgIFxufVxuXG4uY2F1dGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCA2NSwgNjUpO1xuICAgIGJveC1zaGFkb3c6ICMxMjEyMTIgMCAwIDAgM3B4LCB0cmFuc3BhcmVudCAwIDAgMCAwO1xufVxuXG4vKiBHbG9iYWwgU3R5bGVzICovXG46OnBsYWNlaG9sZGVye3RleHQtYWxpZ246IGNlbnRlcjt9XG5cbmgye1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmxhYmVse1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmRpdmlkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMXB4OyBcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXItbGVmdDogMXB4IGdyYXkgc29saWQ7XG4gICAgb3BhY2l0eTogLjU7XG59XG5cbi51c2VyLWluZm97XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51c2VyLWNvbnRyb2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDQ1JTtcbn1cblxuLnBwe1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDE1MHB4OyAgIFxuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmNvbnRyb2xzLWJvZHl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtaW4taGVpZ2h0OiAxMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAuMzEzcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIG9wYWNpdHk6IC45O1xuICAgIGJvcmRlcjogMi41cHggc29saWQgO1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIyNiwgMjI2LCAyMjYpO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDE1cHggMHB4IHJnYigyMSwgMjEsIDIxKTtcbn1cblxuLmJ1dHRvbiBwe1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuXG4uYnV0dG9uIC5sb2dve1xuICAgIG1pbi1oZWlnaHQ6IDEyJTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IC0yMDBweCAwcHggcmdiYSgxNCwgMTQsIDE0LCAwLjUpO1xuICAgIGJvcmRlcjogMi41cHggc29saWQgcmdiKDIxLCAyMSwgMjEpO1xufSJdfQ== */"] });


/***/ }),

/***/ 6008:
/*!********************************************************************!*\
  !*** ./src/app/shared/components/searcbar/search-bar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchBarComponent": () => (/* binding */ SearchBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SearchBarComponent {
    constructor() { }
    ngOnInit() { }
}
SearchBarComponent.ɵfac = function SearchBarComponent_Factory(t) { return new (t || SearchBarComponent)(); };
SearchBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchBarComponent, selectors: [["app-search-bar"]], decls: 4, vars: 0, consts: [[1, "ff-container"], ["for", "friend find", 1, "ff-label"], ["type", "text", 1, "ff-input"]], template: function SearchBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Friend Finder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".ff-input[_ngcontent-%COMP%]{\n    margin: 5px;\n    outline: none;\n    width: 100%;\n}\n\n.ff-label[_ngcontent-%COMP%]{\n    margin: 10px;\n}\n\n.ff-container[_ngcontent-%COMP%]{\n    padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic2VhcmNoLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZmLWlucHV0e1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5mZi1sYWJlbHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5mZi1jb250YWluZXJ7XG4gICAgcGFkZGluZzogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 5219:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/sidebar-user/sidebar-user.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBarUserComponent": () => (/* binding */ SideBarUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth.service */ 8338);
/* harmony import */ var src_app_message_message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/message/message.service */ 7822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function SideBarUserComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SideBarUserComponent_div_4_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.setSelectedUser(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.status, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](friend_r2.user_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](friend_r2.lastOnline);
} }
function SideBarUserComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No friends found");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class SideBarUserComponent {
    constructor(authService, cd, messageService, router) {
        this.authService = authService;
        this.cd = cd;
        this.messageService = messageService;
        this.router = router;
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('session') || '');
        this.currentUser.lastOnline;
        if (this.currentUser.status === 'ACTIVE') {
            this.status = 'assets/active-user.png';
        }
        else if (this.currentUser.status === 'INACTIVE') {
            this.status = 'assets/inactive-user.png';
        }
        else if (this.currentUser.status === 'AFK') {
            this.status = 'assets/afk-user.png';
        }
    }
    setSelectedUser(selectedUserIndex) {
        this.selectedUser = this.currentUser.friend_list[selectedUserIndex];
        this.messageService.emitSelectedUser.next(this.selectedUser);
        this.router.navigate(['message']);
    }
}
SideBarUserComponent.ɵfac = function SideBarUserComponent_Factory(t) { return new (t || SideBarUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_message_message_service__WEBPACK_IMPORTED_MODULE_1__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
SideBarUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SideBarUserComponent, selectors: [["app-sidebar-user"]], inputs: { user: "user" }, decls: 6, vars: 2, consts: [[1, "content"], [1, "divider"], ["class", "row", 3, "click", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "row", 3, "click"], [1, "row", "sidebar-user"], ["src", "assets/default-avatar.png", "alt", "profile-picture", 1, "pp"], ["alt", "status", 1, "status", 3, "src"], [1, "row"]], template: function SideBarUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SideBarUserComponent_div_4_Template, 8, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, SideBarUserComponent_div_5_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.currentUser.friend_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentUser.friend_list.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".content[_ngcontent-%COMP%]{\n    display: inline-block;\n    align-items:center;\n    border: 1.5px solid black;\n    padding:1rem .5rem;\n    border-radius: 10px;\n    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;\n    background-color: rgb(219, 217, 217);\n    margin:10px;  \n    width: 100%;\n    justify-content: center;\n    box-sizing: border-box;\n}\n\n.caution[_ngcontent-%COMP%]:hover{\n    background-color: rgb(251, 65, 65);\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.pp[_ngcontent-%COMP%]{\n    padding: 0px;\n    max-width: 70px;\n    max-height: 50px;   \n    height: auto;\n    width: auto;\n    border-radius: 20px;\n    object-fit: contain;\n}\n\n.status[_ngcontent-%COMP%]{\n    position: relative;\n    right: 25px;\n    top: 35px;\n    height:15px;\n    width: 40px;\n    z-index: 2;\n}\n\np[_ngcontent-%COMP%]{\n    -webkit-text-decoration: underline gray;\n            text-decoration: underline gray;\n    width: auto;\n    \n}\n\n.sidebar-user[_ngcontent-%COMP%]{\n    display: flex;\n    border: 1px solid gray;\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;\n    width: 95%;\n    border-radius: 10px;\n    margin: 10px 10px;\n    padding: 5px;\n}\n\n.sidebar-user[_ngcontent-%COMP%]:hover{\n    box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;\n}\n\n.divider[_ngcontent-%COMP%]{\n    width:100%;\n    height: 1px;\n    border: 1px solid black;\n    border-radius: 5px;\n    margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsK0lBQStJO0lBQy9JLG9DQUFvQztJQUNwQyxXQUFXO0lBQ1gsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLFdBQVc7O0FBRWY7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlGQUF5RjtJQUN6RixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0RBQWtEO0FBQ3REOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzaWRlYmFyLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRlbnR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6MXJlbSAuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSAwcHggMXB4IDFweCAwcHggaW5zZXQsIHJnYmEoNTAsIDUwLCA5MywgMC4yNSkgMHB4IDUwcHggMTAwcHggLTIwcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwcHggMzBweCA2MHB4IC0zMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTksIDIxNywgMjE3KTtcbiAgICBtYXJnaW46MTBweDsgIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXV0aW9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDY1LCA2NSk7XG4gICAgYm94LXNoYWRvdzogIzEyMTIxMiAwIDAgMCAzcHgsIHRyYW5zcGFyZW50IDAgMCAwIDA7XG59XG5cbi5wcHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgIG1heC1oZWlnaHQ6IDUwcHg7ICAgXG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLnN0YXR1c3tcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgdG9wOiAzNXB4O1xuICAgIGhlaWdodDoxNXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHotaW5kZXg6IDI7XG59XG5cbnB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZ3JheTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBcbn1cblxuLnNpZGViYXItdXNlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgYm94LXNoYWRvdzogcmdiYSg2MCwgNjQsIDY3LCAwLjMpIDBweCAxcHggMnB4IDBweCwgcmdiYSg2MCwgNjQsIDY3LCAwLjE1KSAwcHggMnB4IDZweCAycHg7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbn1cblxuLnNpZGViYXItdXNlcjpob3ZlcntcbiAgICBib3gtc2hhZG93OiAjMTIxMjEyIDAgMCAwIDNweCwgdHJhbnNwYXJlbnQgMCAwIDAgMDtcbn1cblxuLmRpdmlkZXJ7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 9089:
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ 8338);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);





class UserService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
        this.routePrefix = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.php_api_url;
        this.hasFriendsEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() { }
    getFriends(friends_list) {
        if (friends_list === null) {
            console.error('NO friends in list');
            return;
        }
        return this.http.post(this.routePrefix + '/friend/get-friends', friends_list.split(","));
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    media_api_url: 'http://localhost:4200/api/v1/',
    php_api_url: 'http://localhost:8000/api/v1/',
    socket_api_url: 'http://localhost:3003/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBaseUrl": () => (/* binding */ getBaseUrl)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map