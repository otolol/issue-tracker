import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'issue-filter',
  templateUrl: './issue-filter.component.html',
  styleUrls: ['./issue-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssueFitlerComponent {
  @Input() tags: Array<string> = new Array<string>();
  @Output() selectFilterTag: EventEmitter<string> = new EventEmitter<string>();
  @Output() resetFilter: EventEmitter<any> = new EventEmitter<any>();

  onChange(target: any) {
    this.selectFilterTag.emit(target.value);
  }

  onReset() {
    this.resetFilter.emit();
  }
}
