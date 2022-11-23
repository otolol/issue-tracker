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
  
  @Output() changeIssue: EventEmitter<Issue> = new EventEmitter<Issue>();
  @Output() cancelChanges = new EventEmitter();

  issueForm: FormGroup = new FormGroup({});

  
  tags: Array<string> = [];
  ngOnInit() {
    this.issueForm = new FormGroup({
      title: new FormControl(this.issue.title, [Validators.required]),
      text: new FormControl(this.issue.text, [Validators.required]),
    });
    this.tags = this.issue.tags;
  }

  onRemoveTag($event: string) {
    this.tags = this.tags.filter((tag: string) => tag != $event);
  }

  onAddTag($event: string) {
    this.tags = [...this.tags, $event];
  }

  onSaveChanges() {
    const issue = {
      ...this.issue,
      tags: this.tags,
      title: this.issueForm.value.title,
      text: this.issueForm.value.text,
    };
    this.issueForm.reset();
    this.tags = [];
    this.changeIssue.emit(issue);
  }

  onCancelChanges() {
    this.cancelChanges.emit();
  }
}
