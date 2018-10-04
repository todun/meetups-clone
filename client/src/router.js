import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddMeetup from "./views/AddMeetup.vue";
import Create from "./views/CreateMeetup.vue";
import FindMeetups from "./views/FindMeetups.vue";
import MeetupGroup from "./views/MeetupGroup.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/add",
      name: "add-meetup",
      component: AddMeetup
    },
    {
      path: "/find/:type",
      name: "find-meetups",
      component: FindMeetups,
      props: true
    },
    {
      path: "/group/:name",
      name: "meetup-group",
      component: MeetupGroup
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/accounts/signup",
      name: "signup",
      component: SignUp
    },
    {
      path: "/accounts/login",
      name: "login",
      component: Login
    }
  ],
  mode: "history"
});
