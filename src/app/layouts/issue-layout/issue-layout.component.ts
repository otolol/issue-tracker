import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';

@Component({
  selector: 'issue-layout',
  templateUrl: './issue-layout.component.html',
  styleUrls: ['./issue-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuelayoutComponent {}
