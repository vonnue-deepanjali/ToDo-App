import { createRouter, createWebHistory } from "vue-router";
import TaskView from "../views/TaskView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/task",
      name: "task",
      component: TaskView,
    },
  ],
});
export default router;
