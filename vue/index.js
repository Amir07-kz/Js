import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';

import moment from 'moment';

moment.locale('ru');

import VModal from 'vue-js-modal';

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });

Vue.config.productionTip = false;

window.appendvuecomponent = function (target, component, data) {
    Vue.component('app', function (resolve, reject) {
        resolve(require('./App/' + component + '.vue'));
    });

    const vm = new Vue({
        el: target,
        data: () => ({ data }),
        render: function (createElement) {
            return createElement(App);
        },
    });
    return vm;
};

window.moment = moment;
