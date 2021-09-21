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
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["lib-dashboard"]], decls: 63, vars: 4, consts: [["fxLayout", "column", "fxLayoutAlign", "start none", 1, "dash"], [1, "dash__heading"], [1, "dash__heading--sub"], [1, "dash__heading--sub-1"], [1, "dash__heading--sub-2"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "dash__items"], ["fxFlex", "17", "fxLayout", "column"], ["fxFlex", "80", "src", "assets/dashboard/images/Shop.svg", "alt", ""], ["fxFlex", "", "mat-flat-button", "", "color", "accent", 1, "dash__items--text", 3, "click"], ["mat-fab", "", 1, "dash__items--fab"], ["fxFlex", "80", "src", "assets/dashboard/images/moodboard.svg", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/quote.svg", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/order.svg", "alt", ""], ["fxLayout", "column", 1, "dash__section"], ["fxFlex", "20", "fxLayout", "column", "fxLayoutAlign", "end start", 1, "dash__section--header"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 1, "dash__section--body"], ["gutterSize", "1rem", "fxFlex", "", "cols", "4", "rowHeight", "250px", 1, "list"], ["class", "grid", 3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "dash__section", "section__rooms"], ["fxFlex", "", "fxLayout", "column", 1, "dash__section--body"], ["fxLayout", "row", "fxLayoutGap", "2rem", 1, "dash__section--body-container"], ["fxLayout", "column", 1, "rooms"], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-04.png", "alt", ""], ["fxFlex", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-01.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-02.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-03.png", "alt", ""], ["fxFlex", "80", "src", "assets/dashboard/images/Categories-05.png", "alt", ""], [1, "grid", 3, "colspan", "rowspan"], ["width", "100%", "height", "100%", "alt", "", 3, "src"], [1, "grid__text"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"]], styles: [".dash__heading[_ngcontent-%COMP%] {\n  height: 400px;\n  background-image: url('home.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n}\n.dash__heading--sub[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 25%;\n  left: 60%;\n}\n.dash__heading--sub-1[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  letter-spacing: 0.16em;\n  font-weight: 900;\n  line-height: 5rem;\n}\n.dash__heading--sub-2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  letter-spacing: 0.39em;\n}\n.dash__section.section__rooms[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n.dash__section--header[_ngcontent-%COMP%] {\n  font-size: 1.5625rem;\n  font-family: \"Brandon Grotesque-bld\";\n  font-weight: 900;\n  padding-left: 4rem;\n  padding-top: 3rem;\n}\n.dash__section--header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: inherit;\n  padding: 1rem 3rem 1rem 0;\n  border-bottom: 1rem solid #5296e5;\n}\n.dash__section--body[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 3rem;\n  min-height: 400px;\n}\n.dash__section--body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #febf2d !important;\n  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15) !important;\n}\n.dash__section--body[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 14px !important;\n}\n.dash__section--body-container[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 1rem;\n  padding-bottom: 2rem;\n  overflow-x: scroll;\n}\n.dash__section--body-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1), -4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  width: 13.75rem;\n}\n.dash__items[_ngcontent-%COMP%] {\n  padding: 0 10rem;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: -85px;\n  z-index: 999;\n  background-color: white;\n  height: 150px;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -13%;\n  padding: 1.5rem;\n  background: #3e3e3e;\n  border-radius: 50%;\n  top: -13%;\n  color: #ffffff;\n}\n.dash__items[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: inherit;\n  padding: 3rem 3rem 1rem 3rem;\n}\n.dash__items--fab[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -25px;\n  top: -25px;\n  background-color: black;\n  color: white;\n}\n.dash__items--text[_ngcontent-%COMP%] {\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  margin: 0.5rem 1rem -1rem 1rem;\n  border-radius: 30px;\n  font-family: \"Brandon Grotesque-bld\";\n}\n.rooms[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5625rem;\n  padding: 1rem;\n  letter-spacing: 0.05em;\n}\n.grid[_ngcontent-%COMP%] {\n  background-color: yellow;\n  width: 200px;\n}\n.grid__text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  background-color: #febf2d;\n}\n.list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBR007RUFDRSxlQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQU1JO0VBQ0Usb0JBQUE7QUFKTjtBQU1JO0VBQ0Usb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUpOO0FBS007RUFDRSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUFIUjtBQU1JO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFKTjtBQUtNO0VBQ0UsOEJBQUE7RUFDQSw0REFBQTtBQUhSO0FBS007RUFDRSx1QkFBQTtBQUhSO0FBS007RUFFRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBSlI7QUFLUTtFQUNFLHVCQUFBO0VBQ0EsNElBQUE7RUFHQSxtQkFBQTtFQUNBLGVBQUE7QUFMVjtBQVVFO0VBQ0UsZ0JBQUE7QUFSSjtBQVNJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnSkFBQTtFQUdBLGtCQUFBO0FBVE47QUFVTTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFSUjtBQVVNO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0FBUlI7QUFXSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFUTjtBQVdJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtBQVROO0FBZUU7RUFDRSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBWko7QUFlQTtFQUNFLHdCQUFBO0VBQ0EsWUFBQTtBQVpGO0FBYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWEo7QUFlQTtFQUNFLFdBQUE7QUFaRiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbn1cclxuXHJcbi5kYXNoIHtcclxuICAmX19oZWFkaW5nIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICYtLXN1YiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNSU7XHJcbiAgICAgIGxlZnQ6IDYwJTtcclxuICAgICAgJi0xIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG4gICAgICB9XHJcbiAgICAgICYtMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjM5ZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJl9fc2VjdGlvbiB7XHJcbiAgICAmLnNlY3Rpb25fX3Jvb21zIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDVyZW07XHJcbiAgICB9XHJcbiAgICAmLS1oZWFkZXIge1xyXG4gICAgICBmb250LXNpemU6IDEuNTYyNXJlbTtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiQnJhbmRvbiBHcm90ZXNxdWUtYmxkXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHJlbTtcclxuICAgICAgcGFkZGluZy10b3A6IDNyZW07XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gM3JlbSAxcmVtIDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXJlbSBzb2xpZCAjNTI5NmU1O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1ib2R5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICYgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlYmYyZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCA0cHggNHB4IHJnYigwIDAgMCAvIDE1JSkgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAmIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgICYtY29udGFpbmVyIHtcclxuICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgICAgICYgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgICAtNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgICAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDEzLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19pdGVtcyB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcmVtO1xyXG4gICAgZGl2IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtODVweDtcclxuICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICA0cHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggLTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICAtNHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IC0xMyU7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzZTNlM2U7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRvcDogLTEzJTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtIDNyZW0gMXJlbSAzcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1mYWIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjVweDtcclxuICAgICAgdG9wOiAtMjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICYtLXRleHQge1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgIG1hcmdpbjogMC41cmVtIDFyZW0gLTFyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiQnJhbmRvbiBHcm90ZXNxdWUtYmxkXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yb29tcyB7XHJcbiAgLy8gICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHNwYW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjU2MjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICB9XHJcbn1cclxuLmdyaWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgJl9fdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlYmYyZDtcclxuICB9XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=dashboard-src-lib-dashboard-module.js.map