import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Issue } from '@models/issue';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { IssuesService } from '@services/issues.service';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

import * as issuesActions from './issues.actions';

@Injectable()
export class IssuesEffects {
  constructor(
    private actions$: Actions,
    private issuesService: IssuesService
  ) {}

  fetchIssues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(issuesActions.FetchIssues),
      mergeMap(() => {
        return this.issuesService.getIssues().pipe(
          mergeMap((res: Array<Issue>) => {
            const uniqueTags = this.issuesService.getTags(res);
            return [
              issuesActions.FetchIssuesSuccess({ issues: res }),
              issuesActions.SetAllTags({ tags: uniqueTags }),
            ];
          }),
          catchError((err: HttpErrorResponse) => {
            return of(issuesActions.FetchIssuesFailure({ error: err }));
          })
        );
      })
    )
  );

  AddIssue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(issuesActions.AddIssue),
      map((action) => action.issue),
      switchMap((issue: Issue) => {
        return this.issuesService.addIssue(issue).pipe(
          map((issue: Issue) => {
            return issuesActions.AddIssueSuccess({ issue: issue });
          }),
          catchError((err: HttpErrorResponse) => {
            return of(issuesActions.AddIssueFailure({err: err}));
          })
        );
      })
    )
  );

  updateIssue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(issuesActions.UpdateIssue),
      map((action) => action.issue),
      switchMap((issue: Issue) => {
        return this.issuesService.updateIssue(issue).pipe(
          map((issue: Issue) => {
            return issuesActions.UpdateIssueSuccess({ issue });
          })
        );
      })
    )
  );

  deleteIssue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(issuesActions.DeleteIssue),
      map((action) => action.issueId),
      switchMap((issueId: string) => {
        return this.issuesService.deleteIssue(issueId).pipe(
          map((_message: string) => {
            return issuesActions.DeleteissueSuccess({ issueId });
          })
        );
      })
    )
  );
}
