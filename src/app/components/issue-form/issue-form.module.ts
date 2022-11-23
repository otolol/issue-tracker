import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueFormComponent } from './issue-form.component';
import { IssueActionsModule } from '../../layouts/issue-actions/issue-actions.module';
import { TagsModule } from '@components/tags';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, IssueActionsModule, TagsModule],
  declarations: [IssueFormComponent],
  exports: [IssueFormComponent],
})
export class IssueFormModule {}
