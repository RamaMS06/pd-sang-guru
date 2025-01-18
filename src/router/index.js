import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import CheckoutPage from "../views/CheckoutPages/CheckoutPage.vue";
import ProfilePage from "../views/ProfilePages/ProfilePage.vue";
import TipPage from "../views/TipPages/TipPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },
    {
      path: "/pages/checkout-pages/checkout",
      name: "contactus",
      component: CheckoutPage,
    },
    {
      path: "/pages/profile-pages/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/pages/tip-pages/tip",
      name: "tip",
      component: TipPage,
    },
  ],
});

export default router;
