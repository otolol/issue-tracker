import {
  ChangeDetectionStrategy,
  Component,
  Input,
} from '@angular/core';
import { Issue } from '@models/issue';

@Component({
  selector: 'issue-view',
  templateUrl: './issue-view.component.html',
  styleUrls: ['./issue-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueViewComponent {
  @Input() issue: Issue = {} as Issue;
}
