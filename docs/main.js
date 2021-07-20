(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/PVC":
/*!****************************************************************!*\
  !*** ./src/app/my-work/project-card/project-card.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCardComponent", function() { return ProjectCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ProjectCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "View Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.viewLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class ProjectCardComponent {
    constructor() {
        this.title = '';
        this.desc = '';
        this.thumbnailImg = '';
        this.viewLink = '';
    }
    ngOnInit() {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.card')
            .delay(1800)
            .queue(function (next) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).removeClass('hover');
            jquery__WEBPACK_IMPORTED_MODULE_1__('a.hover').removeClass('hover');
            next();
        });
    }
    getUrl() {
        return 'url(' + this.thumbnailImg + ')';
    }
}
ProjectCardComponent.ɵfac = function ProjectCardComponent_Factory(t) { return new (t || ProjectCardComponent)(); };
ProjectCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectCardComponent, selectors: [["app-project-card"]], inputs: { title: "title", desc: "desc", thumbnailImg: "thumbnailImg", viewLink: "viewLink" }, decls: 9, vars: 6, consts: [[1, "card", "hover"], [1, "card-img", 3, "ngStyle"], ["class", "overlay", 4, "ngIf"], [1, "card-content"], ["href", "#!"], [1, "overlay"], [1, "overlay-content"], [1, "hover", 3, "href"]], template: function ProjectCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectCardComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.getUrl()));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.desc);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 300px;\n  display: inline-block;\n  margin: 1rem;\n  border-radius: 4px;\n  box-shadow: 0 -1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  transition: all 0.2s ease;\n  background: #fff;\n  overflow: hidden;\n}\n\n.card[_ngcontent-%COMP%]:hover, .card.hover[_ngcontent-%COMP%] {\n  transform: translateY(-4px);\n  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.3), 0 0 1px 0 rgba(0, 0, 0, 0.25);\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-content[_ngcontent-%COMP%], .card.hover[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%] {\n  box-shadow: inset 0 3px 0 0 #d7a991;\n  border-color: #d7a991;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%], .card.hover[_ngcontent-%COMP%]   .card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  background-color: rgba(25, 29, 38, 0.85);\n  transition: opacity 0.2s ease;\n  opacity: 1;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 224px;\n  width: 100%;\n  background-color: #fff;\n  transition: opacity 0.2s ease;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #fff;\n  opacity: 0;\n}\n\n.card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%] {\n  line-height: 224px;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n}\n\n.card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  padding: 0 2rem;\n  display: inline-block;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  height: 40px;\n  line-height: 40px;\n  border-radius: 20px;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .card-img[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%]   .overlay-content[_ngcontent-%COMP%]   a.hover[_ngcontent-%COMP%] {\n  background: #d7a991;\n  border-color: #d7a991;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 104px;\n  background-color: #fff;\n  border-top: 1px solid #e9e9eb;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  padding: 1rem 2rem;\n  transition: all 0.2s ease;\n}\n\n.card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #202927;\n}\n\n.card-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n}\n\n.card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 400;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: rgba(32, 41, 28, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3QtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNFO0VBRUUsMkJBQUE7RUFDQSwwRUFBQTtBQUFKOztBQUVJO0VBQ0UsbUNBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUdJO0VBQ0Usd0NBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUFETjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBSEo7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFITjs7QUFLTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUhSOztBQUtRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFIVjs7QUFLVTtFQUVFLG1CQUFBO0VBQ0EscUJBQUE7QUFKWjs7QUFXRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVRKOztBQVdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBVE47O0FBWUk7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0FBVk47O0FBYUk7O0VBRUUsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0FBWE4iLCJmaWxlIjoicHJvamVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJkIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIC0xcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6aG92ZXIsXG4gICYuaG92ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAyNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI1KTtcblxuICAgICYgLmNhcmQtY29udGVudCB7XG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCAwIDAgI2Q3YTk5MTtcbiAgICAgIGJvcmRlci1jb2xvcjogI2Q3YTk5MTtcbiAgICB9XG5cbiAgICAmIC5jYXJkLWltZyAub3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAyOSwgMzgsIDAuODUpO1xuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMjRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgJiAub3ZlcmxheSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgb3BhY2l0eTogMDtcblxuICAgICAgJiAub3ZlcmxheS1jb250ZW50IHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIyNHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgICAmIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgICAmOmhvdmVyLFxuICAgICAgICAgICYuaG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q3YTk5MTtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Q3YTk5MTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZWI7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAmIGEge1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMyMDI5Mjc7XG4gICAgfVxuXG4gICAgJiBoMixcbiAgICBhIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgJiBwLFxuICAgIGEgcCB7XG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgY29sb3I6IHJnYmEoMzIsIDQxLCAyOCwgMC44KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-card',
                templateUrl: './project-card.component.html',
                styleUrls: ['./project-card.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], desc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], thumbnailImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], viewLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kaizer/Desktop/kaiz.me/kaiz-me/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LandingComponent {
    constructor() { }
    ngOnInit() { }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 10, vars: 0, consts: [[1, "bg"], [1, "row"], [1, "col-12", "mt-4"], [1, "font-weight-bold", "headerFont"], [1, "col-12"], ["width", "380", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "9 25 1058 299", "enable-background", "new -4 25 971 169", 0, "xml", "space", "preserve", 1, "svg-obj"], ["d", "M504.3,34.5h28.1v67.2l59.2-67.2h33.4l-48.9,56.7l52.3,92.8h-32.5l-39.5-69.9l-23.9,27.1V184h-28.1V34.5z", 1, "path"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "SOFTWARE ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".bg[_ngcontent-%COMP%] {\n  background-image: url('cover.jpg');\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 100%;\n  text-align: center;\n}\n\n.svg-obj[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.path[_ngcontent-%COMP%] {\n  fill: white;\n  fill-opacity: 0;\n  stroke: white;\n  stroke-width: 5;\n  stroke-linecap: round;\n\n  stroke-dasharray: 860;\n  stroke-dashoffset: 860;\n  animation: draw 2s linear forwards;\n}\n\n@keyframes draw {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n\n.headerFont[_ngcontent-%COMP%] {\n  color: #d7a991;\n  font-family: \"tBold\", \"arial\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFvRDtFQUNwRCxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLHFCQUFxQjs7RUFFckIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGOztBQW1CQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvY292ZXIuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3ZnLW9iaiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5wYXRoIHtcbiAgZmlsbDogd2hpdGU7XG4gIGZpbGwtb3BhY2l0eTogMDtcbiAgc3Ryb2tlOiB3aGl0ZTtcbiAgc3Ryb2tlLXdpZHRoOiA1O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG5cbiAgc3Ryb2tlLWRhc2hhcnJheTogODYwO1xuICBzdHJva2UtZGFzaG9mZnNldDogODYwO1xuICBhbmltYXRpb246IGRyYXcgMnMgbGluZWFyIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGRyYXcge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGRyYXcge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGRyYXcge1xuICB0byB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZHJhdyB7XG4gIHRvIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxufVxuXG4uaGVhZGVyRm9udCB7XG4gIGNvbG9yOiAjZDdhOTkxO1xuICBmb250LWZhbWlseTogXCJ0Qm9sZFwiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NgH1":
/*!************************************************!*\
  !*** ./src/app/about-me/about-me.component.ts ***!
  \************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutMeComponent {
    constructor() { }
    ngOnInit() { }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 35, vars: 0, consts: [[1, "d-md-flex", "h-md-100", "align-items-center"], [1, "col-md-6", "p-0", "bg-1", "h-md-100"], [1, "text-white", "d-md-flex", "align-items-center", "h-100", "p-5", "text-center", "justify-content-center"], [1, "about", "pt-5", "pb-5"], [1, "col-md-6", "p-0", "bg-white", "h-md-100", "border-bottom", 2, "overflow-y", "scroll"], [1, "d-md-flex", "h-md-100", "p-5", "mt-4"], [1, "row"], [1, "col-12"], [1, "t1"], [1, "t2"], [1, "t1", "mt-5"], [1, "t3"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Hi! I am Kaizer, a Software Engineer based in Singapore. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I have a strong passion in problem-solving and self-learning. I work on mobile, web and software development. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " I'm currently a penultimate student at the National University of Singapore, majoring in Information Systems under the School of Computing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " I also hold a Diploma with Merit in Information Technology from Ngee Ann Polytechnic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Experiences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Software Engineer Intern, Flex-Solver [May 21 - Jul 21] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "I worked on the front-end, primarily with Angular.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Mobile Software Engineer Intern, Community Chest [May 16 - Sep 16] ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Part of a team of 2 to plan, design and develop a fully functional Android mobile application in 6 months. Went through the full Agile SDLC. Developed in Java with Android Studio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tech & Tools");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Java, C#, C++, JavaScript, SQL, PostgreSQL, Node, Express, ASP.NET, Angular, React, Android, DirectX, Git, Jira Photoshop, Final Cut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 768px) {\n  .h-md-100[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n.bg-1[_ngcontent-%COMP%] {\n  background: #d7a991;\n}\n\n.about[_ngcontent-%COMP%] {\n  font-family: \"tBold\", \"arial\", sans-serif;\n  font-size: 30px;\n}\n\n.t1[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 20px;\n}\n\n.t2[_ngcontent-%COMP%] {\n  font-family: \"tReg\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n\n.t3[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkNBQTZDO0VBQzdDLGVBQWU7QUFDakIiLCJmaWxlIjoiYWJvdXQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaC1tZC0xMDAge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cblxuLmJnLTEge1xuICBiYWNrZ3JvdW5kOiAjZDdhOTkxO1xufVxuXG4uYWJvdXQge1xuICBmb250LWZhbWlseTogXCJ0Qm9sZFwiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnQxIHtcbiAgZm9udC1mYW1pbHk6IFwidFNlbWlCb2xkXCIsIFwiYXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udDIge1xuICBmb250LWZhbWlseTogXCJ0UmVnXCIsIFwiYXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udDMge1xuICBmb250LWZhbWlseTogXCJ0U2VtaUJvbGRcIiwgXCJhcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-work/my-work.component */ "dEFO");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");






class AppComponent {
    constructor() {
        this.title = "Kaizer's";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about-me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-my-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact-me");
    } }, directives: [_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__["LandingComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_2__["AboutMeComponent"], _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_3__["MyWorkComponent"], _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_4__["ContactMeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me/about-me.component */ "NgH1");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-work/my-work.component */ "dEFO");
/* harmony import */ var _my_work_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-work/project-card/project-card.component */ "/PVC");
/* harmony import */ var _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact-me/contact-me.component */ "nZZ6");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_6__["MyWorkComponent"], _my_work_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"], _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__["ContactMeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"], _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], _my_work_my_work_component__WEBPACK_IMPORTED_MODULE_6__["MyWorkComponent"], _my_work_project_card_project_card_component__WEBPACK_IMPORTED_MODULE_7__["ProjectCardComponent"], _contact_me_contact_me_component__WEBPACK_IMPORTED_MODULE_8__["ContactMeComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "dEFO":
/*!**********************************************!*\
  !*** ./src/app/my-work/my-work.component.ts ***!
  \**********************************************/
/*! exports provided: MyWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkComponent", function() { return MyWorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-card/project-card.component */ "/PVC");




function MyWorkComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-project-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.projects[i_r2].title)("desc", ctx_r0.projects[i_r2].desc)("thumbnailImg", ctx_r0.projects[i_r2].thumbnailUrl)("viewLink", ctx_r0.projects[i_r2].viewLink);
} }
class MyWorkComponent {
    constructor() {
        this.projects = [];
    }
    ngOnInit() {
        this.projects.push({
            title: 'Make-it-an-album',
            desc: 'Node App w/ JIMP API',
            thumbnailUrl: '',
            viewLink: '',
        });
        this.projects.push({
            title: 'NutriFood (First Runner-up Winner)',
            desc: 'Angular + Java EE App',
            thumbnailUrl: './assets/imgs/work/nutrifood.gif',
            viewLink: 'https://uvents.nus.edu.sg/event/18th-steps/module/IS3106/project/5',
        });
        this.projects.push({
            title: '6MWT (First Runner-up Winner)',
            desc: 'React Native Mobile App w/ Singhealth',
            thumbnailUrl: './assets/imgs/work/6mwt.gif',
            viewLink: 'https://uvents.nus.edu.sg/event/18th-steps/module/IS4250/project/4',
        });
        this.projects.push({
            title: 'Spotify Message',
            desc: 'React Web App integrating the Spotify API',
            thumbnailUrl: './assets/imgs/work/spotifymessage.jpeg',
            viewLink: 'https://devpost.com/software/spotify-message',
        });
        this.projects.push({
            title: 'pewpew',
            desc: 'MEAN Stack Web App for NUS Orbital',
            thumbnailUrl: './assets/imgs/work/pewpew.png',
            viewLink: '',
        });
        this.projects.push({
            title: 'ESCAPE!',
            desc: 'Top-down 2D Arcade Game w/ DirectX',
            thumbnailUrl: './assets/imgs/work/escape.png',
            viewLink: '',
        });
        this.projects.push({
            title: 'ARRR!!!',
            desc: '2D Arcade Game w/ DirectX',
            thumbnailUrl: './assets/imgs/work/arrr.png',
            viewLink: '',
        });
        this.projects.push({
            title: 'Compassionate Delights',
            desc: 'Native Android Mobile App to encourage donations for the Community Chest.',
            thumbnailUrl: './assets/imgs/work/compassionatedelights.png',
            viewLink: '',
        });
    }
}
MyWorkComponent.ɵfac = function MyWorkComponent_Factory(t) { return new (t || MyWorkComponent)(); };
MyWorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyWorkComponent, selectors: [["app-my-work"]], decls: 8, vars: 1, consts: [[1, "row"], [1, "col-12"], [1, "bg-1"], [1, "d-md-flex", "align-items-center", "h-100", "text-center", "justify-content-center"], [1, "about", "pt-5", "pb-5"], [1, "row", "text-center"], [4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-4", "col-xl-3"], [3, "title", "desc", "thumbnailImg", "viewLink"]], template: function MyWorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "PROJECTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MyWorkComponent_ng_container_7_Template, 3, 4, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _project_card_project_card_component__WEBPACK_IMPORTED_MODULE_2__["ProjectCardComponent"]], styles: [".bg-1[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\n.about[_ngcontent-%COMP%] {\n  font-family: \"tBold\", \"arial\", sans-serif;\n  font-size: 30px;\n}\n\n.t1[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 20px;\n}\n\n.t2[_ngcontent-%COMP%] {\n  font-family: \"tReg\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n\n.t3[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL215LXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7RUFDQSxlQUFBO0FBQ0YiLCJmaWxlIjoibXktd29yay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy0xIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmFib3V0IHtcbiAgZm9udC1mYW1pbHk6IFwidEJvbGRcIiwgXCJhcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBcInRTZW1pQm9sZFwiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFwidFJlZ1wiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnQzIHtcbiAgZm9udC1mYW1pbHk6IFwidFNlbWlCb2xkXCIsIFwiYXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-my-work',
                templateUrl: './my-work.component.html',
                styleUrls: ['./my-work.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nZZ6":
/*!****************************************************!*\
  !*** ./src/app/contact-me/contact-me.component.ts ***!
  \****************************************************/
/*! exports provided: ContactMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactMeComponent", function() { return ContactMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactMeComponent.ɵfac = function ContactMeComponent_Factory(t) { return new (t || ContactMeComponent)(); };
ContactMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactMeComponent, selectors: [["app-contact-me"]], decls: 20, vars: 0, consts: [[1, "d-md-flex", "h-md-100", "align-items-center"], [1, "col-md-6", "p-0", "bg-1", "h-md-100"], [1, "text-white", "d-md-flex", "align-items-center", "h-100", "p-5", "text-center", "justify-content-center"], [1, "about", "pt-5", "pb-5"], [1, "col-md-6", "p-0", "bg-white", "h-md-100", 2, "overflow-y", "scroll"], [1, "d-md-flex", "h-md-100", "p-5", "mt-4"], [1, "row"], [1, "col-12"], [1, "t1"], [1, "t2"], [1, "t1", "mt-5"]], template: function ContactMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hit me up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I am available for freelance projects or internship/full-time opportunities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "@ Kaizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Software Engineer. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " quekkaizer@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media (min-width: 768px) {\n  .h-md-100[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n\n.bg-1[_ngcontent-%COMP%] {\n  background: #2c232e;\n}\n\n.about[_ngcontent-%COMP%] {\n  font-family: \"tBold\", \"arial\", sans-serif;\n  font-size: 30px;\n}\n\n.t1[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 20px;\n}\n\n.t2[_ngcontent-%COMP%] {\n  font-family: \"tReg\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n\n.t3[_ngcontent-%COMP%] {\n  font-family: \"tSemiBold\", \"arial\", sans-serif;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2Q0FBNkM7RUFDN0MsZUFBZTtBQUNqQiIsImZpbGUiOiJjb250YWN0LW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmgtbWQtMTAwIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5cbi5iZy0xIHtcbiAgYmFja2dyb3VuZDogIzJjMjMyZTtcbn1cblxuLmFib3V0IHtcbiAgZm9udC1mYW1pbHk6IFwidEJvbGRcIiwgXCJhcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi50MSB7XG4gIGZvbnQtZmFtaWx5OiBcInRTZW1pQm9sZFwiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnQyIHtcbiAgZm9udC1mYW1pbHk6IFwidFJlZ1wiLCBcImFyaWFsXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnQzIHtcbiAgZm9udC1mYW1pbHk6IFwidFNlbWlCb2xkXCIsIFwiYXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-me',
                templateUrl: './contact-me.component.html',
                styleUrls: ['./contact-me.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map