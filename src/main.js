import Vue from "vue";
import App from "./App.vue";

Vue.config.ignoredElements = [/^ui5-/];

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
