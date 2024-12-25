<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import Header from "../../examples/Header.vue";

// sections
import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-75" loading="lazy">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Midas Cafetaria
            </h1>
            <p class="lead text-white px-5 mt-3"></p>
            <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '400' }">
              Selamat datang di Midas, tempat di mana makanan lezat bertemu
              dengan harga ramah kantong!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationInformation />
    <PresentationExample :data="data" />

    <PresentationTestimonials />
  </div>
</template>

<style lang="scss">
.page-header {
  background-image: url(https://i.pinimg.com/736x/24/95/4f/24954f423636bca644a55047261f30b5.jpg);
}
</style>
