<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";
import ContactModal from "../../views/Presentation/Components/ContactModal.vue";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download",
    }),
  },
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

let showModalContact = ref(false);

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3',
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/2938/2938232.png"
          style="width: 20px; height: 20px"
        />

        <span class="title-guru">PD. Sang Guru</span>
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        PD. Sang Guru
      </RouterLink>
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <RouterLink
            class="navbar-brand d-block d-md-none"
            :class="
              props.transparent || props.dark
                ? 'text-white'
                : 'font-weight-bolder ms-sm-3'
            "
            to="/"
            rel="tooltip"
            title="Designed and Coded by Creative Tim"
            data-placement="bottom"
          >
            <img
              class="guru-navbar"
              src="https://cdn-icons-png.flaticon.com/512/2938/2938232.png"
            />
          </RouterLink>
          <div style="display: flex; gap: 16px">
            <div class="service-navbar" v-on:click="showModalContact = true">
              <div class="material-icons opacity-6 me-2 text-md">
                support_agent
              </div>
              <span class="nav-text">Bantuan</span>
            </div>
            <RouterLink
              class="checkout-navbar"
              to="/pages/checkout-pages/checkout"
            >
              <div class="nav-icon material-icons opacity-6 me-2 text-md">
                shopping_cart
              </div>
              <span class="nav-text"> Keranjang </span>
            </RouterLink>
            <RouterLink
              class="checkout-navbar"
              to="/pages/profile-pages/profile"
            >
              <div class="nav-icon material-icons opacity-6 me-2 text-md">
                account_circle
              </div>
              <span class="nav-text"> Profil </span>
            </RouterLink>
            <RouterLink class="checkout-navbar" to="/pages/tip-pages/tip">
              <div class="nav-icon material-icons opacity-6 me-2 text-md">
                lightbulb
              </div>
              <span class="nav-text"> Tips </span>
            </RouterLink>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <ContactModal :isOpen="showModalContact" @close="showModalContact = false" />
  <!-- End Navbar -->
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.service-navbar {
  cursor: pointer;
}
.checkout-navbar,
.service-navbar {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    color: black;

    .nav-icon {
      color: black;
    }

    .nav-text {
      color: black;
    }
  }
}

.guru-navbar {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  @media (max-width: 768px) {
    display: none;
  }
}

.title-guru {
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
}

.nav-text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: gray;

  @media (max-width: 768px) {
    // display: none;
  }
}

.nav-icon {
  color: gray;
}

.shadow {
  box-shadow: none;
}
</style>
