import { Component, Input } from '@angular/core';

export interface ButtonConfig {
  isDisabled?: boolean;
  type?: string;
  label: string;
  onClick?: () => any;
}

@Component({
  selector: 'mars-button-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  @Input() config!: ButtonConfig;

  handleClick() {
    if (this.config.onClick) {
      this.config.onClick();
    }
  }
}
