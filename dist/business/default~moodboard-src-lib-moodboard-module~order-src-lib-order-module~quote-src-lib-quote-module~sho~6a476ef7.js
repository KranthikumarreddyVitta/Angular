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
            this._router.navigate(['business/order', quoteId]);
        }
        else if (quoteId) {
            this._router.navigate(['business/quote', quoteId]);
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTab"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_12__["AgGridAngular"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".quotes-create[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2rem 0;\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  border-radius: 10px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n}\n.quotes-create[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n  font-size: 32px;\n}\n.quotes-create-text[_ngcontent-%COMP%] {\n  color: #464646;\n  font-weight: 600;\n  font-size: 17px;\n}\n.quotes-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.quotes-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Brandon Grotesque-bld\";\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.quotes-table[_ngcontent-%COMP%] {\n  margin: 0 4rem;\n  background: #f8f8f8;\n  border-radius: 7px;\n  margin-bottom: 4rem;\n}\n.select[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 7px;\n  padding: 5px;\n  width: 300px;\n  margin-left: 6rem;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-flex {\n  padding-left: 10px;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 1rem;\n}\n.select[_ngcontent-%COMP%]     .mat-form-field-underline {\n  display: none;\n}\n[_nghost-%COMP%]     .mat-tab-label-active {\n  font-weight: bold;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n  opacity: 1 !important;\n}\n[_nghost-%COMP%]     .mat-tab-label-content {\n  font-weight: 500;\n  font-size: 15px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #464646;\n}\n[_nghost-%COMP%]     .mat-tab-label:first-child {\n  margin-right: 70px;\n}\n[_nghost-%COMP%]     .mat-tab-labels {\n  padding: 10px;\n}\nselect[_ngcontent-%COMP%] {\n  width: 30% !important;\n  background: url('dropdownyellow.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 10px;\n  border: none;\n  background-color: #ffffff !important;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 8px;\n  margin-top: 2rem;\n  margin-bottom: 3rem;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: black;\n}\nselect[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:first-child {\n  color: #adadad;\n}\nselect.ng-valid[_ngcontent-%COMP%] {\n  color: black;\n}\nselect[ng-reflect-model=\"\"][_ngcontent-%COMP%] {\n  color: #adadad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHF1b3RlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUNJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FBQ047QUFBTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBRVI7QUFDSTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBTjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBRUk7RUFDRSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHRTtFQUNFLGNBQUE7RUFFQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFKRjtBQUtFO0VBQ0Usa0JBQUE7QUFISjtBQUtFO0VBQ0Usb0JBQUE7QUFISjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUEY7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUEY7QUFXRTtFQUNFLGtCQUFBO0FBUko7QUFZQTtFQUNFLGFBQUE7QUFURjtBQVlBO0VBQ0UscUJBQUE7RUFDQSw4REFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBVEY7QUFZQTtFQUNFLFlBQUE7QUFURjtBQVdBO0VBQ0UsY0FBQTtBQVJGO0FBV0E7RUFDRSxZQUFBO0FBUkY7QUFXQTtFQUNFLGNBQUE7QUFSRiIsImZpbGUiOiJxdW90ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlcyB7XHJcbiAgJi1jcmVhdGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgLy9sZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG4gICAgICBjb2xvcjogIzQ2NDY0NjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWZpbHRlciB7XHJcbiAgICBwYWRkaW5nOiA0cmVtIDA7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICBmb250LWZhbWlseTogXCJCcmFuZG9uIEdyb3Rlc3F1ZS1ibGRcIjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMi4wNjI1cmVtO1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtdGFibGUge1xyXG4gICAgbWFyZ2luOiAwIDRyZW07XHJcbiAgICAvLyBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIC8vYm94LXNoYWRvdzogMHB4IDBweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZyZW07XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAvLyAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XHJcbiAgLy8gICAgIHBhZGRpbmctYm90dG9tOiAwcmVtICFpbXBvcnRhbnQ7XHJcbiAgLy8gICAgIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgY29sb3I6ICM0NjQ2NDY7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtY29udGVudCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBjb2xvcjogIzQ2NDY0NjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZHJvcGRvd255ZWxsb3cuc3ZnXCIpIG5vLXJlcGVhdCA5NyUgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxufVxyXG5cclxuc2VsZWN0IG9wdGlvbiB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbnNlbGVjdCBvcHRpb246Zmlyc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcblxyXG5zZWxlY3QubmctdmFsaWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuc2VsZWN0W25nLXJlZmxlY3QtbW9kZWw9XCJcIl0ge1xyXG4gIGNvbG9yOiAjYWRhZGFkO1xyXG59XHJcbiJdfQ== */"] });


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
                        'business/order',
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"]], styles: [".moodboard[_ngcontent-%COMP%] {\n  padding: 0rem 2rem 2rem 2rem;\n}\n.moodboard[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 30px;\n  background: none;\n  border: none;\n  cursor: pointer;\n}\n.moodboard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 18px;\n  color: #000000;\n}\n.moodboard[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-weight: bold;\n  font-size: 17px;\n  color: #2c2c2c;\n}\n.moodboard[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 60% !important;\n  background: url('_-_-_-_-_-_-moodboard-src-lib-assets-images-dropdownyellow.svg') no-repeat 96% !important;\n  -webkit-appearance: none;\n  border: none;\n  background: #ffffff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhZGQtbW9vZGJvYXJkLXF1b3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFUjtBQUFJO0VBQ0kscUJBQUE7RUFDQSwwR0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUFFUiIsImZpbGUiOiJhZGQtbW9vZGJvYXJkLXF1b3RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vb2Rib2FyZCB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDJyZW0gMnJlbSAycmVtO1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBjb2xvcjogIzJjMmMyYztcclxuICAgIH1cclxuICAgIHNlbGVjdCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uLy4uL21vb2Rib2FyZC9zcmMvbGliL2Fzc2V0cy9pbWFnZXMvZHJvcGRvd255ZWxsb3cuc3ZnXCIpIG5vLXJlcGVhdCA5NiUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


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
            this._router.navigate(['business/quote/create']);
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
        this._router.navigate(['business/quote', quote.sgid], { state: { initDialog: true } });
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
        let route = this.page == 'ORDER' ? 'business/order' : 'business/quote';
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
                    'business/quote',
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
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__["MatDivider"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_20__["AgGridAngular"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_forms_forms_z"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".floor-plan-col[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n}\n.floor-plan__container--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  min-height: 100px;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n  color: #9d9d9d;\n}\n.floor-plan__container--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.floor-plan-summary[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding: 2rem;\n}\n.floor-plan-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.floor-plan-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.floor-plan-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.odd[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.mt-1[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.form-label-width[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.add-to-md-button[_ngcontent-%COMP%] {\n  margin-right: 12px !important;\n  padding-top: 2px;\n}\nselect.grey[_ngcontent-%COMP%] {\n  background: url('greyDropdown.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 12px;\n  border: none;\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZsb29yLXBsYW4tdW5pdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGtCQUFBO0FBQU47QUFHTTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQURSO0FBRVE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBVjtBQUVRO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUFWO0FBSUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QUFGUjtBQUdRO0VBQ0UsWUFBQTtBQURWO0FBRVU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFFVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBQVo7QUFHUTtFQUNFLGVBQUE7QUFEVjtBQU1BO0VBQ0UsbUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtBQUhGO0FBTUE7RUFDRSxnQkFBQTtBQUhGO0FBTUE7RUFDRSxZQUFBO0FBSEY7QUFNQTtFQUNFLDZCQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU1BO0VBQ0UsNERBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBSEYiLCJmaWxlIjoiZmxvb3ItcGxhbi11bml0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsb29yLXBsYW4ge1xyXG4gICAgJi1jb2wge1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19jb250YWluZXIge1xyXG4gICAgICAmLS1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hdC1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmIGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi1zdW1tYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgJl9faW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgICAmLS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmLS12YWx1ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfX2FjdGlvbnMge1xyXG4gICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4ub2RkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG59XHJcblxyXG4ucG9pbnRlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubXQtMSB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtd2lkdGgge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmFkZC10by1tZC1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuXHJcbnNlbGVjdC5ncmV5IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZ3JleURyb3Bkb3duLnN2Z1wiKSBuby1yZXBlYXQgOTclICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn0iXX0= */"] });


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
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ "fXoL");































class QuoteCommonModule {
}
QuoteCommonModule.ɵfac = function QuoteCommonModule_Factory(t) { return new (t || QuoteCommonModule)(); };
QuoteCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({ type: QuoteCommonModule });
QuoteCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({ imports: [[
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
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](QuoteCommonModule, { declarations: [_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__["QuoteHeaderComponent"],
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
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"]], exports: [_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_1__["QuoteHeaderComponent"],
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
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "FKr1");




















function QuoteCreateFormComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quote Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx_r1.quoteNumber);
} }
function QuoteCreateFormComponent_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_a_22_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.showDropdown = !ctx_r14.showDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "error-border": a0, "read-only": a1 }; };
function QuoteCreateFormComponent_mat_form_field_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", !ctx_r4._user.getUser().isInternalUser())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, (tmp_1_0 = ctx_r4.quoteFromGroup.get("companyName")) == null ? null : tmp_1_0.invalid, !ctx_r4._user.getUser().isInternalUser()));
} }
function QuoteCreateFormComponent_mat_form_field_25_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmp_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cmp_r17.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cmp_r17.company, " ");
} }
function QuoteCreateFormComponent_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteCreateFormComponent_mat_form_field_25_Template_mat_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.getProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteCreateFormComponent_mat_form_field_25_mat_option_2_Template, 2, 2, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.companyList);
} }
function QuoteCreateFormComponent_a_32_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_a_32_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.showPDropdown = !ctx_r20.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_a_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_mat_form_field_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteCreateFormComponent_mat_form_field_35_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", prj_r23.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", prj_r23.project, " ");
} }
function QuoteCreateFormComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function QuoteCreateFormComponent_mat_form_field_35_Template_mat_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.selectProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteCreateFormComponent_mat_form_field_35_mat_option_2_Template, 2, 2, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.projectList);
} }
function QuoteCreateFormComponent_mat_option_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", state_r26.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", state_r26.name, " ");
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
        this.startDate = null;
        this.endDate = null;
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
        this.endDate = new Date(stateObject === null || stateObject === void 0 ? void 0 : stateObject.endDate);
        this.startDate = new Date(stateObject === null || stateObject === void 0 ? void 0 : stateObject.startDate);
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
        this.quoteFromGroup.addControl('preferred_delivery_start_date', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.startDate));
        this.quoteFromGroup.addControl('preferred_delivery_end_date', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.endDate));
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
QuoteCreateFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QuoteCreateFormComponent, selectors: [["lib-quote-create-form"]], inputs: { quoteNumber: "quoteNumber", phone: "phone", customerName: "customerName", address: "address", email: "email", stateId: "stateId", companyName: "companyName", companyId: "companyId", city: "city", projectName: "projectName", projectId: "projectId", zipCode: "zipCode", startDate: "startDate", endDate: "endDate", submitButtonText: "submitButtonText", type: "type" }, outputs: { onCancel: "onCancel", onSubmit: "onSubmit" }, decls: 95, vars: 18, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-create__form"], ["fxLayout", "row", "fxFlex", "100", 2, "width", "100%"], ["fxFlex", "95", "fxLayout", "row", "fxLayoutAlign", "center center"], [1, "quote-create__form--title"], ["fxFlex", "5", "fxLayout", "row", "fxLayoutAlign", "row-reverse"], ["class", "quote-create__form--title", 3, "click", 4, "ngIf"], ["action", "", "fxLayout", "row wrap", "fxLayoutAlign", "space-between stretch", 1, "quote-create__form--elements", 3, "formGroup"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch", 4, "ngIf"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", " stretch"], [1, "label"], [1, "asterisk"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "Enter Customer Name"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px;", "class", "add", 3, "click", 4, "ngIf"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; ", "class", "add", 4, "ngIf"], ["style", "width: 100%", "appearance", "outline", 4, "ngIf"], ["fxFlex", "100", "fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; ", "class", "add", 3, "click", 4, "ngIf"], ["style", "padding: 0px 10px 0px 9px; ", "class", "add", 4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "email", "placeholder", "Add on Email"], ["matInput", "", "type", "text", "placeholder", "Add a Phone Number", "formControlName", "contact_no"], ["matInput", "", "type", "text", "formControlName", "address", "placeholder", "Enter on Address"], ["formControlName", "state_id"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "formControlName", "city", "placeholder", "Enter a City", 3, "readonly"], ["matInput", "", "type", "text", "formControlName", "zipcode", "placeholder", "Add a ZipCode", 3, "readonly"], [3, "rangePicker"], ["matStartDate", "", "formControlName", "preferred_delivery_start_date", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "preferred_delivery_end_date", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "quote-create__actions"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mat-raised-button", "", 1, "btn", "btn-cancel", 3, "click"], [1, "quote-create__form--title", 3, "click"], ["src", "assets/quote/images/close-22.svg", "height", "22px", "width", "22px"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "stretch"], ["matInput", "", "type", "text", "formControlName", "quote_id", "placeholder", "Enter Quote Number", 3, "readonly"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", 3, "click"], ["src", "assets/quote/images/SVG-Icons-06.svg"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "type", "text", "formControlName", "companyName", "placeholder", "Add Company Name", 3, "readonly", "ngClass"], ["formControlName", "company_id", 3, "change"], [3, "value"], [1, "add", 2, "padding", "0px 10px 0px 9px"], ["matInput", "", "type", "text", "formControlName", "project_name", "placeholder", "Add Project Name"], ["formControlName", "project_id", 3, "change"]], template: function QuoteCreateFormComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteCreateFormComponent_div_8_Template, 7, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Customer Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QuoteCreateFormComponent_a_22_Template, 2, 0, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, QuoteCreateFormComponent_a_23_Template, 2, 0, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, QuoteCreateFormComponent_mat_form_field_24_Template, 2, 5, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, QuoteCreateFormComponent_mat_form_field_25_Template, 3, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, QuoteCreateFormComponent_a_32_Template, 2, 0, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, QuoteCreateFormComponent_a_33_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, QuoteCreateFormComponent_mat_form_field_34_Template, 2, 0, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, QuoteCreateFormComponent_mat_form_field_35_Template, 3, 1, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, QuoteCreateFormComponent_mat_option_64_Template, 2, 2, "mat-option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Delivery Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-date-range-input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "mat-datepicker-toggle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "mat-date-range-picker", null, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_Template_button_click_91_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteCreateFormComponent_Template_button_click_93_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " CANCEL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialogData.isDialog == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.quoteFromGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.quoteNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.type === "COPY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", ctx.type === "COPY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rangePicker", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.quoteFromGroup.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.submitButtonText, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__["MatDateRangePicker"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: [".quote-create__form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.quote-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n  margin-bottom: 1rem;\n}\n.quote-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.quote-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.quote-create__actions[_ngcontent-%COMP%] {\n  width: 40%;\n  margin-top: 2rem;\n}\n.quote-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1jcmVhdGUtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFTTtFQUFRLGFBQUE7RUFDUixtQkFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtBQURSO0FBR007RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUVRO0VBQ0UsYUFBQTtBQUFWO0FBSUk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFGTjtBQUdNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQU1FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUhKO0FBY0U7RUFDRSxTQUFBO0VBR0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBRUEsOEJBQUE7RUFDQTs7O0dBQUE7RUFJQSw4REFBQTtFQUNBO2lFQUFBO0VBRUEsMEJBQUE7RUFDQSw0QkFBQTtBQVpKO0FBZUU7RUFDRSxVQUFBO0FBWko7QUFlRTtFQUNFLHFCQUFBO0FBWko7QUFjRTtFQUNFLG1CQUFBO0FBWEo7QUFhRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFWSjtBQVlFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBVEo7QUFXRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVJKIiwiZmlsZSI6InF1b3RlLWNyZWF0ZS1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1b3RlLWNyZWF0ZSB7XHJcbiAgICAmX19mb3JtIHtcclxuICAgICAgJiBmb3JteyBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgICB9XHJcbiAgICAgICYtLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgJi0tZWxlbWVudHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbSA0cmVtIDJyZW07XHJcbiAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2FjdGlvbnMge1xyXG4gICAgICB3aWR0aDogNDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICAvLyBpbnB1dCxcclxuICAvLyBzZWxlY3Qge1xyXG4gIC8vICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvLyAgIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG4gIC8vICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIC8vICAgYm9yZGVyOiAxcHg7XHJcbiAgLy8gfVxyXG4gIHNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIFxyXG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcclxuICAgIC8vICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICByYWRpYWwtZ3JhZGllbnQoI2ZlYmYyZCA5MiUsIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgICAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9xdW90ZS9pbWFnZXMvU1ZHLUljb25zLTE0LnN2Z1wiKTtcclxuICAgIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDAuNWVtKSAwLjVlbTsqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuICAuYXN0ZXJpc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIC5yZWFkLW9ubHkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogI0Y2RTE1RjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICAuYnRuLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzJDMkMyQztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH0iXX0= */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-option", 59);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add a Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select a Moodboard to be added to this quote.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.selectedMoodboard = $event; })("selectionChange", function QuoteHeaderComponent_ng_template_0_Template_mat_select_selectionChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.selectionChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_ng_template_0_ng_container_12_Template, 3, 2, "ng-container", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, QuoteHeaderComponent_ng_template_0_mat_option_13_Template, 2, 0, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-dialog-actions", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 58);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
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
function QuoteHeaderComponent_button_70_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_70_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.OnEdit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { selected: a0 }; };
function QuoteHeaderComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_76_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const moodboard_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onClickMDorProduct(moodboard_r27); });
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
function QuoteHeaderComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_77_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const product_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onClickMDorProduct(product_r30); });
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
function QuoteHeaderComponent_div_78_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_78_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.openDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "add_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.addMDtoFloorPlan(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO FLOORPLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.addMDtoUnit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD TO UNIT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r46.removeMDfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r48.removeProductfromQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " REMOVE PRODUCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_79_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.goToMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " GO TO MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_79_div_11_Template(rf, ctx) { if (rf & 1) {
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
function QuoteHeaderComponent_div_79_div_12_Template(rf, ctx) { if (rf & 1) {
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
function QuoteHeaderComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_79_button_4_Template, 2, 0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, QuoteHeaderComponent_div_79_button_5_Template, 2, 0, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, QuoteHeaderComponent_div_79_button_6_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, QuoteHeaderComponent_div_79_button_7_Template, 2, 0, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, QuoteHeaderComponent_div_79_button_8_Template, 2, 0, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-divider", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, QuoteHeaderComponent_div_79_div_11_Template, 8, 4, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QuoteHeaderComponent_div_79_div_12_Template, 8, 4, "div", 77);
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
function QuoteHeaderComponent_span_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Floor Plans found. Please add Floor Plan.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_84_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_84_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59); const fp_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.removeFloorPlanFromQuote(fp_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Remove ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_84_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "file_copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_84_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_84_button_2_Template, 3, 0, "button", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QuoteHeaderComponent_div_84_button_3_Template, 3, 0, "button", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_84_button_4_Template, 3, 0, "button", 89);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_84_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const fp_r53 = ctx.$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.openFloorPlanPage(fp_r53); });
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
function QuoteHeaderComponent_button_86_Template(rf, ctx) { if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_86_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r63); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.openAddFloorPlanDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD FLOOR PLAN ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_button_87_Template(rf, ctx) { if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_87_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r65); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.removeFloorPlanFlag = !ctx_r64.removeFloorPlanFlag; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.removeFloorPlanFlag ? "CANCEL" : "REMOVE FLOOR PLAN", " ");
} }
function QuoteHeaderComponent_span_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No Floor Plans found. Please add Floor Plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_div_91_div_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function QuoteHeaderComponent_div_91_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_91_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const unit_r68 = ctx.$implicit; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r70.removeUnitFromFP(unit_r68); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_91_div_4_i_2_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_91_div_4_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r71); const unit_r68 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r72.openFloorPlanUnit(unit_r68); });
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
function QuoteHeaderComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, QuoteHeaderComponent_div_91_div_4_Template, 8, 2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fp_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fp_r66 == null ? null : fp_r66.floorname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fp_r66.unit_ids);
} }
function QuoteHeaderComponent_div_94_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 51);
} }
function QuoteHeaderComponent_div_94_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, QuoteHeaderComponent_div_94_i_2_Template, 1, 0, "i", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_div_94_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76); const unit_r73 = ctx.$implicit; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r75.openFloorPlanUnit(unit_r73); });
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
function QuoteHeaderComponent_button_96_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_96_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.openAddUnitDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ADD UNIT(S) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QuoteHeaderComponent_button_97_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_button_97_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r79.removeUnitFlag = !ctx_r79.removeUnitFlag; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.removeUnitFlag ? "CANCEL" : "REMOVE UNIT(S)", " ");
} }
function QuoteHeaderComponent_mat_checkbox_99_Template(rf, ctx) { if (rf & 1) {
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
                taxPercent: 1,
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
            startDate: this.quoteDetails.preferred_delivery_start_date,
            endDate: this.quoteDetails.preferred_delivery_end_date,
        };
    }
    OnCopy(evt) {
        this._router.navigate(['business/quote/copy'], { state: this.getQuoteObject() });
        this.onCopy.emit(evt);
    }
    OnEdit(evt) {
        this._router.navigate(['business/quote/edit'], { state: this.getQuoteObject() });
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
        this._router.navigateByUrl('business//moodboard/' + ((_b = (_a = this.selectedQuoteMD) === null || _a === void 0 ? void 0 : _a.unitmoodboards) === null || _b === void 0 ? void 0 : _b.id));
    }
    openFloorPlanUnit(unit) {
        const floorPlanID = unit.floorplan_id ? unit.floorplan_id : 'None';
        let route = 'business/quote';
        if (this.text == 'ORDER') {
            route = 'business/order';
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
        let route = 'business/quote';
        if (this.text == 'ORDER') {
            route = 'business/order';
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
    } }, inputs: { quoteId: "quoteId", text: "text", iconPath: "iconPath" }, outputs: { onCopy: "onCopy", onEdit: "onEdit" }, ngContentSelectors: _c2, decls: 119, vars: 41, consts: [["dialog", ""], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "quote-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "quote-details__icon"], [1, "img-quote"], ["alt", "", "srcset", "", 3, "src"], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "start", 1, "quote-details__info"], ["fxFlex", "66", 4, "ngIf"], ["fxFlex", "33"], [1, "label"], [1, "value"], ["fxFlex", "66"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "1rem", 1, "quote-details__copy"], ["mat-mini-fab", "", "color", "accent", "aria-label", "Example icon button with a filter list icon", 1, "box-none", 3, "click"], ["class", "box-none", "mat-mini-fab", "", "color", "accent", 3, "click", 4, "ngIf"], ["color", "accent", "mat-align-tabs", "start", 1, "tabs", 3, "selectedTabChange"], ["label", "Default Unit"], ["fxLayout", "column", 1, "tabs-item"], ["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "quote-moodboard"], ["fxLayout", "row wrap", "fxLayoutAlign", "start", "fxLayoutGap", "1rem", 1, "quote-moodboard__list"], ["fxFlex", "13", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "10", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "13", "class", "quote-moodboard__list--item", "fxLayoutAlign", "center center", "fxLayout", "column", 3, "click", 4, "ngIf"], ["fxFlex", "row", "class", "quote-moodboard--sec", 4, "ngIf"], ["label", "Floor Plans"], [1, "g-box-shadow", "tabs-item", "fp"], ["class", "fp__default-text", 4, "ngIf"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 1, "fp__container"], ["fxLayout", "column", "fxLayoutGap", "1rem", "class", "g-box-shadow fp__container--item", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutGap", "2rem"], ["class", "round", "mat-flat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["label", "Floor plan Units"], [1, "g-box-shadow", "tabs-item", "fpu"], ["class", "fpu__default-text", 4, "ngIf"], ["class", "fpu__container g-box-shadow", 4, "ngFor", "ngForOf"], [1, "fpu__container", "g-box-shadow", "pointer"], ["fxLayout", "row", "fxLayoutGap", "1rem"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow", 4, "ngFor", "ngForOf"], ["fxFlex", ""], ["disabled", "", "color", "accent", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "quote-summary"], [2, "margin", "0 1rem"], [1, "quote-summary__info--label"], ["fxLayout", "row", "fxLayoutAlign", "start start", "fxLayoutGap", "2rem", 1, "quote-summary__info"], [1, "quote-summary__info--value"], [1, "ag-theme-alpine", "quotes-table", 2, "height", "600px", "width", "100%", 3, "gridOptions", "rowData", "frameworkComponents", "pinnedBottomRowData", "defaultColDef", "columnDefs"], ["fxLayout", "row", "fxLayoutAlign", "center", "fxLayoutGap", "2rem", 1, "quote-summary__actions"], ["fxLayout", "column", "fxLayoutAlign", "center stretch", 1, "dialog"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [1, "h2", 2, "margin-bottom", "2rem"], ["mat-flat-button", "", "mat-dialog-close", ""], ["aria-hidden", "true", 1, "fa", "fa-times"], ["fxLayout", "column", "fxLayoutGap", "1rem"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], [4, "ngFor", "ngForOf"], ["value", "", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "disabled", "click"], [3, "value"], ["value", ""], ["mat-mini-fab", "", "color", "accent", 1, "box-none", 3, "click"], ["fxFlex", "13", "fxLayout", "column", 1, "quote-moodboard__list--item", "moodboard-list", 3, "ngClass", "click"], ["height", "110px", "width", "auto", "alt", "Moodboard", 3, "src"], ["fxFlex", "10", "fxLayout", "column", 1, "quote-moodboard__list--item", "moodboard-list", 3, "ngClass", "click"], ["fxFlex", "13", "fxLayoutAlign", "center center", "fxLayout", "column", 1, "quote-moodboard__list--item", 3, "click"], ["inline", "true", 1, "icon", 2, "margin", "40px"], ["fxFlex", "row", 1, "quote-moodboard--sec"], ["fxLayout", "column", "fxFlex", "20", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], [1, "h2"], ["class", "round", "style", "width: 88%; font-weight: bold", "mat-flat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "color", "accent", "style", "width: 88%; font-weight: bold", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "style", "width: 88%; font-weight: bold", "color", "primary", 3, "click", 4, "ngIf"], ["class", "round", "mat-flat-button", "", "color", "primary", "style", "width: 88%; font-weight: bold", 3, "click", 4, "ngIf"], ["vertical", "true", 2, "margin-right", "4rem"], ["fxFlex", "", "fxLayout", "row", "fxLayoutGap", "3rem", "fxLayoutAlign", "start", 1, "quote-", "sec"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngFor", "ngForOf"], ["fxFlex", "22", "class", "quote-moodboard__list--item moodboard-list", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "round", 2, "width", "88%", "font-weight", "bold", 3, "click"], ["mat-flat-button", "", "color", "primary", 1, "round", 2, "width", "88%", "font-weight", "bold", 3, "click"], ["fxFlex", "22", "fxLayout", "column", "fxLayoutGap", ".5rem", "fxLayoutAlign", "start", 1, "quote-moodboard__list--item", "moodboard-list"], [2, "width", "65px", 3, "status"], ["fxFlex", "", "fxLayoutAlign", "center center", "fxLayout", "column"], ["fxFlex", "", "height", "100px", "width", "90px", "alt", "Moodboard", 3, "src"], [1, "h3"], [1, "fp__default-text"], ["fxLayout", "column", "fxLayoutGap", "1rem", 1, "g-box-shadow", "fp__container--item"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], ["class", "round", "mat-flat-button", "", 3, "click", 4, "ngIf"], ["class", "icon-button", "mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 4, "ngIf"], ["fxLayout", "column", 2, "align-items", "center"], ["mat-flat-button", "", "color", "accent", 1, "round", 3, "click"], ["mat-flat-button", "", 1, "round", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-times-circle-o"], ["mat-icon-button", "", "disabled", "", "aria-label", "Example icon button with a filter list icon", 1, "icon-button"], ["mat-flat-button", "", "color", "primary", 1, "round", 3, "click"], [1, "fpu__default-text"], [1, "fpu__container", "g-box-shadow"], ["fxLayout", "column", "class", "fpu__container--unit g-box-shadow pointer", 4, "ngFor", "ngForOf"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow", "pointer"], ["mat-flat-button", "", 3, "click"], ["class", "fa fa-times", "aria-hidden", "true", 4, "ngIf"], [3, "click"], ["fxLayout", "column", 1, "fpu__container--unit", "g-box-shadow"], ["disabled", "", "mat-flat-button", ""], ["disabled", "", "color", "accent"]], template: function QuoteHeaderComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Delivery Timeline: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QuoteHeaderComponent_Template_button_click_67_listener($event) { return ctx.OnCopy($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "file_copy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, QuoteHeaderComponent_button_70_Template, 3, 0, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-tab-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedTabChange", function QuoteHeaderComponent_Template_mat_tab_group_selectedTabChange_71_listener($event) { return ctx.onTabChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, QuoteHeaderComponent_div_76_Template, 6, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, QuoteHeaderComponent_div_77_Template, 4, 5, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, QuoteHeaderComponent_div_78_Template, 5, 0, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, QuoteHeaderComponent_div_79_Template, 13, 8, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-tab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, QuoteHeaderComponent_span_82_Template, 2, 0, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, QuoteHeaderComponent_div_84_Template, 16, 7, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, QuoteHeaderComponent_button_86_Template, 2, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, QuoteHeaderComponent_button_87_Template, 2, 1, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-tab", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, QuoteHeaderComponent_span_90_Template, 2, 0, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, QuoteHeaderComponent_div_91_Template, 5, 2, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, QuoteHeaderComponent_div_94_Template, 8, 2, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, QuoteHeaderComponent_button_96_Template, 2, 0, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, QuoteHeaderComponent_button_97_Template, 2, 1, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, QuoteHeaderComponent_mat_checkbox_99_Template, 2, 0, "mat-checkbox", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Customer City :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Zipcode :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "ag-grid-angular", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](116, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](118, 0, ["[select]", "actions"]);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.quoteDetails.preferred_delivery_start_date, " / ", ctx.quoteDetails.preferred_delivery_end_date, "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](116, 39, ctx.rowData))("frameworkComponents", ctx.frameworkComponents)("pinnedBottomRowData", ctx.pinnedBottomRowData)("defaultColDef", ctx.defaultColDef)("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTab"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_21__["AgGridAngular"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogActions"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultClassDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDivider"], _item_type_item_type_component__WEBPACK_IMPORTED_MODULE_6__["ItemTypeComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckbox"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"]], styles: [".quote-details[_ngcontent-%COMP%] {\n  height: 250px;\n}\n.quote-details__icon[_ngcontent-%COMP%] {\n  background: #fDD601;\n}\n.quote-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.quote-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.quote-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 75px;\n  width: auto;\n}\n.quote-details__copy[_ngcontent-%COMP%], .quote-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.quote-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.quote-moodboard[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n  background: #f8f8f8;\n}\n.quote-moodboard__heading[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-moodboard__list[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 5px;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0.5rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  margin-bottom: 1rem;\n  cursor: pointer;\n  background: #ffffff;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.5rem;\n  color: #9d9d9d;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  height: auto;\n}\n.quote-moodboard__list--item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0;\n  padding: 0.3rem;\n}\n.quote-moodboard--sec[_ngcontent-%COMP%] {\n  padding: 1rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: #ffffff;\n}\n.quote-summary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  padding: 2rem;\n}\n.quote-summary__info[_ngcontent-%COMP%] {\n  margin: 1rem;\n}\n.quote-summary__info--label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__info--value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 23px;\n  letter-spacing: 0.08em;\n}\n.quote-summary__actions[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.tabs-item[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 2rem 5rem;\n}\n.icon[_ngcontent-%COMP%] {\n  color: #9d9d9d;\n}\n.fp[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n  background: #ffffff;\n}\n.fp__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fp__container[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.fp__container--item[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 1rem 2.5rem;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n.fpu[_ngcontent-%COMP%] {\n  margin: 2rem 5rem;\n  background: #ffffff;\n}\n.fpu__default-text[_ngcontent-%COMP%] {\n  color: #b0aaaa;\n}\n.fpu__container[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  padding: 1rem;\n  margin: 3rem 0;\n}\n.fpu__container--unit[_ngcontent-%COMP%] {\n  text-align: center;\n  align-items: center;\n  position: relative;\n  background: #ffffff;\n}\n.fpu__container--unit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5px;\n  top: 2px;\n}\n.icon-button[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 50px;\n}\n.selected[_ngcontent-%COMP%] {\n  border: 5px solid #fDD601;\n}\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.box-none[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;\n  background-color: #ffffff;\n}\n.hide-box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n  .mat-tab-header {\n  margin: auto 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxxdW90ZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FBQUo7QUFDSTtFQUNFLG1CQUFBO0FBQ047QUFBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBRVI7QUFBTTtFQUNFLG1CQUFBO0VBQ0EsZ0pBQUE7RUFFQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDUjtBQUFRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFFVjtBQUVJO0VBRUUsbUJBQUE7RUFDQSxvQkFBQTtBQUROO0FBR0k7RUFDRSx5QkFBQTtBQUROO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFHSTtFQUNFLFlBQUE7QUFETjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRE47QUFFTTtFQVdFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVZSO0FBSFE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFLVjtBQUlRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUFGVjtBQUlRO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQUZWO0FBTUk7RUFDRSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSk47QUFPRTtFQUVFLG1CQUFBO0VBQ0EsYUFBQTtBQU5KO0FBT0k7RUFDRSxZQUFBO0FBTE47QUFNTTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU1NO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBUEY7QUFVQTtFQUNFLGNBQUE7QUFQRjtBQVNBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQU5GO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFPRTtFQUNFLGVBQUE7QUFMSjtBQU1JO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQVFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUxGO0FBTUU7RUFDRSxjQUFBO0FBSko7QUFNRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFKSjtBQUtJO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQUtNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUhSO0FBUUE7RUFDRSwyQ0FBQTtFQUNBLG1CQUFBO0FBTEY7QUFPQTtFQUNFLHlCQUFBO0FBSkY7QUFPQTtFQUNFLGVBQUE7QUFKRjtBQU9BO0VBQ0Usc0RBQUE7RUFDQSx5QkFBQTtBQUpGO0FBT0E7RUFDRSwyQkFBQTtBQUpGO0FBTUE7RUFDRSxnQkFBQTtBQUhGIiwiZmlsZSI6InF1b3RlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdW90ZSB7XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAmX19pY29uIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZERDYwMTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1xdW90ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLCA0cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLFxyXG4gICAgICAgICAgMHB4IC00cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIC00cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDkycHg7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvcHksXHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1tb29kYm9hcmQge1xyXG4gICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICZfX2hlYWRpbmcge1xyXG4gICAgICBtYXJnaW46IDFyZW07XHJcbiAgICB9XHJcbiAgICAmX19saXN0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICYtLWl0ZW0ge1xyXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xyXG4gICAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZlYmYyZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIGNvbG9yOiAjOWQ5ZDlkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYtLXNlYyB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgJi1zdW1tYXJ5IHtcclxuLy8gICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgJl9faW5mbyB7XHJcbiAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgJi0tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xyXG4gICAgICB9XHJcbiAgICAgICYtLXZhbHVlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDhlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYWN0aW9ucyB7XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50YWJzLWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMnJlbSA1cmVtO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgY29sb3I6ICM5ZDlkOWQ7XHJcbn1cclxuLmZwIHtcclxuICBtYXJnaW46IDJyZW0gNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICZfX2RlZmF1bHQtdGV4dCB7XHJcbiAgICBjb2xvcjogI2IwYWFhYTtcclxuICB9XHJcbiAgJl9fY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICYtLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZwdSB7XHJcbiAgbWFyZ2luOiAycmVtIDVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAmX19kZWZhdWx0LXRleHQge1xyXG4gICAgY29sb3I6ICNiMGFhYWE7XHJcbiAgfVxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIG1hcmdpbjogM3JlbSAwO1xyXG4gICAgJi0tdW5pdCB7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAmIGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgI2ZERDYwMTtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJveC1ub25lIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmhpZGUtYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXJ7XHJcbiAgbWFyZ2luOiBhdXRvIDEwJTtcclxufSJdfQ== */"] });


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
        var _a, _b;
        let objO = this.getParams(obj);
        let a = (_a = objO === null || objO === void 0 ? void 0 : objO.preferred_delivery_start_date) === null || _a === void 0 ? void 0 : _a.toISOString().split('T')[0];
        let b = (_b = objO === null || objO === void 0 ? void 0 : objO.preferred_delivery_end_date) === null || _b === void 0 ? void 0 : _b.toISOString().split('T')[0];
        let url = 'save/quote';
        // if (type === 'EDIT') {
        //   url = 'save/quote';
        // }
        if (type === 'COPY') {
            url = 'clone/quote';
        }
        return this._http.sendPOSTRequest(this._env.getEndPoint() + url, JSON.stringify(Object.assign(Object.assign({}, objO), { preferred_delivery_start_date: a, preferred_delivery_end_date: b })));
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

/***/ "iadO":
/*!****************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js ***!
  \****************************************************************************/
/*! exports provided: DateRange, DefaultMatCalendarRangeStrategy, MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATE_RANGE_SELECTION_STRATEGY, MAT_RANGE_DATE_SELECTION_MODEL_FACTORY, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY, MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDateRangeInput, MatDateRangePicker, MatDateSelectionModel, MatDatepicker, MatDatepickerActions, MatDatepickerApply, MatDatepickerCancel, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatEndDate, MatMonthView, MatMultiYearView, MatRangeDateSelectionModel, MatSingleDateSelectionModel, MatStartDate, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow, ɵangular_material_src_material_datepicker_datepicker_a, ɵangular_material_src_material_datepicker_datepicker_b, ɵangular_material_src_material_datepicker_datepicker_c, ɵangular_material_src_material_datepicker_datepicker_d, ɵangular_material_src_material_datepicker_datepicker_e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateRange", function() { return DateRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultMatCalendarRangeStrategy", function() { return DefaultMatCalendarRangeStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function() { return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function() { return MAT_DATEPICKER_VALIDATORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function() { return MAT_DATEPICKER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_RANGE_SELECTION_STRATEGY", function() { return MAT_DATE_RANGE_SELECTION_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_FACTORY", function() { return MAT_RANGE_DATE_SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER", function() { return MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY", function() { return MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER", function() { return MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendar", function() { return MatCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function() { return MatCalendarBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function() { return MatCalendarCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function() { return MatCalendarHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateRangeInput", function() { return MatDateRangeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateRangePicker", function() { return MatDateRangePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDateSelectionModel", function() { return MatDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepicker", function() { return MatDatepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerActions", function() { return MatDatepickerActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerApply", function() { return MatDatepickerApply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerCancel", function() { return MatDatepickerCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function() { return MatDatepickerContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function() { return MatDatepickerInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function() { return MatDatepickerInputEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function() { return MatDatepickerIntl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function() { return MatDatepickerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function() { return MatDatepickerToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function() { return MatDatepickerToggleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatEndDate", function() { return MatEndDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMonthView", function() { return MatMonthView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function() { return MatMultiYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRangeDateSelectionModel", function() { return MatRangeDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSingleDateSelectionModel", function() { return MatSingleDateSelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatStartDate", function() { return MatStartDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatYearView", function() { return MatYearView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function() { return matDatepickerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerPage", function() { return yearsPerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearsPerRow", function() { return yearsPerRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_a", function() { return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_b", function() { return MAT_CALENDAR_RANGE_STRATEGY_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_c", function() { return MatDatepickerBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_d", function() { return MatDatepickerInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_datepicker_datepicker_e", function() { return MAT_DATE_RANGE_INPUT_PARENT; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");



















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */












const _c0 = ["mat-calendar-body", ""];
function MatCalendarBody_tr_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
} }
function MatCalendarBody_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("padding-top", ctx_r4._cellPadding)("padding-bottom", ctx_r4._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r4._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r4._firstRowOffset >= ctx_r4.labelMinRequiredCells ? ctx_r4.label : "", " ");
} }
function MatCalendarBody_tr_1_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarBody_tr_1_td_2_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const item_r6 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8._cellClicked(item_r6, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const colIndex_r7 = ctx.index;
    const rowIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx_r5._cellWidth)("padding-top", ctx_r5._cellPadding)("padding-bottom", ctx_r5._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r6.enabled)("mat-calendar-body-active", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7))("mat-calendar-body-range-start", ctx_r5._isRangeStart(item_r6.compareValue))("mat-calendar-body-range-end", ctx_r5._isRangeEnd(item_r6.compareValue))("mat-calendar-body-in-range", ctx_r5._isInRange(item_r6.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r5._isComparisonBridgeStart(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-bridge-end", ctx_r5._isComparisonBridgeEnd(item_r6.compareValue, rowIndex_r3, colIndex_r7))("mat-calendar-body-comparison-start", ctx_r5._isComparisonStart(item_r6.compareValue))("mat-calendar-body-comparison-end", ctx_r5._isComparisonEnd(item_r6.compareValue))("mat-calendar-body-in-comparison-range", ctx_r5._isInComparisonRange(item_r6.compareValue))("mat-calendar-body-preview-start", ctx_r5._isPreviewStart(item_r6.compareValue))("mat-calendar-body-preview-end", ctx_r5._isPreviewEnd(item_r6.compareValue))("mat-calendar-body-in-preview", ctx_r5._isInPreview(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", item_r6.cssClasses)("tabindex", ctx_r5._isActiveCell(rowIndex_r3, colIndex_r7) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-mat-row", rowIndex_r3)("data-mat-col", colIndex_r7)("aria-label", item_r6.ariaLabel)("aria-disabled", !item_r6.enabled || null)("aria-selected", ctx_r5._isSelected(item_r6.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r5._isSelected(item_r6.compareValue))("mat-calendar-body-comparison-identical", ctx_r5._isComparisonIdentical(item_r6.compareValue))("mat-calendar-body-today", ctx_r5.todayValue === item_r6.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.displayValue, " ");
} }
function MatCalendarBody_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_td_1_Template, 2, 6, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendarBody_tr_1_td_2_Template, 4, 46, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const rowIndex_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rowIndex_r3 === 0 && ctx_r1._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", row_r2);
} }
function MatMonthView_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](day_r1.narrow);
} }
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) { }
function MatCalendar_mat_month_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-month-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_month_view_2_Template_mat_month_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.activeDate = $event; })("_userSelection", function MatCalendar_mat_month_view_2_Template_mat_month_view__userSelection_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6._dateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r1.activeDate)("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd);
} }
function MatCalendar_mat_year_view_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r7.activeDate = $event; })("monthSelected", function MatCalendar_mat_year_view_3_Template_mat_year_view_monthSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9._monthSelectedInYearView($event); })("selectedChange", function MatCalendar_mat_year_view_3_Template_mat_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10._goToDateInView($event, "month"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r2.activeDate)("selected", ctx_r2.selected)("dateFilter", ctx_r2.dateFilter)("maxDate", ctx_r2.maxDate)("minDate", ctx_r2.minDate)("dateClass", ctx_r2.dateClass);
} }
function MatCalendar_mat_multi_year_view_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-multi-year-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("activeDateChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r11.activeDate = $event; })("yearSelected", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_yearSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r13._yearSelectedInMultiYearView($event); })("selectedChange", function MatCalendar_mat_multi_year_view_4_Template_mat_multi_year_view_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r14._goToDateInView($event, "year"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeDate", ctx_r3.activeDate)("selected", ctx_r3.selected)("dateFilter", ctx_r3.dateFilter)("maxDate", ctx_r3.maxDate)("minDate", ctx_r3.minDate)("dateClass", ctx_r3.dateClass);
} }
function MatDatepickerContent_ng_template_2_Template(rf, ctx) { }
const _c2 = ["button"];
function MatDatepickerToggle__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "path", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function createMissingDateImplError(provider) {
    return Error(`MatDatepicker: No provider found for ${provider}. You must import one of the following ` +
        `modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a ` +
        `custom implementation.`);
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Datepicker data that requires internationalization. */
class MatDatepickerIntl {
    constructor() {
        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** A label for the calendar popup (used by screen readers). */
        this.calendarLabel = 'Calendar';
        /** A label for the button used to open the calendar popup (used by screen readers). */
        this.openCalendarLabel = 'Open calendar';
        /** Label for the button used to close the calendar popup. */
        this.closeCalendarLabel = 'Close calendar';
        /** A label for the previous month button (used by screen readers). */
        this.prevMonthLabel = 'Previous month';
        /** A label for the next month button (used by screen readers). */
        this.nextMonthLabel = 'Next month';
        /** A label for the previous year button (used by screen readers). */
        this.prevYearLabel = 'Previous year';
        /** A label for the next year button (used by screen readers). */
        this.nextYearLabel = 'Next year';
        /** A label for the previous multi-year button (used by screen readers). */
        this.prevMultiYearLabel = 'Previous 20 years';
        /** A label for the next multi-year button (used by screen readers). */
        this.nextMultiYearLabel = 'Next 20 years';
        /** A label for the 'switch to month view' button (used by screen readers). */
        this.switchToMonthViewLabel = 'Choose date';
        /** A label for the 'switch to year view' button (used by screen readers). */
        this.switchToMultiYearViewLabel = 'Choose month and year';
    }
    /** Formats a range of years. */
    formatYearRange(start, end) {
        return `${start} \u2013 ${end}`;
    }
}
MatDatepickerIntl.ɵfac = function MatDatepickerIntl_Factory(t) { return new (t || MatDatepickerIntl)(); };
MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({ factory: function MatDatepickerIntl_Factory() { return new MatDatepickerIntl(); }, token: MatDatepickerIntl, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerIntl, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
    constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
        this.value = value;
        this.displayValue = displayValue;
        this.ariaLabel = ariaLabel;
        this.enabled = enabled;
        this.cssClasses = cssClasses;
        this.compareValue = compareValue;
        this.rawValue = rawValue;
    }
}
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
class MatCalendarBody {
    constructor(_elementRef, _ngZone) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /** The number of columns in the table. */
        this.numCols = 7;
        /** The cell number of the active cell in the table. */
        this.activeCell = 0;
        /** Whether a range is being selected. */
        this.isRange = false;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */
        this.cellAspectRatio = 1;
        /** Start of the preview range. */
        this.previewStart = null;
        /** End of the preview range. */
        this.previewEnd = null;
        /** Emits when a new value is selected. */
        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when the preview has changed as a result of a user action. */
        this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Event handler for when the user enters an element
         * inside the calendar body (e.g. by hovering in or focus).
         */
        this._enterHandler = (event) => {
            if (this._skipNextFocus && event.type === 'focus') {
                this._skipNextFocus = false;
                return;
            }
            // We only need to hit the zone when we're selecting a range.
            if (event.target && this.isRange) {
                const cell = this._getCellFromElement(event.target);
                if (cell) {
                    this._ngZone.run(() => this.previewChange.emit({ value: cell.enabled ? cell : null, event }));
                }
            }
        };
        /**
         * Event handler for when the user's pointer leaves an element
         * inside the calendar body (e.g. by hovering out or blurring).
         */
        this._leaveHandler = (event) => {
            // We only need to hit the zone when we're selecting a range.
            if (this.previewEnd !== null && this.isRange) {
                // Only reset the preview end value when leaving cells. This looks better, because
                // we have a gap between the cells and the rows and we don't want to remove the
                // range just for it to show up again when the user moves a few pixels to the side.
                if (event.target && isTableCell(event.target)) {
                    this._ngZone.run(() => this.previewChange.emit({ value: null, event }));
                }
            }
        };
        _ngZone.runOutsideAngular(() => {
            const element = _elementRef.nativeElement;
            element.addEventListener('mouseenter', this._enterHandler, true);
            element.addEventListener('focus', this._enterHandler, true);
            element.addEventListener('mouseleave', this._leaveHandler, true);
            element.addEventListener('blur', this._leaveHandler, true);
        });
    }
    /** Called when a cell is clicked. */
    _cellClicked(cell, event) {
        if (cell.enabled) {
            this.selectedValueChange.emit({ value: cell.value, event });
        }
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
        return this.startValue === value || this.endValue === value;
    }
    ngOnChanges(changes) {
        const columnChanges = changes['numCols'];
        const { rows, numCols } = this;
        if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
        }
        if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
        }
        if (columnChanges || !this._cellWidth) {
            this._cellWidth = `${100 / numCols}%`;
        }
    }
    ngOnDestroy() {
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mouseenter', this._enterHandler, true);
        element.removeEventListener('focus', this._enterHandler, true);
        element.removeEventListener('mouseleave', this._leaveHandler, true);
        element.removeEventListener('blur', this._leaveHandler, true);
    }
    /** Returns whether a cell is active. */
    _isActiveCell(rowIndex, colIndex) {
        let cellNumber = rowIndex * this.numCols + colIndex;
        // Account for the fact that the first row may not have as many cells.
        if (rowIndex) {
            cellNumber -= this._firstRowOffset;
        }
        return cellNumber == this.activeCell;
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview = true) {
        this._ngZone.runOutsideAngular(() => {
            this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(() => {
                const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
                if (activeCell) {
                    if (!movePreview) {
                        this._skipNextFocus = true;
                    }
                    activeCell.focus();
                }
            });
        });
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
        return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
        return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
        return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */
    _isComparisonStart(value) {
        return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
        if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
            return false;
        }
        let previousCell = this.rows[rowIndex][colIndex - 1];
        if (!previousCell) {
            const previousRow = this.rows[rowIndex - 1];
            previousCell = previousRow && previousRow[previousRow.length - 1];
        }
        return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
        if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
            return false;
        }
        let nextCell = this.rows[rowIndex][colIndex + 1];
        if (!nextCell) {
            const nextRow = this.rows[rowIndex + 1];
            nextCell = nextRow && nextRow[0];
        }
        return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */
    _isComparisonEnd(value) {
        return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */
    _isInComparisonRange(value) {
        return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */
    _isComparisonIdentical(value) {
        // Note that we don't need to null check the start/end
        // here, because the `value` will always be defined.
        return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
        return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
        return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
        return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */
    _getCellFromElement(element) {
        let cell;
        if (isTableCell(element)) {
            cell = element;
        }
        else if (isTableCell(element.parentNode)) {
            cell = element.parentNode;
        }
        if (cell) {
            const row = cell.getAttribute('data-mat-row');
            const col = cell.getAttribute('data-mat-col');
            if (row && col) {
                return this.rows[parseInt(row)][parseInt(col)];
            }
        }
        return null;
    }
}
MatCalendarBody.ɵfac = function MatCalendarBody_Factory(t) { return new (t || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"])); };
MatCalendarBody.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatCalendarBody, selectors: [["", "mat-calendar-body", ""]], hostAttrs: ["role", "grid", "aria-readonly", "true", 1, "mat-calendar-body"], inputs: { numCols: "numCols", activeCell: "activeCell", isRange: "isRange", cellAspectRatio: "cellAspectRatio", previewStart: "previewStart", previewEnd: "previewEnd", label: "label", rows: "rows", todayValue: "todayValue", startValue: "startValue", endValue: "endValue", labelMinRequiredCells: "labelMinRequiredCells", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedValueChange: "selectedValueChange", previewChange: "previewChange" }, exportAs: ["matCalendarBody"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], attrs: _c0, decls: 2, vars: 2, consts: [["aria-hidden", "true", 4, "ngIf"], ["role", "row", 4, "ngFor", "ngForOf"], ["aria-hidden", "true"], [1, "mat-calendar-body-label"], ["role", "row"], ["aria-hidden", "true", "class", "mat-calendar-body-label", 3, "paddingTop", "paddingBottom", 4, "ngIf"], ["role", "gridcell", "class", "mat-calendar-body-cell", 3, "ngClass", "tabindex", "mat-calendar-body-disabled", "mat-calendar-body-active", "mat-calendar-body-range-start", "mat-calendar-body-range-end", "mat-calendar-body-in-range", "mat-calendar-body-comparison-bridge-start", "mat-calendar-body-comparison-bridge-end", "mat-calendar-body-comparison-start", "mat-calendar-body-comparison-end", "mat-calendar-body-in-comparison-range", "mat-calendar-body-preview-start", "mat-calendar-body-preview-end", "mat-calendar-body-in-preview", "width", "paddingTop", "paddingBottom", "click", 4, "ngFor", "ngForOf"], ["aria-hidden", "true", 1, "mat-calendar-body-label"], ["role", "gridcell", 1, "mat-calendar-body-cell", 3, "ngClass", "tabindex", "click"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], [1, "mat-calendar-body-cell-preview"]], template: function MatCalendarBody_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendarBody_tr_0_Template, 3, 6, "tr", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MatCalendarBody_tr_1_Template, 3, 2, "tr", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx._firstRowOffset < ctx.labelMinRequiredCells);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.mat-datepicker-dialog .mat-dialog-container{position:relative;overflow:visible}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendarBody.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }
];
MatCalendarBody.propDecorators = {
    label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    rows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    todayValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    endValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    labelMinRequiredCells: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    numCols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    activeCell: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    isRange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    cellAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    previewStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    previewEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    previewChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarBody, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: '[mat-calendar-body]',
                template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [attr.data-mat-row]=\"rowIndex\"\n      [attr.data-mat-col]=\"colIndex\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [class.mat-calendar-body-range-start]=\"_isRangeStart(item.compareValue)\"\n      [class.mat-calendar-body-range-end]=\"_isRangeEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-range]=\"_isInRange(item.compareValue)\"\n      [class.mat-calendar-body-comparison-bridge-start]=\"_isComparisonBridgeStart(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-bridge-end]=\"_isComparisonBridgeEnd(item.compareValue, rowIndex, colIndex)\"\n      [class.mat-calendar-body-comparison-start]=\"_isComparisonStart(item.compareValue)\"\n      [class.mat-calendar-body-comparison-end]=\"_isComparisonEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-comparison-range]=\"_isInComparisonRange(item.compareValue)\"\n      [class.mat-calendar-body-preview-start]=\"_isPreviewStart(item.compareValue)\"\n      [class.mat-calendar-body-preview-end]=\"_isPreviewEnd(item.compareValue)\"\n      [class.mat-calendar-body-in-preview]=\"_isInPreview(item.compareValue)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"_isSelected(item.compareValue)\"\n      (click)=\"_cellClicked(item, $event)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content mat-focus-indicator\"\n        [class.mat-calendar-body-selected]=\"_isSelected(item.compareValue)\"\n        [class.mat-calendar-body-comparison-identical]=\"_isComparisonIdentical(item.compareValue)\"\n        [class.mat-calendar-body-today]=\"todayValue === item.compareValue\">\n        {{item.displayValue}}\n      </div>\n      <div class=\"mat-calendar-body-cell-preview\"></div>\n  </td>\n</tr>\n",
                host: {
                    'class': 'mat-calendar-body',
                    'role': 'grid',
                    'aria-readonly': 'true'
                },
                exportAs: 'matCalendarBody',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.mat-datepicker-dialog .mat-dialog-container{position:relative;overflow:visible}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }]; }, { numCols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], activeCell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], isRange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], cellAspectRatio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], previewStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], previewEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], previewChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], todayValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], startValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], endValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], labelMinRequiredCells: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
    return node.nodeName === 'TD';
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
    return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
    return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
    return rangeEnabled && start !== null && end !== null && start !== end &&
        value >= start && value <= end;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** A class representing a range of dates. */
class DateRange {
    constructor(
    /** The start date of the range. */
    start, 
    /** The end date of the range. */
    end) {
        this.start = start;
        this.end = end;
    }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
class MatDateSelectionModel {
    constructor(
    /** The current selection. */
    selection, _adapter) {
        this.selection = selection;
        this._adapter = _adapter;
        this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Emits when the selection has changed. */
        this.selectionChanged = this._selectionChanged;
        this.selection = selection;
    }
    /**
     * Updates the current selection in the model.
     * @param value New selection that should be assigned.
     * @param source Object that triggered the selection change.
     */
    updateSelection(value, source) {
        const oldValue = this.selection;
        this.selection = value;
        this._selectionChanged.next({ selection: value, source, oldValue });
    }
    ngOnDestroy() {
        this._selectionChanged.complete();
    }
    _isValidDateInstance(date) {
        return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
    /**
     * Clones the selection model.
     * @deprecated To be turned into an abstract method.
     * @breaking-change 12.0.0
     */
    clone() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            throw Error('Not implemented');
        }
        return null;
    }
}
MatDateSelectionModel.ɵfac = function MatDateSelectionModel_Factory(t) { return new (t || MatDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](undefined), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"])); };
MatDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MatDateSelectionModel, factory: MatDateSelectionModel.ɵfac });
MatDateSelectionModel.ctorParameters = () => [
    { type: undefined },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: undefined }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }]; }, null); })();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
class MatSingleDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(null, adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a single date selection, the added date
     * simply overwrites the previous selection
     */
    add(date) {
        super.updateSelection(date, this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */
    isComplete() {
        return this.selection != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatSingleDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatSingleDateSelectionModel.ɵfac = function MatSingleDateSelectionModel_Factory(t) { return new (t || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"])); };
MatSingleDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MatSingleDateSelectionModel, factory: MatSingleDateSelectionModel.ɵfac });
MatSingleDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatSingleDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }]; }, null); })();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
class MatRangeDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
        super(new DateRange(null, null), adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a date range selection, the added date
     * fills in the next `null` value in the range. If both the start and the end already have a date,
     * the selection is reset so that the given date is the new `start` and the `end` is null.
     */
    add(date) {
        let { start, end } = this.selection;
        if (start == null) {
            start = date;
        }
        else if (end == null) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        super.updateSelection(new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
        const { start, end } = this.selection;
        // Empty ranges are valid.
        if (start == null && end == null) {
            return true;
        }
        // Complete ranges are only valid if both dates are valid and the start is before the end.
        if (start != null && end != null) {
            return this._isValidDateInstance(start) && this._isValidDateInstance(end) &&
                this._adapter.compareDate(start, end) <= 0;
        }
        // Partial ranges are valid if the start/end is valid.
        return (start == null || this._isValidDateInstance(start)) &&
            (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */
    isComplete() {
        return this.selection.start != null && this.selection.end != null;
    }
    /** Clones the selection model. */
    clone() {
        const clone = new MatRangeDateSelectionModel(this._adapter);
        clone.updateSelection(this.selection, this);
        return clone;
    }
}
MatRangeDateSelectionModel.ɵfac = function MatRangeDateSelectionModel_Factory(t) { return new (t || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"])); };
MatRangeDateSelectionModel.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: MatRangeDateSelectionModel, factory: MatRangeDateSelectionModel.ɵfac });
MatRangeDateSelectionModel.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatRangeDateSelectionModel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }]; }, null); })();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
    useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY,
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
    return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
    provide: MatDateSelectionModel,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
    useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
class DefaultMatCalendarRangeStrategy {
    constructor(_dateAdapter) {
        this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date, currentRange) {
        let { start, end } = currentRange;
        if (start == null) {
            start = date;
        }
        else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
            end = date;
        }
        else {
            start = date;
            end = null;
        }
        return new DateRange(start, end);
    }
    createPreview(activeDate, currentRange) {
        let start = null;
        let end = null;
        if (currentRange.start && !currentRange.end && activeDate) {
            start = currentRange.start;
            end = activeDate;
        }
        return new DateRange(start, end);
    }
}
DefaultMatCalendarRangeStrategy.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(t) { return new (t || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"])); };
DefaultMatCalendarRangeStrategy.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DefaultMatCalendarRangeStrategy, factory: DefaultMatCalendarRangeStrategy.ɵfac });
DefaultMatCalendarRangeStrategy.ctorParameters = () => [
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](DefaultMatCalendarRangeStrategy, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"]
    }], function () { return [{ type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }]; }, null); })();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
    return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_4__["SkipSelf"](), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]],
    useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY,
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const DAYS_PER_WEEK = 7;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
class MatMonthView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rangeStrategy = _rangeStrategy;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** Emits when a new date is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        const oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setRanges(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null))
            .subscribe(() => this._init());
    }
    ngOnChanges(changes) {
        const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
        if (comparisonChange && !comparisonChange.firstChange) {
            this._setRanges(this.selected);
        }
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */
    _dateSelected(event) {
        const date = event.value;
        const selectedYear = this._dateAdapter.getYear(this.activeDate);
        const selectedMonth = this._dateAdapter.getMonth(this.activeDate);
        const selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);
        let rangeStartDate;
        let rangeEndDate;
        if (this._selected instanceof DateRange) {
            rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
            rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
        }
        else {
            rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
        }
        if (rangeStartDate !== date || rangeEndDate !== date) {
            this.selectedChange.emit(selectedDate);
        }
        this._userSelection.emit({ value: selectedDate, event: event.event });
        this._previewStart = this._previewEnd = null;
        this._changeDetectorRef.markForCheck();
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, (this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate)));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, -1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate = event.altKey ?
                    this._dateAdapter.addCalendarYears(this._activeDate, 1) :
                    this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                    this._dateSelected({ value: this._dateAdapter.getDate(this._activeDate), event });
                    // Prevent unexpected default actions such as form submission.
                    event.preventDefault();
                }
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"]:
                // Abort the current range selection if the user presses escape mid-selection.
                if (this._previewEnd != null && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) {
                    this._previewStart = this._previewEnd = null;
                    this.selectedChange.emit(null);
                    this._userSelection.emit({ value: null, event });
                    event.preventDefault();
                    event.stopPropagation(); // Prevents the overlay from closing.
                }
                return;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this month view. */
    _init() {
        this._setRanges(this.selected);
        this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
        this._monthLabel = this._dateFormats.display.monthLabel
            ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel)
            : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)]
                .toLocaleUpperCase();
        let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
        this._firstWeekOffset =
            (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) -
                this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
        this._initWeekdays();
        this._createWeekCells();
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview) {
        this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */
    _previewChanged({ event, value: cell }) {
        if (this._rangeStrategy) {
            // We can assume that this will be a range, because preview
            // events aren't fired for single date selections.
            const value = cell ? cell.rawValue : null;
            const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
            this._previewStart = this._getCellCompareValue(previewRange.start);
            this._previewEnd = this._getCellCompareValue(previewRange.end);
            // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
            // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
            // when navigating one month back using the keyboard which will cause this handler
            // to throw a "changed after checked" error when updating the preview state.
            this._changeDetectorRef.detectChanges();
        }
    }
    /** Initializes the weekdays. */
    _initWeekdays() {
        const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
        const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
        const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
        // Rotate the labels for days of the week based on the configured first day of the week.
        let weekdays = longWeekdays.map((long, i) => {
            return { long, narrow: narrowWeekdays[i] };
        });
        this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */
    _createWeekCells() {
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
        const dateNames = this._dateAdapter.getDateNames();
        this._weeks = [[]];
        for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
                this._weeks.push([]);
                cell = 0;
            }
            const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            const enabled = this._shouldEnableDate(date);
            const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
            this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
        }
    }
    /** Date filter for the month */
    _shouldEnableDate(date) {
        return !!date &&
            (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) &&
            (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) &&
            (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
        return date && this._hasSameMonthAndYear(date, this.activeDate) ?
            this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    _hasSameMonthAndYear(d1, d2) {
        return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) &&
            this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */
    _getCellCompareValue(date) {
        if (date) {
            // We use the time since the Unix epoch to compare dates in this view, rather than the
            // cell values, because we need to support ranges that span across multiple months/years.
            const year = this._dateAdapter.getYear(date);
            const month = this._dateAdapter.getMonth(date);
            const day = this._dateAdapter.getDate(date);
            return new Date(year, month, day).getTime();
        }
        return null;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */
    _setRanges(selectedValue) {
        if (selectedValue instanceof DateRange) {
            this._rangeStart = this._getCellCompareValue(selectedValue.start);
            this._rangeEnd = this._getCellCompareValue(selectedValue.end);
            this._isRange = true;
        }
        else {
            this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
            this._isRange = false;
        }
        this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
        this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
}
MatMonthView.ɵfac = function MatMonthView_Factory(t) { return new (t || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8)); };
MatMonthView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatMonthView, selectors: [["mat-month-view"]], viewQuery: function MatMonthView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", _userSelection: "_userSelection", activeDateChange: "activeDateChange" }, exportAs: ["matMonthView"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 13, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col", 4, "ngFor", "ngForOf"], ["colspan", "7", "aria-hidden", "true", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "selectedValueChange", "previewChange", "keydown"], ["scope", "col"]], template: function MatMonthView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatMonthView_th_3_Template, 2, 2, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "tbody", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_6_listener($event) { return ctx._dateSelected($event); })("previewChange", function MatMonthView_Template_tbody_previewChange_6_listener($event) { return ctx._previewChanged($event); })("keydown", function MatMonthView_Template_tbody_keydown_6_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx._weekdays);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMonthView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
MatMonthView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMonthView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-month-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [startValue]=\"_rangeStart!\"\n         [endValue]=\"_rangeEnd!\"\n         [comparisonStart]=\"_comparisonRangeStart\"\n         [comparisonEnd]=\"_comparisonRangeEnd\"\n         [previewStart]=\"_previewStart\"\n         [previewEnd]=\"_previewEnd\"\n         [isRange]=\"_isRange\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (previewChange)=\"_previewChanged($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMonthView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
class MatMultiYearView {
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** Emits when a new year is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits the selected year. This doesn't imply a change on the selected date */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedYear(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */
    _init() {
        this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
        // We want a range years such that we maximize the number of
        // enabled dates visible at once. This prevents issues where the minimum year
        // is the last item of a page OR the maximum year is the first item of a page.
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view.
        const activeYear = this._dateAdapter.getYear(this._activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        this._years = [];
        for (let i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);
            if (row.length == yearsPerRow) {
                this._years.push(row.map(year => this._createCellForYear(year)));
                row = [];
            }
        }
        this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    _yearSelected(event) {
        const year = event.value;
        this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
        let month = this._dateAdapter.getMonth(this.activeDate);
        let daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));
        this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeydown(event) {
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._yearSelected({ value: this._dateAdapter.getYear(this._activeDate), event });
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    _getActiveCell() {
        return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /** Creates an MatCalendarCell for the given year. */
    _createCellForYear(year) {
        const date = this._dateAdapter.createDate(year, 0, 1);
        const yearName = this._dateAdapter.getYearName(date);
        const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
        return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */
    _shouldEnableYear(year) {
        // disable if the year is greater than maxDate lower than minDate
        if (year === undefined || year === null ||
            (this.maxDate && year > this._dateAdapter.getYear(this.maxDate)) ||
            (this.minDate && year < this._dateAdapter.getYear(this.minDate))) {
            return false;
        }
        // enable if it reaches here and there's no filter defined
        if (!this.dateFilter) {
            return true;
        }
        const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
        // If any date in the year is enabled count the year as enabled.
        for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */
    _setSelectedYear(value) {
        this._selectedYear = null;
        if (value instanceof DateRange) {
            const displayValue = value.start || value.end;
            if (displayValue) {
                this._selectedYear = this._dateAdapter.getYear(displayValue);
            }
        }
        else if (value) {
            this._selectedYear = this._dateAdapter.getYear(value);
        }
    }
}
MatMultiYearView.ɵfac = function MatMultiYearView_Factory(t) { return new (t || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8)); };
MatMultiYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatMultiYearView, selectors: [["mat-multi-year-view"]], viewQuery: function MatMultiYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", activeDateChange: "activeDateChange" }, exportAs: ["matMultiYearView"], decls: 5, vars: 7, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function MatMultiYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._yearSelected($event); })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatMultiYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
MatMultiYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatMultiYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-multi-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [startValue]=\"_selectedYear!\"\n         [endValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matMultiYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
        }] }); })();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
    const year1 = dateAdapter.getYear(date1);
    const year2 = dateAdapter.getYear(date2);
    const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
    return Math.floor((year1 - startingYear) / yearsPerPage) ===
        Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
    const activeYear = dateAdapter.getYear(activeDate);
    return euclideanModulo((activeYear - getStartingYear(dateAdapter, minDate, maxDate)), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
    let startingYear = 0;
    if (maxDate) {
        const maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
    }
    else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
    }
    return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
    return (a % b + b) % b;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
class MatYearView {
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** Emits when a new month is selected. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits the selected month. This doesn't imply a change on the selected date */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when any date is activated. */
        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._activeDate = this._dateAdapter.today();
    }
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() { return this._activeDate; }
    set activeDate(value) {
        let oldActiveDate = this._activeDate;
        const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
        this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
        if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
        }
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    ngAfterContentInit() {
        this._rerenderSubscription = this._dateAdapter.localeChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null))
            .subscribe(() => this._init());
    }
    ngOnDestroy() {
        this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */
    _monthSelected(event) {
        const month = event.value;
        const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        this.monthSelected.emit(normalizedDate);
        const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
        this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event) {
        // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
        // disabled ones from being selected. This may not be ideal, we should look into whether
        // navigation should skip over disabled dates, and if so, how to implement that efficiently.
        const oldActiveDate = this._activeDate;
        const isRtl = this._isRtl();
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
                this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
                this.activeDate =
                    this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
                this._monthSelected({ value: this._dateAdapter.getMonth(this._activeDate), event });
                break;
            default:
                // Don't prevent default or focus active cell on keys that we don't explicitly handle.
                return;
        }
        if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
        }
        this._focusActiveCell();
        // Prevent unexpected default actions such as form submission.
        event.preventDefault();
    }
    /** Initializes this year view. */
    _init() {
        this._setSelectedMonth(this.selected);
        this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
        this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
        let monthNames = this._dateAdapter.getMonthNames('short');
        // First row of months only contains 5 elements so we can fit the year label on the same row.
        this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
        this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
        this._matCalendarBody._focusActiveCell();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
        return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ?
            this._dateAdapter.getMonth(date) : null;
    }
    /** Creates an MatCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
        const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
        const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
        const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
        return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */
    _shouldEnableMonth(month) {
        const activeYear = this._dateAdapter.getYear(this.activeDate);
        if (month === undefined || month === null ||
            this._isYearAndMonthAfterMaxDate(activeYear, month) ||
            this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
        }
        if (!this.dateFilter) {
            return true;
        }
        const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
        // If any date in the month is enabled count the month as enabled.
        for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
                return true;
            }
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    _isYearAndMonthAfterMaxDate(year, month) {
        if (this.maxDate) {
            const maxYear = this._dateAdapter.getYear(this.maxDate);
            const maxMonth = this._dateAdapter.getMonth(this.maxDate);
            return year > maxYear || (year === maxYear && month > maxMonth);
        }
        return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    _isYearAndMonthBeforeMinDate(year, month) {
        if (this.minDate) {
            const minYear = this._dateAdapter.getYear(this.minDate);
            const minMonth = this._dateAdapter.getMonth(this.minDate);
            return year < minYear || (year === minYear && month < minMonth);
        }
        return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
        return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */
    _setSelectedMonth(value) {
        if (value instanceof DateRange) {
            this._selectedMonth = this._getMonthInCurrentYear(value.start) ||
                this._getMonthInCurrentYear(value.end);
        }
        else {
            this._selectedMonth = this._getMonthInCurrentYear(value);
        }
    }
}
MatYearView.ɵfac = function MatYearView_Factory(t) { return new (t || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8)); };
MatYearView.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatYearView, selectors: [["mat-year-view"]], viewQuery: function MatYearView_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendarBody, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
    } }, inputs: { activeDate: "activeDate", selected: "selected", minDate: "minDate", maxDate: "maxDate", dateFilter: "dateFilter", dateClass: "dateClass" }, outputs: { selectedChange: "selectedChange", monthSelected: "monthSelected", activeDateChange: "activeDateChange" }, exportAs: ["matYearView"], decls: 5, vars: 9, consts: [["role", "presentation", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell", "selectedValueChange", "keydown"]], template: function MatYearView_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "thead", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tbody", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) { return ctx._monthSelected($event); })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) { return ctx._handleCalendarBodyKeydown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
    } }, directives: [MatCalendarBody], encapsulation: 2, changeDetection: 0 });
MatYearView.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] }
];
MatYearView.propDecorators = {
    activeDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    activeDateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _matCalendarBody: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatCalendarBody,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatYearView, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-year-view',
                template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [startValue]=\"_selectedMonth!\"\n         [endValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
                exportAs: 'matYearView',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }]; }, { selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], activeDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _matCalendarBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendarBody]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Counter used to generate unique IDs. */
let uniqueId = 0;
/** Default header for MatCalendar */
class MatCalendarHeader {
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._buttonDescriptionId = `mat-calendar-button-${uniqueId++}`;
        this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The label for the current calendar view. */
    get periodButtonText() {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter
                .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                .toLocaleUpperCase();
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
        }
        // The offset from the active year to the "slot" for the starting year is the
        // *actual* first rendered year in the multi-year view, and the last year is
        // just yearsPerPage - 1 away.
        const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
        const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
        const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
        const minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
        const maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
        return this._intl.formatYearRange(minYearName, maxYearName);
    }
    get periodButtonLabel() {
        return this.calendar.currentView == 'month' ?
            this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
        return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
        }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
        return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
        }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
        this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
        this.calendar.activeDate = this.calendar.currentView == 'month' ?
            this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) :
            this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
        if (!this.calendar.minDate) {
            return true;
        }
        return !this.calendar.minDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
        return !this.calendar.maxDate ||
            !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
        if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) &&
                this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
        }
        if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
        }
        // Otherwise we are in 'multi-year' view.
        return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
}
MatCalendarHeader.ɵfac = function MatCalendarHeader_Factory(t) { return new (t || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
MatCalendarHeader.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatCalendarHeader, selectors: [["mat-calendar-header"]], exportAs: ["matCalendarHeader"], ngContentSelectors: _c1, decls: 10, vars: 10, consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["mat-button", "", "type", "button", "cdkAriaLive", "polite", 1, "mat-calendar-period-button", 3, "click"], [1, "mat-calendar-arrow"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "disabled", "click"]], template: function MatCalendarHeader_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_2_listener() { return ctx.currentPeriodClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_8_listener() { return ctx.previousClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_9_listener() { return ctx.nextClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx._buttonDescriptionId);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.periodButtonText);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkAriaLive"]], encapsulation: 2, changeDetection: 0 });
MatCalendarHeader.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: MatCalendar, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatCalendar),] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendarHeader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-calendar-header',
                template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            [attr.aria-describedby]=\"_buttonDescriptionId\"\n            cdkAriaLive=\"polite\">\n      <span [attr.id]=\"_buttonDescriptionId\">{{periodButtonText}}</span>\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView !== 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
                exportAs: 'matCalendarHeader',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: MatCalendar, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatCalendar)]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, null); })();
/**
 * A calendar that is used as part of the datepicker.
 * @docs-private
 */
class MatCalendar {
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */
        this._moveFocusOnNextTick = false;
        /** Whether the calendar should be started in month or year view. */
        this.startView = 'month';
        /** Emits when the currently selected date changes. */
        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        /** Emits when any date is selected. */
        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        this._intlChanges = _intl.changes.subscribe(() => {
            _changeDetectorRef.markForCheck();
            this.stateChanges.next();
        });
    }
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() { return this._startAt; }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() { return this._selected; }
    set selected(value) {
        if (value instanceof DateRange) {
            this._selected = value;
        }
        else {
            this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
    }
    /** The minimum selectable date. */
    get minDate() { return this._minDate; }
    set minDate(value) {
        this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() { return this._maxDate; }
    set maxDate(value) {
        this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() { return this._clampedActiveDate; }
    set activeDate(value) {
        this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
        this.stateChanges.next();
        this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */
    get currentView() { return this._currentView; }
    set currentView(value) {
        const viewChangedResult = this._currentView !== value ? value : null;
        this._currentView = value;
        this._moveFocusOnNextTick = true;
        this._changeDetectorRef.markForCheck();
        if (viewChangedResult) {
            this.viewChanged.emit(viewChangedResult);
        }
    }
    ngAfterContentInit() {
        this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
        this.activeDate = this.startAt || this._dateAdapter.today();
        // Assign to the private property since we don't want to move focus on init.
        this._currentView = this.startView;
    }
    ngAfterViewChecked() {
        if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
        }
    }
    ngOnDestroy() {
        this._intlChanges.unsubscribe();
        this.stateChanges.complete();
    }
    ngOnChanges(changes) {
        const change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];
        if (change && !change.firstChange) {
            const view = this._getCurrentViewComponent();
            if (view) {
                // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
                // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
                this._changeDetectorRef.detectChanges();
                view._init();
            }
        }
        this.stateChanges.next();
    }
    focusActiveCell() {
        this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
        const currentView = this.currentView;
        let view;
        if (currentView === 'month') {
            view = this.monthView;
        }
        else if (currentView === 'year') {
            view = this.yearView;
        }
        else {
            view = this.multiYearView;
        }
        view._init();
    }
    /** Handles date selection in the month view. */
    _dateSelected(event) {
        const date = event.value;
        if (this.selected instanceof DateRange ||
            (date && !this._dateAdapter.sameDate(date, this.selected))) {
            this.selectedChange.emit(date);
        }
        this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date, view) {
        this.activeDate = date;
        this.currentView = view;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    _getCurrentViewComponent() {
        return this.monthView || this.yearView || this.multiYearView;
    }
}
MatCalendar.ɵfac = function MatCalendar_Factory(t) { return new (t || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"])); };
MatCalendar.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatCalendar, selectors: [["mat-calendar"]], viewQuery: function MatCalendar_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMonthView, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatYearView, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatMultiYearView, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
    } }, hostAttrs: [1, "mat-calendar"], inputs: { startView: "startView", startAt: "startAt", selected: "selected", minDate: "minDate", maxDate: "maxDate", headerComponent: "headerComponent", dateFilter: "dateFilter", dateClass: "dateClass", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd" }, outputs: { selectedChange: "selectedChange", yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", _userSelection: "_userSelection" }, exportAs: ["matCalendar"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 5, consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content", 3, "ngSwitch"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange", 4, "ngSwitchCase"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "activeDateChange", "_userSelection"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "monthSelected", "selectedChange"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "activeDateChange", "yearSelected", "selectedChange"]], template: function MatCalendar_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatCalendar_mat_month_view_2_Template, 1, 8, "mat-month-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MatCalendar_mat_year_view_3_Template, 1, 6, "mat-year-view", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MatCalendar_mat_multi_year_view_4_Template, 1, 6, "mat-multi-year-view", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.currentView);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "multi-year");
    } }, directives: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], MatMonthView, MatYearView, MatMultiYearView], styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"], encapsulation: 2, changeDetection: 0 });
MatCalendar.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
MatCalendar.propDecorators = {
    headerComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    minDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    maxDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    selectedChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    _userSelection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatMonthView,] }],
    yearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatYearView,] }],
    multiYearView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatMultiYearView,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatCalendar, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-calendar',
                template: "<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      [comparisonStart]=\"comparisonStart\"\n      [comparisonEnd]=\"comparisonEnd\"\n      (_userSelection)=\"_dateSelected($event)\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
                host: {
                    'class': 'mat-calendar'
                },
                exportAs: 'matCalendar',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                providers: [MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER],
                styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selectedChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], _userSelection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], headerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], monthView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMonthView]
        }], yearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatYearView]
        }], multiYearView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatMultiYearView]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
    /** Transforms the height of the datepicker's calendar. */
    transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 0,
            transform: 'scale(1, 0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1,
            transform: 'scale(1, 1)'
        }))),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 })))
    ]),
    /** Fades in the content of the calendar. */
    fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInCalendar', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({ opacity: 1 })),
        // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
        // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))
    ])
};

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_DATEPICKER_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
    useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY,
};
// Boilerplate for applying mixins to MatDatepickerContent.
/** @docs-private */
class MatDatepickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatDatepickerContentBase);
/**
 * Component used as the content for the datepicker dialog and popup. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the popup that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
class MatDatepickerContent extends _MatDatepickerContentMixinBase {
    constructor(elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, 
    /**
     * @deprecated `intl` argument to become required.
     * @breaking-change 12.0.0
     */
    intl) {
        super(elementRef);
        this._changeDetectorRef = _changeDetectorRef;
        this._globalModel = _globalModel;
        this._dateAdapter = _dateAdapter;
        this._rangeSelectionStrategy = _rangeSelectionStrategy;
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"]();
        /** Current state of the animation. */
        this._animationState = 'enter';
        /** Emits when an animation has finished. */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /** Portal with projected action buttons. */
        this._actionsPortal = null;
        // @breaking-change 12.0.0 Remove fallback for `intl`.
        this._closeButtonText = (intl === null || intl === void 0 ? void 0 : intl.closeCalendarLabel) || 'Close calendar';
    }
    ngOnInit() {
        // If we have actions, clone the model so that we have the ability to cancel the selection,
        // otherwise update the global model directly. Note that we want to assign this as soon as
        // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
        this._model = this._actionsPortal ? this._globalModel.clone() : this._globalModel;
    }
    ngAfterViewInit() {
        this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
            this._changeDetectorRef.markForCheck();
        }));
        this._calendar.focusActiveCell();
    }
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
        this._animationDone.complete();
    }
    _handleUserSelection(event) {
        const selection = this._model.selection;
        const value = event.value;
        const isRange = selection instanceof DateRange;
        // If we're selecting a range and we have a selection strategy, always pass the value through
        // there. Otherwise don't assign null values to the model, unless we're selecting a range.
        // A null value when picking a range means that the user cancelled the selection (e.g. by
        // pressing escape), whereas when selecting a single value it means that the value didn't
        // change. This isn't very intuitive, but it's here for backwards-compatibility.
        if (isRange && this._rangeSelectionStrategy) {
            const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
            this._model.updateSelection(newSelection, this);
        }
        else if (value && (isRange ||
            !this._dateAdapter.sameDate(value, selection))) {
            this._model.add(value);
        }
        // Delegate closing the popup to the actions.
        if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
            this.datepicker.close();
        }
    }
    _startExitAnimation() {
        this._animationState = 'void';
        this._changeDetectorRef.markForCheck();
    }
    _getSelected() {
        return this._model.selection;
    }
    /** Applies the current pending selection to the global model. */
    _applyPendingSelection() {
        if (this._model !== this._globalModel) {
            this._globalModel.updateSelection(this._model.selection, this);
        }
    }
}
MatDatepickerContent.ɵfac = function MatDatepickerContent_Factory(t) { return new (t || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl)); };
MatDatepickerContent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDatepickerContent, selectors: [["mat-datepicker-content"]], viewQuery: function MatDatepickerContent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](MatCalendar, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-content"], hostVars: 3, hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostListener"]("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler() { return ctx._animationDone.next(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["matDatepickerContent"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 20, consts: [["cdkTrapFocus", "", 1, "mat-datepicker-content-container"], [3, "id", "ngClass", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "yearSelected", "monthSelected", "viewChanged", "_userSelection"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "color", "focus", "blur", "click"]], template: function MatDatepickerContent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) { return ctx.datepicker._selectYear($event); })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) { return ctx.datepicker._selectMonth($event); })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) { return ctx.datepicker._viewChanged($event); })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) { return ctx._handleUserSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() { return ctx._closeButtonFocused = true; })("blur", function MatDatepickerContent_Template_button_blur_3_listener() { return ctx._closeButtonFocused = false; })("click", function MatDatepickerContent_Template_button_click_3_listener() { return ctx.datepicker.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx.datepicker.id)("ngClass", ctx.datepicker.panelClass)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("color", ctx.color || "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._closeButtonText);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkTrapFocus"], MatCalendar, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["CdkPortalOutlet"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"], encapsulation: 2, data: { animation: [
            matDatepickerAnimations.transformPanel,
            matDatepickerAnimations.fadeInCalendar,
        ] }, changeDetection: 0 });
MatDatepickerContent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: MatDateSelectionModel },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATE_RANGE_SELECTION_STRATEGY,] }] },
    { type: MatDatepickerIntl }
];
MatDatepickerContent.propDecorators = {
    _calendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [MatCalendar,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerContent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-datepicker-content',
                template: "<div\n  cdkTrapFocus\n  class=\"mat-datepicker-content-container\"\n  [class.mat-datepicker-content-container-with-actions]=\"_actionsPortal\">\n  <mat-calendar\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._getMinDate()\"\n    [maxDate]=\"datepicker._getMaxDate()\"\n    [dateFilter]=\"datepicker._getDateFilter()\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"_getSelected()\"\n    [dateClass]=\"datepicker.dateClass\"\n    [comparisonStart]=\"comparisonStart\"\n    [comparisonEnd]=\"comparisonEnd\"\n    [@fadeInCalendar]=\"'enter'\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (viewChanged)=\"datepicker._viewChanged($event)\"\n    (_userSelection)=\"_handleUserSelection($event)\"></mat-calendar>\n\n  <ng-template [cdkPortalOutlet]=\"_actionsPortal\"></ng-template>\n\n  <!-- Invisible close button for screen reader users. -->\n  <button\n    type=\"button\"\n    mat-raised-button\n    [color]=\"color || 'primary'\"\n    class=\"mat-datepicker-close-button\"\n    [class.cdk-visually-hidden]=\"!_closeButtonFocused\"\n    (focus)=\"_closeButtonFocused = true\"\n    (blur)=\"_closeButtonFocused = false\"\n    (click)=\"datepicker.close()\">{{ _closeButtonText }}</button>\n</div>\n",
                host: {
                    'class': 'mat-datepicker-content',
                    '[@transformPanel]': '_animationState',
                    '(@transformPanel.done)': '_animationDone.next()',
                    '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
                },
                animations: [
                    matDatepickerAnimations.transformPanel,
                    matDatepickerAnimations.fadeInCalendar,
                ],
                exportAs: 'matDatepickerContent',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                inputs: ['color'],
                styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: MatDateSelectionModel }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATE_RANGE_SELECTION_STRATEGY]
            }] }, { type: MatDatepickerIntl }]; }, { _calendar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [MatCalendar]
        }] }); })();
/** Base class for a datepicker. */
class MatDatepickerBase {
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document, _model) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        this._model = _model;
        this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** The view that the calendar should start in. */
        this.startView = 'month';
        this._touchUi = false;
        /** Preferred position of the datepicker in the X axis. */
        this.xPosition = 'start';
        /** Preferred position of the datepicker in the Y axis. */
        this.yPosition = 'below';
        this._restoreFocus = true;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */
        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */
        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the current view changes.
         */
        this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"](true);
        /** Emits when the datepicker has been opened. */
        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when the datepicker has been closed. */
        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._opened = false;
        /** The id for the datepicker calendar. */
        this.id = `mat-datepicker-${datepickerUid++}`;
        /** The element that was focused before the datepicker was opened. */
        this._focusedElementBeforeOpen = null;
        /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
        this._backdropHarnessClass = `${this.id}-backdrop`;
        /** Emits when the datepicker's state changes. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        this._scrollStrategy = scrollStrategy;
    }
    /** The date to open the calendar to initially. */
    get startAt() {
        // If an explicit startAt is set we start there, otherwise we start at whatever the currently
        // selected value is.
        return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
    }
    set startAt(value) {
        this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** Color palette to use on the datepicker's calendar. */
    get color() {
        return this._color ||
            (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
    }
    set color(value) {
        this._color = value;
    }
    /**
     * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
     * than a popup and elements have more padding to allow for bigger touch targets.
     */
    get touchUi() { return this._touchUi; }
    set touchUi(value) {
        this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
        return this._disabled === undefined && this.datepickerInput ?
            this.datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /**
     * Whether to restore focus to the previously-focused element when the calendar is closed.
     * Note that automatic focus restoration is an accessibility feature and it is recommended that
     * you provide your own equivalent, if you decide to turn it off.
     */
    get restoreFocus() { return this._restoreFocus; }
    set restoreFocus(value) {
        this._restoreFocus = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    /**
     * Classes to be passed to the date picker panel.
     * Supports string and string array values, similar to `ngClass`.
     */
    get panelClass() { return this._panelClass; }
    set panelClass(value) {
        this._panelClass = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceStringArray"])(value);
    }
    /** Whether the calendar is open. */
    get opened() { return this._opened; }
    set opened(value) {
        Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value) ? this.open() : this.close();
    }
    /** The minimum selectable date. */
    _getMinDate() {
        return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    _getMaxDate() {
        return this.datepickerInput && this.datepickerInput.max;
    }
    _getDateFilter() {
        return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    ngOnChanges(changes) {
        const positionChange = changes['xPosition'] || changes['yPosition'];
        if (positionChange && !positionChange.firstChange && this._popupRef) {
            this._setConnectedPositions(this._popupRef.getConfig().positionStrategy);
            if (this.opened) {
                this._popupRef.updatePosition();
            }
        }
        this.stateChanges.next(undefined);
    }
    ngOnDestroy() {
        this._destroyPopup();
        this.close();
        this._inputStateChanges.unsubscribe();
        this.stateChanges.complete();
    }
    /** Selects the given date */
    select(date) {
        this._model.add(date);
    }
    /** Emits the selected year in multiyear view */
    _selectYear(normalizedYear) {
        this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    _selectMonth(normalizedMonth) {
        this.monthSelected.emit(normalizedMonth);
    }
    /** Emits changed view */
    _viewChanged(view) {
        this.viewChanged.emit(view);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */
    registerInput(input) {
        if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._inputStateChanges.unsubscribe();
        this.datepickerInput = input;
        this._inputStateChanges =
            input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
        return this._model;
    }
    /**
     * Registers a portal containing action buttons with the datepicker.
     * @param portal Portal to be registered.
     */
    registerActions(portal) {
        if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('A MatDatepicker can only be associated with a single actions row.');
        }
        this._actionsPortal = portal;
    }
    /**
     * Removes a portal containing action buttons from the datepicker.
     * @param portal Portal to be removed.
     */
    removeActions(portal) {
        if (portal === this._actionsPortal) {
            this._actionsPortal = null;
        }
    }
    /** Open the calendar. */
    open() {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }
        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
        if (!this._opened) {
            return;
        }
        if (this._popupComponentRef && this._popupRef) {
            const instance = this._popupComponentRef.instance;
            instance._startExitAnimation();
            instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(() => this._destroyPopup());
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        const completeClose = () => {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };
        if (this._restoreFocus && this._focusedElementBeforeOpen &&
            typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        }
        else {
            completeClose();
        }
    }
    /** Applies the current pending selection on the popup to the model. */
    _applyPendingSelection() {
        var _a, _b;
        const instance = ((_a = this._popupComponentRef) === null || _a === void 0 ? void 0 : _a.instance) || ((_b = this._dialogRef) === null || _b === void 0 ? void 0 : _b.componentInstance);
        instance === null || instance === void 0 ? void 0 : instance._applyPendingSelection();
    }
    /** Open the calendar as a dialog. */
    _openAsDialog() {
        // Usually this would be handled by `open` which ensures that we can only have one overlay
        // open at a time, however since we reset the variables in async handlers some overlays
        // may slip through if the user opens and closes multiple times in quick succession (e.g.
        // by holding down the enter key).
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
            // These values are all the same as the defaults, but we set them explicitly so that the
            // datepicker dialog behaves consistently even if the user changed the defaults.
            hasBackdrop: true,
            disableClose: false,
            backdropClass: ['cdk-overlay-dark-backdrop', this._backdropHarnessClass],
            width: '',
            height: '',
            minWidth: '',
            minHeight: '',
            maxWidth: '80vw',
            maxHeight: '',
            position: {},
            // Disable the dialog's automatic focus capturing, because it'll go to the close button
            // automatically. The calendar will move focus on its own once it renders.
            autoFocus: false,
            // `MatDialog` has focus restoration built in, however we want to disable it since the
            // datepicker also has focus restoration for dropdown mode. We want to do this, in order
            // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
            // restores focus when the animation is finished, but the datepicker does it immediately.
            // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
            // inside the `closed` event which is dispatched immediately.
            restoreFocus: false
        });
        this._dialogRef.afterClosed().subscribe(() => this.close());
        this._forwardContentValues(this._dialogRef.componentInstance);
    }
    /** Open the calendar as a popup. */
    _openAsPopup() {
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);
        this._destroyPopup();
        this._createPopup();
        this._popupComponentRef = this._popupRef.attach(portal);
        this._forwardContentValues(this._popupComponentRef.instance);
        // Update the position once the calendar has rendered.
        this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(() => {
            this._popupRef.updatePosition();
        });
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
    _forwardContentValues(instance) {
        instance.datepicker = this;
        instance.color = this.color;
        instance._actionsPortal = this._actionsPortal;
    }
    /** Create the popup. */
    _createPopup() {
        const positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mat-datepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition();
        const overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy: this._setConnectedPositions(positionStrategy),
            hasBackdrop: true,
            backdropClass: ['mat-overlay-transparent-backdrop', this._backdropHarnessClass],
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup',
        });
        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(event => {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event)) || (this.datepickerInput &&
                Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["hasModifierKey"])(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]);
        }))).subscribe(event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
    }
    /** Destroys the current popup overlay. */
    _destroyPopup() {
        if (this._popupRef) {
            this._popupRef.dispose();
            this._popupRef = this._popupComponentRef = null;
        }
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
        const primaryX = this.xPosition === 'end' ? 'end' : 'start';
        const secondaryX = primaryX === 'start' ? 'end' : 'start';
        const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
        const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
        return strategy.withPositions([
            {
                originX: primaryX,
                originY: secondaryY,
                overlayX: primaryX,
                overlayY: primaryY
            },
            {
                originX: primaryX,
                originY: primaryY,
                overlayX: primaryX,
                overlayY: secondaryY
            },
            {
                originX: secondaryX,
                originY: secondaryY,
                overlayX: secondaryX,
                overlayY: primaryY
            },
            {
                originX: secondaryX,
                originY: primaryY,
                overlayX: secondaryX,
                overlayY: secondaryY
            }
        ]);
    }
}
MatDatepickerBase.ɵfac = function MatDatepickerBase_Factory(t) { return new (t || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDateSelectionModel)); };
MatDatepickerBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerBase, inputs: { startView: "startView", xPosition: "xPosition", yPosition: "yPosition", startAt: "startAt", color: "color", touchUi: "touchUi", disabled: "disabled", restoreFocus: "restoreFocus", panelClass: "panelClass", opened: "opened", calendarHeaderComponent: "calendarHeaderComponent", dateClass: "dateClass" }, outputs: { yearSelected: "yearSelected", monthSelected: "monthSelected", viewChanged: "viewChanged", openedStream: "opened", closedStream: "closed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
MatDatepickerBase.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATEPICKER_SCROLL_STRATEGY,] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: MatDateSelectionModel }
];
MatDatepickerBase.propDecorators = {
    calendarHeaderComponent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startAt: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    startView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    touchUi: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    restoreFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    yearSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    monthSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    viewChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    dateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    openedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['opened',] }],
    closedStream: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"], args: ['closed',] }],
    panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    opened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATEPICKER_SCROLL_STRATEGY]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: MatDateSelectionModel }]; }, { startView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], xPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], yPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], yearSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], monthSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], viewChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], openedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['opened']
        }], closedStream: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
            args: ['closed']
        }], startAt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], touchUi: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], restoreFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], opened: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], calendarHeaderComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
class MatDatepicker extends MatDatepickerBase {
}
MatDatepicker.ɵfac = function MatDatepicker_Factory(t) { return ɵMatDatepicker_BaseFactory(t || MatDatepicker); };
MatDatepicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDatepicker, selectors: [["mat-datepicker"]], exportAs: ["matDatepicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDatepicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDatepicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
const ɵMatDatepicker_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDatepicker);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-datepicker',
                template: '',
                exportAs: 'matDatepicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                providers: [
                    MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDatepicker },
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
/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
    constructor(
    /** Reference to the datepicker input component that emitted the event. */
    target, 
    /** Reference to the native input element associated with the datepicker input. */
    targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
/** Base class for datepicker inputs. */
class MatDatepickerInputBase {
    constructor(_elementRef, _dateAdapter, _dateFormats) {
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        /** Emits when a `change` event is fired on this `<input>`. */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when an `input` event is fired on this `<input>`. */
        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /** Emits when the internal state has changed */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        this._onTouched = () => { };
        this._validatorOnChange = () => { };
        this._cvaOnChange = () => { };
        this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** The form control validator for whether the input parses. */
        this._parseValidator = () => {
            return this._lastValueValid ?
                null : { 'matDatepickerParse': { 'text': this._elementRef.nativeElement.value } };
        };
        /** The form control validator for the date filter. */
        this._filterValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            return !controlValue || this._matchesFilter(controlValue) ?
                null : { 'matDatepickerFilter': true };
        };
        /** The form control validator for the min date. */
        this._minValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const min = this._getMinDate();
            return (!min || !controlValue ||
                this._dateAdapter.compareDate(min, controlValue) <= 0) ?
                null : { 'matDatepickerMin': { 'min': min, 'actual': controlValue } };
        };
        /** The form control validator for the max date. */
        this._maxValidator = (control) => {
            const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const max = this._getMaxDate();
            return (!max || !controlValue ||
                this._dateAdapter.compareDate(max, controlValue) >= 0) ?
                null : { 'matDatepickerMax': { 'max': max, 'actual': controlValue } };
        };
        /** Whether the last value set on the input was valid. */
        this._lastValueValid = false;
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._dateAdapter) {
                throw createMissingDateImplError('DateAdapter');
            }
            if (!this._dateFormats) {
                throw createMissingDateImplError('MAT_DATE_FORMATS');
            }
        }
        // Update the displayed date when the locale changes.
        this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
            this._assignValueProgrammatically(this.value);
        });
    }
    /** The value of the input. */
    get value() {
        return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    }
    set value(value) {
        this._assignValueProgrammatically(value);
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() { return !!this._disabled || this._parentDisabled(); }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this.stateChanges.next(undefined);
        }
        // We need to null check the `blur` method, because it's undefined during SSR.
        // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
        // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
        // element has been inserted.
        if (newValue && this._isInitialized && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
        }
    }
    /** Gets the base validator functions. */
    _getValidators() {
        return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */
    _registerModel(model) {
        this._model = model;
        this._valueChangesSubscription.unsubscribe();
        if (this._pendingValue) {
            this._assignValue(this._pendingValue);
        }
        this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
            if (this._shouldHandleChangeEvent(event)) {
                const value = this._getValueFromModel(event.selection);
                this._lastValueValid = this._isValidValue(value);
                this._cvaOnChange(value);
                this._onTouched();
                this._formatValue(value);
                this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
                this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
            }
        });
    }
    ngAfterViewInit() {
        this._isInitialized = true;
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._valueChangesSubscription.unsubscribe();
        this._localeSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
        return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
        this._assignValueProgrammatically(value);
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];
        if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._openPopup();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const lastValueWasValid = this._lastValueValid;
        let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
        this._lastValueValid = this._isValidValue(date);
        date = this._dateAdapter.getValidDateOrNull(date);
        if (!this._dateAdapter.sameDate(date, this.value)) {
            this._assignValue(date);
            this._cvaOnChange(date);
            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else {
            // Call the CVA change handler for invalid values
            // since this is what marks the control as dirty.
            if (value && !this.value) {
                this._cvaOnChange(date);
            }
            if (lastValueWasValid !== this._lastValueValid) {
                this._validatorOnChange();
            }
        }
    }
    _onChange() {
        this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this.value) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
        this._elementRef.nativeElement.value =
            value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */
    _assignValue(value) {
        // We may get some incoming values before the model was
        // assigned. Save the value so that we can assign it later.
        if (this._model) {
            this._assignValueToModel(value);
            this._pendingValue = null;
        }
        else {
            this._pendingValue = value;
        }
    }
    /** Whether a value is considered valid. */
    _isValidValue(value) {
        return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */
    _parentDisabled() {
        return false;
    }
    /** Programmatically assigns a value to the input. */
    _assignValueProgrammatically(value) {
        value = this._dateAdapter.deserialize(value);
        this._lastValueValid = this._isValidValue(value);
        value = this._dateAdapter.getValidDateOrNull(value);
        this._assignValue(value);
        this._formatValue(value);
    }
    /** Gets whether a value matches the current date filter. */
    _matchesFilter(value) {
        const filter = this._getDateFilter();
        return !filter || filter(value);
    }
}
MatDatepickerInputBase.ɵfac = function MatDatepickerInputBase_Factory(t) { return new (t || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8)); };
MatDatepickerInputBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerInputBase, inputs: { value: "value", disabled: "disabled" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]] });
MatDatepickerInputBase.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] }
];
MatDatepickerInputBase.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
    dateInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInputBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }]; }, { dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], dateInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }] }); })();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
    const keys = Object.keys(changes);
    for (let key of keys) {
        const { previousValue, currentValue } = changes[key];
        if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
            if (!adapter.sameDate(previousValue, currentValue)) {
                return true;
            }
        }
        else {
            return true;
        }
    }
    return false;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatDatepickerInput),
    multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(() => MatDatepickerInput),
    multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
class MatDatepickerInput extends MatDatepickerInputBase {
    constructor(elementRef, dateAdapter, dateFormats, _formField) {
        super(elementRef, dateAdapter, dateFormats);
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose(super._getValidators());
    }
    /** The datepicker that this input is associated with. */
    set matDatepicker(datepicker) {
        if (datepicker) {
            this._datepicker = datepicker;
            this._closedSubscription = datepicker.closedStream.subscribe(() => this._onTouched());
            this._registerModel(datepicker.registerInput(this));
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._validatorOnChange();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._validatorOnChange();
        }
    }
    /** Function that can be used to filter out dates within the datepicker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const wasMatchingValue = this._matchesFilter(this.value);
        this._dateFilter = value;
        if (this._matchesFilter(this.value) !== wasMatchingValue) {
            this._validatorOnChange();
        }
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
        return this.value;
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        this._closedSubscription.unsubscribe();
    }
    /** Opens the associated datepicker. */
    _openPopup() {
        if (this._datepicker) {
            this._datepicker.open();
        }
    }
    _getValueFromModel(modelValue) {
        return modelValue;
    }
    _assignValueToModel(value) {
        if (this._model) {
            this._model.updateSelection(value, this);
        }
    }
    /** Gets the input's minimum date. */
    _getMinDate() {
        return this._min;
    }
    /** Gets the input's maximum date. */
    _getMaxDate() {
        return this._max;
    }
    /** Gets the input's date filtering function. */
    _getDateFilter() {
        return this._dateFilter;
    }
    _shouldHandleChangeEvent(event) {
        return event.source !== this;
    }
}
MatDatepickerInput.ɵfac = function MatDatepickerInput_Factory(t) { return new (t || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8)); };
MatDatepickerInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerInput, selectors: [["input", "matDatepicker", ""]], hostAttrs: [1, "mat-datepicker-input"], hostVars: 6, hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatDatepickerInput_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MatDatepickerInput_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", (ctx._datepicker == null ? null : ctx._datepicker.opened) && ctx._datepicker.id || null)("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
    } }, inputs: { matDatepicker: "matDatepicker", min: "min", max: "max", dateFilter: ["matDatepickerFilter", "dateFilter"] }, exportAs: ["matDatepickerInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            MAT_DATEPICKER_VALUE_ACCESSOR,
            MAT_DATEPICKER_VALIDATORS,
            { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatepickerInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatDatepickerInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"],] }] }
];
MatDatepickerInput.propDecorators = {
    matDatepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matDatepickerFilter',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'input[matDatepicker]',
                providers: [
                    MAT_DATEPICKER_VALUE_ACCESSOR,
                    MAT_DATEPICKER_VALIDATORS,
                    { provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"], useExisting: MatDatepickerInput },
                ],
                host: {
                    'class': 'mat-datepicker-input',
                    '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
                    '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
                    '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': '_datepicker ? _datepicker.id : null',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)'
                },
                exportAs: 'matDatepickerInput'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }] }]; }, { matDatepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['matDatepickerFilter']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Can be used to override the icon of a `matDatepickerToggle`. */
class MatDatepickerToggleIcon {
}
MatDatepickerToggleIcon.ɵfac = function MatDatepickerToggleIcon_Factory(t) { return new (t || MatDatepickerToggleIcon)(); };
MatDatepickerToggleIcon.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerToggleIcon, selectors: [["", "matDatepickerToggleIcon", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggleIcon, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matDatepickerToggleIcon]'
            }]
    }], null, null); })();
class MatDatepickerToggle {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    /** Whether the toggle button is disabled. */
    get disabled() {
        if (this._disabled === undefined && this.datepicker) {
            return this.datepicker.disabled;
        }
        return !!this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    ngOnChanges(changes) {
        if (changes['datepicker']) {
            this._watchStateChanges();
        }
    }
    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
        this._watchStateChanges();
    }
    _open(event) {
        if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ?
            this.datepicker.datepickerInput.stateChanges : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        const datepickerToggled = this.datepicker ?
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) :
            Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
        this._stateChanges.unsubscribe();
        this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MatDatepickerToggle.ɵfac = function MatDatepickerToggle_Factory(t) { return new (t || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinjectAttribute"]('tabindex')); };
MatDatepickerToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDatepickerToggle, selectors: [["mat-datepicker-toggle"]], contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MatDatepickerToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mat-datepicker-toggle"], hostVars: 8, hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) { return ctx._open($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
    } }, inputs: { tabIndex: "tabIndex", disabled: "disabled", datepicker: ["for", "datepicker"], ariaLabel: ["aria-label", "ariaLabel"], disableRipple: "disableRipple" }, exportAs: ["matDatepickerToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["button", ""], ["class", "mat-datepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]], template: function MatDatepickerToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MatDatepickerToggle__svg_svg_2_Template, 2, 0, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx._customIcon);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerToggle.ctorParameters = () => [
    { type: MatDatepickerIntl },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"], args: ['tabindex',] }] }
];
MatDatepickerToggle.propDecorators = {
    datepicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['for',] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disableRipple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    _customIcon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatDatepickerToggleIcon,] }],
    _button: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['button',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-datepicker-toggle',
                template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"ariaLabel || _intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
                host: {
                    'class': 'mat-datepicker-toggle',
                    '[attr.tabindex]': 'null',
                    '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
                    '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
                    '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
                    // Used by the test harness to tie this toggle to its datepicker.
                    '[attr.data-mat-calendar]': 'datepicker ? datepicker.id : null',
                    // Bind the `click` on the host, rather than the inner `button`, so that we can call
                    // `stopPropagation` on it without affecting the user's `click` handlers. We need to stop
                    // it so that the input doesn't get focused automatically by the form field (See #21836).
                    '(click)': '_open($event)'
                },
                exportAs: 'matDatepickerToggle',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}\n"]
            }]
    }], function () { return [{ type: MatDatepickerIntl }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
                args: ['tabindex']
            }] }]; }, { tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], datepicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['for']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
            args: ['aria-label']
        }], disableRipple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _customIcon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatDatepickerToggleIcon]
        }], _button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: ['button']
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
class MatDateRangeInputPartBase extends MatDatepickerInputBase {
    constructor(_rangeInput, elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
        super(elementRef, dateAdapter, dateFormats);
        this._rangeInput = _rangeInput;
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._injector = _injector;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
    }
    ngOnInit() {
        // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
        // injecting its `NgControl` so that the error state is handled correctly. This introduces a
        // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
        // itself. Usually we can work around it for the CVA, but there's no API to do it for the
        // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
        // everything has been resolved.
        const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControl"], null, _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectFlags"].Self);
        if (ngControl) {
            this.ngControl = ngControl;
        }
    }
    ngDoCheck() {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
    }
    /** Gets whether the input is empty. */
    isEmpty() {
        return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */
    _getPlaceholder() {
        return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */
    focus() {
        this._elementRef.nativeElement.focus();
    }
    /** Handles `input` events on the input element. */
    _onInput(value) {
        super._onInput(value);
        this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */
    _openPopup() {
        this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */
    _getMinDate() {
        return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */
    _getMaxDate() {
        return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */
    _getDateFilter() {
        return this._rangeInput.dateFilter;
    }
    _parentDisabled() {
        return this._rangeInput._groupDisabled;
    }
    _shouldHandleChangeEvent({ source }) {
        return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
    }
    _assignValueProgrammatically(value) {
        super._assignValueProgrammatically(value);
        const opposite = (this === this._rangeInput._startInput ? this._rangeInput._endInput :
            this._rangeInput._startInput);
        opposite === null || opposite === void 0 ? void 0 : opposite._validatorOnChange();
    }
}
MatDateRangeInputPartBase.ɵfac = function MatDateRangeInputPartBase_Factory(t) { return new (t || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8)); };
MatDateRangeInputPartBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDateRangeInputPartBase, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatDateRangeInputPartBase.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInputPartBase, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }]; }, null); })();
const _MatDateRangeInputBase = 
// Needs to be `as any`, because the base class is abstract.
Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinErrorState"])(MatDateRangeInputPartBase);
/** Input for entering the start date in a `mat-date-range-input`. */
class MatStartDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the start date isn't after the end date. */
        this._startValidator = (control) => {
            const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const end = this._model ? this._model.selection.end : null;
            return (!start || !end ||
                this._dateAdapter.compareDate(start, end) <= 0) ?
                null : { 'matStartDateInvalid': { 'end': end, 'actual': start } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([...super._getValidators(), this._startValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.start;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.start) ? !!change.selection.start :
                !change.selection.start ||
                    !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(value, this._model.selection.end);
            this._model.updateSelection(range, this);
        }
    }
    _formatValue(value) {
        super._formatValue(value);
        // Any time the input value is reformatted we need to tell the parent.
        this._rangeInput._handleChildValueChange();
    }
    /** Gets the value that should be used when mirroring the input's size. */
    getMirrorValue() {
        const element = this._elementRef.nativeElement;
        const value = element.value;
        return value.length > 0 ? value : element.placeholder;
    }
}
MatStartDate.ɵfac = function MatStartDate_Factory(t) { return new (t || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8)); };
MatStartDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatStartDate, selectors: [["input", "matStartDate", ""]], hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"], hostVars: 6, hostBindings: function MatStartDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatStartDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatStartDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatStartDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx._rangeInput.id)("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], useExisting: MatStartDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], useExisting: MatStartDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatStartDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatStartDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'input[matStartDate]',
                host: {
                    'class': 'mat-start-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.id]': '_rangeInput.id',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], useExisting: MatStartDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], useExisting: MatStartDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }]; }, null); })();
/** Input for entering the end date in a `mat-date-range-input`. */
class MatEndDate extends _MatDateRangeInputBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
        // TODO(crisbeto): this constructor shouldn't be necessary, but ViewEngine doesn't seem to
        // handle DI correctly when it is inherited from `MatDateRangeInputPartBase`. We can drop this
        // constructor once ViewEngine is removed.
        super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
        /** Validator that checks that the end date isn't before the start date. */
        this._endValidator = (control) => {
            const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
            const start = this._model ? this._model.selection.start : null;
            return (!end || !start ||
                this._dateAdapter.compareDate(end, start) >= 0) ?
                null : { 'matEndDateInvalid': { 'start': start, 'actual': end } };
        };
        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([...super._getValidators(), this._endValidator]);
    }
    ngOnInit() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngOnInit();
    }
    ngDoCheck() {
        // Normally this happens automatically, but it seems to break if not added explicitly when all
        // of the criteria below are met:
        // 1) The class extends a TS mixin.
        // 2) The application is running in ViewEngine.
        // 3) The application is being transpiled through tsickle.
        // This can be removed once google3 is completely migrated to Ivy.
        super.ngDoCheck();
    }
    _getValueFromModel(modelValue) {
        return modelValue.end;
    }
    _shouldHandleChangeEvent(change) {
        var _a;
        if (!super._shouldHandleChangeEvent(change)) {
            return false;
        }
        else {
            return !((_a = change.oldValue) === null || _a === void 0 ? void 0 : _a.end) ? !!change.selection.end :
                !change.selection.end ||
                    !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
        }
    }
    _assignValueToModel(value) {
        if (this._model) {
            const range = new DateRange(this._model.selection.start, value);
            this._model.updateSelection(range, this);
        }
    }
    _onKeydown(event) {
        // If the user is pressing backspace on an empty end input, move focus back to the start.
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["BACKSPACE"] && !this._elementRef.nativeElement.value) {
            this._rangeInput._startInput.focus();
        }
        super._onKeydown(event);
    }
}
MatEndDate.ɵfac = function MatEndDate_Factory(t) { return new (t || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"], 8)); };
MatEndDate.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatEndDate, selectors: [["input", "matEndDate", ""]], hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"], hostVars: 5, hostBindings: function MatEndDate_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MatEndDate_change_HostBindingHandler() { return ctx._onChange(); })("keydown", function MatEndDate_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("blur", function MatEndDate_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵhostProperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
    } }, inputs: { errorStateMatcher: "errorStateMatcher" }, outputs: { dateChange: "dateChange", dateInput: "dateInput" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], useExisting: MatEndDate, multi: true },
            { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], useExisting: MatEndDate, multi: true }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]] });
MatEndDate.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [MAT_DATE_RANGE_INPUT_PARENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatEndDate, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: 'input[matEndDate]',
                host: {
                    'class': 'mat-end-date mat-date-range-input-inner',
                    '[disabled]': 'disabled',
                    '(input)': '_onInput($event.target.value)',
                    '(change)': '_onChange()',
                    '(keydown)': '_onKeydown($event)',
                    '[attr.aria-haspopup]': '_rangeInput.rangePicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_rangeInput.rangePicker?.opened && _rangeInput.rangePicker.id) || null',
                    '[attr.min]': '_getMinDate() ? _dateAdapter.toIso8601(_getMinDate()) : null',
                    '[attr.max]': '_getMaxDate() ? _dateAdapter.toIso8601(_getMaxDate()) : null',
                    '(blur)': '_onBlur()',
                    'type': 'text'
                },
                providers: [
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"], useExisting: MatEndDate, multi: true },
                    { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"], useExisting: MatEndDate, multi: true }
                ],
                // These need to be specified explicitly, because some tooling doesn't
                // seem to pick them up from the base class. See #20932.
                outputs: ['dateChange', 'dateInput'],
                inputs: ['errorStateMatcher']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [MAT_DATE_RANGE_INPUT_PARENT]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["ErrorStateMatcher"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injector"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgForm"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormGroupDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let nextUniqueId = 0;
class MatDateRangeInput {
    constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._formField = _formField;
        this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** Unique ID for the input. */
        this.id = `mat-date-range-input-${nextUniqueId++}`;
        /** Whether the control is focused. */
        this.focused = false;
        /** Name of the form control. */
        this.controlType = 'mat-date-range-input';
        this._groupDisabled = false;
        /** Value for the `aria-describedby` attribute of the inputs. */
        this._ariaDescribedBy = null;
        /** Separator text to be shown between the inputs. */
        this.separator = '–';
        /** Start of the comparison range that should be shown in the calendar. */
        this.comparisonStart = null;
        /** End of the comparison range that should be shown in the calendar. */
        this.comparisonEnd = null;
        /** Emits when the input's state has changed. */
        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw createMissingDateImplError('DateAdapter');
        }
        // The datepicker module can be used both with MDC and non-MDC form fields. We have
        // to conditionally add the MDC input class so that the range picker looks correctly.
        if (_formField === null || _formField === void 0 ? void 0 : _formField._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
            _elementRef.nativeElement.classList.add('mat-mdc-input-element');
        }
        // TODO(crisbeto): remove `as any` after #18206 lands.
        this.ngControl = control;
    }
    /** Current value of the range input. */
    get value() {
        return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */
    get placeholder() {
        var _a, _b;
        const start = ((_a = this._startInput) === null || _a === void 0 ? void 0 : _a._getPlaceholder()) || '';
        const end = ((_b = this._endInput) === null || _b === void 0 ? void 0 : _b._getPlaceholder()) || '';
        return (start || end) ? `${start} ${this.separator} ${end}` : '';
    }
    /** The range picker that this input is associated with. */
    get rangePicker() { return this._rangePicker; }
    set rangePicker(rangePicker) {
        if (rangePicker) {
            this._model = rangePicker.registerInput(this);
            this._rangePicker = rangePicker;
            this._closedSubscription.unsubscribe();
            this._closedSubscription = rangePicker.closedStream.subscribe(() => {
                var _a, _b;
                (_a = this._startInput) === null || _a === void 0 ? void 0 : _a._onTouched();
                (_b = this._endInput) === null || _b === void 0 ? void 0 : _b._onTouched();
            });
            this._registerModel(this._model);
        }
    }
    /** Whether the input is required. */
    get required() { return !!this._required; }
    set required(value) {
        this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
    }
    /** Function that can be used to filter out dates within the date range picker. */
    get dateFilter() { return this._dateFilter; }
    set dateFilter(value) {
        const start = this._startInput;
        const end = this._endInput;
        const wasMatchingStart = start && start._matchesFilter(start.value);
        const wasMatchingEnd = end && end._matchesFilter(start.value);
        this._dateFilter = value;
        if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
            start._validatorOnChange();
        }
        if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
            end._validatorOnChange();
        }
    }
    /** The minimum valid date. */
    get min() { return this._min; }
    set min(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._min)) {
            this._min = validValue;
            this._revalidate();
        }
    }
    /** The maximum valid date. */
    get max() { return this._max; }
    set max(value) {
        const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
        if (!this._dateAdapter.sameDate(validValue, this._max)) {
            this._max = validValue;
            this._revalidate();
        }
    }
    /** Whether the input is disabled. */
    get disabled() {
        return (this._startInput && this._endInput) ?
            (this._startInput.disabled && this._endInput.disabled) :
            this._groupDisabled;
    }
    set disabled(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        if (newValue !== this._groupDisabled) {
            this._groupDisabled = newValue;
            this.stateChanges.next(undefined);
        }
    }
    /** Whether the input is in an error state. */
    get errorState() {
        if (this._startInput && this._endInput) {
            return this._startInput.errorState || this._endInput.errorState;
        }
        return false;
    }
    /** Whether the datepicker input is empty. */
    get empty() {
        const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
        const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
        return startEmpty && endEmpty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    setDescribedByIds(ids) {
        this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    onContainerClick() {
        if (!this.focused && !this.disabled) {
            if (!this._model || !this._model.selection.start) {
                this._startInput.focus();
            }
            else {
                this._endInput.focus();
            }
        }
    }
    ngAfterContentInit() {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
            if (!this._startInput) {
                throw Error('mat-date-range-input must contain a matStartDate input');
            }
            if (!this._endInput) {
                throw Error('mat-date-range-input must contain a matEndDate input');
            }
        }
        if (this._model) {
            this._registerModel(this._model);
        }
        // We don't need to unsubscribe from this, because we
        // know that the input streams will be completed on destroy.
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
            this.stateChanges.next(undefined);
        });
    }
    ngOnChanges(changes) {
        if (dateInputsHaveChanged(changes, this._dateAdapter)) {
            this.stateChanges.next(undefined);
        }
    }
    ngOnDestroy() {
        this._closedSubscription.unsubscribe();
        this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */
    getStartValue() {
        return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */
    getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the value that is used to mirror the state input. */
    _getInputMirrorValue() {
        return this._startInput ? this._startInput.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */
    _shouldHidePlaceholders() {
        return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */
    _handleChildValueChange() {
        this.stateChanges.next(undefined);
        this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */
    _openDatepicker() {
        if (this._rangePicker) {
            this._rangePicker.open();
        }
    }
    /** Whether the separate text should be hidden. */
    _shouldHideSeparator() {
        return (!this._formField || (this._formField.getLabelId() &&
            !this._formField._shouldLabelFloat())) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */
    _getAriaLabelledby() {
        const formField = this._formField;
        return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    /** Updates the focused state of the range input. */
    _updateFocus(origin) {
        this.focused = origin !== null;
        this.stateChanges.next();
    }
    /** Re-runs the validators on the start/end inputs. */
    _revalidate() {
        if (this._startInput) {
            this._startInput._validatorOnChange();
        }
        if (this._endInput) {
            this._endInput._validatorOnChange();
        }
    }
    /** Registers the current date selection model with the start/end inputs. */
    _registerModel(model) {
        if (this._startInput) {
            this._startInput._registerModel(model);
        }
        if (this._endInput) {
            this._endInput._registerModel(model);
        }
    }
}
MatDateRangeInput.ɵfac = function MatDateRangeInput_Factory(t) { return new (t || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"], 8)); };
MatDateRangeInput.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDateRangeInput, selectors: [["mat-date-range-input"]], contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatStartDate, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵcontentQuery"](dirIndex, MatEndDate, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
    } }, hostAttrs: ["role", "group", 1, "mat-date-range-input"], hostVars: 8, hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", null)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
    } }, inputs: { separator: "separator", comparisonStart: "comparisonStart", comparisonEnd: "comparisonEnd", rangePicker: "rangePicker", required: "required", dateFilter: "dateFilter", min: "min", max: "max", disabled: "disabled" }, exportAs: ["matDateRangeInput"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"], useExisting: MatDateRangeInput },
            { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c6, decls: 9, vars: 4, consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-start-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-end-wrapper"]], template: function MatDateRangeInput_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"](_c5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) { return ctx._updateFocus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](8, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._getInputMirrorValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.separator);
    } }, directives: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["CdkMonitorFocus"]], styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"], encapsulation: 2, changeDetection: 0 });
MatDateRangeInput.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"] }] },
    { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }] },
    { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"],] }] }
];
MatDateRangeInput.propDecorators = {
    rangePicker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    dateFilter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    separator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    comparisonEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
    _startInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatStartDate,] }],
    _endInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [MatEndDate,] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangeInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-date-range-input',
                template: "<div\n  class=\"mat-date-range-input-container\"\n  cdkMonitorSubtreeFocus\n  (cdkFocusChange)=\"_updateFocus($event)\">\n  <div class=\"mat-date-range-input-start-wrapper\">\n    <ng-content select=\"input[matStartDate]\"></ng-content>\n    <span\n      class=\"mat-date-range-input-mirror\"\n      aria-hidden=\"true\">{{_getInputMirrorValue()}}</span>\n  </div>\n\n  <span\n    class=\"mat-date-range-input-separator\"\n    [class.mat-date-range-input-separator-hidden]=\"_shouldHideSeparator()\">{{separator}}</span>\n\n  <div class=\"mat-date-range-input-end-wrapper\">\n    <ng-content select=\"input[matEndDate]\"></ng-content>\n  </div>\n</div>\n\n",
                exportAs: 'matDateRangeInput',
                host: {
                    'class': 'mat-date-range-input',
                    '[class.mat-date-range-input-hide-placeholders]': '_shouldHidePlaceholders()',
                    '[class.mat-date-range-input-required]': 'required',
                    '[attr.id]': 'null',
                    'role': 'group',
                    '[attr.aria-labelledby]': '_getAriaLabelledby()',
                    '[attr.aria-describedby]': '_ariaDescribedBy',
                    // Used by the test harness to tie this input to its calendar. We can't depend on
                    // `aria-owns` for this, because it's only defined while the calendar is open.
                    '[attr.data-mat-calendar]': 'rangePicker ? rangePicker.id : null'
                },
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                providers: [
                    { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldControl"], useExisting: MatDateRangeInput },
                    { provide: MAT_DATE_RANGE_INPUT_PARENT, useExisting: MatDateRangeInput },
                ],
                styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px}.mat-date-range-input-separator-hidden{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-inner{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%}.mat-date-range-input-inner::-ms-clear,.mat-date-range-input-inner::-ms-reveal{display:none}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-date-range-input-start-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-start-wrapper .mat-date-range-input-inner{position:absolute;top:0;left:0}.mat-date-range-input-end-wrapper{flex-grow:1;max-width:calc(50% - 4px)}.mat-form-field-type-mat-date-range-input .mat-form-field-infix{width:200px}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ControlContainer"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Self"]
            }] }, { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }] }, { type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
            }] }]; }, { separator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], comparisonEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], rangePicker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], dateFilter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
        }], _startInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatStartDate]
        }], _endInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
            args: [MatEndDate]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
class MatDateRangePicker extends MatDatepickerBase {
    _forwardContentValues(instance) {
        super._forwardContentValues(instance);
        const input = this.datepickerInput;
        if (input) {
            instance.comparisonStart = input.comparisonStart;
            instance.comparisonEnd = input.comparisonEnd;
        }
    }
}
MatDateRangePicker.ɵfac = function MatDateRangePicker_Factory(t) { return ɵMatDateRangePicker_BaseFactory(t || MatDateRangePicker); };
MatDateRangePicker.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDateRangePicker, selectors: [["mat-date-range-picker"]], exportAs: ["matDateRangePicker"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([
            MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
            MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
            { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]], decls: 0, vars: 0, template: function MatDateRangePicker_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
const ɵMatDateRangePicker_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetInheritedFactory"](MatDateRangePicker);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDateRangePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-date-range-picker',
                template: '',
                exportAs: 'matDateRangePicker',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                providers: [
                    MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER,
                    MAT_CALENDAR_RANGE_STRATEGY_PROVIDER,
                    { provide: MatDatepickerBase, useExisting: MatDateRangePicker },
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
/** Button that will close the datepicker and assign the current selection to the data model. */
class MatDatepickerApply {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
    _applySelection() {
        this._datepicker._applyPendingSelection();
        this._datepicker.close();
    }
}
MatDatepickerApply.ɵfac = function MatDatepickerApply_Factory(t) { return new (t || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerApply.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerApply, selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]], hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() { return ctx._applySelection(); });
    } } });
MatDatepickerApply.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerApply, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matDatepickerApply], [matDateRangePickerApply]',
                host: { '(click)': '_applySelection()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/** Button that will close the datepicker and discard the current selection. */
class MatDatepickerCancel {
    constructor(_datepicker) {
        this._datepicker = _datepicker;
    }
}
MatDatepickerCancel.ɵfac = function MatDatepickerCancel_Factory(t) { return new (t || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerBase)); };
MatDatepickerCancel.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: MatDatepickerCancel, selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]], hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() { return ctx._datepicker.close(); });
    } } });
MatDatepickerCancel.ctorParameters = () => [
    { type: MatDatepickerBase }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerCancel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
        args: [{
                selector: '[matDatepickerCancel], [matDateRangePickerCancel]',
                host: { '(click)': '_datepicker.close()' }
            }]
    }], function () { return [{ type: MatDatepickerBase }]; }, null); })();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
class MatDatepickerActions {
    constructor(_datepicker, _viewContainerRef) {
        this._datepicker = _datepicker;
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["TemplatePortal"](this._template, this._viewContainerRef);
        this._datepicker.registerActions(this._portal);
    }
    ngOnDestroy() {
        var _a;
        this._datepicker.removeActions(this._portal);
        // Needs to be null checked since we initialize it in `ngAfterViewInit`.
        if (this._portal && this._portal.isAttached) {
            (_a = this._portal) === null || _a === void 0 ? void 0 : _a.detach();
        }
    }
}
MatDatepickerActions.ɵfac = function MatDatepickerActions_Factory(t) { return new (t || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"])); };
MatDatepickerActions.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MatDatepickerActions, selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]], viewQuery: function MatDatepickerActions_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
    } }, ngContentSelectors: _c1, decls: 1, vars: 0, consts: [[1, "mat-datepicker-actions"]], template: function MatDatepickerActions_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
    } }, styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"], encapsulation: 2, changeDetection: 0 });
MatDatepickerActions.ctorParameters = () => [
    { type: MatDatepickerBase },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }
];
MatDatepickerActions.propDecorators = {
    _template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerActions, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'mat-datepicker-actions, mat-date-range-picker-actions',
                template: `
    <ng-template>
      <div class="mat-datepicker-actions">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-button-base+.mat-button-base{margin-left:0;margin-right:8px}\n"]
            }]
    }], function () { return [{ type: MatDatepickerBase }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"] }]; }, { _template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["TemplateRef"]]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatDatepickerModule {
}
MatDatepickerModule.ɵfac = function MatDatepickerModule_Factory(t) { return new (t || MatDatepickerModule)(); };
MatDatepickerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: MatDatepickerModule });
MatDatepickerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        MatDatepickerIntl,
        MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
        ], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](MatDatepickerModule, { declarations: function () { return [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"]]; }, exports: function () { return [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader, MatDateRangeInput, MatStartDate, MatEndDate, MatDateRangePicker, MatDatepickerActions, MatDatepickerCancel, MatDatepickerApply]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MatDatepickerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatCommonModule"],
                ],
                exports: [
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"],
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                declarations: [
                    MatCalendar,
                    MatCalendarBody,
                    MatDatepicker,
                    MatDatepickerContent,
                    MatDatepickerInput,
                    MatDatepickerToggle,
                    MatDatepickerToggleIcon,
                    MatMonthView,
                    MatYearView,
                    MatMultiYearView,
                    MatCalendarHeader,
                    MatDateRangeInput,
                    MatStartDate,
                    MatEndDate,
                    MatDateRangePicker,
                    MatDatepickerActions,
                    MatDatepickerCancel,
                    MatDatepickerApply
                ],
                providers: [
                    MatDatepickerIntl,
                    MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    MatDatepickerContent,
                    MatCalendarHeader,
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

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=datepicker.js.map

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
        let route = this.page == 'ORDER' ? 'business/order' : 'business/quote';
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
    return to.concat(ar || Array.prototype.slice.call(from));
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