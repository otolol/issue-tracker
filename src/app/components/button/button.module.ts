import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent, WarnButton, PrimaryButton } from './button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, WarnButton, PrimaryButton],
  exports: [ButtonComponent, WarnButton, PrimaryButton],
})
export class ButtonModule {}
