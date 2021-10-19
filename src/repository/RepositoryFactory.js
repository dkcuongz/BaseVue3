import LoginRepository from "./LoginRepository";

const repositories = {
    login: new LoginRepository(),
}

export const RepositoryFactory = {
    get: name => repositories[name]
}
