import Vue from "vue";
// import App from "./App.vue";
import Akimusic from "./views/Akimusic.vue";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import "./assets/css/layout.scss";
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
  render: h => h(Akimusic),
  router,
  store
}).$mount("#app");
