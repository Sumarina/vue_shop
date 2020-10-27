import FetchMock from 'fetch-mock';

FetchMock.mock('/login', () => ({ code: 200, message: 'success' }));
