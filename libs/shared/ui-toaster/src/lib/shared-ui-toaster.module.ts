import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiToasterComponent } from './ui-toaster/ui-toaster.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UiToasterComponent],
  exports: [UiToasterComponent],
})
export class SharedUiToasterModule {}
