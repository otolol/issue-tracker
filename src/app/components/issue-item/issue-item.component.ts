import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from '@models/issue';

@Component({
  selector: 'issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  @Input() issue: Issue = {} as Issue;
  @Output() changeIssue: EventEmitter<Issue> = new EventEmitter<any>();
  @Output() deleteIssue: EventEmitter<string> = new EventEmitter<string>();
  @Output() updateEditMode: EventEmitter<string> = new EventEmitter<string>();

  toggleEditMode() {
    this.updateEditMode.emit(this.issue.id);
  }

  onChangeIssue($event: Issue) {
      this.changeIssue.emit($event);
  }

  onDeleteIssue(issueId: string) {
      this.deleteIssue.emit(issueId);
  }
}
