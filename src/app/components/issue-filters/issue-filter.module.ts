import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IssueFitlerComponent } from './issue-filter.component';

@NgModule({
  imports: [CommonModule],
  declarations: [IssueFitlerComponent],
  exports: [IssueFitlerComponent],
})
export class IssueFilterModule {}
