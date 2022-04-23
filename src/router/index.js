import Vue from "vue";
import VueRouter from "vue-router";
import BoardList from "@/components/board/BoardList";
import BoardDetail from "@/components/board/BoardDetail";
import BoardCreate from "@/components/board/BoardCreate";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "BoardList",
      component: BoardList
    },
    {
      path: "/board/detail/:contentId",
      name: "BoardDetail",
      component: BoardDetail
    },
    {
      path: "/board/create/:contentId?",
      name: "BoardCreate",
      component: BoardCreate
    },
  ]
});
