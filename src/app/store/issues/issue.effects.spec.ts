import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { IssuesService } from '@services/issues.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { IssuesEffects } from './issues.effects';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import * as issueActions from './issues.actions';
import { Issue } from '@models/issue';
import { cold, hot } from 'jasmine-marbles';

describe('Issue Effects', () => {
  let effects: IssuesEffects;
  let actions$: Observable<any>;
  let issueService: IssuesService;

  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting()
    );

    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        IssuesEffects,
        provideMockActions(() => actions$),
        IssuesService,
      ],
    });

    issueService = TestBed.inject(IssuesService);
    actions$ = TestBed.inject(Actions);
    effects = TestBed.inject(IssuesEffects);
  });

  describe('updateIssue$', () => {
    it('should be created', () => {
      expect(effects).toBeTruthy();
    });
    it('shoulld return UpdateIssueSuccess with updated issue', () => {
      const issue: Issue = {
        id: '1',
        title: 'test',
        text: 'text',
        tags: ['1', '2'],
      };
      const action = issueActions.UpdateIssue({ issue: issue });
      const completion = issueActions.UpdateIssueSuccess({ issue: issue });
      const response = cold('-a|', { a: issue });
      const expected = cold('--b', { b: completion });
      actions$ = hot('-a', { a: action });
      issueService.updateIssue = jasmine
        .createSpy('updateIssue')
        .and.returnValue(response);
      expect(effects.updateIssue$).toBeObservable(expected);
    });
  });

  describe('fetchIssues', () => {
    it('should return FetchIssuesSuccess and SetAllTags actions', () => {
      const issues: Array<Issue> = [
        {
          id: '1',
          title: 'test',
          text: 'text',
          tags: ['1', '2'],
        },
      ];
      const tags = ['1', '2'];

      const action = issueActions.FetchIssues();
      const completion1 = issueActions.FetchIssuesSuccess({ issues: issues });
      const completion2 = issueActions.SetAllTags({ tags: tags });
      const response = cold('-a|', { a: issues });
      const expected = cold('--(bc)', { b: completion1, c: completion2 });
      actions$ = hot('-a', { a: action });
      issueService.getIssues = jasmine
        .createSpy('getIssues')
        .and.returnValue(response);
      expect(effects.fetchIssues$).toBeObservable(expected);
    });

    it('should return FetchIssueFailure with error', () => {
      const error = new HttpErrorResponse({});
      const action = issueActions.FetchIssues();
      const completion = issueActions.FetchIssuesFailure({ error: error });
      const response = cold('-#', {}, error);
      const expected = cold('--b', { b: completion });
      issueService.getIssues = jasmine
        .createSpy('getIssues')
        .and.returnValue(response);
      actions$ = hot('-a', { a: action });
      expect(effects.fetchIssues$).toBeObservable(expected);
    });
  });
});
