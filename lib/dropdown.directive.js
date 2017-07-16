"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AlgusDrowdownDirective = AlgusDrowdownDirective_1 = (function () {
    function AlgusDrowdownDirective() {
        this.change = new core_1.EventEmitter();
        this.propagateChange = function (_) { };
        this.propagateTouched = function () { };
    }
    Object.defineProperty(AlgusDrowdownDirective.prototype, "selectedItem", {
        get: function () { return this._selectedItem; },
        set: function (value) {
            if (!value) {
                this._selectedItem = this.defaultItem;
            }
            else {
                this._selectedItem = value;
            }
            this.propagateChange(this._selectedItem);
            this.change.emit(this._selectedItem);
        },
        enumerable: true,
        configurable: true
    });
    AlgusDrowdownDirective.prototype.ngOnInit = function () {
        this.valueField = this.valueField || 'Value';
        this.defaultItemText = this.defaultItemText || 'Lütfen Seçin';
        this.defaultItemValue = this.defaultItemValue || '-1';
        this.defaultItem = {};
        this.defaultItem[this.textField] = this.defaultItemText;
        this.defaultItem[this.valueField] = this.defaultItemValue;
        this._selectedItem = this.defaultItem;
    };
    AlgusDrowdownDirective.prototype.onSelectionButtonBlurred = function () {
        var _this = this;
        setTimeout(function () { _this.propagateTouched(); }, 200);
    };
    AlgusDrowdownDirective.prototype.writeValue = function (value) {
        this.selectedItem = value;
    };
    AlgusDrowdownDirective.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AlgusDrowdownDirective.prototype.registerOnTouched = function (fn) {
        this.propagateTouched = fn;
    };
    return AlgusDrowdownDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AlgusDrowdownDirective.prototype, "itemList", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlgusDrowdownDirective.prototype, "textField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlgusDrowdownDirective.prototype, "valueField", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlgusDrowdownDirective.prototype, "defaultItemText", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AlgusDrowdownDirective.prototype, "defaultItemValue", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], AlgusDrowdownDirective.prototype, "_selectedItem", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AlgusDrowdownDirective.prototype, "change", void 0);
AlgusDrowdownDirective = AlgusDrowdownDirective_1 = __decorate([
    core_1.Component({
        selector: 'lg-dropdown',
        template: "\n        <div class=\"dropdown lg-dropdown\">\n          <button class=\"btn btn-default btn-lgdropdown dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\" (blur)=\"onSelectionButtonBlurred();\">\n            {{selectedItem[textField]}}\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a (click)=\"selectedItem = null;\">{{defaultItemText}}</a></li>\n            <li *ngFor=\"let item of itemList\"><a (click)=\"selectedItem = item;\">{{item[textField]}}</a></li>\n          </ul>\n        </div>",
        providers: [{
                provide: forms_1.NG_VALUE_ACCESSOR,
                useExisting: core_1.forwardRef(function () { return AlgusDrowdownDirective_1; }),
                multi: true
            }]
    })
], AlgusDrowdownDirective);
exports.AlgusDrowdownDirective = AlgusDrowdownDirective;
var AlgusDrowdownDirective_1;
//# sourceMappingURL=dropdown.directive.js.map