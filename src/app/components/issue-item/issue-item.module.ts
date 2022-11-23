import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IssueFormModule } from '@components/issue-form/issue-form.module';
import { IssueViewModule } from '@components/issue-view/issue-view.module';
import { IssueLayoutModule } from '..';
import { IssueItemComponent } from './issue-item.component';

@NgModule({
  imports: [CommonModule, IssueLayoutModule, IssueViewModule, IssueFormModule],
  declarations: [IssueItemComponent],
  exports: [IssueItemComponent],
})
export class IssueItemModule {}
