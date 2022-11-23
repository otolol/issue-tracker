import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Issue } from '@models/issue';
import { LoadingStatus } from '@models/loadingStatus';
import { Store } from '@ngrx/store';
import {
  FetchIssues,
  UpdateIssue,
  selectIssues,
  selectIssuesLoadingStatus,
  DeleteIssue,
  selectAllTags,
  UpdateSelectedTag,
  UpdatEditModeById,
} from '@store/issues';
import { Observable } from 'rxjs';

@Component({
  selector: 'issue-container',
  templateUrl: './issue-container.component.html',
  styleUrls: ['./issue-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueContainerComponent {
  constructor(private store: Store) {}

  issues$: Observable<Array<Issue>> = this.store.select(selectIssues);
  loadingStatus$: Observable<LoadingStatus> = this.store.select(
    selectIssuesLoadingStatus
  );
  tags$: Observable<Array<string>> = this.store.select(selectAllTags);
  LOADING_STATUS = LoadingStatus;

  ngOnInit() {
    this.store.dispatch(FetchIssues());
  }

  onChangeIssue($event: Issue) {
    this.store.dispatch(UpdateIssue({ issue: $event }));
  }

  onUpdateEditMode(issueId: string) {
    this.store.dispatch(UpdatEditModeById({ issueId: issueId }));
  }

  onDeleteIssue($event: string) {
    this.store.dispatch(DeleteIssue({ issueId: $event }));
  }

  selectFilterTag(tag: string) {
    this.store.dispatch(UpdateSelectedTag({ tag: tag }));
  }

  clearFilterTag() {
    this.store.dispatch(UpdateSelectedTag({ tag: '' }));
  }
}
