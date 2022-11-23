import { CommonModule } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { IssueFitlerComponent } from './issue-filter.component';

describe('Issue Filter Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [IssueFitlerComponent],
    }).compileComponents();
  });

  it('should create Issue Filter Component', () => {
    const fixture = TestBed.createComponent(IssueFitlerComponent);
    const issueFilterComp = fixture.componentInstance;
    expect(issueFilterComp).toBeTruthy();
  });

});
