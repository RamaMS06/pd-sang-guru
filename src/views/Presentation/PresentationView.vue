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
    <div class="page-header min-vh-95" loading="lazy">
      <div class="bg-image"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative" v-motion-pop-visible-once>
            <h1
              class="text-white pt-3 mt-n5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              PD. Sang Guru
            </h1>
            <p class="lead text-white px-5 mt-3"></p>
            <p
              class="lead text-white mt-3 text-title"
              :style="{ fontWeight: '400' }"
            >
              Menyediakan Hewan Kurban Berkualitas<br />Harga Bersahabat
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <PresentationCounter />
    <PresentationExample :data="data" />
    <PresentationTestimonials />
  </div>
</template>

<style lang="scss">
.bg-image {
  background-image: url("https://asset.kompas.com/crops/uvVS5wU9lygJ0Mj9rxtBUWKjGvA=/0x105:1280x958/1200x800/data/photo/2020/07/09/5f074539ca770.jpeg");
  filter: blur(1.5px) brightness(50%);
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 700px) {
    background-position: center;
  }
}
</style>
