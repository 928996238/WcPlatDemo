import Vue from './vue.js';
import App from './App.js';

new Vue({
    render(h) {
        return h(App)
    }
}).$mount("#app");