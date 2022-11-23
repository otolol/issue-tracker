import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { IssueFitlerComponent } from './issue-filter.component';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [IssueFitlerComponent],
  exports: [IssueFitlerComponent],
})
export class IssueFilterModule {}
