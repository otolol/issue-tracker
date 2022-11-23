import { createAction, props } from "@ngrx/store";
import { Issue } from "@models/index";
import { HttpErrorResponse } from "@angular/common/http";

export const FetchIssues = createAction(
    '[Issues] Fetch'
)

export const FetchIssuesSuccess = createAction(
    '[Issues] Fetch Success',
    props<{issues: Array<Issue>}>()
)

export const FetchIssuesFailure = createAction(
    '[Issues] Fetch Failure',
    props<{error: HttpErrorResponse}>()
)

export const UpdateIssue = createAction(
    '[Issues] Update Issue', 
    props<{issue: Issue}>()
)

export const UpdateIssueSuccess = createAction(
    '[Issues] Update Issue Success',
    props<{issue: Issue}>()
)

export const DeleteIssue = createAction(
    '[Issues] Delete Issue',
    props<{issueId: string}>()
)

export const DeleteissueSuccess = createAction(
    '[Issues] Delete Issue Success',
    props<{issueId: string}>()
)

export const SetAllTags = createAction(
    '[Issues] Set All Tags',
    props<{tags: Array<string>}>()
)

export const UpdateSelectedTag = createAction(
    '[Issues] Update selected tag',
    props<{tag: string}>()
)

export const AddIssue = createAction(
    '[Issues] Add issue',
    props<{issue: Issue}>()
)

export const AddIssueSuccess = createAction(
    '[Issues] Add Issues Succcess',
    props<{issue: Issue}>()
)

export const AddIssueFailure = createAction(
    '[Issues] Add Issue Failure',
    props<{err: HttpErrorResponse}>()
)


export const UpdatEditModeById = createAction(
    '[Issues] Update Edit Mode by id',
    props<{issueId: string}>()
)