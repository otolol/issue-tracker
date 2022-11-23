import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from './tags.components';

describe('Tags Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [TagsComponent],
    }).compileComponents();
  });

  it('should create Tags Component', () => {
    const fixutres = TestBed.createComponent(TagsComponent);
    const tagsComp = fixutres.componentInstance;
    expect(tagsComp).toBeTruthy();
  });

  it('should render tags if not editable', () => {
    const fixutre = TestBed.createComponent(TagsComponent);
    const tagsComp = fixutre.componentInstance;
    const tags = ['1', '12'];
    tagsComp.tags = tags;
    tagsComp.editable = false;
    fixutre.detectChanges();
    const compiled = fixutre.nativeElement as HTMLElement;
    expect(compiled.querySelector('.tag')?.textContent).toEqual('1');
  });
});
