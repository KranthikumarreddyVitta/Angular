(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-src-lib-dashboard-module"],{

/***/ "CpuW":
/*!*********************************************************!*\
  !*** ./projects/dashboard/src/lib/dashboard.routing.ts ***!
  \*********************************************************/
/*! exports provided: dashboardRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardRouting", function() { return dashboardRouting; });
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "hTSy");

const dashboardRouting = [
    {
        path: '',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
    },
];


/***/ }),

/***/ "HKGk":
/*!********************************************************!*\
  !*** ./projects/dashboard/src/lib/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "hTSy");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.routing */ "CpuW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_6__["dashboardRouting"]),
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]], exports: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]] }); })();


/***/ }),

/***/ "baKp":
/*!*********************************************************!*\
  !*** ./projects/dashboard/src/lib/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");


class DashboardService {
    constructor(_http, _env, _user) {
        this._http = _http;
        this._env = _env;
        this._user = _user;
    }
    getDashboardData() {
        return this._http.sendGETRequest(this._env.getEndPoint() +
            'getDashboard?supplier_id=' +
            this._user.getUser().getSupplierId() +
            '&roll_type=' +
            this._user.getUser().getRole() +
            '&user_id=' +
            this._user.getUser().getId());
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "hTSy":
/*!********************************************************************************!*\
  !*** ./projects/dashboard/src/lib/components/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dashboard.service */ "baKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DashboardComponent_mat_grid_tile_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", tile_r1.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/dashboard/images/" + tile_r1.imgPath + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tile_r1.text, " ");
} }
class DashboardComponent {
    constructor(_dashboardService, _router) {
        this._dashboardService = _dashboardService;
        this._router = _router;
        this.dashboardData = null;
        this.tiles = [
            {
                text: 'Rest & Relaxation',
                cols: 2,
                rows: 1,
                color: 'lightblue',
                imgPath: '5450121',
            },
            {
                text: 'Apéritif',
                cols: 1,
                rows: 1,
                color: 'lightgreen',
                imgPath: '279648',
            },
            {
                text: 'Beach Retreat',
                cols: 1,
                rows: 2,
                color: 'lightpink',
                imgPath: '1374125',
            },
            {
                text: 'Sunlit Sunday',
                cols: 1,
                rows: 1,
                color: '#DDBDF1',
                imgPath: '3209045',
            },
            {
                text: 'Amuse-Bouche',
                cols: 2,
                rows: 1,
                color: '#DDBDF1',
                imgPath: '3209041',
            },
        ];
    }
    ngOnInit() {
        this.getDashboardData();
    }
    getDashboardData() {
        this._dashboardService.getDashboardData().subscribe((data) => {
            this.dashboardData = data;
        });
    }
    gotoPage(route) {
        this._router.navigate([route]);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["lib-dashboard"]], decls: 63, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "start none", 1, "dash"], [1, "dash__heading"], [1, "dash__heading--sub"], [1, "dash__heading--sub-1"], [1, "dash__heading--sub-2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dash__items"], ["fxFlex", "20", "fxLayout", "column"], ["fxFlex", "80", "src", "assets/dashboard/images/shop.png", "alt", ""], ["fxFlex", "", "mat-flat-button", "", "color", "accent", 1, "dash__items--text", 3, "click"], ["mat-fab", "", 1, "dash__items--fab"], ["fxFlex", "80", "src", "assets/moodboard/images/mb.png", "alt", ""], ["fxFlex", "80", "src", "assets/quote/images/quote-icon.png", "alt", ""], ["fxFlex", "80", "src", "assets/order/images/order-icon.png", "alt", ""], ["fxLayout", "column", 1, "dash__section"], ["fxFlex", "20", "fxLayout", "column", "fxLayoutAlign", "end start", 1, "dash__section--header"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 1, "dash__section--body"], ["gutterSize", "1rem", "fxFlex", "", "cols", "4", "rowHeight", "250px", 1, "list"], ["class", "grid", 3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "dash__section", "section__rooms"], ["fxFlex", "", "fxLayout", "column", 1, "dash__section--body"], ["fxLayout", "row", "fxLayoutGap", "1rem", 1, "dash__section--body-container"], ["fxFlex", "23", "fxLayout", "column", 1, "rooms"], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-04.png", "alt", ""], ["fxFlex", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-01.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-02.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-03.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-05.png", "alt", ""], [1, "grid", 3, "colspan", "rowspan"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [1, "grid__text"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "INHABITR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "BUSINESS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_10_listener() { return ctx.gotoPage("shop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " SHOP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_16_listener() { return ctx.gotoPage("moodboard"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " MOODBOARD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_22_listener() { return ctx.gotoPage("quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " MY QUOTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_28_listener() { return ctx.gotoPage("order"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " ORDER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "START WITH LOOK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-grid-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, DashboardComponent_mat_grid_tile_36_Template, 4, 6, "mat-grid-tile", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "START WITH A ROOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Dining Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Living Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Bedroom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Home Office");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Dining Room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dashboardData == null ? null : ctx.dashboardData.totalMoodboard, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.dashboardData == null ? null : ctx.dashboardData.totalPublicQuotes) + "/" + (ctx.dashboardData == null ? null : ctx.dashboardData.totalQuotes), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.dashboardData == null ? null : ctx.dashboardData.totalOrderCreated) || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tiles);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], styles: [".dash__heading[_ngcontent-%COMP%] {\n  height: 500px;\n  background-image: url('home.png');\n  background-position: center;\n  position: relative;\n}\n.dash__heading--sub[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 60%;\n}\n.dash__heading--sub-1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  letter-spacing: 0.16em;\n  font-weight: 900;\n  line-height: 5rem;\n}\n.dash__heading--sub-2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  letter-spacing: 0.39em;\n}\n.dash__section.section__rooms[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n.dash__section--header[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 900;\n  padding-left: 2rem;\n  padding-top: 3rem;\n}\n.dash__section--header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1rem solid #5296e5;\n}\n.dash__section--body[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 1rem 1rem 0 1rem;\n  min-height: 350px;\n}\n.dash__section--body-container[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 1rem;\n  padding-bottom: 2rem;\n  overflow-x: scroll;\n}\n.dash__section--body-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1), -4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.dash__items[_ngcontent-%COMP%] {\n  padding: 0 10rem;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -50px;\n  z-index: 999;\n  background-color: white;\n  height: 200px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -13%;\n  padding: 1.5rem;\n  background: #3e3e3e;\n  border-radius: 50%;\n  top: -13%;\n  color: #ffffff;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: inherit;\n  padding: 2rem 2rem 0 2rem;\n}\n.dash__items--fab[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -25px;\n  top: -25px;\n  background-color: black;\n  color: white;\n}\n.dash__items--text[_ngcontent-%COMP%] {\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  margin: 0.5rem 1rem -1rem 1rem;\n  border-radius: 30px;\n}\n.rooms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding: 1rem;\n  letter-spacing: 0.05em;\n}\n.grid[_ngcontent-%COMP%] {\n  background-color: yellow;\n  width: 200px;\n}\n.grid__text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  background-color: #febf2d;\n}\n.list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlFO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUhKO0FBSUk7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRk47QUFHTTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFEUjtBQUdNO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRFI7QUFNSTtFQUNFLG9CQUFBO0FBSk47QUFNSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQUtNO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0FBSFI7QUFNSTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUpOO0FBS007RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSFI7QUFJUTtFQUNFLHVCQUFBO0VBQ0EsNElBQUE7RUFHQSxtQkFBQTtBQUpWO0FBU0U7RUFDRSxnQkFBQTtBQVBKO0FBUUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGdKQUFBO0VBR0Esa0JBQUE7QUFSTjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQVBSO0FBU007RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUFQUjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQVJOO0FBVUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVJOO0FBY0U7RUFFRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWko7QUFlQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWEo7QUFlQTtFQUNFLFdBQUE7QUFaRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbn1cclxuXHJcbi5kYXNoIHtcclxuICAmX19oZWFkaW5nIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmLS1zdWIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMjUlO1xyXG4gICAgICBsZWZ0OiA2MCU7XHJcbiAgICAgICYtMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE2ZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmLTIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zOWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX3NlY3Rpb24ge1xyXG4gICAgJi5zZWN0aW9uX19yb29tcyB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgJi0taGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XHJcbiAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFyZW0gc29saWQgIzUyOTZlNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tYm9keSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbSAwIDFyZW07XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gICAgICAmLWNvbnRhaW5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgICAgICAmIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgICAgICAgICAgLTRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgICAgICAgICAgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9faXRlbXMge1xyXG4gICAgcGFkZGluZzogMCAxMHJlbTtcclxuICAgIGRpdiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgNHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IC00cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgLTRweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTMlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjM2UzZTNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0b3A6IC0xMyU7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDAgMnJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi0tZmFiIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogLTI1cHg7XHJcbiAgICAgIHRvcDogLTI1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAmLS10ZXh0IHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICBtYXJnaW46IDAuNXJlbSAxcmVtIC0xcmVtIDFyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yb29tcyB7XHJcbiAgLy8gICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHNwYW4ge1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgfVxyXG59XHJcbi5ncmlkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gICZfX3RleHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWJmMmQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlzdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=dashboard-src-lib-dashboard-module.js.map