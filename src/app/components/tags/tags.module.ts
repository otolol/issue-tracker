import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@components/button/button.module';
import { TagsComponent } from './tags.components';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule],
  declarations: [TagsComponent],
  exports: [TagsComponent],
})
export class TagsModule {}
