import { Issue } from '@models/issue';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IssuesState } from './issues.reducer';

export const selectIssueState = createFeatureSelector<IssuesState>('issues');

export const selectIssues = createSelector(
  selectIssueState,
  (state: IssuesState) => {
    if (state.selectedTag == '') {
      return state.issues;
    } else {
      return state.issues.filter((issue: Issue) => {
        return (
          issue.tags.filter((tag: string) => tag === state.selectedTag).length >
          0
        );
      });
    }
  }
);

export const selectIssuesLoadingStatus = createSelector(
  selectIssueState,
  (state: IssuesState) => {
    return state.loadingStatus;
  }
);

export const selectIssuesError = createSelector(
  selectIssueState,
  (state: IssuesState) => {
    return state.error;
  }
);

export const selectAllTags = createSelector(
  selectIssueState,
  (state: IssuesState) => {
    return state.tags;
  }
);

export const selectPlaceholderIssue = createSelector(
  selectIssueState,
  (state: IssuesState) => {
    return {
      id: '',
      title: '',
      text: '',
      tags: [],
    } as Issue;
  }
);
