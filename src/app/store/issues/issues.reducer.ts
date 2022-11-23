import { HttpErrorResponse } from '@angular/common/http';
import { Issue } from '@models/issue';
import { LoadingStatus } from '@models/loadingStatus';
import { createReducer, on } from '@ngrx/store';

import * as issuesActions from './issues.actions';

export interface IssuesState {
  issues: Array<Issue>;
  loadingStatus: LoadingStatus;
  tags: Array<string>;
  selectedTag: string;
  error?: HttpErrorResponse;
}

export const issuesInitState: IssuesState = {
  loadingStatus: LoadingStatus.NOT_LOADED,
  issues: new Array<Issue>(),
  selectedTag: '',
  tags: new Array<string>(),
};

const _issuesReducer = createReducer(
  issuesInitState,
  on(issuesActions.AddIssue, (state: IssuesState, action) => {
    return {
      ...state,
      issues: [...state.issues, action.issue],
    };
  }),
  on(issuesActions.FetchIssues, (state: IssuesState, _action) => {
    return {
      ...state,
      loadingStatus: LoadingStatus.LOADING,
    };
  }),
  on(issuesActions.FetchIssuesSuccess, (state: IssuesState, action) => {
    return {
      ...state,
      issues: action.issues,
      loadingStatus: LoadingStatus.LOADED,
    };
  }),
  on(issuesActions.FetchIssuesFailure, (state: IssuesState, action) => {
    return {
      ...state,
      issues: [],
      error: action.error,
      loadingStatus: LoadingStatus.NOT_LOADED,
    };
  }),
  on(issuesActions.SetAllTags, (state: IssuesState, action) => {
    return {
      ...state,
      tags: action.tags,
    };
  }),
  on(issuesActions.UpdateSelectedTag, (state: IssuesState, action) => {
    return {
      ...state,
      selectedTag: action.tag,
    };
  }),
  on(issuesActions.UpdateIssueSuccess, (state: IssuesState, action) => {
    const index = state.issues.findIndex(
      (issue: Issue) => issue.id == action.issue.id
    );
    let issues = [...state.issues];
    if (index !== -1) {
      issues[index] = {
        ...action.issue,
        editMode: false,
      };
    }

    let tags = [...state.tags];
    action.issue.tags.forEach((tag: string) => {
      const index = tags.findIndex((_tag) => _tag == tag);
      if(index == -1) {
        tags = [...tags, tag.toLowerCase()];
      }
    })
    return {
      ...state,
      tags: tags,
      issues: issues,
    };
  }),
  on(issuesActions.DeleteissueSuccess, (state: IssuesState, action) => {
    const index = state.issues.findIndex(
      (issue: Issue) => issue.id == action.issueId
    );
    let issues = [...state.issues];
    if (index !== -1) {
      issues.splice(index, 1);
    }
    return {
      ...state,
      issues: issues,
    };
  }),
  on(issuesActions.UpdatEditModeById, (state: IssuesState, action) => {
    const issues = state.issues.map((issue: Issue) => {
      if (issue.id === action.issueId) {
        let diff: Array<string> = [];
        state.tags.forEach((tag: string) => {
          const index = issue.tags.findIndex((_tag: string) => tag == _tag);
          if(index === -1) {
            diff.push(tag);
          }
        });
        issue = {
          ...issue,
          editMode: !issue.editMode,
        };
      }
      return issue;
    });

    return {
      ...state,
      issues: issues,
    };
  })
);

export function issuesReducer(state: IssuesState, action: any) {
  return _issuesReducer(state, action);
}
