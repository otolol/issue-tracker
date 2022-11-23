import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IssueActionsComponent } from './issue-actions.component';
@NgModule({
  imports: [CommonModule],
  declarations: [IssueActionsComponent],
  exports: [IssueActionsComponent],
})
export class IssueActionsModule {}
