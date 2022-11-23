import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { IssueFormModule } from '@components/issue-form/issue-form.module';
import { IssueViewModule } from '@components/issue-view/issue-view.module';
import { IssueLayoutModule } from '..';
import { IssueItemComponent } from './issue-item.component';

describe('Issue Item Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        IssueLayoutModule,
        IssueViewModule,
        IssueFormModule,
      ],
      declarations: [IssueItemComponent],
    }).compileComponents();
  });

  it('should create issue item component', () => {
    const fixture = TestBed.createComponent(IssueItemComponent);
    const issueItemComp = fixture.componentInstance;
    expect(issueItemComp).toBeTruthy();
  });

  it('it should render issue-layout component', () => { 
    const fixture = TestBed.createComponent(IssueItemComponent);
    const compiled = fixture.nativeElement as HTMLEmbedElement;
    expect(compiled.querySelector('issue-layout')).toBeTruthy();
  });

  it('it should render issue-form if editMode is true', () => {
    const fixture = TestBed.createComponent(IssueItemComponent);
    const issueItemComp = fixture.componentInstance;
    issueItemComp.editMode = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLEmbedElement;
    expect(compiled.querySelector('issue-form')).toBeTruthy();
  })
});
