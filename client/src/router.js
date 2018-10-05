import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Meetups-Clone | Home",
        metaTags: [
          {
            name: "description",
            content: "The home page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The home page of the Meetups-Clone app."
          }
        ]
      }
    },
    {
      path: "/add",
      name: "add-meetup",
      component: () =>
        import(/* webpackChunkName: "add-meetup" */ "./views/AddMeetup.vue"),
      meta: {
        title: "Meetups-Clone | Add Meetup",
        metaTags: [
          {
            name: "description",
            content: "The add meetup page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The home page of the Meetups-Clone app."
          }
        ]
      }
    },
    {
      path: "/find/:type",
      name: "find-meetups",
      component: () =>
        import(/* webpackChunkName: "found-meetups" */ "./views/FindMeetups.vue"),
      meta: {
        title: "Meetups-Clone | Find Meetups",
        metaTags: [
          {
            name: "description",
            content: "The find meetups page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The find meetups page of the Meetups-Clone app."
          }
        ]
      },
      props: true
    },
    {
      path: "/group/:name",
      name: "meetup-group",
      component: () =>
        import(/* webpackChunkName: "meetup-group" */ "./views/MeetupGroup.vue"),
      meta: {
        title: "Meetups-Clone | Meetup Group",
        metaTags: [
          {
            name: "description",
            content: "The meetup group page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The meetup group page of the Meetups-Clone app."
          }
        ]
      }
    },
    {
      path: "/create",
      name: "create-meetup",
      component: () =>
        import(/* webpackChunkName: "create-meetup" */ "./views/CreateMeetup.vue"),
      meta: {
        title: "Meetups-Clone | Create Meetup",
        metaTags: [
          {
            name: "description",
            content: "The create meetup page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The create meetup page of the Meetups-Clone app."
          }
        ]
      }
    },
    {
      path: "/accounts/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue"),
      meta: {
        title: "Meetups-Clone | Login to Account",
        metaTags: [
          {
            name: "description",
            content: "The login page of the Meetups-Clone app."
          },
          {
            property: "og:description",
            content: "The login page of the Meetups-Clone app."
          }
        ]
      }
    }
  ],
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // eslint-disable-next-line
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    el => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

  next();
});

export default router;
