import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { TagsModule } from '@components/tags';
import { IssueActionsModule } from 'src/app/layouts/issue-actions/issue-actions.module';
import { IssueFormComponent } from './issue-form.component';

describe('Issue Form Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ReactiveFormsModule,
        TagsModule,
        IssueActionsModule,
      ],
      declarations: [IssueFormComponent],
    }).compileComponents();
  });

  it('should create Issue Form Component', () => {
    const fixture = TestBed.createComponent(IssueFormComponent);
    const issueFormComp = fixture.componentInstance;
    expect(issueFormComp).toBeTruthy();
  });
});
