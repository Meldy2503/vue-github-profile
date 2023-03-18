import { createRouter, createWebHistory } from "vue-router";
import AllRepos from "../views/AllRepos.vue";
import Home from "../views/Home.vue";
import SearchProfiles from "../views/SearchProfiles.vue";
import SingleRepo from "../views/SingleRepo.vue";
import PageNotFound from "../views/PageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/repositories",
    name: "Repositories",
    component: AllRepos,
  },
  {
    path: "/searchProfiles",
    name: "SearchProfiles",
    component: SearchProfiles,
  },
  {
    path: "/repositories/:repoId",
    name: "Repository",
    component: SingleRepo,
  },
  { path: "/:catchall(.*)*", name: "PageNotFound", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
