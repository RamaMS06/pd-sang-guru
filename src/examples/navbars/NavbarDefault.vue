<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

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

const goToSupportCenter = () => {
  return window.open(
    `https://wa.me/+6281374019998?text=Halo midas cafetaria, saya ingin bertanya :)`,
    "_blank"
  );
};

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
        <span class="title-midas">PD. Sang Guru</span>
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
        <img
          class="midas-thaitea-navbar"
          src="@/assets/img/midas-thaitea.jpeg"
        />
      </RouterLink>
      <div style="display: flex; gap: 16px">
        <div class="service-navbar" v-on:click="goToSupportCenter()">
          <div class="material-icons opacity-6 me-2 text-md">support_agent</div>
          <span class="nav-text">Bantuan</span>
        </div>
        <RouterLink class="checkout-navbar" to="/pages/checkout-pages/checkout">
          <div class="nav-icon material-icons opacity-6 me-2 text-md">
            shopping_cart
          </div>
          <span class="nav-text"> Keranjang </span>
        </RouterLink>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.service-navbar {
  cursor: pointer;
}
.checkout-navbar,
.service-navbar {
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

.midas-thaitea-navbar {
  height: 40px;
  width: 40px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
}

.title-midas {
  font-family: "Poppins", sans-serif;
  margin-left: 10px;
}

.nav-text {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: gray;
}

.nav-icon {
  color: gray;
}

.shadow {
  box-shadow: none;
}
</style>
