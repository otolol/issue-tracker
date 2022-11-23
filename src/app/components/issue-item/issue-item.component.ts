import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from '@models/issue';

@Component({
  selector: 'issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueItemComponent {

  editMode: boolean = false;

  @Input() issue: Issue = {} as Issue;
  @Output() changeIssue: EventEmitter<Issue> = new EventEmitter<any>();
  @Output() deleteIssue: EventEmitter<string> = new EventEmitter<string>();
  @Output() addTag: EventEmitter<{ id: string; tag: string }> = new EventEmitter<{ id: string; tag: string }>();
  @Output() removeTag: EventEmitter<{ id: string; tag: string }> = new EventEmitter<{ id: string; tag: string }>();

  startEditMode() {
    this.editMode = true;
  }

  removeEditMode() {
    this.editMode = false;
  }

  onChangeIssue($event: Issue) {
      this.changeIssue.emit($event);
  }

  onDeleteIssue(issueId: string) {
      this.deleteIssue.emit(issueId);
  }

  onAddTag(event: { id: string; tag: string }) {
    this.addTag.emit(event);
  }

  onRemoveTag(event: { id: string; tag: string }) {
      this.removeTag.emit(event);
  }
}
