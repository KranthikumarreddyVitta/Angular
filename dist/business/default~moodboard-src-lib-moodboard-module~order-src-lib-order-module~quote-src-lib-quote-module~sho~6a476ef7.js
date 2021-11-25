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
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../quote.service */ "qqH+");
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "FKr1");















function QuoteListComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", project_r1.project_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r1.project_name);
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
        this.getProjectList();
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
        this.selectedProject = value;
        this.getQuoteList();
    }
}
QuoteListComponent.ɵfac = function QuoteListComponent_Factory(t) { return new (t || QuoteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_quote_list_service__WEBPACK_IMPORTED_MODULE_3__["QuoteListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["UserService"])); };
QuoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: QuoteListComponent, selectors: [["lib-quote-list"]], decls: 20, vars: 19, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quotes"], [3, "iconSrc", "iconAltTxt", "leftTxt", "src", "altTxt", "bottomTxt"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quotes-create"], ["mat-raised-button", "", 3, "click"], ["inline", "true"], [1, "quotes-create-text"], [1, "select"], [3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quotes-filter"], ["mat-flat-button", "", 3, "color", "click"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "500px", 3, "defaultColDef", "gridOptions", "rowData", "columnDefs"], [3, "value"]], template: function QuoteListComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Select a Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function QuoteListComponent_Template_mat_select_selectionChange_11_listener($event) { return ctx.projectFilter($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, QuoteListComponent_mat_option_12_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuoteListComponent_Template_button_click_14_listener() { return ctx.allQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "ALL QUOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function QuoteListComponent_Template_button_click_16_listener() { return ctx.myQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "MY QUOTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "ag-grid-angular", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("iconSrc", ctx.quoteInfo.bannerIconImg)("iconAltTxt", ctx.quoteInfo.bannerIconImgTxt)("leftTxt", ctx.quoteInfo.text)("src", ctx.quoteInfo.bannerImg)("altTxt", ctx.quoteInfo.bannerImgTxt)("bottomTxt", ctx.quoteInfo.bannerBottomTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.projectList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.selectedButton === "myQuote" ? "#F3F3F3" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.selectedButton === "allQuote" ? "accent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background", ctx.selectedButton === "allQuote" ? "#F3F3F3" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("color", ctx.selectedButton === "myQuote" ? "accent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("defaultColDef", ctx.defaultColDef)("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 17, ctx.rowData))("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridAngular"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".quotes-create[_ngcontent-%COMP%] {\n  background: #464646;\n  padding: 2rem 0;\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border-radius: 10px;\n  box-shadow: -4px 0px 4px rgba(0, 0, 0, 0.15), 0px -4px 4px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.15), 4px 0px 4px rgba(0, 0, 0, 0.15);\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  font-size: 32px;\n}\n.quotes-create-text[_ngcontent-%COMP%] {\n  letter-spacing: 0.12em;\n  color: #ffffff;\n}\n.quotes-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.quotes-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Brandon Grotesque-bld\";\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.quotes-table[_ngcontent-%COMP%] {\n  margin: 0 4rem;\n  background: #f8f8f8;\n  box-shadow: -4px 0px 6px rgba(0, 0, 0, 0.1), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);\n  border-radius: 7px;\n  margin-bottom: 4rem;\n}\n.select[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 7px;\n  padding: 5px;\n  width: 300px;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-left: 10px;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 1rem;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdKQUFBO0FBQ1I7QUFFUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQVY7QUFHTTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtBQURSO0FBSUk7RUFDRSxlQUFBO0FBRk47QUFHTTtFQUNFLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQUlJO0VBQ0UsY0FBQTtFQUVBLG1CQUFBO0VBQ0EsNklBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFTRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU5KO0FBT0k7RUFDRSxrQkFBQTtBQUxOO0FBT0k7RUFDSSxvQkFBQTtBQUxSO0FBT0k7RUFDSSxhQUFBO0FBTFIiLCJmaWxlIjoicXVvdGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZXMge1xyXG4gICAgJi1jcmVhdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDY0NjQ2O1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSksXHJcbiAgICAgICAgICAwcHggLTRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSwgMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICAgIDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1maWx0ZXIge1xyXG4gICAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiQnJhbmRvbiBHcm90ZXNxdWUtYmxkXCI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIuMDYyNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtdGFibGUge1xyXG4gICAgICBtYXJnaW46IDAgNHJlbTtcclxuICAgICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgYm94LXNoYWRvdzogLTRweCAwcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgNHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICAwcHggLTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwcHggNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC5zZWxlY3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICAvLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgICAvLyAgICAgcGFkZGluZy1ib3R0b206IDByZW0gIWltcG9ydGFudDtcclxuICAgIC8vICAgICB9ICBcclxuICAgIH0iXX0= */"] });


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
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ "i680");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf-autotable */ "DaQG");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _quote_quote_detail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quote/quote-detail.service */ "Mn8n");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/quote-header/quote-header.component */ "Tu8c");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












const _c0 = ["quoteHeader"];
function QuoteDetailComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuoteDetailComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.generatePdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " GENERATE PDF ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function QuoteDetailComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuoteDetailComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.continueToPayment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " CONTINUE TO PAYMENT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class QuoteDetailComponent {
    constructor(_route, _quoteDetailService, _toaster, _dialog, _user, _core, _pdf) {
        this._route = _route;
        this._quoteDetailService = _quoteDetailService;
        this._toaster = _toaster;
        this._dialog = _dialog;
        this._user = _user;
        this._core = _core;
        this._pdf = _pdf;
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
            .open(projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["PaymentComponent"], {
            height: '15rem',
            data: { quoteId: (_b = (_a = this.quoteHeader) === null || _a === void 0 ? void 0 : _a.quoteDetails) === null || _b === void 0 ? void 0 : _b.sgid },
        })
            .afterClosed()
            .subscribe((data) => {
            var _a, _b;
            data['quote_id'] = (_b = (_a = this.quoteHeader) === null || _a === void 0 ? void 0 : _a.quoteDetails) === null || _b === void 0 ? void 0 : _b.sgid;
            data['sgid'] = this._user.getUser().getId();
            this._quoteDetailService.createOrder(data).subscribe((data) => {
                this._toaster.success('Payment Done');
            }, (error) => {
                this._toaster.success('Payment Fails');
            });
        }, (error) => { });
    }
    generatePdf() {
        let data = this._pdf.getAgGridRowsAndColumns(this.quoteHeader.agGrid);
        let imagesObs = this._pdf.getAllTableBase64Images(data === null || data === void 0 ? void 0 : data.rows, 3);
        imagesObs.subscribe((images) => {
            var _a;
            let doc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]();
            doc.text('Quote Information', 8, 15);
            let info = [
                ['Project Name:', this.quoteHeader.quoteDetails.project_name],
                ['address', this.quoteHeader.quoteDetails.address],
                ['Company Name:', this.quoteHeader.quoteDetails.company_name],
                ['Quote :', this.quoteHeader.quoteDetails.sgid],
                ['Contact No:', this.quoteHeader.quoteDetails.contactno],
                ['State:', this.quoteHeader.quoteDetails.is_state_name],
                ['Customer Name:', this.quoteHeader.quoteDetails.name],
                ['Email:', this.quoteHeader.quoteDetails.email],
                ['City:', this.quoteHeader.quoteDetails.city_name],
                ['Zipcode:', this.quoteHeader.quoteDetails.zipcode],
            ];
            jspdf_autotable__WEBPACK_IMPORTED_MODULE_1___default()(doc, Object.assign(Object.assign({}, this._pdf.getInformationTableUserOptions()), { body: info }));
            doc.addPage();
            doc.text('Quote Summary', 10, 15);
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
                        data.cell.text = [];
                    }
                }, didDrawCell: (data) => {
                    if (data.section === 'body' && data.column.index === 3) {
                        var base64Img = 'data:image/jpeg;base64,' + images[data.row.index];
                        doc.addImage(base64Img, 'JPEG', data.cell.x + 1, data.cell.y + 1, 18, 18);
                    }
                } }));
            doc.save('quote.pdf');
        });
    }
}
QuoteDetailComponent.ɵfac = function QuoteDetailComponent_Factory(t) { return new (t || QuoteDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_quote_quote_detail_service__WEBPACK_IMPORTED_MODULE_5__["QuoteDetailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["PdfService"])); };
QuoteDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: QuoteDetailComponent, selectors: [["lib-quote-detail"]], viewQuery: function QuoteDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.quoteHeader = _t.first);
    } }, decls: 10, vars: 3, consts: [["fxFill", "", 3, "quoteId"], ["quoteHeader", ""], ["actions", ""], ["mat-flat-button", "", "color", "primary", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["fxFlex", ""], ["mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["id", "my-table"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function QuoteDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "lib-quote-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](3, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function QuoteDetailComponent_Template_button_click_4_listener() { return ctx.saveQuote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " SAVE QUOTE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, QuoteDetailComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, QuoteDetailComponent_button_8_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "table", 7);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("quoteId", ctx.quoteId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.editQuote);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r0.editQuote);
    } }, directives: [_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_7__["QuoteHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["FlexFillDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdW90ZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "EQ0Y":
/*!******************************************!*\
  !*** ./projects/quote/src/public-api.ts ***!
  \******************************************/
/*! exports provided: QuoteService, QuoteHeaderComponent, TotalCellRendererComponent, ItemTypeComponent, QuoteModule, QuoteCommonModule, QuoteCreateFormComponent, AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_quote_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/quote.service */ "qqH+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return _lib_quote_service__WEBPACK_IMPORTED_MODULE_0__["QuoteService"]; });

/* harmony import */ var _lib_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/common/components/quote-header/quote-header.component */ "Tu8c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteHeaderComponent", function() { return _lib_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__["QuoteHeaderComponent"]; });

/* harmony import */ var _lib_common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/common/components/total-cell-renderer/total-cell-renderer.component */ "yL1b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TotalCellRendererComponent", function() { return _lib_common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_2__["TotalCellRendererComponent"]; });

/* harmony import */ var _lib_common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/common/components/item-type/item-type.component */ "mT0w");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ItemTypeComponent", function() { return _lib_common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_3__["ItemTypeComponent"]; });

/* harmony import */ var _lib_quote_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/quote.module */ "zfCb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteModule", function() { return _lib_quote_module__WEBPACK_IMPORTED_MODULE_4__["QuoteModule"]; });

/* harmony import */ var _lib_common_quote_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/common/quote-common.module */ "KyzS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteCommonModule", function() { return _lib_common_quote_common_module__WEBPACK_IMPORTED_MODULE_5__["QuoteCommonModule"]; });

/* harmony import */ var _lib_common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/common/components/quote-create-form/quote-create-form.component */ "Oq4D");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QuoteCreateFormComponent", function() { return _lib_common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_6__["QuoteCreateFormComponent"]; });

/* harmony import */ var _lib_common_components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/common/components/addproduct/addproduct.component */ "IEgP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return _lib_common_components_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_7__["AddproductComponent"]; });

/*
 * Public API Surface of quote
 */










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
/* harmony import */ var _core_src_lib_components_create_form_header_create_form_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/src/lib/components/create-form-header/create-form-header.component */ "Jxqp");
/* harmony import */ var _common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/quote-create-form/quote-create-form.component */ "Oq4D");






const _c0 = ["quoteFormComp"];
function QuoteCreateComponent_b_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](" " + ctx_r0.customerName);
} }
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
        this._toaster.success('Quote Created');
        if (this.type == 'COPY')
            this._location.back();
        this._router.navigate(['quote', quote.sgid]);
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
    } }, decls: 5, vars: 5, consts: [["text", "QUOTE", 3, "iconPath", "subTitle"], ["subtitle", ""], [4, "ngIf"], [1, "table", 3, "type", "submitButtonText", "onSubmit", "onCancel"], ["quoteFormComp", ""]], template: function QuoteCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-form-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteCreateComponent_b_2_Template, 2, 1, "b", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "lib-quote-create-form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function QuoteCreateComponent_Template_lib_quote_create_form_onSubmit_3_listener($event) { return ctx.onSubmit($event); })("onCancel", function QuoteCreateComponent_Template_lib_quote_create_form_onCancel_3_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconPath", "assets/order/images/order-icon.png")("subTitle", ctx.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("submitButtonText", ctx.submitButtonText);
    } }, directives: [_core_src_lib_components_create_form_header_create_form_header_component__WEBPACK_IMPORTED_MODULE_4__["CreateFormHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _common_components_quote_create_form_quote_create_form_component__WEBPACK_IMPORTED_MODULE_5__["QuoteCreateFormComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  place-content: stretch center;\n  align-items: stretch;\n}\n\n.table[_ngcontent-%COMP%] {\n  padding: 1rem 4rem 2rem 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDQTtFQUNFLDRCQUFBO0FBRUYiLCJmaWxlIjoicXVvdGUtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwbGFjZS1jb250ZW50OiBzdHJldGNoIGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG4udGFibGUge1xyXG4gIHBhZGRpbmc6IDFyZW0gNHJlbSAycmVtIDRyZW07XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _common_components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/components/moodboard/moodboard.component */ "ssVi");
/* harmony import */ var _common_components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/components/add-fp/add-fp.component */ "7PJY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_components_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/components/quote-header/quote-header.service */ "g7tG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_components_floor_plan_details_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/components/floor-plan-details/floor-plan-details.service */ "w4wL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






















function FloorPlanUnitComponent_div_16_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", fp_r3.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", fp_r3.floorname, " ");
} }
function FloorPlanUnitComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Add/Select a Floor Plan:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_16_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.onCreateNewFP(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FloorPlanUnitComponent_div_16_Template_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.selectedFpid = $event; })("change", function FloorPlanUnitComponent_div_16_Template_select_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r7.getSelectedFpu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "None Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, FloorPlanUnitComponent_div_16_option_8_Template, 2, 2, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r8.addFloorPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.selectedFpid);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.fplist);
} }
const _c0 = function () { return {}; };
function FloorPlanUnitComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_div_24_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const moodboard_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.removeMoodboardFromFP(moodboard_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", moodboard_r9 == null ? null : moodboard_r9.unitmoodboards == null ? null : moodboard_r9.unitmoodboards.is_moodboard_images == null ? null : moodboard_r9.unitmoodboards.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](moodboard_r9 == null ? null : moodboard_r9.unitmoodboards == null ? null : moodboard_r9.unitmoodboards.boardname);
} }
class FloorPlanUnitComponent {
    constructor(_quoteHeaderService, _route, _router, _dialog, _dialog_s, _location, _toaster, _fpSevice) {
        this._quoteHeaderService = _quoteHeaderService;
        this._route = _route;
        this._router = _router;
        this._dialog = _dialog;
        this._dialog_s = _dialog_s;
        this._location = _location;
        this._toaster = _toaster;
        this._fpSevice = _fpSevice;
        this.quoteId = '';
        this.unit_id = '';
        this.unit = '';
        this.selectedFpid = '';
        this.fplist = [];
        this.agGrid = {};
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
        this.fpDetails = {};
        this.fpId = '';
        this.moodboardList = [];
        this.unitName = '';
        this.hideFloorPlanAssign = false;
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
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ImageRendererComponent"],
            TotalCellRendererComponent: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_1__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_1__["ItemTypeComponent"],
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
            rowHeight: 100,
            headerHeight: 100,
            getRowHeight: (params) => {
                var _a;
                return ((_a = params === null || params === void 0 ? void 0 : params.data) === null || _a === void 0 ? void 0 : _a.isExtraRow) ? 50 : 100;
            },
        };
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.quoteId = params.id;
            this.fpId = params.fpId === 'None' ? null : params.fpId;
            this.unit_id = params.unit_id;
            this.getFloorPlanDetails();
            this.getMoodBoards();
            this.getFPSummary();
            this.getFpList();
            // this.getFloorPlanUnits();
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
            .open(_common_components_add_fp_add_fp_component__WEBPACK_IMPORTED_MODULE_5__["AddFPComponent"], {
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((x) => {
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
            return x.result;
        }));
    }
    updateBottomData(data) {
        this.pinnedBottomRowData[1].is_total = data === null || data === void 0 ? void 0 : data.delivery_fee;
        this.pinnedBottomRowData[2].sgid = 'TAXES (' + (data === null || data === void 0 ? void 0 : data.tax_percentage) + '%)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
        this.pinnedBottomRowData[3].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
    }
    back() {
        this._location.back();
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
            this._fpSevice.addFloorPlanUnit(this.unit, this.selectedFpid, this.quoteId, this.unit_id).subscribe((resp) => {
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
            .open(_common_components_moodboard_moodboard_component__WEBPACK_IMPORTED_MODULE_4__["MoodboardComponent"], {
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
FloorPlanUnitComponent.ɵfac = function FloorPlanUnitComponent_Factory(t) { return new (t || FloorPlanUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_components_quote_header_quote_header_service__WEBPACK_IMPORTED_MODULE_7__["QuoteHeaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_components_floor_plan_details_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_11__["FloorPlanDetailsService"])); };
FloorPlanUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: FloorPlanUnitComponent, selectors: [["app-floor-plan-unit"]], decls: 31, vars: 12, consts: [["fxLayout", "column", "fxLayoutGap", "1.5rem", 1, "floor-plan"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "floor-plan-col"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem"], [1, "back", "pointer"], [1, "material-icons", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 1, "floor-plan__container--input"], [1, "h3", "form-label-width"], ["appearance", "outline", 1, "mt-1", 2, "width", "250px"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], ["class", "floor-plan__container--input", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 4, "ngIf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "floor-plan-col", "odd"], [1, "h2"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "floor-plan__container"], ["fxFlex", "10", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "floor-plan__container--item", "pointer", 3, "click"], ["inline", "true", 1, "icon"], ["fxFlex", "10", "class", "floor-plan__container--item", "fxLayout", "column", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", " stretch"], ["fxLayoutGap", "1rem", "fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "floor-plan-summary"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], [1, "add-to-md-button"], ["src", "assets/shop/addButton.svg", 1, "pointer", 3, "click"], [1, "grey", 2, "width", "190px", 3, "ngModel", "ngModelChange", "change"], ["value", "None"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 1, "round", 2, "width", "170px", 3, "click"], [3, "value"], ["fxFlex", "10", "fxLayout", "column", 1, "floor-plan__container--item", 3, "ngClass"], ["aria-hidden", "true", 1, "fa", "fa-times", "icon", 3, "click"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src"]], template: function FloorPlanUnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_Template_span_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " arrow_back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Unit Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function FloorPlanUnitComponent_Template_input_ngModelChange_13_listener($event) { return ctx.unitName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_Template_button_click_14_listener() { return ctx.changeUnitName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Change Unit Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, FloorPlanUnitComponent_div_16_Template, 11, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "ADD/MANAGE MOODBOARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function FloorPlanUnitComponent_Template_div_click_21_listener() { return ctx.openAddMoodboardDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, FloorPlanUnitComponent_div_24_Template, 5, 4, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "UNIT SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "ag-grid-angular", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Back to Quote/ ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.unitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hideFloorPlanAssign);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.moodboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](30, 10, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_19__["AgGridAngular"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".floor-plan-col[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n.floor-plan__container--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  min-height: 100px;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n  color: #9d9d9d;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.floor-plan-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.floor-plan-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.floor-plan-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.odd[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.form-label-width[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.add-to-md-button[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  padding-top: 2px;\n}\nselect.grey[_ngcontent-%COMP%] {\n  background: url('greyDropdown.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 12px;\n  border: none;\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZsb29yLXBsYW4tdW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FBQU47QUFHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBVjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUFWO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0UsWUFBQTtBQURWO0FBRVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFFVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFHUTtFQUNFLGVBQUE7QUFEVjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsNERBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBSEYiLCJmaWxlIjoiZmxvb3ItcGxhbi11bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb29yLXBsYW4ge1xyXG4gICAgJi1jb2wge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAmLS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdW1tYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAmLS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2FjdGlvbnMge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4ub2RkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXQtMSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtd2lkdGgge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmFkZC10by1tZC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbnNlbGVjdC5ncmV5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JleURyb3Bkb3duLnN2Z1wiKSBuby1yZXBlYXQgOTclICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 43);
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
    const state_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r23.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r23.name, " ");
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
        var _a, _b, _c;
        this._coreService
            .validateZipCode((_a = this.quoteFromGroup.get('city')) === null || _a === void 0 ? void 0 : _a.value, (_b = this.quoteFromGroup.get('state_id')) === null || _b === void 0 ? void 0 : _b.value, (_c = this.quoteFromGroup.get('zipcode')) === null || _c === void 0 ? void 0 : _c.value)
            .subscribe((data) => {
            if (data === null || data === void 0 ? void 0 : data.status) {
                this._fromService
                    .createQuote(this.quoteFromGroup, this.type)
                    .subscribe((data) => {
                    this.onSubmit.emit(data === null || data === void 0 ? void 0 : data.quote);
                    if (this.dialogData.isDialog) {
                        this._toaster.success('Quote Created');
                        this._dialogRef.close();
                    }
                }, (error) => {
                    this._toaster.error(error);
                });
            }
            else {
                this._toaster.warning('Invalid Zip code');
            }
        }, (error) => {
            this._toaster.warning('Invalid Zip code');
        });
    }
}
QuoteCreateFormComponent.ɵfac = function QuoteCreateFormComponent_Factory(t) { return new (t || QuoteCreateFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_lib_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_create_form_service__WEBPACK_IMPORTED_MODULE_7__["QuoteCreateFormService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_quote_service__WEBPACK_IMPORTED_MODULE_8__["QuoteService"])); };
QuoteCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteCreateFormComponent, selectors: [["lib-quote-create-form"]], inputs: { quoteNumber: "quoteNumber", phone: "phone", customerName: "customerName", address: "address", email: "email", stateId: "stateId", companyName: "companyName", companyId: "companyId", city: "city", projectName: "projectName", projectId: "projectId", zipCode: "zipCode", submitButtonText: "submitButtonText", type: "type" }, outputs: { onCancel: "onCancel", onSubmit: "onSubmit" }, decls: 77, vars: 39, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-create__form"], ["fxLayout", "row", "fxFlex", "100", 2, "width", "100%"], ["fxFlex", "95", "fxLayout", "row", "fxLayoutAlign", "center center"], [1, "quote-create__form--title"], ["fxFlex", "5", "fxLayout", "row", "fxLayoutAlign", "row-reverse"], ["class", "quote-create__form--title", 3, "click", 4, "ngIf"], ["action", "", "fxLayout", "row wrap", "fxLayoutAlign", "space-between stretch", 1, "quote-create__form--elements", 3, "formGroup"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch", 4, "ngIf"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", " stretch"], [1, "label"], [1, "asterisk"], ["type", "text", "formControlName", "name", "placeholder", "Enter Customer Name", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 3, "click", 4, "ngIf"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["style", "width: 100%;", "type", "text", "formControlName", "companyName", "placeholder", "Add Company Name", 3, "readonly", "ngClass", 4, "ngIf"], ["style", "width: 100%;", "formControlName", "company_id", 3, "ngClass", "change", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["style", "width: 100%;", "type", "text", "formControlName", "project_name", "placeholder", "Add Project Name", 3, "ngClass", 4, "ngIf"], ["style", "width: 100%;", "formControlName", "project_id", 3, "ngClass", 4, "ngIf"], ["type", "text", "formControlName", "email", "placeholder", "Add on Email", 3, "ngClass"], ["type", "text", "placeholder", "Add a Phone Number", "formControlName", "contact_no", 3, "ngClass"], ["type", "text", "formControlName", "address", "placeholder", "Enter on Address", 3, "ngClass"], ["formControlName", "state_id", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "city", "placeholder", "Enter a City", 3, "readonly", "ngClass"], ["type", "text", "formControlName", "zipcode", "placeholder", "Add a ZipCode", 3, "readonly", "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quote-create__actions"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mat-raised-button", "", 1, "btn", "btn-cancel", 3, "click"], [1, "quote-create__form--title", 3, "click"], ["src", "assets/quote/images/close-22.svg", "height", "22px", "width", "22px"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch"], ["type", "text", "formControlName", "quote_id", "placeholder", "Enter Quote Number", 3, "readonly", "ngClass"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/quote/images/SVG-Icons-06.svg"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "companyName", "placeholder", "Add Company Name", 2, "width", "100%", 3, "readonly", "ngClass"], ["formControlName", "company_id", 2, "width", "100%", 3, "ngClass", "change"], [3, "value"], [1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "project_name", "placeholder", "Add Project Name", 2, "width", "100%", 3, "ngClass"], ["formControlName", "project_id", 2, "width", "100%", 3, "ngClass"]], template: function QuoteCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: [".quote-create__form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.quote-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n}\n.quote-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.quote-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.quote-create__actions[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.quote-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.6rem 1rem;\n  font-size: inherit;\n  border: 1px;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUNNO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQ1I7QUFBUTtFQUNFLGFBQUE7QUFFVjtBQUVJO0VBQ0UsVUFBQTtBQUFOO0FBQ007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUNSO0FBSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTs7RUFFRSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFESjtBQUdFO0VBQ0UsU0FBQTtFQUdBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUVBLDhCQUFBO0VBQ0E7OztHQUFBO0VBSUEsOERBQUE7RUFDQTtpRUFBQTtFQUVBLDBCQUFBO0VBQ0EsNEJBQUE7QUFESjtBQUlFO0VBQ0UsVUFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtBQURKO0FBR0U7RUFDRSxtQkFBQTtBQUFKO0FBRUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFHSiIsImZpbGUiOiJxdW90ZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZS1jcmVhdGUge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICYtLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgJi0tZWxlbWVudHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbSA0cmVtIDJyZW07XHJcbiAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2FjdGlvbnMge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCxcclxuICBzZWxlY3Qge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgfVxyXG4gIHNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIFxyXG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcclxuICAgIC8vICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICByYWRpYWwtZ3JhZGllbnQoI2ZlYmYyZCA5MiUsIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgICAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9xdW90ZS9pbWFnZXMvU1ZHLUljb25zLTE0LnN2Z1wiKTtcclxuICAgIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDAuNWVtKSAwLjVlbTsqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuICAuYXN0ZXJpc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIC5yZWFkLW9ubHkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogI0Y2RTE1RjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICAuYnRuLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzJDMkMyQztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH0iXX0= */"] });


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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
































const _c0 = ["dialog"];
function QuoteHeaderComponent_ng_template_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const moodboard_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", moodboard_r17.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](moodboard_r17.boardname);
} }
function QuoteHeaderComponent_ng_template_0_mat_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select a Moodboard to be added to this quote.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.selectedMoodboard = $event; })("selectionChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_selectionChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectionChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_ng_template_0_ng_container_12_Template, 3, 2, "ng-container", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuoteHeaderComponent_ng_template_0_mat_option_13_Template, 2, 0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_ng_template_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.addMoodboard(ctx_r21.selectedMoodboard); });
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
function QuoteHeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.quoteDetails.order_reference);
} }
function QuoteHeaderComponent_button_64_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_64_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.OnEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { selected: a0 }; };
function QuoteHeaderComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_70_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const moodboard_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.onClickMDorProduct(moodboard_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " -Moodboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r24 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, moodboard_r24.sgid == (ctx_r4.selectedQuoteMD == null ? null : ctx_r4.selectedQuoteMD.sgid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", moodboard_r24 == null ? null : moodboard_r24.unitmoodboards == null ? null : moodboard_r24.unitmoodboards.is_moodboard_images == null ? null : moodboard_r24.unitmoodboards.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", moodboard_r24 == null ? null : moodboard_r24.unitmoodboards == null ? null : moodboard_r24.unitmoodboards.boardname, " ");
} }
function QuoteHeaderComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_71_Template_img_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const product_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onClickMDorProduct(product_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r27 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, product_r27.sgid == (ctx_r5.selectedQuoteMD == null ? null : ctx_r5.selectedQuoteMD.sgid)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r27 == null ? null : product_r27.variation_new == null ? null : product_r27.variation_new.default_images[0] == null ? null : product_r27.variation_new.default_images[0].image_url == null ? null : product_r27.variation_new.default_images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r27.name);
} }
function QuoteHeaderComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_72_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.addMDtoFloorPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO FLOORPLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.addMDtoUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO UNIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.removeMDfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r45.removeProductfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE PRODUCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_73_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.goToMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GO TO MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_73_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-item-type", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", item_r49 == null ? null : item_r49.button_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r49 == null ? null : item_r49.variation == null ? null : item_r49.variation.images[0] == null ? null : item_r49.variation.images[0].image_url == null ? null : item_r49.variation.images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r49 == null ? null : item_r49.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Qty :" + (item_r49 == null ? null : item_r49.qty), " ");
} }
function QuoteHeaderComponent_div_73_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "lib-item-type", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", ctx_r38.selectedQuoteMD == null ? null : ctx_r38.selectedQuoteMD.button_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r38.selectedQuoteMD == null ? null : ctx_r38.selectedQuoteMD.variation_new == null ? null : ctx_r38.selectedQuoteMD.variation_new.default_images[0] == null ? null : ctx_r38.selectedQuoteMD.variation_new.default_images[0].image_url == null ? null : ctx_r38.selectedQuoteMD.variation_new.default_images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.selectedQuoteMD == null ? null : ctx_r38.selectedQuoteMD.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "Qty :" + (ctx_r38.selectedQuoteMD == null ? null : ctx_r38.selectedQuoteMD.qty), " ");
} }
function QuoteHeaderComponent_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_73_button_4_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteHeaderComponent_div_73_button_5_Template, 2, 0, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteHeaderComponent_div_73_button_6_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteHeaderComponent_div_73_button_7_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteHeaderComponent_div_73_button_8_Template, 2, 0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteHeaderComponent_div_73_div_11_Template, 8, 4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_div_73_div_12_Template, 8, 4, "div", 71);
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
function QuoteHeaderComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Floor Plans found. Please add Floor Plan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_78_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_78_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const fp_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.removeFloorPlanFromQuote(fp_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_78_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_78_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_78_button_2_Template, 3, 0, "button", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteHeaderComponent_div_78_button_3_Template, 3, 0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_78_button_4_Template, 3, 0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 66);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_78_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const fp_r50 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.openFloorPlanPage(fp_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SETUP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r50 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.removeFloorPlanFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fp_r50.floorname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", fp_r50.floorplan_mb_cnt, " Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fp_r50.total_unit, " Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fp_r50.floorplan_type_name, "");
} }
function QuoteHeaderComponent_button_80_Template(rf, ctx) { if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_80_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.openAddFloorPlanDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD FLOOR PLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Floor Plans found. Please add Floor Plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_86_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 48);
} }
function QuoteHeaderComponent_div_86_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_86_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const unit_r63 = ctx.$implicit; const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.removeUnitFromFP(unit_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_86_div_4_i_2_Template, 1, 0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_86_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const unit_r63 = ctx.$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r67.openFloorPlanUnit(unit_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r63 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r62.removeUnitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r63.name);
} }
function QuoteHeaderComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_86_div_4_Template, 8, 2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r61 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fp_r61 == null ? null : fp_r61.floorname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fp_r61.unit_ids);
} }
function QuoteHeaderComponent_div_89_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 48);
} }
function QuoteHeaderComponent_div_89_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_89_i_2_Template, 1, 0, "i", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_89_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const unit_r68 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.openFloorPlanUnit(unit_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r68 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.removeUnitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](unit_r68.name);
} }
function QuoteHeaderComponent_button_91_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_91_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.openAddUnitDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD UNIT(S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = ["*"];
class QuoteHeaderComponent {
    constructor(_quoteHeaderService, _router, _user, _core, _matDialog, _toaster, _dialog, _quoteService) {
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
        this.dialogRef = undefined;
    }
    ngOnInit() {
        this.getQuoteInformation();
        this.getMoodboardInQuote();
        this.getFloorPlan();
        this.routeIndex = this._router.url.indexOf('quote');
        if (this.routeIndex == 1) {
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
            return x.quote_items;
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
        this.pinnedBottomRowData[2].sgid = 'TAXES (' + (data === null || data === void 0 ? void 0 : data.tax_percentage) + '%)';
        this.pinnedBottomRowData[2].is_total = data === null || data === void 0 ? void 0 : data.tax_amount;
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
        this._router.navigate([
            'quote',
            this.quoteId,
            'floor-plan-unit',
            floorPlanID,
            'unit',
            unit.sgid,
        ]);
    }
    // Add Floor plan
    openFloorPlanPage(fp) {
        this._router.navigate(['quote', this.quoteId, fp.sgid]);
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
    } }, inputs: { quoteId: "quoteId", text: "text", iconPath: "iconPath" }, outputs: { onCopy: "onCopy", onEdit: "onEdit" }, ngContentSelectors: _c2, decls: 113, vars: 37, consts: [["dialog", ""], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "quote-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-details__icon"], ["alt", "", "srcset", "", 3, "src"], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "quote-details__info"], ["fxFlex", "66", 4, "ngIf"], ["fxFlex", "33"], [1, "label"], [1, "value"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "1rem", 1, "quote-details__copy"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a filter list icon", 3, "click"], ["mat-mini-fab", "", "color", "accent", 3, "click", 4, "ngIf"], ["color", "accent", "mat-align-tabs", "start", 1, "tabs", 3, "selectedTabChange"], ["label", "Default Unit"], ["fxLayout", "column", 1, "tabs-item"], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote-moodboard"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "quote-moodboard__list"], ["fxFlex", "10", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", 3, "ngClass", 4, "ngFor", "ngForOf"], ["fxFlex", "10", "class", "quote-moodboard__list--item", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngIf"], ["fxFlex", "row", "class", "quote-moodboard--sec", 4, "ngIf"], ["label", "Floor Plans"], [1, "g-box-shadow", "tabs-item", "fp"], ["class", "fp__default-text", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 1, "fp__container"], ["fxLayout", "column", "fxLayoutGap", "1rem", "class", "g-box-shadow fp__container--item", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "2rem"], ["class", "round", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], ["label", "Floor plan Units"], [1, "g-box-shadow", "tabs-item", "fpu"], ["class", "fpu__default-text", 4, "ngIf"], ["class", "fpu__container g-box-shadow", 4, "ngFor", "ngForOf"], [1, "fpu__container", "g-box-shadow", "pointer"], ["fxLayout", "row", "fxLayoutGap", "1rem"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow", 4, "ngFor", "ngForOf"], ["fxFlex", ""], ["disabled", "", "color", "accent"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "quote-summary"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "2rem", 1, "quote-summary__info"], [1, "quote-summary__info--label"], [1, "quote-summary__info--value"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "2rem", 1, "quote-summary__actions"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "dialog"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [1, "h2", 2, "margin-bottom", "2rem"], ["mat-flat-button", "", "mat-dialog-close", ""], ["aria-hidden", "true", 1, "fa", "fa-times"], ["fxLayout", "column", "fxLayoutGap", "1rem"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], [4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "disabled", "click"], [3, "value"], ["value", ""], ["fxFlex", "66"], ["mat-mini-fab", "", "color", "accent", 3, "click"], ["fxFlex", "10", "fxLayout", "column", 1, "quote-moodboard__list--item", "moodboard-list", 3, "ngClass"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src", "click"], ["fxFlex", "10", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "quote-moodboard__list--item", 3, "click"], ["inline", "true", 1, "icon"], ["fxFlex", "row", 1, "quote-moodboard--sec"], ["fxLayout", "column", "fxFlex", "20", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], [1, "h2"], ["class", "round", "mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["vertical", "true", 2, "margin-right", "4rem"], ["fxFlex", "", "fxLayout", "row", "fxLayoutGap", "3rem", "fxLayoutAlign", "start", 1, "quote-", "sec"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngFor", "ngForOf"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "click"], ["fxFlex", "22", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 1, "quote-moodboard__list--item", "moodboard-list"], [2, "width", "65px", 3, "status"], ["fxFlex", "", "fxLayoutAlign", "center center", "fxLayout", "column"], ["fxFlex", "", "height", "100px", "width", "90px", "alt", "Moodboard", 3, "src"], [1, "h3"], [1, "fp__default-text"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "g-box-shadow", "fp__container--item"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], ["class", "round", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["class", "icon-button", "mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 4, "ngIf"], ["fxLayout", "column", 2, "align-items", "center"], ["mat-flat-button", "", 1, "round", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times-circle-o"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 1, "icon-button"], [1, "fpu__default-text"], [1, "fpu__container", "g-box-shadow"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow pointer", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow", "pointer"], ["mat-flat-button", "", 3, "click"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], [3, "click"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow"], ["disabled", "", "mat-flat-button", ""]], template: function QuoteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, QuoteHeaderComponent_ng_template_0_Template, 17, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, QuoteHeaderComponent_div_9_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Project Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Company Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Quote #: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "State: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Customer Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Zipcode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_Template_button_click_61_listener($event) { return ctx.OnCopy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, QuoteHeaderComponent_button_64_Template, 3, 0, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-tab-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function QuoteHeaderComponent_Template_mat_tab_group_selectedTabChange_65_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-tab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, QuoteHeaderComponent_div_70_Template, 6, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, QuoteHeaderComponent_div_71_Template, 4, 5, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, QuoteHeaderComponent_div_72_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, QuoteHeaderComponent_div_73_Template, 13, 8, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-tab", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, QuoteHeaderComponent_span_76_Template, 2, 0, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, QuoteHeaderComponent_div_78_Template, 16, 7, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, QuoteHeaderComponent_button_80_Template, 2, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_Template_button_click_81_listener() { return ctx.removeFloorPlanFlag = !ctx.removeFloorPlanFlag; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-tab", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, QuoteHeaderComponent_span_85_Template, 2, 0, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, QuoteHeaderComponent_div_86_Template, 5, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, QuoteHeaderComponent_div_89_Template, 8, 2, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, QuoteHeaderComponent_button_91_Template, 2, 0, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_Template_button_click_92_listener() { return ctx.removeUnitFlag = !ctx.removeUnitFlag; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-checkbox", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " UNASSIGNED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Customer City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Zipcode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "ag-grid-angular", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](112, 0, ["[select]", "actions"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.removeFloorPlanFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.removeFloorPlanFlag ? "CANCEL" : "REMOVE FLOOR PLAN", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.floorPlanList.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unitList == null ? null : ctx.unitList.FloorPlanWithUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.unitList == null ? null : ctx.unitList.UnitsWithoutFloorPlan);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.removeUnitFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.removeUnitFlag ? "CANCEL" : "REMOVE UNIT(S)", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.quoteDetails.city_name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quoteDetails.is_zip_code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 35, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_21__["MatCheckbox"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_22__["AgGridAngular"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_6__["ItemTypeComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".quote-details[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.quote-details__icon[_ngcontent-%COMP%] {\n  background: #F6E15F;\n}\n.quote-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.quote-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.quote-details__copy[_ngcontent-%COMP%], .quote-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.quote-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.quote-moodboard[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.quote-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.5rem;\n  color: #9d9d9d;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  padding: 0.3rem;\n}\n.quote-moodboard--sec[_ngcontent-%COMP%] {\n  padding: 1rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n.quote-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.quote-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.tabs-item[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 2rem 5rem;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n}\n.fp[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n}\n.fp__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fp__container[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.fp__container--item[_ngcontent-%COMP%] {\n  padding: 1rem 2.5rem;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.fpu[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n}\n.fpu__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fpu__container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 3rem 0;\n}\n.fpu__container--unit[_ngcontent-%COMP%] {\n  align-items: center;\n  position: relative;\n}\n.fpu__container--unit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.icon-button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 5px solid #ffee58;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRVI7QUFBTTtFQUNFLG1CQUFBO0VBQ0EsZ0pBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ1I7QUFFSTtFQUVFLG1CQUFBO0VBQ0Esb0JBQUE7QUFETjtBQUdJO0VBQ0UseUJBQUE7QUFETjtBQUlFO0VBQ0UsZUFBQTtBQUZKO0FBR0k7RUFDRSxZQUFBO0FBRE47QUFHSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUROO0FBRU07RUFXRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFWUjtBQURRO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBR1Y7QUFJUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRlY7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFGVjtBQU1JO0VBQ0UsYUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFKTjtBQU9FO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FBTEo7QUFNSTtFQUNFLFlBQUE7QUFKTjtBQUtNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUhSO0FBS007RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUhSO0FBTUk7RUFDRSxlQUFBO0FBSk47QUFTQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVNBO0VBQ0UsY0FBQTtBQU5GO0FBUUE7RUFDRSxpQkFBQTtBQUxGO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFNRTtFQUNFLGVBQUE7QUFKSjtBQUtJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSE47QUFPQTtFQUNFLGlCQUFBO0FBSkY7QUFLRTtFQUNFLGNBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFISjtBQUlJO0VBRUUsbUJBQUE7RUFDQSxrQkFBQTtBQUhOO0FBSU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRlI7QUFPQTtFQUNFLDJDQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQU1BO0VBQ0UseUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGIiwiZmlsZSI6InF1b3RlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZSB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI0Y2RTE1RjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgaW1nIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIDRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAwcHggLTRweCA2cHggcmdiKDAgMCAwIC8gMTUlKSwgLTRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOTJweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fY29weSxcclxuICAgICZfX2luZm8ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICAgICZfX2luZm8ge1xyXG4gICAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLW1vb2Rib2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAmX19oZWFkaW5nIHtcclxuICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgJl9fbGlzdCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAmLS1pdGVtIHtcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgIC8vIGJhY2tncm91bmQ6ICNmZWJmMmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgICAgICBjb2xvcjogIzlkOWQ5ZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1zZWMge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtc3VtbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgICZfX2luZm8ge1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICYtLWxhYmVsIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICB9XHJcbiAgICAgICYtLXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYWN0aW9ucyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJzLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICM5ZDlkOWQ7XHJcbn1cclxuLmZwIHtcclxuICBtYXJnaW46IDJyZW0gNXJlbTtcclxuICAmX19kZWZhdWx0LXRleHQge1xyXG4gICAgY29sb3I6ICNiMGFhYWE7XHJcbiAgfVxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICAmLS1pdGVtIHtcclxuICAgICAgcGFkZGluZzogMXJlbSAyLjVyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mcHUge1xyXG4gIG1hcmdpbjogMnJlbSA1cmVtO1xyXG4gICZfX2RlZmF1bHQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2IwYWFhYTtcclxuICB9XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBtYXJnaW46IDNyZW0gMDtcclxuICAgICYtLXVuaXQge1xyXG4gICAgICAvLyBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICYgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7XHJcbiAgICAgICAgdG9wOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmljb24tYnV0dG9uIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbn1cclxuLnNlbGVjdGVkIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCAjZmZlZTU4O1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


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
        let url = 'create/customer/info';
        if (type === 'EDIT') {
            url = 'update/customer/info';
        }
        if (type === 'COPY') {
            url = 'clone/quote';
        }
        return this._http.sendPOSTRequest(this._env.getEndPoint() + url, JSON.stringify(obj));
    }
}
QuoteCreateFormService.ɵfac = function QuoteCreateFormService_Factory(t) { return new (t || QuoteCreateFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
QuoteCreateFormService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: QuoteCreateFormService, factory: QuoteCreateFormService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "bSwM":
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js ***!
  \**************************************************************************/
/*! exports provided: MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, MAT_CHECKBOX_DEFAULT_OPTIONS, MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY, MAT_CHECKBOX_REQUIRED_VALIDATOR, MatCheckbox, MatCheckboxChange, MatCheckboxModule, MatCheckboxRequiredValidator, _MatCheckboxRequiredValidatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR", function() { return MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY", function() { return MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_CHECKBOX_REQUIRED_VALIDATOR", function() { return MAT_CHECKBOX_REQUIRED_VALIDATOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckbox", function() { return MatCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxChange", function() { return MatCheckboxChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule", function() { return MatCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxRequiredValidator", function() { return MatCheckboxRequiredValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatCheckboxRequiredValidatorModule", function() { return _MatCheckboxRequiredValidatorModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ "GU7r");








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */





const _c0 = ["input"];
const _c1 = function () { return { enterDuration: 150 }; };
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-checkbox-default-options', {
    providedIn: 'root',
    factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
    return {
        color: 'accent',
        clickAction: 'check-indeterminate',
    };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
/**
 * Provider Expression that allows mat-checkbox to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckbox),
    multi: true
};
/** Change event object emitted by MatCheckbox. */
class MatCheckboxChange {
}
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
class MatCheckboxBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatCheckboxMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["mixinDisabled"])(MatCheckboxBase))));
/**
 * A material design checkbox component. Supports all of the functionality of an HTML5 checkbox,
 * and exposes a similar API. A MatCheckbox can be either checked, unchecked, indeterminate, or
 * disabled. Note that all additional accessibility attributes are taken care of by the component,
 * so there is no need to provide them yourself. However, if you want to omit a label and still
 * have the checkbox be accessible, you may supply an [aria-label] input.
 * See: https://material.io/design/components/selection-controls.html
 */
class MatCheckbox extends _MatCheckboxMixinBase {
    constructor(elementRef, _changeDetectorRef, _focusMonitor, _ngZone, tabIndex, _animationMode, _options) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._focusMonitor = _focusMonitor;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._options = _options;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        this._uniqueId = `mat-checkbox-${++nextUniqueId}`;
        /** A unique id for the checkbox input. If none is supplied, it will be auto-generated. */
        this.id = this._uniqueId;
        /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
        this.labelPosition = 'after';
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Event emitted when the checkbox's `indeterminate` value changes. */
        this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
         * @docs-private
         */
        this._onTouched = () => { };
        this._currentAnimationClass = '';
        this._currentCheckState = 0 /* Init */;
        this._controlValueAccessorChangeFn = () => { };
        this._checked = false;
        this._disabled = false;
        this._indeterminate = false;
        this._options = this._options || defaults;
        this.color = this.defaultColor = this._options.color || defaults.color;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() { return `${this.id || this._uniqueId}-input`; }
    /** Whether the checkbox is required. */
    get required() { return this._required; }
    set required(value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(() => {
                    this._onTouched();
                    this._changeDetectorRef.markForCheck();
                });
            }
        });
        this._syncIndeterminate(this._indeterminate);
    }
    // TODO: Delete next major revision.
    ngAfterViewChecked() { }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    /**
     * Whether the checkbox is checked.
     */
    get checked() { return this._checked; }
    set checked(value) {
        if (value != this.checked) {
            this._checked = value;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is disabled. This fully overrides the implementation provided by
     * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
     */
    get disabled() { return this._disabled; }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (newValue !== this.disabled) {
            this._disabled = newValue;
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() { return this._indeterminate; }
    set indeterminate(value) {
        const changed = value != this._indeterminate;
        this._indeterminate = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (changed) {
            if (this._indeterminate) {
                this._transitionCheckState(3 /* Indeterminate */);
            }
            else {
                this._transitionCheckState(this.checked ? 1 /* Checked */ : 2 /* Unchecked */);
            }
            this.indeterminateChange.emit(this._indeterminate);
        }
        this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
        return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
        // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
        // component will be only marked for check, but no actual change detection runs automatically.
        // Instead of going back into the zone in order to trigger a change detection which causes
        // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
        // an explicit change detection for the checkbox view and its children.
        this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _getAriaChecked() {
        if (this.checked) {
            return 'true';
        }
        return this.indeterminate ? 'mixed' : 'false';
    }
    _transitionCheckState(newState) {
        let oldState = this._currentCheckState;
        let element = this._elementRef.nativeElement;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            element.classList.remove(this._currentAnimationClass);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            element.classList.add(this._currentAnimationClass);
            // Remove the animation class to avoid animation when the checkbox is moved between containers
            const animationClass = this._currentAnimationClass;
            this._ngZone.runOutsideAngular(() => {
                setTimeout(() => {
                    element.classList.remove(animationClass);
                }, 1000);
            });
        }
    }
    _emitChangeEvent() {
        const event = new MatCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
        // Assigning the value again here is redundant, but we have to do it in case it was
        // changed inside the `change` listener which will cause the input to be out of sync.
        if (this._inputElement) {
            this._inputElement.nativeElement.checked = this.checked;
        }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
        this.checked = !this.checked;
    }
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * Do not toggle on (change) event since IE doesn't fire change event when
     *   indeterminate checkbox is clicked.
     * @param event
     */
    _onInputClick(event) {
        var _a;
        const clickAction = (_a = this._options) === null || _a === void 0 ? void 0 : _a.clickAction;
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
        // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
        if (!this.disabled && clickAction !== 'noop') {
            // When user manually click on the checkbox, `indeterminate` is set to false.
            if (this.indeterminate && clickAction !== 'check') {
                Promise.resolve().then(() => {
                    this._indeterminate = false;
                    this.indeterminateChange.emit(this._indeterminate);
                });
            }
            this.toggle();
            this._transitionCheckState(this._checked ? 1 /* Checked */ : 2 /* Unchecked */);
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
        else if (!this.disabled && clickAction === 'noop') {
            // Reset native input when clicked with noop. The native checkbox becomes checked after
            // click, reset it to be align with `checked` value of `mat-checkbox`.
            this._inputElement.nativeElement.checked = this.checked;
            this._inputElement.nativeElement.indeterminate = this.indeterminate;
        }
    }
    /** Focuses the checkbox. */
    focus(origin, options) {
        if (origin) {
            this._focusMonitor.focusVia(this._inputElement, origin, options);
        }
        else {
            this._inputElement.nativeElement.focus(options);
        }
    }
    _onInteractionEvent(event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
        // Don't transition if animations are disabled.
        if (this._animationMode === 'NoopAnimations') {
            return '';
        }
        let animSuffix = '';
        switch (oldState) {
            case 0 /* Init */:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === 1 /* Checked */) {
                    animSuffix = 'unchecked-checked';
                }
                else if (newState == 3 /* Indeterminate */) {
                    animSuffix = 'unchecked-indeterminate';
                }
                else {
                    return '';
                }
                break;
            case 2 /* Unchecked */:
                animSuffix = newState === 1 /* Checked */ ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case 1 /* Checked */:
                animSuffix = newState === 2 /* Unchecked */ ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case 3 /* Indeterminate */:
                animSuffix = newState === 1 /* Checked */ ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
                break;
        }
        return `mat-checkbox-anim-${animSuffix}`;
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
        const nativeCheckbox = this._inputElement;
        if (nativeCheckbox) {
            nativeCheckbox.nativeElement.indeterminate = value;
        }
    }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) { return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8)); };
MatCheckbox.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatCheckbox, selectors: [["mat-checkbox"]], viewQuery: function MatCheckbox_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    } }, hostAttrs: [1, "mat-checkbox"], hostVars: 12, hostBindings: function MatCheckbox_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("tabindex", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-indeterminate", ctx.indeterminate)("mat-checkbox-checked", ctx.checked)("mat-checkbox-disabled", ctx.disabled)("mat-checkbox-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disableRipple: "disableRipple", color: "color", tabIndex: "tabIndex", ariaLabel: ["aria-label", "ariaLabel"], ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], id: "id", labelPosition: "labelPosition", name: "name", required: "required", checked: "checked", disabled: "disabled", indeterminate: "indeterminate", ariaDescribedby: ["aria-describedby", "ariaDescribedby"], value: "value" }, outputs: { change: "change", indeterminateChange: "indeterminateChange" }, exportAs: ["matCheckbox"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c2, decls: 17, vars: 20, consts: [[1, "mat-checkbox-layout"], ["label", ""], [1, "mat-checkbox-inner-container"], ["type", "checkbox", 1, "mat-checkbox-input", "cdk-visually-hidden", 3, "id", "required", "checked", "disabled", "tabIndex", "change", "click"], ["input", ""], ["matRipple", "", 1, "mat-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleRadius", "matRippleCentered", "matRippleAnimation"], [1, "mat-ripple-element", "mat-checkbox-persistent-ripple"], [1, "mat-checkbox-frame"], [1, "mat-checkbox-background"], ["version", "1.1", "focusable", "false", "viewBox", "0 0 24 24", 0, "xml", "space", "preserve", 1, "mat-checkbox-checkmark"], ["fill", "none", "stroke", "white", "d", "M4.1,12.7 9,17.6 20.3,6.3", 1, "mat-checkbox-checkmark-path"], [1, "mat-checkbox-mixedmark"], [1, "mat-checkbox-label", 3, "cdkObserveContent"], ["checkboxLabel", ""], [2, "display", "none"]], template: function MatCheckbox_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function MatCheckbox_Template_input_change_3_listener($event) { return ctx._onInteractionEvent($event); })("click", function MatCheckbox_Template_input_click_3_listener($event) { return ctx._onInputClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkObserveContent", function MatCheckbox_Template_span_cdkObserveContent_12_listener() { return ctx._onLabelTextChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("for", ctx.inputId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-checkbox-inner-container-no-side-margin", !_r2.textContent || !_r2.textContent.trim());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("checked", ctx.checked)("disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("value", ctx.value)("name", ctx.name)("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-checked", ctx._getAriaChecked())("aria-describedby", ctx.ariaDescribedby);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx._isRippleDisabled())("matRippleRadius", 20)("matRippleCentered", true)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["CdkObserveContent"]], styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"], encapsulation: 2, changeDetection: 0 });
MatCheckbox.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"],] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_CHECKBOX_DEFAULT_OPTIONS,] }] }
];
MatCheckbox.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    ariaDescribedby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-describedby',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    labelPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    indeterminateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    _inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['input',] }],
    ripple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"],] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    indeterminate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckbox, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-checkbox',
                template: "<label [attr.for]=\"inputId\" class=\"mat-checkbox-layout\" #label>\n  <span class=\"mat-checkbox-inner-container\"\n       [class.mat-checkbox-inner-container-no-side-margin]=\"!checkboxLabel.textContent || !checkboxLabel.textContent.trim()\">\n    <input #input\n           class=\"mat-checkbox-input cdk-visually-hidden\" type=\"checkbox\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [checked]=\"checked\"\n           [attr.value]=\"value\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [tabIndex]=\"tabIndex\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-checked]=\"_getAriaChecked()\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onInteractionEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n    <span matRipple class=\"mat-checkbox-ripple mat-focus-indicator\"\n         [matRippleTrigger]=\"label\"\n         [matRippleDisabled]=\"_isRippleDisabled()\"\n         [matRippleRadius]=\"20\"\n         [matRippleCentered]=\"true\"\n         [matRippleAnimation]=\"{enterDuration: 150}\">\n      <span class=\"mat-ripple-element mat-checkbox-persistent-ripple\"></span>\n    </span>\n    <span class=\"mat-checkbox-frame\"></span>\n    <span class=\"mat-checkbox-background\">\n      <svg version=\"1.1\"\n           focusable=\"false\"\n           class=\"mat-checkbox-checkmark\"\n           viewBox=\"0 0 24 24\"\n           xml:space=\"preserve\">\n        <path class=\"mat-checkbox-checkmark-path\"\n              fill=\"none\"\n              stroke=\"white\"\n              d=\"M4.1,12.7 9,17.6 20.3,6.3\"/>\n      </svg>\n      <!-- Element for rendering the indeterminate state checkbox. -->\n      <span class=\"mat-checkbox-mixedmark\"></span>\n    </span>\n  </span>\n  <span class=\"mat-checkbox-label\" #checkboxLabel (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
                exportAs: 'matCheckbox',
                host: {
                    'class': 'mat-checkbox',
                    '[id]': 'id',
                    '[attr.tabindex]': 'null',
                    '[class.mat-checkbox-indeterminate]': 'indeterminate',
                    '[class.mat-checkbox-checked]': 'checked',
                    '[class.mat-checkbox-disabled]': 'disabled',
                    '[class.mat-checkbox-label-before]': 'labelPosition == "before"',
                    '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`
                },
                providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
                inputs: ['disableRipple', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                styles: ["@keyframes mat-checkbox-fade-in-background{0%{opacity:0}50%{opacity:1}}@keyframes mat-checkbox-fade-out-background{0%,50%{opacity:1}100%{opacity:0}}@keyframes mat-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:22.910259}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1)}100%{stroke-dashoffset:0}}@keyframes mat-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mat-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);stroke-dashoffset:0}to{stroke-dashoffset:-22.910259}}@keyframes mat-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(45deg)}}@keyframes mat-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:0;transform:rotate(45deg)}to{opacity:1;transform:rotate(360deg)}}@keyframes mat-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 0.1);opacity:0;transform:rotate(-45deg)}to{opacity:1;transform:rotate(0deg)}}@keyframes mat-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);opacity:1;transform:rotate(0deg)}to{opacity:0;transform:rotate(315deg)}}@keyframes mat-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;opacity:1;transform:scaleX(1)}32.8%,100%{opacity:0;transform:scaleX(0)}}.mat-checkbox-background,.mat-checkbox-frame{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:2px;box-sizing:border-box;pointer-events:none}.mat-checkbox{display:inline-block;transition:background 400ms cubic-bezier(0.25, 0.8, 0.25, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;-webkit-tap-highlight-color:transparent}._mat-animation-noopable.mat-checkbox{transition:none;animation:none}.mat-checkbox .mat-ripple-element:not(.mat-checkbox-persistent-ripple){opacity:.16}.mat-checkbox-layout{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit;align-items:baseline;vertical-align:middle;display:inline-flex;white-space:nowrap}.mat-checkbox-label{-webkit-user-select:auto;-moz-user-select:auto;-ms-user-select:auto;user-select:auto}.mat-checkbox-inner-container{display:inline-block;height:16px;line-height:0;margin:auto;margin-right:8px;order:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px;flex-shrink:0}[dir=rtl] .mat-checkbox-inner-container{margin-left:8px;margin-right:auto}.mat-checkbox-inner-container-no-side-margin{margin-left:0;margin-right:0}.mat-checkbox-frame{background-color:transparent;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1);border-width:2px;border-style:solid}._mat-animation-noopable .mat-checkbox-frame{transition:none}.cdk-high-contrast-active .mat-checkbox.cdk-keyboard-focused .mat-checkbox-frame{border-style:dotted}.mat-checkbox-background{align-items:center;display:inline-flex;justify-content:center;transition:background-color 90ms cubic-bezier(0, 0, 0.2, 0.1),opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);-webkit-print-color-adjust:exact;color-adjust:exact}._mat-animation-noopable .mat-checkbox-background{transition:none}.cdk-high-contrast-active .mat-checkbox .mat-checkbox-background{background:none}.mat-checkbox-persistent-ripple{display:block;width:100%;height:100%;transform:none}.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:.04}.mat-checkbox.cdk-keyboard-focused .mat-checkbox-persistent-ripple{opacity:.12}.mat-checkbox-persistent-ripple,.mat-checkbox.mat-checkbox-disabled .mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{opacity:0}@media(hover: none){.mat-checkbox-inner-container:hover .mat-checkbox-persistent-ripple{display:none}}.mat-checkbox-checkmark{top:0;left:0;right:0;bottom:0;position:absolute;width:100%}.mat-checkbox-checkmark-path{stroke-dashoffset:22.910259;stroke-dasharray:22.910259;stroke-width:2.1333333333px}.cdk-high-contrast-black-on-white .mat-checkbox-checkmark-path{stroke:#000 !important}.mat-checkbox-mixedmark{width:calc(100% - 6px);height:2px;opacity:0;transform:scaleX(0) rotate(0deg);border-radius:2px}.cdk-high-contrast-active .mat-checkbox-mixedmark{height:0;border-top:solid 2px;margin-top:2px}.mat-checkbox-label-before .mat-checkbox-inner-container{order:1;margin-left:8px;margin-right:auto}[dir=rtl] .mat-checkbox-label-before .mat-checkbox-inner-container{margin-left:auto;margin-right:8px}.mat-checkbox-checked .mat-checkbox-checkmark{opacity:1}.mat-checkbox-checked .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-checked .mat-checkbox-mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark{opacity:0;transform:rotate(45deg)}.mat-checkbox-indeterminate .mat-checkbox-checkmark-path{stroke-dashoffset:0}.mat-checkbox-indeterminate .mat-checkbox-mixedmark{opacity:1;transform:scaleX(1) rotate(0deg)}.mat-checkbox-unchecked .mat-checkbox-background{background-color:transparent}.mat-checkbox-disabled{cursor:default}.cdk-high-contrast-active .mat-checkbox-disabled{opacity:.5}.mat-checkbox-anim-unchecked-checked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-checked .mat-checkbox-checkmark-path{animation:180ms linear 0ms mat-checkbox-unchecked-checked-checkmark-path}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-in-background}.mat-checkbox-anim-unchecked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-unchecked-indeterminate-mixedmark}.mat-checkbox-anim-checked-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-checked-unchecked .mat-checkbox-checkmark-path{animation:90ms linear 0ms mat-checkbox-checked-unchecked-checkmark-path}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-checkmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-checkmark}.mat-checkbox-anim-checked-indeterminate .mat-checkbox-mixedmark{animation:90ms linear 0ms mat-checkbox-checked-indeterminate-mixedmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-checkmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-checkmark}.mat-checkbox-anim-indeterminate-checked .mat-checkbox-mixedmark{animation:500ms linear 0ms mat-checkbox-indeterminate-checked-mixedmark}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-background{animation:180ms linear 0ms mat-checkbox-fade-out-background}.mat-checkbox-anim-indeterminate-unchecked .mat-checkbox-mixedmark{animation:300ms linear 0ms mat-checkbox-indeterminate-unchecked-mixedmark}.mat-checkbox-input{bottom:0;left:50%}.mat-checkbox .mat-checkbox-ripple{position:absolute;left:calc(50% - 20px);top:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["ANIMATION_MODULE_TYPE"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], indeterminateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], indeterminate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-describedby']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['input']
        }], ripple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRipple"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(() => MatCheckboxRequiredValidator),
    multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"] {
}
MatCheckboxRequiredValidator.ɵfac = function MatCheckboxRequiredValidator_Factory(t) { return ɵMatCheckboxRequiredValidator_BaseFactory(t || MatCheckboxRequiredValidator); };
MatCheckboxRequiredValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatCheckboxRequiredValidator, selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]] });
const ɵMatCheckboxRequiredValidator_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
                providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {
}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) { return new (t || _MatCheckboxRequiredValidatorModule)(); };
_MatCheckboxRequiredValidatorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: _MatCheckboxRequiredValidatorModule });
_MatCheckboxRequiredValidatorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatCheckboxRequiredValidatorModule, { declarations: [MatCheckboxRequiredValidator], exports: [MatCheckboxRequiredValidator] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                exports: [MatCheckboxRequiredValidator],
                declarations: [MatCheckboxRequiredValidator]
            }]
    }], null, null); })();
class MatCheckboxModule {
}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) { return new (t || MatCheckboxModule)(); };
MatCheckboxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatCheckboxModule });
MatCheckboxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
            _MatCheckboxRequiredValidatorModule
        ], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatCheckboxModule, { declarations: function () { return [MatCheckbox]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"], _MatCheckboxRequiredValidatorModule]; }, exports: function () { return [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatCheckboxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__["ObserversModule"],
                    _MatCheckboxRequiredValidatorModule
                ],
                exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"], _MatCheckboxRequiredValidatorModule],
                declarations: [MatCheckbox]
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
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=checkbox.js.map

/***/ }),

/***/ "d3UM":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js ***!
  \************************************************************************/
/*! exports provided: MAT_SELECT_CONFIG, MAT_SELECT_SCROLL_STRATEGY, MAT_SELECT_SCROLL_STRATEGY_PROVIDER, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY, MAT_SELECT_TRIGGER, MatSelect, MatSelectChange, MatSelectModule, MatSelectTrigger, SELECT_ITEM_HEIGHT_EM, SELECT_MULTIPLE_PANEL_PADDING_X, SELECT_PANEL_INDENT_PADDING_X, SELECT_PANEL_MAX_HEIGHT, SELECT_PANEL_PADDING_X, SELECT_PANEL_VIEWPORT_PADDING, _MatSelectBase, matSelectAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_CONFIG", function() { return MAT_SELECT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY", function() { return MAT_SELECT_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY", function() { return MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_TRIGGER", function() { return MAT_SELECT_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelect", function() { return MatSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectChange", function() { return MatSelectChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule", function() { return MatSelectModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectTrigger", function() { return MatSelectTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_ITEM_HEIGHT_EM", function() { return SELECT_ITEM_HEIGHT_EM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_MULTIPLE_PANEL_PADDING_X", function() { return SELECT_MULTIPLE_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_INDENT_PADDING_X", function() { return SELECT_PANEL_INDENT_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_MAX_HEIGHT", function() { return SELECT_PANEL_MAX_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_PADDING_X", function() { return SELECT_PANEL_PADDING_X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PANEL_VIEWPORT_PADDING", function() { return SELECT_PANEL_VIEWPORT_PADDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatSelectBase", function() { return _MatSelectBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matSelectAnimations", function() { return matSelectAnimations; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * The following are all the animations for the mat-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the AngularJS Material mat-select animation.
 * @docs-private
 */










const _c0 = ["trigger"];
const _c1 = ["panel"];
function MatSelect_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.placeholder);
} }
function MatSelect_span_5_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.triggerValue);
} }
function MatSelect_span_5_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](0, 0, ["*ngSwitchCase", "true"]);
} }
function MatSelect_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MatSelect_span_5_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MatSelect_span_5_ng_content_2_Template, 1, 0, "ng-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", !!ctx_r3.customTrigger);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
} }
function MatSelect_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("@transformPanel.done", function MatSelect_ng_template_8_Template_div_animation_transformPanel_done_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8._panelDoneAnimatingStream.next($event.toState); })("keydown", function MatSelect_ng_template_8_Template_div_keydown_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10._handleKeydown($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@transformPanelWrap", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("mat-select-panel ", ctx_r4._getPanelTheme(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform-origin", ctx_r4._transformOrigin)("font-size", ctx_r4._triggerFontSize, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.panelClass)("@transformPanel", ctx_r4.multiple ? "showing-multiple" : "showing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx_r4.id + "-panel")("aria-multiselectable", ctx_r4.multiple)("aria-label", ctx_r4.ariaLabel || null)("aria-labelledby", ctx_r4._getPanelAriaLabelledby());
} }
const _c2 = [[["mat-select-trigger"]], "*"];
const _c3 = ["mat-select-trigger", "*"];
const matSelectAnimations = {
    /**
     * This animation ensures the select's overlay panel animation (transformPanel) is called when
     * closing the select.
     * This is needed due to https://github.com/angular/angular/issues/23302
     */
    transformPanelWrap: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanelWrap', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["query"])('@transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animateChild"])()], { optional: true }))
    ]),
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            transform: 'scaleY(0.8)',
            minWidth: '100%',
            opacity: 0
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 32px)',
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('showing-multiple', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1,
            minWidth: 'calc(100% + 64px)',
            transform: 'scaleY(1)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 })))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Returns an exception to be thrown when attempting to change a select's `multiple` option
 * after initialization.
 * @docs-private
 */
function getMatSelectDynamicMultipleError() {
    return Error('Cannot change `multiple` mode of select after initialization.');
}
/**
 * Returns an exception to be thrown when attempting to assign a non-array value to a select
 * in `multiple` mode. Note that `undefined` and `null` are still valid values to allow for
 * resetting the value.
 * @docs-private
 */
function getMatSelectNonArrayValueError() {
    return Error('Value must be an array in multiple-selection mode.');
}
/**
 * Returns an exception to be thrown when assigning a non-function value to the comparator
 * used to determine if a value corresponds to an option. Note that whether the function
 * actually takes two values and returns a boolean is not checked.
 */
function getMatSelectNonFunctionValueError() {
    return Error('`compareWith` must be a function.');
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/**
 * The max height of the select's overlay panel.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_MAX_HEIGHT = 256;
/**
 * The panel's padding on the x-axis.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's x axis padding if it is indented (e.g. there is an option group).
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_INDENT_PADDING_X = SELECT_PANEL_PADDING_X * 2;
/**
 * The height of the select items in `em` units.
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_ITEM_HEIGHT_EM = 3;
// TODO(josephperrott): Revert to a constant after 2018 spec updates are fully merged.
/**
 * Distance between the panel edge and the option text in
 * multi-selection mode.
 *
 * Calculated as:
 * (SELECT_PANEL_PADDING_X * 1.5) + 16 = 40
 * The padding is multiplied by 1.5 because the checkbox's margin is half the padding.
 * The checkbox width is 16px.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_MULTIPLE_PANEL_PADDING_X = SELECT_PANEL_PADDING_X * 1.5 + 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 *
 * @deprecated To be turned into a private variable.
 * @breaking-change 12.0.0
 */
const SELECT_PANEL_VIEWPORT_PADDING = 8;
/** Injection token that determines the scroll handling while a select is open. */
const MAT_SELECT_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('mat-select-scroll-strategy');
/** @docs-private */
function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** Injection token that can be used to provide the default options the select module. */
const MAT_SELECT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_SELECT_CONFIG');
/** @docs-private */
const MAT_SELECT_SCROLL_STRATEGY_PROVIDER = {
    provide: MAT_SELECT_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
    useFactory: MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
};
/** Change event object that is emitted when the select value has changed. */
class MatSelectChange {
    constructor(
    /** Reference to the select that emitted the change event. */
    source, 
    /** Current value of the select that emitted the event. */
    value) {
        this.source = source;
        this.value = value;
    }
}
// Boilerplate for applying mixins to MatSelect.
/** @docs-private */
class MatSelectBase {
    constructor(_elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._elementRef = _elementRef;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
}
const _MatSelectMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinDisabled"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinErrorState"])(MatSelectBase))));
/**
 * Injection token that can be used to reference instances of `MatSelectTrigger`. It serves as
 * alternative token to the actual `MatSelectTrigger` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_SELECT_TRIGGER = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatSelectTrigger');
/**
 * Allows the user to customize the trigger that is displayed when the select has a value.
 */
class MatSelectTrigger {
}
MatSelectTrigger.ɵfac = function MatSelectTrigger_Factory(t) { return new (t || MatSelectTrigger)(); };
MatSelectTrigger.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: MatSelectTrigger, selectors: [["mat-select-trigger"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectTrigger, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
        args: [{
                selector: 'mat-select-trigger',
                providers: [{ provide: MAT_SELECT_TRIGGER, useExisting: MatSelectTrigger }]
            }]
    }], null, null); })();
/** Base class with all of the `MatSelect` functionality. */
class _MatSelectBase extends _MatSelectMixinBase {
    constructor(_viewportRuler, _changeDetectorRef, _ngZone, _defaultErrorStateMatcher, elementRef, _dir, _parentForm, _parentFormGroup, _parentFormField, ngControl, tabIndex, scrollStrategyFactory, _liveAnnouncer, _defaultOptions) {
        var _a, _b, _c;
        super(elementRef, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        this._viewportRuler = _viewportRuler;
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        this._parentFormField = _parentFormField;
        this.ngControl = ngControl;
        this._liveAnnouncer = _liveAnnouncer;
        this._defaultOptions = _defaultOptions;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Comparison function to specify which option is displayed. Defaults to object equality. */
        this._compareWith = (o1, o2) => o1 === o2;
        /** Unique id for this input. */
        this._uid = `mat-select-${nextUniqueId++}`;
        /** Current `ariar-labelledby` value for the select trigger. */
        this._triggerAriaLabelledBy = null;
        /** Emits whenever the component is destroyed. */
        this._destroy = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /** `View -> model callback called when value changes` */
        this._onChange = () => { };
        /** `View -> model callback called when select has been touched` */
        this._onTouched = () => { };
        /** ID for the DOM node containing the select's value. */
        this._valueId = `mat-select-value-${nextUniqueId++}`;
        /** Emits when the panel element is finished transforming in. */
        this._panelDoneAnimatingStream = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        this._overlayPanelClass = ((_a = this._defaultOptions) === null || _a === void 0 ? void 0 : _a.overlayPanelClass) || '';
        this._focused = false;
        /** A name for this control that can be used by `mat-form-field`. */
        this.controlType = 'mat-select';
        this._required = false;
        this._multiple = false;
        this._disableOptionCentering = (_c = (_b = this._defaultOptions) === null || _b === void 0 ? void 0 : _b.disableOptionCentering) !== null && _c !== void 0 ? _c : false;
        /** Aria label of the select. */
        this.ariaLabel = '';
        /** Combined stream of all of the child options' change events. */
        this.optionSelectionChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["defer"])(() => {
            const options = this.options;
            if (options) {
                return options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(options), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...options.map(option => option.onSelectionChange))));
            }
            return this._ngZone.onStable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["switchMap"])(() => this.optionSelectionChanges));
        });
        /** Event emitted when the select panel has been toggled. */
        this.openedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /** Event emitted when the select has been opened. */
        this._openedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(o => o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(() => { }));
        /** Event emitted when the select has been closed. */
        this._closedStream = this.openedChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["filter"])(o => !o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["map"])(() => { }));
        /** Event emitted when the selected value has been changed by the user. */
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        /**
         * Event that emits whenever the raw value of the select changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        if (this.ngControl) {
            // Note: we provide the value accessor through here, instead of
            // the `providers` to avoid running into a circular import.
            this.ngControl.valueAccessor = this;
        }
        // Note that we only want to set this when the defaults pass it in, otherwise it should
        // stay as `undefined` so that it falls back to the default in the key manager.
        if ((_defaultOptions === null || _defaultOptions === void 0 ? void 0 : _defaultOptions.typeaheadDebounceInterval) != null) {
            this._typeaheadDebounceInterval = _defaultOptions.typeaheadDebounceInterval;
        }
        this._scrollStrategyFactory = scrollStrategyFactory;
        this._scrollStrategy = this._scrollStrategyFactory();
        this.tabIndex = parseInt(tabIndex) || 0;
        // Force setter to be called in case id was not specified.
        this.id = this.id;
    }
    /** Whether the select is focused. */
    get focused() {
        return this._focused || this._panelOpen;
    }
    /** Placeholder to be shown if no value has been selected. */
    get placeholder() { return this._placeholder; }
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /** Whether the component is required. */
    get required() { return this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        this.stateChanges.next();
    }
    /** Whether the user should be allowed to select multiple options. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        if (this._selectionModel && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectDynamicMultipleError();
        }
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /** Whether to center the active option over the trigger. */
    get disableOptionCentering() { return this._disableOptionCentering; }
    set disableOptionCentering(value) {
        this._disableOptionCentering = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
    }
    /**
     * Function to compare the option values with the selected values. The first argument
     * is a value from an option. The second is a value from the selection. A boolean
     * should be returned.
     */
    get compareWith() { return this._compareWith; }
    set compareWith(fn) {
        if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw getMatSelectNonFunctionValueError();
        }
        this._compareWith = fn;
        if (this._selectionModel) {
            // A different comparator means the selection could change.
            this._initializeSelection();
        }
    }
    /** Value of the select control. */
    get value() { return this._value; }
    set value(newValue) {
        // Always re-assign an array, because it might have been mutated.
        if (newValue !== this._value || (this._multiple && Array.isArray(newValue))) {
            if (this.options) {
                this._setSelectionByValue(newValue);
            }
            this._value = newValue;
        }
    }
    /** Time to wait in milliseconds after the last keystroke before moving focus to an item. */
    get typeaheadDebounceInterval() { return this._typeaheadDebounceInterval; }
    set typeaheadDebounceInterval(value) {
        this._typeaheadDebounceInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceNumberProperty"])(value);
    }
    /** Unique id of the element. */
    get id() { return this._id; }
    set id(value) {
        this._id = value || this._uid;
        this.stateChanges.next();
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](this.multiple);
        this.stateChanges.next();
        // We need `distinctUntilChanged` here, because some browsers will
        // fire the animation end event twice for the same animation. See:
        // https://github.com/angular/angular/issues/24084
        this._panelDoneAnimatingStream
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy))
            .subscribe(() => this._panelDoneAnimating(this.panelOpen));
    }
    ngAfterContentInit() {
        this._initKeyManager();
        this._selectionModel.changed.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(event => {
            event.added.forEach(option => option.select());
            event.removed.forEach(option => option.deselect());
        });
        this.options.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            this._resetOptions();
            this._initializeSelection();
        });
    }
    ngDoCheck() {
        const newAriaLabelledby = this._getTriggerAriaLabelledby();
        // We have to manage setting the `aria-labelledby` ourselves, because part of its value
        // is computed as a result of a content query which can cause this binding to trigger a
        // "changed after checked" error.
        if (newAriaLabelledby !== this._triggerAriaLabelledBy) {
            const element = this._elementRef.nativeElement;
            this._triggerAriaLabelledBy = newAriaLabelledby;
            if (newAriaLabelledby) {
                element.setAttribute('aria-labelledby', newAriaLabelledby);
            }
            else {
                element.removeAttribute('aria-labelledby');
            }
        }
        if (this.ngControl) {
            this.updateErrorState();
        }
    }
    ngOnChanges(changes) {
        // Updating the disabled state is handled by `mixinDisabled`, but we need to additionally let
        // the parent form field know to run change detection when the disabled state changes.
        if (changes['disabled']) {
            this.stateChanges.next();
        }
        if (changes['typeaheadDebounceInterval'] && this._keyManager) {
            this._keyManager.withTypeAhead(this._typeaheadDebounceInterval);
        }
    }
    ngOnDestroy() {
        this._destroy.next();
        this._destroy.complete();
        this.stateChanges.complete();
    }
    /** Toggles the overlay panel open or closed. */
    toggle() {
        this.panelOpen ? this.close() : this.open();
    }
    /** Opens the overlay panel. */
    open() {
        if (this._canOpen()) {
            this._panelOpen = true;
            this._keyManager.withHorizontalOrientation(null);
            this._highlightCorrectOption();
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Closes the overlay panel and focuses the host element. */
    close() {
        if (this._panelOpen) {
            this._panelOpen = false;
            this._keyManager.withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr');
            this._changeDetectorRef.markForCheck();
            this._onTouched();
        }
    }
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param value New value to be written to the model.
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the value changes.
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param fn Callback to be triggered when the component has been touched.
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     *
     * @param isDisabled Sets whether the component is disabled.
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this.stateChanges.next();
    }
    /** Whether or not the overlay panel is open. */
    get panelOpen() {
        return this._panelOpen;
    }
    /** The currently selected option. */
    get selected() {
        return this.multiple ? this._selectionModel.selected : this._selectionModel.selected[0];
    }
    /** The value displayed in the trigger. */
    get triggerValue() {
        if (this.empty) {
            return '';
        }
        if (this._multiple) {
            const selectedOptions = this._selectionModel.selected.map(option => option.viewValue);
            if (this._isRtl()) {
                selectedOptions.reverse();
            }
            // TODO(crisbeto): delimiter should be configurable for proper localization.
            return selectedOptions.join(', ');
        }
        return this._selectionModel.selected[0].viewValue;
    }
    /** Whether the element is in RTL mode. */
    _isRtl() {
        return this._dir ? this._dir.value === 'rtl' : false;
    }
    /** Handles all keydown events on the select. */
    _handleKeydown(event) {
        if (!this.disabled) {
            this.panelOpen ? this._handleOpenKeydown(event) : this._handleClosedKeydown(event);
        }
    }
    /** Handles keyboard events while the select is closed. */
    _handleClosedKeydown(event) {
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"] ||
            keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"];
        const isOpenKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"];
        const manager = this._keyManager;
        // Open the select on ALT + arrow key to match the native <select>
        if (!manager.isTyping() && (isOpenKey && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) ||
            ((this.multiple || event.altKey) && isArrowKey)) {
            event.preventDefault(); // prevents the page from scrolling down when pressing space
            this.open();
        }
        else if (!this.multiple) {
            const previouslySelectedOption = this.selected;
            manager.onKeydown(event);
            const selectedOption = this.selected;
            // Since the value has changed, we need to announce it ourselves.
            if (selectedOption && previouslySelectedOption !== selectedOption) {
                // We set a duration on the live announcement, because we want the live element to be
                // cleared after a while so that users can't navigate to it using the arrow keys.
                this._liveAnnouncer.announce(selectedOption.viewValue, 10000);
            }
        }
    }
    /** Handles keyboard events when the selected is open. */
    _handleOpenKeydown(event) {
        const manager = this._keyManager;
        const keyCode = event.keyCode;
        const isArrowKey = keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
        const isTyping = manager.isTyping();
        if (isArrowKey && event.altKey) {
            // Close the select on ALT + arrow key to match the native <select>
            event.preventDefault();
            this.close();
            // Don't do anything in this case if the user is typing,
            // because the typing sequence can include the space key.
        }
        else if (!isTyping && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]) && manager.activeItem &&
            !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
            event.preventDefault();
            manager.activeItem._selectViaInteraction();
        }
        else if (!isTyping && this._multiple && keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["A"] && event.ctrlKey) {
            event.preventDefault();
            const hasDeselectedOptions = this.options.some(opt => !opt.disabled && !opt.selected);
            this.options.forEach(option => {
                if (!option.disabled) {
                    hasDeselectedOptions ? option.select() : option.deselect();
                }
            });
        }
        else {
            const previouslyFocusedIndex = manager.activeItemIndex;
            manager.onKeydown(event);
            if (this._multiple && isArrowKey && event.shiftKey && manager.activeItem &&
                manager.activeItemIndex !== previouslyFocusedIndex) {
                manager.activeItem._selectViaInteraction();
            }
        }
    }
    _onFocus() {
        if (!this.disabled) {
            this._focused = true;
            this.stateChanges.next();
        }
    }
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    _onBlur() {
        this._focused = false;
        if (!this.disabled && !this.panelOpen) {
            this._onTouched();
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        }
    }
    /**
     * Callback that is invoked when the overlay panel has been attached.
     */
    _onAttached() {
        this.overlayDir.positionChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
            this._changeDetectorRef.detectChanges();
            this._positioningSettled();
        });
    }
    /** Returns the theme to be used on the panel. */
    _getPanelTheme() {
        return this._parentFormField ? `mat-${this._parentFormField.color}` : '';
    }
    /** Whether the select has a value. */
    get empty() {
        return !this._selectionModel || this._selectionModel.isEmpty();
    }
    _initializeSelection() {
        // Defer setting the value in order to avoid the "Expression
        // has changed after it was checked" errors from Angular.
        Promise.resolve().then(() => {
            this._setSelectionByValue(this.ngControl ? this.ngControl.value : this._value);
            this.stateChanges.next();
        });
    }
    /**
     * Sets the selected option based on a value. If no option can be
     * found with the designated value, the select trigger is cleared.
     */
    _setSelectionByValue(value) {
        this._selectionModel.selected.forEach(option => option.setInactiveStyles());
        this._selectionModel.clear();
        if (this.multiple && value) {
            if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw getMatSelectNonArrayValueError();
            }
            value.forEach((currentValue) => this._selectValue(currentValue));
            this._sortValues();
        }
        else {
            const correspondingOption = this._selectValue(value);
            // Shift focus to the active item. Note that we shouldn't do this in multiple
            // mode, because we don't know what option the user interacted with last.
            if (correspondingOption) {
                this._keyManager.updateActiveItem(correspondingOption);
            }
            else if (!this.panelOpen) {
                // Otherwise reset the highlighted option. Note that we only want to do this while
                // closed, because doing it while open can shift the user's focus unnecessarily.
                this._keyManager.updateActiveItem(-1);
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Finds and selects and option based on its value.
     * @returns Option that has the corresponding value.
     */
    _selectValue(value) {
        const correspondingOption = this.options.find((option) => {
            // Skip options that are already in the model. This allows us to handle cases
            // where the same primitive value is selected multiple times.
            if (this._selectionModel.isSelected(option)) {
                return false;
            }
            try {
                // Treat null as a special reset value.
                return option.value != null && this._compareWith(option.value, value);
            }
            catch (error) {
                if (typeof ngDevMode === 'undefined' || ngDevMode) {
                    // Notify developers of errors in their comparator.
                    console.warn(error);
                }
                return false;
            }
        });
        if (correspondingOption) {
            this._selectionModel.select(correspondingOption);
        }
        return correspondingOption;
    }
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    _initKeyManager() {
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["ActiveDescendantKeyManager"](this.options)
            .withTypeAhead(this._typeaheadDebounceInterval)
            .withVerticalOrientation()
            .withHorizontalOrientation(this._isRtl() ? 'rtl' : 'ltr')
            .withHomeAndEnd()
            .withAllowedModifierKeys(['shiftKey']);
        this._keyManager.tabOut.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                // Select the active item when tabbing away. This is consistent with how the native
                // select behaves. Note that we only want to do this in single selection mode.
                if (!this.multiple && this._keyManager.activeItem) {
                    this._keyManager.activeItem._selectViaInteraction();
                }
                // Restore focus to the trigger before closing. Ensures that the focus
                // position won't be lost if the user got focus into the overlay.
                this.focus();
                this.close();
            }
        });
        this._keyManager.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this._panelOpen && this.panel) {
                this._scrollOptionIntoView(this._keyManager.activeItemIndex || 0);
            }
            else if (!this._panelOpen && !this.multiple && this._keyManager.activeItem) {
                this._keyManager.activeItem._selectViaInteraction();
            }
        });
    }
    /** Drops current option subscriptions and IDs and resets from scratch. */
    _resetOptions() {
        const changedOrDestroyed = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(this.options.changes, this._destroy);
        this.optionSelectionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed)).subscribe(event => {
            this._onSelect(event.source, event.isUserInput);
            if (event.isUserInput && !this.multiple && this._panelOpen) {
                this.close();
                this.focus();
            }
        });
        // Listen to changes in the internal state of the options and react accordingly.
        // Handles cases like the labels of the selected options changing.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["merge"])(...this.options.map(option => option._stateChanges))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(changedOrDestroyed))
            .subscribe(() => {
            this._changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** Invoked when an option is clicked. */
    _onSelect(option, isUserInput) {
        const wasSelected = this._selectionModel.isSelected(option);
        if (option.value == null && !this._multiple) {
            option.deselect();
            this._selectionModel.clear();
            if (this.value != null) {
                this._propagateChanges(option.value);
            }
        }
        else {
            if (wasSelected !== option.selected) {
                option.selected ? this._selectionModel.select(option) :
                    this._selectionModel.deselect(option);
            }
            if (isUserInput) {
                this._keyManager.setActiveItem(option);
            }
            if (this.multiple) {
                this._sortValues();
                if (isUserInput) {
                    // In case the user selected the option with their mouse, we
                    // want to restore focus back to the trigger, in order to
                    // prevent the select keyboard controls from clashing with
                    // the ones from `mat-option`.
                    this.focus();
                }
            }
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._propagateChanges();
        }
        this.stateChanges.next();
    }
    /** Sorts the selected values in the selected based on their order in the panel. */
    _sortValues() {
        if (this.multiple) {
            const options = this.options.toArray();
            this._selectionModel.sort((a, b) => {
                return this.sortComparator ? this.sortComparator(a, b, options) :
                    options.indexOf(a) - options.indexOf(b);
            });
            this.stateChanges.next();
        }
    }
    /** Emits change event to set the model value. */
    _propagateChanges(fallbackValue) {
        let valueToEmit = null;
        if (this.multiple) {
            valueToEmit = this.selected.map(option => option.value);
        }
        else {
            valueToEmit = this.selected ? this.selected.value : fallbackValue;
        }
        this._value = valueToEmit;
        this.valueChange.emit(valueToEmit);
        this._onChange(valueToEmit);
        this.selectionChange.emit(this._getChangeEvent(valueToEmit));
        this._changeDetectorRef.markForCheck();
    }
    /**
     * Highlights the selected item. If no option is selected, it will highlight
     * the first item instead.
     */
    _highlightCorrectOption() {
        if (this._keyManager) {
            if (this.empty) {
                this._keyManager.setFirstItemActive();
            }
            else {
                this._keyManager.setActiveItem(this._selectionModel.selected[0]);
            }
        }
    }
    /** Whether the panel is allowed to open. */
    _canOpen() {
        var _a;
        return !this._panelOpen && !this.disabled && ((_a = this.options) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
    /** Focuses the select element. */
    focus(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Gets the aria-labelledby for the select panel. */
    _getPanelAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        const labelExpression = (labelId ? labelId + ' ' : '');
        return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
    }
    /** Determines the `aria-activedescendant` to be set on the host. */
    _getAriaActiveDescendant() {
        if (this.panelOpen && this._keyManager && this._keyManager.activeItem) {
            return this._keyManager.activeItem.id;
        }
        return null;
    }
    /** Gets the aria-labelledby of the select component trigger. */
    _getTriggerAriaLabelledby() {
        var _a;
        if (this.ariaLabel) {
            return null;
        }
        const labelId = (_a = this._parentFormField) === null || _a === void 0 ? void 0 : _a.getLabelId();
        let value = (labelId ? labelId + ' ' : '') + this._valueId;
        if (this.ariaLabelledby) {
            value += ' ' + this.ariaLabelledby;
        }
        return value;
    }
    /** Called when the overlay panel is done animating. */
    _panelDoneAnimating(isOpen) {
        this.openedChange.emit(isOpen);
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedby = ids.join(' ');
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    onContainerClick() {
        this.focus();
        this.open();
    }
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    get shouldLabelFloat() {
        return this._panelOpen || !this.empty || (this._focused && !!this._placeholder);
    }
}
_MatSelectBase.ɵfac = function _MatSelectBase_Factory(t) { return new (t || _MatSelectBase)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](MAT_SELECT_CONFIG, 8)); };
_MatSelectBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: _MatSelectBase, viewQuery: function _MatSelectBase_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.panel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.overlayDir = _t.first);
    } }, inputs: { ariaLabel: ["aria-label", "ariaLabel"], id: "id", placeholder: "placeholder", required: "required", multiple: "multiple", disableOptionCentering: "disableOptionCentering", compareWith: "compareWith", value: "value", typeaheadDebounceInterval: "typeaheadDebounceInterval", panelClass: "panelClass", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], errorStateMatcher: "errorStateMatcher", sortComparator: "sortComparator" }, outputs: { openedChange: "openedChange", _openedStream: "opened", _closedStream: "closed", selectionChange: "selectionChange", valueChange: "valueChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]] });
_MatSelectBase.ctorParameters = () => [
    { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_SELECT_SCROLL_STRATEGY,] }] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_SELECT_CONFIG,] }] }
];
_MatSelectBase.propDecorators = {
    trigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['trigger',] }],
    panel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['panel',] }],
    overlayDir: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"],] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    disableOptionCentering: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['aria-labelledby',] }],
    errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    typeaheadDebounceInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    sortComparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    openedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    _openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['opened',] }],
    _closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"], args: ['closed',] }],
    selectionChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSelectBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }], function () { return [{ type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["ErrorStateMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MAT_FORM_FIELD"]]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_SELECT_SCROLL_STRATEGY]
            }] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["LiveAnnouncer"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [MAT_SELECT_CONFIG]
            }] }]; }, { ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-label']
        }], openedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], _openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['opened']
        }], _closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
            args: ['closed']
        }], selectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], disableOptionCentering: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], typeaheadDebounceInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['trigger']
        }], panel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ['panel']
        }], overlayDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"]]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
            args: ['aria-labelledby']
        }], errorStateMatcher: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], sortComparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();
class MatSelect extends _MatSelectBase {
    constructor() {
        super(...arguments);
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** The cached font-size of the trigger element. */
        this._triggerFontSize = 0;
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
    }
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    _calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionOffsetFromScrollTop = itemHeight * selectedIndex;
        const halfOptionHeight = itemHeight / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        const optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return Math.min(Math.max(0, optimalScrollPosition), maxScroll);
    }
    ngOnInit() {
        super.ngOnInit();
        this._viewportRuler.change().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroy)).subscribe(() => {
            if (this.panelOpen) {
                this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
                this._changeDetectorRef.markForCheck();
            }
        });
    }
    open() {
        if (super._canOpen()) {
            super.open();
            this._triggerRect = this.trigger.nativeElement.getBoundingClientRect();
            // Note: The computed font-size will be a string pixel value (e.g. "16px").
            // `parseInt` ignores the trailing 'px' and converts this to a number.
            this._triggerFontSize =
                parseInt(getComputedStyle(this.trigger.nativeElement).fontSize || '0');
            this._calculateOverlayPosition();
            // Set the font size on the panel element once it exists.
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1)).subscribe(() => {
                if (this._triggerFontSize && this.overlayDir.overlayRef &&
                    this.overlayDir.overlayRef.overlayElement) {
                    this.overlayDir.overlayRef.overlayElement.style.fontSize = `${this._triggerFontSize}px`;
                }
            });
        }
    }
    /** Scrolls the active option into view. */
    _scrollOptionIntoView(index) {
        const labelCount = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(index, this.options, this.optionGroups);
        const itemHeight = this._getItemHeight();
        this.panel.nativeElement.scrollTop = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_getOptionScrollPosition"])((index + labelCount) * itemHeight, itemHeight, this.panel.nativeElement.scrollTop, SELECT_PANEL_MAX_HEIGHT);
    }
    _positioningSettled() {
        this._calculateOverlayOffsetX();
        this.panel.nativeElement.scrollTop = this._scrollTop;
    }
    _panelDoneAnimating(isOpen) {
        if (this.panelOpen) {
            this._scrollTop = 0;
        }
        else {
            this.overlayDir.offsetX = 0;
            this._changeDetectorRef.markForCheck();
        }
        super._panelDoneAnimating(isOpen);
    }
    _getChangeEvent(value) {
        return new MatSelectChange(this, value);
    }
    /**
     * Sets the x-offset of the overlay panel in relation to the trigger's top start corner.
     * This must be adjusted to align the selected option text over the trigger text when
     * the panel opens. Will change based on LTR or RTL text direction. Note that the offset
     * can't be calculated until the panel has been attached, because we need to know the
     * content width in order to constrain the panel within the viewport.
     */
    _calculateOverlayOffsetX() {
        const overlayRect = this.overlayDir.overlayRef.overlayElement.getBoundingClientRect();
        const viewportSize = this._viewportRuler.getViewportSize();
        const isRtl = this._isRtl();
        const paddingWidth = this.multiple ? SELECT_MULTIPLE_PANEL_PADDING_X + SELECT_PANEL_PADDING_X :
            SELECT_PANEL_PADDING_X * 2;
        let offsetX;
        // Adjust the offset, depending on the option padding.
        if (this.multiple) {
            offsetX = SELECT_MULTIPLE_PANEL_PADDING_X;
        }
        else if (this.disableOptionCentering) {
            offsetX = SELECT_PANEL_PADDING_X;
        }
        else {
            let selected = this._selectionModel.selected[0] || this.options.first;
            offsetX = selected && selected.group ? SELECT_PANEL_INDENT_PADDING_X : SELECT_PANEL_PADDING_X;
        }
        // Invert the offset in LTR.
        if (!isRtl) {
            offsetX *= -1;
        }
        // Determine how much the select overflows on each side.
        const leftOverflow = 0 - (overlayRect.left + offsetX - (isRtl ? paddingWidth : 0));
        const rightOverflow = overlayRect.right + offsetX - viewportSize.width
            + (isRtl ? 0 : paddingWidth);
        // If the element overflows on either side, reduce the offset to allow it to fit.
        if (leftOverflow > 0) {
            offsetX += leftOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        else if (rightOverflow > 0) {
            offsetX -= rightOverflow + SELECT_PANEL_VIEWPORT_PADDING;
        }
        // Set the offset directly in order to avoid having to go through change detection and
        // potentially triggering "changed after it was checked" errors. Round the value to avoid
        // blurry content in some browsers.
        this.overlayDir.offsetX = Math.round(offsetX);
        this.overlayDir.overlayRef.updatePosition();
    }
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    _calculateOverlayOffsetY(selectedIndex, scrollBuffer, maxScroll) {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const maxOptionsDisplayed = Math.floor(SELECT_PANEL_MAX_HEIGHT / itemHeight);
        let optionOffsetFromPanelTop;
        // Disable offset if requested by user by returning 0 as value to offset
        if (this.disableOptionCentering) {
            return 0;
        }
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * itemHeight;
        }
        else if (this._scrollTop === maxScroll) {
            const firstDisplayedIndex = this._getItemCount() - maxOptionsDisplayed;
            const selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // The first item is partially out of the viewport. Therefore we need to calculate what
            // portion of it is shown in the viewport and account for it in our offset.
            let partialItemHeight = itemHeight - (this._getItemCount() * itemHeight - SELECT_PANEL_MAX_HEIGHT) % itemHeight;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop = selectedDisplayIndex * itemHeight + partialItemHeight;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - itemHeight / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height difference,
        // multiplied by -1 to ensure that the overlay moves in the correct direction up the page.
        // The value is rounded to prevent some browsers from blurring the content.
        return Math.round(optionOffsetFromPanelTop * -1 - optionHeightAdjustment);
    }
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    _checkOverlayWithinViewport(maxScroll) {
        const itemHeight = this._getItemHeight();
        const viewportSize = this._viewportRuler.getViewportSize();
        const topSpaceAvailable = this._triggerRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        const bottomSpaceAvailable = viewportSize.height - this._triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        const panelHeightTop = Math.abs(this._offsetY);
        const totalPanelHeight = Math.min(this._getItemCount() * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const panelHeightBottom = totalPanelHeight - panelHeightTop - this._triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    }
    /** Adjusts the overlay panel up to fit in the viewport. */
    _adjustPanelUp(panelHeightBottom, bottomSpaceAvailable) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceBelowViewport = Math.round(panelHeightBottom - bottomSpaceAvailable);
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = `50% bottom 0px`;
        }
    }
    /** Adjusts the overlay panel down to fit in the viewport. */
    _adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll) {
        // Browsers ignore fractional scroll offsets, so we need to round.
        const distanceAboveViewport = Math.round(panelHeightTop - topSpaceAvailable);
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = `50% top 0px`;
            return;
        }
    }
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    _calculateOverlayPosition() {
        const itemHeight = this._getItemHeight();
        const items = this._getItemCount();
        const panelHeight = Math.min(items * itemHeight, SELECT_PANEL_MAX_HEIGHT);
        const scrollContainerHeight = items * itemHeight;
        // The farthest the panel can be scrolled before it hits the bottom
        const maxScroll = scrollContainerHeight - panelHeight;
        // If no value is selected we open the popup to the first item.
        let selectedOptionOffset;
        if (this.empty) {
            selectedOptionOffset = 0;
        }
        else {
            selectedOptionOffset =
                Math.max(this.options.toArray().indexOf(this._selectionModel.selected[0]), 0);
        }
        selectedOptionOffset += Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["_countGroupLabelsBeforeOption"])(selectedOptionOffset, this.options, this.optionGroups);
        // We must maintain a scroll buffer so the selected option will be scrolled to the
        // center of the overlay panel rather than the top.
        const scrollBuffer = panelHeight / 2;
        this._scrollTop = this._calculateOverlayScroll(selectedOptionOffset, scrollBuffer, maxScroll);
        this._offsetY = this._calculateOverlayOffsetY(selectedOptionOffset, scrollBuffer, maxScroll);
        this._checkOverlayWithinViewport(maxScroll);
    }
    /** Sets the transform origin point based on the selected option. */
    _getOriginBasedOnOption() {
        const itemHeight = this._getItemHeight();
        const optionHeightAdjustment = (itemHeight - this._triggerRect.height) / 2;
        const originY = Math.abs(this._offsetY) - optionHeightAdjustment + itemHeight / 2;
        return `50% ${originY}px 0px`;
    }
    /** Calculates the height of the select's options. */
    _getItemHeight() {
        return this._triggerFontSize * SELECT_ITEM_HEIGHT_EM;
    }
    /** Calculates the amount of items in the select. This includes options and group labels. */
    _getItemCount() {
        return this.options.length + this.optionGroups.length;
    }
}
MatSelect.ɵfac = function MatSelect_Factory(t) { return ɵMatSelect_BaseFactory(t || MatSelect); };
MatSelect.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MatSelect, selectors: [["mat-select"]], contentQueries: function MatSelect_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, MAT_SELECT_TRIGGER, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.customTrigger = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.options = _t);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.optionGroups = _t);
    } }, hostAttrs: ["role", "combobox", "aria-autocomplete", "none", "aria-haspopup", "true", 1, "mat-select"], hostVars: 20, hostBindings: function MatSelect_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function MatSelect_keydown_HostBindingHandler($event) { return ctx._handleKeydown($event); })("focus", function MatSelect_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSelect_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx.id)("tabindex", ctx.tabIndex)("aria-controls", ctx.panelOpen ? ctx.id + "-panel" : null)("aria-expanded", ctx.panelOpen)("aria-label", ctx.ariaLabel || null)("aria-required", ctx.required.toString())("aria-disabled", ctx.disabled.toString())("aria-invalid", ctx.errorState)("aria-describedby", ctx._ariaDescribedby || null)("aria-activedescendant", ctx._getAriaActiveDescendant());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-select-disabled", ctx.disabled)("mat-select-invalid", ctx.errorState)("mat-select-required", ctx.required)("mat-select-empty", ctx.empty)("mat-select-multiple", ctx.multiple);
    } }, inputs: { disabled: "disabled", disableRipple: "disableRipple", tabIndex: "tabIndex" }, exportAs: ["matSelect"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], useExisting: MatSelect },
            { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c3, decls: 9, vars: 12, consts: [["cdk-overlay-origin", "", 1, "mat-select-trigger", 3, "click"], ["origin", "cdkOverlayOrigin", "trigger", ""], [1, "mat-select-value", 3, "ngSwitch"], ["class", "mat-select-placeholder mat-select-min-line", 4, "ngSwitchCase"], ["class", "mat-select-value-text", 3, "ngSwitch", 4, "ngSwitchCase"], [1, "mat-select-arrow-wrapper"], [1, "mat-select-arrow"], ["cdk-connected-overlay", "", "cdkConnectedOverlayLockPosition", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "cdk-overlay-transparent-backdrop", 3, "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayPositions", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayOffsetY", "backdropClick", "attach", "detach"], [1, "mat-select-placeholder", "mat-select-min-line"], [1, "mat-select-value-text", 3, "ngSwitch"], ["class", "mat-select-min-line", 4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "mat-select-min-line"], [1, "mat-select-panel-wrap"], ["role", "listbox", "tabindex", "-1", 3, "ngClass", "keydown"], ["panel", ""]], template: function MatSelect_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"](_c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MatSelect_Template_div_click_0_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, MatSelect_span_4_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MatSelect_span_5_Template, 3, 2, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MatSelect_ng_template_8_Template, 4, 14, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function MatSelect_Template_ng_template_backdropClick_8_listener() { return ctx.close(); })("attach", function MatSelect_Template_ng_template_attach_8_listener() { return ctx._onAttached(); })("detach", function MatSelect_Template_ng_template_detach_8_listener() { return ctx.close(); });
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-owns", ctx.panelOpen ? ctx.id + "-panel" : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.empty);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("id", ctx._valueId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayPanelClass", ctx._overlayPanelClass)("cdkConnectedOverlayScrollStrategy", ctx._scrollStrategy)("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.panelOpen)("cdkConnectedOverlayPositions", ctx._positions)("cdkConnectedOverlayMinWidth", ctx._triggerRect == null ? null : ctx._triggerRect.width)("cdkConnectedOverlayOffsetY", ctx._offsetY);
    } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkOverlayOrigin"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["CdkConnectedOverlay"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"], encapsulation: 2, data: { animation: [
            matSelectAnimations.transformPanelWrap,
            matSelectAnimations.transformPanel
        ] }, changeDetection: 0 });
MatSelect.propDecorators = {
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], { descendants: true },] }],
    optionGroups: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], { descendants: true },] }],
    customTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"], args: [MAT_SELECT_TRIGGER,] }]
};
const ɵMatSelect_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MatSelect);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelect, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'mat-select',
                exportAs: 'matSelect',
                template: "<!--\n Note that the select trigger element specifies `aria-owns` pointing to the listbox overlay.\n While aria-owns is not required for the ARIA 1.2 `role=\"combobox\"` interaction pattern,\n it fixes an issue with VoiceOver when the select appears inside of an `aria-model=\"true\"`\n element (e.g. a dialog). Without this `aria-owns`, the `aria-modal` on a dialog prevents\n VoiceOver from \"seeing\" the select's listbox overlay for aria-activedescendant.\n Using `aria-owns` re-parents the select overlay so that it works again.\n See https://github.com/angular/components/issues/20694\n-->\n<div cdk-overlay-origin\n     [attr.aria-owns]=\"panelOpen ? id + '-panel' : null\"\n     class=\"mat-select-trigger\"\n     (click)=\"toggle()\"\n     #origin=\"cdkOverlayOrigin\"\n     #trigger>\n  <div class=\"mat-select-value\" [ngSwitch]=\"empty\" [attr.id]=\"_valueId\">\n    <span class=\"mat-select-placeholder mat-select-min-line\" *ngSwitchCase=\"true\">{{placeholder}}</span>\n    <span class=\"mat-select-value-text\" *ngSwitchCase=\"false\" [ngSwitch]=\"!!customTrigger\">\n      <span class=\"mat-select-min-line\" *ngSwitchDefault>{{triggerValue}}</span>\n      <ng-content select=\"mat-select-trigger\" *ngSwitchCase=\"true\"></ng-content>\n    </span>\n  </div>\n\n  <div class=\"mat-select-arrow-wrapper\"><div class=\"mat-select-arrow\"></div></div>\n</div>\n\n<ng-template\n  cdk-connected-overlay\n  cdkConnectedOverlayLockPosition\n  cdkConnectedOverlayHasBackdrop\n  cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\"\n  [cdkConnectedOverlayPanelClass]=\"_overlayPanelClass\"\n  [cdkConnectedOverlayScrollStrategy]=\"_scrollStrategy\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"panelOpen\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayMinWidth]=\"_triggerRect?.width!\"\n  [cdkConnectedOverlayOffsetY]=\"_offsetY\"\n  (backdropClick)=\"close()\"\n  (attach)=\"_onAttached()\"\n  (detach)=\"close()\">\n  <div class=\"mat-select-panel-wrap\" [@transformPanelWrap]>\n    <div\n      #panel\n      role=\"listbox\"\n      tabindex=\"-1\"\n      class=\"mat-select-panel {{ _getPanelTheme() }}\"\n      [attr.id]=\"id + '-panel'\"\n      [attr.aria-multiselectable]=\"multiple\"\n      [attr.aria-label]=\"ariaLabel || null\"\n      [attr.aria-labelledby]=\"_getPanelAriaLabelledby()\"\n      [ngClass]=\"panelClass\"\n      [@transformPanel]=\"multiple ? 'showing-multiple' : 'showing'\"\n      (@transformPanel.done)=\"_panelDoneAnimatingStream.next($event.toState)\"\n      [style.transformOrigin]=\"_transformOrigin\"\n      [style.font-size.px]=\"_triggerFontSize\"\n      (keydown)=\"_handleKeydown($event)\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>\n",
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                host: {
                    'role': 'combobox',
                    'aria-autocomplete': 'none',
                    // TODO(crisbeto): the value for aria-haspopup should be `listbox`, but currently it's difficult
                    // to sync into Google, because of an outdated automated a11y check which flags it as an invalid
                    // value. At some point we should try to switch it back to being `listbox`.
                    'aria-haspopup': 'true',
                    'class': 'mat-select',
                    '[attr.id]': 'id',
                    '[attr.tabindex]': 'tabIndex',
                    '[attr.aria-controls]': 'panelOpen ? id + "-panel" : null',
                    '[attr.aria-expanded]': 'panelOpen',
                    '[attr.aria-label]': 'ariaLabel || null',
                    '[attr.aria-required]': 'required.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                    '[attr.aria-invalid]': 'errorState',
                    '[attr.aria-describedby]': '_ariaDescribedby || null',
                    '[attr.aria-activedescendant]': '_getAriaActiveDescendant()',
                    '[class.mat-select-disabled]': 'disabled',
                    '[class.mat-select-invalid]': 'errorState',
                    '[class.mat-select-required]': 'required',
                    '[class.mat-select-empty]': 'empty',
                    '[class.mat-select-multiple]': 'multiple',
                    '(keydown)': '_handleKeydown($event)',
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()'
                },
                animations: [
                    matSelectAnimations.transformPanelWrap,
                    matSelectAnimations.transformPanel
                ],
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldControl"], useExisting: MatSelect },
                    { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTION_PARENT_COMPONENT"], useExisting: MatSelect }
                ],
                styles: [".mat-select{display:inline-block;width:100%;outline:none}.mat-select-trigger{display:inline-table;cursor:pointer;position:relative;box-sizing:border-box}.mat-select-disabled .mat-select-trigger{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-select-value{display:table-cell;max-width:0;width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-select-value-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-select-arrow-wrapper{display:table-cell;vertical-align:middle}.mat-form-field-appearance-fill .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-outline .mat-select-arrow-wrapper{transform:translateY(-25%)}.mat-form-field-appearance-standard.mat-form-field-has-label .mat-select:not(.mat-select-empty) .mat-select-arrow-wrapper{transform:translateY(-50%)}.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable.mat-form-field-appearance-standard .mat-select.mat-select-empty .mat-select-arrow-wrapper{transition:none}.mat-select-arrow{width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;margin:0 4px}.mat-select-panel-wrap{flex-basis:100%}.mat-select-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;padding-top:0;padding-bottom:0;max-height:256px;min-width:100%;border-radius:4px;outline:0}.cdk-high-contrast-active .mat-select-panel{outline:solid 1px}.mat-select-panel .mat-optgroup-label,.mat-select-panel .mat-option{font-size:inherit;line-height:3em;height:3em}.mat-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-form-field-flex{cursor:pointer}.mat-form-field-type-mat-select .mat-form-field-label{width:calc(100% - 18px)}.mat-select-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}._mat-animation-noopable .mat-select-placeholder{transition:none}.mat-form-field-hide-placeholder .mat-select-placeholder{color:transparent;-webkit-text-fill-color:transparent;transition:none;display:block}.mat-select-min-line:empty::before{content:\" \";white-space:pre;width:1px}\n"]
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"], { descendants: true }]
        }], optionGroups: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_OPTGROUP"], { descendants: true }]
        }], customTrigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
            args: [MAT_SELECT_TRIGGER]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSelectModule {
}
MatSelectModule.ɵfac = function MatSelectModule_Factory(t) { return new (t || MatSelectModule)(); };
MatSelectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MatSelectModule });
MatSelectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MatSelectModule, { declarations: function () { return [MatSelect, MatSelectTrigger]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], MatSelect, MatSelectTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MatSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"],
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["CdkScrollableModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    MatSelect,
                    MatSelectTrigger,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"]
                ],
                declarations: [MatSelect, MatSelectTrigger],
                providers: [MAT_SELECT_SCROLL_STRATEGY_PROVIDER]
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
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=select.js.map

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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




















const _c0 = ["dialog"];
function FloorPlanDetailsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_25_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const unit_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.removeUnitFromFP(unit_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r6.name);
} }
const _c1 = function () { return {}; };
function FloorPlanDetailsComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_33_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const moodboard_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r10.removeMoodboardFromFP(moodboard_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_33_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const moodboard_r9 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.onClickMDorProduct(moodboard_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", moodboard_r9 == null ? null : moodboard_r9.is_moodboard_images == null ? null : moodboard_r9.is_moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](moodboard_r9 == null ? null : moodboard_r9.moodboard_name);
} }
function FloorPlanDetailsComponent_div_37_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r15.name);
} }
function FloorPlanDetailsComponent_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "mat-divider", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FloorPlanDetailsComponent_div_37_div_7_Template, 5, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const md_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", md_r13 == null ? null : md_r13.moodboard_images == null ? null : md_r13.moodboard_images.small, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](md_r13.moodboard_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", md_r13 == null ? null : md_r13.unit_ids);
} }
const _c2 = function (a0) { return { selected: a0 }; };
function FloorPlanDetailsComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_div_43_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const unit_r16 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.getFPSummary(unit_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Unit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r16 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](2, _c2, ctx_r3.unitId == unit_r16.sgid));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](unit_r16.name);
} }
function FloorPlanDetailsComponent_ng_template_57_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "ADD NUMBER OF UNITS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " No. of units:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FloorPlanDetailsComponent_ng_template_57_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r19.noOfUnits = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_ng_template_57_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r21.addUnitsToFp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " ADD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r5.noOfUnits);
} }
class FloorPlanDetailsComponent {
    constructor(_fpSevice, _route, _location, _toaster, _matDialog, _dialog) {
        this._fpSevice = _fpSevice;
        this._route = _route;
        this._location = _location;
        this._toaster = _toaster;
        this._matDialog = _matDialog;
        this._dialog = _dialog;
        this.dialog = {};
        this.quoteId = '';
        this.fpId = '';
        this.unitId = '';
        this.unitName = '';
        this.noOfUnits = '';
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
        this.frameworkComponents = {
            ImageRendererComponent: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ImageRendererComponent"],
            TotalCellRendererComponent: _common_components_total_cell_renderer_total_cell_renderer_component__WEBPACK_IMPORTED_MODULE_4__["TotalCellRendererComponent"],
            ItemTypeCellRenderer: _common_components_item_type_item_type_component__WEBPACK_IMPORTED_MODULE_3__["ItemTypeComponent"],
            CounterCellRenderer: projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["CounterComponent"],
            DeleteItemComponent: _delete_item_delete_item_component__WEBPACK_IMPORTED_MODULE_1__["DeleteItemComponent"],
        };
        this.columnDefs = [
            { field: 'sub_total', headerName: 'SUB TOTAL (Monthly Rent)' },
            { field: 'delivery_fee', headerName: 'DELIVERY FEE' },
            { field: 'tax_amount', headerName: 'TAXES' },
            { field: 'net_total', headerName: 'TOTAL AMOUNT' },
            {
                field: 'pickup_fee',
                headerName: 'PICKUP FEE (Charged at the end of the lease)',
            },
        ];
        this.gridOptions = {
            onGridReady: (api) => {
                this.onGridReady(api);
            },
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
            onGridReady: (api) => {
                this.fpGridApi = api;
                this.onGridReady(api);
            },
        };
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.quoteId = params.id;
            this.fpId = params.fpId;
            this.getFloorPlanDetails();
            this.getMoodBoards();
            this.getFloorPlanUnits();
            this.getMoodboardWithUnits();
        });
    }
    refresh() {
        this.getFloorPlanDetails();
        this.getMoodBoards();
        this.getFloorPlanUnits();
        this.getMoodboardWithUnits();
    }
    back() {
        this._location.back();
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
        this.unitId = unit === null || unit === void 0 ? void 0 : unit.sgid;
        this.unitName = unit === null || unit === void 0 ? void 0 : unit.name;
        if (!this.unitId) {
            return;
        }
        this._fpSevice
            .getFPSummary(this.quoteId, this.fpId, this.unitId)
            .subscribe((resp) => {
            var _a, _b;
            this.fpRowData = resp.result.map((data) => {
                data.isDeleteOption = true;
                return data;
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
FloorPlanDetailsComponent.ɵfac = function FloorPlanDetailsComponent_Factory(t) { return new (t || FloorPlanDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_floor_plan_details_service__WEBPACK_IMPORTED_MODULE_6__["FloorPlanDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["DialogService"])); };
FloorPlanDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FloorPlanDetailsComponent, selectors: [["lib-floor-plan-details"]], viewQuery: function FloorPlanDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.dialog = _t.first);
    } }, decls: 59, vars: 20, consts: [["fxLayout", "column", "fxLayoutGap", "1.5rem", 1, "fp"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp-col"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem"], [1, "back"], [1, "material-icons", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "2rem"], [1, "h2"], ["mat-flat-button", "", 1, "round", "filter-button"], ["fxLayout", "row", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxLayout", "column", 1, "fp__container--unit-add", "g-box-shadow"], ["mat-icon-button", "", 3, "click"], [1, "material-icons"], ["fxLayout", "column", "class", "fp__container--unit g-box-shadow", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp-col", "odd"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxFlex", "10", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "fp__container--item", 3, "click"], ["inline", "true", 1, "icon"], ["fxFlex", "10", "class", "fp__container--item", "fxLayout", "column", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "fp__container", "fxLayout", "row", "fxLayoutGap", "1rem", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "fp__container"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem", 1, "fp__container_units"], ["fxLayout", "column", "class", "fp__container--unit g-box-shadow", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "2rem", 1, "fp__container--input"], [1, "h3"], ["appearance", "outline"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], [1, "ag-theme-alpine", "fp__container--grid", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "columnDefs", "pinnedBottomRowData", "frameworkComponents", "defaultColDef"], [1, "fp__container"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "131px", "width", "100%", 3, "gridOptions", "rowData", "columnDefs", "defaultColDef"], ["dialog", ""], ["fxLayout", "column", 1, "fp__container--unit", "g-box-shadow"], ["aria-hidden", "true", 1, "fa", "fa-times", "icon", 3, "click"], ["fxFlex", "10", "fxLayout", "column", 1, "fp__container--item", 3, "ngClass"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src", "click"], [1, "fp__container_moodboard"], ["height", "100px", "width", "100px", "alt", "", 3, "src"], ["vertical", "true"], ["fxLayout", "column", 1, "fp__container--unit", "g-box-shadow", 3, "ngClass", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "center center"], ["type", "text", "matInput", "", 3, "ngModel", "ngModelChange"], ["mat-flat-button", "", "color", "accent", 3, "click"]], template: function FloorPlanDetailsComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_Template_button_click_22_listener() { return ctx.openAddDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " add_circle_outline ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, FloorPlanDetailsComponent_div_25_Template, 6, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "ADD/MANAGE MOODBOARDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_Template_div_click_30_listener() { return ctx.openAddMoodboardDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "add_circle_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, FloorPlanDetailsComponent_div_33_Template, 5, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "MOODBOARD & UNITS");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, FloorPlanDetailsComponent_div_37_Template, 8, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "FLOOR PLAN SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, FloorPlanDetailsComponent_div_43_Template, 5, 4, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, "Unit Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-form-field", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FloorPlanDetailsComponent_Template_input_ngModelChange_48_listener($event) { return ctx.unitName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FloorPlanDetailsComponent_Template_button_click_49_listener() { return ctx.changeUnitName(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " Change Unit Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "ag-grid-angular", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "TOTAL FLOOR PLAN SUMMARY");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "ag-grid-angular", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, FloorPlanDetailsComponent_ng_template_57_Template, 12, 1, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Back to Quote/ ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorplan_mb_cnt, " Moodboards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.total_unit, " Units ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.fpDetails == null ? null : ctx.fpDetails.floorplan_type_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fpUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.moodboardList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.moodboardWithUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.fpUnitList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.unitName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gridOptions", ctx.fpGridOptions)("rowData", ctx.fpRowData)("columnDefs", ctx.fpColumnDefs)("pinnedBottomRowData", ctx.pinnedBottomRowData)("frameworkComponents", ctx.frameworkComponents)("defaultColDef", ctx.defaultColDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", ctx.rowData)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.defaultColDef);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_17__["AgGridAngular"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogActions"]], styles: [".fp-col[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n.fp__container--unit[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  align-items: center;\n  position: relative;\n}\n.fp__container--unit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.fp__container--unit-add[_ngcontent-%COMP%] {\n  padding: 0.6rem;\n  color: #9d9d9d;\n}\n.fp__container--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n.fp__container--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n  color: #9d9d9d;\n}\n.fp__container--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.selected[_ngcontent-%COMP%] {\n  background: #2c2c2c;\n  color: white;\n}\n.odd[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.back[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.filter-button[_ngcontent-%COMP%] {\n  background: #e9e9e9;\n}\n.icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxmbG9vci1wbGFuLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZOO0FBR007RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBRFI7QUFHTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRFI7QUFJSTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRFI7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUFEUjtBQU9BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBSkY7QUFPQTtFQUNFLG1CQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQUtBO0VBQ0UsZUFBQTtBQUZGIiwiZmlsZSI6ImZsb29yLXBsYW4tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcCB7XHJcbiAgJi1jb2wge1xyXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gIH1cclxuICAvLyAgIHBhZGRpbmc6IDFyZW07XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgICYtLXVuaXQge1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgJiBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgICAmLWFkZCB7XHJcbiAgICAgICAgcGFkZGluZzogMC42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLS1pdGVtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgY29sb3I6ICM5ZDlkOWQ7XHJcbiAgICAgIH1cclxuICAgICAgJiBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICB0b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMmMyYzJjO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm9kZCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxufVxyXG5cclxuLmJhY2sge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlsdGVyLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZDogI2U5ZTllOTtcclxufVxyXG4uaWNvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });


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
                case 'SUB TOTAL':
                    this.value = this._computationService.getSubTotal(params);
                    break;
                case 'TOTAL':
                    let subTotal = this._computationService.getSubTotal(params);
                    let deliveryFee = parseFloat(params.api.getValue('is_total', params.api.getPinnedBottomRow(1)));
                    let taxAmount = parseFloat(params.api.getValue('is_total', params.api.getPinnedBottomRow(2)));
                    this.value = this._computationService.getTotalAmount(subTotal, deliveryFee, taxAmount);
                    break;
                default:
                    this.value = params.value;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ "fXoL");























class QuoteModule {
}
QuoteModule.ɵfac = function QuoteModule_Factory(t) { return new (t || QuoteModule)(); };
QuoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: QuoteModule });
QuoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ imports: [[
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
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](QuoteModule, { declarations: [_components_quote_list_quote_list_component__WEBPACK_IMPORTED_MODULE_12__["QuoteListComponent"], _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_13__["QuoteComponent"], _components_quote_create_quote_create_component__WEBPACK_IMPORTED_MODULE_11__["QuoteCreateComponent"], _components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_17__["FloorPlanUnitComponent"], _components_quote_detail_quote_detail_component__WEBPACK_IMPORTED_MODULE_16__["QuoteDetailComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
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
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=default~moodboard-src-lib-moodboard-module~order-src-lib-order-module~quote-src-lib-quote-module~sho~6a476ef7.js.map