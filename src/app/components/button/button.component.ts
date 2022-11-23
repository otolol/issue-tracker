import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 't-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
    @HostBinding('class.t-button') className: boolean = true;
}

@Directive({
  selector: 't-button[warn]',
})
export class WarnButton {
  @HostBinding('class.t-button--warn') className: boolean = true;
}

@Directive({
    selector: 't-button[primary]',
  })
  export class PrimaryButton {
    @HostBinding('class.t-button--primary') className: boolean = true;
  }
  
