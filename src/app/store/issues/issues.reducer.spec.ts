import { Issue } from '@models/issue';
import { LoadingStatus } from '@models/loadingStatus';
import * as issueActions from './issues.actions';
import * as fromIssues from './issues.reducer';

describe('Issues Reducer', () => {
    let initState = fromIssues.issuesInitState;
    let reducer: any;

    beforeEach(() => {
        initState = fromIssues.issuesInitState;
        reducer = fromIssues.issuesReducer;
    })

    it('should return default state', () => {
        const state = reducer(undefined, {type: null});
        expect(state).toEqual(initState);
    })

    it('should change loadingSate from NOT_LOADED to LOADING', () => {
        const state = reducer(initState, issueActions.FetchIssues());
        expect(state).toEqual({
            ...initState,
            loadingStatus: LoadingStatus.LOADING
        })
    })

    it('should set issues and change loading Status', () => {

        const issues: Array<Issue> = [{
            id: '1',
            title: 'test',
            text: 'text',
            tags: ['1', '2'],
            suggestedTags: []
          }];
        const state = reducer(initState, issueActions.FetchIssuesSuccess({issues: issues}))
        expect(state).toEqual({
            ...initState,
            issues: issues,
            loadingStatus: LoadingStatus.LOADED
        })
    })
});