(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-src-lib-order-module"],{

/***/ "4yWC":
/*!*********************************************************************************!*\
  !*** ./projects/order/src/lib/components/order-details/order-detail.service.ts ***!
  \*********************************************************************************/
/*! exports provided: OrderDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailService", function() { return OrderDetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");


class OrderDetailService {
    constructor(_http) {
        this._http = _http;
    }
    getOrderSummary(orderId) {
        return this._http.sendGETRequest('' + orderId);
    }
}
OrderDetailService.ɵfac = function OrderDetailService_Factory(t) { return new (t || OrderDetailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
OrderDetailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OrderDetailService, factory: OrderDetailService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EN//":
/*!*************************************************!*\
  !*** ./projects/order/src/lib/order.routing.ts ***!
  \*************************************************/
/*! exports provided: orderRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderRouting", function() { return orderRouting; });
/* harmony import */ var projects_quote_src_lib_common_components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/quote/src/lib/common/components/floor-plan-details/floor-plan-details.component */ "mc8h");
/* harmony import */ var projects_quote_src_lib_components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/quote/src/lib/components/floor-plan-unit/floor-plan-unit.component */ "K5TM");
/* harmony import */ var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/order-details/order-details.component */ "k++2");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order-list/order-list.component */ "o2CL");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/order/order.component */ "yCmn");





const orderRouting = [
    {
        path: '',
        component: _components_order_order_component__WEBPACK_IMPORTED_MODULE_4__["OrderComponent"],
        children: [
            {
                path: '',
                component: _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_3__["OrderListComponent"],
            },
            {
                path: ':id',
                component: _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_2__["OrderDetailsComponent"],
            },
            {
                path: ':id/:fpId',
                component: projects_quote_src_lib_common_components_floor_plan_details_floor_plan_details_component__WEBPACK_IMPORTED_MODULE_0__["FloorPlanDetailsComponent"],
            }, {
                path: ':id/floor-plan-unit/:fpId/unit/:unit_id',
                component: projects_quote_src_lib_components_floor_plan_unit_floor_plan_unit_component__WEBPACK_IMPORTED_MODULE_1__["FloorPlanUnitComponent"],
            }
        ],
    },
];


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

/***/ "Wj4W":
/*!****************************************************************************!*\
  !*** ./projects/order/src/lib/components/order-list/order-list.service.ts ***!
  \****************************************************************************/
/*! exports provided: OrderListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListService", function() { return OrderListService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");




class OrderListService {
    constructor(_http, _env) {
        this._http = _http;
        this._env = _env;
    }
    /**
     * Get Order list
     * @param userId
     * @param sourceType
     * @param type
     * @returns
     */
    getOrderList(userId, sourceType = 'all', type = 'orders') {
        let url = 'load/customer/quotes?' +
            'user_id=' +
            userId +
            '&source_type=' +
            sourceType +
            '&type=' +
            type;
        return this._http
            .sendGETRequest(this._env.getEndPoint() + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.quote));
    }
}
OrderListService.ɵfac = function OrderListService_Factory(t) { return new (t || OrderListService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"])); };
OrderListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderListService, factory: OrderListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "k++2":
/*!************************************************************************************!*\
  !*** ./projects/order/src/lib/components/order-details/order-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-detail.service */ "4yWC");
/* harmony import */ var _quote_src_lib_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../quote/src/lib/common/components/quote-header/quote-header.component */ "Tu8c");




class OrderDetailsComponent {
    constructor(_route, _orderDetailService) {
        this._route = _route;
        this._orderDetailService = _orderDetailService;
        this.orderId = 0;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.orderId = params.id;
        });
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_order_detail_service__WEBPACK_IMPORTED_MODULE_2__["OrderDetailService"])); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["lib-order-details"]], decls: 1, vars: 3, consts: [[3, "quoteId", "iconPath", "text"]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-quote-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("quoteId", ctx.orderId)("iconPath", "assets/order/images/order-icon.png")("text", "ORDER");
    } }, directives: [_quote_src_lib_common_components_quote_header_quote_header_component__WEBPACK_IMPORTED_MODULE_3__["QuoteHeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "o2CL":
/*!******************************************************************************!*\
  !*** ./projects/order/src/lib/components/order-list/order-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _order_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-list.service */ "Wj4W");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/src/lib/components/banner/banner.component */ "zukg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");










class OrderListComponent {
    constructor(_orderListService, _router, _user) {
        this._orderListService = _orderListService;
        this._router = _router;
        this._user = _user;
        this.orderInfo = {
            bannerIconImg: 'assets/dashboard/images/order.svg',
            bannerIconImgTxt: 'Order Icon',
            bannerImg: 'assets/order/images/order-page.jpg',
            bannerImgTxt: 'Order Banner Image',
            bannerBottomTxt: 'Style & create a look from our collection of designer furniture',
            text: 'Order',
        };
        this.selectedButton = 'all';
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
            { field: 'order_status', headerName: 'Order Status' },
        ];
        this.rowData = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]();
        this.gridOptions = {
            onRowClicked: (param) => this.onRowClicked(param),
            rowHeight: 50,
            onGridReady: (api) => this.onGridReady(api),
        };
    }
    ngOnInit() { }
    /**
     * On row Click
     * @param param
     */
    onRowClicked(param) {
        var _a;
        let orderId = (_a = param === null || param === void 0 ? void 0 : param.data) === null || _a === void 0 ? void 0 : _a.sgid;
        if (orderId) {
            this._router.navigate(['order', orderId]);
        }
    }
    /**
     * On grid ready
     * @param api
     */
    onGridReady(api) {
        api.api.sizeColumnsToFit();
        this.getOrderList('all');
    }
    /**
     * get Order List
     * @param sourceType
     */
    getOrderList(sourceType) {
        this.selectedButton = sourceType;
        const id = this._user.getUser().getId();
        this.rowData = this._orderListService.getOrderList(id, sourceType);
    }
}
OrderListComponent.ɵfac = function OrderListComponent_Factory(t) { return new (t || OrderListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_order_list_service__WEBPACK_IMPORTED_MODULE_2__["OrderListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_4__["UserService"])); };
OrderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderListComponent, selectors: [["lib-order-list"]], decls: 9, vars: 17, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch", 1, "orders"], [3, "iconSrc", "iconAltTxt", "leftTxt", "src", "altTxt", "bottomTxt"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "orders-filter"], ["mat-flat-button", "", 3, "color", "click"], [1, "ag-theme-alpine", "orders-table", 2, "height", "500px", 3, "gridOptions", "rowData", "columnDefs"]], template: function OrderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-banner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_3_listener() { return ctx.getOrderList("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " ALL ORDERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OrderListComponent_Template_button_click_5_listener() { return ctx.getOrderList("my"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " MY ORDERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ag-grid-angular", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("iconSrc", ctx.orderInfo.bannerIconImg)("iconAltTxt", ctx.orderInfo.bannerIconImgTxt)("leftTxt", ctx.orderInfo.text)("src", ctx.orderInfo.bannerImg)("altTxt", ctx.orderInfo.bannerImgTxt)("bottomTxt", ctx.orderInfo.bannerBottomTxt);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.selectedButton === "my" ? "#F3F3F3" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.selectedButton === "all" ? "accent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx.selectedButton === "all" ? "#F3F3F3" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.selectedButton === "my" ? "accent" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("gridOptions", ctx.gridOptions)("rowData", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, ctx.rowData))("columnDefs", ctx.columnDefs);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _core_src_lib_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_8__["AgGridAngular"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".orders-filter[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.orders-filter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: \"Brandon Grotesque-bld\";\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 2.0625rem;\n  padding: 1rem 4rem;\n}\n.orders-table[_ngcontent-%COMP%] {\n  margin: 0 4rem;\n  background: #f8f8f8;\n  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25) !important;\n  border-radius: 7px;\n  margin-bottom: 4rem;\n}\n.banner-footer[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3JkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUFBSjtBQUNJO0VBQ0Usb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUNOO0FBRUU7RUFDRSxjQUFBO0VBRUEsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjtBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFERiIsImZpbGUiOiJvcmRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yZGVycyB7XHJcbiAgJi1maWx0ZXIge1xyXG4gICAgcGFkZGluZzogNHJlbSAwO1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFwiQnJhbmRvbiBHcm90ZXNxdWUtYmxkXCI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIuMDYyNXJlbTtcclxuICAgICAgcGFkZGluZzogMXJlbSA0cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLXRhYmxlIHtcclxuICAgIG1hcmdpbjogMCA0cmVtO1xyXG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xyXG4gIH1cclxufVxyXG4uYmFubmVyLWZvb3RlciB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "u2vy":
/*!************************************************!*\
  !*** ./projects/order/src/lib/order.module.ts ***!
  \************************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_order_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order/order.component */ "yCmn");
/* harmony import */ var _order_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.routing */ "EN//");
/* harmony import */ var _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/order-list/order-list.component */ "o2CL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/order-details/order-details.component */ "k++2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class OrderModule {
}
OrderModule.ɵfac = function OrderModule_Factory(t) { return new (t || OrderModule)(); };
OrderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: OrderModule });
OrderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_8__["QuoteCommonModule"],
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_order_routing__WEBPACK_IMPORTED_MODULE_4__["orderRouting"])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](OrderModule, { declarations: [_components_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"],
        _components_order_list_order_list_component__WEBPACK_IMPORTED_MODULE_5__["OrderListComponent"],
        _components_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
        projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_8__["QuoteCommonModule"],
        projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_components_order_order_component__WEBPACK_IMPORTED_MODULE_3__["OrderComponent"]] }); })();


/***/ }),

/***/ "yCmn":
/*!********************************************************************!*\
  !*** ./projects/order/src/lib/components/order/order.component.ts ***!
  \********************************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _order_details_order_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../order-details/order-detail.service */ "4yWC");



class OrderComponent {
    constructor(_route, _orderDetailService) {
        this._route = _route;
        this._orderDetailService = _orderDetailService;
        this.orderId = 0;
    }
    ngOnInit() {
        this._route.params.subscribe((params) => {
            this.orderId = params.id;
        });
    }
}
OrderComponent.ɵfac = function OrderComponent_Factory(t) { return new (t || OrderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_order_details_order_detail_service__WEBPACK_IMPORTED_MODULE_2__["OrderDetailService"])); };
OrderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderComponent, selectors: [["lib-order"]], decls: 1, vars: 0, template: function OrderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=order-src-lib-order-module.js.map