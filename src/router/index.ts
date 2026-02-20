import { createRouter, createWebHistory } from "vue-router";
import ParserSetup from "../views/ParserSetup.vue";

import StudioLayout from "../layouts/StudioLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: StudioLayout,
      redirect: { name: "parser-setup" },
      children: [
        {
          path: "parser-setup",
          name: "parser-setup",
          component: ParserSetup,
        },

        {
          path: "sessions",
          name: "session-list",
          component: () => import("../views/SessionList.vue"),
        },
      ],
    },
  ],
});

export default router;
