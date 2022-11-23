import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from '@models/issue';

@Component({
  selector: 'issue-form',
  templateUrl: './issue-form.component.html',
  styleUrls: ['./issue-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueFormComponent {
  @Input() issue: Issue = {} as Issue;
  issueForm: FormGroup = new FormGroup({});
  @Output() changeIssue: EventEmitter<Issue> = new EventEmitter<Issue>();
  @Output() cancelChanges = new EventEmitter();
  @Output() removeTag = new EventEmitter<string>();
  @Output() addTag = new EventEmitter<string>();

  ngOnInit() {
    this.issueForm = new FormGroup({
      title: new FormControl(this.issue.title, [Validators.required]),
      text: new FormControl(this.issue.text, [Validators.required]),
    });
  }

  onRemoveTag($event: string) {
    this.removeTag.emit($event);
  }

  onAddTag($event: string) {
    this.addTag.emit($event);
  }

  onSaveChanges() {
    const issue = {
      ...this.issue,
      title: this.issueForm.value.title,
      text: this.issueForm.value.text,
    };
    this.changeIssue.emit(issue);
  }

  onCancelChanges() {
    this.cancelChanges.emit();
  }
}
