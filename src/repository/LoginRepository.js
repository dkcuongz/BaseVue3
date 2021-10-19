import {repo} from '../axios-mock/AxiosMockRepository'

const FRONT_RESOURCE = 'api/v1/login';

export default class LoginRepository {
    /**
     * Get by id
     * @returns {Promise<AxiosResponse<any>>}
     */
    login() {
        return repo.post(`${FRONT_RESOURCE}`).then(function (response) {
            return response;
        });
    }
}
