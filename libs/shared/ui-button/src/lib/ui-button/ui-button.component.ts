import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface ButtonConfig {
  isDisabled?: boolean;
  type?: string;
  label: string;
  onClick?: (formGroup: FormGroup) => any;
}

@Component({
  selector: 'mars-button-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent implements OnChanges {
  @Input() config!: ButtonConfig;
  @Input() formGroup!: FormGroup;

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes['config'].currentValue);
  }

  handleClick() {
    console.log('config :', this.config);
    if (this.config.onClick) {
      this.config.onClick(this.formGroup);
    }
  }
}
