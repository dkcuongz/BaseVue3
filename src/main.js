import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
// import vee-validate
import {Field, Form, ErrorMessage} from 'vee-validate';
import './ultis/validations.ultil'
// import scss
import './assets/scss/styles.scss'
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas);
import {fab} from '@fortawesome/free-brands-svg-icons';

library.add(fab);
import {far} from '@fortawesome/free-regular-svg-icons';

library.add(far);
import {dom} from "@fortawesome/fontawesome-svg-core";

dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

//import vue progressbar
import Vue3Progress from "vue3-progress";

const options = {
    position: "fixed",
    height: "3px",
    // color: "<Your Color>",
};
app.use(Vue3Progress, options)
// import moment
import moment from 'moment'

app.config.globalProperties.$moment = moment;

app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)
app.use(store);

// check login
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && !localStorage.getItem('isLogin')) next({name: 'login'})
    else next()
})
router.beforeEach((to, from, next) => {
    if (to.name == 'login' && localStorage.getItem('isLogin')) next({name: 'home'})
    else next()
})

app.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function(event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
app.use(router).mount('#app')

export default app
