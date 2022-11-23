import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { IssuesService } from '@services/issues.service';
import { IssuesEffects, issuesReducer } from '@store/issues';
import { IssueContainerComponent } from './issue-container.component';
import { IssueFilterModule } from '@components/issue-filters/issue-filter.module';
import { IssueItemModule } from '@components/issue-item/issue-item.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    IssueFilterModule,
    IssueItemModule,
    StoreModule.forFeature('issues', issuesReducer),
    EffectsModule.forFeature([IssuesEffects]),
  ],
  declarations: [IssueContainerComponent],
  exports: [IssueContainerComponent],
  providers: [IssuesService],
})
export class IssueContainerModule {}
