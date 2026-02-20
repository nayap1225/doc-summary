import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.mount("#app");

// 개발 환경에서 포트 충돌로 인한 이전 프로젝트 Service Worker 제거
if (import.meta.env.DEV && "serviceWorker" in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    for (const registration of registrations) {
      console.log("Unregistering Service Worker:", registration);
      registration.unregister();
    }
  });
}
