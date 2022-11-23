import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TagsModule } from '@components/tags';
import { IssuelayoutComponent } from './issue-layout.component';
import { IssueFormModule } from '../../components/issue-form/issue-form.module';
import { IssueViewModule } from '../../components/issue-view/issue-view.module';
import { IssueActionsModule } from '../issue-actions/issue-actions.module';

@NgModule({
  imports: [
    CommonModule,
    TagsModule,
    IssueViewModule,
    ReactiveFormsModule,
    IssueFormModule,
    IssueActionsModule,
  ],
  declarations: [IssuelayoutComponent],
  exports: [IssuelayoutComponent],
})
export class IssueLayoutModule {}
