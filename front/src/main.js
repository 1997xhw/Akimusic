import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/base.css";
import "./plugins/element.js";
import router from "./router";

axios.interceptors.request.use(function(config) {
  config.headers.token = window.sessionStorage.getItem("token");
  return config;
});
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = "/api";
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
