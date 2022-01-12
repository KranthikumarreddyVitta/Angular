(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~cart-src-lib-cart-module~dashboard-src-lib-dashboard-module~moodboard-src-lib-moodboard-modu~08751ef6"],{

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

/***/ })

}]);
//# sourceMappingURL=default~cart-src-lib-cart-module~dashboard-src-lib-dashboard-module~moodboard-src-lib-moodboard-modu~08751ef6.js.map