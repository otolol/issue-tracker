import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'issue-actions',
  templateUrl: './issue-actions.component.html',
  styleUrls: ['./issue-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueActionsComponent {}
