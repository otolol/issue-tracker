import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags.components';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TagsComponent],
  exports: [TagsComponent],
})
export class TagsModule {}
