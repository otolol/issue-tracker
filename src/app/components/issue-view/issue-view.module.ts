import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IssueActionsModule } from 'src/app/layouts/issue-actions/issue-actions.module';
import { TagsModule } from '@components/tags';
import { CalculatePipe } from '@pipes/calculate.pipe';
import { SafePipe } from '@pipes/safe.pipe';
import { IssueViewComponent } from './issue-view.component';

@NgModule({
  imports: [CommonModule, IssueActionsModule, TagsModule],
  declarations: [IssueViewComponent, SafePipe, CalculatePipe],
  exports: [IssueViewComponent],
})
export class IssueViewModule {}
