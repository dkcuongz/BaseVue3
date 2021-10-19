import {ROLE} from '../../../constant/index'
export default [
    {
        name: 'Home',
        icon: 'fas fa-tasks nav-icon blue',
        routerName: 'home',
        isHasChild: false,
        role: ROLE.USER,
    },
    {
        name: 'Example For Admin',
        icon: 'fas fa-flag nav-icon blue',
        routerName: 'home',
        isHasChild: false,
        role: ROLE.USER,
    },
    {
        name: 'Role',
        icon: 'fas fa-user-tag nav-icon blue',
        routerName: 'home',
        isHasChild: false,
        role: ROLE.ADMIN,
    },
]
