import {Directive, OnInit, Input, Output, forwardRef, EventEmitter} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
    selector: 'lg-dropdown',  
    template: `
        <div class="dropdown lg-dropdown">
          <button class="btn btn-default btn-lgdropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" (blur)="onSelectionButtonBlurred();">
            {{selectedItem[textField]}}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a (click)="selectedItem = null;">{{defaultItemText}}</a></li>
            <li *ngFor="let item of itemList"><a (click)="selectedItem = item;">{{item[textField]}}</a></li>
          </ul>
        </div>`,
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AlgusDrowdownDirective),
        multi:true
    }]
})
export class AlgusDrowdownDirective implements OnInit, ControlValueAccessor  {
    @Input() itemList: any;
    @Input() textField: string;
    @Input() valueField: string;
    @Input() defaultItemText: string;
    @Input() defaultItemValue: string;
    @Input() _selectedItem: any;
    @Output() change = new EventEmitter();

    get selectedItem(): any { return this._selectedItem; }
    set selectedItem(value: any) {
        if (!value) {
            this._selectedItem = this.defaultItem;
        }
        else {
            this._selectedItem = value;
        }
        
        this.propagateChange(this._selectedItem);
        this.change.emit(this._selectedItem);
    }
    private propagateChange = (_: any) => { };
    private propagateTouched = () => { };
    private defaultItem: any;

    ngOnInit() {
        this.valueField = this.valueField || 'Value';
        this.defaultItemText = this.defaultItemText || 'Lütfen Seçin';
        this.defaultItemValue = this.defaultItemValue || '-1';

        this.defaultItem = {};
        this.defaultItem[this.textField] = this.defaultItemText;
        this.defaultItem[this.valueField] = this.defaultItemValue;

        this._selectedItem = this.defaultItem;
    }

    onSelectionButtonBlurred() {
        setTimeout(() => { this.propagateTouched() }, 200);
    }

    writeValue(value: any) {
        this.selectedItem = value;
    }

    registerOnChange(fn) {
        this.propagateChange = fn;
    }

    registerOnTouched(fn) {
        this.propagateTouched = fn;
    }
}