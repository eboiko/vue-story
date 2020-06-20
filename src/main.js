import Vue from "vue";
// adding components to the project
import HellowWorld from "./components/HelloWorld.vue";
import Logger from "./components/Logger/Logger.vue";
// import Logger from '@Components/Logger/Logger.vue';

import store from "./store";

// adding project styles
import "./main.scss";

Vue.config.productionTip = false;

// adding components to the VUE
Vue.component(HellowWorld.name, HellowWorld);
Vue.component(Logger.name, Logger);

new Vue({
  store
}).$mount("#main-container");