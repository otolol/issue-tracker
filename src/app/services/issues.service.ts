import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Issue } from '@models/index';
import { Injectable } from '@angular/core';
import { ISSUE_ENDPOINT } from '../core/endpoints';

@Injectable()
export class IssuesService {
  constructor(private http: HttpClient) {}

  getIssues(): Observable<Array<Issue>> {
    return this.http.get<Array<Issue>>(ISSUE_ENDPOINT).pipe(
      map((res: Array<Issue>) => {
        return res;
      })
    );
  }

  /**
   * fake update method
   * @param issue
   * @returns
   */
  updateIssue(issue: Issue): Observable<Issue> {
    return of(issue);
  }

  deleteIssue(_issueId: string): Observable<string> {
    return of('delete succesfully');
  }

  addIssue(issue: Issue): Observable<Issue> {
    const updatedIssue = {
      ...issue,
      id: (Math.random() * 1000).toString(),
    };
    return of(updatedIssue);
  }

  getTags(issues: Array<Issue>) {
    const tags = issues
      .map((issue: Issue) => {
        return issue.tags;
      })
      .reduce((prev: Array<string>, curr: Array<string>) => {
        return [...prev, ...curr];
      }, []);
    return [...new Set(tags)];
  }
}
