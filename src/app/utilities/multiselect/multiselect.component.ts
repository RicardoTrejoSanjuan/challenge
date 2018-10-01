import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'multiselect',
  template: `
    <mat-checkbox class="mat-option"
      [disableRipple]="true"
      [indeterminate]="isIndeterminate()"
      [checked]="isChecked()"
      (click)="$event.stopPropagation()"
      (change)="toggleSelection($event)">
        {{text}}
    </mat-checkbox>
  `,
  styles: ['']
})
export class MultiselectComponent implements OnInit {
  @Input() model: NgModel;
  @Input() values = [];
  @Input() text = ' - Select All -';

  constructor() { }

  ngOnInit() {
  }

  isChecked(): boolean {
    return this.model.model && this.values.length && this.model.model.length === this.values.length;
  }

  isIndeterminate(): boolean {
    return this.model.model && this.values.length && this.model.model.length && this.model.model.length < this.values.length;
  }

  toggleSelection(change: MatCheckboxChange): void {
    if (change.checked) {
      this.model.update.emit(this.values);
    } else {
      this.model.update.emit([]);
    }
  }
}