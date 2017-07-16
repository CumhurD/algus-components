import { OnInit, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class AlgusDrowdownDirective implements OnInit, ControlValueAccessor {
    itemList: any;
    textField: string;
    valueField: string;
    defaultItemText: string;
    defaultItemValue: string;
    _selectedItem: any;
    change: EventEmitter<{}>;
    selectedItem: any;
    private propagateChange;
    private propagateTouched;
    private defaultItem;
    ngOnInit(): void;
    onSelectionButtonBlurred(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
