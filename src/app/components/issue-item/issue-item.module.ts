import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '@components/button/button.module';
import { IssueFormModule } from '@components/issue-form/issue-form.module';
import { IssueViewModule } from '@components/issue-view/issue-view.module';
import { IssueLayoutModule } from '..';
import { IssueItemComponent } from './issue-item.component';

@NgModule({
  imports: [
    CommonModule,
    IssueLayoutModule,
    IssueViewModule,
    IssueFormModule,
    ButtonModule,
  ],
  declarations: [IssueItemComponent],
  exports: [IssueItemComponent],
})
export class IssueItemModule {}
