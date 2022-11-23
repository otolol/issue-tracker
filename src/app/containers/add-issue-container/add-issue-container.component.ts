import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Issue } from '@models/issue';
import { Store } from '@ngrx/store';
import { AddIssue, selectPlaceholderIssue } from '@store/issues';
import { Observable } from 'rxjs';

@Component({
  selector: 'add-issue-container',
  templateUrl: './add-issue-container.component.html',
  styleUrls: ['./add-issue-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddIssueContainerComponent {
  constructor(private store: Store) {}

  placeHolder$: Observable<Issue> = this.store.select(selectPlaceholderIssue);
  
  onComment($event: Issue) {
    this.store.dispatch(AddIssue({ issue: $event }));
  }
}
