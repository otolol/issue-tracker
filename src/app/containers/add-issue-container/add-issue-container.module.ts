import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddIssueContainerComponent } from './add-issue-container.component';
import { IssueViewModule } from '@components/issue-view/issue-view.module';
import { IssueFormModule } from '@components/issue-form/issue-form.module';
import { IssueLayoutModule } from 'src/app/layouts/issue-layout';
import { IssueActionsModule } from 'src/app/layouts/issue-actions/issue-actions.module';

@NgModule({
  imports: [
    CommonModule,
    IssueViewModule,
    IssueLayoutModule,
    IssueFormModule,
    IssueActionsModule,
  ],
  declarations: [AddIssueContainerComponent],
  exports: [AddIssueContainerComponent],
})
export class AddIssueContainerModule {}
