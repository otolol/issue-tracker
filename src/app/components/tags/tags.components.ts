import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagsComponent {
  @Input() tags: Array<string> = [];
  @Input() editable: boolean = false;
  @Output() removeTag: EventEmitter<string> = new EventEmitter<string>();
  @Output() addTag: EventEmitter<string> = new EventEmitter<string>();

  newTag: string = '';

  onRemoveTag(tag: string) {
    this.removeTag.emit(tag);
  }

  onAddTag(tag: string) {
    this.newTag = '';
    this.addTag.emit(tag);
  }
}
