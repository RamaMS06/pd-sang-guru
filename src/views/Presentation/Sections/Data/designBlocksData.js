/*
=========================================================
* Midas Cafetaria - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Seblak",
    description:
      "Nikmati kelezatan seblak khas Midas yang memanjakan lidah! Dengan perpaduan bumbu rempah tradisional yang gurih, pedas, dan harum",
    items: [
      { id: 1,
        image: `https://i.pinimg.com/736x/a0/88/75/a08875627f88f6d78d9fcf7486bb5101.jpg`,
        title: "Seblak Ceker",
        price: 10000,
        subtitle: "10 Examples",
        route: "page-headers",
      },
      { 
        id: 2,
        image:
          "https://i.pinimg.com/736x/ad/03/0e/ad030e81433cb61c064c8397705e12b2.jpg",
        title: "Seblak Sosis",
        subtitle: "14 Examples",
        price: 10000,
        route: "page-features",
      },
      {
        id: 3,
        image: `https://i.pinimg.com/736x/5a/ff/77/5aff778eecc5b4a2e8959172f2fc17d7.jpg`,
        title: "Seblak Bakso",
        subtitle: "10 Examples",
        price: 12000,
        route: "page-headers",
      },
      { 
        id: 4,
        image:
          "https://i.pinimg.com/736x/ef/a7/d2/efa7d28c46877ac2f6475aa32cd5986b.jpg",
        title: "Seblak Otak Otak Singapur",
        subtitle: "14 Examples",
        route: "page-features",
        price: 12000,
      },
      { 
        id: 5,
        image:
          "https://i.pinimg.com/736x/36/09/ac/3609acdf5cf0d0fcc9cc357267951acc.jpg",
        title: "Seblak Komplit",
        subtitle: "14 Examples",
        route: "page-features",
        price: 12000,
      },
      { 
        id: 6,
        image:
          "https://i.pinimg.com/736x/bd/dd/44/bddd44891432631fcfd73221a72498cf.jpg",
        title: "Seblak Dumpling",
        subtitle: "14 Examples",
        route: "page-features",
        price: 14000,
      },
      { 
        id: 6,
        image:
          "https://i.pinimg.com/736x/33/ed/35/33ed35902cceb8763af82ad89cb3e479.jpg",
        title: "Korean Food",
        subtitle: "14 Examples",
        route: "page-features",
        price: 15000,
      },
    ],
  },
  {
    heading: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
      },
    ],
  },
  {
    heading: "Input Areas",
    description:
      "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "Newsletters",
        subtitle: "6 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "Contact Sections",
        subtitle: "8 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "Forms",
        subtitle: "3 Examples",
        route: "inputareas-forms",
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        title: "Inputs",
        subtitle: "6 Examples",
        route: "inputareas-inputs",
      },
    ],
  },
  {
    heading: "Attention Catchers",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
      },
    ],
  },
  {
    heading: "Elements",
    description:
      "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        title: "Buttons",
        subtitle: "6 Examples",
        route: "el-buttons",
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Avatars",
        subtitle: "2 Examples",
        route: "el-avatars",
      },
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Progress Bars",
        subtitle: "4 Examples",
        route: "el-progress-bars",
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        title: "Tables",
        subtitle: "3 Examples",
        route: "presentation",
        pro: true,
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Typography",
        subtitle: "2 Examples",
        route: "el-typography",
      },
    ],
  },
];
