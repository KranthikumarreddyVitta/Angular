(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-src-lib-cart-module"],{

/***/ "0PZW":
/*!**********************************************!*\
  !*** ./projects/cart/src/lib/cart.module.ts ***!
  \**********************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.component */ "fW48");
/* harmony import */ var _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/cart-page/cart-page.component */ "BZav");
/* harmony import */ var _common_components_cart_header_cart_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/components/cart-header/cart-header.component */ "triv");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const routes = [
    {
        path: '',
        component: _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"]
    }
];
class CartModule {
}
CartModule.ɵfac = function CartModule_Factory(t) { return new (t || CartModule)(); };
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"],
        _components_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_4__["CartPageComponent"],
        _common_components_cart_header_cart_header_component__WEBPACK_IMPORTED_MODULE_5__["CartHeaderComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"]], exports: [_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]] }); })();


/***/ }),

/***/ "BZav":
/*!***************************************************************************!*\
  !*** ./projects/cart/src/lib/components/cart-page/cart-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: CartPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageComponent", function() { return CartPageComponent; });
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _common_components_cart_header_cart_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/cart-header/cart-header.component */ "triv");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class CartPageComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
    }
    ngOnInit() {
    }
    continueToPayment() {
        this._dialog
            .open(projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_0__["PaymentComponent"], {
            height: '15rem',
        });
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
CartPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["lib-cart-page"]], decls: 12, vars: 0, consts: [[1, "cart-list"], [1, "cart-list__header"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], ["mat-button", "", "color", "accent"], [1, "cart-list__payment"], ["fxLayout", "row", "fxLayoutAlign", "end end"], ["mat-button", "", "color", "accent", 3, "click"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "lib-cart-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " CART SUMMARY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "ADD MOODBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPageComponent_Template_button_click_10_listener() { return ctx.continueToPayment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CONTINUE TO PAYMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_common_components_cart_header_cart_header_component__WEBPACK_IMPORTED_MODULE_3__["CartHeaderComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".cart-list[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.cart-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n  font-weight: 600 !important;\n}\n.cart-list__header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #fdd601;\n  border-radius: 50px;\n  color: #ffffff;\n  font-weight: bolder;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n  color: #2c2c2c;\n}\n.cart-list__payment[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.cart-list__payment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: #68a616;\n  border-radius: 50px;\n  color: #ffffff;\n  font-weight: bolder;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 15px 20px 15px 20px;\n  letter-spacing: 0.02em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUFDSjtBQUFJO0VBQ0ksbUJBQUE7RUFDQSwyQkFBQTtBQUVSO0FBQ1E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFDWjtBQUVJO0VBQ0ksZ0JBQUE7QUFBUjtBQUNRO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFDWiIsImZpbGUiOiJjYXJ0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FydC1saXN0IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmX19oZWFkZXIge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZGQ2MDE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzJjMmMyYztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX19wYXltZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2OGE2MTY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweCAyMHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "fW48":
/*!*************************************************!*\
  !*** ./projects/cart/src/lib/cart.component.ts ***!
  \*************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CartComponent {
    constructor() { }
    ngOnInit() {
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["lib-cart"]], decls: 2, vars: 0, template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " cart works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "triv":
/*!**************************************************************************************!*\
  !*** ./projects/cart/src/lib/common/components/cart-header/cart-header.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CartHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartHeaderComponent", function() { return CartHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class CartHeaderComponent {
    constructor() {
        this.text = 'CART';
        this.iconPath = 'assets/cart/images/cart.svg';
    }
    ngOnInit() {
    }
}
CartHeaderComponent.ɵfac = function CartHeaderComponent_Factory(t) { return new (t || CartHeaderComponent)(); };
CartHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartHeaderComponent, selectors: [["lib-cart-header"]], decls: 32, vars: 2, consts: [[1, "cart"], ["fxLayout", "row", "fxLayoutAlign", " stretch", 1, "cart-details"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "cart-details__icon"], [1, "img-quote"], ["alt", "", "srcset", "", 3, "src"], ["fxFlex", "60", "fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "cart-details__info"], ["fxFlex", "40", 1, "cart-details__info__padding"], [1, "label"], [1, "value"], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start end", "fxLayoutGap", "1rem", 1, "cart-details__copy"], ["mat-mini-fab", "", "color", "accent", 1, "box-none"]], template: function CartHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Customer Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DR_Dining_Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Company Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Globe Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact No: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Phoenix, AZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Phoenix, AZ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "edit icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.iconPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".cart[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  margin-bottom: 3rem;\n}\n.cart-details[_ngcontent-%COMP%] {\n  height: 270px;\n}\n.cart-details__icon[_ngcontent-%COMP%] {\n  background: #fDD601;\n  padding-bottom: 3rem;\n}\n.cart-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.cart-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 4px 0px 6px rgba(0, 0, 0, 0.15), 0px -4px 6px rgba(0, 0, 0, 0.15), -4px 0px 6px rgba(0, 0, 0, 0.15);\n  border-radius: 92px;\n  box-sizing: content-box;\n  padding: 2.5rem;\n  height: 60px;\n  width: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.cart-details__icon[_ngcontent-%COMP%]   .img-quote[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n}\n.cart-details__copy[_ngcontent-%COMP%], .cart-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.cart-details__info__padding[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.cart-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.box-none[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYXJ0LWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsMkNBQUE7RUFFRSxtQkFBQTtBQUFKO0FBQ0k7RUFDRSxhQUFBO0FBQ047QUFDTTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUFRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFFVjtBQUFRO0VBQ0UsbUJBQUE7RUFDQSxnSkFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNWO0FBQVU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUVaO0FBRU07RUFFRSxtQkFBQTtFQUNBLG9CQUFBO0FBRFI7QUFHTTtFQUNFLGFBQUE7QUFEUjtBQUdNO0VBQ0UseUJBQUE7QUFEUjtBQU1BO0VBQ0Usc0RBQUE7RUFDQSx5QkFBQTtBQUhGIiwiZmlsZSI6ImNhcnQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbiBcclxuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgICAmLWRldGFpbHMge1xyXG4gICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICBcclxuICAgICAgJl9faWNvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZERDYwMTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctcXVvdGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIDRweCAwcHggNnB4IHJnYigwIDAgMCAvIDE1JSksXHJcbiAgICAgICAgICAgIDBweCAtNHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLCAtNHB4IDBweCA2cHggcmdiKDAgMCAwIC8gMTUlKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDkycHg7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIuNXJlbTtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICZfX2NvcHksXHJcbiAgICAgICZfX2luZm8ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICAgIH1cclxuICAgICAgJl9faW5mb19fcGFkZGluZyB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgfVxyXG4gICAgICAmX19pbmZvIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDAgMnJlbSAycmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3gtbm9uZSB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=cart-src-lib-cart-module.js.map