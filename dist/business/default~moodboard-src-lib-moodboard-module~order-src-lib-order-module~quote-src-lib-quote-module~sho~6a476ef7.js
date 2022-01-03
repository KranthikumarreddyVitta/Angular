(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~moodboard-src-lib-moodboard-module~order-src-lib-order-module~quote-src-lib-quote-module~sho~6a476ef7"],{

/***/ "7PJY":
/*!*****************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/add-fp/add-fp.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddFPComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFPComponent", function() { return AddFPComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addproduct/add-product.service */ "BZtn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function AddFPComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r1.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r1.name, " ");
} }
class AddFPComponent {
    constructor(dialogData, _user, _quoteService, _toaster, _dialogRef, _addProductService) {
        this.dialogData = dialogData;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._dialogRef = _dialogRef;
        this._addProductService = _addProductService;
        this.quoteId = '';
        this.selectedFloorPlan = '';
        this.floorPlanTypes = [
            {
                name: 'Studio',
                sgid: 1,
            },
            {
                name: '1 Bedroom',
                sgid: 2,
            },
            {
                name: '2 Bedroom',
                sgid: 3,
            },
            {
                name: '3 Bedroom',
                sgid: 4,
            },
            {
                name: '4 Bedroom',
                sgid: 5,
            },
            {
                name: '5 Bedroom',
                sgid: 6,
            },
            {
                name: '6 Bedroom',
                sgid: 7,
            },
            {
                name: '7 Bedroom',
                sgid: 8,
            },
            {
                name: '8 Bedroom',
                sgid: 9,
            },
            {
                name: '9 Bedroom',
                sgid: 10,
            },
            {
                name: '10 Bedroom',
                sgid: 11,
            },
        ];
        this.floorPlanFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
    }
    ngOnInit() {
        this.quoteId = this.dialogData.quoteId;
        this.floorPlanFormGroup.addControl('floorplan_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.floorPlanFormGroup.addControl('floorplan_type_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.floorPlanFormGroup.addControl('units', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
    }
    onCancel() {
        this._dialogRef.close(0);
    }
    onSubmit() {
        let obj = this.floorPlanFormGroup.value;
        obj.quote_id = this.quoteId;
        obj.userid = this._user.getUser().getId();
        this._quoteService.createFloorPlan(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.message);
                this._dialogRef.close(1);
                this._dialogRef.close({ event: 'success' });
            }
            else {
                this._toaster.success(resp.message);
                this._dialogRef.close(0);
            }
        });
    }
}
AddFPComponent.ɵfac = function AddFPComponent_Factory(t) { return new (t || AddFPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__["AddProductService"])); };
AddFPComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddFPComponent, selectors: [["lib-add-fp"]], inputs: { quoteId: "quoteId" }, decls: 27, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], [2, "margin-bottom", "2rem"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "2rem"], ["fxLayout", "column", "fxLayoutGap", "2rem", "action", "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "start"], [2, "width", "50%"], ["appearance", "outline"], ["formControlName", "floorplan_name", "matInput", ""], ["formControlName", "floorplan_type_id"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "units", "matInput", ""], ["mat-dialog-actions", "", "fxLayoutAlign", "center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "disabled", "click"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], [3, "value"]], template: function AddFPComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Create a floor plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Floor Plan Name*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Floor Plan Type*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AddFPComponent_mat_option_16_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "No of Units*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddFPComponent_Template_button_click_23_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddFPComponent_Template_button_click_25_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.floorPlanFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.floorPlanTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.floorPlanFormGroup.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtZnAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6ImFkZC1mcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "8/+T":
/*!******************************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote-list/quote-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: QuoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListComponent", function() { return QuoteListComponent; });
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote-list.service */ "Bkdd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/src/lib/components/banner/banner.component */ "zukg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");














function QuoteListComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", project_r3.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r3.project_name);
} }
function QuoteListComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", project_r4.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r4.project_name);
} }
class QuoteListComponent {
    constructor(_quoteListService, _router, _userService) {
        this._quoteListService = _quoteListService;
        this._router = _router;
        this._userService = _userService;
        this.quoteInfo = {
            bannerIconImg: 'assets/dashboard/images/quote.svg',
            bannerIconImgTxt: 'Quote Icon',
            bannerImg: 'assets/quote/images/quote_banner.jpg',
            bannerImgTxt: 'Quote Banner Image',
            bannerBottomTxt: 'Get an estimated cost for a particular moodboard, piece or project.',
            text: 'Quote',
        };
        this.projectName = '';
        this.columnDefs = [
            { field: 'sgid', headerName: 'Quote Number' },
            { field: 'name', headerName: 'Customer name' },
            { field: 'company_name', headerName: 'Company Name' },
            { field: 'project_name', headerName: 'Project Name' },
            {
                field: 'created_at',
                headerName: 'Quote Created Date',
                valueFormatter: (params) => {
                    var _a, _b;
                    return (_b = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.created_at) === null || _b === void 0 ? void 0 : _b.split(' ')[0];
                }
            },
            {
                field: 'is_order',
                headerName: 'Order Submitted',
                onCellClicked: (params) => {
                    console.log(params);
                },
            },
        ];
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
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]();
        this.gridOptions = {
            onRowClicked: (param) => this.onRowClicked(param),
            // headerHeight: 100
            rowHeight: 50,
            onGridReady: (api) => this.onGridReady(api),
        };
        this.selectedButton = 'allQuote';
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ImageRendererComponent"],
        };
        this.projectList = [];
        this.selectedProject = "";
    }
    ngOnInit() {
        this.getProjectList();
    }
    onGridReady(api) {
        this.getQuoteList();
        api.api.sizeColumnsToFit();
    }
    onRowClicked(param) {
        var _a, _b;
        let quoteId = (_a = param === null || param === void 0 ? void 0 : param.data) === null || _a === void 0 ? void 0 : _a.sgid;
        if (((_b = param === null || param === void 0 ? void 0 : param.data) === null || _b === void 0 ? void 0 : _b.order_status) && quoteId) {
            this._router.navigate(['order', quoteId]);
        }
        else if (quoteId) {
            this._router.navigate(['quote', quoteId]);
        }
    }
    getQuoteList() {
        //this.getProjectList();
        this.rowData = this._quoteListService.getQuoteList(this._userService.getUser().getId(), this.selectedButton == 'myQuote' ? 'my' : '', 'quotes', this.selectedProject);
    }
    myQuote() {
        this.selectedButton = 'myQuote';
        this.getQuoteList();
    }
    allQuote() {
        this.selectedButton = 'allQuote';
        this.getQuoteList();
    }
    onTabChanged(ev) {
        if (ev.index == 0) {
            this.allQuote();
        }
        if (ev.index == 1) {
            this.myQuote();
        }
    }
    getProjectList() {
        let userId = this._userService.getUser().getId();
        this._quoteListService.getProjectList(this.selectedButton == 'myQuote' ? 'my' : 'all', userId).subscribe((response) => {
            this.projectList = response.quoteProject;
        });
    }
    createQuote() {
        this._router.navigate(['quote/create']);
    }
    projectFilter(value) {
        this.selectedProject = value === null || value === void 0 ? void 0 : value.target.value;
        this.getQuoteList();
    }
}
QuoteListComponent.ɵfac = function QuoteListComponent_Factory(t) { return new (t || QuoteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_list_service__WEBPACK_IMPORTED_MODULE_3__["QuoteListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
QuoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuoteListComponent, selectors: [["lib-quote-list"]], decls: 26, vars: 22, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quotes"], [3, "iconSrc", "iconAltTxt", "leftTxt", "src", "altTxt", "bottomTxt"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quotes-create"], ["mat-raised-button", "", 3, "click"], ["inline", "true"], [1, "quotes-create-text"], ["color", "accent", "mat-align-tabs", "center", 1, "tabs", 2, "background-color", "#F8F8F8", "padding-top", "2rem", "margin-top", "1rem", 3, "selectedTabChange"], ["tabsReference", ""], ["label", "ALL QUOTES"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [3, "ngModel", "change", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "500px", 3, "defaultColDef", "gridOptions", "rowData", "columnDefs"], ["label", "MY QUOTES"], [3, "value"]], template: function QuoteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuoteListComponent_Template_button_click_3_listener() { return ctx.createQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "CREATE A NEW QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-tab-group", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedTabChange", function QuoteListComponent_Template_mat_tab_group_selectedTabChange_8_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QuoteListComponent_Template_select_change_12_listener($event) { return ctx.projectFilter($event); })("ngModelChange", function QuoteListComponent_Template_select_ngModelChange_12_listener($event) { return ctx.selectedProject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Select a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, QuoteListComponent_option_15_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "ag-grid-angular", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function QuoteListComponent_Template_select_change_20_listener($event) { return ctx.projectFilter($event); })("ngModelChange", function QuoteListComponent_Template_select_ngModelChange_20_listener($event) { return ctx.selectedProject = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Select a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, QuoteListComponent_option_23_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ag-grid-angular", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconSrc", ctx.quoteInfo.bannerIconImg)("iconAltTxt", ctx.quoteInfo.bannerIconImgTxt)("leftTxt", ctx.quoteInfo.text)("src", ctx.quoteInfo.bannerImg)("altTxt", ctx.quoteInfo.bannerImgTxt)("bottomTxt", ctx.quoteInfo.bannerBottomTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 18, ctx.rowData))("columnDefs", ctx.columnDefs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedProject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 20, ctx.rowData))("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridAngular"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".quotes-create[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2rem 0;\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  font-size: 32px;\n}\n.quotes-create-text[_ngcontent-%COMP%] {\n  color: #464646;\n  font-weight: 600;\n  font-size: 17px;\n}\n.quotes-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.quotes-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Brandon Grotesque-bld\";\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.quotes-table[_ngcontent-%COMP%] {\n  margin: 0 4rem;\n  background: #f8f8f8;\n  border-radius: 7px;\n  margin-bottom: 4rem;\n}\n.select[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 7px;\n  padding: 5px;\n  width: 300px;\n  margin-left: 6rem;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-left: 10px;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 1rem;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-tab-label-active {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]     .mat-tab-label-content {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n}\n[_nghost-%COMP%]     .mat-tab-label:first-child {\n  margin-right: 70px;\n}\n[_nghost-%COMP%]     .mat-tab-labels {\n  padding: 10px;\n}\nselect[_ngcontent-%COMP%] {\n  width: 30% !important;\n  background: url('_-_-_-assets-images-dropdownyellow.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 10px;\n  border: none;\n  background-color: #ffffff !important;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: black;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n  color: #adadad;\n}\nselect.ng-valid[_ngcontent-%COMP%] {\n  color: black;\n}\nselect[ng-reflect-model=\"\"][_ngcontent-%COMP%] {\n  color: #adadad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBQ047QUFBTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRVI7QUFDSTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBRUk7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHRTtFQUNFLGNBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7QUFISjtBQUtFO0VBQ0Usb0JBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUEY7QUFXRTtFQUNFLGtCQUFBO0FBUko7QUFZQTtFQUNFLGFBQUE7QUFURjtBQVlBO0VBQ0UscUJBQUE7RUFDQSxrRkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFZQTtFQUNFLFlBQUE7QUFURjtBQVdBO0VBQ0UsY0FBQTtBQVJGO0FBV0E7RUFDRSxZQUFBO0FBUkY7QUFXQTtFQUNFLGNBQUE7QUFSRiIsImZpbGUiOiJxdW90ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlcyB7XHJcbiAgJi1jcmVhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgLy9sZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG4gICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWZpbHRlciB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LWZhbWlseTogXCJCcmFuZG9uIEdyb3Rlc3F1ZS1ibGRcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi4wNjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtdGFibGUge1xyXG4gICAgbWFyZ2luOiAwIDRyZW07XHJcbiAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAvLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZHJvcGRvd255ZWxsb3cuc3ZnXCIpIG5vLXJlcGVhdCA5NyUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnNlbGVjdCBvcHRpb246Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG5zZWxlY3QubmctdmFsaWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuc2VsZWN0W25nLXJlZmxlY3QtbW9kZWw9XCJcIl0ge1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "BZtn":
/*!************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/addproduct/add-product.service.ts ***!
  \************************************************************************************/
/*! exports provided: AddProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductService", function() { return AddProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");


class AddProductService {
    constructor(_http, _env, _user) {
        this._http = _http;
        this._env = _env;
        this._user = _user;
    }
    getFPList(id) {
        let url = 'getFloorplanDetails';
        return this._http.sendPOSTRequest(this._env.getEndPoint() + url, JSON.stringify({ "quote_id": id }));
    }
    getFPTypeList() {
        let url = 'getFloorplanType';
        return this._http.sendGETRequest(this._env.getEndPoint() + url);
    }
}
AddProductService.ɵfac = function AddProductService_Factory(t) { return new (t || AddProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AddProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AddProductService, factory: AddProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Bkdd":
/*!****************************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote-list/quote-list.service.ts ***!
  \****************************************************************************/
/*! exports provided: QuoteListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteListService", function() { return QuoteListService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");




class QuoteListService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    getQuoteList(userId, type, sourceType, projectName = '') {
        let url = 'load/customer/quotes?user_id=' +
            userId +
            '&source_type=' +
            type +
            '&type=' +
            sourceType +
            '&project_name=' +
            projectName;
        return this.http.sendGETRequest(this.env.getEndPoint() + url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data.quote;
        }));
    }
    getProjectList(sourceType, userId) {
        return this.http.sendGETRequest(this.env.getEndPoint() +
            'getQuoteProjectFilter?project_name=' +
            '&source_type=' +
            sourceType +
            '&userid=' +
            userId);
    }
}
QuoteListService.ɵfac = function QuoteListService_Factory(t) { return new (t || QuoteListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"])); };
QuoteListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuoteListService, factory: QuoteListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Cvmg":
/*!**********************************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote-detail/quote-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuoteDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailComponent", function() { return QuoteDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _quote_quote_detail_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../quote/quote-detail.service */ "Mn8n");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/components/quote-header/quote-header.component */ "Tu8c");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");














const _c0 = ["quoteHeader"];
function QuoteDetailComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteDetailComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.generatePdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " GENERATE PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function QuoteDetailComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteDetailComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.continueToPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " CONTINUE TO PAYMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class QuoteDetailComponent {
    constructor(_route, _quoteDetailService, _toaster, _dialog, _user, _core, _pdf, _router) {
        this._route = _route;
        this._quoteDetailService = _quoteDetailService;
        this._toaster = _toaster;
        this._dialog = _dialog;
        this._user = _user;
        this._core = _core;
        this._pdf = _pdf;
        this._router = _router;
        this.quoteId = 0;
        this.quoteHeader = {};
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.quoteId = params.id;
        });
    }
    saveQuote() {
        var _a;
        let quoteData = [];
        let quoteDetails = this.quoteHeader.quoteDetails;
        let pinnedRowData = this.quoteHeader.pinnedBottomRowData;
        let agGrid = this.quoteHeader.agGrid;
        (_a = agGrid === null || agGrid === void 0 ? void 0 : agGrid.api) === null || _a === void 0 ? void 0 : _a.forEachNode((rowNode) => {
            let node = rowNode.data;
            let obj = {
                sgid: node === null || node === void 0 ? void 0 : node.sgid,
                button_type: node === null || node === void 0 ? void 0 : node.button_type,
                quote_id: quoteDetails.sgid,
                sub_total: pinnedRowData[0].is_total,
                old_month: node.old_month,
                monthly_rent: quoteDetails.monthly_rent,
                delivery_fee: quoteDetails.delivery_fee,
                pickup_fee: quoteDetails.pickup_fee,
                tax: pinnedRowData[2].is_total,
                net_total: quoteDetails.net_total,
                qty: node.is_qty,
                discount: node.discount || 0,
                quote_discount: quoteDetails.discount || 0,
                quote_discount_price: quoteDetails.discount_price || 0,
                percentage_discount: node.percentage_discount || 0,
                months: node.months,
                total: node.is_total,
                price: node.price,
                buy_price: node.buy_price,
                sale_price: node.price,
                apply_b2b_discount: node.b2b_discount || 0,
            };
            quoteData.push(obj);
        });
        this._quoteDetailService.updateQuote(quoteData).subscribe((data) => {
            this._toaster.success('Quote Saved Successfully');
        }, (error) => {
            this._toaster.error(error);
        });
    }
    continueToPayment() {
        var _a, _b;
        this._dialog
            .open(projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["PaymentComponent"], {
            height: '15rem',
            data: { quoteId: (_b = (_a = this.quoteHeader) === null || _a === void 0 ? void 0 : _a.quoteDetails) === null || _b === void 0 ? void 0 : _b.sgid },
        })
            .afterClosed()
            .subscribe((data) => {
            var _a, _b;
            data['quote_id'] = (_b = (_a = this.quoteHeader) === null || _a === void 0 ? void 0 : _a.quoteDetails) === null || _b === void 0 ? void 0 : _b.sgid;
            data['sgid'] = this._user.getUser().getId();
            this._quoteDetailService.createOrder(data).subscribe((resp) => {
                var _a, _b;
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.result);
                    this._router.navigate([
                        'order',
                        (_b = (_a = this.quoteHeader) === null || _a === void 0 ? void 0 : _a.quoteDetails) === null || _b === void 0 ? void 0 : _b.sgid,
                    ]);
                }
                else {
                    this._toaster.success(resp.result);
                }
            }, (error) => {
                this._toaster.success(error);
            });
        }, (error) => { });
    }
    generatePdf() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = this._pdf.getAgGridRowsAndColumns(this.quoteHeader.agGrid);
            data.columns.shift();
            data.columns.unshift('S.NO');
            let img = document.getElementsByClassName('header-img')[0];
            const block_total = yield html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(img);
            const block_canvas = block_total.toDataURL('image/png');
            let imagesObs = this._pdf.getAllTableBase64Images(data === null || data === void 0 ? void 0 : data.rows, 3);
            imagesObs.subscribe((images) => {
                var _a;
                let doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__["default"]();
                const pdf_font = this._pdf.addFont();
                const pdf_font_bold = this._pdf.addBoldFont();
                doc.addFileToVFS(pdf_font.name, pdf_font.value);
                doc.addFileToVFS(pdf_font_bold.name, pdf_font_bold.value);
                doc.addFont("Poppins.ttf", "Poppins", "normal");
                doc.addFont("Poppins-Bold.ttf", "Poppins-Bold", "bold");
                // doc.setFont('Poppins','normal');
                doc.setFont('Poppins-Bold', 'bold');
                doc.setFontSize(12);
                doc.addImage(block_canvas, 'PNG', 8, 5, 40, 10);
                doc.text('Quote Information', 8, 25);
                let info = [
                    ['Project Name:', this.quoteHeader.quoteDetails.project_name, 'Address', this.quoteHeader.quoteDetails.address],
                    ['Company Name:', this.quoteHeader.quoteDetails.company_name, 'Quote :', this.quoteHeader.quoteDetails.sgid],
                    ['Contact No:', this.quoteHeader.quoteDetails.contactno, 'State:', this.quoteHeader.quoteDetails.is_state_name],
                    ['Customer Name:', this.quoteHeader.quoteDetails.name, 'Email:', this.quoteHeader.quoteDetails.email],
                    ['City:', this.quoteHeader.quoteDetails.city_name, 'Zipcode:', this.quoteHeader.quoteDetails.zipcode],
                ];
                jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, Object.assign(Object.assign({}, this._pdf.getInformationTableUserOptions()), { startY: 30, body: info, styles: { fontSize: 8 }, columnStyles: {
                        0: { cellWidth: 30, font: 'Poppins-Bold', fontStyle: 'bold' },
                        1: { cellWidth: 25, font: 'Poppins', fontStyle: 'normal' },
                        2: { cellWidth: 17, font: 'Poppins-Bold', fontStyle: 'bold' },
                        3: { font: 'Poppins', fontStyle: 'normal' },
                    } }));
                //      doc.addPage();
                doc.text('Quote Summary', 7, 77);
                jspdf_autotable__WEBPACK_IMPORTED_MODULE_3___default()(doc, Object.assign(Object.assign({}, this._pdf.getSummaryTableUserOptions()), { startY: 82, rowPageBreak: 'avoid', 
                    //   margin: {
                    //     top: 10,
                    //     bottom: 10,
                    //     left: 1,
                    //     right: 1,
                    // },
                    columnStyles: {
                        0: { cellWidth: 11 },
                        1: { cellWidth: 20 },
                        2: { cellWidth: 18 },
                        3: { cellWidth: 20 },
                        4: { cellWidth: 30 },
                        5: { cellWidth: 15 },
                        6: { cellWidth: 14 },
                        7: { cellWidth: 20 },
                        8: { cellWidth: 20 },
                        11: { cellWidth: 12 },
                        12: { cellWidth: 18 },
                    }, columns: data.columns, body: (_a = data === null || data === void 0 ? void 0 : data.rows) === null || _a === void 0 ? void 0 : _a.map((r) => {
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
                            data.cell.text = '';
                            data.cell.styles.halign = 'center';
                            data.cell.styles.valign = 'middle';
                        }
                        if (data.section === 'body' && data.column.index === 10) {
                            data.cell.text = `$${data.cell.text}`;
                        }
                    }, didDrawCell: (data) => {
                        if (data.section === 'body' && data.column.index === 3) {
                            var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
                            doc.addImage(base64Img, 'JPEG', data.cell.x + 1, data.cell.y + 1, 18, 18);
                            data.cell.styles.halign = 'center';
                            data.cell.styles.valign = 'middle';
                        }
                    } }));
                doc.save('quote.pdf');
            });
        });
    }
}
QuoteDetailComponent.ɵfac = function QuoteDetailComponent_Factory(t) { return new (t || QuoteDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_quote_quote_detail_service__WEBPACK_IMPORTED_MODULE_7__["QuoteDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["PdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
QuoteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: QuoteDetailComponent, selectors: [["lib-quote-detail"]], viewQuery: function QuoteDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.quoteHeader = _t.first);
    } }, decls: 10, vars: 3, consts: [["fxFill", "", 3, "quoteId"], ["quoteHeader", ""], ["actions", ""], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "click"], ["mat-flat-button", "", "color", "accent", "class", "round", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["mat-flat-button", "", "color", "accent", "class", "green-btn round", 3, "click", 4, "ngIf"], ["id", "my-table"], ["mat-flat-button", "", "color", "accent", 1, "green-btn", "round", 3, "click"]], template: function QuoteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "lib-quote-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_4_listener() { return ctx.saveQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " SAVE QUOTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, QuoteDetailComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, QuoteDetailComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "table", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("quoteId", ctx.quoteId);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.editQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r0.editQuote);
    } }, directives: [_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_9__["QuoteHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexFillDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "ErMq":
/*!*******************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/add-moodboard-quote/add-moodboard-quote.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddMoodboardQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMoodboardQuoteComponent", function() { return AddMoodboardQuoteComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-fp/select-fp.component */ "Gp7D");
/* harmony import */ var _select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-fpu/select-fpu.component */ "uq8a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-header/quote-header.service */ "g7tG");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");












function AddMoodboardQuoteComponent_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", moodboard_r1.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](moodboard_r1.boardname);
} }
class AddMoodboardQuoteComponent {
    constructor(_quoteHeaderService, dialogData, _user, _quoteService, _toaster, _dialogRef, dialogRef) {
        this._quoteHeaderService = _quoteHeaderService;
        this.dialogData = dialogData;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._dialogRef = _dialogRef;
        this.dialogRef = dialogRef;
        this.selectedMoodboard = '';
    }
    ngOnInit() {
        this.getMoodBoards();
    }
    getMoodBoards() {
        this._quoteHeaderService.getMoodBoardByUser().subscribe((data) => {
            this.moodboardList = data.result;
        }, (error) => {
            this.moodboardList = [];
        });
    }
    add(type) {
        if (type == '') {
            let obj = {
                quote_id: this.dialogData.quoteId,
                moodboard_id: this.selectedMoodboard,
                user_id: this._user.getUser().getId()
            };
            this._quoteService.addQuoteMoodboard(obj).subscribe((resp) => {
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.message);
                    this.dialogRef.close({ event: 'defaultunit' });
                }
                else {
                    this._toaster.success(resp.message);
                    this._dialogRef.closeAll();
                }
            });
        }
        if (type == 'fp') {
            this._dialogRef
                .open(_select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_1__["SelectFpComponent"], {
                height: '70%',
                width: '70%',
                data: {
                    isDialog: true,
                    qid: this.dialogData.quoteId,
                    mid: this.selectedMoodboard
                },
            })
                .afterClosed()
                .subscribe((data) => {
                console.log(data);
                if (data && data.event == 'success') {
                    this.dialogRef.close({ event: 'floorPlan' });
                }
            });
        }
        if (type == 'fpu') {
            this._dialogRef
                .open(_select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_2__["SelectFpuComponent"], {
                height: '80%',
                width: '50%',
                data: {
                    isDialog: true,
                    qid: this.dialogData.quoteId,
                    mid: this.selectedMoodboard
                },
            })
                .afterClosed()
                .subscribe((data) => {
                console.log(data);
                if (data && data.event == 'success') {
                    this.dialogRef.close({ event: 'floorPlanUnit' });
                }
            });
        }
    }
    closeModal() {
        this._dialogRef.closeAll();
    }
}
AddMoodboardQuoteComponent.ɵfac = function AddMoodboardQuoteComponent_Factory(t) { return new (t || AddMoodboardQuoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_4__["QuoteHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_6__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
AddMoodboardQuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddMoodboardQuoteComponent, selectors: [["lib-add-moodboard-quote"]], decls: 42, vars: 5, consts: [[1, "moodboard"], ["fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", " stretch"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between center"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "1rem"], ["fxFlex", "50", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "2rem", 2, "margin-top", "3rem !important"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "98%", "background", "#F4F4F4", "padding", "22px", "margin", "2%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%"], ["mat-flat-button", "", "fxFlex", "30", "color", "accent", 1, "btn-txt", "round", 3, "disabled", "click"], ["mat-raised-button", "", "fxFlex", "30", "type", "button", "color", "accent", 1, "round", 3, "disabled", "click"], [3, "value"]], template: function AddMoodboardQuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "LET'S GET STARTED");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddMoodboardQuoteComponent_Template_button_click_6_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Select a Moodboard to be added to this quote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddMoodboardQuoteComponent_Template_select_ngModelChange_12_listener($event) { return ctx.selectedMoodboard = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "No Moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AddMoodboardQuoteComponent_option_15_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Where would you like to add this Moodboard in the Quote?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Add to Default Unit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Add this Moodboard directly to a quote ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddMoodboardQuoteComponent_Template_button_click_26_listener() { return ctx.add(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " Add to a Floor Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddMoodboardQuoteComponent_Template_button_click_33_listener() { return ctx.add("fp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Add to Unit(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddMoodboardQuoteComponent_Template_button_click_40_listener() { return ctx.add("fpu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.selectedMoodboard);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.moodboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.selectedMoodboard == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.selectedMoodboard == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.selectedMoodboard == "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".moodboard[_ngcontent-%COMP%] {\n  padding: 0rem 2rem 2rem 2rem;\n}\n.moodboard[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.moodboard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 18px;\n  color: #000000;\n}\n.moodboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-weight: bold;\n  font-size: 17px;\n  color: #2c2c2c;\n}\n.moodboard[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 60% !important;\n  background: url('dropdownyellow.svg') no-repeat 96% !important;\n  -webkit-appearance: none;\n  border: none;\n  background: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtbW9vZGJvYXJkLXF1b3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0kscUJBQUE7RUFDQSw4REFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFFUiIsImZpbGUiOiJhZGQtbW9vZGJvYXJkLXF1b3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vb2Rib2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzJjMmMyYztcclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL21vb2Rib2FyZC9zcmMvbGliL2Fzc2V0cy9pbWFnZXMvZHJvcGRvd255ZWxsb3cuc3ZnXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "GEx9":
/*!**********************************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote-create/quote-create.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuoteCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteCreateComponent", function() { return QuoteCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/lib/services/toaster.service */ "vjv+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/quote-create-form/quote-create-form.component */ "Oq4D");





const _c0 = ["quoteFormComp"];
class QuoteCreateComponent {
    constructor(_router, _toaster, _location) {
        var _a;
        this._router = _router;
        this._toaster = _toaster;
        this._location = _location;
        this.customerName = '';
        this.subTitle = 'Get an estimated cost for a particular moodboard, piece or project.';
        this.submitButtonText = 'CREATE';
        this.type = 'CREATE';
        this.quoteFormComp = {};
        let stateObject = (_a = _router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.customerName = stateObject === null || stateObject === void 0 ? void 0 : stateObject.customerName;
    }
    ngOnInit() {
        if (!this.customerName) {
            this._router.navigate(['quote/create']);
        }
        if (this._router.url.includes('copy')) {
            this.type = 'COPY';
            this.subTitle = 'Copying Quote named -';
        }
        else if (this._router.url.includes('edit')) {
            this.subTitle = 'Editing Quote named -';
            this.type = 'EDIT';
            this.submitButtonText = 'UPDATE';
        }
    }
    onSubmit(quote) {
        // this._toaster.success('Quote Created');
        if (this.type == 'COPY')
            this._location.back();
        this._router.navigate(['quote', quote.sgid], { state: { initDialog: true } });
    }
    onCancel() {
        // this._location.back();
    }
}
QuoteCreateComponent.ɵfac = function QuoteCreateComponent_Factory(t) { return new (t || QuoteCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
QuoteCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteCreateComponent, selectors: [["lib-quote-create"]], viewQuery: function QuoteCreateComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quoteFormComp = _t.first);
    } }, decls: 2, vars: 2, consts: [[1, "table", 3, "type", "submitButtonText", "onSubmit", "onCancel"], ["quoteFormComp", ""]], template: function QuoteCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "lib-quote-create-form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function QuoteCreateComponent_Template_lib_quote_create_form_onSubmit_0_listener($event) { return ctx.onSubmit($event); })("onCancel", function QuoteCreateComponent_Template_lib_quote_create_form_onCancel_0_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("submitButtonText", ctx.submitButtonText);
    } }, directives: [_common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_4__["QuoteCreateFormComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-content: stretch center;\n  align-items: stretch;\n}\n\n.table[_ngcontent-%COMP%] {\n  padding: 1rem 10rem 2rem 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUNFLDhCQUFBO0FBRUYiLCJmaWxlIjoicXVvdGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwbGFjZS1jb250ZW50OiBzdHJldGNoIGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4udGFibGUge1xyXG4gIHBhZGRpbmc6MXJlbSAxMHJlbSAycmVtIDEwcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Gp7D":
/*!***********************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/select-fp/select-fp.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectFpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFpComponent", function() { return SelectFpComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-fp/add-fp.component */ "7PJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../quote.service */ "qqH+");
/* harmony import */ var _addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addproduct/add-product.service */ "BZtn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");












function SelectFpComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", fp_r3.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", fp_r3.floorname, " ");
} }
function SelectFpComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Select a floor plan to view the units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "allow-click": a0 }; };
const _c1 = function (a0) { return { "fa-check": a0 }; };
function SelectFpComponent_div_18_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_div_18_div_9_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const unit_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.selectUnitsForPlans(unit_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r4.isSelectedAll ? true : false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](unit_r5.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, unit_r5.isActive ? true : false));
} }
function SelectFpComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_div_18_Template_input_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.isAllUnit(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "All Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_div_18_Template_input_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.isAllUnit(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Selected Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SelectFpComponent_div_18_div_9_Template, 6, 7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.fpuList);
} }
class SelectFpComponent {
    constructor(_dialog, dialogData, _user, _quoteService, _toaster, _dialogRef, _addProductService) {
        this._dialog = _dialog;
        this.dialogData = dialogData;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._dialogRef = _dialogRef;
        this._addProductService = _addProductService;
        this.fplist = [];
        this.fpuList = [];
        this.selectedFpid = '';
        this.isSelectedAll = true;
    }
    ngOnInit() {
        this.getFpList();
    }
    getFpList() {
        this._addProductService.getFPList(this.dialogData.qid).subscribe((data) => {
            this.fplist = data.result;
        }, (error) => {
            this._toaster.error(error);
        });
    }
    onCancel() {
        this._dialogRef.close(0);
    }
    getFpu(ev) {
        this.selectedFpid = ev.target.value;
        let obj = {
            quote_id: this.dialogData.qid,
            floorplan_id: this.selectedFpid
        };
        this._quoteService.getFpus(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this.fpuList = resp.result;
                this.fpuList.forEach((elem, index) => {
                    elem.isActive = true;
                });
                // this._toaster.success(resp.message);
                // this._dialogRef.close(1);
            }
            else {
                // this._toaster.success(resp.message);
                // this._dialogRef.close(0);
            }
        });
    }
    selectUnitsForPlans(unit) {
        if (unit.isActive) {
            let checker = 0;
            this.fpuList.forEach((elem) => {
                if (elem.isActive) {
                    checker++;
                }
            });
            if (checker > 1) {
                unit.isActive = false;
            }
            else {
            }
        }
        else {
            unit.isActive = true;
        }
    }
    isAllUnit(bool) {
        if (bool) {
            this.isSelectedAll = true;
            this.fpuList.forEach((elem) => {
                elem.isActive = true;
            });
        }
        else {
            this.isSelectedAll = false;
        }
    }
    onCreateNewFP() {
        this._dialog
            .open(_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_1__["AddFPComponent"], {
            height: '70%',
            width: '70%',
            data: {
                isDialog: true,
                quoteId: this.dialogData.qid,
            },
        })
            .afterClosed()
            .subscribe((data) => {
            console.log(data);
            if (data && data.event) {
                this.getFpList();
            }
        });
    }
    onSubmit() {
        let unitList = [];
        if (this.isSelectedAll == true) {
            this.fpuList.forEach((element) => {
                unitList.push(element.sgid);
            });
        }
        else {
            this.fpuList.forEach((element) => {
                if (element.isActive == false)
                    unitList.push(element.sgid);
            });
        }
        if (this.dialogData.product_id) {
            let obj = {
                quote_id: this.dialogData.qid,
                floorplan_id: this.selectedFpid,
                user_id: this._user.getUser().getId(),
                units: unitList,
                product_id: this.dialogData.product_id,
                sku: this.dialogData.sku,
                quantity: this.dialogData.quantity,
                button_type: this.dialogData.button_type,
                month: this.dialogData.month,
                warehouse_id: this.dialogData.warehouse_id,
                source: this.dialogData.source
            };
            this._quoteService.addFPQuote(obj).subscribe((resp) => {
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.result);
                    this._dialogRef.close({ event: "success" });
                }
                else {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(0);
                }
            });
        }
        else {
            let obj = {
                quote_id: this.dialogData.qid,
                moodboard_id: this.dialogData.mid,
                user_id: this._user.getUser().getId(),
                floorplan_id: this.selectedFpid,
                units: unitList,
                source: this.dialogData.source
            };
            this._quoteService.addFPMB(obj).subscribe((resp) => {
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(1);
                }
                else {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(0);
                }
            });
        }
    }
}
SelectFpComponent.ɵfac = function SelectFpComponent_Factory(t) { return new (t || SelectFpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__["AddProductService"])); };
SelectFpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectFpComponent, selectors: [["lib-select-fp"]], decls: 24, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], [2, "margin-bottom", "2rem"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "2rem"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "txt", 2, "width", "100%", "margin", "2%"], ["fxLayout", "row", "fxLayoutAlign", "center", 2, "width", "100%", "margin", "2%"], ["fxFlex", "100", "fxLayout", "column", "fxLayoutAlign", " center"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "center", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/quote/images/SVG-Icons-06.svg"], [2, "width", "100%", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "style", "width: 98%; background: #F4F4F4;padding: 44px; margin: 2%;", "fxLayoutAlign", "space-between start", "class", "nofptxt", 4, "ngIf"], ["fxLayout", "column", "style", "width: 98%; background: #F4F4F4; margin: 2%;", "fxLayoutAlign", "space-between start", "class", "nofptxt d-flex  justify-content-center p-2 my-3", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayoutAlign", "center"], ["mat-button", "", "color", "accent", 1, "btn-add", 3, "click"], ["mat-button", "", "color", "primary", 1, "btn-cancel", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "nofptxt", 2, "width", "98%", "background", "#F4F4F4", "padding", "44px", "margin", "2%"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 1, "nofptxt", "d-flex", "justify-content-center", "p-2", "my-3", 2, "width", "98%", "background", "#F4F4F4", "margin", "2%"], ["fxLayout", "row"], [1, "form-check-label", 2, "padding", "10px"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "checked", "click"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "click"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "nofptxt", "d-flex", "justify-content-center", "p-2", "my-3", 2, "width", "98%", "background", "#F4F4F4", "margin", "2%"], ["class", "unit-box  add-unit-mb", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "unit-box", "add-unit-mb", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "px-2", "pb-1", "cross-close", "fa", 2, "padding", "4px", "color", "green", 3, "ngClass"]], template: function SelectFpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add/Select Floor Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Add this moodboard to an existing floor plan or create a new floor plan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_Template_a_click_11_listener() { return ctx.onCreateNewFP(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function SelectFpComponent_Template_select_change_13_listener($event) { return ctx.getFpu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Choose existing floor plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SelectFpComponent_option_16_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SelectFpComponent_div_17_Template, 2, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, SelectFpComponent_div_18_Template, 10, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_Template_button_click_20_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpComponent_Template_button_click_22_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fplist);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fpuList.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fpuList.length > 0);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.titeltxt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000;\n}\n\n.txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: #f6e15f;\n  border-radius: 50px;\n  color: #2c2c2c;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #000000;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  color: #2C2C2C;\n}\n\n.add-unit-mb[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.allow-click[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.cross-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.cross-close[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n\n.unit-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n  padding-top: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  text-align: center;\n  color: #000000;\n  background: #FFFDFD;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZWxlY3QtZnAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFLSjs7QUFGQTtFQUNJLG9CQUFBO0VBQ0osa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFLQTs7QUFGQTtFQUNJLGVBQUE7QUFLSjs7QUFIQTtFQUNJLCtCQUFBO0FBTUo7O0FBSEU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUUoiLCJmaWxlIjoic2VsZWN0LWZwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50aXRlbHR4dHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuLnR4dCB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxufVxyXG4uYnRuLWFkZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y2ZTE1ZjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbG9yOiAjMmMyYzJjO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxufVxyXG4uYnRuLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDIwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuLmJ0bi10eHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogIzJDMkMyQztcclxuXHJcbn1cclxuLmFkZC11bml0LW1ie1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4uYWxsb3ctY2xpY2t7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICB9XHJcbiAgLmNyb3NzLWNsb3Nle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uY3Jvc3MtY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcbi51bml0LWJveCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZERkQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "IEgP":
/*!*************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/addproduct/addproduct.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-fp/select-fp.component */ "Gp7D");
/* harmony import */ var _select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../select-fpu/select-fpu.component */ "uq8a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class AddproductComponent {
    constructor(dialogData, _dialogRef, _dialog, _user, _quoteService, _toaster) {
        this.dialogData = dialogData;
        this._dialogRef = _dialogRef;
        this._dialog = _dialog;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
    }
    ngOnInit() {
    }
    add(type) {
        if (type == '') {
            if (this.dialogData.product_id) {
                let obj = {
                    quote_id: this.dialogData.quoteId,
                    product_id: this.dialogData.product_id,
                    sku: this.dialogData.sku,
                    quantity: this.dialogData.quantity,
                    button_type: this.dialogData.button_type,
                    month: this.dialogData.months,
                    warehouse_id: this.dialogData.warehouse_id,
                    user_id: this.dialogData.user_id,
                    floorplan_id: null,
                    units: null,
                    moodboard_id: null,
                };
                this._quoteService.addProductQuote(obj).subscribe((resp) => {
                    if (resp.statusCode == 200) {
                        this._toaster.success(resp.message);
                        this._dialogRef.close(1);
                    }
                    else {
                        this._toaster.success(resp.message);
                        this._dialogRef.close(0);
                    }
                });
            }
            else {
                let obj = {
                    quote_id: this.dialogData.quoteId,
                    moodboard_id: this.dialogData.mbid,
                    user_id: this._user.getUser().getId()
                };
                this._quoteService.addMBQuote(obj).subscribe((resp) => {
                    if (resp.statusCode == 200) {
                        this._toaster.success(resp.message);
                        this._dialogRef.close(1);
                    }
                    else {
                        this._toaster.success(resp.message);
                        this._dialogRef.close(0);
                    }
                });
            }
        }
        if (type == 'fp') {
            this._dialog
                .open(_select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_1__["SelectFpComponent"], {
                height: '70%',
                width: '70%',
                data: {
                    isDialog: true,
                    qid: this.dialogData.quoteId,
                    mid: this.dialogData.mbid,
                    product_id: this.dialogData.product_id,
                    sku: this.dialogData.sku,
                    quantity: this.dialogData.quantity,
                    button_type: this.dialogData.button_type,
                    month: this.dialogData.months,
                    warehouse_id: this.dialogData.warehouse_id,
                    user_id: this.dialogData.user_id,
                }
            })
                .afterClosed()
                .subscribe((data) => {
                console.log(data);
            });
        }
        if (type == 'fpu') {
            this._dialog
                .open(_select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_2__["SelectFpuComponent"], {
                height: '80%',
                width: '50%',
                data: {
                    isDialog: true,
                    qid: this.dialogData.quoteId,
                    mid: this.dialogData.mbid,
                    product_id: this.dialogData.product_id,
                    sku: this.dialogData.sku,
                    quantity: this.dialogData.quantity,
                    button_type: this.dialogData.button_type,
                    month: this.dialogData.months,
                    warehouse_id: this.dialogData.warehouse_id,
                    user_id: this.dialogData.user_id,
                },
            })
                .afterClosed()
                .subscribe((data) => {
                console.log(data);
            });
        }
        this._dialogRef.close();
    }
}
AddproductComponent.ɵfac = function AddproductComponent_Factory(t) { return new (t || AddproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["ToasterService"])); };
AddproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddproductComponent, selectors: [["lib-addproduct"]], decls: 24, vars: 0, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], [1, "h1", 2, "margin-bottom", "1rem"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "1rem"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "98%", "background", "#f4f4f4", "padding", "22px", "margin", "2%"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [1, "titeltxt"], ["mat-flat-button", "", "color", "accent", 1, "btn-txt", 3, "click"]], template: function AddproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Where would you like to add this Product? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Add to Default Unit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddproductComponent_Template_button_click_10_listener() { return ctx.add(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Add to a Floor Plan ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddproductComponent_Template_button_click_16_listener() { return ctx.add("fp"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Add to Unit(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddproductComponent_Template_button_click_22_listener() { return ctx.add("fpu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " + ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".titeltxt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000;\n}\n\n.txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  color: #2C2C2C;\n  border-radius: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxvQkFBQTtFQUNKLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHQSIsImZpbGUiOiJhZGRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGVsdHh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4udHh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5idG4tdHh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuY29sb3I6ICMyQzJDMkM7XHJcbmJvcmRlci1yYWRpdXM6IDIycHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "K5TM":
/*!****************************************************************************************!*\
  !*** ./projects/quote/src/lib/components/floor-plan-unit/floor-plan-unit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FloorPlanUnitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanUnitComponent", function() { return FloorPlanUnitComponent; });
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/components/item-type/item-type.component */ "mT0w");
/* harmony import */ var _common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/components/total-cell-renderer/total-cell-renderer.component */ "yL1b");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/moodboard/moodboard.component */ "ssVi");
/* harmony import */ var _common_components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/components/add-fp/add-fp.component */ "7PJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_components_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/components/quote-header/quote-header.service */ "g7tG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_components_floor_plan_details_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/components/floor-plan-details/floor-plan-details.service */ "w4wL");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
























function FloorPlanUnitComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r4.changeUnitName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Change Unit Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function FloorPlanUnitComponent_div_15_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", fp_r7.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", fp_r7.floorname, " ");
} }
function FloorPlanUnitComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Add/Select a Floor Plan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_15_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.onCreateNewFP(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FloorPlanUnitComponent_div_15_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.selectedFpid = $event; })("change", function FloorPlanUnitComponent_div_15_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r11.getSelectedFpu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "None Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, FloorPlanUnitComponent_div_15_option_8_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_15_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.addFloorPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r1.selectedFpid);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r1.fplist);
} }
function FloorPlanUnitComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_20_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r13.openAddMoodboardDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function FloorPlanUnitComponent_div_21_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_21_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r19); const moodboard_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r17.removeMoodboardFromFP(moodboard_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
const _c0 = function () { return {}; };
function FloorPlanUnitComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, FloorPlanUnitComponent_div_21_i_1_Template, 1, 0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r15 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.page == "QUOTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", moodboard_r15 == null ? null : moodboard_r15.unitmoodboards == null ? null : moodboard_r15.unitmoodboards.is_moodboard_images == null ? null : moodboard_r15.unitmoodboards.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](moodboard_r15 == null ? null : moodboard_r15.unitmoodboards == null ? null : moodboard_r15.unitmoodboards.boardname);
} }
class FloorPlanUnitComponent {
    constructor(_quoteHeaderService, _route, _router, _dialog, _dialog_s, _location, _toaster, _fpSevice, _user, _core, _quoteService) {
        this._quoteHeaderService = _quoteHeaderService;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        this._dialog_s = _dialog_s;
        this._location = _location;
        this._toaster = _toaster;
        this._fpSevice = _fpSevice;
        this._user = _user;
        this._core = _core;
        this._quoteService = _quoteService;
        this.page = 'QUOTE';
        this.quoteId = '';
        this.unit_id = '';
        this.unit = '';
        this.unitInfo = '';
        this.selectedFpid = '';
        this.fplist = [];
        this.agGrid = {};
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
        this.fpDetails = {};
        this.fpId = '';
        this.moodboardList = [];
        this.unitName = '';
        this.hideFloorPlanAssign = false;
        this.pinnedBottomRowData = [
            {
                subTotal: 'abc',
                sgid: 'SUB TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'DELIVERY FEE ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'TAXES ($)',
                is_total: '0',
                isExtraRow: true,
                taxPercent: 1
            },
            {
                subTotal: 'abc',
                sgid: 'TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
        ];
        this.columnDefs = [
            {
                field: 'sgid',
                width: 120,
                headerName: '',
                headerTooltip: '',
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
                field: 'product_images.small',
                cellStyle: {
                    padding: '0.3rem',
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
                headerName: 'RENTAL PRICE ($) /MONTH',
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
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ImageRendererComponent"],
            TotalCellRendererComponent: _common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: _common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_1__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["CounterComponent"],
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
        this.gridOptions = {
            onGridReady: (api) => {
                this.agGrid = api;
                this.onGridReady(api);
            },
            context: this,
            rowHeight: 100,
            headerHeight: 100,
            getRowHeight: (params) => {
                var _a;
                return ((_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.isExtraRow) ? 50 : 100;
            },
        };
    }
    ngOnInit() {
        if (this._router.url.indexOf('quote') >= 0) {
            this.page = 'QUOTE';
        }
        else {
            this.page = 'ORDER';
        }
        this._route.params.subscribe((params) => {
            this.quoteId = params.id;
            this.fpId = params.fpId === 'None' ? null : params.fpId;
            this.unit_id = params.unit_id;
            this.getFloorPlanDetails();
            this.getMoodBoards();
            this.getFPSummary();
            this.getFpList();
            // this.getFloorPlanUnits();
            let x = new this.frameworkComponents.CounterCellRenderer(this._user, this._core);
            x.counterChange.subscribe((resp) => console.log('counter changed'));
        });
    }
    counterFComponentUpdate(params) {
        let data = params.data;
        let obj = [
            {
                items: [
                    {
                        months: data.months,
                        qty: data.is_qty,
                        price: data.price,
                        buy_price: data.buy_price,
                        sale_price: data.is_sale_price,
                        total_price: data.is_total,
                        discount: data.discount,
                        b2b_discount: data.b2b_discount,
                        sgid: data.id,
                    },
                ],
            },
            {
                unit: [
                    {
                        sgid: this.unitInfo.sgid,
                        name: this.unitInfo.name,
                        pickup_fee: this.unitInfo.pickup_fee,
                        delivery_fee: this.unitInfo.delivery_fee,
                    },
                ],
            },
            { quote_id: this.quoteId },
        ];
        this._quoteService.updateFloorPlanUnitProduct(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.result);
                this.onGridReady(this.agGrid);
            }
            else {
                this._toaster.error(resp.result);
            }
        });
    }
    getFpList() {
        this._fpSevice.getFPList(this.quoteId).subscribe((data) => {
            this.fplist = data.result;
        }, (error) => {
            this._toaster.error(error);
        });
    }
    getSelectedFpu(ev) {
        this.selectedFpid = ev.target.value;
    }
    removeMoodboardFromFP(moodboard) {
        this._dialog_s
            .openConformationDialog({
            title: 'REMOVE MOODBOARD FROM FLOOR PLAN',
            suTitle: 'Are you sure you want to delete?',
            width: '50%',
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this._fpSevice
                    .removeMoodboardFromFPUnits(this.quoteId, this.fpId, moodboard.moodboard_id, this.unit_id)
                    .subscribe((resp) => {
                    if (resp.statusCode === 200) {
                        this._toaster.success(resp.result);
                        this.refresh();
                    }
                    else {
                        this._toaster.success(resp.result);
                    }
                });
            }
        });
    }
    onCreateNewFP() {
        this._dialog
            .open(_common_components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_6__["AddFPComponent"], {
            height: '70%',
            width: '70%',
            data: {
                isDialog: true,
                quoteId: this.quoteId,
            },
        })
            .afterClosed()
            .subscribe((data) => {
            console.log(data);
            if (data && data.event) {
                this.getFpList();
            }
        });
    }
    getFPSummary() {
        this._fpSevice
            .getFPSummary(this.quoteId, this.fpId, this.unit_id)
            .subscribe((resp) => {
            var _a, _b, _c;
            this.unitName = (_a = resp === null || resp === void 0 ? void 0 : resp.unit) === null || _a === void 0 ? void 0 : _a.name;
            this.unit = (_b = resp === null || resp === void 0 ? void 0 : resp.unit) === null || _b === void 0 ? void 0 : _b.unit;
            this.unitInfo = resp === null || resp === void 0 ? void 0 : resp.unit;
            this.selectedFpid = (_c = resp === null || resp === void 0 ? void 0 : resp.unit) === null || _c === void 0 ? void 0 : _c.floorplan_id;
            this.selectedFpid = this.selectedFpid ? this.selectedFpid : 'None';
            if (this.selectedFpid !== 'None') {
                this.hideFloorPlanAssign = true;
            }
        });
    }
    onGridReady(evt) {
        this.agGrid = evt;
        evt.api.sizeColumnsToFit();
        this.rowData = this.getUnitQuoteSummary();
    }
    getUnitQuoteSummary() {
        return this._quoteHeaderService
            .getUnitQuoteSummary(this.unit_id, this.fpId, this.quoteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((x) => {
            if (x.floorplan) {
                this.updateBottomData(x.floorplan);
            }
            else {
                this.updateBottomData({
                    delivery_fee: 0,
                    tax_percentage: 0,
                    tax_amount: 0,
                });
            }
            this.agGrid.api.redrawRows();
            return x.result.map((item, index) => {
                var _a;
                item.id = item.sgid;
                item.sgid = index + 1;
                item.userid = (_a = x === null || x === void 0 ? void 0 : x.floorplan) === null || _a === void 0 ? void 0 : _a.userid;
                item.order_status = this.page == 'ORDER';
                return item;
            });
        }));
    }
    updateBottomData(data) {
        this.pinnedBottomRowData[1].is_total = data === null || data === void 0 ? void 0 : data.delivery_fee;
        this.pinnedBottomRowData[2].sgid =
            'TAXES (' + (data === null || data === void 0 ? void 0 : data.tax_percentage) + '%) ($)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[3].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[2].taxPercent = data === null || data === void 0 ? void 0 : data.tax_percentage;
    }
    back() {
        let route = this.page == 'ORDER' ? 'order' : 'quote';
        this._router.navigate([route, this.quoteId]);
    }
    getFloorPlanDetails() {
        this._fpSevice
            .getFloorPlanDetails(this.quoteId, this.fpId)
            .subscribe((resp) => {
            if (resp.statusCode === 200) {
                this.fpDetails = resp === null || resp === void 0 ? void 0 : resp.result[0];
                // this.selectedFpid = resp?.result[0].sgid;
            }
            else {
                this.fpDetails = {};
            }
        });
    }
    addFloorPlan() {
        if (this.selectedFpid && this.selectedFpid !== 'None') {
            this._fpSevice
                .addFloorPlanUnit(this.unit, this.selectedFpid, this.quoteId, this.unit_id)
                .subscribe((resp) => {
                this._toaster.success(resp.message);
                this._router.navigate([
                    'quote',
                    this.quoteId,
                    'floor-plan-unit',
                    this.selectedFpid,
                    'unit',
                    this.unit_id,
                ]);
            });
        }
    }
    getMoodBoards() {
        this._fpSevice
            .getUnitMoodBoards(this.quoteId, this.fpId, this.unit_id)
            .subscribe((data) => {
            if (data.statusCode === 200) {
                this.moodboardList = data.moodboard_list;
            }
            else {
                this.moodboardList = [];
            }
        });
    }
    openAddMoodboardDialog() {
        this._dialog
            .open(_common_components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_5__["MoodboardComponent"], {
            width: '50%',
            data: { quoteId: this.quoteId, fpId: this.fpId, unit_id: this.unit_id },
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.refresh();
            }
        });
    }
    changeUnitName() {
        this._fpSevice
            .changeUnitName(this.quoteId, this.unit_id, this.unitName)
            .subscribe((data) => {
            if (data.statusCode === 200) {
                this._toaster.success(data.result);
                this.refresh();
            }
            else {
                this._toaster.success(data.result);
            }
        });
    }
    refresh() {
        this.getMoodBoards();
        this.getFPSummary();
        this.onGridReady(this.agGrid);
        // this.getFloorPlanUnits();
        // this.getMoodboardWithUnits();
    }
}
FloorPlanUnitComponent.ɵfac = function FloorPlanUnitComponent_Factory(t) { return new (t || FloorPlanUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_components_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_8__["QuoteHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_components_floor_plan_details_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_12__["FloorPlanDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_13__["QuoteService"])); };
FloorPlanUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: FloorPlanUnitComponent, selectors: [["app-floor-plan-unit"]], decls: 28, vars: 15, consts: [["fxLayout", "column", "fxLayoutGap", "1.5rem", 1, "floor-plan"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "floor-plan-col"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem"], [1, "back", "pointer"], [1, "material-icons", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 1, "floor-plan__container--input"], [1, "h3", "form-label-width"], ["appearance", "outline", 1, "mt-1", 2, "width", "250px"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["class", "round", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["class", "floor-plan__container--input", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "floor-plan-col", "odd"], [1, "h2"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "floor-plan__container"], ["fxFlex", "10", "class", "floor-plan__container--item pointer", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngIf"], ["fxFlex", "10", "class", "floor-plan__container--item", "fxLayout", "column", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", " stretch"], ["fxLayoutGap", "1rem", "fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "floor-plan-summary"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], [1, "add-to-md-button"], ["src", "assets/shop/addButton.svg", 1, "pointer", 3, "click"], [1, "grey", 2, "width", "190px", 3, "ngModel", "ngModelChange", "change"], ["value", "None"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 1, "round", 2, "width", "170px", 3, "click"], [3, "value"], ["fxFlex", "10", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "floor-plan__container--item", "pointer", 3, "click"], ["inline", "true", 1, "icon"], ["fxFlex", "10", "fxLayout", "column", 1, "floor-plan__container--item", 3, "ngClass"], ["class", "fa fa-times icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src"], ["aria-hidden", "true", 1, "fa", "fa-times", "icon", 3, "click"]], template: function FloorPlanUnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function FloorPlanUnitComponent_Template_span_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " arrow_back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Unit Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function FloorPlanUnitComponent_Template_input_ngModelChange_13_listener($event) { return ctx.unitName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, FloorPlanUnitComponent_button_14_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, FloorPlanUnitComponent_div_15_Template, 11, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "ADD/MANAGE MOODBOARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, FloorPlanUnitComponent_div_20_Template, 3, 0, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, FloorPlanUnitComponent_div_21_Template, 5, 5, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "UNIT SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "ag-grid-angular", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](27, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Back to ", ctx.page == "QUOTE" ? "Quote" : "Order", "/ ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.unitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.hideFloorPlanAssign);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.page == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.moodboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](27, 13, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridAngular"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_z"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".floor-plan-col[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n.floor-plan__container--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  min-height: 100px;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n  color: #9d9d9d;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.floor-plan-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.floor-plan-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.floor-plan-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.odd[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.form-label-width[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.add-to-md-button[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  padding-top: 2px;\n}\nselect.grey[_ngcontent-%COMP%] {\n  background: url('_-_-_-assets-greyDropdown.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 12px;\n  border: none;\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZsb29yLXBsYW4tdW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FBQU47QUFHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBVjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUFWO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0UsWUFBQTtBQURWO0FBRVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFFVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFHUTtFQUNFLGVBQUE7QUFEVjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UseUVBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBSEYiLCJmaWxlIjoiZmxvb3ItcGxhbi11bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb29yLXBsYW4ge1xyXG4gICAgJi1jb2wge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAmLS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdW1tYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAmLS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2FjdGlvbnMge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4ub2RkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXQtMSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtd2lkdGgge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmFkZC10by1tZC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbnNlbGVjdC5ncmV5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JleURyb3Bkb3duLnN2Z1wiKSBuby1yZXBlYXQgOTclICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "KyzS":
/*!**************************************************************!*\
  !*** ./projects/quote/src/lib/common/quote-common.module.ts ***!
  \**************************************************************/
/*! exports provided: QuoteCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteCommonModule", function() { return QuoteCommonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/quote-header/quote-header.component */ "Tu8c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/total-cell-renderer/total-cell-renderer.component */ "yL1b");
/* harmony import */ var _components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/item-type/item-type.component */ "mT0w");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/quote-create-form/quote-create-form.component */ "Oq4D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-fp/add-fp.component */ "7PJY");
/* harmony import */ var _components_add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/add-fpu/add-fpu.component */ "kffj");
/* harmony import */ var _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/addproduct/addproduct.component */ "IEgP");
/* harmony import */ var _components_select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/select-fp/select-fp.component */ "Gp7D");
/* harmony import */ var _components_select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/select-fpu/select-fpu.component */ "uq8a");
/* harmony import */ var _components_add_moodboard_quote_add_moodboard_quote_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add-moodboard-quote/add-moodboard-quote.component */ "ErMq");
/* harmony import */ var _components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/floor-plan-details/floor-plan-details.component */ "mc8h");
/* harmony import */ var _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/moodboard/moodboard.component */ "ssVi");
/* harmony import */ var _components_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/delete-item/delete-item.component */ "kMQY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ "fXoL");





























class QuoteCommonModule {
}
QuoteCommonModule.ɵfac = function QuoteCommonModule_Factory(t) { return new (t || QuoteCommonModule)(); };
QuoteCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineNgModule"]({ type: QuoteCommonModule });
QuoteCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_28__["ɵɵsetNgModuleScope"](QuoteCommonModule, { declarations: [_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__["QuoteHeaderComponent"],
        _components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["TotalCellRendererComponent"],
        _components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_8__["ItemTypeComponent"],
        _components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_12__["QuoteCreateFormComponent"],
        _components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_19__["AddFPComponent"],
        _components_add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_20__["AddFPUComponent"],
        _components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_21__["AddproductComponent"],
        _components_select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_22__["SelectFpComponent"],
        _components_select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_23__["SelectFpuComponent"],
        _components_add_moodboard_quote_add_moodboard_quote_component__WEBPACK_IMPORTED_MODULE_24__["AddMoodboardQuoteComponent"],
        _components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_25__["FloorPlanDetailsComponent"],
        _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_26__["MoodboardComponent"],
        _components_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_27__["DeleteItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_6__["AgGridModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"]], exports: [_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__["QuoteHeaderComponent"],
        _components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_12__["QuoteCreateFormComponent"],
        _components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_8__["ItemTypeComponent"],
        _components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["TotalCellRendererComponent"],
        _components_delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_27__["DeleteItemComponent"],
        _components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_26__["MoodboardComponent"]] }); })();


/***/ }),

/***/ "Mn8n":
/*!*************************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote/quote-detail.service.ts ***!
  \*************************************************************************/
/*! exports provided: QuoteDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailService", function() { return QuoteDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");



class QuoteDetailService {
    constructor(_http, _env) {
        this._http = _http;
        this._env = _env;
    }
    updateQuote(json) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'save/quote/items', JSON.stringify(json));
    }
    createOrder(params) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'create/order', JSON.stringify(params));
    }
}
QuoteDetailService.ɵfac = function QuoteDetailService_Factory(t) { return new (t || QuoteDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"])); };
QuoteDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteDetailService, factory: QuoteDetailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Oq4D":
/*!***************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/quote-create-form/quote-create-form.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: QuoteCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteCreateFormComponent", function() { return QuoteCreateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/core/src/lib/services/toaster.service */ "vjv+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _quote_create_form_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-create-form.service */ "ZNnw");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");















function QuoteCreateFormComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "error-border": a0, "read-only": a1 }; };
function QuoteCreateFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quote Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r1.quoteNumber)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, (tmp_1_0 = ctx_r1.quoteFromGroup.get("quote_id")) == null ? null : tmp_1_0.invalid, ctx_r1.quoteNumber));
} }
function QuoteCreateFormComponent_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r13.showDropdown = !ctx_r13.showDropdown; return ctx_r13.showPDropdown = !ctx_r13.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_input_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 38);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r4._user.getUser().isInternalUser())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, (tmp_1_0 = ctx_r4.quoteFromGroup.get("companyName")) == null ? null : tmp_1_0.invalid, !ctx_r4._user.getUser().isInternalUser()));
} }
function QuoteCreateFormComponent_select_24_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmp_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cmp_r16.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cmp_r16.company, " ");
} }
const _c1 = function (a0) { return { "error-border": a0 }; };
function QuoteCreateFormComponent_select_24_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteCreateFormComponent_select_24_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.getProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteCreateFormComponent_select_24_option_1_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, (tmp_0_0 = ctx_r5.quoteFromGroup.get("company_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.companyList);
} }
function QuoteCreateFormComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_a_31_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.showPDropdown = !ctx_r19.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_input_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 42);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, (tmp_0_0 = ctx_r8.quoteFromGroup.get("project_name")) == null ? null : tmp_0_0.invalid));
} }
function QuoteCreateFormComponent_select_34_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prj_r22.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", prj_r22.project, " ");
} }
function QuoteCreateFormComponent_select_34_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteCreateFormComponent_select_34_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, QuoteCreateFormComponent_select_34_option_1_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, (tmp_0_0 = ctx_r9.quoteFromGroup.get("project_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.projectList);
} }
function QuoteCreateFormComponent_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r25.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r25.name, " ");
} }
class QuoteCreateFormComponent {
    constructor(_coreService, _router, _toaster, _location, _fromService, dialogData, _dialogRef, _user, _quoteService) {
        var _a;
        this._coreService = _coreService;
        this._router = _router;
        this._toaster = _toaster;
        this._location = _location;
        this._fromService = _fromService;
        this.dialogData = dialogData;
        this._dialogRef = _dialogRef;
        this._user = _user;
        this._quoteService = _quoteService;
        this.quoteNumber = '';
        this.phone = '';
        this.customerName = '';
        this.address = '';
        this.email = '';
        this.stateId = NaN;
        this.companyName = '';
        this.companyId = '';
        this.city = '';
        this.projectName = '';
        this.projectId = '';
        this.zipCode = '';
        this.submitButtonText = 'CREATE';
        this.onCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = 'CREATE';
        this.stateList = ['A', 'B'];
        this.showPDropdown = false;
        this.showDropdown = false;
        this.quoteFromGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.dCompanyList = [];
        this.companyList = [];
        this.projectList = [];
        this.selectedCompany = '';
        this.selectedProject = '';
        let stateObject = (_a = _router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        this.quoteNumber = stateObject === null || stateObject === void 0 ? void 0 : stateObject.quoteNumber;
        this.phone = stateObject === null || stateObject === void 0 ? void 0 : stateObject.phone;
        this.customerName = stateObject === null || stateObject === void 0 ? void 0 : stateObject.customerName;
        this.address = stateObject === null || stateObject === void 0 ? void 0 : stateObject.address;
        this.email = stateObject === null || stateObject === void 0 ? void 0 : stateObject.email;
        this.stateId = stateObject === null || stateObject === void 0 ? void 0 : stateObject.state;
        this.companyName = stateObject === null || stateObject === void 0 ? void 0 : stateObject.companyName;
        this.city = stateObject === null || stateObject === void 0 ? void 0 : stateObject.city;
        this.projectName = stateObject === null || stateObject === void 0 ? void 0 : stateObject.projectName;
        this.zipCode = stateObject === null || stateObject === void 0 ? void 0 : stateObject.zipCode;
    }
    ngOnInit() {
        var _a;
        if (this.quoteNumber) {
            this.quoteFromGroup.addControl('quote_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.quoteNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        }
        this.quoteFromGroup.addControl('contact_no', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.phone, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(1s?)?((([0-9]{3}))|[0-9]{3})[s-]?[\0-9]{3}[s-]?[0-9]{4}$'),
        ]));
        this.quoteFromGroup.addControl('name', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.customerName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        this.quoteFromGroup.addControl('address', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.address, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        this.quoteFromGroup.addControl('email', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ]));
        this.quoteFromGroup.addControl('state_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.stateId, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        this.quoteFromGroup.addControl('company_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.companyId));
        this.quoteFromGroup.addControl('companyName', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]((_a = this.companyName) !== null && _a !== void 0 ? _a : this._user.getUser().getCompanyName()));
        this.quoteFromGroup.addControl('city', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
        this.quoteFromGroup.addControl('project_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.projectId));
        this.quoteFromGroup.addControl('project_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.projectName));
        this.quoteFromGroup.addControl('zipcode', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.zipCode, [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]{5}(?:-[0-9]{5})?$'),
        ]));
        this.getStateList();
        this.getCompanyList();
    }
    getStateList() {
        this._coreService.getStateList().subscribe((data) => {
            this.stateList = data;
            if (undefined == this.stateId)
                this.quoteFromGroup.controls.state_id.patchValue(this.stateList[0].sgid);
        });
    }
    getCompanyList() {
        this._quoteService.getCompanyList().subscribe((data) => {
            var _a;
            if (typeof data.result == 'string') {
                this.companyList = [];
                this.selectedCompany = '';
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
    selectProjectList(id, event) {
        let projectId = event.target.value;
        this.projectName = this.projectList.find((x) => x.sgid == projectId).project;
        this.quoteFromGroup.controls.project_name.patchValue(this.projectName);
    }
    getProjectList(companyId, event) {
        if (event !== null)
            companyId = event.target.value;
        this._quoteService.getProjectList(companyId).subscribe((data) => {
            if (typeof data.result == 'string') {
                this.projectList = [];
                this.selectedProject = '';
            }
            else {
                this.projectList = data.result; //.map((x: any)=> x.project);
                this.selectedProject = this.projectList[0];
                this.quoteFromGroup.controls.project_name.patchValue(this.projectList[0].project);
            }
        });
    }
    cancel() {
        this.onCancel.emit();
        if (this.dialogData.isDialog) {
            this._dialogRef.close();
        }
        else {
            this._location.back();
        }
    }
    submit() {
        this._fromService.createQuote(this.quoteFromGroup, this.type).subscribe((data) => {
            if (data.statusCode == 200) {
                this.onSubmit.emit(data === null || data === void 0 ? void 0 : data.quote);
                if (this.dialogData.isDialog) {
                    this._dialogRef.close();
                }
            }
            this._toaster.success(data.message);
        }, (error) => {
            this._toaster.error(error);
        });
    }
}
QuoteCreateFormComponent.ɵfac = function QuoteCreateFormComponent_Factory(t) { return new (t || QuoteCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_create_form_service__WEBPACK_IMPORTED_MODULE_7__["QuoteCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_8__["QuoteService"])); };
QuoteCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteCreateFormComponent, selectors: [["lib-quote-create-form"]], inputs: { quoteNumber: "quoteNumber", phone: "phone", customerName: "customerName", address: "address", email: "email", stateId: "stateId", companyName: "companyName", companyId: "companyId", city: "city", projectName: "projectName", projectId: "projectId", zipCode: "zipCode", submitButtonText: "submitButtonText", type: "type" }, outputs: { onCancel: "onCancel", onSubmit: "onSubmit" }, decls: 77, vars: 39, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-create__form"], ["fxLayout", "row", "fxFlex", "100", 2, "width", "100%"], ["fxFlex", "95", "fxLayout", "row", "fxLayoutAlign", "center center"], [1, "quote-create__form--title"], ["fxFlex", "5", "fxLayout", "row", "fxLayoutAlign", "row-reverse"], ["class", "quote-create__form--title", 3, "click", 4, "ngIf"], ["action", "", "fxLayout", "row wrap", "fxLayoutAlign", "space-between stretch", 1, "quote-create__form--elements", 3, "formGroup"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch", 4, "ngIf"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", " stretch"], [1, "label"], [1, "asterisk"], ["type", "text", "formControlName", "name", "placeholder", "Enter Customer Name", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 3, "click", 4, "ngIf"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["style", "width: 100%;", "type", "text", "formControlName", "companyName", "placeholder", "Add Company Name", 3, "readonly", "ngClass", 4, "ngIf"], ["style", "width: 100%;", "formControlName", "company_id", 3, "ngClass", "change", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["style", "width: 100%;", "type", "text", "formControlName", "project_name", "placeholder", "Add Project Name", 3, "ngClass", 4, "ngIf"], ["style", "width: 100%;", "formControlName", "project_id", 3, "ngClass", "change", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Add on Email", 3, "ngClass"], ["type", "text", "placeholder", "Add a Phone Number", "formControlName", "contact_no", 3, "ngClass"], ["type", "text", "formControlName", "address", "placeholder", "Enter on Address", 3, "ngClass"], ["formControlName", "state_id", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "city", "placeholder", "Enter a City", 3, "readonly", "ngClass"], ["type", "text", "formControlName", "zipcode", "placeholder", "Add a ZipCode", 3, "readonly", "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quote-create__actions"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mat-raised-button", "", 1, "btn", "btn-cancel", 3, "click"], [1, "quote-create__form--title", 3, "click"], ["src", "assets/quote/images/close-22.svg", "height", "22px", "width", "22px"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch"], ["type", "text", "formControlName", "quote_id", "placeholder", "Enter Quote Number", 3, "readonly", "ngClass"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/quote/images/SVG-Icons-06.svg"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "companyName", "placeholder", "Add Company Name", 2, "width", "100%", 3, "readonly", "ngClass"], ["formControlName", "company_id", 2, "width", "100%", 3, "ngClass", "change"], [3, "value"], [1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "project_name", "placeholder", "Add Project Name", 2, "width", "100%", 3, "ngClass"], ["formControlName", "project_id", 2, "width", "100%", 3, "ngClass", "change"]], template: function QuoteCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " CREATE A NEW QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteCreateFormComponent_span_6_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteCreateFormComponent_div_8_Template, 6, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QuoteCreateFormComponent_a_21_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuoteCreateFormComponent_a_22_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuoteCreateFormComponent_input_23_Template, 1, 5, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuoteCreateFormComponent_select_24_Template, 2, 4, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, QuoteCreateFormComponent_a_31_Template, 2, 0, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, QuoteCreateFormComponent_a_32_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, QuoteCreateFormComponent_input_33_Template, 1, 3, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, QuoteCreateFormComponent_select_34_Template, 2, 4, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, QuoteCreateFormComponent_option_59_Template, 2, 2, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_Template_button_click_73_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_Template_button_click_75_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_3_0 = null;
        let tmp_12_0 = null;
        let tmp_13_0 = null;
        let tmp_14_0 = null;
        let tmp_15_0 = null;
        let tmp_18_0 = null;
        let tmp_20_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogData.isDialog == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.quoteFromGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, (tmp_3_0 = ctx.quoteFromGroup.get("name")) == null ? null : tmp_3_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, (tmp_12_0 = ctx.quoteFromGroup.get("email")) == null ? null : tmp_12_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c1, (tmp_13_0 = ctx.quoteFromGroup.get("contact_no")) == null ? null : tmp_13_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c1, (tmp_14_0 = ctx.quoteFromGroup.get("address")) == null ? null : tmp_14_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c1, (tmp_15_0 = ctx.quoteFromGroup.get("state_id")) == null ? null : tmp_15_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.type === "COPY")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](33, _c0, (tmp_18_0 = ctx.quoteFromGroup.get("city")) == null ? null : tmp_18_0.invalid, ctx.type === "COPY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.type === "COPY")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](36, _c0, (tmp_20_0 = ctx.quoteFromGroup.get("zipcode")) == null ? null : tmp_20_0.invalid, ctx.type === "COPY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quoteFromGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitButtonText, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: [".quote-create__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.quote-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.quote-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.quote-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.quote-create__actions[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-top: 2rem;\n}\n.quote-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.6rem 1rem;\n  font-size: inherit;\n  border: 1px;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUFRLGFBQUE7RUFDUixtQkFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQURSO0FBR007RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUVRO0VBQ0UsYUFBQTtBQUFWO0FBSUk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7O0VBRUUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSEo7QUFLRTtFQUNFLFNBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFFQSw4QkFBQTtFQUNBOzs7R0FBQTtFQUlBLDhEQUFBO0VBQ0E7aUVBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0FBSEo7QUFNRTtFQUNFLFVBQUE7QUFISjtBQU1FO0VBQ0UscUJBQUE7QUFISjtBQUtFO0VBQ0UsbUJBQUE7QUFGSjtBQUlFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFBSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoicXVvdGUtY3JlYXRlLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucXVvdGUtY3JlYXRlIHtcclxuICAgICZfX2Zvcm0ge1xyXG4gICAgICAmIGZvcm17IHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgIH1cclxuICAgICAgJi0tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogIzJFMkUyRTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmLS1lbGVtZW50cyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAycmVtIDRyZW0gMnJlbTtcclxuICAgICAgICAmIGRpdiB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYWN0aW9ucyB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICYgYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0LFxyXG4gIHNlbGVjdCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMC42cmVtIDFyZW07XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBib3JkZXI6IDFweDtcclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgXHJcbiAgICBwYWRkaW5nOiAwLjVlbSAzLjVlbSAwLjVlbSAxZW07XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHRyYW5zcGFyZW50IDUwJSwgZ3JheSA1MCUpLFxyXG4gICAgLy8gICBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCBncmF5IDUwJSwgdHJhbnNwYXJlbnQgNTAlKSxcclxuICAgICAgIHJhZGlhbC1ncmFkaWVudCgjZmViZjJkIDkyJSwgdHJhbnNwYXJlbnQgNzIlKTtcclxuICAgICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3F1b3RlL2ltYWdlcy9TVkctSWNvbnMtMTQuc3ZnXCIpO1xyXG4gICAgLypiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjYWxjKDEwMCUgLSAyMHB4KSBjYWxjKDFlbSArIDJweCksXHJcbiAgICAgIGNhbGMoMTAwJSAtIDE1cHgpIGNhbGMoMWVtICsgMnB4KSwgY2FsYygxMDAlIC0gMC41ZW0pIDAuNWVtOyovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hc3RlcmlzayB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItYm9yZGVyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgLnJlYWQtb25seSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTllY2VmO1xyXG4gIH1cclxuICAuYnRuIHtcclxuICAgIHdpZHRoOiAxOTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgfVxyXG4gIC5idG4tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjZFMTVGO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5idG4tY2FuY2VsIHtcclxuICAgIGJhY2tncm91bmQ6ICAjMkMyQzJDO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "Tu8c":
/*!*****************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/quote-header/quote-header.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: QuoteHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteHeaderComponent", function() { return QuoteHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-fp/add-fp.component */ "7PJY");
/* harmony import */ var _add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-fpu/add-fpu.component */ "kffj");
/* harmony import */ var _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../item-type/item-type.component */ "mT0w");
/* harmony import */ var _total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../total-cell-renderer/total-cell-renderer.component */ "yL1b");
/* harmony import */ var _add_moodboard_quote_add_moodboard_quote_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../add-moodboard-quote/add-moodboard-quote.component */ "ErMq");
/* harmony import */ var _select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-fp/select-fp.component */ "Gp7D");
/* harmony import */ var _select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../select-fpu/select-fpu.component */ "uq8a");
/* harmony import */ var _quote_header_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quote-header.service */ "g7tG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! projects/core/src/lib/services/toaster.service */ "vjv+");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
































const _c0 = ["dialog"];
function QuoteHeaderComponent_ng_template_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const moodboard_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", moodboard_r20.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](moodboard_r20.boardname);
} }
function QuoteHeaderComponent_ng_template_0_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select a Moodboard to be added to this quote.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.selectedMoodboard = $event; })("selectionChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_selectionChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectionChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_ng_template_0_ng_container_12_Template, 3, 2, "ng-container", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuoteHeaderComponent_ng_template_0_mat_option_13_Template, 2, 0, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_ng_template_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.addMoodboard(ctx_r24.selectedMoodboard); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Add Moodboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.selectedMoodboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.moodboardList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.moodboardList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.selectedMoodboard);
} }
function QuoteHeaderComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.quoteDetails.order_reference);
} }
function QuoteHeaderComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_65_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.OnEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { selected: a0 }; };
function QuoteHeaderComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_71_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const moodboard_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onClickMDorProduct(moodboard_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -Moodboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r27 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, moodboard_r27.sgid == (ctx_r4.selectedQuoteMD == null ? null : ctx_r4.selectedQuoteMD.sgid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", moodboard_r27 == null ? null : moodboard_r27.unitmoodboards == null ? null : moodboard_r27.unitmoodboards.is_moodboard_images == null ? null : moodboard_r27.unitmoodboards.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moodboard_r27 == null ? null : moodboard_r27.unitmoodboards == null ? null : moodboard_r27.unitmoodboards.boardname, " ");
} }
function QuoteHeaderComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_72_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const product_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onClickMDorProduct(product_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r30 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, product_r30.sgid == (ctx_r5.selectedQuoteMD == null ? null : ctx_r5.selectedQuoteMD.sgid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r30 == null ? null : product_r30.variation_new == null ? null : product_r30.variation_new.default_images[0] == null ? null : product_r30.variation_new.default_images[0].image_url == null ? null : product_r30.variation_new.default_images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r30.name);
} }
function QuoteHeaderComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_74_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.addMDtoFloorPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO FLOORPLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_74_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.addMDtoUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO UNIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_74_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.removeMDfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_74_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.removeProductfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE PRODUCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_74_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.goToMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GO TO MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_74_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-item-type", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", item_r52 == null ? null : item_r52.button_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r52 == null ? null : item_r52.variation == null ? null : item_r52.variation.images[0] == null ? null : item_r52.variation.images[0].image_url == null ? null : item_r52.variation.images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r52 == null ? null : item_r52.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Qty :" + (item_r52 == null ? null : item_r52.qty), " ");
} }
function QuoteHeaderComponent_div_74_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-item-type", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r41.selectedQuoteMD == null ? null : ctx_r41.selectedQuoteMD.button_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r41.selectedQuoteMD == null ? null : ctx_r41.selectedQuoteMD.variation_new == null ? null : ctx_r41.selectedQuoteMD.variation_new.default_images[0] == null ? null : ctx_r41.selectedQuoteMD.variation_new.default_images[0].image_url == null ? null : ctx_r41.selectedQuoteMD.variation_new.default_images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.selectedQuoteMD == null ? null : ctx_r41.selectedQuoteMD.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Qty :" + (ctx_r41.selectedQuoteMD == null ? null : ctx_r41.selectedQuoteMD.qty), " ");
} }
function QuoteHeaderComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_74_button_4_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteHeaderComponent_div_74_button_5_Template, 2, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteHeaderComponent_div_74_button_6_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteHeaderComponent_div_74_button_7_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteHeaderComponent_div_74_button_8_Template, 2, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteHeaderComponent_div_74_div_11_Template, 8, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_div_74_div_12_Template, 8, 4, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.isIndividual) ? ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.name : ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.unitmoodboards == null ? null : ctx_r7.selectedQuoteMD.unitmoodboards.boardname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.routeIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.routeIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.isIndividual) && ctx_r7.routeIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.isIndividual) && ctx_r7.routeIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.isIndividual) && ctx_r7.routeIndex == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.moodboardItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.selectedQuoteMD == null ? null : ctx_r7.selectedQuoteMD.isIndividual);
} }
function QuoteHeaderComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Floor Plans found. Please add Floor Plan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const fp_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.removeFloorPlanFromQuote(fp_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_79_button_2_Template, 3, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteHeaderComponent_div_79_button_3_Template, 3, 0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_79_button_4_Template, 3, 0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const fp_r53 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.openFloorPlanPage(fp_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SETUP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r53 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fp_r53.floorname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", fp_r53.floorplan_mb_cnt, " Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fp_r53.total_unit, " Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fp_r53.floorplan_type_name, "");
} }
function QuoteHeaderComponent_button_81_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_81_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.openAddFloorPlanDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD FLOOR PLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_button_82_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_82_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.removeFloorPlanFlag = !ctx_r64.removeFloorPlanFlag; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.removeFloorPlanFlag ? "CANCEL" : "REMOVE FLOOR PLAN", " ");
} }
function QuoteHeaderComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Floor Plans found. Please add Floor Plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_86_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
} }
function QuoteHeaderComponent_div_86_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_86_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const unit_r68 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.removeUnitFromFP(unit_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_86_div_4_i_2_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_86_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const unit_r68 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.openFloorPlanUnit(unit_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r68 = ctx.$implicit;
    const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r67.removeUnitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r68.name);
} }
function QuoteHeaderComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_86_div_4_Template, 8, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fp_r66 == null ? null : fp_r66.floorname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fp_r66.unit_ids);
} }
function QuoteHeaderComponent_div_89_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 50);
} }
function QuoteHeaderComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_89_i_2_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_89_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const unit_r73 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.openFloorPlanUnit(unit_r73); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r73 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.removeUnitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r73.name);
} }
function QuoteHeaderComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.openAddUnitDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD UNIT(S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_button_92_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_92_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.removeUnitFlag = !ctx_r79.removeUnitFlag; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.removeUnitFlag ? "CANCEL" : "REMOVE UNIT(S)", " ");
} }
function QuoteHeaderComponent_mat_checkbox_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-checkbox", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " UNASSIGNED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = ["*"];
class QuoteHeaderComponent {
    constructor(_quoteHeaderService, _router, _user, _core, _matDialog, _toaster, _dialog, _quoteService) {
        var _a;
        this._quoteHeaderService = _quoteHeaderService;
        this._router = _router;
        this._user = _user;
        this._core = _core;
        this._matDialog = _matDialog;
        this._toaster = _toaster;
        this._dialog = _dialog;
        this._quoteService = _quoteService;
        this.quoteId = 0;
        this.text = 'QUOTE';
        this.iconPath = 'assets/quote/images/quote-icon.png';
        this.onCopy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dialog = {};
        this.editQuote = false;
        this.agGrid = {};
        this.quoteDetails = {};
        this.moodboards = [];
        this.selectedMoodboard = '';
        this.moodboardList = [];
        // Default unit
        this.quoteMDList = [];
        this.quoteIPList = [];
        this.selectedQuoteMD = '';
        this.moodboardItems = [];
        // Floor Plan
        this.floorPlanList = [];
        this.selectedFloorPlan = '';
        this.removeFloorPlanFlag = false;
        // Floor plan unit
        this.unitList = [];
        this.removeUnitFlag = false;
        this.routeIndex = 0;
        this.pinnedBottomRowData = [
            {
                subTotal: 'abc',
                sgid: 'SUB TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'DELIVERY FEE ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'TAXES ($)',
                is_total: '0',
                isExtraRow: true,
                taxPercent: 1
            },
            {
                subTotal: 'abc',
                sgid: 'TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
        ];
        this.columnDefs = [
            {
                field: 'sgid',
                width: 120,
                headerName: '',
                headerTooltip: '',
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
                field: 'product_images.small',
                cellStyle: {
                    padding: '0.3rem',
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
                headerName: 'QTY',
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
                headerName: 'RENTAL PRICE ($) /MONTH',
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
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ImageRendererComponent"],
            TotalCellRendererComponent: _total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_7__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_6__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["CounterComponent"],
        };
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.state = null;
        this.dialogRef = undefined;
        this.state = (_a = this._router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
    }
    ngOnInit() {
        var _a;
        this.getQuoteInformation();
        this.getMoodboardInQuote();
        this.getFloorPlan();
        this.routeIndex = this._router.url.indexOf('quote');
        if (this.routeIndex == 1 && ((_a = this.state) === null || _a === void 0 ? void 0 : _a.initDialog)) {
            this.openDialog();
        }
    }
    onGridReady(evt) {
        this.agGrid = evt;
        evt.api.sizeColumnsToFit();
        this.rowData = this.getQuoteSummary();
    }
    refresh() {
        this.getMoodboardInQuote();
        this.getFloorPlan();
        this.getUnits();
        this.onGridReady(this.agGrid);
    }
    getQuoteSummary() {
        return this._quoteHeaderService.getQuoteSummary(this.quoteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((x) => {
            if (x.quote_items.length > 0) {
                this.updateBottomData(x.quote);
            }
            else {
                this.updateBottomData({
                    delivery_fee: 0,
                    tax_percentage: 0,
                    tax_amount: 0,
                });
            }
            this.agGrid.api.redrawRows();
            return x.quote_items.map((item, index) => {
                item.order_status = x.quote.order_status;
                item.sgid = index + 1;
                return item;
            });
        }));
    }
    getMoodboardInQuote() {
        this._quoteHeaderService
            .getMoodboardInQuote(this.quoteId)
            .subscribe((data) => {
            if (typeof data === 'string') {
                return;
            }
            this.moodboards = data;
            this.quoteMDList = data.Moodboard_list;
            this.quoteIPList = data.Indivisual_products.map((x) => {
                x.isIndividual = true;
                return x;
            });
        });
    }
    getQuoteInformation() {
        let userId = this._user.getUser().getId();
        let companyId = this._user.getUser().getCompanyId();
        this._quoteHeaderService
            .getQuoteInformation(this.quoteId)
            .subscribe((data) => {
            this.quoteDetails = data;
            if (this.quoteDetails.userid === userId) {
                this.editQuote = true;
            }
            if (companyId === this.quoteDetails.company_id &&
                this.quoteDetails.application_type === 1) {
                this.editQuote = true;
            }
        });
    }
    getQuoteObject() {
        return {
            quoteNumber: this.quoteDetails.sgid,
            phone: this.quoteDetails.contactno,
            customerName: this.quoteDetails.name,
            address: this.quoteDetails.address,
            email: this.quoteDetails.email,
            state: this.quoteDetails.state,
            companyName: this.quoteDetails.company_name,
            city: this.quoteDetails.city_name,
            projectName: this.quoteDetails.project_name,
            zipCode: this.quoteDetails.is_zip_code,
        };
    }
    OnCopy(evt) {
        this._router.navigate(['quote/copy'], { state: this.getQuoteObject() });
        this.onCopy.emit(evt);
    }
    OnEdit(evt) {
        this._router.navigate(['quote/edit'], { state: this.getQuoteObject() });
        this.onEdit.emit(evt);
    }
    updateBottomData(data) {
        this.pinnedBottomRowData[1].is_total = data === null || data === void 0 ? void 0 : data.delivery_fee;
        this.pinnedBottomRowData[2].sgid =
            'TAXES (' + (data === null || data === void 0 ? void 0 : data.tax_percentage) + '%) ($)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[2].taxPercent = data === null || data === void 0 ? void 0 : data.tax_percentage;
        this.pinnedBottomRowData[3].taxPercent = data === null || data === void 0 ? void 0 : data.tax_percentage;
        this.pinnedBottomRowData[3].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
    }
    openDialog() {
        this._dialog
            .open(_add_moodboard_quote_add_moodboard_quote_component__WEBPACK_IMPORTED_MODULE_8__["AddMoodboardQuoteComponent"], {
            height: '100%',
            width: '50%',
            data: {
                isDialog: true,
                quoteId: this.quoteId,
                page: this.text,
            },
        })
            .afterClosed()
            .subscribe((data) => {
            if (data && data.event == 'defaultunit') {
            }
            else if (data && data.event == 'floorPlan') {
            }
            else if (data && data.event == 'floorPlanUnit') {
            }
            this.refresh();
        });
    }
    addMoodboard(selectedMoodboard) {
        this._quoteHeaderService
            .addMoodboard(this.quoteId, selectedMoodboard)
            .subscribe((data) => {
            var _a;
            (_a = this.dialogRef) === null || _a === void 0 ? void 0 : _a.close();
            this._toaster.success(data.msg);
            this.ngOnInit();
            this.onGridReady(this.agGrid);
        }, (error) => {
            this._toaster.error('Fail to add moodboard');
        });
    }
    selectionChange() {
        console.log(this.selectedMoodboard);
    }
    onTabChanged(evt) { }
    // Default Unit
    onClickMDorProduct(mdOrProduct) {
        var _a, _b;
        this.moodboardItems = [];
        this.selectedQuoteMD = mdOrProduct;
        if (!this.selectedQuoteMD.isIndividual) {
            this._quoteHeaderService
                .getMoodboardItems((_b = (_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.unitmoodboards) === null || _b === void 0 ? void 0 : _b.id)
                .subscribe((resp) => {
                this.moodboardItems = resp.moodboard_items;
            });
        }
    }
    addMDtoFloorPlan() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let obj;
        if (((_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.moodboard_id) == null) {
            obj = {
                qid: (_b = this.selectedQuoteMD) === null || _b === void 0 ? void 0 : _b.quote_id,
                user_id: this._user.getUser().getId(),
                product_id: (_c = this.selectedQuoteMD) === null || _c === void 0 ? void 0 : _c.product_id,
                sku: (_e = (_d = this.selectedQuoteMD) === null || _d === void 0 ? void 0 : _d.variation_new) === null || _e === void 0 ? void 0 : _e.sgid,
                quantity: (_f = this.selectedQuoteMD) === null || _f === void 0 ? void 0 : _f.qty,
                button_type: (_g = this.selectedQuoteMD) === null || _g === void 0 ? void 0 : _g.button_type,
                month: (_h = this.selectedQuoteMD) === null || _h === void 0 ? void 0 : _h.months,
                warehouse_id: (_j = this.selectedQuoteMD) === null || _j === void 0 ? void 0 : _j.warehouse_id,
                source: 'default_unit',
            };
        }
        else {
            obj = {
                isDialog: true,
                qid: (_k = this.selectedQuoteMD) === null || _k === void 0 ? void 0 : _k.quote_id,
                mid: (_l = this.selectedQuoteMD) === null || _l === void 0 ? void 0 : _l.moodboard_id,
                user_id: this._user.getUser().getId(),
                source: 'default_unit',
            };
        }
        this._dialog
            .open(_select_fp_select_fp_component__WEBPACK_IMPORTED_MODULE_9__["SelectFpComponent"], {
            height: '70%',
            width: '70%',
            data: obj,
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.selectedQuoteMD = null;
                this.getMoodboardInQuote();
                this.getFloorPlan();
            }
        });
        //this._quoteHeaderService.addMDtoFloorPlan().subscribe((resp) => {});
    }
    addMDtoUnit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let obj;
        if (((_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.moodboard_id) == null) {
            obj = {
                qid: (_b = this.selectedQuoteMD) === null || _b === void 0 ? void 0 : _b.quote_id,
                user_id: this._user.getUser().getId(),
                product_id: (_c = this.selectedQuoteMD) === null || _c === void 0 ? void 0 : _c.product_id,
                sku: (_e = (_d = this.selectedQuoteMD) === null || _d === void 0 ? void 0 : _d.variation_new) === null || _e === void 0 ? void 0 : _e.sgid,
                quantity: (_f = this.selectedQuoteMD) === null || _f === void 0 ? void 0 : _f.qty,
                button_type: (_g = this.selectedQuoteMD) === null || _g === void 0 ? void 0 : _g.button_type,
                month: (_h = this.selectedQuoteMD) === null || _h === void 0 ? void 0 : _h.months,
                warehouse_id: (_j = this.selectedQuoteMD) === null || _j === void 0 ? void 0 : _j.warehouse_id,
                source: 'default_unit',
            };
        }
        else {
            obj = {
                isDialog: true,
                qid: (_k = this.selectedQuoteMD) === null || _k === void 0 ? void 0 : _k.quote_id,
                mid: (_l = this.selectedQuoteMD) === null || _l === void 0 ? void 0 : _l.moodboard_id,
                user_id: this._user.getUser().getId(),
                source: 'default_unit',
            };
        }
        this._dialog
            .open(_select_fpu_select_fpu_component__WEBPACK_IMPORTED_MODULE_10__["SelectFpuComponent"], {
            height: '70%',
            width: '70%',
            data: obj,
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.selectedQuoteMD = null;
                this.getMoodboardInQuote();
                this.getFloorPlan();
            }
        });
        //    this._quoteHeaderService.addMDtoUnit().subscribe((resp) => {});
    }
    removeProductfromQuote() {
        var _a;
        this._quoteHeaderService
            .removeProductfromQuote(this.quoteId, (_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.sgid)
            .subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.result);
                this.getMoodboardInQuote();
            }
            else {
                this._toaster.success(resp.result);
            }
        });
    }
    removeMDfromQuote() {
        var _a, _b;
        this._quoteHeaderService
            .removeMDfromQuote(this.quoteId, (_b = (_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.unitmoodboards) === null || _b === void 0 ? void 0 : _b.id)
            .subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.result);
                this.getMoodboardInQuote();
            }
            else {
                this._toaster.success(resp.result);
            }
        });
    }
    goToMoodboard() {
        var _a, _b;
        this._router.navigateByUrl('/moodboard/' + ((_b = (_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.unitmoodboards) === null || _b === void 0 ? void 0 : _b.id));
    }
    openFloorPlanUnit(unit) {
        const floorPlanID = unit.floorplan_id ? unit.floorplan_id : 'None';
        let route = 'quote';
        if ((this.text == 'ORDER')) {
            route = 'order';
        }
        this._router.navigate([
            route,
            this.quoteId,
            'floor-plan-unit',
            floorPlanID,
            'unit',
            unit.sgid,
        ]);
    }
    // Add Floor plan
    openFloorPlanPage(fp) {
        let route = 'quote';
        if (this.text == 'ORDER') {
            route = 'order';
        }
        this._router.navigate([route, this.quoteId, fp.sgid]);
    }
    getFloorPlan() {
        this._quoteService.getFloorPlan(this.quoteId).subscribe((resp) => {
            this.floorPlanList = resp.result;
            this.getUnits();
        });
    }
    removeFloorPlanFromQuote(fp) {
        this._quoteService
            .removeFloorPlanFromQuote(this.quoteId, fp.sgid)
            .subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.message);
                this.getFloorPlan();
            }
            else {
                this._toaster.error(resp.message);
            }
        });
    }
    openAddFloorPlanDialog() {
        this._matDialog
            .open(_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_4__["AddFPComponent"], {
            width: '65%',
            height: '72%',
            data: { quoteId: this.quoteId },
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.getFloorPlan();
            }
        });
    }
    openAddUnitDialog() {
        this._matDialog
            .open(_add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_5__["AddFPUComponent"], {
            width: '50%',
            height: '61%',
            data: { quoteId: this.quoteId },
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.getUnits();
            }
        });
    }
    // Floor plan unit
    getUnits() {
        //    this.floorPlanList.forEach((element, index)=>{
        this._quoteService
            .getUnits({ quote_id: this.quoteId })
            .subscribe((resp) => {
            this.unitList = resp;
            //  this.unitList['UnitsWithoutFloorPlan'] = resp.UnitsWithoutFloorPlan;
            //  this.unitList['FloorPlanWithUnits'] = resp.FloorPlanWithUnits;
            // this.floorPlanList[index]['units'] = resp.result;
        });
        //  });
        console.log(this.floorPlanList);
    }
    removeUnitFromFP(unit) {
        this._quoteService
            .removeUnitFromFp(this.quoteId, unit.name, unit.sgid)
            .subscribe((resp) => {
            if (resp.statusCode) {
                this._toaster.success(resp.message);
                this.getUnits();
            }
            else {
                this._toaster.success(resp.message);
            }
        });
    }
}
QuoteHeaderComponent.ɵfac = function QuoteHeaderComponent_Factory(t) { return new (t || QuoteHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_header_service__WEBPACK_IMPORTED_MODULE_11__["QuoteHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_14__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_15__["QuoteService"])); };
QuoteHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteHeaderComponent, selectors: [["lib-quote-header"]], viewQuery: function QuoteHeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, inputs: { quoteId: "quoteId", text: "text", iconPath: "iconPath" }, outputs: { onCopy: "onCopy", onEdit: "onEdit" }, ngContentSelectors: _c2, decls: 114, vars: 39, consts: [["dialog", ""], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "quote-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-details__icon"], [1, "img-quote"], ["alt", "", "srcset", "", 3, "src"], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "quote-details__info"], ["fxFlex", "66", 4, "ngIf"], ["fxFlex", "33"], [1, "label"], [1, "value"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "1rem", 1, "quote-details__copy"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a filter list icon", 1, "box-none", 3, "click"], ["class", "box-none", "mat-mini-fab", "", "color", "accent", 3, "click", 4, "ngIf"], ["color", "accent", "mat-align-tabs", "start", 1, "tabs", 3, "selectedTabChange"], ["label", "Default Unit"], ["fxLayout", "column", 1, "tabs-item"], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote-moodboard"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "quote-moodboard__list"], ["fxFlex", "13", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "10", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "13", "class", "quote-moodboard__list--item", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngIf"], ["fxFlex", "row", "class", "quote-moodboard--sec", 4, "ngIf"], ["label", "Floor Plans"], [1, "g-box-shadow", "tabs-item", "fp"], ["class", "fp__default-text", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 1, "fp__container"], ["fxLayout", "column", "fxLayoutGap", "1rem", "class", "g-box-shadow fp__container--item", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "2rem"], ["class", "round", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["label", "Floor plan Units"], [1, "g-box-shadow", "tabs-item", "fpu"], ["class", "fpu__default-text", 4, "ngIf"], ["class", "fpu__container g-box-shadow", 4, "ngFor", "ngForOf"], [1, "fpu__container", "g-box-shadow", "pointer"], ["fxLayout", "row", "fxLayoutGap", "1rem"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow", 4, "ngFor", "ngForOf"], ["fxFlex", ""], ["disabled", "", "color", "accent", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "quote-summary"], [2, "margin", "0 1rem"], [1, "quote-summary__info--label"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "2rem", 1, "quote-summary__info"], [1, "quote-summary__info--value"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "2rem", 1, "quote-summary__actions"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "dialog"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [1, "h2", 2, "margin-bottom", "2rem"], ["mat-flat-button", "", "mat-dialog-close", ""], ["aria-hidden", "true", 1, "fa", "fa-times"], ["fxLayout", "column", "fxLayoutGap", "1rem"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], [4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "disabled", "click"], [3, "value"], ["value", ""], ["fxFlex", "66"], ["mat-mini-fab", "", "color", "accent", 1, "box-none", 3, "click"], ["fxFlex", "13", "fxLayout", "column", 1, "quote-moodboard__list--item", "moodboard-list", 3, "ngClass", "click"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src"], ["fxFlex", "10", "fxLayout", "column", 1, "quote-moodboard__list--item", "moodboard-list", 3, "ngClass", "click"], ["fxFlex", "13", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "quote-moodboard__list--item", 3, "click"], ["inline", "true", 1, "icon", 2, "margin", "40px"], ["fxFlex", "row", 1, "quote-moodboard--sec"], ["fxLayout", "column", "fxFlex", "20", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], [1, "h2"], ["class", "round", "style", "width: 88%; font-weight:bold;", "mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "color", "accent", "style", "width: 88%; font-weight:bold;", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "style", "width: 88%; font-weight:bold;", "color", "primary", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "color", "primary", "style", "width: 88%; font-weight:bold;", 3, "click", 4, "ngIf"], ["vertical", "true", 2, "margin-right", "4rem"], ["fxFlex", "", "fxLayout", "row", "fxLayoutGap", "3rem", "fxLayoutAlign", "start", 1, "quote-", "sec"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngFor", "ngForOf"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "round", 2, "width", "88%", "font-weight", "bold", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "round", 2, "width", "88%", "font-weight", "bold", 3, "click"], ["fxFlex", "22", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 1, "quote-moodboard__list--item", "moodboard-list"], [2, "width", "65px", 3, "status"], ["fxFlex", "", "fxLayoutAlign", "center center", "fxLayout", "column"], ["fxFlex", "", "height", "100px", "width", "90px", "alt", "Moodboard", 3, "src"], [1, "h3"], [1, "fp__default-text"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "g-box-shadow", "fp__container--item"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], ["class", "round", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["class", "icon-button", "mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 4, "ngIf"], ["fxLayout", "column", 2, "align-items", "center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "click"], ["mat-flat-button", "", 1, "round", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times-circle-o"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 1, "icon-button"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], [1, "fpu__default-text"], [1, "fpu__container", "g-box-shadow"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow pointer", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow", "pointer"], ["mat-flat-button", "", 3, "click"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], [3, "click"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow"], ["disabled", "", "mat-flat-button", ""], ["disabled", "", "color", "accent"]], template: function QuoteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteHeaderComponent_ng_template_0_Template, 17, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, QuoteHeaderComponent_div_10_Template, 5, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Project Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Quote #: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "State: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Customer Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Zipcode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_Template_button_click_62_listener($event) { return ctx.OnCopy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, QuoteHeaderComponent_button_65_Template, 3, 0, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function QuoteHeaderComponent_Template_mat_tab_group_selectedTabChange_66_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-tab", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, QuoteHeaderComponent_div_71_Template, 6, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, QuoteHeaderComponent_div_72_Template, 4, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, QuoteHeaderComponent_div_73_Template, 5, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, QuoteHeaderComponent_div_74_Template, 13, 8, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-tab", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, QuoteHeaderComponent_span_77_Template, 2, 0, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, QuoteHeaderComponent_div_79_Template, 16, 7, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, QuoteHeaderComponent_button_81_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, QuoteHeaderComponent_button_82_Template, 2, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-tab", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, QuoteHeaderComponent_span_85_Template, 2, 0, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, QuoteHeaderComponent_div_86_Template, 5, 2, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, QuoteHeaderComponent_div_89_Template, 8, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, QuoteHeaderComponent_button_91_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, QuoteHeaderComponent_button_92_Template, 2, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, QuoteHeaderComponent_mat_checkbox_94_Template, 2, 0, "mat-checkbox", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Customer City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Zipcode :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "ag-grid-angular", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](111, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](113, 0, ["[select]", "actions"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteDetails == null ? null : ctx.quoteDetails.order_reference);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.project_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.company_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.sgid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.contactno);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.is_state_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.city_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.is_zip_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text === "QUOTE" && ctx.editQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteMDList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.quoteIPList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text === "QUOTE" && ctx.editQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedQuoteMD);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.floorPlanList.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.floorPlanList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.removeFloorPlanFlag && ctx.text === "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text === "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.floorPlanList.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unitList == null ? null : ctx.unitList.FloorPlanWithUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unitList == null ? null : ctx.unitList.UnitsWithoutFloorPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.removeUnitFlag && ctx.text == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.text, " SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteDetails.city_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.is_zip_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](111, 37, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__["AgGridAngular"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDivider"], _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_6__["ItemTypeComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".quote-details[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.quote-details__icon[_ngcontent-%COMP%] {\n  background: #F6E15F;\n}\n.quote-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.quote-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quote-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 75px;\n  width: auto;\n}\n.quote-details__copy[_ngcontent-%COMP%], .quote-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.quote-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.quote-moodboard[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  background: #f8f8f8;\n}\n.quote-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  background: #ffffff;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.5rem;\n  color: #9d9d9d;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  padding: 0.3rem;\n}\n.quote-moodboard--sec[_ngcontent-%COMP%] {\n  padding: 1rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: #ffffff;\n}\n.quote-summary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2rem;\n}\n.quote-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.tabs-item[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 2rem 5rem;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n}\n.fp[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n  background: #ffffff;\n}\n.fp__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fp__container[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.fp__container--item[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 1rem 2.5rem;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.fpu[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n  background: #ffffff;\n}\n.fpu__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fpu__container[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 1rem;\n  margin: 3rem 0;\n}\n.fpu__container--unit[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  position: relative;\n  background: #ffffff;\n}\n.fpu__container--unit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.icon-button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 5px solid #ffee58;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-none[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;\n  background-color: #ffffff;\n}\n.hide-box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n  .mat-tab-header {\n  margin: auto 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRVI7QUFBTTtFQUNFLG1CQUFBO0VBQ0EsZ0pBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFVjtBQUVJO0VBRUUsbUJBQUE7RUFDQSxvQkFBQTtBQUROO0FBR0k7RUFDRSx5QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNFLFlBQUE7QUFETjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRE47QUFFTTtFQVdFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVZSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLVjtBQUlRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGVjtBQUlRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUZWO0FBTUk7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFPRTtFQUVFLG1CQUFBO0VBQ0EsYUFBQTtBQU5KO0FBT0k7RUFDRSxZQUFBO0FBTE47QUFNTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUEY7QUFVQTtFQUNFLGNBQUE7QUFQRjtBQVNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU5GO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFPRTtFQUNFLGVBQUE7QUFMSjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFKSjtBQUtJO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUhSO0FBUUE7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0FBTEY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU9BO0VBQ0Usc0RBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSwyQkFBQTtBQUpGO0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwiZmlsZSI6InF1b3RlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZSB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI0Y2RTE1RjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1xdW90ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLCA0cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLFxyXG4gICAgICAgICAgMHB4IC00cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIC00cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDkycHg7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvcHksXHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1tb29kYm9hcmQge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICZfX2hlYWRpbmcge1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcbiAgICAmX19saXN0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICYtLWl0ZW0ge1xyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtLXNlYyB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgJi1zdW1tYXJ5IHtcclxuLy8gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICB9XHJcbiAgICAgICYtLXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYWN0aW9ucyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJzLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICM5ZDlkOWQ7XHJcbn1cclxuLmZwIHtcclxuICBtYXJnaW46IDJyZW0gNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICZfX2RlZmF1bHQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2IwYWFhYTtcclxuICB9XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICYtLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZwdSB7XHJcbiAgbWFyZ2luOiAycmVtIDVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAmX19kZWZhdWx0LXRleHQge1xyXG4gICAgY29sb3I6ICNiMGFhYWE7XHJcbiAgfVxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgJi0tdW5pdCB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAmIGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZmZWU1ODtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJveC1ub25lIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmhpZGUtYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXJ7XHJcbiAgbWFyZ2luOiBhdXRvIDEwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZNnw":
/*!*************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/quote-create-form/quote-create-form.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: QuoteCreateFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteCreateFormService", function() { return QuoteCreateFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");



class QuoteCreateFormService {
    constructor(_http, _env, _user) {
        this._http = _http;
        this._env = _env;
        this._user = _user;
    }
    getParams(form) {
        let obj = form.value;
        obj.user_id = this._user.getUser().getId();
        obj.userid = this._user.getUser().getId();
        return obj;
    }
    createQuote(obj, type) {
        obj = this.getParams(obj);
        let url = 'save/quote';
        // if (type === 'EDIT') {
        //   url = 'save/quote';
        // }
        if (type === 'COPY') {
            url = 'clone/quote';
        }
        return this._http.sendPOSTRequest(this._env.getEndPoint() + url, JSON.stringify(obj));
    }
}
QuoteCreateFormService.ɵfac = function QuoteCreateFormService_Factory(t) { return new (t || QuoteCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
QuoteCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteCreateFormService, factory: QuoteCreateFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "g7tG":
/*!***************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/quote-header/quote-header.service.ts ***!
  \***************************************************************************************/
/*! exports provided: QuoteHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteHeaderService", function() { return QuoteHeaderService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");




class QuoteHeaderService {
    constructor(_http, _env, _user) {
        this._http = _http;
        this._env = _env;
        this._user = _user;
    }
    getQuoteSummary(quoteId) {
        return this._http.sendGETRequest(this._env.getEndPoint() + 'quote/items?quote_id=' + quoteId);
    }
    getUnitQuoteSummary(unitId, floorplanId, quoteId) {
        const data = { 'unit_id': unitId, 'floorplan_id': floorplanId, 'quote_id': quoteId };
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'load/floorplan/unit/products', JSON.stringify(data));
    }
    getMoodboardInQuote(quoteId) {
        let data = {
            quote_id: quoteId,
        };
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'quote/defaultUnit/MbAndIndivisualProds', JSON.stringify(data));
    }
    getQuoteInformation(quoteId) {
        return this._http
            .sendGETRequest(this._env.getEndPoint() + 'load/quote/info?quote_id=' + quoteId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.quote));
    }
    getMoodBoardByUser() {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'getMoodBoardByUser', JSON.stringify({ userid: this._user.getUser().getId() }));
    }
    addMoodboard(quoteId, moodboardId) {
        let obj = {
            moodboard_id: moodboardId,
            quote_id: quoteId,
            user_id: this._user.getUser().getId(),
        };
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'add/defaultunit/moodboard', JSON.stringify(obj));
    }
    // default unit
    addMDtoFloorPlan() {
        return this._http.sendGETRequest('');
    }
    getMoodboardItems(mdId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'load/moodboard/items', JSON.stringify({ moodboard_id: mdId }));
    }
    addMDtoUnit() {
        return this._http.sendGETRequest('');
    }
    removeMDfromQuote(quoteId, moodboardId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'removeMoodBoardFromQuote', JSON.stringify({ quote_id: quoteId, moodboard_id: moodboardId }));
    }
    removeProductfromQuote(quoteId, item_id) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'remove/quote/items', JSON.stringify({ quote_id: quoteId, item_id: item_id, }));
    }
}
QuoteHeaderService.ɵfac = function QuoteHeaderService_Factory(t) { return new (t || QuoteHeaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
QuoteHeaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: QuoteHeaderService, factory: QuoteHeaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ggHO":
/*!*************************************************!*\
  !*** ./projects/quote/src/lib/quote-routing.ts ***!
  \*************************************************/
/*! exports provided: quoteRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteRoute", function() { return quoteRoute; });
/* harmony import */ var _common_components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/components/floor-plan-details/floor-plan-details.component */ "mc8h");
/* harmony import */ var _components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/floor-plan-unit/floor-plan-unit.component */ "K5TM");
/* harmony import */ var _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quote-create/quote-create.component */ "GEx9");
/* harmony import */ var _components_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quote-detail/quote-detail.component */ "Cvmg");
/* harmony import */ var _components_quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quote-list/quote-list.component */ "8/+T");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quote/quote.component */ "wXI3");






const quoteRoute = [
    {
        path: '',
        component: _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_5__["QuoteComponent"],
        children: [
            {
                path: '',
                component: _components_quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_4__["QuoteListComponent"],
            },
            {
                path: 'create',
                component: _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_2__["QuoteCreateComponent"],
            },
            {
                path: 'edit',
                component: _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_2__["QuoteCreateComponent"],
            },
            {
                path: 'copy',
                component: _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_2__["QuoteCreateComponent"],
            },
            {
                path: ':id',
                component: _components_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_3__["QuoteDetailComponent"],
            },
            {
                path: ':id/:fpId',
                component: _common_components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_0__["FloorPlanDetailsComponent"],
            }, {
                path: ':id/floor-plan-unit/:fpId/unit/:unit_id',
                component: _components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_1__["FloorPlanUnitComponent"],
            }
        ],
    },
];


/***/ }),

/***/ "kMQY":
/*!***************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/delete-item/delete-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DeleteItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteItemComponent", function() { return DeleteItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DeleteItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
DeleteItemComponent.ɵfac = function DeleteItemComponent_Factory(t) { return new (t || DeleteItemComponent)(); };
DeleteItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeleteItemComponent, selectors: [["lib-delete-item"]], decls: 2, vars: 0, consts: [[1, "material-icons", "md-18", "icon"]], template: function DeleteItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  color: #a8a8a8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxkZWxldGUtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGNBQUE7QUFFRiIsImZpbGUiOiJkZWxldGUtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmljb24ge1xyXG4gIGNvbG9yOiAjYThhOGE4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "kffj":
/*!*******************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/add-fpu/add-fpu.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AddFPUComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFPUComponent", function() { return AddFPUComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");














function AddFPUComponent_mat_option_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", type_r1.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", type_r1.name, " ");
} }
class AddFPUComponent {
    constructor(dialogData, _user, _quoteService, _toaster, _dialogRef) {
        this.dialogData = dialogData;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._dialogRef = _dialogRef;
        this.fpuFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({});
        this.quoteId = '';
        this.floorPlanTypes = [
            {
                name: 'Studio',
                sgid: 1,
            },
            {
                name: '1 Bedroom',
                sgid: 2,
            },
            {
                name: '2 Bedroom',
                sgid: 3,
            },
            {
                name: '3 Bedroom',
                sgid: 4,
            },
            {
                name: '4 Bedroom',
                sgid: 5,
            },
            {
                name: '5 Bedroom',
                sgid: 6,
            },
            {
                name: '6 Bedroom',
                sgid: 7,
            },
            {
                name: '7 Bedroom',
                sgid: 8,
            },
            {
                name: '8 Bedroom',
                sgid: 9,
            },
            {
                name: '9 Bedroom',
                sgid: 10,
            },
            {
                name: '10 Bedroom',
                sgid: 11,
            },
        ];
    }
    ngOnInit() {
        this.quoteId = this.dialogData.quoteId;
        this.fpuFormGroup.addControl('units', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]));
        this.fpuFormGroup.addControl('floorplan_name', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''));
        this.fpuFormGroup.addControl('floorplan_type_id', new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](''));
    }
    onSubmit() {
        if (this.fpuFormGroup.value.floorplan_name) {
            if (!this.fpuFormGroup.value.floorplan_type_id) {
                this._toaster.warning('Please select floor plan type');
                return;
            }
        }
        let obj = this.fpuFormGroup.value;
        obj.quote_id = this.quoteId;
        obj.userid = this._user.getUser().getId();
        this._quoteService.addOptionalUnits(obj).subscribe((resp) => {
            if (resp.statusCode) {
                this._toaster.success(resp.message);
                this._dialogRef.close(1);
            }
            else {
                this._toaster.error(resp.message);
                this._dialogRef.close(0);
            }
        });
    }
}
AddFPUComponent.ɵfac = function AddFPUComponent_Factory(t) { return new (t || AddFPUComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
AddFPUComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AddFPUComponent, selectors: [["lib-add-fpu"]], decls: 28, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], [1, "h1", 2, "margin-bottom", "1rem"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "1rem"], ["fxLayout", "column", "action", "", 3, "formGroup"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "50"], ["fxFlex", "50", "appearance", "outline"], ["formControlName", "units", "matInput", ""], ["formControlName", "floorplan_name", "matInput", ""], ["formControlName", "floorplan_type_id"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "fxLayoutAlign", "center"], ["mat-flat-button", "", "color", "accent", 3, "disabled", "click"], ["mat-flat-button", "", "mat-dialog-close", "", "color", "primary"], [3, "value"]], template: function AddFPUComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "ADD UNIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "No of Units*");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Floor Plan Name (Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Floor Plan Type (Optional)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, AddFPUComponent_mat_option_22_Template, 2, 2, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddFPUComponent_Template_button_click_24_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.fpuFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.floorPlanTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.fpuFormGroup.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtZnB1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJhZGQtZnB1LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "mT0w":
/*!***********************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/item-type/item-type.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ItemTypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypeComponent", function() { return ItemTypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ItemTypeComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Buy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ItemTypeComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Rent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ItemTypeComponent {
    constructor() {
        this.status = 0;
    }
    ngOnInit() { }
    agInit(params) {
        this.status = params.data.button_type;
    }
    refresh(params) {
        this.status = params.data.button_type;
        return false;
    }
}
ItemTypeComponent.ɵfac = function ItemTypeComponent_Factory(t) { return new (t || ItemTypeComponent)(); };
ItemTypeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemTypeComponent, selectors: [["lib-item-type"]], inputs: { status: "status" }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function ItemTypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ItemTypeComponent_span_0_Template, 2, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ItemTypeComponent_span_1_Template, 2, 0, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  background: #fd6939;\n  padding: 0.1rem 1rem;\n  border-radius: 50px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxpdGVtLXR5cGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiaXRlbS10eXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZDY5Mzk7XHJcbiAgcGFkZGluZzogMC4xcmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "mc8h":
/*!*****************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/floor-plan-details/floor-plan-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FloorPlanDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanDetailsComponent", function() { return FloorPlanDetailsComponent; });
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete-item/delete-item.component */ "kMQY");
/* harmony import */ var _moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moodboard/moodboard.component */ "ssVi");
/* harmony import */ var _common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../common/components/item-type/item-type.component */ "mT0w");
/* harmony import */ var _common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../common/components/total-cell-renderer/total-cell-renderer.component */ "yL1b");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _floor_plan_details_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./floor-plan-details.service */ "w4wL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





















const _c0 = ["dialog"];
function FloorPlanDetailsComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_21_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.openAddDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " add_circle_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FloorPlanDetailsComponent_div_22_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_22_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const unit_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.removeUnitFromFP(unit_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FloorPlanDetailsComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FloorPlanDetailsComponent_div_22_i_1_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.page == "QUOTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r11.name);
} }
function FloorPlanDetailsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.openAddMoodboardDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FloorPlanDetailsComponent_div_28_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_28_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22); const moodboard_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.removeMoodboardFromFP(moodboard_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c1 = function () { return {}; };
function FloorPlanDetailsComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FloorPlanDetailsComponent_div_28_i_1_Template, 1, 0, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_28_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24); const moodboard_r18 = ctx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r23.onClickMDorProduct(moodboard_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r18 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.page == "QUOTE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", moodboard_r18 == null ? null : moodboard_r18.is_moodboard_images == null ? null : moodboard_r18.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](moodboard_r18 == null ? null : moodboard_r18.moodboard_name);
} }
function FloorPlanDetailsComponent_div_32_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r27.name);
} }
function FloorPlanDetailsComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-divider", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FloorPlanDetailsComponent_div_32_div_7_Template, 5, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const md_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", md_r25 == null ? null : md_r25.moodboard_images == null ? null : md_r25.moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](md_r25.moodboard_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", md_r25 == null ? null : md_r25.unit_ids);
} }
const _c2 = function (a0) { return { selected: a0 }; };
function FloorPlanDetailsComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_38_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const unit_r28 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r29.getFPSummary(unit_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r28 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, ctx_r5.unitId == unit_r28.sgid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r28.name);
} }
function FloorPlanDetailsComponent_button_44_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_button_44_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r31.changeUnitName(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Change Unit Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FloorPlanDetailsComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ADD NUMBER OF UNITS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " No. of units:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FloorPlanDetailsComponent_ng_template_51_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.noOfUnits = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_ng_template_51_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r35.addUnitsToFp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " ADD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r8.noOfUnits);
} }
class FloorPlanDetailsComponent {
    constructor(_fpSevice, _route, _location, _toaster, _matDialog, _dialog, _router, _quoteService) {
        this._fpSevice = _fpSevice;
        this._route = _route;
        this._location = _location;
        this._toaster = _toaster;
        this._matDialog = _matDialog;
        this._dialog = _dialog;
        this._router = _router;
        this._quoteService = _quoteService;
        this.dialog = {};
        this.page = 'QUOTE';
        this.quoteId = '';
        this.fpId = '';
        this.unitId = '';
        this.unitName = '';
        this.noOfUnits = '';
        this.unitInfo = '';
        this.fpDetails = {};
        this.moodboardList = [];
        this.moodboardWithUnitList = [];
        this.fpUnitList = [];
        this.quoteMDList = [
            { name: '1', unitmoodboards: {} },
            { name: '2', unitmoodboards: {} },
        ];
        this.rowData = [];
        this.fpGridApi = {};
        this.fpRowData = [];
        this.fpColumnDefs = [
            {
                field: 'sgid',
                width: 140,
                headerName: '',
                headerTooltip: '',
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
                field: 'product_images.small',
                cellStyle: {
                    padding: '0.3rem',
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
                headerName: 'RENTAL PRICE ($) /MONTH',
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
        this.pinnedBottomRowData = [
            {
                subTotal: 'abc',
                sgid: 'SUB TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'DELIVERY FEE ($)',
                is_total: '0',
                isExtraRow: true,
            },
            {
                subTotal: 'abc',
                sgid: 'TAXES ($)',
                is_total: '0',
                isExtraRow: true,
                taxPercent: '1'
            },
            {
                subTotal: 'abc',
                sgid: 'TOTAL ($)',
                is_total: '0',
                isExtraRow: true,
            },
        ];
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ImageRendererComponent"],
            TotalCellRendererComponent: _common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: _common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_3__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["CounterComponent"],
            DeleteItemComponent: _delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_1__["DeleteItemComponent"],
        };
        this.columnDefs = [
            { field: 'sub_total', headerName: 'SUB TOTAL (Monthly Rent) ($)' },
            { field: 'delivery_fee', headerName: 'DELIVERY FEE ($)' },
            { field: 'tax_amount', headerName: 'TAXES ($)' },
            { field: 'net_total', headerName: 'TOTAL AMOUNT ($)' },
            {
                field: 'pickup_fee',
                headerName: 'PICKUP FEE (Charged at the end of the lease)',
            },
        ];
        this.gridOptions = {
            onGridReady: (api) => {
                this.onGridReady(api);
            },
            context: this,
            rowHeight: 80,
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
        this.fpGridOptions = {
            rowHeight: 60,
            context: this,
            onGridReady: (api) => {
                this.fpGridApi = api;
                this.onGridReady(api);
            },
        };
    }
    ngOnInit() {
        if (this._router.url.indexOf('quote') >= 0) {
            this.page = 'QUOTE';
        }
        else {
            this.page = 'ORDER';
        }
        this._route.params.subscribe((params) => {
            this.quoteId = params.id;
            this.fpId = params.fpId;
            this.getFloorPlanDetails();
            this.getMoodBoards();
            this.getFloorPlanUnits();
            this.getMoodboardWithUnits();
        });
    }
    counterFComponentUpdate(params) {
        let data = params.data;
        let obj = [
            {
                items: [
                    {
                        months: data.months,
                        qty: data.is_qty,
                        price: data.price,
                        buy_price: data.buy_price,
                        sale_price: data.is_sale_price,
                        total_price: data.is_total,
                        discount: data.discount,
                        b2b_discount: data.b2b_discount,
                        sgid: data.id,
                    },
                ],
            },
            {
                unit: [
                    {
                        sgid: this.unitInfo.sgid,
                        name: this.unitInfo.name,
                        pickup_fee: this.unitInfo.pickup_fee,
                        delivery_fee: this.unitInfo.delivery_fee,
                    },
                ],
            },
            { quote_id: this.quoteId },
        ];
        this._quoteService.updateFloorPlanUnitProduct(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.result);
                this.getFPSummary(this.unitInfo);
            }
            else {
                this._toaster.error(resp.result);
            }
        });
    }
    refresh() {
        this.getFloorPlanDetails();
        this.getMoodBoards();
        this.getFloorPlanUnits();
        this.getMoodboardWithUnits();
    }
    back() {
        let route = this.page == 'ORDER' ? 'order' : 'quote';
        this._router.navigate([route, this.quoteId]);
    }
    onClickMDorProduct(ab) { }
    openAddMoodboardDialog() {
        this._matDialog
            .open(_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_2__["MoodboardComponent"], {
            width: '50%',
            data: { quoteId: this.quoteId, fpId: this.fpId },
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.refresh();
            }
        });
    }
    onGridReady(evt) {
        evt.api.sizeColumnsToFit();
    }
    getMoodBoards() {
        this._fpSevice.getMoodBoards(this.quoteId, this.fpId).subscribe((data) => {
            if (data.statusCode == 200) {
                this.moodboardList = data.floorplans;
            }
            else {
                this.moodboardList = [];
            }
        });
    }
    getFloorPlanUnits() {
        this._fpSevice
            .getFloorPlanUnits(this.quoteId, this.fpId)
            .subscribe((data) => {
            if (data.statusCode) {
                this.fpUnitList = data === null || data === void 0 ? void 0 : data.result;
                this.getFPSummary(data === null || data === void 0 ? void 0 : data.result[0]);
            }
            else {
                this.fpUnitList = [];
            }
        });
    }
    getFPSummary(unit) {
        this.unitInfo = unit;
        this.unitId = unit === null || unit === void 0 ? void 0 : unit.sgid;
        this.unitName = unit === null || unit === void 0 ? void 0 : unit.name;
        if (!this.unitId) {
            return;
        }
        this._fpSevice
            .getFPSummary(this.quoteId, this.fpId, this.unitId)
            .subscribe((resp) => {
            var _a, _b;
            this.fpRowData = resp.result.map((item, index) => {
                item.isDeleteOption = true;
                item.id = item.sgid;
                item.sgid = index + 1;
                item.userid = resp.floorplan.userid;
                item.order_status = this.page == 'ORDER';
                return item;
            });
            this.updateBottomData(resp.unit, resp.sales_tax_rate);
            this.setTotalFPSummary(resp.floorplan);
            (_b = (_a = this.fpGridApi) === null || _a === void 0 ? void 0 : _a.api) === null || _b === void 0 ? void 0 : _b.redrawRows();
        });
    }
    setTotalFPSummary(fp) {
        this.rowData = [fp];
    }
    updateBottomData(data, tax) {
        this.pinnedBottomRowData[1].is_total = data === null || data === void 0 ? void 0 : data.delivery_fee;
        this.pinnedBottomRowData[2].sgid = 'TAXES (' + tax + '%)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[2].taxPercent = tax;
        this.pinnedBottomRowData[3].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
    }
    getFloorPlanDetails() {
        this._fpSevice
            .getFloorPlanDetails(this.quoteId, this.fpId)
            .subscribe((resp) => {
            if (resp.statusCode == 200) {
                this.fpDetails = resp === null || resp === void 0 ? void 0 : resp.result[0];
            }
            else {
                this.fpDetails = {};
            }
        });
    }
    changeUnitName() {
        this._fpSevice
            .changeUnitName(this.quoteId, this.unitId, this.unitName)
            .subscribe((data) => {
            if (data.statusCode == 200) {
                this._toaster.success(data.result);
                this.refresh();
            }
            else {
                this._toaster.success(data.result);
            }
        });
    }
    removeUnitFromFP(unit) {
        this._dialog
            .openConformationDialog({
            title: 'REMOVE UNIT FROM FLOOR PLAN',
            suTitle: 'Are you sure you want to delete?',
            width: '50%',
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this._fpSevice
                    .removeUnitFromFp(this.quoteId, unit === null || unit === void 0 ? void 0 : unit.name, unit === null || unit === void 0 ? void 0 : unit.sgid)
                    .subscribe((resp) => {
                    if (resp.statusCode == 200) {
                        this._toaster.success(resp.message);
                        this.refresh();
                    }
                    else {
                        this._toaster.success(resp.message);
                    }
                });
            }
        });
    }
    getMoodboardWithUnits() {
        this._fpSevice.getMoodboardWithUnits(this.quoteId, this.fpId).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this.moodboardWithUnitList = resp.result;
            }
            else {
                this._toaster.error(resp === null || resp === void 0 ? void 0 : resp.message);
            }
        }, (error) => {
            this._toaster.error(error === null || error === void 0 ? void 0 : error.message);
        });
    }
    addUnitsToFp() {
        this._fpSevice
            .addUnitsToFp(this.quoteId, this.fpId, this.noOfUnits)
            .subscribe((data) => {
            if (data.statusCode == 200) {
                this._toaster.success(data.message);
                this.refresh();
            }
            else {
                this._toaster.success(data.message);
            }
        });
    }
    removeMoodboardFromFP(moodboard) {
        this._dialog
            .openConformationDialog({
            title: 'REMOVE MOODBOARD FROM FLOOR PLAN',
            suTitle: 'Are you sure you want to delete?',
            width: '50%',
        })
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this._fpSevice
                    .removeMoodboardFromFP(this.quoteId, this.fpId, moodboard.moodboard_id)
                    .subscribe((resp) => {
                    if (resp.statusCode == 200) {
                        this._toaster.success(resp.result);
                        this.refresh();
                    }
                    else {
                        this._toaster.success(resp.result);
                    }
                });
            }
        });
    }
    openAddDialog() {
        this._matDialog
            .open(this.dialog)
            .afterClosed()
            .subscribe((data) => {
            if (data) {
                this.refresh();
            }
        });
    }
}
FloorPlanDetailsComponent.ɵfac = function FloorPlanDetailsComponent_Factory(t) { return new (t || FloorPlanDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_6__["FloorPlanDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_10__["QuoteService"])); };
FloorPlanDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FloorPlanDetailsComponent, selectors: [["lib-floor-plan-details"]], viewQuery: function FloorPlanDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 53, vars: 24, consts: [["fxLayout", "column", "fxLayoutGap", "1.5rem", 1, "fp"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp-col"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem"], [1, "back"], [1, "material-icons", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "2rem"], [1, "h2"], ["mat-flat-button", "", 1, "round", "filter-button"], ["fxLayout", "row", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxLayout", "column", "class", "fp__container--unit-add g-box-shadow", 4, "ngIf"], ["fxLayout", "column", "class", "fp__container--unit g-box-shadow", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp-col", "odd"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxFlex", "10", "class", "fp__container--item", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngIf"], ["fxFlex", "10", "class", "fp__container--item", "fxLayout", "column", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "fp__container", "fxLayout", "row", "fxLayoutGap", "1rem", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem", 1, "fp__container_units"], ["fxLayout", "column", "class", "fp__container--unit g-box-shadow", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 1, "fp__container--input"], [1, "h3"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["class", "round", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], [1, "ag-theme-alpine", "fp__container--grid", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "columnDefs", "pinnedBottomRowData", "frameworkComponents", "defaultColDef"], [1, "fp__container"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "131px", "width", "100%", 3, "gridOptions", "rowData", "columnDefs", "defaultColDef"], ["dialog", ""], ["fxLayout", "column", 1, "fp__container--unit-add", "g-box-shadow"], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["fxLayout", "column", 1, "fp__container--unit", "g-box-shadow"], ["class", "fa fa-times icon", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-times", "icon", 3, "click"], ["fxFlex", "10", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "fp__container--item", 3, "click"], ["inline", "true", 1, "icon"], ["fxFlex", "10", "fxLayout", "column", 1, "fp__container--item", 3, "ngClass"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src", "click"], [1, "fp__container_moodboard"], ["height", "100px", "width", "100px", "alt", "", 3, "src"], ["vertical", "true"], ["fxLayout", "column", 1, "fp__container--unit", "g-box-shadow", 3, "ngClass", "click"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "center center"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function FloorPlanDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_Template_span_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " arrow_back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "FLOOR PLAN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, FloorPlanDetailsComponent_div_21_Template, 4, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, FloorPlanDetailsComponent_div_22_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "ADD/MANAGE MOODBOARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, FloorPlanDetailsComponent_div_27_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, FloorPlanDetailsComponent_div_28_Template, 5, 5, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "MOODBOARD & UNITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, FloorPlanDetailsComponent_div_32_Template, 8, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "UNIT SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, FloorPlanDetailsComponent_div_38_Template, 5, 4, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "Unit Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FloorPlanDetailsComponent_Template_input_ngModelChange_43_listener($event) { return ctx.unitName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, FloorPlanDetailsComponent_button_44_Template, 2, 0, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "ag-grid-angular", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "TOTAL FLOOR PLAN SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "ag-grid-angular", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, FloorPlanDetailsComponent_ng_template_51_Template, 12, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("Back to ", ctx.page == "QUOTE" ? "Quote" : "Order", "/ ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorplan_mb_cnt, " Moodboards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.total_unit, " Units ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorplan_type_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fpUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.moodboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.moodboardWithUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fpUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.unitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.page == "QUOTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gridOptions", ctx.fpGridOptions)("rowData", ctx.fpRowData)("columnDefs", ctx.fpColumnDefs)("pinnedBottomRowData", ctx.pinnedBottomRowData)("frameworkComponents", ctx.frameworkComponents)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.defaultColDef);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_18__["AgGridAngular"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"]], styles: [".fp-col[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n.fp__container--unit[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  align-items: center;\n  position: relative;\n}\n.fp__container--unit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.fp__container--unit-add[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n  color: #9d9d9d;\n}\n.fp__container--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n.fp__container--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n  color: #9d9d9d;\n}\n.fp__container--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.selected[_ngcontent-%COMP%] {\n  background: #2c2c2c;\n  color: white;\n}\n.odd[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.filter-button[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n}\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbG9vci1wbGFuLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBR007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRFI7QUFHTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRFI7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFEUjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6ImZsb29yLXBsYW4tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcCB7XHJcbiAgJi1jb2wge1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIH1cclxuICAvLyAgIHBhZGRpbmc6IDFyZW07XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgICYtLXVuaXQge1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJiBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgICAmLWFkZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1pdGVtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICAgIH1cclxuICAgICAgJiBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMmMyYzJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9kZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlsdGVyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "mrSG":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "qqH+":
/*!*************************************************!*\
  !*** ./projects/quote/src/lib/quote.service.ts ***!
  \*************************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");


class QuoteService {
    constructor(http, env) {
        this.http = http;
        this.env = env;
    }
    getCompanyList() {
        return this.http.sendGETRequest(this.env.getEndPoint() + 'getCompanyListNew');
    }
    getProjectList(companyId) {
        return this.http.sendGETRequest(this.env.getEndPoint() + 'getProjectListNew?company_id=' + companyId);
    }
    getFloorPlan(quoteId) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'getFloorplanDetails', JSON.stringify({ quote_id: quoteId }));
    }
    createFloorPlan(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'addFloorPlan', JSON.stringify(obj));
    }
    removeFloorPlanFromQuote(quoteId, floorPlanId) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'removeFloorPlan', JSON.stringify({ quote_id: quoteId, floorplan_id: floorPlanId }));
    }
    getUnits(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'getFloorPlan/Quote/WithUnits', JSON.stringify(obj));
    }
    addOptionalUnits(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'addUnit/optional/floorplan', JSON.stringify(obj));
    }
    addMBQuote(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/moodboard/quote', JSON.stringify(obj));
    }
    addProductQuote(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'put/product/commonQuoteForProductAndMoodboard', JSON.stringify(obj));
    }
    getFpu(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/moodboard/quote', JSON.stringify(obj));
    }
    getFpus(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'getFloorPlanUnits', JSON.stringify(obj));
    }
    getFpuWithoutFP(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'getUnitsWithoutDefaultUnit', JSON.stringify(obj));
    }
    addFPMB(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/floorplan/moodboard', JSON.stringify(obj));
    }
    addFPUMB(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/moodboard/all/units', JSON.stringify(obj));
    }
    addFPQuote(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'addProduct/Quote/FloorplanUnits', JSON.stringify(obj));
    }
    addFPUQuote(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'addProduct/Quote/AllUnits', JSON.stringify(obj));
    }
    addQuoteMoodboard(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/defaultunit/moodboard', JSON.stringify(obj));
    }
    removeUnitFromFp(quoteId, unitName, unitId) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'removeUnit', JSON.stringify({ quote_id: quoteId, unit: unitName, sgid: unitId }));
    }
    updateFloorPlanUnitProduct(obj) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'update/floorplan/unit/products', JSON.stringify(obj));
    }
}
QuoteService.ɵfac = function QuoteService_Factory(t) { return new (t || QuoteService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"])); };
QuoteService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteService, factory: QuoteService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "ssVi":
/*!***********************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/moodboard/moodboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MoodboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodboardComponent", function() { return MoodboardComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../quote-header/quote-header.service */ "g7tG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");











function MoodboardComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mb_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", mb_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", mb_r3.boardname, " ");
} }
function MoodboardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodboardComponent_div_16_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.isAllUnit(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "All Units ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodboardComponent_div_16_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.isAllUnit(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Selected Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", true);
} }
const _c0 = function (a0) { return { "allow-click": a0 }; };
const _c1 = function (a0) { return { "fa-check": a0 }; };
function MoodboardComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodboardComponent_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const unit_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.selectUnitsForPlans(unit_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx_r2.isSelectedAll ? true : false));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](unit_r7.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, unit_r7.isActive ? true : false));
} }
class MoodboardComponent {
    constructor(dialogData, _dialogRef, _quoteService, _toaster, _quoteHeaderService) {
        var _a, _b, _c;
        this.dialogData = dialogData;
        this._dialogRef = _dialogRef;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._quoteHeaderService = _quoteHeaderService;
        this.fpId = '';
        this.quoteId = '';
        this.unit_id = '';
        this.mbList = [];
        this.selectedFpid = '';
        this.selectedMBId = '';
        this.isSelectedAll = true;
        this.fpuList = [];
        this.fpId = (_a = dialogData === null || dialogData === void 0 ? void 0 : dialogData.fpId) !== null && _a !== void 0 ? _a : '';
        this.quoteId = (_b = dialogData === null || dialogData === void 0 ? void 0 : dialogData.quoteId) !== null && _b !== void 0 ? _b : '';
        this.unit_id = (_c = dialogData === null || dialogData === void 0 ? void 0 : dialogData.unit_id) !== null && _c !== void 0 ? _c : '';
    }
    ngOnInit() {
        this.getMoodboardList();
    }
    getMoodboardList() {
        this._quoteHeaderService.getMoodBoardByUser().subscribe((resp) => {
            this.mbList = resp.result;
        }, (error) => {
            this.mbList = [];
            this._toaster.error('Something went wrong!');
        });
    }
    selectUnitsForPlans(unit) {
        if (unit.isActive) {
            let checker = 0;
            this.fpuList.forEach((elem) => {
                if (elem.isActive) {
                    checker++;
                }
            });
            if (checker > 1) {
                unit.isActive = false;
            }
            else {
            }
        }
        else {
            unit.isActive = true;
        }
    }
    isAllUnit(bool) {
        if (bool) {
            this.isSelectedAll = true;
            this.fpuList.forEach((elem) => {
                elem.isActive = true;
            });
        }
        else {
            this.isSelectedAll = false;
            this.fpuList.forEach((elem) => {
                elem.isActive = false;
            });
        }
    }
    getFPU(ev) {
        this.selectedMBId = ev.target.value;
        if (this.unit_id)
            return;
        let obj = {
            floorplan_id: this.fpId,
            quote_id: this.quoteId,
            mid: ev.target.value,
        };
        this._quoteService.getFpus(obj).subscribe((resp) => {
            this.fpuList = resp.result;
            this.isAllUnit(1);
        }, (error) => {
            this.fpuList = [];
            this._toaster.error('Something went wrong!');
        });
    }
    add() {
        var _a, _b;
        if (!this.unit_id &&
            ((_b = (_a = this.fpuList) === null || _a === void 0 ? void 0 : _a.filter((x) => x.isActive)) === null || _b === void 0 ? void 0 : _b.length) <= 0) {
            this._toaster.warning('Select at-least one unit');
            return;
        }
        let obj = {
            quote_id: this.quoteId,
            moodboard_id: this.selectedMBId,
            floorplan_id: this.fpId,
            units: this.unit_id
                ? [this.unit_id]
                : this.fpuList.filter((x) => x.isActive).map((x) => x.sgid),
        };
        this._quoteService.addFPMB(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this._toaster.success(resp.message);
                this._dialogRef.close(1);
            }
            else {
                this._toaster.success(resp.message);
                this._dialogRef.close(0);
            }
        }, (error) => {
            this._toaster.success(error.message);
        });
    }
}
MoodboardComponent.ɵfac = function MoodboardComponent_Factory(t) { return new (t || MoodboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_4__["QuoteHeaderService"])); };
MoodboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MoodboardComponent, selectors: [["lib-moodboard"]], inputs: { fpId: "fpId", quoteId: "quoteId", unit_id: "unit_id" }, decls: 19, vars: 3, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "1rem"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "98%", "background", "#F4F4F4", "padding", "22px", "margin", "2%"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [1, "titeltxt"], [1, "txt"], [2, "width", "60%", "padding", "5px", 3, "change"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "accent", 1, "btn-txt", 3, "click"], ["fxLayout", "row", "style", "padding: 0px 20px;", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "nofptxt", "d-flex", "justify-content-center", "p-2", "my-3", 2, "width", "98%", "background", "#F4F4F4", "margin", "2%"], ["class", "unit-box  add-unit-mb", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", 2, "padding", "0px 20px"], [1, "form-check-label", 2, "padding", "10px"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "checked", "click"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "click"], [1, "unit-box", "add-unit-mb", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "px-2", "pb-1", "cross-close", "fa", 2, "padding", "4px", "color", "green", 3, "ngClass"]], template: function MoodboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Add a moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Select a Moodboard to be added to this quote. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function MoodboardComponent_Template_select_change_10_listener($event) { return ctx.getFPU($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Choose existing moodboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MoodboardComponent_option_13_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MoodboardComponent_Template_button_click_14_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " ADD ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, MoodboardComponent_div_16_Template, 7, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, MoodboardComponent_div_18_Template, 6, 7, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mbList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.unit_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.fpuList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"]], styles: [".titeltxt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000;\n}\n\n.txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  color: #2C2C2C;\n  border-radius: 22px;\n}\n\n.add-unit-mb[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.allow-click[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.cross-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.cross-close[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n\n.unit-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n  padding-top: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  text-align: center;\n  color: #000000;\n  background: #FFFDFD;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtb29kYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBQTtFQUNJLG9CQUFBO0VBQ0osa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUdBOztBQURBO0VBQ0ksZUFBQTtBQUlKOztBQUZBO0VBQ0ksK0JBQUE7QUFLSjs7QUFGRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUtKOztBQUhBO0VBQ0ksV0FBQTtBQU1KOztBQUpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFPSiIsImZpbGUiOiJtb29kYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0ZWx0eHR7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi50eHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLmJ0bi10eHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5jb2xvcjogIzJDMkMyQztcclxuYm9yZGVyLXJhZGl1czogMjJweDtcclxufVxyXG4uYWRkLXVuaXQtbWJ7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICB9XHJcbi5hbGxvdy1jbGlja3tcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gIH1cclxuICAuY3Jvc3MtY2xvc2V7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHJpZ2h0OjA7XHJcbiAgICB0b3A6MDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5jcm9zcy1jbG9zZTpob3ZlcntcclxuICAgIGNvbG9yOmdyZXk7XHJcbn1cclxuLnVuaXQtYm94IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkRGRDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "uq8a":
/*!*************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/select-fpu/select-fpu.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SelectFpuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectFpuComponent", function() { return SelectFpuComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-fpu/add-fpu.component */ "kffj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../quote.service */ "qqH+");
/* harmony import */ var _addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../addproduct/add-product.service */ "BZtn");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");











const _c0 = function (a0) { return { "allow-click": a0 }; };
const _c1 = function (a0) { return { "fa-check": a0 }; };
function SelectFpuComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_div_21_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const unit_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.selectUnitsForPlans(unit_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r0.isSelectedAll ? true : false));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](unit_r1.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c1, unit_r1.isActive ? true : false));
} }
class SelectFpuComponent {
    constructor(_dialog, dialogData, _user, _quoteService, _toaster, _dialogRef, _addProductService) {
        this._dialog = _dialog;
        this.dialogData = dialogData;
        this._user = _user;
        this._quoteService = _quoteService;
        this._toaster = _toaster;
        this._dialogRef = _dialogRef;
        this._addProductService = _addProductService;
        this.selectedFpid = '';
        this.isSelectedAll = true;
        this.fpuList = [];
    }
    ngOnInit() {
        let obj = {
            quote_id: this.dialogData.qid,
        };
        this._quoteService.getFpuWithoutFP(obj).subscribe((resp) => {
            if (resp.statusCode == 200) {
                this.fpuList = resp.result;
                this.fpuList.forEach((elem, index) => {
                    elem.isActive = true;
                });
                // this._toaster.success(resp.message);
                // this._dialogRef.close(1);
            }
            else {
                // this._toaster.success(resp.message);
                // this._dialogRef.close(0);
            }
        });
    }
    selectUnitsForPlans(unit) {
        if (unit.isActive) {
            let checker = 0;
            this.fpuList.forEach((elem) => {
                if (elem.isActive) {
                    checker++;
                }
            });
            if (checker > 1) {
                unit.isActive = false;
            }
            else {
            }
        }
        else {
            unit.isActive = true;
        }
    }
    isAllUnit(bool) {
        if (bool) {
            this.isSelectedAll = true;
            this.fpuList.forEach((elem) => {
                elem.isActive = true;
            });
        }
        else {
            this.isSelectedAll = false;
        }
    }
    onCancel() {
        this._dialogRef.close(0);
    }
    onSubmit() {
        let unitList = [];
        if (this.isSelectedAll == true) {
            this.fpuList.forEach((element) => {
                unitList.push(element.sgid);
            });
        }
        else {
            this.fpuList.forEach((element) => {
                if (element.isActive == false)
                    unitList.push(element.sgid);
            });
        }
        if (this.dialogData.product_id) {
            let obj = {
                quote_id: this.dialogData.qid,
                user_id: this._user.getUser().getId(),
                units: unitList,
                product_id: this.dialogData.product_id,
                sku: this.dialogData.sku,
                quantity: this.dialogData.quantity,
                button_type: this.dialogData.button_type,
                month: this.dialogData.month,
                warehouse_id: this.dialogData.warehouse_id,
                source: this.dialogData.source,
            };
            this._quoteService.addFPUQuote(obj).subscribe((resp) => {
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(1);
                }
                else {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(0);
                }
            });
        }
        else {
            let obj = {
                quote_id: this.dialogData.qid,
                moodboard_id: this.dialogData.mid,
                user_id: this._user.getUser().getId(),
                units: unitList,
                source: this.dialogData.source,
            };
            this._quoteService.addFPUMB(obj).subscribe((resp) => {
                if (resp.statusCode == 200) {
                    this._toaster.success(resp.result);
                    this._dialogRef.close({ event: 'success' });
                }
                else {
                    this._toaster.success(resp.result);
                    this._dialogRef.close(0);
                }
            });
        }
    }
    onCreateNewFPU() {
        this._dialog
            .open(_add_fpu_add_fpu_component__WEBPACK_IMPORTED_MODULE_1__["AddFPUComponent"], {
            height: '70%',
            width: '70%',
            data: {
                isDialog: true,
            },
        })
            .afterClosed()
            .subscribe((data) => {
            console.log(data);
        });
    }
}
SelectFpuComponent.ɵfac = function SelectFpuComponent_Factory(t) { return new (t || SelectFpuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_addproduct_add_product_service__WEBPACK_IMPORTED_MODULE_5__["AddProductService"])); };
SelectFpuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectFpuComponent, selectors: [["lib-select-fpu"]], decls: 27, vars: 2, consts: [["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%", "cursor", "pointer"], [2, "margin-bottom", "2rem"], ["mat-dialog-close", "", "aria-hidden", "true", 1, "fa", "fa-times"], ["mat-dialog-content", "", 2, "margin-bottom", "2rem"], ["fxLayout", "column", "fxLayoutAlign", "space-between start", 2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "center", 1, "txt", 2, "width", "100%", "margin", "2%"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/quote/images/SVG-Icons-06.svg"], [2, "padding", "8px"], ["fxLayout", "row"], [1, "form-check-label", 2, "padding", "10px"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "checked", "click"], ["type", "radio", "name", "optradio", 1, "form-check-input", 3, "click"], ["fxLayout", "row wrap", "fxLayoutAlign", "space-between start", 1, "nofptxt", "d-flex", "justify-content-center", "p-2", "my-3", 2, "width", "98%", "background", "#F4F4F4", "margin", "2%"], ["class", "unit-box  add-unit-mb", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "fxLayoutAlign", "center"], ["mat-button", "", "color", "accent", 1, "btn-add", 3, "click"], ["mat-button", "", "color", "primary", 1, "btn-cancel", 3, "click"], [1, "unit-box", "add-unit-mb", 3, "ngClass", "click"], ["aria-hidden", "true", 1, "px-2", "pb-1", "cross-close", "fa", 2, "padding", "4px", "color", "green", 3, "ngClass"]], template: function SelectFpuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Add/Select Unit(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_Template_a_click_7_listener() { return ctx.onCreateNewFPU(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Add moodboard to existing unit(s)or create new unit(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Assign this Moodboard to: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_Template_input_click_15_listener() { return ctx.isAllUnit(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "All Units ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_Template_input_click_18_listener() { return ctx.isAllUnit(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Selected Unit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SelectFpuComponent_div_21_Template, 6, 7, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_Template_button_click_23_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectFpuComponent_Template_button_click_25_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.fpuList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.titeltxt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000;\n}\n\n.txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 18px;\n}\n\n.btn-add[_ngcontent-%COMP%] {\n  background: #f6e15f;\n  border-radius: 50px;\n  color: #2c2c2c;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #000000;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n  color: #ffffff;\n}\n\n.btn-txt[_ngcontent-%COMP%] {\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  text-align: center;\n  color: #2C2C2C;\n}\n\n.add-unit-mb[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.allow-click[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n\n.cross-close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  z-index: 100;\n}\n\n.cross-close[_ngcontent-%COMP%]:hover {\n  color: grey;\n}\n\n.unit-box[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  margin: 5px;\n  padding-top: 20px;\n  font-family: Poppins;\n  font-style: normal;\n  font-weight: 800;\n  font-size: 18px;\n  text-align: center;\n  color: #000000;\n  background: #FFFDFD;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.3);\n  border-radius: 5px;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzZWxlY3QtZnB1LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFDQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFFSjs7QUFBQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFJRjs7QUFGQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBS0o7O0FBRkE7RUFDSSxvQkFBQTtFQUNKLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBS0E7O0FBREE7RUFDSSxlQUFBO0FBSUo7O0FBRkE7RUFDSSwrQkFBQTtBQUtKOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBS0o7O0FBSEE7RUFDSSxXQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU9KIiwiZmlsZSI6InNlbGVjdC1mcHUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnRpdGVsdHh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4udHh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG59XHJcbi5idG4tYWRkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZlMTVmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICMyYzJjMmM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG59XHJcbi5idG4tY2FuY2VsIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4IDE1cHggMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcblxyXG4uYnRuLXR4dCB7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmNvbG9yOiAjMkMyQzJDO1xyXG5cclxufVxyXG5cclxuLmFkZC11bml0LW1ie1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgfVxyXG4uYWxsb3ctY2xpY2t7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBcclxuICB9XHJcbiAgLmNyb3NzLWNsb3Nle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICByaWdodDowO1xyXG4gICAgdG9wOjA7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uY3Jvc3MtY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjpncmV5O1xyXG59XHJcbi51bml0LWJveCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZERkQ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "w4wL":
/*!***************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/floor-plan-details/floor-plan-details.service.ts ***!
  \***************************************************************************************************/
/*! exports provided: FloorPlanDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPlanDetailsService", function() { return FloorPlanDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");


class FloorPlanDetailsService {
    constructor(_http, _env, _toaster) {
        this._http = _http;
        this._env = _env;
        this._toaster = _toaster;
    }
    getMoodBoards(quoteId, fpId) {
        return this._http.sendGETRequest(this._env.getEndPoint() +
            'load/floorplan/moodboards?quote_id=' +
            quoteId +
            '&floorplan_id=' +
            fpId);
    }
    getUnitMoodBoards(quoteId, fpId, unitID) {
        const data = { sgid: unitID };
        return this._http.sendPOSTRequest(this._env.getEndPoint() +
            'getUnitMoodboards', JSON.stringify(data));
    }
    getFloorPlanUnits(quoteId, fpId) {
        return this._http.sendGETRequest(this._env.getEndPoint() +
            'getFloorPlanUnits?quote_id=' +
            quoteId +
            '&floorplan_id=' +
            fpId);
    }
    getFPSummary(quoteId, fpId, unitId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'load/floorplan/unit/products', JSON.stringify({ unit_id: unitId, floorplan_id: fpId, quote_id: quoteId }));
    }
    getFPList(id) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'getFloorplanDetails', JSON.stringify({ quote_id: id }));
    }
    getFloorPlanDetails(quoteId, fpId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'getFloorplanDetails', JSON.stringify({ quote_id: quoteId, floorplan_id: fpId }));
    }
    addFloorPlanUnit(unit, floorplan_id, quote_id, sgid) {
        const data = { unit, floorplan_id, quote_id, sgid };
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'addUnitFloorPlan', JSON.stringify(data));
    }
    removeUnitFromFp(quoteId, unitName, unitId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'removeUnit', JSON.stringify({ quote_id: quoteId, unit: unitName, sgid: unitId }));
    }
    removeMoodboardFromFP(quoteId, fpId, mdId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'remove/floorplan/moodboard', JSON.stringify({
            quote_id: quoteId,
            moodboard_id: mdId,
            floorplan_id: fpId,
        }));
    }
    removeMoodboardFromFPUnits(quoteId, fpId, mdId, unit) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'remove/floorplan/moodboard', JSON.stringify({
            quote_id: quoteId,
            moodboard_id: mdId,
            floorplan_id: fpId,
            unit_id: unit
        }));
    }
    getMoodboardWithUnits(quoteId, fpId) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'quote/moodboardInFloorplan/units', JSON.stringify({ quote_id: quoteId, floorplan_id: fpId }));
    }
    changeUnitName(quoteId, unitId, unitName) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'update/UnitName', JSON.stringify({
            unit_id: unitId,
            quote_id: quoteId,
            unit_name: unitName,
        }));
    }
    addUnitsToFp(quoteId, fpId, units) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'addFloorPlanUnits', JSON.stringify({ quote_id: quoteId, unit: units, floorplan_id: fpId }));
    }
}
FloorPlanDetailsService.ɵfac = function FloorPlanDetailsService_Factory(t) { return new (t || FloorPlanDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ToasterService"])); };
FloorPlanDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FloorPlanDetailsService, factory: FloorPlanDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "wXI3":
/*!********************************************************************!*\
  !*** ./projects/quote/src/lib/components/quote/quote.component.ts ***!
  \********************************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class QuoteComponent {
    constructor() { }
    ngOnInit() { }
}
QuoteComponent.ɵfac = function QuoteComponent_Factory(t) { return new (t || QuoteComponent)(); };
QuoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteComponent, selectors: [["lib-quote"]], decls: 1, vars: 0, template: function QuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".quote-details[_ngcontent-%COMP%] {\n  height: 300px;\n}\n.quote-details__icon[_ngcontent-%COMP%] {\n  background: #febf2d;\n}\n.quote-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.quote-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.quote-details__copy[_ngcontent-%COMP%], .quote-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.quote-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.quote-moodboard[_ngcontent-%COMP%] {\n  padding: 2rem;\n  height: 300px;\n}\n.quote-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem 1.5rem;\n  background: #323232;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.15), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  height: 100%;\n  background: white;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.1), 4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: grey;\n  color: white;\n  text-align: center;\n  margin: 0;\n}\n.quote-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.quote-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-summary__info--lable[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.moodboard-list[_ngcontent-%COMP%] {\n  border: 0.3rem solid yellow;\n}\n.value[_ngcontent-%COMP%], .label[_ngcontent-%COMP%] {\n  letter-spacing: 0.05em;\n}\n.value[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQUFKO0FBQ0k7RUFDRSxtQkFBQTtBQUNOO0FBQU07RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBQU07RUFDRSxtQkFBQTtFQUNBLGdKQUFBO0VBRUEsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNSO0FBRUk7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0FBQU47QUFFSTtFQUNJLHlCQUFBO0FBQVI7QUFHRTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBREo7QUFFSTtFQUNFLFlBQUE7QUFBTjtBQUVJO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2SUFBQTtFQUdBLGtCQUFBO0FBRk47QUFHTTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw0SUFBQTtFQUdBLGtCQUFBO0FBSFI7QUFJUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlY7QUFJUTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUZWO0FBT0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFMSjtBQU1JO0VBQ0UsWUFBQTtBQUpOO0FBS007RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBSFI7QUFLTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBSFI7QUFNSTtFQUNFLGVBQUE7QUFKTjtBQVNBO0VBQ0UsMkJBQUE7QUFORjtBQVVBO0VBQ0ksc0JBQUE7QUFQSjtBQVNBO0VBQ0ksZ0JBQUE7QUFOSiIsImZpbGUiOiJxdW90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZSB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIDRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAwcHggLTRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgLTRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTJweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29weSwmX19pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19pbmZve1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMCAycmVtIDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtbW9vZGJvYXJkIHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgIH1cclxuICAgICZfX2xpc3Qge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xyXG4gICAgICBib3gtc2hhZG93OiAtNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgIDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksIDBweCAtNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSksXHJcbiAgICAgICAgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICYtLWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3gtc2hhZG93OiAtNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgNHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpLFxyXG4gICAgICAgICAgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgJi1zdW1tYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgJi0tbGFibGUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgIH1cclxuICAgICAgJi0tdmFsdWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19hY3Rpb25zIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vb2Rib2FyZC1saXN0IHtcclxuICBib3JkZXI6IDAuM3JlbSBzb2xpZCB5ZWxsb3c7XHJcbn1cclxuXHJcblxyXG4udmFsdWUsLmxhYmVsIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbn1cclxuLnZhbHVlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "yL1b":
/*!*******************************************************************************************************!*\
  !*** ./projects/quote/src/lib/common/components/total-cell-renderer/total-cell-renderer.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TotalCellRendererComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalCellRendererComponent", function() { return TotalCellRendererComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




class TotalCellRendererComponent {
    constructor(_computationService) {
        this._computationService = _computationService;
        this.isDelete = false;
        this.value = 0;
    }
    ngOnInit() { }
    agInit(params) {
        var _a, _b, _c, _d, _e;
        let isExtraRow = (_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.isExtraRow;
        this.isDelete = (_b = params === null || params === void 0 ? void 0 : params.data) === null || _b === void 0 ? void 0 : _b.isDeleteOption;
        if (isExtraRow) {
            let keys = params.data.sgid;
            switch (keys) {
                case 'SUB TOTAL ($)':
                    this.value = Math.round(this._computationService.getSubTotal(params));
                    break;
                case 'TOTAL ($)':
                    let subTotal = this._computationService.getSubTotal(params);
                    let deliveryFee = this.getDeliveryFee(params);
                    let taxPercent = this.getTaxPercentage(params);
                    let taxAmount = this._computationService.getTaxAmount(subTotal, deliveryFee, taxPercent);
                    this.value = this._computationService.getTotalAmount(subTotal, deliveryFee, taxAmount);
                    break;
                default:
                    if (keys.includes('TAXES')) {
                        let subTotal = this._computationService.getSubTotal(params);
                        let deliveryFee = this.getDeliveryFee(params);
                        let taxPercent = this.getTaxPercentage(params);
                        this.value = this._computationService.getTaxAmount(subTotal, deliveryFee, taxPercent);
                    }
                    else {
                        this.value = params.value;
                    }
                    break;
            }
        }
        else {
            let price = this.getItemPrice(params);
            let discount = parseFloat((_c = params.data.discount) !== null && _c !== void 0 ? _c : 0);
            let quantity = parseFloat((_d = params.data.is_qty) !== null && _d !== void 0 ? _d : 0);
            this.value = this._computationService.getProductTotalAmount(price, discount, quantity);
        }
        params.node.setDataValue((_e = params.column) === null || _e === void 0 ? void 0 : _e.getId(), this.value);
        // params.api.redrawRows();
    }
    getDeliveryFee(params) {
        return parseFloat(params.api.getValue('is_total', params.api.getPinnedBottomRow(1)));
    }
    getTaxPercentage(params) {
        var _a;
        return parseFloat((_a = params.api.getPinnedBottomRow(2).data.taxPercent) !== null && _a !== void 0 ? _a : 1);
    }
    refresh(params) {
        this.agInit(params);
        return true;
    }
    getItemPrice(params) {
        var _a, _b;
        let price = params.data.button_type === 0
            ? (_a = params.data.price) !== null && _a !== void 0 ? _a : 0 : (_b = params.data.buy_price) !== null && _b !== void 0 ? _b : 0;
        return parseFloat(price);
    }
}
TotalCellRendererComponent.ɵfac = function TotalCellRendererComponent_Factory(t) { return new (t || TotalCellRendererComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ComputationService"])); };
TotalCellRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TotalCellRendererComponent, selectors: [["lib-total-cell-renderer"]], decls: 4, vars: 4, consts: [["fxLayout", "row", "fxLayoutGap", ".5rem"]], template: function TotalCellRendererComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.value, "1.2-2"), "");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3RhbC1jZWxsLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "zfCb":
/*!************************************************!*\
  !*** ./projects/quote/src/lib/quote.module.ts ***!
  \************************************************/
/*! exports provided: QuoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteModule", function() { return QuoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _common_quote_common_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/quote-common.module */ "KyzS");
/* harmony import */ var _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/quote-create/quote-create.component */ "GEx9");
/* harmony import */ var _components_quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/quote-list/quote-list.component */ "8/+T");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/quote/quote.component */ "wXI3");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _quote_routing__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./quote-routing */ "ggHO");
/* harmony import */ var _components_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/quote-detail/quote-detail.component */ "Cvmg");
/* harmony import */ var _components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/floor-plan-unit/floor-plan-unit.component */ "K5TM");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class QuoteModule {
}
QuoteModule.ɵfac = function QuoteModule_Factory(t) { return new (t || QuoteModule)(); };
QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: QuoteModule });
QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _common_quote_common_module__WEBPACK_IMPORTED_MODULE_10__["QuoteCommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_quote_routing__WEBPACK_IMPORTED_MODULE_15__["quoteRoute"]),
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](QuoteModule, { declarations: [_components_quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_12__["QuoteListComponent"], _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_13__["QuoteComponent"], _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_11__["QuoteCreateComponent"], _components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_17__["FloorPlanUnitComponent"], _components_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_16__["QuoteDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _common_quote_common_module__WEBPACK_IMPORTED_MODULE_10__["QuoteCommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=default~moodboard-src-lib-moodboard-module~order-src-lib-order-module~quote-src-lib-quote-module~sho~6a476ef7.js.map