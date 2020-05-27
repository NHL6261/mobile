import Vue from "vue";
import VueRouter from "vue-router";
const home = resolve => require(["../components/m-home.vue"], resolve);
const heart = resolve => require(["../components/m-heart.vue"], resolve);
const cloud = resolve => require(["../components/m-cloud.vue"], resolve);
const employed = resolve => require(["../components/m-employed.vue"], resolve);
const join = resolve => require(["../components/m-join.vue"], resolve);
const about = resolve => require(["../components/m-about.vue"], resolve);
const b2bproxy = resolve => require(["../components/m-b2bproxy.vue"], resolve);

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: home,
    meta: {
      navlist: true
    }
  },
  {
    path: "/heart",
    name: "heart",
    component: heart,
    meta: {
      navlist: true
    }
  },
  {
    path: "/cloud",
    name: "cloud",
    component: cloud,
    meta: {
      navlist: true
    }
  },
  {
    path: "/employed",
    name: "employed",
    component: employed,
    meta: {
      navlist: true
    }
  },
  {
    path: "/join",
    name: "join",
    component: join,
    meta: {
      navlist: true
    }
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: {
      navlist: true
    }
  },
  {
    path: "/b2bproxy",
    name: "b2bproxy",
    component: b2bproxy,
    meta: {
      navlist: true
    }
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  routes
});

export default router;
