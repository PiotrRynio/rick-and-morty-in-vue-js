import { createWebHistory, createRouter } from "vue-router";
import NewMessageSection from "@/components/organisms/NewMessageSection/NewMessageSection";
import MessageHistorySection from "@/components/organisms/MessageHistorySection/MessageHistorySection";

const history = createWebHistory();

const routes = [
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NewMessageSection,
    alias: '/'
  },  {
    path: "/",
    name: "Home",
    component: NewMessageSection,
  },
  {
    path: "/history",
    name: "History",
    component: MessageHistorySection,
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;