(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~moodboard-src-lib-moodboard-module~shop-src-lib-shop-module"],{

/***/ "5RNC":
/*!************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
  \************************************************************************/
/*! exports provided: MAT_SLIDER_VALUE_ACCESSOR, MatSlider, MatSliderChange, MatSliderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_SLIDER_VALUE_ACCESSOR", function() { return MAT_SLIDER_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSlider", function() { return MatSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderChange", function() { return MatSliderChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSliderModule", function() { return MatSliderModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "FtGj");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "nLfN");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





const _c0 = ["sliderWrapper"];
const activeEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
const MIN_AUTO_TICK_SEPARATION = 30;
/** The thumb gap size for a disabled slider. */
const DISABLED_THUMB_GAP = 7;
/** The thumb gap size for a non-active slider at its minimum value. */
const MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
/** The thumb gap size for an active slider at its minimum value. */
const MIN_VALUE_ACTIVE_THUMB_GAP = 10;
/**
 * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 * @docs-private
 */
const MAT_SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MatSlider),
    multi: true
};
/** A simple change event emitted by the MatSlider component. */
class MatSliderChange {
}
// Boilerplate for applying mixins to MatSlider.
/** @docs-private */
class MatSliderBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MatSliderMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinTabIndex"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"])(MatSliderBase), 'accent'));
/**
 * Allows users to select from a range of values by moving the slider thumb. It is similar in
 * behavior to the native `<input type="range">` element.
 */
class MatSlider extends _MatSliderMixinBase {
    constructor(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
        super(elementRef);
        this._focusMonitor = _focusMonitor;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._ngZone = _ngZone;
        this._animationMode = _animationMode;
        this._invert = false;
        this._max = 100;
        this._min = 0;
        this._step = 1;
        this._thumbLabel = false;
        this._tickInterval = 0;
        this._value = null;
        this._vertical = false;
        /** Event emitted when the slider value has changed. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** Event emitted when the slider thumb moves. */
        this.input = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Emits when the raw value of the slider changes. This is here primarily
         * to facilitate the two-way binding for the `value` input.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = () => { };
        this._percent = 0;
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */
        this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */
        this._isActive = false;
        /** The size of a tick interval as a percentage of the size of the track. */
        this._tickIntervalPercent = 0;
        /** The dimensions of the slider. */
        this._sliderDimensions = null;
        this._controlValueAccessorChangeFn = () => { };
        /** Subscription to the Directionality change EventEmitter. */
        this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_10__["Subscription"].EMPTY;
        /** Called when the user has put their pointer down on the slider. */
        this._pointerDown = (event) => {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (this.disabled || this._isSliding || (!isTouchEvent(event) && event.button !== 0)) {
                return;
            }
            this._ngZone.run(() => {
                const oldValue = this.value;
                const pointerPosition = getPointerPositionOnPage(event);
                this._isSliding = true;
                this._lastPointerEvent = event;
                event.preventDefault();
                this._focusHostElement();
                this._onMouseenter(); // Simulate mouseenter in case this is a mobile device.
                this._bindGlobalEvents(event);
                this._focusHostElement();
                this._updateValueFromPosition(pointerPosition);
                this._valueOnSlideStart = oldValue;
                // Emit a change and input event if the value changed.
                if (oldValue != this.value) {
                    this._emitInputEvent();
                }
            });
        };
        /**
         * Called when the user has moved their pointer after
         * starting to drag. Bound on the document level.
         */
        this._pointerMove = (event) => {
            if (this._isSliding) {
                // Prevent the slide from selecting anything else.
                event.preventDefault();
                const oldValue = this.value;
                this._lastPointerEvent = event;
                this._updateValueFromPosition(getPointerPositionOnPage(event));
                // Native range elements always emit `input` events when the value changed while sliding.
                if (oldValue != this.value) {
                    this._emitInputEvent();
                }
            }
        };
        /** Called when the user has lifted their pointer. Bound on the document level. */
        this._pointerUp = (event) => {
            if (this._isSliding) {
                event.preventDefault();
                this._removeGlobalEvents();
                this._isSliding = false;
                if (this._valueOnSlideStart != this.value && !this.disabled) {
                    this._emitChangeEvent();
                }
                this._valueOnSlideStart = this._lastPointerEvent = null;
            }
        };
        /** Called when the window has lost focus. */
        this._windowBlur = () => {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (this._lastPointerEvent) {
                this._pointerUp(this._lastPointerEvent);
            }
        };
        this._document = _document;
        this.tabIndex = parseInt(tabIndex) || 0;
        _ngZone.runOutsideAngular(() => {
            const element = elementRef.nativeElement;
            element.addEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', this._pointerDown, activeEventOptions);
        });
    }
    /** Whether the slider is inverted. */
    get invert() { return this._invert; }
    set invert(value) {
        this._invert = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** The maximum value that the slider can have. */
    get max() { return this._max; }
    set max(v) {
        this._max = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._max);
        this._percent = this._calculatePercentage(this._value);
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
    }
    /** The minimum value that the slider can have. */
    get min() { return this._min; }
    set min(v) {
        this._min = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._min);
        // If the value wasn't explicitly set by the user, set it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        this._percent = this._calculatePercentage(this._value);
        // Since this also modifies the percentage, we need to let the change detection know.
        this._changeDetectorRef.markForCheck();
    }
    /** The values at which the thumb will snap. */
    get step() { return this._step; }
    set step(v) {
        this._step = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v, this._step);
        if (this._step % 1 !== 0) {
            this._roundToDecimal = this._step.toString().split('.').pop().length;
        }
        // Since this could modify the label, we need to notify the change detection.
        this._changeDetectorRef.markForCheck();
    }
    /** Whether or not to show the thumb label. */
    get thumbLabel() { return this._thumbLabel; }
    set thumbLabel(value) { this._thumbLabel = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value); }
    /**
     * How often to show ticks. Relative to the step so that a tick always appears on a step.
     * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
     */
    get tickInterval() { return this._tickInterval; }
    set tickInterval(value) {
        if (value === 'auto') {
            this._tickInterval = 'auto';
        }
        else if (typeof value === 'number' || typeof value === 'string') {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(value, this._tickInterval);
        }
        else {
            this._tickInterval = 0;
        }
    }
    /** Value of the slider. */
    get value() {
        // If the value needs to be read and it is still uninitialized, initialize it to the min.
        if (this._value === null) {
            this.value = this._min;
        }
        return this._value;
    }
    set value(v) {
        if (v !== this._value) {
            let value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceNumberProperty"])(v);
            // While incrementing by a decimal we can end up with values like 33.300000000000004.
            // Truncate it to ensure that it matches the label and to make it easier to work with.
            if (this._roundToDecimal && value !== this.min && value !== this.max) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
            }
            this._value = value;
            this._percent = this._calculatePercentage(this._value);
            // Since this also modifies the percentage, we need to let the change detection know.
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Whether the slider is vertical. */
    get vertical() { return this._vertical; }
    set vertical(value) {
        this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
    }
    /** The value to be used for display purposes. */
    get displayValue() {
        if (this.displayWith) {
            // Value is never null but since setters and getters cannot have
            // different types, the value getter is also typed to return null.
            return this.displayWith(this.value);
        }
        // Note that this could be improved further by rounding something like 0.999 to 1 or
        // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
        // every change detection cycle.
        if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
            return this.value.toFixed(this._roundToDecimal);
        }
        return this.value || 0;
    }
    /** set focus to the host element */
    focus(options) {
        this._focusHostElement(options);
    }
    /** blur the host element */
    blur() {
        this._blurHostElement();
    }
    /** The percentage of the slider that coincides with the value. */
    get percent() { return this._clamp(this._percent); }
    /**
     * Whether the axis of the slider is inverted.
     * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
     */
    _shouldInvertAxis() {
        // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
        // top. However from a y-axis standpoint this is inverted.
        return this.vertical ? !this.invert : this.invert;
    }
    /** Whether the slider is at its minimum value. */
    _isMinValue() {
        return this.percent === 0;
    }
    /**
     * The amount of space to leave between the slider thumb and the track fill & track background
     * elements.
     */
    _getThumbGap() {
        if (this.disabled) {
            return DISABLED_THUMB_GAP;
        }
        if (this._isMinValue() && !this.thumbLabel) {
            return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
        }
        return 0;
    }
    /** CSS styles for the track background element. */
    _getTrackBackgroundStyles() {
        const axis = this.vertical ? 'Y' : 'X';
        const scale = this.vertical ? `1, ${1 - this.percent}, 1` : `${1 - this.percent}, 1, 1`;
        const sign = this._shouldInvertMouseCoords() ? '-' : '';
        return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`
        };
    }
    /** CSS styles for the track fill element. */
    _getTrackFillStyles() {
        const percent = this.percent;
        const axis = this.vertical ? 'Y' : 'X';
        const scale = this.vertical ? `1, ${percent}, 1` : `${percent}, 1, 1`;
        const sign = this._shouldInvertMouseCoords() ? '' : '-';
        return {
            // scale3d avoids some rendering issues in Chrome. See #12071.
            transform: `translate${axis}(${sign}${this._getThumbGap()}px) scale3d(${scale})`,
            // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
            // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
            // the value of the slider is 0, we can easily get into this situation. We force a
            // recalculation by changing the element's `display` when it goes from 0 to any other value.
            display: percent === 0 ? 'none' : ''
        };
    }
    /** CSS styles for the ticks container element. */
    _getTicksContainerStyles() {
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the ticks container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
        let offset = this._tickIntervalPercent / 2 * 100;
        return {
            'transform': `translate${axis}(${sign}${offset}%)`
        };
    }
    /** CSS styles for the ticks element. */
    _getTicksStyles() {
        let tickSize = this._tickIntervalPercent * 100;
        let backgroundSize = this.vertical ? `2px ${tickSize}%` : `${tickSize}% 2px`;
        let axis = this.vertical ? 'Y' : 'X';
        // Depending on the direction we pushed the ticks container, push the ticks the opposite
        // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
        // ticks 180 degrees so we're really cutting off the end edge abd not the start.
        let sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
        let rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
        let styles = {
            'backgroundSize': backgroundSize,
            // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
            'transform': `translateZ(0) translate${axis}(${sign}${tickSize / 2}%)${rotate}`
        };
        if (this._isMinValue() && this._getThumbGap()) {
            const shouldInvertAxis = this._shouldInvertAxis();
            let side;
            if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
            }
            else {
                side = shouldInvertAxis ? 'Right' : 'Left';
            }
            styles[`padding${side}`] = `${this._getThumbGap()}px`;
        }
        return styles;
    }
    _getThumbContainerStyles() {
        const shouldInvertAxis = this._shouldInvertAxis();
        let axis = this.vertical ? 'Y' : 'X';
        // For a horizontal slider in RTL languages we push the thumb container off the left edge
        // instead of the right edge to avoid causing a horizontal scrollbar to appear.
        let invertOffset = (this._getDirection() == 'rtl' && !this.vertical) ? !shouldInvertAxis : shouldInvertAxis;
        let offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
        return {
            'transform': `translate${axis}(-${offset}%)`
        };
    }
    /**
     * Whether mouse events should be converted to a slider position by calculating their distance
     * from the right or bottom edge of the slider as opposed to the top or left.
     */
    _shouldInvertMouseCoords() {
        const shouldInvertAxis = this._shouldInvertAxis();
        return (this._getDirection() == 'rtl' && !this.vertical) ? !shouldInvertAxis : shouldInvertAxis;
    }
    /** The language direction for this slider element. */
    _getDirection() {
        return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
    }
    ngAfterViewInit() {
        this._focusMonitor
            .monitor(this._elementRef, true)
            .subscribe((origin) => {
            this._isActive = !!origin && origin !== 'keyboard';
            this._changeDetectorRef.detectChanges();
        });
        if (this._dir) {
            this._dirChangeSubscription = this._dir.change.subscribe(() => {
                this._changeDetectorRef.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        const element = this._elementRef.nativeElement;
        element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
        element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
        this._lastPointerEvent = null;
        this._removeGlobalEvents();
        this._focusMonitor.stopMonitoring(this._elementRef);
        this._dirChangeSubscription.unsubscribe();
    }
    _onMouseenter() {
        if (this.disabled) {
            return;
        }
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onFocus() {
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._getSliderDimensions();
        this._updateTickIntervalPercent();
    }
    _onBlur() {
        this.onTouched();
    }
    _onKeydown(event) {
        if (this.disabled || Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["hasModifierKey"])(event)) {
            return;
        }
        const oldValue = this.value;
        switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_UP"]:
                this._increment(10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["PAGE_DOWN"]:
                this._increment(-10);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["END"]:
                this.value = this.max;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["HOME"]:
                this.value = this.min;
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["LEFT_ARROW"]:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["UP_ARROW"]:
                this._increment(1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["RIGHT_ARROW"]:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["DOWN_ARROW"]:
                this._increment(-1);
                break;
            default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
        }
        if (oldValue != this.value) {
            this._emitInputEvent();
            this._emitChangeEvent();
        }
        this._isSliding = true;
        event.preventDefault();
    }
    _onKeyup() {
        this._isSliding = false;
    }
    /** Use defaultView of injected document if available or fallback to global window reference */
    _getWindow() {
        return this._document.defaultView || window;
    }
    /**
     * Binds our global move and end events. They're bound at the document level and only while
     * dragging so that the user doesn't have to keep their pointer exactly over the slider
     * as they're swiping across the screen.
     */
    _bindGlobalEvents(triggerEvent) {
        // Note that we bind the events to the `document`, because it allows us to capture
        // drag cancel events where the user's pointer is outside the browser window.
        const document = this._document;
        const isTouch = isTouchEvent(triggerEvent);
        const moveEventName = isTouch ? 'touchmove' : 'mousemove';
        const endEventName = isTouch ? 'touchend' : 'mouseup';
        document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
        document.addEventListener(endEventName, this._pointerUp, activeEventOptions);
        if (isTouch) {
            document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
        }
        const window = this._getWindow();
        if (typeof window !== 'undefined' && window) {
            window.addEventListener('blur', this._windowBlur);
        }
    }
    /** Removes any global event listeners that we may have added. */
    _removeGlobalEvents() {
        const document = this._document;
        document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
        document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
        document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
        document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
        document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);
        const window = this._getWindow();
        if (typeof window !== 'undefined' && window) {
            window.removeEventListener('blur', this._windowBlur);
        }
    }
    /** Increments the slider by the given number of steps (negative number decrements). */
    _increment(numSteps) {
        this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
    }
    /** Calculate the new value from the new physical location. The value will always be snapped. */
    _updateValueFromPosition(pos) {
        if (!this._sliderDimensions) {
            return;
        }
        let offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
        let size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
        let posComponent = this.vertical ? pos.y : pos.x;
        // The exact value is calculated from the event and used to find the closest snap value.
        let percent = this._clamp((posComponent - offset) / size);
        if (this._shouldInvertMouseCoords()) {
            percent = 1 - percent;
        }
        // Since the steps may not divide cleanly into the max value, if the user
        // slid to 0 or 100 percent, we jump to the min/max value. This approach
        // is slightly more intuitive than using `Math.ceil` below, because it
        // follows the user's pointer closer.
        if (percent === 0) {
            this.value = this.min;
        }
        else if (percent === 1) {
            this.value = this.max;
        }
        else {
            const exactValue = this._calculateValue(percent);
            // This calculation finds the closest step by finding the closest
            // whole number divisible by the step relative to the min.
            const closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
            // The value needs to snap to the min and max.
            this.value = this._clamp(closestValue, this.min, this.max);
        }
    }
    /** Emits a change event if the current value is different from the last emitted value. */
    _emitChangeEvent() {
        this._controlValueAccessorChangeFn(this.value);
        this.valueChange.emit(this.value);
        this.change.emit(this._createChangeEvent());
    }
    /** Emits an input event when the current value is different from the last emitted value. */
    _emitInputEvent() {
        this.input.emit(this._createChangeEvent());
    }
    /** Updates the amount of space between ticks as a percentage of the width of the slider. */
    _updateTickIntervalPercent() {
        if (!this.tickInterval || !this._sliderDimensions) {
            return;
        }
        if (this.tickInterval == 'auto') {
            let trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            let pixelsPerStep = trackSize * this.step / (this.max - this.min);
            let stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            let pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
        }
        else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
        }
    }
    /** Creates a slider change object from the specified value. */
    _createChangeEvent(value = this.value) {
        let event = new MatSliderChange();
        event.source = this;
        event.value = value;
        return event;
    }
    /** Calculates the percentage of the slider that a value is. */
    _calculatePercentage(value) {
        return ((value || 0) - this.min) / (this.max - this.min);
    }
    /** Calculates the value a percentage of the slider corresponds to. */
    _calculateValue(percentage) {
        return this.min + percentage * (this.max - this.min);
    }
    /** Return a number between two numbers. */
    _clamp(value, min = 0, max = 1) {
        return Math.max(min, Math.min(value, max));
    }
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    _getSliderDimensions() {
        return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
    }
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    _focusHostElement(options) {
        this._elementRef.nativeElement.focus(options);
    }
    /** Blurs the native element. */
    _blurHostElement() {
        this._elementRef.nativeElement.blur();
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * Registers a callback to be triggered when the value has changed.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnChange(fn) {
        this._controlValueAccessorChangeFn = fn;
    }
    /**
     * Registers a callback to be triggered when the component is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Sets whether the component should be disabled.
     * Implemented as part of ControlValueAccessor.
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
}
MatSlider.ɵfac = function MatSlider_Factory(t) { return new (t || MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"], 8)); };
MatSlider.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MatSlider, selectors: [["mat-slider"]], viewQuery: function MatSlider_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
    } }, hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"], hostVars: 29, hostBindings: function MatSlider_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() { return ctx._onFocus(); })("blur", function MatSlider_blur_HostBindingHandler() { return ctx._onBlur(); })("keydown", function MatSlider_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("keyup", function MatSlider_keyup_HostBindingHandler() { return ctx._onKeyup(); })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() { return ctx._onMouseenter(); })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) { return $event.preventDefault(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-valuetext", ctx.valueText == null ? ctx.displayValue : ctx.valueText)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    } }, inputs: { disabled: "disabled", color: "color", tabIndex: "tabIndex", invert: "invert", max: "max", min: "min", value: "value", step: "step", thumbLabel: "thumbLabel", tickInterval: "tickInterval", vertical: "vertical", displayWith: "displayWith", valueText: "valueText" }, outputs: { change: "change", input: "input", valueChange: "valueChange" }, exportAs: ["matSlider"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 13, vars: 6, consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]], template: function MatSlider_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.displayValue);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"]], styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute;-webkit-print-color-adjust:exact;color-adjust:exact}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"], encapsulation: 2, changeDetection: 0 });
MatSlider.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['tabindex',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"],] }] }
];
MatSlider.propDecorators = {
    invert: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    max: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    min: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    step: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    thumbLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    tickInterval: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    displayWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    valueText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    _sliderWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['sliderWrapper',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSlider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mat-slider',
                exportAs: 'matSlider',
                providers: [MAT_SLIDER_VALUE_ACCESSOR],
                host: {
                    '(focus)': '_onFocus()',
                    '(blur)': '_onBlur()',
                    '(keydown)': '_onKeydown($event)',
                    '(keyup)': '_onKeyup()',
                    '(mouseenter)': '_onMouseenter()',
                    // On Safari starting to slide temporarily triggers text selection mode which
                    // show the wrong cursor. We prevent it by stopping the `selectstart` event.
                    '(selectstart)': '$event.preventDefault()',
                    'class': 'mat-slider mat-focus-indicator',
                    'role': 'slider',
                    '[tabIndex]': 'tabIndex',
                    '[attr.aria-disabled]': 'disabled',
                    '[attr.aria-valuemax]': 'max',
                    '[attr.aria-valuemin]': 'min',
                    '[attr.aria-valuenow]': 'value',
                    // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
                    // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
                    // it can cause the slider to read out a very long value like 0.20000068 if the current value
                    // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
                    // to the same value that we set on the slider's thumb which will be truncated.
                    '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
                    '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
                    '[class.mat-slider-disabled]': 'disabled',
                    '[class.mat-slider-has-ticks]': 'tickInterval',
                    '[class.mat-slider-horizontal]': '!vertical',
                    '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
                    // Class binding which is only used by the test harness as there is no other
                    // way for the harness to detect if mouse coordinates need to be inverted.
                    '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
                    '[class.mat-slider-sliding]': '_isSliding',
                    '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
                    '[class.mat-slider-vertical]': 'vertical',
                    '[class.mat-slider-min-value]': '_isMinValue()',
                    '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
                    '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
                },
                template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
                inputs: ['disabled', 'color', 'tabIndex'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{position:absolute;-webkit-print-color-adjust:exact;color-adjust:exact}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{background-repeat:repeat;background-clip:content-box;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["FocusMonitor"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"],
                args: ['tabindex']
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]
            }] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], valueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['sliderWrapper']
        }] }); })();
/** Returns whether an event is a touch event. */
function isTouchEvent(event) {
    // This function is called for every pixel that the user has dragged so we need it to be
    // as fast as possible. Since we only bind mouse events and touch events, we can assume
    // that if the event's name starts with `t`, it's a touch event.
    return event.type[0] === 't';
}
/** Gets the coordinates of a touch or mouse event relative to the viewport. */
function getPointerPositionOnPage(event) {
    // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    const point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
    return { x: point.clientX, y: point.clientY };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatSliderModule {
}
MatSliderModule.ɵfac = function MatSliderModule_Factory(t) { return new (t || MatSliderModule)(); };
MatSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MatSliderModule });
MatSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatSliderModule, { declarations: function () { return [MatSlider]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; }, exports: function () { return [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                exports: [MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"]],
                declarations: [MatSlider]
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



//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "BxmO":
/*!***************************************************************************!*\
  !*** ./projects/shop/src/lib/components/shop-home/shop-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: ShopHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopHomeComponent", function() { return ShopHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/shop/shop.component */ "RD30");


class ShopHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShopHomeComponent.ɵfac = function ShopHomeComponent_Factory(t) { return new (t || ShopHomeComponent)(); };
ShopHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopHomeComponent, selectors: [["lib-shop-home"]], decls: 1, vars: 0, template: function ShopHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-shop");
    } }, directives: [_common_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__["ShopComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wLWhvbWUuY29tcG9uZW50LnNjc3MifQ== */"] });


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

/***/ "HDTZ":
/*!************************************************************!*\
  !*** ./projects/shop/src/lib/common/shop-common.module.ts ***!
  \************************************************************/
/*! exports provided: ShopCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCommonModule", function() { return ShopCommonModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop/shop.component */ "RD30");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./product-details/product-details.component */ "qS0q");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");
























class ShopCommonModule {
}
ShopCommonModule.ɵfac = function ShopCommonModule_Factory(t) { return new (t || ShopCommonModule)(); };
ShopCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: ShopCommonModule });
ShopCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_19__["STEPPER_GLOBAL_OPTIONS"],
            useValue: { displayDefaultIndicatorType: false },
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
            projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_18__["CoreModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](ShopCommonModule, { declarations: [_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__["ShopComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
        projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_18__["CoreModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_21__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__["MatNativeDateModule"]], exports: [_shop_shop_component__WEBPACK_IMPORTED_MODULE_1__["ShopComponent"], _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_20__["ProductDetailsComponent"]] }); })();


/***/ }),

/***/ "RD30":
/*!*************************************************************!*\
  !*** ./projects/shop/src/lib/common/shop/shop.component.ts ***!
  \*************************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "dlKe");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/shop.service */ "sRD0");
/* harmony import */ var projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/moodboard/src/lib/services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _core_src_lib_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../core/src/lib/components/search-bar/search-bar.component */ "VYpZ");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");























const _c0 = ["quickFilter"];
const _c1 = ["stepper"];
function ShopComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](107); return ctx_r26.openModal(_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quick Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_ng_container_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r28.name);
} }
function ShopComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_17_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const cat_r28 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.onCatUnchecked(cat_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_ng_container_17_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", cat_r28.name);
} }
function ShopComponent_ng_container_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r33.warehouse_name);
} }
function ShopComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_18_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const city_r33 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.onCityUnchecked(city_r33); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_ng_container_18_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", city_r33.warehouse_name);
} }
function ShopComponent_span_20_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r38.min_price, " ");
} }
function ShopComponent_span_20_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.max_price);
} }
function ShopComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_span_20_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.onPriceRemove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_span_20_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShopComponent_span_20_span_3_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.max_price);
} }
function ShopComponent_span_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.minRentalPrice, " ");
} }
function ShopComponent_span_22_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r43.maxRentalPrice, "");
} }
function ShopComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_span_22_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onRentalPriceRemove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Rental Price/12 months ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_span_22_span_2_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_span_22_span_4_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.minRentalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.maxRentalPrice);
} }
function ShopComponent_span_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inv: ", ctx_r46.min_price_inventory, "");
} }
function ShopComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_span_23_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.onQtyChange(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_span_23_span_1_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.min_price_inventory);
} }
function ShopComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_container_24_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.onDateRangeRemove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 2, ctx_r6.daterange == null ? null : ctx_r6.daterange.value == null ? null : ctx_r6.daterange.value.start, "shortDate"), "-", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 5, ctx_r6.daterange == null ? null : ctx_r6.daterange.value == null ? null : ctx_r6.daterange.value.end, "shortDate"), "");
} }
function ShopComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_container_32_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const city_r51 = ctx.$implicit; const i_r52 = ctx.$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onCityChecked(city_r51, i_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", city_r51.isChecked)("title", city_r51.warehouse_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r51.warehouse_name, " ");
} }
function ShopComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_container_44_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const cat_r55 = ctx.$implicit; const i_r56 = ctx.$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.onCategoriesChecked(cat_r55, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", cat_r55.isChecked)("title", cat_r55.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r55.name, " ");
} }
function ShopComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Price should be less than Max Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Price should be less than Max Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_div_96_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DELIVERY TIMELINE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Enter a date range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-date-range-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ShopComponent_div_96_Template_input_dateChange_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.dateRangeSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ShopComponent_div_96_Template_input_dateChange_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.dateRangeSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-datepicker-toggle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-date-range-picker", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r16.daterange)("rangePicker", _r59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r16.daterange.value.start);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r16.daterange.value.end);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r59);
} }
function ShopComponent_div_98_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-search-bar", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function ShopComponent_div_98_Template_app_search_bar_search_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.search($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add furniture to your moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Search for a product and add it to your moodboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx_r17.searchPlaceholder);
} }
function ShopComponent_mat_card_100_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r65.total_warehouse_quantity, " ");
} }
function ShopComponent_mat_card_100_mat_card_title_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-title", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r65.product_name);
} }
function ShopComponent_mat_card_100_mat_card_content_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card-content", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "City:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buy Price:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Rental Price (12mo):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Available Qty:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r65.warehouse_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", product_r65.buyPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", product_r65.rental_price, "/mo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r65.total_warehouse_quantity);
} }
function ShopComponent_mat_card_100_Template(rf, ctx) { if (rf & 1) {
    const _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_mat_card_100_Template_mat_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73); const product_r65 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.itemClick(product_r65); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_mat_card_100_div_1_Template, 2, 1, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShopComponent_mat_card_100_mat_card_title_3_Template, 2, 1, "mat-card-title", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_mat_card_100_mat_card_content_4_Template, 21, 4, "mat-card-content", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r65 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.source == "MD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r65 == null ? null : product_r65.product_sku_vartion == null ? null : product_r65.product_sku_vartion.get_display_image[0] == null ? null : product_r65.product_sku_vartion.get_display_image[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.source == "SHOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.source == "SHOP");
} }
function ShopComponent_mat_card_101_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_mat_card_101_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_mat_card_101_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShopComponent_mat_card_101_p_1_Template, 2, 0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShopComponent_mat_card_101_p_2_Template, 2, 0, "p", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.productList.length == 0 && !ctx_r19.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.isLoading);
} }
function ShopComponent_ng_template_102_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_template_102_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r80); const city_r77 = ctx.$implicit; const i_r78 = ctx.index; const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r79.onCityChecked(city_r77, i_r78); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", city_r77.isChecked)("title", city_r77.warehouse_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r77.warehouse_name, " ");
} }
function ShopComponent_ng_template_102_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_102_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_ng_template_102_ng_container_4_Template, 3, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.cityListDefault);
} }
function ShopComponent_ng_template_104_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_template_104_ng_container_4_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r87); const cat_r84 = ctx.$implicit; const i_r85 = ctx.index; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r86.onCategoriesChecked(cat_r84, i_r85); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", cat_r84.isChecked)("title", cat_r84.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r84.name, " ");
} }
function ShopComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_104_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r89); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r88.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_ng_template_104_ng_container_4_Template, 3, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.catListDefault);
} }
function ShopComponent_ng_template_106_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_template_106_ng_container_58_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r105); const city_r102 = ctx.$implicit; const i_r103 = ctx.$implicit; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r104.onCityChecked(city_r102, i_r103); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const city_r102 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", city_r102.isChecked)("title", city_r102.warehouse_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", city_r102.warehouse_name, " ");
} }
function ShopComponent_ng_template_106_ng_container_78_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ShopComponent_ng_template_106_ng_container_78_Template_mat_checkbox_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r109); const cat_r106 = ctx.$implicit; const i_r107 = ctx.$implicit; const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r108.onCategoriesChecked(cat_r106, i_r107); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cat_r106 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", cat_r106.isChecked)("title", cat_r106.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r106.name, " ");
} }
function ShopComponent_ng_template_106_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Price should be less than Max Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_ng_template_106_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min Price should be less than Max Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_ng_template_106_button_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShopComponent_ng_template_106_Template(rf, ctx) { if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-horizontal-stepper", 79, 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r110.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-dialog-content", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "WANT TO FURNISH YOUR PROPERTY?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Let\u2019s get started");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r112.goto(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_div_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r113.goto(2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_div_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r114.goto(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Budget");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_div_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r115.goto(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_div_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r116.goto(5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Delivery");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Start ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-dialog-content", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h2", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " What locations you are looking to Furnish units in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ShopComponent_ng_template_106_ng_container_58_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r118.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-dialog-content", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h2", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Looking for products in any particular category? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, ShopComponent_ng_template_106_ng_container_78_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h2", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "PRICE RANGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-dialog-content", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h2", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Is there a Budget Range you are working with? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "form", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Starting from $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-form-field", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "input", 123, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_ng_template_106_Template_input_input_107_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](108); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.onMinPriceRangeChange(_r93.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Ending to $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "mat-form-field", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "input", 125, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_ng_template_106_Template_input_input_113_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](114); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.onMaxPriceRangeChange(_r94.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, ShopComponent_ng_template_106_div_115_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "RENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Starting from $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "mat-form-field", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "input", 128, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_ng_template_106_Template_input_input_124_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](125); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r122.onMinRentalPriceRangeChange(_r96.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Ending to $");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "mat-form-field", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "input", 129, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_ng_template_106_Template_input_input_130_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](131); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.onMaxRentalPriceRangeChange(_r97.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, ShopComponent_ng_template_106_div_132_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, ShopComponent_ng_template_106_button_136_Template, 2, 0, "button", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h2", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_144_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r124.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "mat-dialog-content", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " What is the minimum quantity you are interested in? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "mat-form-field", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Miniumum Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "input", 134, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_ng_template_106_Template_input_input_154_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](155); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r125.onQtyChange(_r100.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "mat-step");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "h2", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Delivery Timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_168_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r126.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "mat-dialog-content", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " What is your preferred delivery timeline ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Enter a date range");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "mat-date-range-input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "mat-datepicker-toggle", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "mat-date-range-picker", null, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_ng_template_106_Template_button_click_187_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r111); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.filterProductPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Finish ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](183);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("linear", false)("selectedIndex", ctx_r25.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.cityListDefault)("ngForAs", ctx_r25.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.catListDefault)("ngForAs", ctx_r25.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r25.filterFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.min_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.max_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.filterFormGroup == null ? null : ctx_r25.filterFormGroup.errors == null ? null : ctx_r25.filterFormGroup.errors.buyPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.minRentalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.maxRentalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.filterFormGroup == null ? null : ctx_r25.filterFormGroup.errors == null ? null : ctx_r25.filterFormGroup.errors.rentalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.filterFormGroup.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r25.min_price_inventory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r25.daterange)("rangePicker", _r101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r101);
} }
class ShopComponent {
    constructor(_shopService, moodboardService, _dialog, _router, route, _coreService, _cd) {
        this._shopService = _shopService;
        this.moodboardService = moodboardService;
        this._dialog = _dialog;
        this._router = _router;
        this.route = route;
        this._coreService = _coreService;
        this._cd = _cd;
        this.source = 'SHOP';
        this.lLimit = 0;
        this.hLimit = 12;
        this.searchPlaceholder = 'Search Products';
        this.productClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.productList = [];
        this.selectedCategory = [];
        this.selectedCity = [];
        this.subscription = null;
        this.categoriesList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.catListDefault = [];
        this.cityList = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cityListDefault = [];
        this.min_price = '';
        this.max_price = '';
        this.minRentalPrice = '';
        this.maxRentalPrice = '';
        // filter form group;
        this.filterFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        this.daterange = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null),
        });
        this.min_price_inventory = '';
        this.startCount = 0;
        this.selectedIndex = 0;
        this.show = false;
        this.isLoading = false;
        this.template = null;
        this.myStepper = null;
        this.searchKeywords = '';
        this.oldSearchKeyword = '';
        this.defaultFilters = null;
        this.infiniteScroll = null;
        this.selectedIndex = 0;
    }
    ngOnInit() {
        var _a;
        (_a = this.route) === null || _a === void 0 ? void 0 : _a.queryParams.subscribe((route) => {
            this.searchKeywords = route === null || route === void 0 ? void 0 : route.keywords;
            this._coreService.loadUserPreference().subscribe((data) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
                this.defaultFilters = data.result;
                this.max_price = (_b = (_a = this.defaultFilters) === null || _a === void 0 ? void 0 : _a.max_price) !== null && _b !== void 0 ? _b : '';
                this.min_price = (_d = (_c = this.defaultFilters) === null || _c === void 0 ? void 0 : _c.min_price) !== null && _d !== void 0 ? _d : '';
                this.maxRentalPrice = (_f = (_e = this.defaultFilters) === null || _e === void 0 ? void 0 : _e.rental_max_price) !== null && _f !== void 0 ? _f : '';
                this.minRentalPrice = (_h = (_g = this.defaultFilters) === null || _g === void 0 ? void 0 : _g.rental_min_price) !== null && _h !== void 0 ? _h : '';
                this.min_price_inventory = (_k = (_j = this.defaultFilters) === null || _j === void 0 ? void 0 : _j.min_price_inventory) !== null && _k !== void 0 ? _k : '';
                Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.getCategory(), this.getCity()).subscribe((data) => {
                    this.getProducts();
                });
            });
        });
        this.filterFormGroup.addControl('minRentalPrice', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
        this.filterFormGroup.addControl('maxRentalPrice', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
        this.filterFormGroup.addControl('minPrice', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
        this.filterFormGroup.addControl('maxPrice', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
        this.filterFormGroup.addControl('qty', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]());
    }
    get controls() {
        return this.filterFormGroup.controls;
    }
    validateErrors() {
        if ((+this.min_price || +this.min_price == 0) && this.max_price != '' && this.min_price != '') {
            if (+this.min_price > +this.max_price) {
                this.filterFormGroup.setErrors({ buyPrice: true });
            }
            else {
                this.filterFormGroup.setErrors(null);
                //this.validateRent()
            }
        }
        else if ((+this.max_price || +this.max_price == 0) && this.min_price != '' && this.max_price != '') {
            if (+this.max_price < +this.min_price) {
                this.filterFormGroup.setErrors({ buyPrice: true });
            }
            else {
                this.filterFormGroup.setErrors(null);
                //this.validateRent()
            }
        }
    }
    validateRent() {
        if ((+this.minRentalPrice || +this.minRentalPrice == 0) && this.maxRentalPrice != '' && this.minRentalPrice != '') {
            if (+this.minRentalPrice > +this.maxRentalPrice) {
                this.filterFormGroup.setErrors({ rentalPrice: true });
            }
            else {
                this.filterFormGroup.setErrors(null);
                //this.validateErrors()
            }
        }
        else if ((+this.maxRentalPrice || +this.maxRentalPrice == 0) && this.minRentalPrice != '' && this.maxRentalPrice != '') {
            if (+this.maxRentalPrice < +this.minRentalPrice) {
                this.filterFormGroup.setErrors({ rentalPrice: true });
            }
            else {
                this.filterFormGroup.setErrors(null);
                //this.validateErrors()
            }
        }
    }
    getUserPreference() {
        this._coreService.loadUserPreference().subscribe((data) => {
            this.defaultFilters = data;
            this.getCity();
        });
    }
    goto(index) {
        if (index == 0)
            return; // First step is not selected anymore -ok
        this.selectedIndex = index;
    }
    resetFilter() {
        this._shopService.resetFilters().subscribe((data) => {
            var _a;
            if (data.statusCode == 200) {
                this.cityListDefault.map((el) => (el.isChecked = false));
                this.cityListDefault.sort((a, b) => a.warehouse_name > b.warehouse_name ? 1 : -1);
                this.catListDefault.map((el) => (el.isChecked = false));
                this.catListDefault.sort((a, b) => (a.name > b.name ? 1 : -1));
                this.categoriesList.next(this.catListDefault);
                this.cityList.next(this.cityListDefault);
                // refresh selected
                this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
                this.selectedCity = this.cityListDefault.filter((x) => x.isChecked);
                // reset default value
                this.min_price = '';
                this.max_price = '';
                this.minRentalPrice = '';
                this.maxRentalPrice = '';
                this.min_price_inventory = '';
                this.resetList();
                (_a = this.daterange) === null || _a === void 0 ? void 0 : _a.reset();
                this.getProducts();
            }
        });
    }
    getCategory() {
        return new Promise((res, rej) => {
            this.moodboardService
                .getCategoryList()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((item) => {
                item.result.map((i, index) => {
                    var _a, _b;
                    i['isChecked'] = (_b = (_a = this.defaultFilters) === null || _a === void 0 ? void 0 : _a.category) === null || _b === void 0 ? void 0 : _b.split(',').includes(i.sgid + '');
                    i['order'] = index;
                    return i;
                });
                return item;
            }))
                .subscribe((response) => {
                this.categoriesList.next(response.result);
                this.catListDefault = response.result;
                this.selectedCategory = this.catListDefault.filter((item) => item.isChecked);
                res(1);
            }, (error) => {
                rej(0);
            });
        });
    }
    getCity() {
        return new Promise((res, rej) => {
            this.moodboardService
                .getCityList()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((item) => {
                item.data.map((i, index) => {
                    var _a, _b;
                    i['isChecked'] = (_b = (_a = this.defaultFilters) === null || _a === void 0 ? void 0 : _a.warehouse) === null || _b === void 0 ? void 0 : _b.split(',').includes(i.sgid + '');
                    i['order'] = index;
                    return i;
                });
                return item;
            }))
                .subscribe((response) => {
                this.cityList.next(response.data);
                this.cityListDefault = response.data;
                this.selectedCity = this.cityListDefault.filter((item) => item.isChecked);
                res(1);
            }, (error) => {
                rej(0);
            });
        });
    }
    // checked
    onCityChecked(city, i) {
        city.isChecked = !city.isChecked;
        this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.cityList.next(this.cityListDefault);
        this.selectedCity = this.cityListDefault.filter((item) => item.isChecked);
        this.resetList();
        this.getProducts();
    }
    onCategoriesChecked(cat, i) {
        cat.isChecked = !cat.isChecked;
        this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.categoriesList.next(this.catListDefault);
        this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
        this.resetList();
        this.getProducts();
    }
    // unchecked.
    onCityUnchecked(city) {
        city.isChecked = false;
        this.cityListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.cityList.next(this.cityListDefault);
        this.selectedCity = this.cityListDefault.filter((item) => item.isChecked);
        this.resetList();
        this.getProducts();
    }
    onCatUnchecked(cat) {
        cat.isChecked = false;
        this.catListDefault.sort((a, b) => (a.isChecked > b.isChecked ? -1 : 1));
        this.categoriesList.next(this.catListDefault);
        this.selectedCategory = this.catListDefault.filter((x) => x.isChecked);
        this.resetList();
        this.getProducts();
    }
    // remove
    onPriceRemove() {
        this.min_price = '';
        this.max_price = '';
        this.resetList();
        this.getProducts();
    }
    onRentalPriceRemove() {
        this.minRentalPrice = '';
        this.maxRentalPrice = '';
        this.resetList();
        this.getProducts();
    }
    onDateRangeRemove() {
        var _a;
        (_a = this.daterange) === null || _a === void 0 ? void 0 : _a.reset();
        this.getProducts();
    }
    dateRangeSelection() {
        var _a, _b, _c, _d;
        if (((_b = (_a = this.daterange) === null || _a === void 0 ? void 0 : _a.get('start')) === null || _b === void 0 ? void 0 : _b.value) && ((_d = (_c = this.daterange) === null || _c === void 0 ? void 0 : _c.get('end')) === null || _d === void 0 ? void 0 : _d.value)) {
            this.resetList();
            this.getProducts();
        }
    }
    // price range
    onMinPriceRangeChange(ev) {
        this.min_price = ev;
        this.validateErrors();
    }
    onMaxPriceRangeChange(ev) {
        this.max_price = ev;
        this.validateErrors();
    }
    // rental price range
    onMinRentalPriceRangeChange(ev) {
        this.minRentalPrice = ev;
        this.validateRent();
    }
    onMaxRentalPriceRangeChange(ev) {
        this.maxRentalPrice = ev;
        this.validateRent();
    }
    onQtyChange(ev) {
        this.min_price_inventory = ev;
    }
    ngAfterViewInit() {
        var _a, _b, _c, _d, _e;
        if (this.source == 'SHOP') {
            this.openModal(this.template);
        }
        (_a = this.infiniteScroll) === null || _a === void 0 ? void 0 : _a.scrolled.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(2000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe((resp) => {
            var _a, _b;
            (_a = this.infiniteScroll) === null || _a === void 0 ? void 0 : _a.ngOnDestroy();
            (_b = this.infiniteScroll) === null || _b === void 0 ? void 0 : _b.setup();
            this.getProducts(true);
        });
        let sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.filterFormGroup.controls['minRentalPrice'].valueChanges, this.filterFormGroup.controls['maxRentalPrice'].valueChanges, this.filterFormGroup.controls['minPrice'].valueChanges, this.filterFormGroup.controls['maxPrice'].valueChanges, this.filterFormGroup.controls['qty'].valueChanges);
        sub
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
            if (data) {
                this.isLoading = true;
                this.resetList();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe((data) => {
            if (data && this.filterFormGroup.valid) {
                this.resetList();
                this.getProducts();
            }
        });
        let buy = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])((_c = (_b = this.filterFormGroup) === null || _b === void 0 ? void 0 : _b.controls['minPrice']) === null || _c === void 0 ? void 0 : _c.valueChanges, (_e = (_d = this.filterFormGroup) === null || _d === void 0 ? void 0 : _d.controls['maxPrice']) === null || _e === void 0 ? void 0 : _e.valueChanges);
        buy.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeAll"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe((data) => {
            if (data && this.filterFormGroup.valid && this.min_price != '' && this.max_price != '') {
                const obj = {
                    "min_price": this.min_price,
                    "max_price": this.max_price
                };
                this._shopService.generateRent(obj).subscribe((data) => {
                    if (data) {
                        this.minRentalPrice = data.minRent;
                        this.maxRentalPrice = data.maxRent;
                    }
                });
            }
        });
    }
    openModal(templateRef) {
        let dialogRef = this._dialog.open(templateRef, {
            width: '90%',
            maxHeight: '95vh',
            panelClass: 'shop-dialog',
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.selectedIndex = 0;
        });
    }
    closeModal() {
        this._dialog.closeAll();
    }
    filterProductPopup() {
        this.show = true;
        this.closeModal();
        this.getProducts();
    }
    getProducts(scroll) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.isLoading = true;
        let catIds = this.catListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid)
            .toString();
        let cityIds = this.cityListDefault
            .filter((item) => item.isChecked)
            .map((i) => i.sgid)
            .toString();
        let param = {
            start: this.lLimit,
            count: this.hLimit,
            category: catIds,
            warehouse: cityIds,
            keywords: this.searchKeywords,
        };
        if (this.min_price != '')
            param['min_price'] = this.min_price;
        if (this.max_price != '')
            param['max_price'] = this.max_price;
        if (this.minRentalPrice != '')
            param['rental_min_price'] = this.minRentalPrice;
        if (this.maxRentalPrice != '')
            param['rental_max_price'] = this.maxRentalPrice;
        if (this.min_price_inventory != '')
            param['min_price_inventory'] = this.min_price_inventory;
        if (((_b = (_a = this.daterange) === null || _a === void 0 ? void 0 : _a.get('start')) === null || _b === void 0 ? void 0 : _b.value) && ((_d = (_c = this.daterange) === null || _c === void 0 ? void 0 : _c.get('end')) === null || _d === void 0 ? void 0 : _d.value)) {
            param['preferred_delivery_start_date'] = this.getFormattedDate((_f = (_e = this.daterange) === null || _e === void 0 ? void 0 : _e.get('start')) === null || _f === void 0 ? void 0 : _f.value);
            param['preferred_delivery_end_date'] = this.getFormattedDate((_h = (_g = this.daterange) === null || _g === void 0 ? void 0 : _g.get('end')) === null || _h === void 0 ? void 0 : _h.value);
        }
        this._shopService.getProducts(param).subscribe((data) => {
            this.isLoading = false;
            if (data && data.result && data.result.length >= 0) {
                if (scroll) {
                    this.productList.push(...data.result);
                }
                else {
                    this.productList = data.result;
                }
                this.lLimit += this.hLimit;
            }
        }, (error) => {
            this.productList = [];
        });
    }
    getFormattedDate(val) {
        return `${val.getFullYear()}-${val.getMonth() + 1}-${val.getDate()}`;
    }
    itemClick(product) {
        this.productClick.emit(product);
        if (this.source == 'SHOP') {
            this._router.navigate([
                'shop',
                product.product_id,
                product.warehouse_id,
                product.sku_variation_id,
            ]);
        }
    }
    search(input) {
        this.searchKeywords = input !== null && input !== void 0 ? input : null;
        this.resetList();
        this.getProducts();
    }
    resetList() {
        this.productList = [];
        this.startCount = 0;
        this.lLimit = 0;
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_shop_service__WEBPACK_IMPORTED_MODULE_5__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_6__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_9__["CoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["lib-shop"]], viewQuery: function ShopComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.template = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myStepper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.infiniteScroll = _t.first);
    } }, inputs: { source: "source", lLimit: "lLimit", hLimit: "hLimit", searchPlaceholder: "searchPlaceholder" }, outputs: { productClick: "productClick" }, decls: 108, vars: 40, consts: [["fxLayout", "column", "fxLayoutAlign", " stretch ", 1, "mb"], ["fxLayout", "row", "fxLayoutGap", "2rem", "fxLayoutAlign", "stretch", 1, "mb-details"], ["fxFlex", "22", "fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "stretch center", 1, "left", 2, "padding", "1rem"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 1, "filter"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "aria-label", "", 3, "click"], ["action", "", 3, "formGroup"], [1, "filter"], [1, "filter-inner"], [1, "fas", "fa-funnel-dollar", "filter-img", "filter-icon"], [1, "filter-label"], ["fxLayout", "column", 1, "check-wrapper"], [1, "row", "mt-2", "mr-2", "pl-2", "pull-left"], [4, "ngFor", "ngForOf"], ["class", "badge badge-secondary p-2 pointer mr-2 mb-2", 3, "click", 4, "ngIf"], [4, "ngIf"], ["src", "assets/shop/locationNew.svg", "alt", "Cities", 1, "filter-img"], [4, "ngFor", "ngForOf", "ngForAs"], [1, "view-more", 3, "click"], ["src", "assets/shop/categoryNew.svg", "alt", "Cities", 1, "filter-img"], ["src", "assets/shop/budgetNew.svg", "alt", "Cities", 1, "filter-img"], ["fxLayoutGap", "1rem", "fxLayout", "row wrap"], ["fxFlex", "40", "appearance", "fill"], ["type", "number", "formControlName", "minPrice", "matInput", "", 3, "value", "min", "input"], ["minb", ""], ["type", "number", "formControlName", "maxPrice", "matInput", "", 3, "value", "min", "input"], ["maxb", ""], ["class", "validation", 4, "ngIf"], ["src", "assets/shop/rent-icon.svg", "alt", "Cities", 1, "filter-img"], ["formControlName", "minRentalPrice", "matInput", "", "min", "-1", 3, "value", "input"], ["minR", ""], ["type", "number", "formControlName", "maxRentalPrice", "matInput", "", "min", "1", 3, "value", "input"], ["maxR", ""], ["src", "assets/shop/quantityNew.svg", "alt", "Cities", 1, "filter-img"], ["appearance", "fill"], ["type", "number", "formControlName", "qty", "step", "1", "oninput", "this.value = isNaN(Math.abs(this.value))?null:Math.abs(this.value)", "matInput", "", "min", "1", 3, "value", "input"], ["minQty", ""], ["class", "filter", 4, "ngIf"], ["fxFlex", "80", "fxLayout", "column"], ["class", "right-head-search", "fxLayout", "column", 4, "ngIf"], ["fxFlex", "", "fxLayout", "row wrap", "fxLayoutGap", "1rem", "infiniteScroll", "", 1, "shop", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow"], ["class", "shop__card", "fxFlex", "22", 3, "click", 4, "ngFor", "ngForOf"], ["class", "", "fxFlex", "100", "fxLayoutAlign", "stretch stretch", 4, "ngIf"], ["viewMoreCity", ""], ["viewMoreCat", ""], ["quickFilter", ""], [1, "badge", "badge-secondary", "p-2", "pointer", "mr-2", "mb-2", 3, "click"], [1, "fa", "fa-close"], [1, "wrapText", 3, "checked", "title", "change"], [1, "validation"], ["src", "assets/shop/delivery-01.svg", "alt", "Cities", 1, "filter-img"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "value", "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "value", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["fxLayout", "column", 1, "right-head-search"], [3, "placeholder", "search"], [1, "search_placeholder"], [2, "margin-bottom", "0px"], ["fxFlex", "22", 1, "shop__card", 3, "click"], ["class", "tile-box", 4, "ngIf"], ["mat-card-image", "", "alt", "Photo of a Shiba Inu", 3, "src"], ["class", "title", 4, "ngIf"], ["class", "shop__card--content", 4, "ngIf"], [1, "tile-box"], [1, "title"], [1, "shop__card--content"], [1, "shop-label"], [1, "shop-value"], ["fxFlex", "100", "fxLayoutAlign", "stretch stretch", 1, ""], ["class", "lodding", 4, "ngIf"], [1, "lodding"], ["fxLayout", "row-reverse"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "20px"], ["fxFlex", "25", 1, "wrapText", 3, "checked", "title", "change"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem", 2, "padding", "10px"], ["fxFlex", "20", 1, "wrapText", 3, "checked", "title", "change"], [3, "linear", "selectedIndex"], ["stepper", ""], ["fxLayout", "row-reverse", "fxLayoutAlign", "space-between center", 2, "background", "#f8f8f8", "margin", "0px -24px 0px -24px"], ["mat-dialog-title", ""], ["fxLayoutGap", "2rem", "fxLayout", "column", "fxLayoutAlign", "center center", 2, "padding-bottom", "10px"], [1, "text-center", "popup-title"], [1, "text-center", "popup-title-head"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "row", "justify-content-center", "mt-5"], ["fxLayout", "column", "fxLayoutAlign", "space-between center", 1, "img-icon-wrapper", "icon", 3, "click"], ["src", "assets/shop/locationNew.svg", "alt", "", 1, "img-icon"], [1, "font17"], [2, "margin", "0 -18px 0px -5px"], ["src", "assets/shop/Line.svg", "alt", "", 1, "img-icon", "line"], ["src", "assets/shop/categoryNew.svg", "alt", "", 1, "img-icon"], [2, "margin", "0 -5px 0 -18px"], ["src", "assets/shop/budgetNew.svg", "alt", "", 1, "img-icon"], [2, "margin", "0 -1px 0 -5px"], ["src", "assets/shop/quantityNew.svg", "alt", "", 1, "img-icon"], ["src", "assets/shop/delivery-01.svg", "alt", "", 1, "img-icon"], ["fxLayoutAlign", "center center"], ["mat-raised-button", "", "matStepperNext", "", "color", "accent", "aria-label", "", 1, "btn"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin", "0 -25px", "height", "50px", "background", "rgb(248, 248, 248)"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "margin", "0 25px"], ["src", "assets/shop/location.svg", "alt", "Cities", 1, "filter-img-popup", 2, "margin-top", "33px", "margin-right", "10px"], ["mat-dialog-title", "", 1, "font25", 2, "margin", "0"], ["fxLayout", "row-reverse", 1, "", 2, "margin", "0 25px"], ["fxLayout", "column", "fxLayoutAlign", "stretch center", 2, "padding-bottom", "10px", "padding-top", "15px"], [2, "font-size", "25px"], ["fxLayout", "row wrap", "fxLayoutGap", "1rem", 2, "padding", "10px"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", "fxLayout", "row", 2, "padding-top", "10px"], ["mat-raised-button", "", "matStepperPrevious", "", "color", "accent", "aria-label", "", 1, "btn"], ["src", "assets/shop/category.svg", "alt", "Cities", 1, "filter-img-popup", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayout", "column", "fxLayoutAlign", "stretch center", 2, "max-height", "60vh", "padding-bottom", "10px", "padding-top", "15px"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", "fxLayout", "row", 2, "padding", "1rem"], ["src", "assets/shop/budget.svg", "alt", "Cities", 1, "filter-img-popup", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "padding-bottom", "10px", "padding-top", "15px"], [2, "font-size", "20px"], [3, "formGroup"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem"], ["fxLayoutAlign", "center center", "fxLayoutGap", "2rem", "fxLayout", "column", 1, "price-input"], [1, "h2"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-around center"], ["fxLayout", "column", "fxFlex", "30", "fxLayoutAlign", "center center"], ["fxFill", "", "appearance", "fill"], ["type", "number", "formControlName", "minPrice", "matInput", "", "min", "0", 3, "value", "input"], ["min", ""], ["type", "number", "formControlName", "maxPrice", "matInput", "", "min", "1", 3, "value", "input"], ["max", ""], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "center center"], ["type", "number", "matInput", "", "min", "0", 3, "value", "input"], ["type", "number", "matInput", "", "min", "1", 3, "value", "input"], ["mat-raised-button", "", "matStepperNext", "", "color", "accent", "class", "btn", "aria-label", "", 4, "ngIf"], ["src", "assets/shop/quantity.svg", "alt", "Cities", 1, "filter-img-popup", 2, "margin-top", "33px", "margin-right", "10px"], ["fxLayoutAlign", "center center", 2, "padding", "10px 0px"], ["appearance", "fill", "fxFlex", "90"], ["type", "number", "step", "1", "matInput", "", "min", "1", 3, "value", "input"], ["src", "assets/shop/delivery-01.svg", "alt", "Cities", 1, "filter-img-popup", 2, "margin-top", "33px", "margin-right", "10px"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["mat-raised-button", "", "matStepperNext", "", "color", "accent", "aria-label", "", 1, "btn", 3, "click"], ["fxFlex", "22", 1, "wrapText", 3, "checked", "title", "change"], ["fxFlex", "23", 1, "wrapText", 3, "checked", "title", "change"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShopComponent_button_4_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_button_click_5_listener() { return ctx.resetFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "APPLIED FILTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShopComponent_ng_container_17_Template, 6, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShopComponent_ng_container_18_Template, 6, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShopComponent_span_20_Template, 7, 2, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ShopComponent_span_22_Template, 9, 2, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ShopComponent_span_23_Template, 5, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ShopComponent_ng_container_24_Template, 9, 8, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "CITIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ShopComponent_ng_container_32_Template, 3, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_div_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](103); return ctx.openModal(_r20); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "CATEGORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, ShopComponent_ng_container_44_Template, 3, 3, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShopComponent_Template_div_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105); return ctx.openModal(_r22); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "BUY PRICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Min $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_input_input_59_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](60); return ctx.onMinPriceRangeChange(_r9.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Max $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 25, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_input_input_64_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.onMaxPriceRangeChange(_r10.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, ShopComponent_div_66_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "RENTAL PRICE/12 MONTHS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Min $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_input_input_77_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](78); return ctx.onMinRentalPriceRangeChange(_r12.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Max $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "input", 31, 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_input_input_82_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](83); return ctx.onMaxRentalPriceRangeChange(_r13.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ShopComponent_div_84_Template, 2, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "AVAILABLE QUANTITY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Minimum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ShopComponent_Template_input_input_94_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](95); return ctx.onQtyChange(_r15.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](96, ShopComponent_div_96_Template, 15, 5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, ShopComponent_div_98_Template, 8, 1, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, ShopComponent_mat_card_100_Template, 5, 4, "mat-card", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](101, ShopComponent_mat_card_101_Template, 3, 2, "mat-card", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, ShopComponent_ng_template_102_Template, 5, 1, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](104, ShopComponent_ng_template_104_Template, 5, 1, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ShopComponent_ng_template_106_Template, 189, 18, "ng-template", null, 45, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.source == "SHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.filterFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedCity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.min_price != "" || ctx.max_price != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minRentalPrice != "" || ctx.maxRentalPrice != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.min_price_inventory > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.daterange == null ? null : ctx.daterange.value == null ? null : ctx.daterange.value.start) && (ctx.daterange == null ? null : ctx.daterange.value == null ? null : ctx.daterange.value.end));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](33, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 32, ctx.cityList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](45, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 38, ctx.categoriesList), 0, 3))("ngForAs", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.min_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.max_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("min", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterFormGroup == null ? null : ctx.filterFormGroup.errors == null ? null : ctx.filterFormGroup.errors.buyPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.minRentalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.maxRentalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterFormGroup == null ? null : ctx.filterFormGroup.errors == null ? null : ctx.filterFormGroup.errors.rentalPrice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx.min_price_inventory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.source == "SHOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.source == "MD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 1000)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productList.length == 0 || ctx.isLoading);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangeInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatStartDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatEndDate"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDateRangePicker"], _core_src_lib_components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_18__["SearchBarComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStep"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogContent"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__["MatStepperPrevious"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["FlexFillDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]    > .mat-card-header-text[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.mb[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  overflow-y: auto;\n}\n.mb[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n.filter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  padding-bottom: 15px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 5px;\n  width: 100%;\n  border-bottom: 1px solid #ccc;\n}\n.margin-top30[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  height: 50px;\n  justify-content: center;\n}\n.check-wrapper[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.check-wrapper[_ngcontent-%COMP%]   .view-more[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-family: \"Poppins\";\n  font-size: 10px;\n  font-weight: 500;\n  font-style: normal;\n  color: #157FFB;\n  line-height: 23px;\n  background: #F3F3F3;\n  padding: 0px 10px;\n  width: 75px;\n  border-radius: 55px;\n  margin-top: 15px;\n  margin-bottom: 1rem;\n}\n.shop[_ngcontent-%COMP%] {\n  padding: 1rem;\n  max-height: 1000px;\n  overflow-y: scroll;\n}\n.shop__card[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  margin-bottom: 1rem;\n}\n.shop__card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 200px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.title[_ngcontent-%COMP%] {\n  color: #2C2C2C;\n  font-weight: bold;\n}\n.badge-secondary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #6c757d;\n  padding: 5px;\n  font-size: 10px;\n  border-radius: 5px;\n}\n  .mat-horizontal-stepper-header-container {\n  display: none !important;\n}\n.margin-top-24[_ngcontent-%COMP%] {\n  margin-top: -30px;\n}\n.margin-right-24[_ngcontent-%COMP%] {\n  margin-right: -24px;\n}\n.mat-dialog-title[_ngcontent-%COMP%] {\n  margin: 5px 8px 5px;\n}\n.mat-dialog-title[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n}\n.font25[_ngcontent-%COMP%] {\n  font: 500 17px/17px regular;\n  font-family: \"Poppins\" !important;\n}\n.popup-title[_ngcontent-%COMP%] {\n  font-size: 20px;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n  font-family: \"Poppins\" !important;\n  font-size: 20px;\n  font-weight: bold;\n  margin-bottom: 2rem;\n  padding-top: 2rem;\n  font-weight: 500 !important;\n}\n.popup-title-head[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-weight: 100 !important;\n}\n.popup-title[_ngcontent-%COMP%]   .shop-label[_ngcontent-%COMP%], .popup-title[_ngcontent-%COMP%]   .shop-value[_ngcontent-%COMP%] {\n  letter-spacing: 0.04em;\n  line-height: 1rem;\n  font-size: 0.8rem;\n}\n.popup-title[_ngcontent-%COMP%]   .shop-label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  padding-right: 0.5rem;\n}\n.img-icon[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  margin-bottom: 15px;\n}\n.img-icon-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-style: normal;\n  font-weight: 400;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 180px;\n  border-radius: 50px;\n  font-style: normal;\n  font-size: 19px;\n  font-weight: 700;\n  height: 48px;\n}\n.close[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  padding: 0.5rem;\n  margin: 0;\n  font-size: 30px;\n  cursor: pointer;\n}\n.filter-img[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n}\n.filter-img-popup[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n}\n.filter-label[_ngcontent-%COMP%] {\n  font-family: brandon grotesque;\n  font-weight: bold;\n  font-size: 16px;\n}\n.font17[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.wrapText[_ngcontent-%COMP%] {\n  width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]     .mat-form-field-flex {\n  padding: 1.5rem 0.75em 0rem 0.75em !important;\n}\n[_nghost-%COMP%]     .mat-form-field-underline::before {\n  height: 0px !important;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover ~ .mat-form-field-underline .mat-form-field-ripple {\n  opacity: 0 !important;\n}\n[_nghost-%COMP%]     .mat-form-field-infix {\n  border-top: -1rem !important;\n}\n[_nghost-%COMP%]     .mat-form-field-ripple {\n  height: 0px !important;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-underline::before {\n  height: 0px !important;\n}\n[_nghost-%COMP%]     .mat-form-field-appearance-fill .mat-form-field-flex {\n  padding: 1.75em 0.75em 0 0.75em;\n}\n[_nghost-%COMP%]     .mat-card-content {\n  font-size: 12px !important;\n}\n[_nghost-%COMP%]     .mat-card:not([class*=mat-elevation-z]) {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25) !important;\n}\n.tile-box[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  padding: 5px;\n  width: 26px;\n  height: 23px;\n  color: #f4f4f4;\n  background: #6c757d;\n  border-radius: 5px 0px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.price-input[_ngcontent-%COMP%] {\n  background-color: #F4F4F4;\n}\n.validation[_ngcontent-%COMP%] {\n  color: red;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNob3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUFFO0VBQ0UsU0FBQTtBQUVKO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBQUY7QUFFRTtFQUNFLDJCQUFBO0FBQUo7QUFPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQUpKO0FBTUU7RUFFRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFMSjtBQVFBO0VBQ0UsZ0JBQUE7QUFMRjtBQU9BO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUpGO0FBTUE7RUFDRSxrQkFBQTtBQUhGO0FBSUU7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFNQTtFQUNFLGFBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0FBSkY7QUFPRTtFQUNFLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBTUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQUpOO0FBV0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUFSRjtBQVVBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVBGO0FBVUE7RUFDRSx3QkFBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtBQVBGO0FBU0E7RUFDRSxtQkFBQTtBQU5GO0FBUUE7RUFDRSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFMRjtBQU9BO0VBQ0UsMkJBQUE7RUFDQSxpQ0FBQTtBQUpGO0FBTUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDRSxpQkFBQTtFQUNBLDJCQUFBO0FBSEo7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQU1BOztFQUVFLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUpGO0FBT0E7RUFDRSxpQkFBQTtFQUNBLHFCQUFBO0FBTEY7QUFVQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVNBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEY7QUFPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFKRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQU1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFIRjtBQUtBO0VBQ0UsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFGRjtBQUlBO0VBQ0UsZUFBQTtBQURGO0FBR0E7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLDZDQUFBO0FBQUY7QUFHQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLHFCQUFBO0FBQUY7QUFHQTtFQUNFLDRCQUFBO0FBQUY7QUFHQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLHNCQUFBO0FBQUY7QUFHQTtFQUNFLCtCQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0FBQUY7QUFHQTtFQUNFLHNEQUFBO0FBQUY7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNDLHlCQUFBO0FBQUQ7QUFHQTtFQUNHLFVBQUE7RUFDQSxtQkFBQTtBQUFIIiwiZmlsZSI6InNob3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICY+IC5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLm1iIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAvLyBtYXgtaGVpZ2h0OiA4MDBweCAhaW1wb3J0YW50O1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5maWx0ZXIge1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAmLWlubmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgJi1sYWJlbCB7XHJcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgfVxyXG59XHJcbi5tYXJnaW4tdG9wMzAge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jaGVjay13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgLnZpZXctbW9yZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjMTU3RkZCO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzO1xyXG4gICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICB3aWR0aDogNzVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zaG9wIHtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIC8vIGhlaWdodDogODAwcHggIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAxMDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIC8vIHBhZGRpbmctdG9wOiAyOXJlbTtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDE1cmVtO1xyXG4gICZfX2NhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAmIGltZyB7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICB9XHJcbiAgICAvLyAmLS1jb250ZW50e1xyXG4gICAgLy8gICBtYXJnaW46IDAgMTZweDtcclxuICAgIC8vIH1cclxuICB9XHJcbn1cclxuLnRpdGxlIHtcclxuICBjb2xvcjogIzJDMkMyQztcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYmFkZ2Utc2Vjb25kYXJ5IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFyZ2luLXRvcC0yNCB7XHJcbiAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuLm1hcmdpbi1yaWdodC0yNCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMjRweDtcclxufVxyXG4ubWF0LWRpYWxvZy10aXRsZSB7XHJcbiAgbWFyZ2luOiA1cHggOHB4IDVweFxyXG4gXHJcbn1cclxuLm1hdC1kaWFsb2ctdGl0bGUgYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9udDI1e1xyXG4gIGZvbnQ6NTAwIDE3cHgvMTdweCByZWd1bGFyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycgIWltcG9ydGFudDtcclxufVxyXG4ucG9wdXAtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJyAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgJi1oZWFkIHtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLnNob3AtbGFiZWwsXHJcbi5zaG9wLXZhbHVlIHtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MHJlbTtcclxufVxyXG5cclxuLnNob3AtbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuXHJcbn1cclxuLmltZy1pY29uIHtcclxuICB3aWR0aDogOTBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4uaW1nLWljb24td3JhcHBlciBzcGFue1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDsgICBcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5maWx0ZXItaW1nIHtcclxuICB3aWR0aDogNDVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItaW1nLXBvcHVwIHtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuLmZpbHRlci1sYWJlbHtcclxuICBmb250LWZhbWlseTogYnJhbmRvbiBncm90ZXNxdWU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5mb250MTcge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG4ud3JhcFRleHQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICBwYWRkaW5nOiAxLjVyZW0gMC43NWVtIDByZW0gMC43NWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xyXG4gIGhlaWdodDowcHggIWltcG9ydGFudFxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbDpub3QoLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkKSAubWF0LWZvcm0tZmllbGQtZmxleDpob3Zlcn4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgYm9yZGVyLXRvcDogLTFyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gIGhlaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XHJcbiAgaGVpZ2h0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gIHBhZGRpbmc6IDEuNzVlbSAwLjc1ZW0gMCAwLjc1ZW07XHJcbn0gXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPW1hdC1lbGV2YXRpb24tel0pIHtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aWxlLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB0b3A6IDBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyM3B4O1xyXG4gIGNvbG9yOiAjZjRmNGY0O1xyXG4gIGJhY2tncm91bmQ6ICM2Yzc1N2Q7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByaWNlLWlucHV0IHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uIHtcclxuICAgY29sb3I6IHJlZDtcclxuICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "RUVo":
/*!***********************************************!*\
  !*** ./projects/shop/src/lib/shop.routing.ts ***!
  \***********************************************/
/*! exports provided: shopRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shopRouting", function() { return shopRouting; });
/* harmony import */ var _common_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/product-details/product-details.component */ "qS0q");
/* harmony import */ var _components_zero_zero_seven_zero_zero_seven_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/zero-zero-seven/zero-zero-seven.component */ "dX9P");
/* harmony import */ var _components_shop_home_shop_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shop-home/shop-home.component */ "BxmO");



const shopRouting = [
    {
        path: '',
        component: _components_shop_home_shop_home_component__WEBPACK_IMPORTED_MODULE_2__["ShopHomeComponent"],
    }, {
        path: ':productId/:warehouseId/:variationId',
        component: _common_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsComponent"]
    }, {
        path: ':productId/:warehouseId/:variationId/007',
        component: _components_zero_zero_seven_zero_zero_seven_component__WEBPACK_IMPORTED_MODULE_1__["ZeroZeroSevenComponent"]
    }
];


/***/ }),

/***/ "c2mM":
/*!**********************************************************************************************************!*\
  !*** ./projects/moodboard/src/lib/components/create-moodboard-popup/create-moodboard-popup.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreateMoodboardPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateMoodboardPopupComponent", function() { return CreateMoodboardPopupComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/moodboard.service */ "zU2b");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");














function CreateMoodboardPopupComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-button-toggle", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", item_r10 == null ? null : item_r10.type_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", item_r10.imageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", item_r10.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r10.value);
} }
function CreateMoodboardPopupComponent_a_30_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardPopupComponent_a_30_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.showPDropdown = !ctx_r12.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardPopupComponent_a_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "error-border": a0 }; };
function CreateMoodboardPopupComponent_input_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 40);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, (tmp_0_0 = ctx_r3.mbCreateForm.get("moodboardProjectName")) == null ? null : tmp_0_0.invalid));
} }
function CreateMoodboardPopupComponent_select_33_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prj_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", prj_r15.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", prj_r15.project, " ");
} }
function CreateMoodboardPopupComponent_select_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardPopupComponent_select_33_option_1_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, (tmp_0_0 = ctx_r4.mbCreateForm.get("project_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.projectList);
} }
function CreateMoodboardPopupComponent_a_47_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardPopupComponent_a_47_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r16.showDropdown = !ctx_r16.showDropdown; return ctx_r16.showPDropdown = !ctx_r16.showPDropdown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CreateMoodboardPopupComponent_a_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0, a1) { return { "error-border": a0, "read-only": a1 }; };
function CreateMoodboardPopupComponent_input_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 44);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("readonly", !ctx_r7._user.getUser().isInternalUser())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](2, _c1, (tmp_1_0 = ctx_r7.mbCreateForm.get("moodboardCompany")) == null ? null : tmp_1_0.invalid, !ctx_r7._user.getUser().isInternalUser()));
} }
function CreateMoodboardPopupComponent_select_50_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cmp_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", cmp_r19.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", cmp_r19.company, " ");
} }
function CreateMoodboardPopupComponent_select_50_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "select", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CreateMoodboardPopupComponent_select_50_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.getProjectList("", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CreateMoodboardPopupComponent_select_50_option_1_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, (tmp_0_0 = ctx_r8.mbCreateForm.get("company_id")) == null ? null : tmp_0_0.invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.companyList);
} }
function CreateMoodboardPopupComponent_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const state_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r22.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", state_r22.name, " ");
} }
class CreateMoodboardPopupComponent {
    constructor(fb, moodboardService, _user, _toster, _quoteService, _dialogRef, activatedRoute, router) {
        this.fb = fb;
        this.moodboardService = moodboardService;
        this._user = _user;
        this._toster = _toster;
        this._quoteService = _quoteService;
        this._dialogRef = _dialogRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.stateList = [];
        this.mbTypeList = [];
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
        this.showPDropdown = false;
        this.showDropdown = false;
        this.dCompanyList = [];
        this.companyList = [];
        this.projectList = [];
        this.selectedCompany = '';
        this.selectedProject = '';
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
    }
    ngOnInit() {
        this.getStates();
        this.getMoodBoardType();
        this.getcompanyByUserMoodboard();
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
                moodboardType: response.moodboard.boardtypeid,
                moodboardCompany: response.moodboard.company_name,
                moodboardProjectName: response.moodboard.project_name,
                moodboardState: response.moodboard.state,
                moodboardCity: response.moodboard.city,
                moodboardZip: response.moodboard.zipcode
            });
        });
    }
    resetForm() {
        this.mbCreateForm.reset();
    }
    cancel() {
        this._dialogRef.close();
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
        this.moodboardService.createMoodboard(param).subscribe((response) => {
            if (response.statusCode === 200) {
                this._toster.success(response.message);
                //    this.router.navigate(['moodboard',response.moodboard_id])
            }
            else
                this._toster.error(response.message);
        }, error => this._toster.error('Please contact site administrator!'));
    }
}
CreateMoodboardPopupComponent.ɵfac = function CreateMoodboardPopupComponent_Factory(t) { return new (t || CreateMoodboardPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_moodboard_service__WEBPACK_IMPORTED_MODULE_2__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_3__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
CreateMoodboardPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateMoodboardPopupComponent, selectors: [["lib-create-moodboard-popup"]], decls: 69, vars: 24, consts: [["fxFlex", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "mb-create__form"], ["fxLayout", "row", "fxFlex", "100", 2, "width", "100%"], ["fxFlex", "95", "fxLayout", "row", "fxLayoutAlign", "center center"], [1, "mb-create__form--title"], ["fxFlex", "5", "fxLayout", "row", "fxLayoutAlign", "row-reverse"], [1, "mb-create__form--title", 3, "click"], ["src", "assets/moodboard/images/close-22.svg", "height", "22px", "width", "22px"], [1, "mb-form"], [1, "add-field", 3, "formGroup"], [1, "label", 2, "display", "flex"], [1, "asterisk"], ["formControlName", "moodboardType", "aria-label", "Moodboard Type"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-form-inner"], ["fxLayout", "column", "fxLayoutAlign", "stretch", "fxLayoutGap", "2rem"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", " stretch"], [1, "label"], ["type", "text", "formControlName", "moodboardName", "placeholder", "Name your Board", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "stretch", 2, "padding", "0px", "margin", "0 0 0 -15px"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 3, "click", 4, "ngIf"], ["style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass", 4, "ngIf"], ["formControlName", "project_id", 3, "ngClass", 4, "ngIf"], ["type", "text", "formControlName", "moodboardCity", "placeholder", "Enter a City", 3, "ngClass"], ["mat-button", "", "style", "padding: 0px 10px 0px 9px; margin: -4px -5px -5px 0px;", "class", "add", 4, "ngIf"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass", 4, "ngIf"], ["formControlName", "company_id", 3, "ngClass", "change", 4, "ngIf"], ["formControlName", "moodboardState", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "text", "formControlName", "moodboardZip", "placeholder", "Add a ZipCode", 3, "ngClass"], ["fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "2rem", 1, "mb-create__actions"], ["mat-raised-button", "", 1, "btn", "btn-primary", 3, "disabled", "click"], ["mat-raised-button", "", 1, "btn", "btn-cancel", 3, "click"], [1, "toggle-btn", 3, "value"], ["mat-card-image", "", "width", "100px", "height", "100px", 3, "src", "alt"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center", 1, "text"], ["fxLayout", "row", 1, "text-lable"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px", 3, "click"], ["src", "assets/moodboard/images/SVG-Icons-06.svg"], [1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardProjectName", "placeholder", "Add Project Name", 3, "ngClass"], ["formControlName", "project_id", 3, "ngClass"], [3, "value"], ["mat-button", "", 1, "add", 2, "padding", "0px 10px 0px 9px", "margin", "-4px -5px -5px 0px"], ["type", "text", "formControlName", "moodboardCompany", "placeholder", "Add Company Name", 3, "readonly", "ngClass"], ["formControlName", "company_id", 3, "ngClass", "change"]], template: function CreateMoodboardPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " CREATE A NEW MOODBOARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardPopupComponent_Template_span_click_6_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Moodboard Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-button-toggle-group", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CreateMoodboardPopupComponent_ng_container_15_Template, 6, 4, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Moodboard Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Project Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CreateMoodboardPopupComponent_a_30_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CreateMoodboardPopupComponent_a_31_Template, 2, 0, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, CreateMoodboardPopupComponent_input_32_Template, 1, 3, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CreateMoodboardPopupComponent_select_33_Template, 2, 4, "select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, CreateMoodboardPopupComponent_a_47_Template, 2, 0, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CreateMoodboardPopupComponent_a_48_Template, 2, 0, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, CreateMoodboardPopupComponent_input_49_Template, 1, 5, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CreateMoodboardPopupComponent_select_50_Template, 2, 4, "select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](57, CreateMoodboardPopupComponent_option_57_Template, 2, 2, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Zip Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardPopupComponent_Template_button_click_65_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, " CREATE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateMoodboardPopupComponent_Template_button_click_67_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "CANCEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_7_0 = null;
        let tmp_12_0 = null;
        let tmp_14_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mbCreateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.catagorydata);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](16, _c0, (tmp_2_0 = ctx.mbCreateForm.get("moodboardName")) == null ? null : tmp_2_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showPDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c0, (tmp_7_0 = ctx.mbCreateForm.get("moodboardCity")) == null ? null : tmp_7_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx._user.getUser().isInternalUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._user.getUser().isInternalUser() && !ctx.showDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c0, (tmp_12_0 = ctx.mbCreateForm.get("moodboardState")) == null ? null : tmp_12_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.stateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c0, (tmp_14_0 = ctx.mbCreateForm.get("moodboardZip")) == null ? null : tmp_14_0.invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.mbCreateForm.invalid);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardImage"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatAnchor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_z"]], styles: [".mb-create__form[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background: #f4f4f4;\n}\n.mb-create__form--title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2E2E2E;\n  line-height: 33px;\n  font-weight: bold;\n}\n.mb-create__form--elements[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 2rem 4rem 2rem;\n}\n.mb-create__form--elements[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.mb-create__actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.mb-create__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 24px;\n  align-self: center;\n}\n.mat-button-toggle[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  padding: 0px;\n  border: none;\n  margin: 3px;\n  border-radius: 5px;\n}\n.mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: none;\n  padding: 5px;\n}\n.label[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 23px;\n  color: #000000;\n  padding-bottom: 5px;\n}\ninput[_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  padding: 0.6rem 1rem;\n  font-size: inherit;\n  border: 1px;\n}\nselect[_ngcontent-%COMP%] {\n  margin: 0;\n  box-sizing: border-box;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  padding: 0.5em 3.5em 0.5em 1em;\n  \n  background-image: url(\"/assets/quote/images/SVG-Icons-14.svg\");\n  \n  background-position: right;\n  background-repeat: no-repeat;\n}\n.asterisk[_ngcontent-%COMP%] {\n  color: red;\n}\n.error-border[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n.read-only[_ngcontent-%COMP%] {\n  background: #e9ecef;\n}\n.btn[_ngcontent-%COMP%] {\n  width: 190px;\n  height: 45px;\n  border-radius: 50px;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: #F6E15F;\n  color: #000000;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  background: #2C2C2C;\n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNyZWF0ZS1tb29kYm9hcmQtcG9wdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUNNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBQ1I7QUFDTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUNSO0FBQVE7RUFDRSxhQUFBO0FBRVY7QUFFSTtFQUVFLGdCQUFBO0FBRE47QUFFTTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFJQTtFQUNFLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7O0VBRUUsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDRTtFQUNFLFNBQUE7RUFHQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFFQSw4QkFBQTtFQUNBOzs7R0FBQTtFQUlBLDhEQUFBO0VBQ0E7aUVBQUE7RUFFQSwwQkFBQTtFQUNBLDRCQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7QUFDSjtBQUVFO0VBQ0UscUJBQUE7QUFDSjtBQUNFO0VBQ0UsbUJBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKO0FBREU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFJSjtBQUZFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBS0oiLCJmaWxlIjoiY3JlYXRlLW1vb2Rib2FyZC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYi1jcmVhdGUge1xyXG4gICAgJl9fZm9ybSB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgICAgICYtLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyRTJFMkU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuICAgICAgJi0tZWxlbWVudHMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbSA0cmVtIDJyZW07XHJcbiAgICAgICAgJiBkaXYge1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2FjdGlvbnMge1xyXG4gICAgICAvLyB3aWR0aDogNDAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAmIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuLm1hdC1idXR0b24tdG9nZ2xle1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNHB4IHJnYigwIDAgMCAvIDI1JSk7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3Vwe1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA1cHg7ICBcclxufSBcclxuICAubGFiZWwge1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCxcclxuICBzZWxlY3Qge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgfVxyXG4gIHNlbGVjdCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIFxyXG4gICAgcGFkZGluZzogMC41ZW0gMy41ZW0gMC41ZW0gMWVtO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCB0cmFuc3BhcmVudCA1MCUsIGdyYXkgNTAlKSxcclxuICAgIC8vICAgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgZ3JheSA1MCUsIHRyYW5zcGFyZW50IDUwJSksXHJcbiAgICAgICByYWRpYWwtZ3JhZGllbnQoI2ZlYmYyZCA5MiUsIHRyYW5zcGFyZW50IDcyJSk7XHJcbiAgICAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9xdW90ZS9pbWFnZXMvU1ZHLUljb25zLTE0LnN2Z1wiKTtcclxuICAgIC8qYmFja2dyb3VuZC1wb3NpdGlvbjogY2FsYygxMDAlIC0gMjBweCkgY2FsYygxZW0gKyAycHgpLFxyXG4gICAgICBjYWxjKDEwMCUgLSAxNXB4KSBjYWxjKDFlbSArIDJweCksIGNhbGMoMTAwJSAtIDAuNWVtKSAwLjVlbTsqL1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICBcclxuICAuYXN0ZXJpc2sge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLWJvcmRlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgfVxyXG4gIC5yZWFkLW9ubHkge1xyXG4gICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcclxuICB9XHJcbiAgLmJ0biB7XHJcbiAgICB3aWR0aDogMTkwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogI0Y2RTE1RjtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICAuYnRuLWNhbmNlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAgIzJDMkMyQztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "d57d":
/*!**********************************************!*\
  !*** ./projects/shop/src/lib/shop.module.ts ***!
  \**********************************************/
/*! exports provided: ShopModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopModule", function() { return ShopModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shop_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shop.routing */ "RUVo");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _components_zero_zero_seven_zero_zero_seven_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/zero-zero-seven/zero-zero-seven.component */ "dX9P");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _common_shop_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/shop-common.module */ "HDTZ");
/* harmony import */ var _components_shop_home_shop_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shop-home/shop-home.component */ "BxmO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ShopModule {
}
ShopModule.ɵfac = function ShopModule_Factory(t) { return new (t || ShopModule)(); };
ShopModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ShopModule });
ShopModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_2__["STEPPER_GLOBAL_OPTIONS"],
            useValue: { displayDefaultIndicatorType: false }
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(_shop_routing__WEBPACK_IMPORTED_MODULE_1__["shopRouting"]),
            _common_shop_common_module__WEBPACK_IMPORTED_MODULE_6__["ShopCommonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ShopModule, { declarations: [_components_zero_zero_seven_zero_zero_seven_component__WEBPACK_IMPORTED_MODULE_3__["ZeroZeroSevenComponent"], _components_shop_home_shop_home_component__WEBPACK_IMPORTED_MODULE_7__["ShopHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _common_shop_common_module__WEBPACK_IMPORTED_MODULE_6__["ShopCommonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"]] }); })();


/***/ }),

/***/ "dX9P":
/*!***************************************************************************************!*\
  !*** ./projects/shop/src/lib/components/zero-zero-seven/zero-zero-seven.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ZeroZeroSevenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZeroZeroSevenComponent", function() { return ZeroZeroSevenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/moodboard/src/lib/services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ZeroZeroSevenComponent_mat_card_32_tbody_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wh_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wh_r5.warehouse == null ? null : wh_r5.warehouse.warehouse_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wh_r5.non_assigned_inv ? wh_r5.non_assigned_inv : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wh_r5.supplier_quantity ? wh_r5.supplier_quantity : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wh_r5.non_assigned_inv + wh_r5.supplier_quantity);
} }
function ZeroZeroSevenComponent_mat_card_32_li_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", attr_r7.attribute.type, " : ", attr_r7.attribute.name, " ");
} }
function ZeroZeroSevenComponent_mat_card_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Supplier Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "BU x: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BU Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "BN x: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "BN Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Rental Price (12 mo): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Supplier SKU: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Inhabitr SKU: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total Available Qty: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Warehouse(s):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Warehouse");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Inh. Inv.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Sup. Inv.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Tot. Inv.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ZeroZeroSevenComponent_mat_card_32_tbody_59_Template, 10, 4, "tbody", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Attributes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ZeroZeroSevenComponent_mat_card_32_li_64_Template, 2, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const details_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r1.supplier.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", details_r1 == null ? null : details_r1.default_images[0] == null ? null : details_r1.default_images[0].image_url == null ? null : details_r1.default_images[0].image_url.small, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 13, details_r1.pricing_asset_value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r1.supplier.business_pdm_buy_used_multiplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 15, details_r1.buyUsedPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r1.supplier.business_pdm_buy_new_multiplier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 17, details_r1.buyPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 19, details_r1 == null ? null : details_r1.default_price[24] == null ? null : details_r1.default_price[24].rental_price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((details_r1 == null ? null : details_r1.product_number) !== null ? details_r1 == null ? null : details_r1.product_number : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](details_r1.inhabitr_sku !== "null" ? details_r1.inhabitr_sku : "NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sumTotal(details_r1 == null ? null : details_r1.warehouse_location_new) + ctx_r0.sumSUpplierTotal(details_r1 == null ? null : details_r1.warehouse_location_new));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", details_r1 == null ? null : details_r1.warehouse_location_new);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", details_r1 == null ? null : details_r1.attribute_combination);
} }
class ZeroZeroSevenComponent {
    constructor(_moodboardService, _route, _router) {
        this._moodboardService = _moodboardService;
        this._route = _route;
        this._router = _router;
        this.productId = NaN;
        this.warehouseId = NaN;
        this.sgId = NaN;
        this.availQty = NaN;
    }
    ngOnInit() {
        this._route.params.subscribe((data) => {
            this.productId = data.productId;
            this.warehouseId = data.warehouseId;
            this.sgId = data.sgid;
            this.getProduct(this.productId, this.warehouseId);
        });
    }
    viewProduct() {
        this._router.navigate([
            'item',
            this.productId,
            this.warehouseId,
            this.sgId
        ]);
    }
    sumTotal(totData) {
        let invTotal;
        invTotal = 0;
        totData.forEach((tot) => {
            if (tot.non_assigned_inv !== null) {
                invTotal += parseInt(tot.non_assigned_inv);
            }
        });
        return invTotal;
    }
    sumSUpplierTotal(sData) {
        let supTotal;
        supTotal = 0;
        sData.forEach((stot) => {
            if (stot.supplier_quantity !== null) {
                supTotal += parseInt(stot.supplier_quantity);
            }
        });
        return supTotal;
    }
    getProduct(pid, wid) {
        this._moodboardService
            .getProductDetails(pid, wid)
            .subscribe((response) => {
            var _a, _b;
            this.productDetails = response.result;
            // this logic is because at some point warehouse_location_new is empty in variations so checking if empty pull qty from next variation
            (_b = (_a = this.productDetails) === null || _a === void 0 ? void 0 : _a.variations) === null || _b === void 0 ? void 0 : _b.forEach((element) => {
                if (element.warehouse_location_new.length > 0) {
                    this.availQty = parseInt(element.warehouse_location_new[0].sum_inhabitr_quantity) + parseInt(element.warehouse_location_new[0].sum_supplier_quantity);
                }
                else {
                    this.availQty = 0;
                }
            });
        });
    }
}
ZeroZeroSevenComponent.ɵfac = function ZeroZeroSevenComponent_Factory(t) { return new (t || ZeroZeroSevenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_1__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ZeroZeroSevenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZeroZeroSevenComponent, selectors: [["lib-zero-zero-seven"]], decls: 33, vars: 5, consts: [["fxLayoutGap", "1rem", "fxLayout", "row", "fxLayoutAlign", "center", 1, "product"], ["fxFlex", "90", "fxLayout", "column", "fxLayoutAlign", "center center"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutGap", "1rem", "fxLayoutAlign", "center", 1, "product-details"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutAlign", "center"], ["fxFlex", ""], ["width", "100%"], ["width", "33%"], ["width", "66%"], ["mat-flat-button", "", "color", "accent", 2, "margin", "12px", 3, "click"], ["fxLayout", "row wrap", "fxLayoutGap", "2rem"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "mb-2"], ["alt", "", 2, "width", "100px", "height", "100px", "position", "absolute", 3, "src"], [1, "mb-2", "mt-4"], [1, "table", "table-bodered"], [4, "ngFor", "ngForOf"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [2, "text-transform", "capitalize"], [1, "list-group-item"]], template: function ZeroZeroSevenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Product Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Total Available Qty:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Registered with Ops:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZeroZeroSevenComponent_Template_button_click_29_listener() { return ctx.viewProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " View Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ZeroZeroSevenComponent_mat_card_32_Template, 65, 21, "mat-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.category == null ? null : ctx.productDetails.category.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.availQty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.productDetails == null ? null : ctx.productDetails.is_publish_ops) === 1 ? "Yes" : "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails == null ? null : ctx.productDetails.variations);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 15px;\n  border-collapse: collapse;\n}\n\ntd[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 5px;\n}\n\n.card[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  list-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHplcm8temVyby1zZXZlbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxnQkFBQTtBQUlKIiwiZmlsZSI6Inplcm8temVyby1zZXZlbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG50ZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxpc3QtZ3JvdXAge1xyXG4gICAgbGlzdC1zdHlsZTogIG5vbmU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "dlKe":
/*!**************************************************************************************!*\
  !*** ./node_modules/ngx-infinite-scroll/__ivy_ngcc__/modules/ngx-infinite-scroll.js ***!
  \**************************************************************************************/
/*! exports provided: InfiniteScrollDirective, InfiniteScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollDirective", function() { return InfiniteScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollModule", function() { return InfiniteScrollModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




/**
 * @fileoverview added by tsickle
 * Generated from: src/services/ngx-ins-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} selector
 * @param {?} scrollWindow
 * @param {?} defaultElement
 * @param {?} fromRoot
 * @return {?}
 */

function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
    /** @type {?} */
    const hasWindow = window && !!window.document && window.document.documentElement;
    /** @type {?} */
    let container = hasWindow && scrollWindow ? window : defaultElement;
    if (selector) {
        /** @type {?} */
        const containerIsString = selector && hasWindow && typeof selector === 'string';
        container = containerIsString
            ? findElement(selector, defaultElement.nativeElement, fromRoot)
            : selector;
        if (!container) {
            throw new Error('ngx-infinite-scroll {resolveContainerElement()}: selector for');
        }
    }
    return container;
}
/**
 * @param {?} selector
 * @param {?} customRoot
 * @param {?} fromRoot
 * @return {?}
 */
function findElement(selector, customRoot, fromRoot) {
    /** @type {?} */
    const rootEl = fromRoot ? window.document : customRoot;
    return rootEl.querySelector(selector);
}
/**
 * @param {?} prop
 * @return {?}
 */
function inputPropChanged(prop) {
    return prop && !prop.firstChange;
}
/**
 * @return {?}
 */
function hasWindowDefined() {
    return typeof window !== 'undefined';
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/axis-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const VerticalProps = {
    clientHeight: "clientHeight",
    offsetHeight: "offsetHeight",
    scrollHeight: "scrollHeight",
    pageYOffset: "pageYOffset",
    offsetTop: "offsetTop",
    scrollTop: "scrollTop",
    top: "top"
};
/** @type {?} */
const HorizontalProps = {
    clientHeight: "clientWidth",
    offsetHeight: "offsetWidth",
    scrollHeight: "scrollWidth",
    pageYOffset: "pageXOffset",
    offsetTop: "offsetLeft",
    scrollTop: "scrollLeft",
    top: "left"
};
class AxisResolver {
    /**
     * @param {?=} vertical
     */
    constructor(vertical = true) {
        this.vertical = vertical;
        this.propsMap = vertical ? VerticalProps : HorizontalProps;
    }
    /**
     * @return {?}
     */
    clientHeightKey() {
        return this.propsMap.clientHeight;
    }
    /**
     * @return {?}
     */
    offsetHeightKey() {
        return this.propsMap.offsetHeight;
    }
    /**
     * @return {?}
     */
    scrollHeightKey() {
        return this.propsMap.scrollHeight;
    }
    /**
     * @return {?}
     */
    pageYOffsetKey() {
        return this.propsMap.pageYOffset;
    }
    /**
     * @return {?}
     */
    offsetTopKey() {
        return this.propsMap.offsetTop;
    }
    /**
     * @return {?}
     */
    scrollTopKey() {
        return this.propsMap.scrollTop;
    }
    /**
     * @return {?}
     */
    topKey() {
        return this.propsMap.top;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/event-trigger.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @param {?} alwaysCallback
 * @param {?} shouldFireScrollEvent
 * @param {?} isTriggeredCurrentTotal
 * @return {?}
 */
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent, isTriggeredCurrentTotal) {
    if (alwaysCallback && shouldFireScrollEvent) {
        return true;
    }
    if (!isTriggeredCurrentTotal && shouldFireScrollEvent) {
        return true;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/position-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} __0
 * @return {?}
 */
function createResolver({ windowElement, axis }) {
    return createResolverWithContainer({ axis, isWindow: isElementWindow(windowElement) }, windowElement);
}
/**
 * @param {?} resolver
 * @param {?} windowElement
 * @return {?}
 */
function createResolverWithContainer(resolver, windowElement) {
    /** @type {?} */
    const container = resolver.isWindow || (windowElement && !windowElement.nativeElement)
        ? windowElement
        : windowElement.nativeElement;
    return Object.assign(Object.assign({}, resolver), { container });
}
/**
 * @param {?} windowElement
 * @return {?}
 */
function isElementWindow(windowElement) {
    /** @type {?} */
    const isWindow = ['Window', 'global'].some((/**
     * @param {?} obj
     * @return {?}
     */
    (obj) => Object.prototype.toString.call(windowElement).includes(obj)));
    return isWindow;
}
/**
 * @param {?} isContainerWindow
 * @param {?} windowElement
 * @return {?}
 */
function getDocumentElement(isContainerWindow, windowElement) {
    return isContainerWindow ? windowElement.document.documentElement : null;
}
/**
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePoints(element, resolver) {
    /** @type {?} */
    const height = extractHeightForElement(resolver);
    return resolver.isWindow
        ? calculatePointsForWindow(height, element, resolver)
        : calculatePointsForElement(height, element, resolver);
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForWindow(height, element, resolver) {
    const { axis, container, isWindow } = resolver;
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    // scrolled until now / current y point
    /** @type {?} */
    const scrolled = height +
        getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
    // total height / most bottom y point
    /** @type {?} */
    const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
    /** @type {?} */
    const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) +
        nativeElementHeight;
    return { height, scrolled, totalToScroll, isWindow };
}
/**
 * @param {?} height
 * @param {?} element
 * @param {?} resolver
 * @return {?}
 */
function calculatePointsForElement(height, element, resolver) {
    const { axis, container } = resolver;
    // perhaps use container.offsetTop instead of 'scrollTop'
    /** @type {?} */
    const scrolled = container[axis.scrollTopKey()];
    /** @type {?} */
    const totalToScroll = container[axis.scrollHeightKey()];
    return { height, scrolled, totalToScroll, isWindow: false };
}
/**
 * @param {?} axis
 * @return {?}
 */
function extractHeightPropKeys(axis) {
    return {
        offsetHeightKey: axis.offsetHeightKey(),
        clientHeightKey: axis.clientHeightKey()
    };
}
/**
 * @param {?} __0
 * @return {?}
 */
function extractHeightForElement({ container, isWindow, axis }) {
    const { offsetHeightKey, clientHeightKey } = extractHeightPropKeys(axis);
    return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
/**
 * @param {?} elem
 * @param {?} isWindow
 * @param {?} offsetHeightKey
 * @param {?} clientHeightKey
 * @return {?}
 */
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
    if (isNaN(elem[offsetHeightKey])) {
        /** @type {?} */
        const docElem = getDocumentElement(isWindow, elem);
        return docElem ? docElem[clientHeightKey] : 0;
    }
    else {
        return elem[offsetHeightKey];
    }
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementOffsetTop(elem, axis, isWindow) {
    /** @type {?} */
    const topKey = axis.topKey();
    // elem = elem.nativeElement;
    if (!elem.getBoundingClientRect) {
        // || elem.css('none')) {
        return;
    }
    return (elem.getBoundingClientRect()[topKey] +
        getElementPageYOffset(elem, axis, isWindow));
}
/**
 * @param {?} elem
 * @param {?} axis
 * @param {?} isWindow
 * @return {?}
 */
function getElementPageYOffset(elem, axis, isWindow) {
    /** @type {?} */
    const pageYOffset = axis.pageYOffsetKey();
    /** @type {?} */
    const scrollTop = axis.scrollTopKey();
    /** @type {?} */
    const offsetTop = axis.offsetTopKey();
    if (isNaN(window.pageYOffset)) {
        return getDocumentElement(isWindow, elem)[scrollTop];
    }
    else if (elem.ownerDocument) {
        return elem.ownerDocument.defaultView[pageYOffset];
    }
    else {
        return elem[offsetTop];
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-resolver.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} container
 * @param {?} distance
 * @param {?} scrollingDown
 * @return {?}
 */
function shouldFireScrollEvent(container, distance, scrollingDown) {
    /** @type {?} */
    let remaining;
    /** @type {?} */
    let containerBreakpoint;
    if (container.totalToScroll <= 0) {
        return false;
    }
    /** @type {?} */
    const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
    if (scrollingDown) {
        remaining =
            (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
        containerBreakpoint = distance.down / 10;
    }
    else {
        /** @type {?} */
        const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
        remaining = container.scrolled / totalHiddenContentHeight;
        containerBreakpoint = distance.up / 10;
    }
    /** @type {?} */
    const shouldFireEvent = remaining <= containerBreakpoint;
    return shouldFireEvent;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @return {?}
 */
function isScrollingDownwards(lastScrollPosition, container) {
    return lastScrollPosition < container.scrolled;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} container
 * @param {?} distance
 * @return {?}
 */
function getScrollStats(lastScrollPosition, container, distance) {
    /** @type {?} */
    const scrollDown = isScrollingDownwards(lastScrollPosition, container);
    return {
        fire: shouldFireScrollEvent(container, distance, scrollDown),
        scrollDown
    };
}
/**
 * @param {?} position
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} scrollState
 * @return {?}
 */

/**
 * @param {?} scroll
 * @param {?} scrollState
 * @param {?} triggered
 * @param {?} isScrollingDown
 * @return {?}
 */

/**
 * @param {?} totalToScroll
 * @param {?} scrollState
 * @param {?} isScrollingDown
 * @return {?}
 */

/**
 * @param {?} scrollState
 * @param {?} scrolledUntilNow
 * @param {?} totalToScroll
 * @return {?}
 */

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ScrollState {
    /**
     * @param {?} __0
     */
    constructor({ totalToScroll }) {
        this.lastScrollPosition = 0;
        this.lastTotalToScroll = 0;
        this.totalToScroll = 0;
        this.triggered = {
            down: 0,
            up: 0
        };
        this.totalToScroll = totalToScroll;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    updateScrollPosition(position) {
        return (this.lastScrollPosition = position);
    }
    /**
     * @param {?} totalToScroll
     * @return {?}
     */
    updateTotalToScroll(totalToScroll) {
        if (this.lastTotalToScroll !== totalToScroll) {
            this.lastTotalToScroll = this.totalToScroll;
            this.totalToScroll = totalToScroll;
        }
    }
    /**
     * @param {?} scrolledUntilNow
     * @param {?} totalToScroll
     * @return {?}
     */
    updateScroll(scrolledUntilNow, totalToScroll) {
        this.updateScrollPosition(scrolledUntilNow);
        this.updateTotalToScroll(totalToScroll);
    }
    /**
     * @param {?} scroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    updateTriggeredFlag(scroll, isScrollingDown) {
        if (isScrollingDown) {
            this.triggered.down = scroll;
        }
        else {
            this.triggered.up = scroll;
        }
    }
    /**
     * @param {?} totalToScroll
     * @param {?} isScrollingDown
     * @return {?}
     */
    isTriggeredScroll(totalToScroll, isScrollingDown) {
        return isScrollingDown
            ? this.triggered.down === totalToScroll
            : this.triggered.up === totalToScroll;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/services/scroll-register.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createScroller(config) {
    const { scrollContainer, scrollWindow, element, fromRoot } = config;
    /** @type {?} */
    const resolver = createResolver({
        axis: new AxisResolver(!config.horizontal),
        windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
    });
    /** @type {?} */
    const scrollState = new ScrollState({
        totalToScroll: calculatePoints(element, resolver)
    });
    /** @type {?} */
    const options = {
        container: resolver.container,
        throttle: config.throttle
    };
    /** @type {?} */
    const distance = {
        up: config.upDistance,
        down: config.downDistance
    };
    return attachScrollEvent(options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])((/**
     * @return {?}
     */
    () => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(calculatePoints(element, resolver)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((/**
     * @param {?} positionStats
     * @return {?}
     */
    (positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ stats }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ fire, scrollDown, stats: { totalToScroll } }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((/**
     * @param {?} __0
     * @return {?}
     */
    ({ scrollDown, stats: { totalToScroll } }) => {
        scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
    })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(toInfiniteScrollAction));
}
/**
 * @param {?} options
 * @return {?}
 */
function attachScrollEvent(options) {
    /** @type {?} */
    let obs = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(options.container, 'scroll');
    // For an unknown reason calling `sampleTime()` causes trouble for many users, even with `options.throttle = 0`.
    // Let's avoid calling the function unless needed.
    // Replacing with throttleTime seems to solve the problem
    // See https://github.com/orizens/ngx-infinite-scroll/issues/198
    if (options.throttle) {
        obs = obs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(options.throttle));
    }
    return obs;
}
/**
 * @param {?} lastScrollPosition
 * @param {?} stats
 * @param {?} distance
 * @return {?}
 */
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
    const { scrollDown, fire } = getScrollStats(lastScrollPosition, stats, distance);
    return {
        scrollDown,
        fire,
        stats
    };
}
/** @type {?} */
const InfiniteScrollActions = {
    DOWN: '[NGX_ISE] DOWN',
    UP: '[NGX_ISE] UP'
};
/**
 * @param {?} response
 * @return {?}
 */
function toInfiniteScrollAction(response) {
    const { scrollDown, stats: { scrolled: currentScrollPosition } } = response;
    return {
        type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
        payload: {
            currentScrollPosition
        }
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/infinite-scroll.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfiniteScrollDirective {
    /**
     * @param {?} element
     * @param {?} zone
     */
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.scrolled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.scrolledUp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.infiniteScrollDistance = 2;
        this.infiniteScrollUpDistance = 1.5;
        this.infiniteScrollThrottle = 150;
        this.infiniteScrollDisabled = false;
        this.infiniteScrollContainer = null;
        this.scrollWindow = true;
        this.immediateCheck = false;
        this.horizontal = false;
        this.alwaysCallback = false;
        this.fromRoot = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.infiniteScrollDisabled) {
            this.setup();
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    ngOnChanges({ infiniteScrollContainer, infiniteScrollDisabled, infiniteScrollDistance }) {
        /** @type {?} */
        const containerChanged = inputPropChanged(infiniteScrollContainer);
        /** @type {?} */
        const disabledChanged = inputPropChanged(infiniteScrollDisabled);
        /** @type {?} */
        const distanceChanged = inputPropChanged(infiniteScrollDistance);
        /** @type {?} */
        const shouldSetup = (!disabledChanged && !this.infiniteScrollDisabled) ||
            (disabledChanged && !infiniteScrollDisabled.currentValue) || distanceChanged;
        if (containerChanged || disabledChanged || distanceChanged) {
            this.destroyScroller();
            if (shouldSetup) {
                this.setup();
            }
        }
    }
    /**
     * @return {?}
     */
    setup() {
        if (hasWindowDefined()) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.disposeScroller = createScroller({
                    fromRoot: this.fromRoot,
                    alwaysCallback: this.alwaysCallback,
                    disable: this.infiniteScrollDisabled,
                    downDistance: this.infiniteScrollDistance,
                    element: this.element,
                    horizontal: this.horizontal,
                    scrollContainer: this.infiniteScrollContainer,
                    scrollWindow: this.scrollWindow,
                    throttle: this.infiniteScrollThrottle,
                    upDistance: this.infiniteScrollUpDistance
                }).subscribe((/**
                 * @param {?} payload
                 * @return {?}
                 */
                (payload) => this.zone.run((/**
                 * @return {?}
                 */
                () => this.handleOnScroll(payload)))));
            }));
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    handleOnScroll({ type, payload }) {
        switch (type) {
            case InfiniteScrollActions.DOWN:
                return this.scrolled.emit(payload);
            case InfiniteScrollActions.UP:
                return this.scrolledUp.emit(payload);
            default:
                return;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyScroller();
    }
    /**
     * @return {?}
     */
    destroyScroller() {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    }
}
InfiniteScrollDirective.ɵfac = function InfiniteScrollDirective_Factory(t) { return new (t || InfiniteScrollDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
InfiniteScrollDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InfiniteScrollDirective, selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]], inputs: { infiniteScrollDistance: "infiniteScrollDistance", infiniteScrollUpDistance: "infiniteScrollUpDistance", infiniteScrollThrottle: "infiniteScrollThrottle", infiniteScrollDisabled: "infiniteScrollDisabled", infiniteScrollContainer: "infiniteScrollContainer", scrollWindow: "scrollWindow", immediateCheck: "immediateCheck", horizontal: "horizontal", alwaysCallback: "alwaysCallback", fromRoot: "fromRoot" }, outputs: { scrolled: "scrolled", scrolledUp: "scrolledUp" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
InfiniteScrollDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }
];
InfiniteScrollDirective.propDecorators = {
    scrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    scrolledUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    infiniteScrollDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollUpDistance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollThrottle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    infiniteScrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    scrollWindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    immediateCheck: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    horizontal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    alwaysCallback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    fromRoot: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[infiniteScroll], [infinite-scroll], [data-infinite-scroll]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { scrolled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrolledUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], infiniteScrollDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infiniteScrollUpDistance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infiniteScrollThrottle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infiniteScrollDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], infiniteScrollContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scrollWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], immediateCheck: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], horizontal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], alwaysCallback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fromRoot: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/modules/ngx-infinite-scroll.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfiniteScrollModule {
}
InfiniteScrollModule.ɵfac = function InfiniteScrollModule_Factory(t) { return new (t || InfiniteScrollModule)(); };
InfiniteScrollModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InfiniteScrollModule });
InfiniteScrollModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [], imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfiniteScrollModule, { declarations: [InfiniteScrollDirective], exports: [InfiniteScrollDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfiniteScrollModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [InfiniteScrollDirective],
                exports: [InfiniteScrollDirective],
                imports: [],
                providers: []
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/ngx-infinite-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking.
 * Written by Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-infinite-scroll.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-infinite-scroll.js.map

/***/ }),

/***/ "jaxi":
/*!*******************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js ***!
  \*******************************************************************************/
/*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggle, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function() { return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP", function() { return MAT_BUTTON_TOGGLE_GROUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function() { return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function() { return MatButtonToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function() { return MatButtonToggleChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function() { return MatButtonToggleGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function() { return MatButtonToggleModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "0EQZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token that can be used to configure the
 * default options for all button toggles within an app.
 */




const _c0 = ["button"];
const _c1 = ["*"];
const MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
/**
 * Injection token that can be used to reference instances of `MatButtonToggleGroup`.
 * It serves as alternative token to the actual `MatButtonToggleGroup` class which
 * could cause unnecessary retention of the class and its component metadata.
 */
const MAT_BUTTON_TOGGLE_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatButtonToggleGroup');
/**
 * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 * @docs-private
 */
const MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatButtonToggleGroup),
    multi: true
};
// Counter used to generate unique IDs.
let uniqueIdCounter = 0;
/** Change event object emitted by MatButtonToggle. */
class MatButtonToggleChange {
    constructor(
    /** The MatButtonToggle that emits the event. */
    source, 
    /** The value assigned to the MatButtonToggle. */
    value) {
        this.source = source;
        this.value = value;
    }
}
/** Exclusive selection button toggle group that behaves like a radio-button group. */
class MatButtonToggleGroup {
    constructor(_changeDetector, defaultOptions) {
        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = () => { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this._onTouched = () => { };
        this._name = `mat-button-toggle-group-${uniqueIdCounter++}`;
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * @docs-private
         */
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** Event emitted when the group's value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    /** `name` attribute for the underlying `input` element. */
    get name() { return this._name; }
    set name(value) {
        this._name = value;
        if (this._buttonToggles) {
            this._buttonToggles.forEach(toggle => {
                toggle.name = this._name;
                toggle._markForCheck();
            });
        }
    }
    /** Whether the toggle group is vertical. */
    get vertical() { return this._vertical; }
    set vertical(value) {
        this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /** Value of the toggle group. */
    get value() {
        const selected = this._selectionModel ? this._selectionModel.selected : [];
        if (this.multiple) {
            return selected.map(toggle => toggle.value);
        }
        return selected[0] ? selected[0].value : undefined;
    }
    set value(newValue) {
        this._setSelectionByValue(newValue);
        this.valueChange.emit(this.value);
    }
    /** Selected button toggles in the group. */
    get selected() {
        const selected = this._selectionModel ? this._selectionModel.selected : [];
        return this.multiple ? selected : (selected[0] || null);
    }
    /** Whether multiple button toggles can be selected. */
    get multiple() { return this._multiple; }
    set multiple(value) {
        this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
    /** Whether multiple button toggle group is disabled. */
    get disabled() { return this._disabled; }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (this._buttonToggles) {
            this._buttonToggles.forEach(toggle => toggle._markForCheck());
        }
    }
    ngOnInit() {
        this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
    }
    ngAfterContentInit() {
        this._selectionModel.select(...this._buttonToggles.filter(toggle => toggle.checked));
    }
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value Value to be set to the model.
     */
    writeValue(value) {
        this.value = value;
        this._changeDetector.markForCheck();
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
    /** Dispatch change event with current selection and group value. */
    _emitChangeEvent() {
        const selected = this.selected;
        const source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
        const event = new MatButtonToggleChange(source, this.value);
        this._controlValueAccessorChangeFn(event.value);
        this.change.emit(event);
    }
    /**
     * Syncs a button toggle's selected state with the model value.
     * @param toggle Toggle to be synced.
     * @param select Whether the toggle should be selected.
     * @param isUserInput Whether the change was a result of a user interaction.
     * @param deferEvents Whether to defer emitting the change events.
     */
    _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
        // Deselect the currently-selected toggle, if we're in single-selection
        // mode and the button being toggled isn't selected at the moment.
        if (!this.multiple && this.selected && !toggle.checked) {
            this.selected.checked = false;
        }
        if (this._selectionModel) {
            if (select) {
                this._selectionModel.select(toggle);
            }
            else {
                this._selectionModel.deselect(toggle);
            }
        }
        else {
            deferEvents = true;
        }
        // We need to defer in some cases in order to avoid "changed after checked errors", however
        // the side-effect is that we may end up updating the model value out of sequence in others
        // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.
        if (deferEvents) {
            Promise.resolve().then(() => this._updateModelValue(isUserInput));
        }
        else {
            this._updateModelValue(isUserInput);
        }
    }
    /** Checks whether a button toggle is selected. */
    _isSelected(toggle) {
        return this._selectionModel && this._selectionModel.isSelected(toggle);
    }
    /** Determines whether a button toggle should be checked on init. */
    _isPrechecked(toggle) {
        if (typeof this._rawValue === 'undefined') {
            return false;
        }
        if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(value => toggle.value != null && value === toggle.value);
        }
        return toggle.value === this._rawValue;
    }
    /** Updates the selection state of the toggles in the group based on a value. */
    _setSelectionByValue(value) {
        this._rawValue = value;
        if (!this._buttonToggles) {
            return;
        }
        if (this.multiple && value) {
            if (!Array.isArray(value) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw Error('Value must be an array in multiple-selection mode.');
            }
            this._clearSelection();
            value.forEach((currentValue) => this._selectValue(currentValue));
        }
        else {
            this._clearSelection();
            this._selectValue(value);
        }
    }
    /** Clears the selected toggles. */
    _clearSelection() {
        this._selectionModel.clear();
        this._buttonToggles.forEach(toggle => toggle.checked = false);
    }
    /** Selects a value if there's a toggle that corresponds to it. */
    _selectValue(value) {
        const correspondingOption = this._buttonToggles.find(toggle => {
            return toggle.value != null && toggle.value === value;
        });
        if (correspondingOption) {
            correspondingOption.checked = true;
            this._selectionModel.select(correspondingOption);
        }
    }
    /** Syncs up the group's value with the model and emits the change event. */
    _updateModelValue(isUserInput) {
        // Only emit the change event for user input.
        if (isUserInput) {
            this._emitChangeEvent();
        }
        // Note: we emit this one no matter whether it was a user interaction, because
        // it is used by Angular to sync up the two-way data binding.
        this.valueChange.emit(this.value);
    }
}
MatButtonToggleGroup.ɵfac = function MatButtonToggleGroup_Factory(t) { return new (t || MatButtonToggleGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggleGroup.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: MatButtonToggleGroup, selectors: [["mat-button-toggle-group"]], contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, MatButtonToggle, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonToggles = _t);
    } }, hostAttrs: ["role", "group", 1, "mat-button-toggle-group"], hostVars: 5, hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { appearance: "appearance", name: "name", vertical: "vertical", value: "value", multiple: "multiple", disabled: "disabled" }, outputs: { valueChange: "valueChange", change: "change" }, exportAs: ["matButtonToggleGroup"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
            MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
            { provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: MatButtonToggleGroup },
        ])] });
MatButtonToggleGroup.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
];
MatButtonToggleGroup.propDecorators = {
    _buttonToggles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatButtonToggle), {
                    // Note that this would technically pick up toggles
                    // from nested groups, but that's not a case that we support.
                    descendants: true
                },] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleGroup, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: 'mat-button-toggle-group',
                providers: [
                    MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR,
                    { provide: MAT_BUTTON_TOGGLE_GROUP, useExisting: MatButtonToggleGroup },
                ],
                host: {
                    'role': 'group',
                    'class': 'mat-button-toggle-group',
                    '[attr.aria-disabled]': 'disabled',
                    '[class.mat-button-toggle-vertical]': 'vertical',
                    '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
                },
                exportAs: 'matButtonToggleGroup'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], _buttonToggles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => MatButtonToggle), {
                    // Note that this would technically pick up toggles
                    // from nested groups, but that's not a case that we support.
                    descendants: true
                }]
        }] }); })();
// Boilerplate for applying mixins to the MatButtonToggle class.
/** @docs-private */
class MatButtonToggleBase {
}
const _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
/** Single button inside of a toggle group. */
class MatButtonToggle extends _MatButtonToggleMixinBase {
    constructor(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, defaultTabIndex, defaultOptions) {
        super();
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this._isSingleSelector = false;
        this._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        this._disabled = false;
        /** Event emitted when the group value changes. */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        this.buttonToggleGroup = toggleGroup;
        this.appearance =
            defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
    }
    /** Unique ID for the underlying `button` element. */
    get buttonId() { return `${this.id}-button`; }
    /** The appearance style of the button. */
    get appearance() {
        return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
    }
    set appearance(value) {
        this._appearance = value;
    }
    /** Whether the button is checked. */
    get checked() {
        return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
    }
    set checked(value) {
        const newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        if (newValue !== this._checked) {
            this._checked = newValue;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked);
            }
            this._changeDetectorRef.markForCheck();
        }
    }
    /** Whether the button is disabled. */
    get disabled() {
        return this._disabled || (this.buttonToggleGroup && this.buttonToggleGroup.disabled);
    }
    set disabled(value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value); }
    ngOnInit() {
        const group = this.buttonToggleGroup;
        this._isSingleSelector = group && !group.multiple;
        this.id = this.id || `mat-button-toggle-${uniqueIdCounter++}`;
        if (this._isSingleSelector) {
            this.name = group.name;
        }
        if (group) {
            if (group._isPrechecked(this)) {
                this.checked = true;
            }
            else if (group._isSelected(this) !== this._checked) {
                // As as side effect of the circular dependency between the toggle group and the button,
                // we may end up in a state where the button is supposed to be checked on init, but it
                // isn't, because the checked value was assigned too early. This can happen when Ivy
                // assigns the static input value before the `ngOnInit` has run.
                group._syncButtonToggle(this, this._checked);
            }
        }
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this._elementRef, true);
    }
    ngOnDestroy() {
        const group = this.buttonToggleGroup;
        this._focusMonitor.stopMonitoring(this._elementRef);
        // Remove the toggle from the selection once it's destroyed. Needs to happen
        // on the next tick in order to avoid "changed after checked" errors.
        if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
        }
    }
    /** Focuses the button. */
    focus(options) {
        this._buttonElement.nativeElement.focus(options);
    }
    /** Checks the button toggle due to an interaction with the underlying native button. */
    _onButtonClick() {
        const newChecked = this._isSingleSelector ? true : !this._checked;
        if (newChecked !== this._checked) {
            this._checked = newChecked;
            if (this.buttonToggleGroup) {
                this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
                this.buttonToggleGroup._onTouched();
            }
        }
        // Emit a change event when it's the single selector
        this.change.emit(new MatButtonToggleChange(this, this.value));
    }
    /**
     * Marks the button toggle as needing checking for change detection.
     * This method is exposed because the parent button toggle group will directly
     * update bound properties of the radio button.
     */
    _markForCheck() {
        // When the group value changes, the button will not be notified.
        // Use `markForCheck` to explicit update button toggle's status.
        this._changeDetectorRef.markForCheck();
    }
}
MatButtonToggle.ɵfac = function MatButtonToggle_Factory(t) { return new (t || MatButtonToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_GROUP, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, 8)); };
MatButtonToggle.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MatButtonToggle, selectors: [["mat-button-toggle"]], viewQuery: function MatButtonToggle_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._buttonElement = _t.first);
    } }, hostAttrs: ["role", "presentation", 1, "mat-button-toggle"], hostVars: 12, hostBindings: function MatButtonToggle_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focus", function MatButtonToggle_focus_HostBindingHandler() { return ctx.focus(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
    } }, inputs: { disableRipple: "disableRipple", ariaLabelledby: ["aria-labelledby", "ariaLabelledby"], tabIndex: "tabIndex", appearance: "appearance", checked: "checked", disabled: "disabled", id: "id", name: "name", ariaLabel: ["aria-label", "ariaLabel"], value: "value" }, outputs: { change: "change" }, exportAs: ["matButtonToggle"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], ngContentSelectors: _c1, decls: 6, vars: 9, consts: [["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "id", "disabled", "click"], ["button", ""], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"]], template: function MatButtonToggle_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MatButtonToggle_Template_button_click_0_listener() { return ctx._onButtonClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 4);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx.buttonId)("disabled", ctx.disabled || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-pressed", ctx.checked)("name", ctx.name || null)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"]], styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"], encapsulation: 2, changeDetection: 0 });
MatButtonToggle.ctorParameters = () => [
    { type: MatButtonToggleGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_BUTTON_TOGGLE_GROUP,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"], args: ['tabindex',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS,] }] }
];
MatButtonToggle.propDecorators = {
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-label',] }],
    ariaLabelledby: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['aria-labelledby',] }],
    _buttonElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['button',] }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    checked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggle, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'mat-button-toggle',
                template: "<button #button class=\"mat-button-toggle-button mat-focus-indicator\"\n        type=\"button\"\n        [id]=\"buttonId\"\n        [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n        [attr.aria-pressed]=\"checked\"\n        [disabled]=\"disabled || null\"\n        [attr.name]=\"name || null\"\n        [attr.aria-label]=\"ariaLabel\"\n        [attr.aria-labelledby]=\"ariaLabelledby\"\n        (click)=\"_onButtonClick()\">\n  <span class=\"mat-button-toggle-label-content\">\n    <ng-content></ng-content>\n  </span>\n</button>\n\n<span class=\"mat-button-toggle-focus-overlay\"></span>\n<span class=\"mat-button-toggle-ripple\" matRipple\n     [matRippleTrigger]=\"button\"\n     [matRippleDisabled]=\"this.disableRipple || this.disabled\">\n</span>\n",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
                exportAs: 'matButtonToggle',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
                inputs: ['disableRipple'],
                host: {
                    '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
                    '[class.mat-button-toggle-checked]': 'checked',
                    '[class.mat-button-toggle-disabled]': 'disabled',
                    '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
                    'class': 'mat-button-toggle',
                    '[attr.aria-label]': 'null',
                    '[attr.aria-labelledby]': 'null',
                    '[attr.id]': 'id',
                    '[attr.name]': 'null',
                    '(focus)': 'focus()',
                    'role': 'presentation'
                },
                styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}.cdk-high-contrast-active .mat-button-toggle-standalone,.cdk-high-contrast-active .mat-button-toggle-group{outline:solid 1px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:4px}.cdk-high-contrast-active .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.cdk-high-contrast-active .mat-button-toggle-group-appearance-standard{outline:0}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}.cdk-high-contrast-active .mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}.cdk-high-contrast-active .mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}@media(hover: none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}.cdk-high-contrast-active .mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}.cdk-high-contrast-active .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}\n"]
            }]
    }], function () { return [{ type: MatButtonToggleGroup, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_BUTTON_TOGGLE_GROUP]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
                args: ['tabindex']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
            }] }]; }, { ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-labelledby']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
            args: ['aria-label']
        }], _buttonElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['button']
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatButtonToggleModule {
}
MatButtonToggleModule.ɵfac = function MatButtonToggleModule_Factory(t) { return new (t || MatButtonToggleModule)(); };
MatButtonToggleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MatButtonToggleModule });
MatButtonToggleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatButtonToggleModule, { declarations: function () { return [MatButtonToggleGroup, MatButtonToggle]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]]; }, exports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatButtonToggleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
                exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
                declarations: [MatButtonToggleGroup, MatButtonToggle]
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



//# sourceMappingURL=button-toggle.js.map

/***/ }),

/***/ "qS0q":
/*!***********************************************************************************!*\
  !*** ./projects/shop/src/lib/common/product-details/product-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var projects_moodboard_src_lib_components_create_moodboard_popup_create_moodboard_popup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/moodboard/src/lib/components/create-moodboard-popup/create-moodboard-popup.component */ "c2mM");
/* harmony import */ var projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/quote/src/public-api */ "EQ0Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! projects/moodboard/src/lib/services/moodboard.service */ "zU2b");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var projects_quote_src_lib_components_quote_list_quote_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/quote/src/lib/components/quote-list/quote-list.service */ "Bkdd");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _service_shop_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/shop.service */ "sRD0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _core_src_lib_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../core/src/lib/components/image-slider/image-slider.component */ "MTrk");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../../core/src/lib/cell-renderer/counter/counter.component */ "n7cx");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");


























function ProductDetailsComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r5.productdetails == null ? null : ctx_r5.productdetails.name, " - ", ctx_r5.productdetails == null ? null : ctx_r5.productdetails.variations[ctx_r5.activeIndex] == null ? null : ctx_r5.productdetails.variations[ctx_r5.activeIndex].sgid, "");
} }
function ProductDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductDetailsComponent_div_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.forDialog);
} }
function ProductDetailsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_3_Template_mat_icon_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " arrow_back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Dashboard/Product/ ", ctx_r1.productdetails == null ? null : ctx_r1.productdetails.name, "");
} }
function ProductDetailsComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", city_r10.warehouse_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](city_r10.warehouse_name);
} }
function ProductDetailsComponent_ng_container_74_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-radio-group", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_ng_container_74_div_1_Template_mat_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.selectedType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-radio-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Rent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-radio-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Buy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Qty : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-counter", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("counterChange", function ProductDetailsComponent_ng_container_74_div_1_Template_app_counter_counterChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.quantityCounter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r11.selectedType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("counter", ctx_r11.quantityCounter)("readOnly", true);
} }
function ProductDetailsComponent_ng_container_74_div_2_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No Moodborad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_74_div_2_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const moodboard_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", moodboard_r19.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](moodboard_r19.id + " - " + moodboard_r19.boardname);
} }
function ProductDetailsComponent_ng_container_74_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add/Select Moodboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_74_div_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r20.createNewMB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_ng_container_74_div_2_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.selectedMoodboard = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductDetailsComponent_ng_container_74_div_2_option_7_Template, 2, 0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductDetailsComponent_ng_container_74_div_2_option_8_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_74_div_2_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r23.addItemToMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " ADD TO MOODBOARD ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fxLayout", ctx_r12.forHitler ? "row" : "column");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r12.data == null ? null : ctx_r12.data.moodboardId)("ngModel", ctx_r12.selectedMoodboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.moodboardList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.moodboardList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r12.moodboardList.length === 0);
} }
function ProductDetailsComponent_ng_container_74_div_3_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Select a Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_74_div_3_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quote_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", quote_r26.sgid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](quote_r26.sgid + " - " + quote_r26.name);
} }
function ProductDetailsComponent_ng_container_74_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add/Select Quote");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_74_div_3_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r27.createNewQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_ng_container_74_div_3_Template_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.selectedQuote = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ProductDetailsComponent_ng_container_74_div_3_option_7_Template, 2, 0, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ProductDetailsComponent_ng_container_74_div_3_option_8_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_74_div_3_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r30.addItemToQuote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " ADD TO QUOTE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r13.selectedQuote);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.quoteList.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r13.quoteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r13.quoteList.length === 0);
} }
function ProductDetailsComponent_ng_container_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductDetailsComponent_ng_container_74_div_1_Template, 10, 3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_74_div_2_Template, 11, 6, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_74_div_3_Template, 11, 4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.forMoodboard || ctx_r3.forQuote);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.forHitler || ctx_r3.forMoodboard);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.forQuote);
} }
function ProductDetailsComponent_ng_container_75_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Quantity : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "app-counter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("counterChange", function ProductDetailsComponent_ng_container_75_Template_app_counter_counterChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.quantityCounter = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_75_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.rentMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "RENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_75_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.buyMoodboard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "BUY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("counter", ctx_r4.quantityCounter)("readOnly", true)("customCss", true);
} }
const _c0 = function (a0) { return { "dialog-padding": a0 }; };
class ProductDetailsComponent {
    constructor(_dialog, data, moodboardService, _route, _moodboardService, _quoteListService, _user, _shopService, _toaster, __dialog, _router, _location, dialogRef) {
        this._dialog = _dialog;
        this.data = data;
        this.moodboardService = moodboardService;
        this._route = _route;
        this._moodboardService = _moodboardService;
        this._quoteListService = _quoteListService;
        this._user = _user;
        this._shopService = _shopService;
        this._toaster = _toaster;
        this.__dialog = __dialog;
        this._router = _router;
        this._location = _location;
        this.dialogRef = dialogRef;
        this.panelOpenState = false;
        this.monthNums = 12;
        this.productId = NaN;
        this.warehouseId = NaN;
        this.variationId = NaN;
        this.forDialog = false;
        this.forMoodboard = true;
        this.forQuote = true;
        this.forHitler = false;
        this.selectedType = '0';
        this.quantityCounter = 1;
        this.moodboardList = [];
        this.selectedMoodboard = '';
        this.quoteList = [];
        this.selectedQuote = '';
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.data) {
            this.forDialog = this.data.hasOwnProperty('forDialog')
                ? (_a = this.data) === null || _a === void 0 ? void 0 : _a.forDialog : false;
            this.forMoodboard = this.data.hasOwnProperty('forMoodboard')
                ? (_b = this.data) === null || _b === void 0 ? void 0 : _b.forMoodboard : true;
            this.forQuote = this.data.hasOwnProperty('forQuote')
                ? (_c = this.data) === null || _c === void 0 ? void 0 : _c.forQuote : true;
            this.forHitler = this.data.hasOwnProperty('forHitler')
                ? (_d = this.data) === null || _d === void 0 ? void 0 : _d.forHitler : false;
        }
        if (!this.forDialog) {
            this._route.params.subscribe((data) => {
                this.productId = data.productId;
                this.warehouseId = data.warehouseId;
                this.variationId = data.variationId;
                this.getProduct(this.productId, this.warehouseId, this.variationId);
            });
            this.getMyMoodboards();
            this.getMyQuotes();
        }
        else {
            this.productId = (_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.item) === null || _f === void 0 ? void 0 : _f.product_id;
            this.warehouseId = (_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.item) === null || _h === void 0 ? void 0 : _h.warehouse_id;
            this.variationId = (_k = (_j = this.data) === null || _j === void 0 ? void 0 : _j.item) === null || _k === void 0 ? void 0 : _k.sku_variation_id;
            this.getProduct(this.productId, this.warehouseId, this.variationId);
            if (this.forMoodboard) {
                this.getMyMoodboards();
            }
        }
    }
    increment() {
        var _a, _b;
        if (this.quantityCounter + 1 > ((_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.supplier_quantity)) {
            return;
        }
        this.quantityCounter++;
    }
    decrement() {
        if (this.quantityCounter - 1 < 0) {
            return;
        }
        this.quantityCounter--;
    }
    updateRent(event) {
        var _a, _b;
        console.log(event);
        var actualMonths = 36;
        var userSelectedMonths = event;
        var selectedMonths = actualMonths - userSelectedMonths;
        this.monthNums = userSelectedMonths;
        (_b = (_a = this.productdetails) === null || _a === void 0 ? void 0 : _a.variations[this.activeIndex]) === null || _b === void 0 ? void 0 : _b.default_price.forEach((prices, index) => {
            if (selectedMonths == index) {
                this.rentalPrice = prices.rental_price;
            }
        });
    }
    closeModal() {
        this._dialog.closeAll();
    }
    getProduct(pid, wid, skuId) {
        this.moodboardService
            .getProductDetails(pid, wid)
            .subscribe((response) => {
            var _a, _b, _c, _d, _e;
            this.productdetails = response.result;
            this.activeIndex = response.result.variations.findIndex((item) => item.sgid == skuId);
            this.totalQty = 0;
            this.rentalPrice = (_c = (_b = (_a = this.productdetails) === null || _a === void 0 ? void 0 : _a.variations[this.activeIndex]) === null || _b === void 0 ? void 0 : _b.default_price[24]) === null || _c === void 0 ? void 0 : _c.rental_price;
            (_e = (_d = this.productdetails) === null || _d === void 0 ? void 0 : _d.variations[this.activeIndex]) === null || _e === void 0 ? void 0 : _e.warehouse_location_new.forEach((value, index) => {
                this.totalQty += value.total_warehouse_quantity;
            });
        });
    }
    getMyMoodboards() {
        this._moodboardService.getMyMoodBoardList().subscribe((data) => {
            var _a, _b;
            this.moodboardList = data === null || data === void 0 ? void 0 : data.result;
            if ((_a = this.data) === null || _a === void 0 ? void 0 : _a.moodboardId) {
                this.selectedMoodboard = this.data.moodboardId;
            }
            else if (((_b = data === null || data === void 0 ? void 0 : data.result) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                this.selectedMoodboard = data === null || data === void 0 ? void 0 : data.result[0].id;
            }
        }, (error) => (this.moodboardList = []));
    }
    getMyQuotes() {
        this._quoteListService
            .getQuoteList(this._user.getUser().getId(), 'my', 'quotes')
            .subscribe((data) => {
            this.quoteList = data;
            this.selectedQuote = data[0].sgid;
        }, (error) => (this.quoteList = []));
    }
    addItemToMoodboard() {
        let obj = {
            month: this.monthNums,
            button_type: this.selectedType,
            mood_board_id: this.selectedMoodboard,
            product_id: this.productId,
            product_ids: [this.productId],
            quantity: this.quantityCounter,
            sku: this.variationId,
            user_id: this._user.getUser().getId(),
            warehouse_id: this.warehouseId,
        };
        this._shopService.addItemToMoodboard(obj).subscribe((data) => {
            this._toaster.success('Item added to Moodboard');
            this.quantityCounter = 1;
        }, (error) => this._toaster.error('Fail to add'));
    }
    addItemToQuote() {
        // let obj = {
        //   button_type: this.selectedType,
        //   floorplan_id: null,
        //   month: this.monthNums,
        //   moodboard_id: null,
        //   product_id: this.productId,
        //   quantity: this.quantityCounter,
        //   quote_id: this.selectedQuote,
        //   sku: this.variationId,
        //   units: null,
        //   user_id: this._user.getUser().getId(),
        //   warehouse_id: this.warehouseId,
        // };
        // this._shopService.addItemToQuote(obj).subscribe(
        //   (data) => this._toaster.success('Item added to Quote'),
        //   (error) => this._toaster.error('Fail to add')
        // );
        this._dialog
            .open(projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_2__["AddproductComponent"], {
            height: '80%',
            width: '50%',
            data: {
                isDialog: true,
                quoteId: this.selectedQuote,
                product_id: this.productId,
                sku: this.variationId,
                quantity: this.quantityCounter,
                button_type: this.selectedType,
                month: this.monthNums,
                warehouse_id: this.warehouseId,
                user_id: this._user.getUser().getId(),
            },
        })
            .afterClosed()
            .subscribe((data) => {
            this.quantityCounter = 1;
            console.log(data);
        });
    }
    createNewMB() {
        this._dialog
            .open(projects_moodboard_src_lib_components_create_moodboard_popup_create_moodboard_popup_component__WEBPACK_IMPORTED_MODULE_1__["CreateMoodboardPopupComponent"], {
            height: '80%',
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
    createNewQuote() {
        this._dialog
            .open(projects_quote_src_public_api__WEBPACK_IMPORTED_MODULE_2__["QuoteCreateFormComponent"], {
            height: '80%',
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
    cityChange(evt) {
        if (evt === null || evt === void 0 ? void 0 : evt.value) {
            this.warehouseId = evt.value;
            let warehouse = this.productdetails.warehouses.find((x) => x.warehouse_id == evt.value);
            this.variationId = warehouse.sku_variation_id;
            this.reload();
        }
    }
    variationChange(variation) {
        this.variationId = variation.sgid;
        this.warehouseId = variation.warehouse_location_new[0].warehouse_id;
        this.reload();
    }
    reload() {
        if (this.forDialog) {
            this.getProduct(this.productId, this.warehouseId, this.variationId);
            return;
        }
        this._router.navigate([
            'shop',
            this.productId,
            this.warehouseId,
            this.variationId,
        ]);
        this.monthNums = 12;
    }
    back() {
        this._location.back();
    }
    itemChange(product) { }
    buyMoodboard() {
        const buyObj = this.getBuyOrRentObject('buy');
        this._shopService.addItemToMoodboard(buyObj).subscribe((data) => {
            this._toaster.success('Item added to Moodboard');
            this.dialogRef.close({ event: 'added' });
        }, (error) => this._toaster.error('Fail to add'));
    }
    rentMoodboard() {
        const buyObj = this.getBuyOrRentObject('rent');
        this._shopService.addItemToMoodboard(buyObj).subscribe((data) => {
            this._toaster.success('Item added to Moodboard');
            this.dialogRef.close({ event: 'added' });
        }, (error) => this._toaster.error('Fail to add'));
    }
    getBuyOrRentObject(type) {
        return {
            button_type: type == 'buy' ? '1' : '0',
            month: this.monthNums,
            mood_board_id: this.data.moodboardId,
            product_id: this.productId,
            product_ids: [this.productId],
            quantity: this.quantityCounter,
            sku: this.variationId,
            user_id: this._user.getUser().getId(),
            warehouse_id: this.warehouseId,
        };
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_4__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_moodboard_src_lib_services_moodboard_service__WEBPACK_IMPORTED_MODULE_4__["MoodboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_quote_src_lib_components_quote_list_quote_list_service__WEBPACK_IMPORTED_MODULE_6__["QuoteListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_shop_service__WEBPACK_IMPORTED_MODULE_8__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_7__["ToasterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["lib-product-details"]], decls: 76, vars: 27, consts: [["fxLayoutGap", "1rem", "fxLayout", "column", "fxLayoutAlign", " stretch", 1, "product", 3, "ngClass"], ["class", "product-details", "fxLayout", "row", "fxFlex", "100", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between center", "style", "margin-bottom: 0rem !important;", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "1rem", 1, "h2"], [4, "ngIf"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutGap", "1rem", "fxLayoutAlign", "stretch", 1, "product-details"], ["fxFlex", "50", "fxLayoutGap", "1rem", "fxLayout", "column", "fxLayoutAlign", "start  stretch", 1, "left"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "product-image", 2, "height", "375px"], [1, "img", 2, "max-width", "250px", "max-height", "100%", 3, "src", "alt"], [1, "image-slider", 3, "list", "imgKey", "onChange"], ["multi", "", 1, "example-headers-align"], [1, "no-box-shadow", 3, "opened", "closed"], ["fxFlex", "50", "fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxLayout", "row wrap", "fxLayoutAlign", "flex-start", 1, "product-details__right"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "flex-start", 1, "row"], ["fxFlex", "40", "fxLayoutAlign", "flex-start", 1, "column", "label"], ["fxFlex", "58", "fxLayoutAlign", "flex-start", 1, "column", "value"], ["fxLayout", "column", "fxFlex", "40", "fxLayoutAlign", "flex-start", 1, "column", "label"], ["fxLayout", "column", "fxFlex", "58", "fxLayoutAlign", "flex-start", 1, "column", "value"], ["fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "flex-start center", 1, "row"], ["fxLayout", "row", "fxFlex", "58", "fxLayoutAlign", "flex-start", 1, "column"], ["fxFlex", "", "min", "1", "max", "36", "step", "1", 3, "ngModel", "ngModelChange", "input"], ["fxFlex", "15", "appearance", "outline"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["fxLayout", "column", "fxFlex", "40", "fxLayoutAlign", "center start", 1, "column", "label"], ["fxLayout", "column", "fxFlex", "58", "fxLayoutAlign", "flex-start", 1, "column"], ["fxFlex", "", "appearance", "outline"], [3, "value", "selectionChange", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxFlex", "100", "fxLayoutGap", "1rem", "fxLayoutAlign", "space-between center", 1, "product-details", 2, "margin-bottom", "0rem !important"], ["fxLayout", "row-reverse"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "product_variation_header"], [2, "cursor", "pointer", 3, "click"], [3, "value"], ["fxLayout", "row", "fxLayoutGap", "2rem", "class", "add-item__header", 4, "ngIf"], ["class", "add-to-md", "fxLayoutAlign", "center  center", 3, "fxLayout", 4, "ngIf"], ["fxLayout", "column", "class", "add-to-quote", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "2rem", 1, "add-item__header"], ["fxLayout", "row", "fxLayoutAlign", "start center", 3, "ngModel", "ngModelChange"], ["value", "0", 2, "padding-right", "2rem"], ["value", "1"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding-top", "0.1rem"], [2, "padding-right", "2rem"], ["fxFlex", "30", 3, "counter", "readOnly", "counterChange"], ["fxLayoutAlign", "center  center", 1, "add-to-md", 3, "fxLayout"], [1, "label", "pb_5"], ["fxLayout", "row", "fxLayoutGap", "1rem", "fxLayoutAlign", "start center"], [1, "add-to-md-button", 3, "click"], ["src", "assets/shop/addButton.svg"], ["fxFlex", "50", 1, "grey", 3, "disabled", "ngModel", "ngModelChange"], ["value", "", 4, "ngIf"], ["fxFlex", "", "mat-flat-button", "", "color", "accent", 1, "add-button", "round_button", "label", 2, "padding", "0.35rem !important", "font-weight", "600 !important", 3, "disabled", "click"], ["value", ""], ["fxLayout", "column", 1, "add-to-quote"], [1, "add-to-quote-button", 3, "click"], ["fxFlex", "50", 1, "grey", 3, "ngModel", "ngModelChange"], ["value", "", "value", "", 4, "ngIf"], ["value", "", "value", ""], ["fxLayout", "column", 1, "product-details__right", 2, "padding", "40px"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayout", "row wrap", "fxFlex", "100", "fxLayoutAlign", "flex-start center", 2, "padding-top", "0.1rem"], [2, "padding-right", "1rem"], ["fxFlex", "20", 3, "counter", "readOnly", "customCss", "counterChange"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "1rem", 2, "padding-top", "2rem"], ["mat-raised-button", "", "type", "button", "color", "accent", "aria-label", "", 1, "summary_btn_position", 3, "click"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductDetailsComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_3_Template, 5, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "app-image-slider", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function ProductDetailsComponent_Template_app_image_slider_onChange_9_listener($event) { return ctx.variationChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-expansion-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function ProductDetailsComponent_Template_mat_expansion_panel_opened_11_listener() { return ctx.panelOpenState = true; })("closed", function ProductDetailsComponent_Template_mat_expansion_panel_closed_11_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-expansion-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function ProductDetailsComponent_Template_mat_expansion_panel_opened_18_listener() { return ctx.panelOpenState = true; })("closed", function ProductDetailsComponent_Template_mat_expansion_panel_closed_18_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-accordion", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-expansion-panel", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("opened", function ProductDetailsComponent_Template_mat_expansion_panel_opened_25_listener() { return ctx.panelOpenState = true; })("closed", function ProductDetailsComponent_Template_mat_expansion_panel_closed_25_listener() { return ctx.panelOpenState = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Dimensions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Product Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Category: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Buy Price: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](48, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, " Rental Price/12 month: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, " Available Qty: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Rent Duration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "mat-slider", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_Template_mat_slider_ngModelChange_64_listener($event) { return ctx.monthNums = $event; })("input", function ProductDetailsComponent_Template_mat_slider_input_64_listener($event) { return ctx.updateRent($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "mat-form-field", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ProductDetailsComponent_Template_input_ngModelChange_66_listener($event) { return ctx.monthNums = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " City: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "mat-form-field", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "mat-select", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("selectionChange", function ProductDetailsComponent_Template_mat_select_selectionChange_72_listener($event) { return ctx.cityChange($event); })("valueChange", function ProductDetailsComponent_Template_mat_select_valueChange_72_listener($event) { return (ctx.productdetails == null ? null : ctx.productdetails.variations[ctx.activeIndex] == null ? null : ctx.productdetails.variations[ctx.activeIndex].warehouse_location_new[0]).warehouse_id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, ProductDetailsComponent_mat_option_73_Template, 2, 2, "mat-option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, ProductDetailsComponent_ng_container_74_Template, 4, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ProductDetailsComponent_ng_container_75_Template, 11, 3, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](25, _c0, ctx.forDialog));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.forDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.forDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.productdetails == null ? null : ctx.productdetails.variations[ctx.activeIndex] == null ? null : ctx.productdetails.variations[ctx.activeIndex].default_images[0] == null ? null : ctx.productdetails.variations[ctx.activeIndex].default_images[0].image_url.large, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("alt", ctx.productdetails == null ? null : ctx.productdetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("list", ctx.productdetails == null ? null : ctx.productdetails.variations)("imgKey", "default_images[0].image_url.small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.productdetails == null ? null : ctx.productdetails.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.productdetails == null ? null : ctx.productdetails.features);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.productdetails == null ? null : ctx.productdetails.variations[ctx.activeIndex] == null ? null : ctx.productdetails.variations[ctx.activeIndex].dimension);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.productdetails == null ? null : ctx.productdetails.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.productdetails == null ? null : ctx.productdetails.category == null ? null : ctx.productdetails.category.category_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](48, 21, ctx.productdetails == null ? null : ctx.productdetails.variations[ctx.activeIndex] == null ? null : ctx.productdetails.variations[ctx.activeIndex].buyPrice), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 23, ctx.rentalPrice), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.totalQty, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.monthNums);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.monthNums);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.productdetails == null ? null : ctx.productdetails.variations[ctx.activeIndex] == null ? null : ctx.productdetails.variations[ctx.activeIndex].warehouse_location_new[0].warehouse_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productdetails == null ? null : ctx.productdetails.warehouses);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.forDialog);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.forDialog);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _core_src_lib_components_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_13__["ImageSliderComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionPanelTitle"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_21__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioButton"], _core_src_lib_cell_renderer_counter_counter_component__WEBPACK_IMPORTED_MODULE_23__["CounterComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["SelectControlValueAccessor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_z"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CurrencyPipe"]], styles: ["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%], [_nghost-%COMP%]   mat-accordion[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n[_nghost-%COMP%]  mat-form-field-wrapper {\n  padding-bottom: 0 !important;\n}\n.product[_ngcontent-%COMP%] {\n  padding: 3rem;\n  overflow-y: auto;\n}\n.product-details__right[_ngcontent-%COMP%] {\n  background: #f8f8f8;\n  border-radius: 5px;\n  padding: 2rem;\n  margin-bottom: 1rem;\n}\n.product-details-title[_ngcontent-%COMP%] {\n  padding: 2rem;\n  font-size: 1.5rem;\n  text-align: center;\n}\n.product-details__icon[_ngcontent-%COMP%] {\n  background: #febf2d;\n}\n.product-details__icon[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 19px;\n  line-height: 33px;\n  letter-spacing: 0.1em;\n  padding: 1rem;\n}\n.product-details__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background: #ffffff;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  box-sizing: content-box;\n  padding: 2rem;\n  height: 80px;\n  width: 80px;\n}\n.product-details__copy[_ngcontent-%COMP%], .product-details__info[_ngcontent-%COMP%] {\n  background: #f4f4f4;\n  padding-bottom: 2rem;\n}\n.product-details__info[_ngcontent-%COMP%] {\n  padding: 2rem 0 2rem 2rem;\n}\n.product[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: none;\n  padding: 0;\n  margin: 0;\n  font-size: 35px;\n}\n.product[_ngcontent-%COMP%]   .product_variation_header[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 33px;\n  letter-spacing: 0.05em;\n  color: #000000;\n}\n.range-slider__value[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n  border-radius: 3px;\n  background: grey;\n  padding: 2px 10px;\n  margin-left: 8px;\n  border-radius: 100px;\n  padding-top: 5px;\n}\n.img-class[_ngcontent-%COMP%] {\n  padding: 0;\n  padding: 0.3rem;\n  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.1), -4px 0px 4px rgba(0, 0, 0, 0.1), 0px -4px 4px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  height: 100px;\n  margin: 1rem;\n}\n.img-class[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n.column[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n.variations__img[_ngcontent-%COMP%] {\n  max-height: 300px;\n  min-height: 200px;\n  height: calc(100% -1);\n  overflow: auto;\n}\n.selected-variation[_ngcontent-%COMP%] {\n  background-color: #f1b324;\n}\n.no-box-shadow[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n  background: #f8f8f8;\n  border-radius: 5px;\n}\n.add-item[_ngcontent-%COMP%] {\n  background: #f1efef;\n  padding: 1rem 0 0 3rem;\n}\n.add-item__header[_ngcontent-%COMP%] {\n  border-radius: 5px 5px 0px 0px;\n}\n.add-item__header[_ngcontent-%COMP%] {\n  background: #f1efef;\n  padding: 1rem 2rem 1rem 3rem;\n}\n.add-to-md[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #f8f8f8;\n  padding: 2rem 2rem 1rem 3rem;\n}\n.add-to-md-button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.add-to-quote[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background: #f8f8f8;\n  padding: 1rem 2rem 3rem 3rem;\n}\n.add-to-quote-button[_ngcontent-%COMP%] {\n  border-radius: 5px;\n}\n.summary_btn_position[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  width: 40%;\n  font-size: 19px;\n  padding: 5px 20px 5px 20px;\n  color: #000000;\n  font-weight: bold;\n}\n.dialog-padding[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 2rem !important;\n}\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 5px !important;\n  margin-bottom: 0px !important;\n}\nselect.grey[_ngcontent-%COMP%] {\n  width: 80% !important;\n  background: url('_-_-assets-greyDropdown.svg') no-repeat 97% !important;\n  -webkit-appearance: none;\n  padding: 12px;\n  border: none;\n  background-color: #ffffff !important;\n  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n}\n[_nghost-%COMP%]     .mat-form-field-wrapper {\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTs7RUFFRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBSjtBQUdJO0VBQ0UsNEJBQUE7QUFETjtBQUtBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBRkY7QUFJSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGTjtBQUtJO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFITjtBQUtJO0VBQ0UsbUJBQUE7QUFITjtBQUlNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFGUjtBQUlNO0VBQ0UsbUJBQUE7RUFJQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFMUjtBQVFJO0VBRUUsbUJBQUE7RUFDQSxvQkFBQTtBQVBOO0FBU0k7RUFDRSx5QkFBQTtBQVBOO0FBVUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBUko7QUFVRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUko7QUFXQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQVJGO0FBV0E7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDRJQUFBO0VBRUEsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVRGO0FBVUU7RUFDRSxtQkFBQTtBQVJKO0FBV0E7RUFDRSxlQUFBO0FBUkY7QUFZRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUFUSjtBQWFBO0VBQ0UseUJBQUE7QUFWRjtBQVlBO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVEY7QUFXQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUFSRjtBQVNFO0VBQ0UsOEJBQUE7QUFQSjtBQVVBO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtBQVBGO0FBU0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQU5GO0FBT0U7RUFDRSxrQkFBQTtBQUxKO0FBUUE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQUxGO0FBTUU7RUFDRSxrQkFBQTtBQUpKO0FBUUE7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFMRjtBQVFBO0VBQ0UsdUNBQUE7QUFMRjtBQVFBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQUxGO0FBUUE7RUFDRSxxQkFBQTtFQUNBLHVFQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtBQUxGO0FBbUJBO0VBQ0UseUJBQUE7QUFoQkYiLCJmaWxlIjoicHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1hdC1jYXJkLFxyXG4gIG1hdC1hY2NvcmRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgfVxyXG4gICY6Om5nLWRlZXAge1xyXG4gICAgbWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5wcm9kdWN0IHtcclxuICBwYWRkaW5nOiAzcmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgJi1kZXRhaWxzIHtcclxuICAgICZfX3JpZ2h0IHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLy8gaGVpZ2h0OiAzMDBweDtcclxuICAgICYtdGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9faWNvbiB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZWJmMmQ7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAwcHggNHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLCA0cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpLFxyXG4gICAgICAgIC8vICAgMHB4IC00cHggNnB4IHJnYigwIDAgMCAvIDE1JSksIC00cHggMHB4IDZweCByZ2IoMCAwIDAgLyAxNSUpO1xyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDkycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICZfX2NvcHksXHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICB9XHJcbiAgICAmX19pbmZvIHtcclxuICAgICAgcGFkZGluZzogMnJlbSAwIDJyZW0gMnJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLmNsb3NlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gIH1cclxuICAucHJvZHVjdF92YXJpYXRpb25faGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbn1cclxuLnJhbmdlLXNsaWRlcl9fdmFsdWUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxuICBwYWRkaW5nOiAycHggMTBweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5pbWctY2xhc3Mge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgcGFkZGluZzogMC4zcmVtO1xyXG4gIGJveC1zaGFkb3c6IDRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTRweCAwcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgMHB4IC00cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKSxcclxuICAgIDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG4uY29sdW1uIHtcclxuICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuXHJcbi52YXJpYXRpb25zIHtcclxuICAmX19pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0xKTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnNlbGVjdGVkLXZhcmlhdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYjMyNDtcclxufVxyXG4ubm8tYm94LXNoYWRvdyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5hZGQtaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogI2YxZWZlZjtcclxuICBwYWRkaW5nOiAxcmVtIDAgMCAzcmVtO1xyXG4gICZfX2hlYWRlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcbi5hZGQtaXRlbV9faGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFlZmVmO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAxcmVtIDNyZW07XHJcbn1cclxuLmFkZC10by1tZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMnJlbSAycmVtIDFyZW0gM3JlbTtcclxuICAmLWJ1dHRvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgfVxyXG59XHJcbi5hZGQtdG8tcXVvdGUge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbSAzcmVtIDNyZW07XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnN1bW1hcnlfYnRuX3Bvc2l0aW9uIHtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAyMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZGlhbG9nLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAxcmVtIDJyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNlbGVjdC5ncmV5IHtcclxuICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2dyZXlEcm9wZG93bi5zdmdcIikgbm8tcmVwZWF0IDk3JSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi8vIHNlbGVjdC55ZWxsb3cge1xyXG4vLyAgIHdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuLy8gICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZ3JleURyb3Bkb3duLnN2Z1wiKSBuby1yZXBlYXQgOTclICFpbXBvcnRhbnQ7XHJcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4vLyAgIHBhZGRpbmc6IDEycHg7XHJcbi8vICAgYm9yZGVyOiBub25lO1xyXG4vLyAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbi8vICAgYm94LXNoYWRvdzogMHB4IDBweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vIH1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "sRD0":
/*!*******************************************************!*\
  !*** ./projects/shop/src/lib/service/shop.service.ts ***!
  \*******************************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var _core_src_lib_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/src/lib/services/user.service */ "ozH4");




class ShopService {
    constructor(_http, _env, userService) {
        this._http = _http;
        this._env = _env;
        this.userService = userService;
    }
    addItemToMoodboard(obj) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'add/moodboard/items', JSON.stringify(obj));
    }
    getProducts({ start, count, category = null, supplier = null, warehouse = null, min_price, max_price, rental_min_price, rental_max_price, min_price_inventory, keywords, preferred_delivery_start_date = null, preferred_delivery_end_date = null }) {
        let price = '';
        if (undefined != min_price) {
            price +=
                '&price_option_1=purchase&price_option_2=range&min_price=' + min_price;
        }
        if (undefined != min_price_inventory) {
            price +=
                '&min_price_inventory=' +
                    min_price_inventory +
                    '&inventory_filter_request_type=all';
            if (undefined != max_price)
                price += '&max_price=' + max_price;
            if (rental_min_price)
                price += '&rental_min_price=' + rental_min_price;
            if (rental_max_price)
                price += '&rental_max_price=' + rental_max_price;
            let search = '';
            if (undefined != keywords)
                search += '&keywords=' + keywords;
        }
        if (undefined != max_price) {
            price += '&max_price=' + max_price;
        }
        if (rental_min_price) {
            price += '&rental_min_price=' + rental_min_price;
        }
        if (rental_max_price) {
            price += '&rental_max_price=' + rental_max_price;
        }
        if (undefined != keywords) {
            price += '&keywords=' + keywords;
        }
        if (preferred_delivery_start_date != null) {
            price += '&preferred_delivery_start_date=' + preferred_delivery_start_date;
        }
        if (preferred_delivery_end_date != null) {
            price += '&preferred_delivery_end_date=' + preferred_delivery_end_date;
        }
        return this._http.sendGETRequest(this._env.getEndPoint() +
            'product/filter2?start=' +
            start +
            '&user_id=' +
            this.userService.getUser().getId() +
            '&count=' +
            count +
            '&category=' +
            category +
            '&supplier=' +
            supplier +
            '&warehouse=' +
            warehouse +
            price);
    }
    addItemToQuote(obj) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'put/product/commonQuoteForProductAndMoodboard', JSON.stringify(obj));
    }
    resetFilters() {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'clearSearchFilterParams', JSON.stringify({ user_id: this.userService.getUser().getId() }));
    }
    generateRent(obj) {
        return this._http.sendPOSTRequest(this._env.getEndPoint() + 'generateRentRange', obj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.message));
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core_src_lib_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zU2b":
/*!******************************************************************!*\
  !*** ./projects/moodboard/src/lib/services/moodboard.service.ts ***!
  \******************************************************************/
/*! exports provided: MoodboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoodboardService", function() { return MoodboardService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! projects/core/src/public-api */ "IY4C");
/* harmony import */ var projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/core/src/lib/services/environment.service */ "qX3E");




class MoodboardService {
    constructor(http, env, userService, _computationService) {
        this.http = http;
        this.env = env;
        this.userService = userService;
        this._computationService = _computationService;
    }
    getStateList() {
        let url = this.env.getEndPoint() + 'load/states';
        return this.http.sendGETRequest(url, {});
    }
    getMoodBoardType() {
        let url = this.env.getEndPoint() + 'getMoodBoardType';
        return this.http.sendGETRequest(url, {});
    }
    getcompanyByUserMoodboard() {
        let url = this.env.getEndPoint() +
            'getcompanyByUserMoodboard?user_id=' +
            this.userService.getUser().getId();
        return this.http.sendGETRequest(url, {});
    }
    getItems(param) {
        let url = this.env.getEndPoint() + 'product/filter2';
        return this.http.sendGETRequest(url, { params: param });
    }
    getCityList() {
        let url = this.env.getEndPoint() + 'warehouse';
        return this.http.sendGETRequest(url, {});
    }
    getCategoryList() {
        let url = this.env.getEndPoint() + 'getCategory';
        return this.http.sendGETRequest(url, {});
    }
    getProjectList() {
        let url = this.env.getEndPoint() + 'getMoodBoardProjectFilter?project_name=';
        return this.http.sendGETRequest(url, {});
    }
    getMoodBoard(id) {
        let url = this.env.getEndPoint() + 'load/moodboard/items?moodboard_id=' + id;
        return this.http.sendGETRequest(url, {});
    }
    deleteItemToMoodboard(param) {
        let url = this.env.getEndPoint() + 'remove/moodboard/items';
        return this.http.sendPOSTRequest(url, JSON.stringify(param), {});
    }
    updateMDItem(md) {
        let obj = {
            "sgid": md.sgid,
            "moodboard_id": md.moodboard_id,
            "qty": md.is_qty,
            "months": md.months,
            "total": md.is_total,
            "price": md.price,
            sale_price: md.sale_price,
            "asset_value": md.asset_value,
            "button_type": md.button_type,
            "buy_price": md.buy_price,
        };
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'update/moodboard/singleitem', JSON.stringify(obj));
    }
    getMBSummary(id) {
        return this.http
            .sendGETRequest(this.env.getEndPoint() + 'load/moodboard/items?moodboard_id=' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => {
            return data.moodboard_items.map((item) => {
                item['is_total'] = parseFloat(item.net_total);
                item['is_qty'] = parseFloat(item.qty);
                return item;
            });
        }));
    }
    removeMyMB(param) {
        let url = this.env.getEndPoint() + 'disable/moodboard';
        return this.http.sendPOSTRequest(url, JSON.stringify(param), {});
    }
    getMoodBoardList(param) {
        let url = this.env.getEndPoint() + 'getMoodBoard';
        param['user_id'] = this.userService.getUser().getId();
        return this.http.sendGETRequest(url, { params: param });
    }
    getMyMoodBoardList(param) {
        let url = this.env.getEndPoint() + 'getMoodBoardByUser';
        if (!param) {
            param = {};
        }
        param['userid'] = this.userService.getUser().getId();
        return this.http.sendPOSTRequest(url, JSON.stringify(param), {});
    }
    getProductDetails(pid, wid) {
        let url = this.env.getEndPoint() + 'product';
        let param = { "product_id": "" + pid, "warehouse_id": "" + wid };
        return this.http.sendPOSTRequest(url, JSON.stringify(param), {});
    }
    getDisabledMBList(param) {
        let url = this.env.getEndPoint() + 'disable_moodboards';
        param['user_id'] = this.userService.getUser().getId();
        return this.http.sendGETRequest(url, { params: param });
    }
    updateMoodboard(param) {
        let url = this.env.getEndPoint() + 'updateMoodBoard';
        return this.http.sendPOSTRequest(url, param, {});
    }
    createMoodboard(param) {
        let url = this.env.getEndPoint() + 'createMoodBoard';
        return this.http.sendPOSTRequest(url, param, {});
    }
    getMBQuote(param) {
        let url = this.env.getEndPoint() +
            'load/customer/quotes?user_id=98&source_type=my&type=null';
        return this.http.sendGETRequest(url, {});
    }
    requestRendering(param) {
        let url = this.env.getEndPoint() + 'sendEmailMoodboard';
        return this.http.sendPOSTRequest(url, param, {});
    }
    addMBItem(param) {
        return this.http.sendPOSTRequest(this.env.getEndPoint() + 'add/moodboard/items', param, {});
    }
}
MoodboardService.ɵfac = function MoodboardService_Factory(t) { return new (t || MoodboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_lib_services_environment_service__WEBPACK_IMPORTED_MODULE_3__["EnvironmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](projects_core_src_public_api__WEBPACK_IMPORTED_MODULE_2__["ComputationService"])); };
MoodboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MoodboardService, factory: MoodboardService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default~moodboard-src-lib-moodboard-module~shop-src-lib-shop-module.js.map