import repo from '../repository/Repository'
import LoginData from "./LoginMock";

const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(repo);

const FRONT_RESOURCE = 'api/v1/login';
mock.onPost(`${FRONT_RESOURCE}`).reply(200, {
    data: LoginData,
});

export {mock, repo};
