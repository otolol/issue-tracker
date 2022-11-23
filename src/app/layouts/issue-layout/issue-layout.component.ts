import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Issue } from '@models/issue';

@Component({
  selector: 'issue-layout',
  templateUrl: './issue-layout.component.html',
  styleUrls: ['./issue-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuelayoutComponent {}
