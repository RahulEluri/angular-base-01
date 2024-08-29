import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPasswordComponent } from './ui-password/ui-password.component';
import { SharedUiButtonModule } from 'component-base-ui-button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, SharedUiButtonModule],
  declarations: [UiPasswordComponent],
  exports: [UiPasswordComponent],
})
export class SharedUiPasswordModule {}
