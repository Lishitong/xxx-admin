import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import router from "./router/index.js";
import "./utils/flexible.js";
import "normalize.css";
import "element-plus/lib/theme-chalk/index.css";
import "./style/index.less";

const app = createApp(App)
  .use(ElementPlus, { size: "small", zIndex: 3000 })
  .use(router)
  .mount("#app");
