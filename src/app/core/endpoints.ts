export interface Endpoint {
    api:  string,
    mock: string
}

const ISSUES_ENDPOINTS: Endpoint = {
    api: '',
    mock: 'mock_data/issues.json'
}

const isMock = true;

export const ISSUE_ENDPOINT: string = isMock ? ISSUES_ENDPOINTS.mock : ISSUES_ENDPOINTS.api;

