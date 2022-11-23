import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { IssueActionsModule } from 'src/app/layouts/issue-actions/issue-actions.module';
import { TagsModule } from '@components/tags';
import { CalculatePipe } from '@pipes/calculate.pipe';
import { SafePipe } from '@pipes/safe.pipe';
import { IssueViewComponent } from './issue-view.component';

describe('Issue View Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, IssueActionsModule, TagsModule],
      declarations: [IssueViewComponent, SafePipe, CalculatePipe],
    }).compileComponents();
  });

  it('should create issueView component', () => {
    const fixutres = TestBed.createComponent(IssueViewComponent);
    const issueViewComp = fixutres.componentInstance;
    expect(issueViewComp).toBeTruthy();
  });

  it('should have issue title rendered', () => {
    const fixture = TestBed.createComponent(IssueViewComponent);
    const issueViewComp = fixture.componentInstance;
    issueViewComp.issue = {
      id: '1',
      title: 'title',
      text: 'test text',
      tags: ['1'],
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.issue-header')?.textContent).toEqual(
      'title'
    );
    expect(compiled.querySelector('.issue-text')?.innerHTML).toEqual(
      'test text'
    );
  });

  it('should render tags component', () => {
    const fixture = TestBed.createComponent(IssueViewComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('tags')).toBeTruthy();
  });

  it('should render actions component', () => {
    const fixture = TestBed.createComponent(IssueViewComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('issue-actions')).toBeTruthy();
  });
});
