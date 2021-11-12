(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["moodboard-src-lib-moodboard-module"],{

/***/ "8jvR":
/*!********************************************************!*\
  !*** ./projects/moodboard/src/lib/moodboard.module.ts ***!
  \********************************************************/
/*! exports provided: MoodboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodboardModule", function() { return MoodboardModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_moodboard_list_moodboard_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/moodboard-list/moodboard-list.component */ "Dlam");
/* harmony import */ var _moodboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moodboard-routing */ "l95d");
/* harmony import */ var _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/moodboard/moodboard.component */ "RhC9");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/create-moodboard/create-moodboard.component */ "g1sW");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_create_moodboard_popup_create_moodboard_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/create-moodboard-popup/create-moodboard-popup.component */ "c2mM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");


























class MoodboardModule {
}
MoodboardModule.ɵfac = function MoodboardModule_Factory(t) { return new (t || MoodboardModule)(); };
MoodboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: MoodboardModule });
MoodboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ imports: [[
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__["InfiniteScrollModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_moodboard_routing__WEBPACK_IMPORTED_MODULE_2__["moodboardRoutes"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](MoodboardModule, { declarations: [_components_moodboard_list_moodboard_list_component__WEBPACK_IMPORTED_MODULE_1__["MoodboardListComponent"],
        _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_3__["MoodboardComponent"],
        _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_11__["CreateMoodboardComponent"],
        _components_create_moodboard_popup_create_moodboard_popup_component__WEBPACK_IMPORTED_MODULE_20__["CreateMoodboardPopupComponent"]], imports: [projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_22__["MatStepperModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__["InfiniteScrollModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Dlam":
/*!******************************************************************************************!*\
  !*** ./projects/moodboard/src/lib/components/moodboard-list/moodboard-list.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MoodboardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodboardListComponent", function() { return MoodboardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/src/lib/components/banner/banner.component */ "zukg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");











function MoodboardListComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r2.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.project_name);
} }
function MoodboardListComponent_mat_tab_15_ng_container_2_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Business Inhabitr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoodboardListComponent_mat_tab_15_ng_container_2_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PDM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MoodboardListComponent_mat_tab_15_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Source: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoodboardListComponent_mat_tab_15_ng_container_2_div_15_div_3_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MoodboardListComponent_mat_tab_15_ng_container_2_div_15_div_4_Template, 2, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.application_type == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.application_type == 1);
} }
function MoodboardListComponent_mat_tab_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodboardListComponent_mat_tab_15_ng_container_2_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r6 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.mbDetails(item_r6.sgid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Board Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MoodboardListComponent_mat_tab_15_ng_container_2_div_15_Template, 5, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r6 == null ? null : item_r6.boardname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", (item_r6 == null ? null : item_r6.is_moodboard_images == null ? null : item_r6.is_moodboard_images.large) ? item_r6 == null ? null : item_r6.is_moodboard_images == null ? null : item_r6.is_moodboard_images.large : ctx_r5.defaultImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.boardname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r6.user == null ? null : item_r6.user.first_name) + " " + (item_r6.user == null ? null : item_r6.user.last_name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.isInternal);
} }
function MoodboardListComponent_mat_tab_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoodboardListComponent_mat_tab_15_ng_container_2_Template, 16, 5, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tabContent);
} }
class MoodboardListComponent {
    constructor(moodboardService, router, _user) {
        this.moodboardService = moodboardService;
        this.router = router;
        this._user = _user;
        this.bannerIconImg = 'assets/moodboard/images/moodboard.svg';
        this.bannerIconImgTxt = 'Moodboard';
        this.bannerImgTxt = 'Moodboard';
        this.bannerImg = 'assets/moodboard/images/mb-banner.jpg';
        this.bannerTxt = 'MoodBoard';
        this.bannerBottomTxt = 'Style & create look from our collection of designer furniture';
        this.tabsData = [{ title: 'All Moodboards', content: '' }, { title: 'My Moodboards', content: '' }, { title: 'Disabled Moodboards', content: '' }];
        this.tabContent = [];
        this.projectList = [];
        this.projectName = '';
        this.selectedIndex = 0;
        this.defaultImg = "https://inhabitr-furniture-prod.s3.amazonaws.com/noimage.jpg";
        this.isInternal = false;
    }
    ngOnInit() {
        this.getMoodBoardList();
        this.getProjectList();
        this.isInternal = this._user.getUser().isInternalUser();
    }
    mbDetails(id) {
        this.router.navigateByUrl('/moodboard/' + id);
    }
    projectFilter(ev) {
        this.projectName = ev === null || ev === void 0 ? void 0 : ev.target.value;
        this.onTabChanged({ index: this.selectedIndex });
    }
    getProjectList() {
        this.moodboardService.getProjectList().subscribe((response) => {
            this.projectList = response.moodboardProject;
        });
    }
    getMoodBoardList() {
        let param = { supplier_id: 0, project_name: this.projectName };
        this.moodboardService.getMoodBoardList(param).subscribe((response) => {
            this.tabContent = response.result;
        });
    }
    onTabChanged(ev) {
        if (ev.index == 1) {
            this.getMyMoodBoardList();
        }
        if (ev.index == 2) {
            this.getDisabledMBList();
        }
        if (ev.index == 0) {
            this.getMoodBoardList();
        }
    }
    createMB() {
        this.router.navigate(['moodboard/create']);
    }
    getMyMoodBoardList() {
        let param = { supplier_id: 0, project_name: this.projectName };
        this.moodboardService.getMyMoodBoardList(param).subscribe((response) => {
            this.tabContent = response.result;
        });
    }
    getDisabledMBList() {
        let param = { supplier_id: 0, project_name: this.projectName };
        this.moodboardService.getDisabledMBList(param).subscribe((response) => {
            this.tabContent = response.result;
        });
    }
}
MoodboardListComponent.ɵfac = function MoodboardListComponent_Factory(t) { return new (t || MoodboardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_1__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
MoodboardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoodboardListComponent, selectors: [["lib-moodboard-list"]], decls: 16, vars: 8, consts: [[3, "iconSrc", "iconAltTxt", "leftTxt", "src", "altTxt", "bottomTxt"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create", 3, "click"], ["mat-button", "", "mat-raised-button", ""], ["inline", "true"], [1, "mb-create-text", "h2"], [1, "vertical"], ["fxFlex", "40", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create"], [3, "change"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["color", "accent", "mat-align-tabs", "center", 1, "tabs", 3, "selectedTabChange"], [3, "label", 4, "ngFor", "ngForOf"], [3, "value"], [3, "label"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center", 1, "tabs-container"], [4, "ngFor", "ngForOf"], ["fxFlex", "30", 1, "tile", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "card"], ["width", "100%", "height", "300px", 3, "src", "alt"], [1, "content"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], [1, "h3"], [1, ""], ["fxLayout", "row", "class", "text", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 4, "ngIf"], ["class", "", 4, "ngIf"]], template: function MoodboardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodboardListComponent_Template_div_click_2_listener() { return ctx.createMB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create a new Moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MoodboardListComponent_Template_select_change_10_listener($event) { return ctx.projectFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MoodboardListComponent_option_13_Template, 2, 2, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function MoodboardListComponent_Template_mat_tab_group_selectedTabChange_14_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MoodboardListComponent_mat_tab_15_Template, 3, 2, "mat-tab", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconSrc", ctx.bannerIconImg)("iconAltTxt", ctx.bannerIconImgTxt)("leftTxt", "MoodBoard")("src", ctx.bannerImg)("altTxt", ctx.bannerImgTxt)("bottomTxt", ctx.bannerBottomTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsData);
    } }, directives: [_core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]], styles: [".mb-create[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n}\n.mb-create[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.45);\n  border-radius: 10px;\n}\n.mb-create[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  font-size: 32px;\n}\n.mb-create-text[_ngcontent-%COMP%] {\n  letter-spacing: 0.12em;\n}\n.mb-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.mb-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.mb[_ngcontent-%COMP%]   .mb-create[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.tile[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.tabs[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding-top: 1rem;\n}\n.tabs-container[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  background: white;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-start-start-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  letter-spacing: 0.05em;\n  color: #000000;\n}\n.vertical[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #bababa;\n  height: 90px;\n  margin-right: 2.5rem;\n  margin-left: 3.5rem;\n}\n[_nghost-%COMP%]     .mat-tab-label-active {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]     .mat-tab-label-content {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n  font-weight: bold;\n  font-size: 16px;\n}\n[_nghost-%COMP%]     .mat-tab-label:first-child {\n  margin-right: 70px;\n}\n[_nghost-%COMP%]     .mat-tab-label:last-child {\n  margin-left: 70px;\n}\n[_nghost-%COMP%]     .mat-tab-labels {\n  padding: 10px;\n}\n[_nghost-%COMP%]     .mat-select-arrow {\n  opacity: 0;\n}\nselect[_ngcontent-%COMP%] {\n  width: 80% !important;\n  background: url('dropdownyellow.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 10px;\n  border: none;\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vb2Rib2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLG1CQUFBO0FBQ047QUFBTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRVI7QUFDSTtFQUNFLHNCQUFBO0FBQ047QUFFRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUVFO0VBQ0UsZUFBQTtBQUFKO0FBR0E7RUFDRSxtQkFBQTtBQUFGO0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLGVBQUE7QUFFSjtBQUNBO0VBQ0UsMkNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFERTtFQUNFLCtCQUFBO0VBQ0EsNkJBQUE7QUFHSjtBQUFBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUdGO0FBREE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQUlGO0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBSUY7QUFEQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSUY7QUFBRTtFQUNFLGtCQUFBO0FBR0o7QUFERTtFQUNFLGlCQUFBO0FBR0o7QUFDQTtFQUNFLGFBQUE7QUFFRjtBQUNBO0VBQ0UsVUFBQTtBQUVGO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLDhEQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQUVGIiwiZmlsZSI6Im1vb2Rib2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iIHtcclxuICAmLWNyZWF0ZSB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICAubWF0LWJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1maWx0ZXIge1xyXG4gICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi4wNjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYi1jcmVhdGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG4udGlsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG4udGFicyB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAmLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgfVxyXG59XHJcbi5jYXJkIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1zdGFydC1zdGFydC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICB9XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi52ZXJ0aWNhbCB7XHJcbiAgd2lkdGg6IDFweDtcclxuICBiYWNrZ3JvdW5kOiAjYmFiYWJhO1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIuNXJlbTtcclxuICBtYXJnaW4tbGVmdDogMy41cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1jb250ZW50IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfVxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9kcm9wZG93bnllbGxvdy5zdmdcIikgbm8tcmVwZWF0IDk3JSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "RhC9":
/*!********************************************************************************!*\
  !*** ./projects/moodboard/src/lib/components/moodboard/moodboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: MoodboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodboardComponent", function() { return MoodboardComponent; });
/* harmony import */ var projects_quote_src_lib_common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component */ "Oq4D");
/* harmony import */ var projects_quote_src_lib_common_components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/quote/src/lib/common/components/addproduct/addproduct.component */ "IEgP");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var projects_shop_src_projects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/shop/src/projects */ "yisQ");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _core_src_lib_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../core/src/lib/components/search-bar/search-bar.component */ "VYpZ");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../../core/src/lib/cell-renderer/counter/counter.component */ "n7cx");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
































const _c0 = ["quickFilter"];
const _c1 = ["stepper"];
const _c2 = ["tabsReference"];
function MoodboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "Project Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx_r0.moodboardDetails == null ? null : ctx_r0.moodboardDetails.moodboard == null ? null : ctx_r0.moodboardDetails.moodboard.project_name);
} }
function MoodboardComponent_ng_container_42_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-card", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "img", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", item_r19.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", item_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r19.value);
} }
function MoodboardComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, MoodboardComponent_ng_container_42_mat_card_1_Template, 6, 3, "mat-card", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", item_r19.value == (ctx_r1.moodboardDetails == null ? null : ctx_r1.moodboardDetails.moodboard == null ? null : ctx_r1.moodboardDetails.moodboard.moodboard_type_name));
} }
function MoodboardComponent_ng_container_66_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_container_66_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28); const mbItem_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r26.deleteItem(mbItem_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function MoodboardComponent_ng_container_66_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "app-counter", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("counterChange", function MoodboardComponent_ng_container_66_Template_app_counter_counterChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r30); const mbItem_r23 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r29.increaseQuantity($event, mbItem_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](10, MoodboardComponent_ng_container_66_mat_icon_10_Template, 2, 0, "mat-icon", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const mbItem_r23 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("", mbItem_r23.button_type == 0 ? "Rent" : "Buy", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", mbItem_r23 == null ? null : mbItem_r23.variation.images[0].image_url.large, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", mbItem_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](mbItem_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("min", 1)("readOnly", true)("max", mbItem_r23 == null ? null : mbItem_r23.total_warehouse_quantity)("counter", mbItem_r23 == null ? null : mbItem_r23.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.userid == (mbItem_r23 == null ? null : mbItem_r23.userid));
} }
function MoodboardComponent_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qoute_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("value", qoute_r31.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate2"]("", qoute_r31.sgid, "-", qoute_r31.name, "");
} }
function MoodboardComponent_ng_container_92_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_container_92_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35); const city_r32 = ctx.$implicit; const i_r33 = ctx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r34.onCityChecked(city_r32, i_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", city_r32.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", city_r32.warehouse_name, " ");
} }
function MoodboardComponent_ng_container_104_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_container_104_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r39); const cat_r36 = ctx.$implicit; const i_r37 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r38.onCategoriesChecked(cat_r36, i_r37); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", cat_r36.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", cat_r36.name, " ");
} }
function MoodboardComponent_ng_container_149_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-grid-tile", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_container_149_Template_mat_grid_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r43); const item_r40 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r42.productDetails(item_r40, ctx_r42.moodboardDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-card", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](item_r40.total_warehouse_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("src", item_r40 == null ? null : item_r40.product_sku_vartion == null ? null : item_r40.product_sku_vartion.get_display_image[0] == null ? null : item_r40.product_sku_vartion.get_display_image[0].image_url == null ? null : item_r40.product_sku_vartion.get_display_image[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", item_r40.product_name);
} }
function MoodboardComponent_ng_template_151_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_151_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](153); return ctx_r44.scroll(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1, "View Moodboard Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} }
function MoodboardComponent_ng_template_174_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_174_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r50); const city_r47 = ctx.$implicit; const i_r48 = ctx.index; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r49.onCityChecked(city_r47, i_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", city_r47.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", city_r47.warehouse_name, " ");
} }
function MoodboardComponent_ng_template_174_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_174_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r51.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, MoodboardComponent_ng_template_174_ng_container_4_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r14.cityListDefault);
} }
function MoodboardComponent_ng_template_176_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_176_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r57); const cat_r54 = ctx.$implicit; const i_r55 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r56.onCategoriesChecked(cat_r54, i_r55); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", cat_r54.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", cat_r54.name, " ");
} }
function MoodboardComponent_ng_template_176_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_176_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r58.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, MoodboardComponent_ng_template_176_ng_container_4_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r16.catListDefault);
} }
function MoodboardComponent_ng_template_178_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_178_ng_container_52_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r69); const city_r66 = ctx.$implicit; const i_r67 = ctx.$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r68.onCityChecked(city_r66, i_r67); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", city_r66.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", city_r66.warehouse_name, " ");
} }
function MoodboardComponent_ng_template_178_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mat-checkbox", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_178_ng_container_70_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r73); const cat_r70 = ctx.$implicit; const i_r71 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2); return ctx_r72.onCategoriesChecked(cat_r70, i_r71); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("checked", cat_r70.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", cat_r70.name, " ");
} }
function MoodboardComponent_ng_template_178_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mat-horizontal-stepper", 104, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectionChange", function MoodboardComponent_ng_template_178_Template_mat_horizontal_stepper_selectionChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r74.selectionChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "h2", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r76.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-dialog-content", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "h1", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](9, "WANT TO FURNISH YOUR PROPERTY?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "h1", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, " Let\u2019s get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](12, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r77.goto(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](14, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](16, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](17, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](18, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r78.goto(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](20, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](24, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](25, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_div_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r79.goto(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](26, "img", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](28, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](30, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r80.goto(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](32, "img", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](34, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](36, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](37, "START");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](39, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](41, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](42, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](43, " Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](45, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r81.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](46, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "mat-dialog-content", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](50, " What locations you are looking to Furnish units in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](51, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](52, MoodboardComponent_ng_template_178_ng_container_52_Template, 3, 2, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](53, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](55, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](56, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](58, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](59, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](61, " Category ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](63, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r82.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](64, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](65, "mat-dialog-content", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](68, " Looking for products in any particular category?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, MoodboardComponent_ng_template_178_ng_container_70_Template, 3, 2, "ng-container", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](75, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](76, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](77, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](79, " Budget ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_81_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r83.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](82, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](83, "mat-dialog-content", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](86, "Is there a Budget Range you are working with?");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](87, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "mat-form-field", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "$ Starting from");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "input", 139, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function MoodboardComponent_ng_template_178_Template_input_input_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](92); const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r84.onMinPriceRangeChange(_r63.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](93, "mat-form-field", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](94, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](95, "$ Ending to");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](96, "input", 140, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function MoodboardComponent_ng_template_178_Template_input_input_96_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](97); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r85.onMaxPriceRangeChange(_r64.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](99, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](100, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](102, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](104, "img", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](105, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](106, " Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](108, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r86.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](109, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "mat-dialog-content", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](111, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "h2", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](113, " What is the minimum quantity you are interested in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](114, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "mat-form-field", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](117, "Miniumum Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](118, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function MoodboardComponent_ng_template_178_Template_input_input_118_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](119); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r87.onQtyChange(_r65.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](120, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "button", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_178_Template_button_click_121_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r75); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r88.filterProductPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](122, "FINISH");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("linear", false)("selectedIndex", ctx_r18.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r18.cityListDefault)("ngForAs", ctx_r18.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx_r18.catListDefault)("ngForAs", ctx_r18.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r18.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r18.max_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx_r18.min_price_inventory);
} }
const _c3 = ["*"];
class MoodboardComponent {
    constructor(moodboardService, activatedRoute, router, _pdf, _router, _dialog, _toaster, _user, _computationService, _coreService) {
        this.moodboardService = moodboardService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._pdf = _pdf;
        this._router = _router;
        this._dialog = _dialog;
        this._toaster = _toaster;
        this._user = _user;
        this._computationService = _computationService;
        this._coreService = _coreService;
        this.mbId = '';
        this.userid = null;
        this.selectedIndex = 0;
        this.startCount = 0;
        this.lastUserCount = 0;
        this.placeholder = 'Search Products';
        this.subscription = null;
        this.template = null;
        this.myStepper = null;
        this.tabsReference = null;
        this.agGrid = {};
        this.bannerIconImg = 'assets/moodboard/images/moodboard.svg';
        this.bannerIconImgTxt = 'Moodboard';
        this.moodboardDetails = '';
        this.mbQuotesList = [];
        this.stateList = [];
        this.selectedQuoteIdDD = 0;
        this.categoriesList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.catListDefault = [];
        this.selectedCategory = null;
        this.cityList = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.cityListDefault = [];
        this.selectedCity = [];
        this.min_price = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('');
        this.max_price = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControl"]('');
        this.min_price_inventory = '';
        this.searchTxt = null;
        this.items = [];
        // min_price_change :BehaviorSubject<any> = new BehaviorSubject(null);
        this.catagorydata = [
            {
                imageSrc: 'assets/moodboard/images/Categories-01.png',
                value: 'Living Room',
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-02.png',
                value: 'Bedroom',
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-03.png',
                value: 'Dining Room',
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-04.png',
                value: 'Office',
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-05.png',
                value: 'Outdoor',
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-06.png',
                value: 'Others',
            },
        ];
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ImageRendererComponent"],
            TotalCellRendererComponent: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_6__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_6__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["CounterComponent"],
        };
        this.pinnedBottomRowData = [
            {
                subTotal: 'abc',
                sgid: 'SUB TOTAL',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'DELIVERY FEE',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'TAXES',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'TOTAL',
                is_total: '0',
                isExtraRow: true,
            },
        ];
        this.columnDefs = [
            {
                field: 'sgid',
                width: 120,
                headerName: 'S. NO',
                headerTooltip: 'S.NO',
                colSpan: (params) => (params.data.subTotal === 'abc' ? 10 : 1),
                cellStyle: (params) => {
                    if (params.data.subTotal === 'abc') {
                        return { 'text-align': 'end' };
                    }
                    return '';
                },
            },
            { field: 'warehouse_name', headerName: 'CITY' },
            { field: 'sku', headerName: 'SKU' },
            {
                headerName: 'IMAGE',
                cellRenderer: 'ImageRendererComponent',
                field: 'variation.images[0].image_url.small',
                cellStyle: {
                    padding: '0.3rem',
                },
                valueGetter: (params) => {
                    var _a, _b, _c, _d;
                    return (_d = (_c = (_b = (_a = params.data) === null || _a === void 0 ? void 0 : _a.variation) === null || _b === void 0 ? void 0 : _b.images[0]) === null || _c === void 0 ? void 0 : _c.image_url) === null || _d === void 0 ? void 0 : _d.small;
                },
            },
            {
                headerName: 'PRODUCT NAME',
                field: 'name',
                width: '250px',
            },
            {
                headerName: 'TYPE',
                field: 'button_type',
                cellRenderer: 'ItemTypeCellRenderer',
                valueGetter: (params) => {
                    return params.data.button_type === 0 ? 'Rent' : 'Buy';
                },
            },
            {
                headerName: 'QUANTITY',
                field: 'is_qty',
                cellRenderer: 'CounterCellRenderer',
            },
            {
                headerName: 'BUY PRICE ($)',
                field: 'buy_price',
                valueGetter: (params) => {
                    return params.data.button_type === 1 ? params.data.buy_price : 'NA';
                },
            },
            {
                headerName: 'RENTAL PRICE/MONTH',
                field: 'price',
                cellRenderer: (params) => {
                    return params.data.button_type === 0 ? params.value : 'NA';
                },
            },
            // { headerName: 'DISCOUNT ($)', field: 'discount' },
            {
                headerName: 'MONTHS',
                field: 'months',
            },
            {
                headerName: 'TOTAL ($)',
                field: 'is_total',
                cellRenderer: 'TotalCellRendererComponent',
            },
        ];
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"]();
        this.gridOptions = {
            onGridReady: (api) => {
                this.agGrid = api;
                this.onGridReady(api);
            },
            rowHeight: 100,
            headerHeight: 100,
            getRowHeight: (params) => {
                var _a;
                return ((_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.isExtraRow) ? 50 : 100;
            },
        };
        this.defaultColDef = {
            wrapText: true,
            cellClass: 'grid-cell',
            cellStyle: {
                'line-height': 'normal',
                'align-items': 'center',
                'justify-content': 'center',
                display: 'flex',
                padding: '0 0.5rem',
            },
        };
        this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
        this.userid = this._user.getUser().getId();
    }
    ngAfterViewInit() {
        this.setProductTab(0);
    }
    onGridReady(evt) {
        this.agGrid = evt;
        evt.api.sizeColumnsToFit();
        this.rowData = this.getMoodboardSummary();
    }
    getMoodboardSummary() {
        return this.moodboardService.getMBSummary(this.mbId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((x) => {
            this.agGrid.api.redrawRows();
        }));
    }
    openModal(templateRef) {
        let dialogRef = this._dialog.open(templateRef, {
            width: '90%',
            maxHeight: '85vh',
            disableClose: true,
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    }
    closeModal() {
        this._dialog.closeAll();
    }
    updateBottomData(data) {
        var _a;
        this.pinnedBottomRowData[1].is_total = data === null || data === void 0 ? void 0 : data.delivery_fee;
        this.pinnedBottomRowData[2].sgid =
            'TAXES (' + ((_a = data === null || data === void 0 ? void 0 : data.states) === null || _a === void 0 ? void 0 : _a.sale_tax_rate) + '%)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[3].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
    }
    ngOnInit() {
        this.getMoodboard();
        this.getCity();
        this.getCategory();
        this.getItems();
        this.getMBQuote(this.mbId);
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.min_price.valueChanges, this.max_price.valueChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])()).subscribe((data) => {
            this.onPriceChange();
        });
        // this.min_price.valueChanges.pipe(debounceTime(2000) , distinctUntilChanged()).subscribe((data:any) => {
        //   this.onMinPriceRangeChange(data);
        // })
        // this.max_price.valueChanges.pipe(debounceTime(2000) , distinctUntilChanged()).subscribe((data:any) => {
        //   this.onMaxPriceRangeChange(data);
        // })
    }
    scroll(el) {
        el.scrollIntoView();
    }
    requestRendering() {
        this.moodboardService
            .requestRendering({ moodboard_id: this.mbId })
            .subscribe((response) => {
            this._toaster.success('Request ' + response.result);
        }, (error) => {
            this._toaster.error('Request failed. please try later');
        });
    }
    resetFilter() {
        this.cityListDefault.map((el) => (el.isChecked = false));
        this.cityListDefault.sort((a, b) => a.warehouse_name > b.warehouse_name ? 1 : -1);
        this.catListDefault.map((el) => (el.isChecked = false));
        this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));
        this.categoriesList.next(this.catListDefault);
        this.cityList.next(this.cityListDefault);
        this.selectedCategory = [];
        this.selectedCity = [];
        this.max_price.patchValue('', { emitEvent: false });
        this.min_price.setValue('', { emitEvent: false });
        this.min_price_inventory = '';
        this.resetList();
        this.getItems();
    }
    selectedQuote(ev) {
        this.selectedQuoteIdDD = ev.target.value;
    }
    getMBQuote(mbId) {
        this.moodboardService.getMBQuote(mbId).subscribe((response) => {
            var _a;
            this.mbQuotesList = response.quote;
            this.selectedQuoteIdDD = (_a = response.quote[0]) === null || _a === void 0 ? void 0 : _a.sgid;
        });
    }
    addToQuote() {
        this._dialog
            .open(projects_quote_src_lib_common_components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_1__["AddproductComponent"], {
            height: '80%',
            width: '50%',
            data: {
                isDialog: true,
                quoteId: this.selectedQuoteIdDD,
                mbid: this.mbId
            },
        })
            .afterClosed()
            .subscribe((data) => {
            console.log(data);
        });
    }
    getMoodboard() {
        this.moodboardService.getMoodBoard(this.mbId).subscribe((response) => {
            this.moodboardDetails = response;
            this.updateBottomData(response.moodboard);
        });
    }
    getCategory() {
        this.moodboardService
            .getCategoryList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((item) => {
            item.result.map((i, index) => {
                i['isChecked'] = false;
                i['order'] = index;
                return i;
            });
            return item;
        }))
            .subscribe((response) => {
            this.categoriesList.next(response.result);
            this.catListDefault = response.result;
        });
    }
    getCity() {
        this.moodboardService
            .getCityList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((item) => {
            item.data.map((i, index) => {
                i['isChecked'] = false;
                i['order'] = index;
                return i;
            });
            return item;
        }))
            .subscribe((response) => {
            this.cityList.next(response.data);
            this.cityListDefault = response.data;
        });
    }
    getItems(start = 0, count = 20, category = null, supplier = null, warehouse = null, max_price = 0, min_price = 0, min_price_inventory = 0, searchTxt = null) {
        let param = {
            start: this.lastUserCount,
            count: count,
            category: category,
            supplier: supplier,
            warehouse: warehouse,
            min_price: min_price,
            max_price: max_price,
            min_price_inventory: min_price_inventory,
            keywords: searchTxt,
        };
        this.moodboardService.getItems(param).subscribe((response) => {
            // this.items = response.result;
            this.updateList(response.result);
            this.items = this.getLastViewedUserList();
        });
    }
    editMB() {
        this.router.navigateByUrl('/moodboard/edit/' + this.mbId);
    }
    copyMB() {
        this.router.navigateByUrl('/moodboard/create/' + this.mbId);
    }
    onCityChecked(city, i) {
        if (city.isChecked)
            city.isChecked = false;
        else
            city.isChecked = true;
        this.cityListDefault[i] = city;
        this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.cityList.next(this.cityListDefault);
        this.selectedCity = this.cityListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid);
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    onCategoriesChecked(cat, i) {
        if (cat.isChecked)
            cat.isChecked = false;
        else
            cat.isChecked = true;
        this.catListDefault[i] = cat;
        this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.categoriesList.next(this.catListDefault);
        this.selectedCategory = this.catListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid);
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    onPriceChange() {
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    onMinPriceRangeChange(ev) {
        // this.min_price = ev;
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    onMaxPriceRangeChange(ev) {
        // this.max_price = ev;
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    onQtyChange(ev) {
        this.min_price_inventory = ev;
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    search(ev) {
        this.searchTxt = ev == '' ? null : ev;
        this.resetList();
        this.getItems(0, 20, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    createNewQuote() {
        this._dialog
            .open(projects_quote_src_lib_common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_0__["QuoteCreateFormComponent"], {
            height: '500px',
            width: '800px',
            data: {
                isDialog: true,
            },
        })
            .afterClosed()
            .subscribe((data) => {
            console.log(data);
        });
    }
    deleteItem(mbItem) {
        let obj = {
            button_type: mbItem.button_type,
            moodboard_id: mbItem.moodboard_id,
            product_id: mbItem.product_id,
            sku: mbItem.sku,
            warehouse_id: mbItem.warehouse_id,
            user_id: this._user.getUser().getId()
        };
        this.moodboardService.deleteItemToMoodboard(obj).subscribe((data) => {
            if (data.statusCode == 200) {
                this._toaster.success(data === null || data === void 0 ? void 0 : data.result);
                this.getMoodboard();
                this.onGridReady(this.agGrid);
            }
            else
                this._toaster.error(data.result);
        }, (error) => this._toaster.error('Fail to add'));
    }
    generateMDPdf() {
        let data = this._pdf.getAgGridRowsAndColumns(this.agGrid);
        let imagesObs = this._pdf.getAllTableBase64Images(data === null || data === void 0 ? void 0 : data.rows, 3);
        imagesObs.subscribe((images) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            let doc = new jspdf__WEBPACK_IMPORTED_MODULE_7__["default"]();
            doc.text('Moodboard Information', 5, 15);
            let info = [
                ['Project Name:', (_b = (_a = this.moodboardDetails) === null || _a === void 0 ? void 0 : _a.moodboard) === null || _b === void 0 ? void 0 : _b.project_name],
                ['Company Name:', (_d = (_c = this.moodboardDetails) === null || _c === void 0 ? void 0 : _c.moodboard) === null || _d === void 0 ? void 0 : _d.company_name],
                ['Moodboard :', (_f = (_e = this.moodboardDetails) === null || _e === void 0 ? void 0 : _e.moodboard) === null || _f === void 0 ? void 0 : _f.sgid],
                ['State:', (_h = (_g = this.moodboardDetails) === null || _g === void 0 ? void 0 : _g.moodboard) === null || _h === void 0 ? void 0 : _h.state.name],
                ['Moodboard Name:', (_k = (_j = this.moodboardDetails) === null || _j === void 0 ? void 0 : _j.moodboard) === null || _k === void 0 ? void 0 : _k.boardname],
                ['City:', (_m = (_l = this.moodboardDetails) === null || _l === void 0 ? void 0 : _l.moodboard) === null || _m === void 0 ? void 0 : _m.city],
                ['Zipcode:', (_p = (_o = this.moodboardDetails) === null || _o === void 0 ? void 0 : _o.moodboard) === null || _p === void 0 ? void 0 : _p.zipcode],
            ];
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default()(doc, Object.assign(Object.assign({}, this._pdf.getInformationTableUserOptions()), { body: info }));
            doc.addPage();
            doc.text('Moodboard Summary', 5, 15);
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default()(doc, Object.assign(Object.assign({}, this._pdf.getSummaryTableUserOptions()), { columnStyles: {
                    0: { cellWidth: 9 },
                    1: { cellWidth: 20 },
                    2: { cellWidth: 10 },
                    3: { cellWidth: 20 },
                    4: { cellWidth: 30 },
                    5: { cellWidth: 15 },
                    6: { cellWidth: 10 },
                    7: { cellWidth: 20 },
                    8: { cellWidth: 20 },
                    11: { cellWidth: 20 },
                }, columns: data.columns, body: (_q = data === null || data === void 0 ? void 0 : data.rows) === null || _q === void 0 ? void 0 : _q.map((r) => {
                    if (!parseInt(r[0])) {
                        let temp = [];
                        temp.push({ content: r[0], colSpan: r.length - 1 });
                        temp.push(r[r.length - 1]);
                        r = temp;
                    }
                    return r;
                }), willDrawCell: (data) => {
                    if (data.section === 'body' && data.column.index === 3) {
                        data.cell.raw = '';
                        data.cell.text = [];
                    }
                }, didDrawCell: (data) => {
                    if (data.section === 'body' && data.column.index === 3) {
                        var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
                        doc.addImage(base64Img, 'JPEG', data.cell.x + 1, data.cell.y + 1, 18, 18);
                    }
                } }));
            doc.save('moodboard.pdf');
        });
    }
    productDetails(item, moodboardDetails) {
        var _a, _b;
        this._dialog.open(projects_shop_src_projects__WEBPACK_IMPORTED_MODULE_8__["ProductDetailsComponent"], {
            height: "90%",
            width: "90%",
            disableClose: true,
            data: {
                forDialog: true,
                forHitler: true,
                forMoodboard: this._user.getUser().getId() === ((_a = moodboardDetails === null || moodboardDetails === void 0 ? void 0 : moodboardDetails.moodboard) === null || _a === void 0 ? void 0 : _a.userid),
                forQuote: false,
                item: item,
                mb: moodboardDetails === null || moodboardDetails === void 0 ? void 0 : moodboardDetails.moodboard,
                moodboardId: (_b = moodboardDetails === null || moodboardDetails === void 0 ? void 0 : moodboardDetails.moodboard) === null || _b === void 0 ? void 0 : _b.id
            }
        }).afterClosed().subscribe(data => {
            if (data && data.event) {
                this.getMoodboard();
                this.onGridReady(this.agGrid);
                this.setProductTab(0);
            }
        });
    }
    increaseQuantity(value, md) {
        if (value >= 1 && value <= md.total_warehouse_quantity) {
            md.qty = md.is_qty = value;
            let price = md.button_type == 1 ? md.buy_price : md.price;
            md.is_total = this._computationService.getProductTotalAmount(price, 0, md.qty);
            this._coreService.updateMDItem(md).subscribe(data => {
                this.refresh();
            });
        }
    }
    refresh() {
        this.getMoodboard();
        this.onGridReady(this.agGrid);
    }
    //Functionalities taken from shop module
    selectionChange($event) {
        // console.log('stepper.selectedIndex: ' + this.selectedIndex 
        //     + '; $event.selectedIndex: ' + $event.selectedIndex);
        // if ($event?.selectedIndex == 0) return; // First step is still selected
        // this.selectedIndex = $event.selectedIndex;
    }
    goto(index) {
        if (index == 0)
            return; // First step is not selected anymore -ok
        this.selectedIndex = index;
    }
    filterProductPopup() {
        this.selectedCategory = this.catListDefault.filter((item) => item.isChecked).map((i) => i.sgid);
        this.selectedCity = this.cityListDefault.filter((item) => item.isChecked).map((i) => i.sgid);
        let catIds = (this.selectedCategory && this.selectedCategory.length) ? this.catListDefault.filter((item) => item.isChecked).map((i) => i.sgid).toString() : null;
        let cityIds = (this.selectedCity && this.selectedCity.length) ? this.cityListDefault.filter((item) => item.isChecked).map((i) => i.sgid).toString() : null;
        // this.show = true;
        this.closeModal();
        // let param: any = {
        //   start: this.lLimit,
        //   count: this.hLimit,
        //   category: catIds,
        //   warehouse: cityIds,
        // };
        // if(this.min_price_popup){ param['min_price'] = this.min_price_popup};
        // if(this.max_price_popup){ param['max_price'] = this.max_price_popup};
        // if(this.min_price_inventory_popup){ param['min_price_inventory'] = this.min_price_inventory_popup};
        // console.log(this.min_price , this.max_price);
        // if(this.min_price != '') param['min_price'] = this.min_price;
        // if(this.max_price != '') param['max_price'] = this.max_price;
        // if(this.min_price_inventory != '') param['min_price_inventory'] = this.min_price_inventory;
        this.getItems(0, 15, (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null, null, (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null, this.max_price.value, this.min_price.value, this.min_price_inventory, this.searchTxt);
    }
    setProductTab(index) {
        const tabGroup = this.tabsReference;
        if (!tabGroup || !(tabGroup instanceof _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"]))
            return;
        const tabCount = tabGroup._tabs.length;
        tabGroup.selectedIndex = index;
    }
    onScroll() {
        let param = {
            start: this.lastUserCount,
            count: 20,
            category: (this.selectedCategory && this.selectedCategory.length) ? this.selectedCategory.toString() : null,
            supplier: null,
            warehouse: (this.selectedCity && this.selectedCity.length) ? this.selectedCity.toString() : null,
            min_price: this.min_price.value,
            max_price: this.max_price.value,
            min_price_inventory: this.min_price_inventory,
            searchTxt: this.searchTxt,
        };
        if (this.startCount !== this.lastUserCount) {
            this.moodboardService.getItems(param).subscribe((response) => {
                if (response && response.result && response.result.length) {
                    this.updateList(response.result);
                }
            });
            this.items = this.getLastViewedUserList();
            this.startCount = this.lastUserCount;
        }
    }
    getLastViewedUserList() {
        return this.items;
    }
    updateList(obj) {
        let isResult = false;
        if (obj && obj.length) {
            this.items.push(...obj);
            isResult = true;
        }
        if (isResult === true) {
            this.lastUserCount += 20;
        }
    }
    resetList() {
        this.items = [];
        this.startCount = 0;
        this.lastUserCount = 0;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
}
MoodboardComponent.ɵfac = function MoodboardComponent_Factory(t) { return new (t || MoodboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_12__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["PdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ComputationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["CoreService"])); };
MoodboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: MoodboardComponent, selectors: [["lib-moodboard"]], viewQuery: function MoodboardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c2, 3);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.myStepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.tabsReference = _t.first);
    } }, ngContentSelectors: _c3, decls: 180, vars: 48, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "mb"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "mb-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-details__icon"], ["srcset", "", 3, "src", "alt"], ["fxFlex", "80", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "mb-details__info"], ["fxFlex", "50", 4, "ngIf"], ["fxFlex", "50"], [1, "label"], [1, "value"], ["fxFlex", "60", "fxLayoutGap", "1rem"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a filter list icon", 3, "click"], ["fxFlex", "20", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "mb-details__info"], ["fxFlex", "80"], [4, "ngFor", "ngForOf"], ["color", "accent", "mat-align-tabs", "center", 1, "tabs"], ["tabsReference", ""], ["label", "MY MOODBOARD"], ["fxLayout", "column", "fxLayoutGap", "2rem", "fxLayoutAlign", "stretch", 1, "mb-details", "margin-top30", "moodeboard-section"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "head"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between center", 1, "head"], ["mat-button", "", "color", "accent", "aria-label", "", 1, "btn-chip-label"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 1, "btn-chip-md", 2, "background-color", "#2C2C2C", "color", "#fff", 3, "click"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 1, "btn-chip-md", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", "fxLayoutGap", "10px grid", "fxLayoutAlign", "start center", 1, "product-wrapper"], [1, ""], [1, "cardImg", "add", 2, "min-height", "300px", 3, "click"], [1, "add-block"], ["src", "assets/moodboard/images/addProduct.svg", 1, "add-icon"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "head", "margin-top30"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "space-between center", 1, "head"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "accent", "aria-label", "", 1, "btn-yellow-quote", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "head"], ["label", "ADD PRODUCTS"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "stretch", 1, "mb-details"], ["fxFlex", "22", "fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "left"], ["fxLayoutGap", "1rem", "fxLayout", "row wrap", 1, "filter"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 2, "margin-top", "1rem !important", 3, "click"], [1, "filter"], [1, "filter-inner"], ["src", "assets/moodboard/images/locationNew.svg", "alt", "Cities", 1, "filter-img"], [1, "filter-label"], ["fxLayout", "column", 1, "check-wrapper"], [4, "ngFor", "ngForOf", "ngForAs"], [1, "view-more", 3, "click"], ["src", "assets/moodboard/images/categoryNew.svg", "alt", "Cities", 1, "filter-img"], ["src", "assets/moodboard/images/budgetNew.svg", "alt", "Cities", 1, "filter-img"], ["fxLayoutGap", "1rem", "fxLayout", "row wrap", 1, "price-input"], ["fxFlex", "40", "appearance", "fill"], ["type", "number", "matInput", "", 3, "formControl"], ["min", ""], ["max", ""], ["src", "assets/moodboard/images/quantityNew.svg", "alt", "Cities", 1, "filter-img"], ["appearance", "fill"], ["type", "number", "step", "1", "matInput", "", "min", "1", 3, "value", "input"], ["minQty", ""], ["fxFlex", "80", "fxLayoutGap", "1rem", "fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "right"], ["fxLayout", "column", 1, "right-head-search"], [3, "placeholder", "search"], [1, "search_placeholder"], [2, "margin-bottom", "0px"], ["fxFlex", "100", "fxLayoutGap", "1rem", "fxLayout", "column", 1, "right-head"], ["infiniteScroll", "", 2, "max-height", "580px", "overflow-y", "scroll", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["cols", "5", "rowHeight", "1:1"], ["disabled", ""], ["mat-tab-label", ""], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "mb-summary"], ["mbsummary", ""], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "mb-summary__info"], [1, "mb-summary__info--value"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "2rem", 1, "mb-summary__info"], [1, "mb-summary__info--label"], ["id", "refresh", 3, "click"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "2rem", 1, "mb-summary__actions"], ["viewMoreCity", ""], ["viewMoreCat", ""], ["quickFilter", ""], ["class", "example-card", 4, "ngIf"], [1, "example-card"], ["mat-card-image", "", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], [1, "cardImg"], [1, "badge", 2, "text-align", "center", "width", "40%"], [3, "src", "alt"], ["height", "100px", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "title"], ["fxLayout", "row", "fxLayoutAlign", "center stretch", 1, "action"], ["fxFlex", "50", 3, "min", "readOnly", "max", "counter", "counterChange"], ["style", "cursor: pointer; color: #A8A8A8;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", "color", "#A8A8A8", 3, "click"], [3, "value"], [3, "checked", "change"], [1, "tile", 3, "click"], [1, "tile-box"], ["width", "100%", 1, "img", 3, "src", "alt"], ["mat-raised-button", "", "type", "button", "color", "accent", "aria-label", "", 1, "summary_btn_position", 3, "click"], ["fxLayout", "row-reverse"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "20px"], ["fxFlex", "25", 3, "checked", "change"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "10px"], ["fxFlex", "20", 3, "checked", "change"], [3, "linear", "selectedIndex", "selectionChange"], ["stepper", ""], ["fxLayout", "row-reverse", "fxLayoutAlign", "space-between center", 2, "background", "#f8f8f8", "margin", "0px -24px 0px -24px"], ["mat-dialog-title", ""], ["fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-typography"], [1, "text-center", "popup-title"], [1, "text-center", "popup-title-head"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "row", "justify-content-center", "mt-5"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "img-icon-wrapper", 3, "click"], ["src", "assets/shop/location.svg", "alt", "", 1, "img-icon"], [2, "margin", "0 -18px 0px -5px"], ["src", "assets/shop/Line.svg", "alt", "", 1, "img-icon", "line"], ["src", "assets/shop/category.svg", "alt", "", 1, "img-icon"], [2, "margin", "0 -5px 0 -18px"], ["src", "assets/shop/quantity.svg", "alt", "", 1, "img-icon"], [2, "margin", "0 -1px 0 -5px"], ["src", "assets/shop/budget.svg", "alt", "", 1, "img-icon"], ["fxLayoutAlign", "center center"], ["mat-raised-button", "", "matStepperNext", "", "color", "accent", "aria-label", "", 1, "btn"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin", "0 -25px", "height", "50px", "background", "rgb(248, 248, 248)"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin", "0 25px"], ["src", "assets/shop/location.svg", "alt", "Cities", 1, "filter-img", 2, "margin-top", "33px", "margin-right", "10px"], ["mat-dialog-title", "", 1, "font25", 2, "margin", "0"], ["fxLayout", "row-reverse", 1, "", 2, "margin", "0 25px"], ["fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "mat-typography"], [2, "font-size", "25px", "font-family", "Sofia Pro"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 2, "padding", "10px"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", "fxLayout", "row"], ["src", "assets/shop/category.svg", "alt", "Cities", 1, "filter-img", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "mat-typography", 2, "max-height", "60vh"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", "fxLayout", "row", 2, "padding", "1rem"], ["src", "assets/shop/budget.svg", "alt", "Cities", 1, "filter-img", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "mat-typography"], ["fxLayoutAlign", "center center", "fxLayoutGap", "1rem", "fxLayout", "row wrap", 1, "price-input", 2, "padding", "10px 0px"], ["fxFlex", "30", "appearance", "fill"], ["type", "number", "matInput", "", "min", "0", 3, "value", "input"], ["type", "number", "matInput", "", "min", "1", 3, "value", "input"], ["src", "assets/shop/quantity.svg", "alt", "Cities", 1, "filter-img", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayoutAlign", "center center", 2, "padding", "10px 0px"], ["appearance", "fill", "fxFlex", "70"], ["mat-raised-button", "", "matStepperNext", "", "color", "accent", "aria-label", "", 1, "btn", 3, "click"], ["fxFlex", "22", 3, "checked", "change"], ["fxFlex", "23", 3, "checked", "change"]], template: function MoodboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, MoodboardComponent_div_7_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](10, "Company Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](15, "Moodboard#: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](20, "Customer City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](25, "Moodboard Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](30, "Zipcode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_34_listener() { return ctx.copyMB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](36, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](37, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_37_listener() { return ctx.editMB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](39, "edit icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](42, MoodboardComponent_ng_container_42_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](44, "mat-tab-group", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](46, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](50, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](52, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](55, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_55_listener() { return ctx.requestRendering(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](56, "Request Rendering");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](57, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_57_listener() { return ctx.generateMDPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](58, "Generate Moodboard quote PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](59, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](61, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_div_click_61_listener() { return ctx.setProductTab(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](63, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](65, "ADD PRODUCT");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](66, MoodboardComponent_ng_container_66_Template, 11, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](68, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](69, "select", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("change", function MoodboardComponent_Template_select_change_69_listener($event) { return ctx.selectedQuote($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](70, MoodboardComponent_option_70_Template, 2, 3, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](71, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](72, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_72_listener() { return ctx.addToQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](73, "ADD TO QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](74, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_74_listener() { return ctx.createNewQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](75, "CREATE NEW QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](76, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](77, "mat-tab", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](78, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](81, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](82, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_82_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](83, "Clear Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](84, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](87, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](88, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](90, "CITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](92, MoodboardComponent_ng_container_92_Template, 3, 2, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](93, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](94, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_div_click_95_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r89); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](175); return ctx.openModal(_r13); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](96, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](97, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](99, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](102, "CATEGORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](103, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](104, MoodboardComponent_ng_container_104_Template, 3, 2, "ng-container", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](105, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](106, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](107, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_div_click_107_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r89); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](177); return ctx.openModal(_r15); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](108, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](109, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](110, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](111, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](112, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](113, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](114, "PRICE RANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](115, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](116, "mat-form-field", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](117, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](118, "Min $");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](119, "input", 50, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](121, "mat-form-field", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](122, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](123, "Max $");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](124, "input", 50, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](126, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](127, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](128, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](129, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](130, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](131, "AVAILABLE QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](132, "mat-form-field", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](133, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](134, "Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](135, "input", 55, 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("input", function MoodboardComponent_Template_input_input_135_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r89); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](136); return ctx.onQtyChange(_r9.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](137, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](138, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](139, "app-search-bar", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("search", function MoodboardComponent_Template_app_search_bar_search_139_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](140, "section", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](141, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](142, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](143, "Add furniture to your moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](144, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](145, "Search for a product and add it to your moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](146, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](147, "mat-card", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("scrolled", function MoodboardComponent_Template_mat_card_scrolled_147_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](148, "mat-grid-list", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](149, MoodboardComponent_ng_container_149_Template, 6, 3, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](150, "mat-tab", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](151, MoodboardComponent_ng_template_151_Template, 2, 0, "ng-template", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](152, "div", 67, 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](154, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](156, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](157, "MOODBOARD SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](158, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](159, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](160, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](161, "Customer City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](162, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](163);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](164, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](165, "span", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](166, "Zipcode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](167, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](168);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](169, "span", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function MoodboardComponent_Template_span_click_169_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](170, "ag-grid-angular", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](171, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](172, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵprojection"](173, 0, ["[select]", "actions"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](174, MoodboardComponent_ng_template_174_Template, 5, 1, "ng-template", null, 76, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](176, MoodboardComponent_ng_template_176_Template, 5, 1, "ng-template", null, 77, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](178, MoodboardComponent_ng_template_178_Template, 123, 9, "ng-template", null, 78, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.bannerIconImgTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("alt", ctx.bannerIconImgTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("src", ctx.bannerIconImg, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.sgid);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.boardname);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.catagorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.project_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"]("No of products : ", (ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard_items) ? ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard_items.length : "0", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.mbQuotesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](93, 34, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](94, 38, ctx.cityList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind3"](105, 40, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](106, 44, ctx.categoriesList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.min_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("formControl", ctx.max_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpropertyInterpolate"]("value", ctx.min_price_inventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("infiniteScrollDistance", 1)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate1"](" ", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](171, 46, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NumberValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlDirective"], _core_src_lib_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_22__["SearchBarComponent"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_23__["InfiniteScrollDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridList"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabLabel"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_25__["AgGridAngular"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardContent"], _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_26__["CounterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_z"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_27__["MatCheckbox"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__["MatGridTile"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_28__["MatStepperNext"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["AsyncPipe"]], styles: [".mb[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  overflow-y: auto;\n  margin-top: 1rem;\n}\n.mb-details__icon[_ngcontent-%COMP%] {\n  background: #F6E15F;\n}\n.mb-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.mb-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.mb-details__copy[_ngcontent-%COMP%], .mb-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.mb-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.mb-moodboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: 332px;\n}\n.mb-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.mb-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem 1.5rem;\n  background: #323232;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.15), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%] {\n  background: white;\n  color: #9d9d9d;\n  padding: 0.3rem;\n  height: 100%;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]:not(:first-child) {\n  background: #febf2d;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: grey;\n  color: white;\n  text-align: center;\n  margin: 0;\n}\n.mb-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.mb-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem 0rem;\n}\n.mb-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.mb-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.mb-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.right-head-search[_ngcontent-%COMP%], .right-head[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.search_placeholder[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.filter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 15px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.tile[_ngcontent-%COMP%]    >   .mat-figure {\n  padding: 25px !important;\n}\n.tile-box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 5px;\n  width: 26px;\n  height: 23px;\n  color: #f4f4f4;\n  background: #6c757d;\n  border-radius: 5px 0px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n}\n.badge[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  letter-spacing: 0.03em;\n  color: #ffffff;\n  border: 0.3px solid #ffffff;\n  background: #fd6939;\n  border-radius: 50px;\n}\n.margin-top30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 50px;\n  justify-content: center;\n  text-align: center;\n  font-weight: 500;\n  font-size: 12px;\n  color: #000000;\n}\n.check-wrapper[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.check-wrapper[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n  .mat-horizontal-stepper-header-container {\n  display: none !important;\n}\n.filter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 15px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.filter-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-family: brandon grotesque;\n  font-weight: bold;\n  font-size: 16px;\n}\n.img-icon[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-bottom: 15px;\n}\n.img-icon-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-style: normal;\n  font-weight: 400;\n}\n.tab-group-button[_ngcontent-%COMP%] {\n  position: relative;\n}\n.summary_btn_position[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  font-weight: 600;\n}\n[_nghost-%COMP%]     .mat-tab-disabled {\n  color: unset;\n  opacity: unset;\n  margin-left: 500px;\n}\n.margin-top30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.moodeboard-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  margin: 25px;\n  padding: 40px;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .btn-chip-md[_ngcontent-%COMP%] {\n  background: #2c2c2c;\n  border-radius: 50px;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 10px 15px 10px 15px;\n  letter-spacing: 0.02em;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .btn-chip-label[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  border-radius: 50px;\n  color: #000000;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 10px 15px 10px 15px;\n  letter-spacing: 0.02em;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  background: #ffffff;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .add-icon[_ngcontent-%COMP%] {\n  width: 66px;\n  height: 66px;\n  display: block;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .add-product-image[_ngcontent-%COMP%] {\n  min-height: 250px;\n}\n.moodeboard-section[_ngcontent-%COMP%]   .product-wrapper[_ngcontent-%COMP%]   .add-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\nselect[_ngcontent-%COMP%] {\n  width: 100% !important;\n  background: url('dropdown.svg') no-repeat 96% !important;\n  -webkit-appearance: none;\n  background-color: #f4f4f4 !important;\n  padding: 10px;\n  border: none;\n  border-radius: 5px;\n}\n.btn-yellow-quote[_ngcontent-%COMP%] {\n  background: #f6e15f;\n  border-radius: 50px;\n  color: #ffffff;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n  color: #2c2c2c;\n}\n.cardImg[_ngcontent-%COMP%] {\n  width: 200px;\n  min-height: 140px;\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 20px;\n  margin-right: 30px;\n}\n.cardImg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n}\n.add[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n[_nghost-%COMP%]     .mat-tab-label-active {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]     .mat-tab-label-content {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n}\n[_nghost-%COMP%]     .mat-tab-label:first-child {\n  margin-right: 70px;\n}\n[_nghost-%COMP%]     .mat-tab-labels {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vb2Rib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGO0FBRUk7RUFDRSxtQkFBQTtBQUFOO0FBQ007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ007RUFDRSxtQkFBQTtFQUNBLGdKQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUFSO0FBR0k7RUFFRSxtQkFBQTtFQUNBLG9CQUFBO0FBRk47QUFJSTtFQUNFLHlCQUFBO0FBRk47QUFLRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBSEo7QUFJSTtFQUNFLFlBQUE7QUFGTjtBQUlJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2SUFBQTtFQUVBLGtCQUFBO0FBSE47QUFLTTtFQUlFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNElBQUE7RUFFQSxrQkFBQTtBQVBSO0FBRlE7RUFDRSxtQkFBQTtBQUlWO0FBS1E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUhWO0FBS1E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFIVjtBQVFFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBTko7QUFPSTtFQUNFLGlCQUFBO0FBTE47QUFNTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBU0E7O0VBRUUsV0FBQTtBQU5GO0FBU0E7RUFDRSxnQkFBQTtBQU5GO0FBVUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFQSjtBQVNFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBUEo7QUFVQTtFQUNFLHdCQUFBO0FBUEY7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQU5GO0FBUUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFFQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVFBO0VBQ0UsZ0JBQUE7QUFMRjtBQU9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUpGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFNQTtFQUNFLHdCQUFBO0FBSEY7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUpKO0FBTUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFKSjtBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFMRjtBQU9BO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUpGO0FBTUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxtQkFBQTtFQUNJLGdCQUFBO0FBSE47QUFNQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIRjtBQU1BO0VBQ0UsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlFO0VBQ0UsbUJBQUE7RUFFQSxtQkFBQTtBQUhKO0FBSUk7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFGTjtBQUlJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRk47QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFJSTtFQUNFLGlCQUFBO0FBRk47QUFJSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRk47QUFPQTtFQUNFLHNCQUFBO0VBQ0Esd0RBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFKRjtBQU9BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSkY7QUFLRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBSEo7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBSkY7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU9BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFKRjtBQVFFO0VBQ0Usa0JBQUE7QUFMSjtBQVNBO0VBQ0UsYUFBQTtBQU5GIiwiZmlsZSI6Im1vb2Rib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYiB7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAmLWRldGFpbHMge1xyXG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICZfX2ljb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRjZFMTVGO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgNHB4IDBweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgMHB4IC00cHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAtNHB4IDBweCA2cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5MnB4O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19jb3B5LFxyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gICAgfVxyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMCAycmVtIDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtbW9vZGJvYXJkIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDMzMnB4O1xyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xyXG4gICAgICBib3gtc2hhZG93OiAtNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLCA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgJi0taXRlbSB7XHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmViZjJkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICAgICAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC00cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksIDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgICAgICAgIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGdyZXk7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgICZfX2luZm8ge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxuICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgIH1cclxuICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19hY3Rpb25zIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucmlnaHQtaGVhZC1zZWFyY2gsXHJcbi5yaWdodC1oZWFkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNlYXJjaF9wbGFjZWhvbGRlciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgJi1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gICYtbGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbi50aWxlID4gOjpuZy1kZWVwIC5tYXQtZmlndXJlIHtcclxuICBwYWRkaW5nOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRpbGUtYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMjZweDtcclxuICBoZWlnaHQ6IDIzcHg7XHJcbiAgY29sb3I6ICNmNGY0ZjQ7XHJcbiAgYmFja2dyb3VuZDogIzZjNzU3ZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC8vIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJhY2tncm91bmQ6ICNmZDY5Mzk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubWFyZ2luLXRvcDMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmNoZWNrLXdyYXBwZXIge1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAudmlldy1tb3JlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gICYtaW5uZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAmLWxhYmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1pbWcge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uZmlsdGVyLWxhYmVsIHtcclxuICBmb250LWZhbWlseTogYnJhbmRvbiBncm90ZXNxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaW1nLWljb24ge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbi5pbWctaWNvbi13cmFwcGVyIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnRhYi1ncm91cC1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN1bW1hcnlfYnRuX3Bvc2l0aW9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItZGlzYWJsZWQge1xyXG4gIGNvbG9yOiB1bnNldDtcclxuICBvcGFjaXR5OiB1bnNldDtcclxuICBtYXJnaW4tbGVmdDogNTAwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tdG9wMzAge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5tb29kZWJvYXJkLXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgLmJ0bi1jaGlwLW1kIHtcclxuICAgIGJhY2tncm91bmQ6ICMyYzJjMmM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLmJ0bi1jaGlwLWxhYmVsIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxNXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICB9XHJcbiAgLnByb2R1Y3Qtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuYWRkLWljb24ge1xyXG4gICAgICB3aWR0aDogNjZweDtcclxuICAgICAgaGVpZ2h0OiA2NnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5hY3Rpb24ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZC1wcm9kdWN0LWltYWdlIHtcclxuICAgICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICB9XHJcbiAgICAuYWRkLWJsb2NrIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Ryb3Bkb3duLnN2Z1wiKSBuby1yZXBlYXQgOTYlICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5idG4teWVsbG93LXF1b3RlIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZlMTVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiAjMmMyYzJjO1xyXG59XHJcblxyXG4uY2FyZEltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiKDAgMCAwIC8gMjUlKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMzNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGNvbG9yOiAjNDY0NjQ2O1xyXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsaW5lLWhlaWdodDogMzNweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xyXG4gIGNvbG9yOiAjNDY0NjQ2O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVscyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "g1sW":
/*!**********************************************************************************************!*\
  !*** ./projects/moodboard/src/lib/components/create-moodboard/create-moodboard.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreateMoodboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMoodboardComponent", function() { return CreateMoodboardComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/moodboard.service */ "zU2b");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");













function CreateMoodboardComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CREATE A NEW MOODBOARD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Editing Moodboard named ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.boardname);
} }
function CreateMoodboardComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Copying Moodboard named ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.boardname);
} }
const _c0 = function (a0) { return { "selected": a0 }; };
function CreateMoodboardComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r16 == null ? null : item_r16.type_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, _r3.value == (item_r16 == null ? null : item_r16.type_id)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r16.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", item_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r16.value);
} }
function CreateMoodboardComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.showPDropdown = !ctx_r18.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "error-border": a0 }; };
function CreateMoodboardComponent_input_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 41);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, (tmp_0_0 = ctx_r7.mbCreateForm.get("moodboardProjectName")) == null ? null : tmp_0_0.invalid));
} }
function CreateMoodboardComponent_select_32_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", prj_r21.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", prj_r21.project, " ");
} }
function CreateMoodboardComponent_select_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardComponent_select_32_option_1_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, (tmp_0_0 = ctx_r8.mbCreateForm.get("project_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.projectList);
} }
function CreateMoodboardComponent_a_46_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardComponent_a_46_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r22.showDropdown = !ctx_r22.showDropdown; return ctx_r22.showPDropdown = !ctx_r22.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { "error-border": a0, "read-only": a1 }; };
function CreateMoodboardComponent_input_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 45);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", !ctx_r11._user.getUser().isInternalUser())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c2, (tmp_1_0 = ctx_r11.mbCreateForm.get("moodboardCompany")) == null ? null : tmp_1_0.invalid, !ctx_r11._user.getUser().isInternalUser()));
} }
function CreateMoodboardComponent_select_49_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmp_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cmp_r25.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cmp_r25.company, " ");
} }
function CreateMoodboardComponent_select_49_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateMoodboardComponent_select_49_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.getProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardComponent_select_49_option_1_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c1, (tmp_0_0 = ctx_r12.mbCreateForm.get("company_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.companyList);
} }
function CreateMoodboardComponent_option_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r28.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r28.name, " ");
} }
function CreateMoodboardComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "CREATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "UPDATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateMoodboardComponent {
    constructor(fb, moodboardService, _user, _toster, _quoteService, activatedRoute, router, _location) {
        this.fb = fb;
        this.moodboardService = moodboardService;
        this._user = _user;
        this._toster = _toster;
        this._quoteService = _quoteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this._location = _location;
        this.bannerIconImg = 'assets/moodboard/images/mb.png';
        this.bannerIconImgTxt = 'Moodboard';
        this.bottomTxt = 'Style & create look from our collection of designer furniture';
        this.stateList = [];
        this.mbTypeList = [];
        this.showPDropdown = false;
        this.showDropdown = false;
        this.dCompanyList = [];
        this.companyList = [];
        this.projectList = [];
        this.selectedCompany = '';
        this.selectedProject = '';
        this.catagorydata = [{
                imageSrc: 'assets/moodboard/images/Categories-01.png',
                value: 'Living Room',
                type_id: 1
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-02.png',
                value: 'Bedroom',
                type_id: 2
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-03.png',
                value: 'Dining Room',
                type_id: 3
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-04.png',
                value: 'Office',
                type_id: 4
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-05.png',
                value: 'Outdoor',
                type_id: 5
            },
            {
                imageSrc: 'assets/moodboard/images/Categories-06.png',
                value: 'Others',
                type_id: 6
            }
        ];
        this.mbId = null;
        this.currentPage = '';
        this.boardname = '';
        this.mbCreateForm = this.fb.group({
            moodboardName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            moodboardType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            moodboardCompany: [''],
            moodboardProjectName: [''],
            company_id: [''],
            project_id: [''],
            moodboardState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            moodboardCity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            moodboardZip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
        this.mbId = this.activatedRoute.snapshot.paramMap.get('id');
        this.currentPage = this.router.url.split('/')[2];
    }
    ngOnInit() {
        this.getStates();
        this.getMoodBoardType();
        this.getcompanyByUserMoodboard();
        if (this.mbId != null) {
            this.getMoodboard();
        }
        this.getCompanyList();
    }
    getMoodBoardType() {
        this.moodboardService.getMoodBoardType().subscribe((response) => {
            this.mbTypeList = response.result;
            this.catagorydata = this.mbTypeList.map((item, i) => Object.assign({}, item, this.catagorydata[i]));
        });
    }
    getcompanyByUserMoodboard() {
        this.moodboardService.getcompanyByUserMoodboard().subscribe((response) => {
            this.mbCreateForm.patchValue({ moodboardCompany: response.result[0].company });
        });
    }
    getCompanyList() {
        this._quoteService.getCompanyList().subscribe((data) => {
            var _a;
            if (typeof data.result == 'string') {
                this.companyList = [];
                this.selectedCompany = "";
                return;
            }
            // this.companyList = data.result.map((x: any) => x.company);
            this.companyList = data.result;
            let companyId = (_a = data.result.find((x) => x.company == this.selectedCompany)) === null || _a === void 0 ? void 0 : _a.sgid;
            if (companyId) {
                this.getProjectList(companyId, null);
            }
        });
    }
    getProjectList(companyId, event) {
        if (event !== null)
            companyId = event.target.value;
        this._quoteService.getProjectList(companyId).subscribe((data) => {
            if (typeof data.result == 'string') {
                this.projectList = [];
                this.selectedProject = "";
            }
            else {
                this.projectList = data.result; //.map((x: any)=> x.project);
                this.selectedProject = this.projectList[0];
            }
        });
    }
    validatedCityZipCode() {
        let param = { zipcode: this.mbCreateForm.value.moodboardZip,
            city_name: this.mbCreateForm.value.moodboardCity };
        this.moodboardService.validatedCityZipCode(param).subscribe((response) => {
            response.result;
        });
    }
    getStates() {
        this.moodboardService.getStateList().subscribe((response) => {
            this.stateList = response.states;
        });
    }
    getMoodboard() {
        this.moodboardService.getMoodBoard(this.mbId).subscribe((response) => {
            this.boardname = response.moodboard.boardname;
            this.mbCreateForm.setValue({
                moodboardName: response.moodboard.boardname,
                moodboardType: response.moodboard.boardtypeid.toString(),
                moodboardCompany: response.moodboard.company_name,
                moodboardProjectName: response.moodboard.project_name,
                company_id: response.moodboard.company_id,
                project_id: response.moodboard.project_id,
                moodboardState: response.moodboard.state,
                moodboardCity: response.moodboard.city,
                moodboardZip: response.moodboard.zipcode
            });
        });
    }
    resetForm() {
        this.mbCreateForm.reset();
        this._location.back();
    }
    onSubmit() {
        var _a, _b;
        let val = this.mbCreateForm.value;
        let param = {
            moodboard_name: val.moodboardName,
            moodboard_type: val.moodboardType,
            company_name: val.moodboardCompany,
            project_name: val.moodboardProjectName,
            state: val.moodboardState,
            city: val.moodboardCity,
            zipcode: val.moodboardZip,
            userid: this._user.getUser().getId()
        };
        if (this.showDropdown == false)
            param['company_name'] = (_a = this.companyList.find((x) => x.sgid == val.company_id)) === null || _a === void 0 ? void 0 : _a.company;
        if (this.showPDropdown == false)
            param['project_name'] = (_b = this.projectList.find((x) => x.sgid == val.project_id)) === null || _b === void 0 ? void 0 : _b.project;
        if (this.mbId !== '' && this.currentPage != 'create') {
            param['moodboard_id'] = this.mbId;
            this.moodboardService.updateMoodboard(param).subscribe((response) => {
                if (response.statusCode === 200) {
                    this._toster.success(response.message);
                    this.router.navigate(['moodboard', response.moodboard_id]);
                }
                else
                    this._toster.error(response.message);
            }, error => this._toster.error('Please contact site administrator!'));
        }
        else {
            this.moodboardService.createMoodboard(param).subscribe((response) => {
                if (response.statusCode === 200) {
                    this._toster.success(response.message);
                    //          this.router.navigate(['moodboard',response.moodboard_id])
                    this._location.back();
                }
                else
                    this._toster.error(response.message);
            }, error => this._toster.error('Please contact site administrator!'));
        }
    }
}
CreateMoodboardComponent.ɵfac = function CreateMoodboardComponent_Factory(t) { return new (t || CreateMoodboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"])); };
CreateMoodboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateMoodboardComponent, selectors: [["lib-create-moodboard"]], decls: 69, vars: 28, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-create__form"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create"], ["class", "mb-create__form--title", 4, "ngIf"], [1, "mb-form"], [1, "add-field", 3, "formGroup", "ngSubmit"], [1, "label", 2, "display", "flex"], [1, "asterisk"], ["formControlName", "moodboardType", "aria-label", "Moodboard Type"], ["mbtypegroup", "matButtonToggleGroup"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-form-inner", 2, "width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 2, "width", "100%"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", " stretch", 2, "width", "100%"], [1, "label"], ["type", "text", "formControlName", "moodboardName", "placeholder", "Name your Board", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 3, "click", 4, "ngIf"], ["style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass", 4, "ngIf"], ["formControlName", "project_id", 3, "ngClass", 4, "ngIf"], ["type", "text", "formControlName", "moodboardCity", "placeholder", "Enter a City", 3, "ngClass"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass", 4, "ngIf"], ["formControlName", "company_id", 3, "ngClass", "change", 4, "ngIf"], ["formControlName", "moodboardState", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "moodboardZip", "placeholder", "Add a ZipCode", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-form-inner"], ["class", "btn btn-primary", "mat-raised-button", "", "color", "accent", "type", "submit", "mat-button", "", 4, "ngIf"], ["class", "btn btn-primary", "type", "submit", "mat-raised-button", "", "color", "accent", "mat-button", "", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "mat-button", "", 1, "btn", "btn-primary", 3, "click"], ["fxLayoutGap", "4rem"], [1, "mb-create__form--title"], [3, "ngClass", "value"], ["mat-card-image", "", "width", "100px", "height", "100px", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/moodboard/images/SVG-Icons-06.svg"], [1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass"], ["formControlName", "project_id", 3, "ngClass"], [3, "value"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass"], ["formControlName", "company_id", 3, "ngClass", "change"], ["mat-raised-button", "", "color", "accent", "type", "submit", "mat-button", "", 1, "btn", "btn-primary"], ["type", "submit", "mat-raised-button", "", "color", "accent", "mat-button", "", 1, "btn", "btn-primary"]], template: function CreateMoodboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CreateMoodboardComponent_span_3_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CreateMoodboardComponent_span_4_Template, 4, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreateMoodboardComponent_span_5_Template, 4, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CreateMoodboardComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Moodboard Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-button-toggle-group", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CreateMoodboardComponent_ng_container_14_Template, 6, 7, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Moodboard Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CreateMoodboardComponent_a_29_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CreateMoodboardComponent_a_30_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CreateMoodboardComponent_input_31_Template, 1, 3, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CreateMoodboardComponent_select_32_Template, 2, 4, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, CreateMoodboardComponent_a_46_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CreateMoodboardComponent_a_47_Template, 2, 0, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CreateMoodboardComponent_input_48_Template, 1, 5, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CreateMoodboardComponent_select_49_Template, 2, 4, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CreateMoodboardComponent_option_56_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, CreateMoodboardComponent_button_64_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CreateMoodboardComponent_button_65_Template, 2, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardComponent_Template_button_click_66_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_5_0 = null;
        let tmp_10_0 = null;
        let tmp_15_0 = null;
        let tmp_17_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId != "" && ctx.currentPage != "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentPage == "create" && ctx.mbId != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mbCreateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.catagorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, (tmp_5_0 = ctx.mbCreateForm.get("moodboardName")) == null ? null : tmp_5_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c1, (tmp_10_0 = ctx.mbCreateForm.get("moodboardCity")) == null ? null : tmp_10_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c1, (tmp_15_0 = ctx.mbCreateForm.get("moodboardState")) == null ? null : tmp_15_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c1, (tmp_17_0 = ctx.mbCreateForm.get("moodboardZip")) == null ? null : tmp_17_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId == "" || ctx.mbId != "" && ctx.currentPage == "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId != "" && ctx.currentPage != "create");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".mb-create__form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.mb-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n}\n.mb-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.mb-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.mb-create__actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mb-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.text[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  padding: 0px;\n  border: none;\n  margin: 3px;\n  border-radius: 5px;\n}\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.6rem 1rem;\n  font-size: inherit;\n  border: 1px;\n  width: 100%;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n.mb-create-text[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n}\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-bottom: -50px;\n}\n.mb-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.mb-form-inner[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.mat-select[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.banner-bottom[_ngcontent-%COMP%] {\n  height: 80px;\n  align-items: center;\n  display: flex;\n}\n.banner-bottom-txt[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n}\n.mb-details[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.mb-details__icon[_ngcontent-%COMP%] {\n  background: #febf2d;\n}\n.mb-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.mb-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 5px solid yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1tb29kYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0FBRVI7QUFFRTtFQUVFLGdCQUFBO0FBREo7QUFFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFHQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBQTtBQUVBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7O0VBRUUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSxTQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBRUEsOEJBQUE7RUFDQTs7O0dBQUE7RUFJQSw4REFBQTtFQUNBO2lFQUFBO0VBRUEsMEJBQUE7RUFDQSw0QkFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0FBRUY7QUFDQTtFQUNFLHFCQUFBO0FBRUY7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBS0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQU1GO0FBREk7RUFDRSxrQkFBQTtBQUlOO0FBREE7RUFDRSxvQkFBQTtBQUlGO0FBREU7RUFDRSxZQUFBO0FBSUo7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFJSjtBQURBO0VBQ0UsYUFBQTtBQUlGO0FBRkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFNRjtBQUhFO0VBQ0UsYUFBQTtBQU1KO0FBTEk7RUFDRSxtQkFBQTtBQU9OO0FBTk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQVFSO0FBTk07RUFDRSxtQkFBQTtFQUNBLGdKQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU9SO0FBQ0E7RUFDRSxtQ0FBQTtBQUVGIiwiZmlsZSI6ImNyZWF0ZS1tb29kYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWItY3JlYXRlIHtcclxuICAmX19mb3JtIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgJi0tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmLS1lbGVtZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDJyZW0gNHJlbSAycmVtO1xyXG4gICAgICAmIGRpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19hY3Rpb25zIHtcclxuICAgIC8vIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXh0e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xle1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG5wYWRkaW5nOiAwcHg7XHJcbmJvcmRlcjogbm9uZTtcclxubWFyZ2luOiAzcHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogNXB4OyAgXHJcbn0gXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBib3JkZXI6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBncmF5IDUwJSksXHJcbiAgLy8gICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICByYWRpYWwtZ3JhZGllbnQoI2ZlYmYyZCA5MiUsIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3F1b3RlL2ltYWdlcy9TVkctSWNvbnMtMTQuc3ZnXCIpO1xyXG4gIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAwLjVlbSkgMC41ZW07Ki9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYXN0ZXJpc2sge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ucmVhZC1vbmx5IHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNGNkUxNUY7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmJ0bi1jYW5jZWwge1xyXG4gIGJhY2tncm91bmQ6ICAjMkMyQzJDO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5cclxuLm1iIHtcclxuICAgICYtY3JlYXRlLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICB9XHJcbn1cclxuLm1hdC1jYXJkLWltYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxufVxyXG4ubWItZm9ybSB7XHJcbiAgJiBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gICYtaW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuLm1hdC1zZWxlY3Qge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uYmFubmVyLWJvdHRvbSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYmFubmVyLWJvdHRvbS10eHQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG59XHJcbi5tYiB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIDRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAwcHggLTRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgLTRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTJweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0gICAgXHJcblxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXIgOiA1cHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "l95d":
/*!*********************************************************!*\
  !*** ./projects/moodboard/src/lib/moodboard-routing.ts ***!
  \*********************************************************/
/*! exports provided: moodboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moodboardRoutes", function() { return moodboardRoutes; });
/* harmony import */ var _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create-moodboard/create-moodboard.component */ "g1sW");
/* harmony import */ var _components_moodboard_list_moodboard_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/moodboard-list/moodboard-list.component */ "Dlam");
/* harmony import */ var _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/moodboard/moodboard.component */ "RhC9");



const moodboardRoutes = [
    {
        path: '',
        component: _components_moodboard_list_moodboard_list_component__WEBPACK_IMPORTED_MODULE_1__["MoodboardListComponent"]
    }, {
        path: 'create',
        component: _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_0__["CreateMoodboardComponent"]
    }, {
        path: 'create/:id',
        component: _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_0__["CreateMoodboardComponent"]
    }, {
        path: 'edit/:id',
        component: _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_0__["CreateMoodboardComponent"]
    }, {
        path: ':id',
        component: _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_2__["MoodboardComponent"]
    }
];


/***/ }),

/***/ "yisQ":
/*!***************************************!*\
  !*** ./projects/shop/src/projects.ts ***!
  \***************************************/
/*! exports provided: ShopService, ShopComponent, ProductDetailsComponent, ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_service_shop_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/service/shop.service */ "sRD0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return _lib_service_shop_service__WEBPACK_IMPORTED_MODULE_0__["ShopService"]; });

/* harmony import */ var _lib_components_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/components/shop/shop.component */ "EGuz");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return _lib_components_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__["ShopComponent"]; });

/* harmony import */ var _lib_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/components/product-details/product-details.component */ "9RoQ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return _lib_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsComponent"]; });

/* harmony import */ var _lib_shop_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/shop.module */ "d57d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return _lib_shop_module__WEBPACK_IMPORTED_MODULE_3__["ShopModule"]; });

/*
 * Public API Surface of shop
 */






/***/ }),

/***/ "zkoq":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
  \***************************************************************************/
/*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function() { return ɵTileCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */



const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
class TileCoordinator {
    constructor() {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` +
                `grid with cols="${this.tracker.length}".`);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridTile {
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridTile.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MatGridTileText {
    constructor(_element) {
        this._element = _element;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
MatGridTileText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true }]
        }] }); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(tile => {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(':');
        if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
    return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
    constructor(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) {
        this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = `${value == null ? '' : value}`; }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() { return this._rowHeight; }
    set rowHeight(value) {
        const newValue = `${value == null ? '' : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. ` +
                `Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
}
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatGridList.propDecorators = {
    _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
    cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridListModule {
}
MatGridListModule.ɵfac = function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); };
MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatGridListModule });
MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, { declarations: function () { return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=grid-list.js.map

/***/ })

}]);
//# sourceMappingURL=moodboard-src-lib-moodboard-module.js.map