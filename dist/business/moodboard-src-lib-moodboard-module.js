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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























class MoodboardModule {
}
MoodboardModule.ɵfac = function MoodboardModule_Factory(t) { return new (t || MoodboardModule)(); };
MoodboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: MoodboardModule });
MoodboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_moodboard_routing__WEBPACK_IMPORTED_MODULE_2__["moodboardRoutes"]),
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](MoodboardModule, { declarations: [_components_moodboard_list_moodboard_list_component__WEBPACK_IMPORTED_MODULE_1__["MoodboardListComponent"],
        _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_3__["MoodboardComponent"],
        _components_create_moodboard_create_moodboard_component__WEBPACK_IMPORTED_MODULE_11__["CreateMoodboardComponent"],
        _components_create_moodboard_popup_create_moodboard_popup_component__WEBPACK_IMPORTED_MODULE_20__["CreateMoodboardPopupComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"]] }); })();


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
/* harmony import */ var _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../core/src/lib/components/banner/banner.component */ "zukg");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");














function MoodboardListComponent_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", project_r2.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.project_name);
} }
function MoodboardListComponent_mat_tab_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-tile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MoodboardListComponent_mat_tab_15_ng_container_2_Template_mat_grid_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.mbDetails(item_r6.sgid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Board Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Created By: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6.moodboard_images, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", item_r6.boardname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.boardname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r6.user == null ? null : item_r6.user.first_name) + " " + (item_r6.user == null ? null : item_r6.user.last_name));
} }
function MoodboardListComponent_mat_tab_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoodboardListComponent_mat_tab_15_ng_container_2_Template, 15, 4, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("background:#e4e6e8;");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("label", item_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.tabContent);
} }
class MoodboardListComponent {
    constructor(moodboardService, router) {
        this.moodboardService = moodboardService;
        this.router = router;
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
    }
    ngOnInit() {
        this.getMoodBoardList();
        this.getProjectList();
    }
    mbDetails(id) {
        this.router.navigateByUrl('/moodboard/' + id);
    }
    projectFilter(ev) {
        this.projectName = ev;
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
        console.log(ev);
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
MoodboardListComponent.ɵfac = function MoodboardListComponent_Factory(t) { return new (t || MoodboardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_1__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MoodboardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoodboardListComponent, selectors: [["lib-moodboard-list"]], decls: 16, vars: 8, consts: [[3, "iconSrc", "iconAltTxt", "leftTxt", "src", "altTxt", "bottomTxt"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create"], ["mat-button", "", "href", "/moodboard/create", "mat-raised-button", ""], ["inline", "true"], [1, "mb-create-text"], [1, "select"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-align-tabs", "center", 3, "selectedTabChange"], [3, "style", "label", 4, "ngFor", "ngForOf"], [3, "value"], [3, "label"], ["cols", "4", "rowHeight", "1:1"], [4, "ngFor", "ngForOf"], [1, "tile", 3, "click"], [1, "example-card"], ["mat-card-image", "", "width", "100%", "height", "200px", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], ["fxLayout", "row", 1, "text-content"], ["fxLayout", "row", "fxLayoutGap", "1.55rem", "fxLayoutAlign", "start center", 1, "text"]], template: function MoodboardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CREATE A NEW MOODBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Select a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function MoodboardListComponent_Template_mat_select_selectionChange_12_listener($event) { return ctx.projectFilter($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MoodboardListComponent_mat_option_13_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-tab-group", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function MoodboardListComponent_Template_mat_tab_group_selectedTabChange_14_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MoodboardListComponent_mat_tab_15_Template, 3, 4, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconSrc", ctx.bannerIconImg)("iconAltTxt", ctx.bannerIconImgTxt)("leftTxt", "MoodBoard")("src", ctx.bannerImg)("altTxt", ctx.bannerImgTxt)("bottomTxt", ctx.bannerBottomTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabsData);
    } }, directives: [_core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_3__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatAnchor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTabGroup"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__["MatTab"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"]], styles: [".mb[_ngcontent-%COMP%] {\n  background: #464646;\n}\n.mb-create[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n}\n.mb-create[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 7px;\n  padding: 5px;\n  width: 300px;\n}\n.mb-create[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-left: 10px;\n}\n.mb-create[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 1rem;\n}\n.mb-create[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n.mb-create[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border-radius: 10px;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.15), 0px -4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15), 4px 0px 4px rgba(0, 0, 0, 0.15);\n}\n.mb-create[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  font-size: 32px;\n}\n.mb-create-text[_ngcontent-%COMP%] {\n  letter-spacing: 0.12em;\n  color: #ffffff;\n}\n.mb-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.mb-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.tile[_ngcontent-%COMP%]    >   .mat-figure {\n  padding: 22px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vb2Rib2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjtBQUFJO0VBQ0Usa0JBQUE7QUFFTjtBQURNO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBR1I7QUFGUTtFQUNFLGtCQUFBO0FBSVY7QUFGUTtFQUNJLG9CQUFBO0FBSVo7QUFGUTtFQUNJLGFBQUE7QUFJWjtBQUVNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdKQUFBO0FBQVI7QUFHUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRFY7QUFJTTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQUZSO0FBS0k7RUFDRSxlQUFBO0FBSE47QUFJTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRlI7QUFNRTtFQUNFLHdCQUFBO0FBSEoiLCJmaWxlIjoibW9vZGJvYXJkLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ2NDY0NjtcclxuICAgICYtY3JlYXRlIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAycmVtO1xyXG4gICAgICAuc2VsZWN0e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAvLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICAgICAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gICAgIH0gIFxyXG4gICAgICAgIH1cclxuICAgICAgLm1hdC1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC00cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLFxyXG4gICAgICAgICAgMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgICA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmLXRleHQge1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEyZW07XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtZmlsdGVyIHtcclxuICAgICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjA2MjVyZW07XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aWxlID46Om5nLWRlZXAgLm1hdC1maWd1cmV7XHJcbiAgICBwYWRkaW5nOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


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
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var projects_shop_src_projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/shop/src/projects */ "yisQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/src/lib/cell-renderer/counter/counter.component */ "n7cx");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "FKr1");


























function MoodboardComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Project Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0.moodboardDetails == null ? null : ctx_r0.moodboardDetails.moodboard == null ? null : ctx_r0.moodboardDetails.moodboard.project_name);
} }
function MoodboardComponent_ng_container_42_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-card", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "img", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", item_r16.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", item_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r16.value);
} }
function MoodboardComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MoodboardComponent_ng_container_42_mat_card_1_Template, 6, 3, "mat-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", item_r16.value == (ctx_r1.moodboardDetails == null ? null : ctx_r1.moodboardDetails.moodboard == null ? null : ctx_r1.moodboardDetails.moodboard.moodboard_type_name));
} }
function MoodboardComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MoodboardComponent_ng_container_57_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const city_r20 = ctx.$implicit; const i_r21 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r22.onCityChecked(city_r20, i_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", city_r20.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", city_r20.warehouse_name, " ");
} }
function MoodboardComponent_ng_container_69_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-checkbox", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MoodboardComponent_ng_container_69_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const cat_r24 = ctx.$implicit; const i_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26.onCategoriesChecked(cat_r24, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", cat_r24.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", cat_r24.name, " ");
} }
function MoodboardComponent_ng_container_119_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-grid-tile", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_ng_container_119_Template_mat_grid_tile_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const item_r28 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r30.productDetails(item_r28, ctx_r30.moodboardDetails); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](item_r28.total_warehouse_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", item_r28.product_sku_vartion.get_display_image[0].image_url.large, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", item_r28.product_name);
} }
function MoodboardComponent_ng_container_128_mat_icon_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-icon", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_ng_container_128_mat_icon_10_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r37); const mbItem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r35.deleteItem(mbItem_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MoodboardComponent_ng_container_128_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-grid-tile", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "mat-card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "app-counter", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("counterChange", function MoodboardComponent_ng_container_128_Template_app_counter_counterChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const mbItem_r32 = ctx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r38.increaseQuantity($event, mbItem_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MoodboardComponent_ng_container_128_mat_icon_10_Template, 2, 0, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const mbItem_r32 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mbItem_r32.button_type == 0 ? "Rent" : "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("src", mbItem_r32 == null ? null : mbItem_r32.variation.images[0].image_url.large, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", mbItem_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](mbItem_r32.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("min", 1)("readOnly", true)("max", mbItem_r32 == null ? null : mbItem_r32.total_warehouse_quantity)("counter", mbItem_r32 == null ? null : mbItem_r32.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r9.userid == (mbItem_r32 == null ? null : mbItem_r32.userid));
} }
function MoodboardComponent_mat_option_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const qoute_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", qoute_r40.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", qoute_r40.sgid, "-", qoute_r40.name, "");
} }
function MoodboardComponent_ng_template_167_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-checkbox", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_167_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45); const city_r42 = ctx.$implicit; const i_r43 = ctx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r44.onCityChecked(city_r42, i_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", city_r42.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", city_r42.warehouse_name, " ");
} }
function MoodboardComponent_ng_template_167_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_167_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r46.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MoodboardComponent_ng_template_167_ng_container_4_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r13.cityListDefault);
} }
function MoodboardComponent_ng_template_169_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-checkbox", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function MoodboardComponent_ng_template_169_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r52); const cat_r49 = ctx.$implicit; const i_r50 = ctx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r51.onCategoriesChecked(cat_r49, i_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", cat_r49.isChecked);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", cat_r49.name, " ");
} }
function MoodboardComponent_ng_template_169_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_ng_template_169_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r53.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MoodboardComponent_ng_template_169_ng_container_4_Template, 3, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r15.catListDefault);
} }
const _c0 = ["*"];
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
        this.agGrid = {};
        this.bannerIconImg = 'assets/moodboard/images/moodboard.svg';
        this.bannerIconImgTxt = 'Moodboard';
        this.moodboardDetails = '';
        this.mbQuotesList = [];
        this.stateList = [];
        this.categoriesList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.catListDefault = [];
        this.selectedCategory = null;
        this.cityList = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cityListDefault = [];
        this.selectedCity = [];
        this.min_price = '';
        this.max_price = '';
        this.min_price_inventory = '';
        this.searchTxt = null;
        this.items = [];
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
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ImageRendererComponent"],
            TotalCellRendererComponent: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_5__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CounterComponent"],
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
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
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
    onGridReady(evt) {
        this.agGrid = evt;
        evt.api.sizeColumnsToFit();
        this.rowData = this.getMoodboardSummary();
    }
    getMoodboardSummary() {
        return this.moodboardService.getMBSummary(this.mbId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((x) => {
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
        this.max_price = '';
        this.min_price = '';
        this.min_price_inventory = '';
        this.getItems();
    }
    getMBQuote(mbId) {
        this.moodboardService.getMBQuote(mbId).subscribe((response) => {
            this.mbQuotesList = response.quote;
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((item) => {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((item) => {
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
    getItems(start = 0, count = 12, category = null, supplier = null, warehouse = null, max_price = 0, min_price = 0, min_price_inventory = 0, searchTxt = null) {
        let param = {
            start: start,
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
            this.items = response.result;
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
        this.getItems(0, 12, this.selectedCategory, null, this.selectedCity.toString(), this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
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
        this.getItems(0, 12, this.selectedCategory.toString(), null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
    }
    onMinPriceRangeChange(ev) {
        this.min_price = ev;
        this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
    }
    onMaxPriceRangeChange(ev) {
        this.max_price = ev;
        this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
    }
    onQtyChange(ev) {
        this.min_price_inventory = ev;
        this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
    }
    search(ev) {
        this.searchTxt = ev;
        this.getItems(0, 12, this.selectedCategory, null, this.selectedCity, this.max_price, this.min_price, this.min_price_inventory, this.searchTxt);
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
            let doc = new jspdf__WEBPACK_IMPORTED_MODULE_6__["default"]();
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
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, Object.assign(Object.assign({}, this._pdf.getInformationTableUserOptions()), { body: info }));
            doc.addPage();
            doc.text('Moodboard Summary', 5, 15);
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, Object.assign(Object.assign({}, this._pdf.getSummaryTableUserOptions()), { columnStyles: {
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
        this._dialog.open(projects_shop_src_projects__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"], {
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
            console.log(data);
            this.getMoodboard();
            this.onGridReady(this.agGrid);
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
}
MoodboardComponent.ɵfac = function MoodboardComponent_Factory(t) { return new (t || MoodboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_9__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["PdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ComputationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CoreService"])); };
MoodboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MoodboardComponent, selectors: [["lib-moodboard"]], ngContentSelectors: _c0, decls: 171, vars: 42, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "mb"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "mb-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-details__icon"], ["srcset", "", 3, "src", "alt"], ["fxFlex", "80", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "mb-details__info"], ["fxFlex", "50", 4, "ngIf"], ["fxFlex", "50"], [1, "label"], [1, "value"], ["fxFlex", "60", "fxLayoutGap", "1rem"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a filter list icon", 3, "click"], ["fxFlex", "20", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "mb-details__info"], ["fxFlex", "80"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "stretch", 1, "mb-details"], ["fxFlex", "22", "fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "left"], [1, "filter"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 3, "click"], [1, "filter-inner"], ["src", "assets/moodboard/images/location.png", "alt", "Cities", 1, "filter-img"], [1, "filter-label"], ["fxLayout", "column", 1, "check-wrapper"], [4, "ngFor", "ngForOf", "ngForAs"], [1, "view-more", 3, "click"], ["src", "assets/moodboard/images/category.png", "alt", "Cities", 1, "filter-img"], ["src", "assets/moodboard/images/price.png", "alt", "Cities", 1, "filter-img"], ["fxLayoutGap", "1rem", "fxLayout", "row wrap", 1, "price-input"], ["fxFlex", "40", "appearance", "fill"], ["type", "number", "matInput", "", "min", "0", 3, "value", "input"], ["min", ""], ["type", "number", "matInput", "", "min", "1", 3, "value", "input"], ["max", ""], ["src", "assets/moodboard/images/qty.png", "alt", "Cities", 1, "filter-img"], ["appearance", "fill"], ["type", "number", "step", "1", "matInput", "", "min", "1", 3, "value", "input"], ["minQty", ""], ["fxFlex", "80", "fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "right"], ["fxLayout", "column", 1, "right-head-search"], ["matInput", "", "value", "", "type", "search", 3, "keyup"], ["searchInpt", ""], ["fxFlex", "100", "fxLayoutGap", "1rem", "fxLayout", "column", 1, "right-head"], [2, "max-height", "580px", "overflow-y", "scroll"], ["cols", "4", "rowHeight", "1:1"], ["fxLayout", "column", "fxLayoutGap", "2rem", "fxLayoutAlign", "stretch", 1, "mb-details", "margin-top30"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "head"], [1, "title"], ["cols", "5", "rowHeight", "1:1"], ["fxLayout", "column", "fxLayoutAlign", "stretch", 1, "head", "margin-top30"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "head"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between center", 1, "head"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 2, "background-color", "#2C2C2C", "color", "#fff", 3, "click"], ["mat-raised-button", "", "color", "accent", "aria-label", ""], ["mat-raised-button", "", "color", "accent", "aria-label", "", 2, "background-color", "#80BAFE", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "mb-summary"], ["mbsummary", ""], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "mb-summary__info"], [1, "mb-summary__info--value"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "2rem", 1, "mb-summary__info"], [1, "mb-summary__info--label"], ["id", "refresh", 3, "click"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "2rem", 1, "mb-summary__actions"], ["viewMoreCity", ""], ["viewMoreCat", ""], ["class", "example-card", 4, "ngIf"], [1, "example-card"], ["mat-card-image", "", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], [3, "checked", "change"], [1, "tile", 3, "click"], [1, "cardImg", 2, "width", "100%"], [1, "tile-box"], ["width", "100%", 1, "img", 3, "src", "alt"], [1, "tile"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "cardImg"], [1, "badge", 2, "text-align", "center", "width", "20%"], ["width", "100%", "height", "100px", 1, "img", 3, "src", "alt"], ["height", "60px", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "title"], ["fxLayout", "row", "fxLayoutAlign", "center stretch", 1, "action"], ["fxFlex", "50", 3, "min", "readOnly", "max", "counter", "counterChange"], ["style", "cursor: pointer; color: #A8A8A8;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", "color", "#A8A8A8", 3, "click"], [3, "value"], ["fxLayout", "row-reverse"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "20px"], ["fxFlex", "25", 3, "checked", "change"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "10px"], ["fxFlex", "20", 3, "checked", "change"]], template: function MoodboardComponent_Template(rf, ctx) { if (rf & 1) {
        const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MoodboardComponent_div_7_Template, 5, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Company Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Moodboard#: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Customer City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Moodboard Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Zipcode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_34_listener() { return ctx.copyMB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_37_listener() { return ctx.editMB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "edit icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, MoodboardComponent_ng_container_42_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_47_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "Clear");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55, "CITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](57, MoodboardComponent_ng_container_57_Template, 3, 2, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](58, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](59, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_div_click_60_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](168); return ctx.openModal(_r12); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](64, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](67, "CATEGORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](69, MoodboardComponent_ng_container_69_Template, 3, 2, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](70, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](71, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_div_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](170); return ctx.openModal(_r14); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "View More");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](76, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](78, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](79, "PRICE RANGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "Min $");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "input", 28, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function MoodboardComponent_Template_input_input_84_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](85); return ctx.onMinPriceRangeChange(_r4.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](86, "mat-form-field", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](88, "Max $");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function MoodboardComponent_Template_input_input_89_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](90); return ctx.onMaxPriceRangeChange(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](92, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](93, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](96, "AVAILIBEL QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](97, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](99, "Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](100, "input", 34, 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("input", function MoodboardComponent_Template_input_input_100_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](101); return ctx.onQtyChange(_r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](102, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, "Search Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "input", 38, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function MoodboardComponent_Template_input_keyup_109_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](110); return ctx.search(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](111, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](112, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](113, "Add furniture to your moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](114, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](115, "Search for a product and add it to your moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](116, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "mat-card", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](118, "mat-grid-list", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](119, MoodboardComponent_ng_container_119_Template, 6, 3, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](120, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](123, "MY MOODBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r55); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](146); return ctx.scroll(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](125, "VIEW MOODBOARD SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](126, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](127, "mat-grid-list", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](128, MoodboardComponent_ng_container_128_Template, 11, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](129, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](130, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](131, "mat-form-field", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](132, "mat-select");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, MoodboardComponent_mat_option_133_Template, 2, 3, "mat-option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](134, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](135, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](136, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_136_listener() { return ctx.createNewQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](137, "CREATE NEW QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](138, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](139, "ADD TO QUOTE OR ORDER");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](140, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](141, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_141_listener() { return ctx.requestRendering(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](142, "REQUEST RENDERING");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](143, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_143_listener() { return ctx.generateMDPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](144, "GENERATE MOODBOARD QUOTE PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](145, "div", 54, 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](147, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](148, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](149, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](150, "MOODBOARD SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](151, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](152, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](153, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](154, "Customer City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](155, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](156);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](157, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](158, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](159, "Zipcode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](160, "span", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](161);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](162, "span", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MoodboardComponent_Template_span_click_162_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](163, "ag-grid-angular", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](164, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](165, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](166, 0, ["[select]", "actions"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](167, MoodboardComponent_ng_template_167_Template, 5, 1, "ng-template", null, 63, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](169, MoodboardComponent_ng_template_169_Template, 5, 1, "ng-template", null, 64, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.bannerIconImgTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("alt", ctx.bannerIconImgTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.bannerIconImg, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.sgid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.boardname);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.catagorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](58, 28, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](59, 32, ctx.cityList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](70, 34, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](71, 38, ctx.categoriesList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.min_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.max_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", ctx.min_price_inventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard_items);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.mbQuotesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.city, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moodboardDetails == null ? null : ctx.moodboardDetails.moodboard == null ? null : ctx.moodboardDetails.moodboard.zipcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](164, 40, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridList"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelect"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__["AgGridAngular"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__["MatCheckbox"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridTile"], _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_23__["CounterComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"]], styles: [".mb[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  overflow-y: auto;\n}\n.mb-details__icon[_ngcontent-%COMP%] {\n  background: #febf2d;\n}\n.mb-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.mb-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.mb-details__copy[_ngcontent-%COMP%], .mb-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.mb-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.mb-moodboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: 332px;\n}\n.mb-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.mb-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem 1.5rem;\n  background: #323232;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.15), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%] {\n  background: white;\n  color: #9d9d9d;\n  padding: 0.3rem;\n  height: 100%;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]:not(:first-child) {\n  background: #FEBF2D;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.mb-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: grey;\n  color: white;\n  text-align: center;\n  margin: 0;\n}\n.mb-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.mb-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem 0rem;\n}\n.mb-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.mb-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.mb-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.right-head-search[_ngcontent-%COMP%], .right-head[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 15px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.tile[_ngcontent-%COMP%]    >   .mat-figure {\n  padding: 22px !important;\n}\n.tile-box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 5px;\n  color: #FFFFFF;\n  background-color: #ccc;\n}\n.badge[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 12px;\n  letter-spacing: 0.03em;\n  color: #FFFFFF;\n  border: 0.3px solid #FFFFFF;\n  background: #FD6939;\n  border-radius: 50px;\n}\n.margin-top30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 50px;\n  justify-content: center;\n}\n.check-wrapper[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.check-wrapper[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1vb2Rib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUVNO0VBQ0UsbUJBQUE7QUFBUjtBQUNRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDVjtBQUNRO0VBQ0UsbUJBQUE7RUFDQSxnSkFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFBVjtBQUdNO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQURSO0FBR007RUFDSSx5QkFBQTtBQURWO0FBSUk7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQUZOO0FBR007RUFDRSxZQUFBO0FBRFI7QUFHTTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNklBQUE7RUFHQSxrQkFBQTtBQUhSO0FBS1E7RUFJRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDRJQUFBO0VBR0Esa0JBQUE7QUFSVjtBQUZVO0VBQ0UsbUJBQUE7QUFJWjtBQU1VO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFKWjtBQU1VO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBSlo7QUFTSTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtBQVBOO0FBUU07RUFDRSxpQkFBQTtBQU5SO0FBT1E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBTFY7QUFPUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBTFY7QUFRTTtFQUNFLGVBQUE7QUFOUjtBQVVFO0VBQ0UsV0FBQTtBQVBKO0FBY0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFYTjtBQWFJO0VBRUUsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBWk47QUFpQkU7RUFDSSx3QkFBQTtBQWZOO0FBaUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFkRjtBQWdCQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUVBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQWRGO0FBZ0JBO0VBQ0UsZ0JBQUE7QUFiRjtBQWVBO0VBQ0UsZUFBQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtBQVpKO0FBY0E7RUFDRSxrQkFBQTtBQVhGO0FBWUU7RUFDRSxZQUFBO0FBVkoiLCJmaWxlIjoibW9vZGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1iIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0byA7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICAgJl9faWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgNHB4IDBweCA2cHggcmdiKDAgMCAwIC8gMTUlKSxcclxuICAgICAgICAgICAgMHB4IC00cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIC00cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOTJweDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmX19jb3B5LCZfX2luZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgJl9faW5mb3tcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMCAycmVtIDJyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtbW9vZGJvYXJkIHtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgaGVpZ2h0OiAzMzJweDtcclxuICAgICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgICZfX2xpc3Qge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IC00cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgICA0cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTUpLCAwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAgICAgJi0taXRlbSB7XHJcbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkVCRjJEO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IC00cHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgICAgIDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgICAgICAgICAgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdW1tYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtIDByZW07XHJcbiAgICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmX19hY3Rpb25zIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0LWhlYWQtc2VhcmNoLC5yaWdodC1oZWFkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZmlsdGVyIHtcclxuICAgIC8vIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAmLWlubmVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgJi1sYWJlbCB7XHJcbiAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICYtaWNvbntcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAudGlsZSA+OjpuZy1kZWVwIC5tYXQtZmlndXJle1xyXG4gICAgICBwYWRkaW5nOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4udGlsZS1ib3h7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uYmFkZ2Uge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC8vIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQ6ICNGRDY5Mzk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubWFyZ2luLXRvcDMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNoZWNrLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gIC52aWV3LW1vcmV7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardComponent_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r18.showDropdown = !ctx_r18.showDropdown; return ctx_r18.showPDropdown = !ctx_r18.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "error-border": a0, "read-only": a1 }; };
function CreateMoodboardComponent_input_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 41);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", !ctx_r7._user.getUser().isInternalUser())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, (tmp_1_0 = ctx_r7.mbCreateForm.get("moodboardCompany")) == null ? null : tmp_1_0.invalid, !ctx_r7._user.getUser().isInternalUser()));
} }
function CreateMoodboardComponent_select_32_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmp_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cmp_r21.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cmp_r21.company, " ");
} }
const _c2 = function (a0) { return { "error-border": a0 }; };
function CreateMoodboardComponent_select_32_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateMoodboardComponent_select_32_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.getProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardComponent_select_32_option_1_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, (tmp_0_0 = ctx_r8.mbCreateForm.get("company_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.companyList);
} }
function CreateMoodboardComponent_a_39_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardComponent_a_39_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.showPDropdown = !ctx_r24.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_a_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardComponent_input_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 45);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, (tmp_0_0 = ctx_r11.mbCreateForm.get("moodboardProjectName")) == null ? null : tmp_0_0.invalid));
} }
function CreateMoodboardComponent_select_42_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", prj_r27.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", prj_r27.project, " ");
} }
function CreateMoodboardComponent_select_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardComponent_select_42_option_1_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, (tmp_0_0 = ctx_r12.mbCreateForm.get("project_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r12.projectList);
} }
function CreateMoodboardComponent_option_50_Template(rf, ctx) { if (rf & 1) {
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
    constructor(fb, moodboardService, _user, _toster, _quoteService, activatedRoute, router) {
        this.fb = fb;
        this.moodboardService = moodboardService;
        this._user = _user;
        this._toster = _toster;
        this._quoteService = _quoteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.bannerIconImg = 'assets/moodboard/images/mb.png';
        this.bannerIconImgTxt = 'Moodboard';
        this.bottomTxt = 'Style & create look from our collection of designer furniture';
        this.stateList = [];
        this.mbTypeList = [];
        this.showPDropdown = true;
        this.showDropdown = true;
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
            console.log(response);
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
        console.log(this.mbCreateForm);
    }
    resetForm() {
        this.mbCreateForm.reset();
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
                    this.router.navigate(['moodboard', response.moodboard_id]);
                }
                else
                    this._toster.error(response.message);
            }, error => this._toster.error('Please contact site administrator!'));
        }
    }
}
CreateMoodboardComponent.ɵfac = function CreateMoodboardComponent_Factory(t) { return new (t || CreateMoodboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
CreateMoodboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateMoodboardComponent, selectors: [["lib-create-moodboard"]], decls: 69, vars: 28, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-create__form"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create"], ["class", "mb-create__form--title", 4, "ngIf"], [1, "mb-form"], [1, "add-field", 3, "formGroup", "ngSubmit"], [1, "label", 2, "display", "flex"], [1, "asterisk"], ["formControlName", "moodboardType", "aria-label", "Moodboard Type"], ["mbtypegroup", "matButtonToggleGroup"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-form-inner", 2, "width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 2, "width", "100%"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", " stretch", 2, "width", "100%"], [1, "label"], ["type", "text", "formControlName", "moodboardName", "placeholder", "Name your Board", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 3, "click", 4, "ngIf"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass", 4, "ngIf"], ["formControlName", "company_id", 3, "ngClass", "change", 4, "ngIf"], ["style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass", 4, "ngIf"], ["formControlName", "project_id", 3, "ngClass", 4, "ngIf"], ["formControlName", "moodboardState", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "moodboardCity", "placeholder", "Enter a City", 3, "ngClass"], ["type", "text", "formControlName", "moodboardZip", "placeholder", "Add a ZipCode", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-form-inner"], ["mat-raised-button", "", "color", "accent", "type", "submit", "mat-button", "", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "color", "accent", "mat-button", "", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "mat-button", "", 3, "click"], ["fxLayoutGap", "4rem"], [1, "mb-create__form--title"], [3, "ngClass", "value"], ["mat-card-image", "", "width", "100px", "height", "100px", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/moodboard/images/SVG-Icons-06.svg"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass"], ["formControlName", "company_id", 3, "ngClass", "change"], [3, "value"], [1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass"], ["formControlName", "project_id", 3, "ngClass"], ["mat-raised-button", "", "color", "accent", "type", "submit", "mat-button", ""], ["type", "submit", "mat-raised-button", "", "color", "accent", "mat-button", ""]], template: function CreateMoodboardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, CreateMoodboardComponent_a_29_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CreateMoodboardComponent_a_30_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CreateMoodboardComponent_input_31_Template, 1, 5, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CreateMoodboardComponent_select_32_Template, 2, 4, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CreateMoodboardComponent_a_39_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CreateMoodboardComponent_a_40_Template, 2, 0, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, CreateMoodboardComponent_input_41_Template, 1, 3, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CreateMoodboardComponent_select_42_Template, 2, 4, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CreateMoodboardComponent_option_50_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 26);
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
        let tmp_14_0 = null;
        let tmp_16_0 = null;
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, (tmp_5_0 = ctx.mbCreateForm.get("moodboardName")) == null ? null : tmp_5_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, (tmp_14_0 = ctx.mbCreateForm.get("moodboardState")) == null ? null : tmp_14_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c2, (tmp_16_0 = ctx.mbCreateForm.get("moodboardCity")) == null ? null : tmp_16_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c2, (tmp_17_0 = ctx.mbCreateForm.get("moodboardZip")) == null ? null : tmp_17_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId == "" || ctx.mbId != "" && ctx.currentPage == "create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mbId != "" && ctx.currentPage != "create");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".mb-create__form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.mb-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n}\n.mb-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.mb-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.mb-create__actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mb-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.text[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  padding: 0px;\n  border: none;\n  margin: 3px;\n  border-radius: 5px;\n}\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.6rem 1rem;\n  font-size: inherit;\n  border: 1px;\n  width: 100%;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n.mb-create-text[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n}\n.mat-card-image[_ngcontent-%COMP%]:first-child {\n  margin-bottom: -50px;\n}\n.mb-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n.mb-form-inner[_ngcontent-%COMP%] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.mat-select[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.banner-bottom[_ngcontent-%COMP%] {\n  height: 80px;\n  align-items: center;\n  display: flex;\n}\n.banner-bottom-txt[_ngcontent-%COMP%] {\n  margin: auto;\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n}\n.mb-details[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.mb-details__icon[_ngcontent-%COMP%] {\n  background: #febf2d;\n}\n.mb-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.mb-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 5px solid yellow !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1tb29kYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ047QUFDSTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQU07RUFDRSxhQUFBO0FBRVI7QUFFRTtFQUVFLGdCQUFBO0FBREo7QUFFSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFJQTtFQUNFLGdCQUFBO0FBREY7QUFHQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFBQTtBQUVBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUVGO0FBQ0E7O0VBRUUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUE7RUFDRSxTQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBRUEsOEJBQUE7RUFDQTs7O0dBQUE7RUFJQSw4REFBQTtFQUNBO2lFQUFBO0VBRUEsMEJBQUE7RUFDQSw0QkFBQTtBQUVGO0FBQ0E7RUFDRSxVQUFBO0FBRUY7QUFDQTtFQUNFLHFCQUFBO0FBRUY7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7QUFEQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQUZBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBS0Y7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQU1GO0FBREk7RUFDRSxrQkFBQTtBQUlOO0FBREE7RUFDRSxvQkFBQTtBQUlGO0FBREU7RUFDRSxZQUFBO0FBSUo7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFJSjtBQURBO0VBQ0UsYUFBQTtBQUlGO0FBRkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBS0Y7QUFIQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFNRjtBQUhFO0VBQ0UsYUFBQTtBQU1KO0FBTEk7RUFDRSxtQkFBQTtBQU9OO0FBTk07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQVFSO0FBTk07RUFDRSxtQkFBQTtFQUNBLGdKQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU9SO0FBQ0E7RUFDRSxtQ0FBQTtBQUVGIiwiZmlsZSI6ImNyZWF0ZS1tb29kYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWItY3JlYXRlIHtcclxuICAmX19mb3JtIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgJi0tdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAmLS1lbGVtZW50cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDJyZW0gNHJlbSAycmVtO1xyXG4gICAgICAmIGRpdiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19hY3Rpb25zIHtcclxuICAgIC8vIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgJiBidXR0b24ge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXh0e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xle1xyXG5ib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2IoMCAwIDAgLyAyNSUpO1xyXG5wYWRkaW5nOiAwcHg7XHJcbmJvcmRlcjogbm9uZTtcclxubWFyZ2luOiAzcHg7XHJcbmJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXB7XHJcbmJvcmRlcjogbm9uZTtcclxucGFkZGluZzogNXB4OyAgXHJcbn0gXHJcbi5sYWJlbCB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbmlucHV0LFxyXG5zZWxlY3Qge1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBib3JkZXI6IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5zZWxlY3Qge1xyXG4gIG1hcmdpbjogMDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgdHJhbnNwYXJlbnQgNTAlLCBncmF5IDUwJSksXHJcbiAgLy8gICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICByYWRpYWwtZ3JhZGllbnQoI2ZlYmYyZCA5MiUsIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3F1b3RlL2ltYWdlcy9TVkctSWNvbnMtMTQuc3ZnXCIpO1xyXG4gIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgY2FsYygxMDAlIC0gMTVweCkgY2FsYygxZW0gKyAycHgpLCBjYWxjKDEwMCUgLSAwLjVlbSkgMC41ZW07Ki9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4uYXN0ZXJpc2sge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5lcnJvci1ib3JkZXIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG4ucmVhZC1vbmx5IHtcclxuICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiAxOTBweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQ6ICNGNkUxNUY7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmJ0bi1jYW5jZWwge1xyXG4gIGJhY2tncm91bmQ6ICAjMkMyQzJDO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG5cclxuLm1iIHtcclxuICAgICYtY3JlYXRlLXRleHQge1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDJyZW07XHJcbiAgICB9XHJcbn1cclxuLm1hdC1jYXJkLWltYWdlOmZpcnN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcclxufVxyXG4ubWItZm9ybSB7XHJcbiAgJiBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG4gICYtaW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbn1cclxuLm1hdC1zZWxlY3Qge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uYmFubmVyLWJvdHRvbSB7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYmFubmVyLWJvdHRvbS10eHQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG59XHJcbi5tYiB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIDRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAwcHggLTRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgLTRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTJweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcbn0gICAgXHJcblxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXIgOiA1cHggc29saWQgeWVsbG93ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


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