import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { IssuesService } from './issues.service';
import { Issue } from '@models/issue';

describe('Issue Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [IssuesService],
    });
  });

  it('should be intialized', inject(
    [IssuesService],
    (issueService: IssuesService) => {
      expect(issueService).toBeTruthy();
    }
  ));

  it('should return data from Be', fakeAsync(
    inject(
      [IssuesService, HttpTestingController],
      (issueService: IssuesService, backend: HttpTestingController) => {
        const repsonseObject: Array<Issue> = [
          { id: '1', title: 'test issue', text: 'some text', tags: ['1'] },
        ];

        let response: Array<Issue> = [];
        issueService.getIssues().subscribe((issues: Array<Issue>) => {
          response = issues;
        });

        const req = backend.expectOne('mock_data/issues.json');
        req.flush(repsonseObject);

        tick(800);
        expect(req.request.method).toEqual('GET');
        expect(response).toEqual(repsonseObject);
      }
    )
  ));

  it('should extract tags from', inject(
    [IssuesService],
    (issueService: IssuesService) => {
      const repsonseObject: Array<Issue> = [
        { id: '1', title: 'test issue', text: 'some text', tags: ['1'] },
      ];
      expect(issueService.getTags(repsonseObject)).toEqual(['1']);
    }
  ));

  it('should extract unique tags', inject(
    [IssuesService],
    (issueService: IssuesService) => {
      const repsonseObject: Array<Issue> = [
        { id: '1', title: 'test issue', text: 'some text', tags: ['1'] },
        { id: '2', title: 'test2', text: 'some tex2', tags: ['1', '2'] },
      ];
      expect(issueService.getTags(repsonseObject)).toEqual(['1', '2']);
    }
  ));
});
