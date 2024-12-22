<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

defineProps({
  data: {
    type: Array,
    required: true,
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
      image: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
    },
  },
  col1: {
    type: String,
    default: "col-lg-3",
  },
  col2: {
    type: String,
    default: "col-lg-9",
  },
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <section class="my-5 py-5">
    <div class="container">
      <div class="row">
        <div class="row justify-content-center text-center my-sm-5">
          <div class="col-lg-6">
            <MaterialBadge color="success" class="mb-3"
              >Menu Midas Cafetaria</MaterialBadge
            >
            <h2 class="text-dark mb-0">Banyak Pilihan Menu Untuk Kalian</h2>
            <p class="lead text-title" style="font-size: 18px">
              Kalian bisa pilih menu dibawah
            </p>
          </div>
        </div>
      </div>
    </div>
    <img class="bg-seblak" src="@/assets/img/bg-seblak.png" />
    <div class="container mt-sm-8 mt-3">
      <div
        v-for="{ heading, description, items } in data"
        :class="`row`"
        :key="heading"
      >
        <div :class="`${col1 ?? 'col-lg-3'}`">
          <div
            class="position-sticky pb-lg-5 pb-3 mt-lg-0 mt-5 ps-2"
            style="top: 100px"
          >
            <h3>{{ heading }}</h3>
            <h6 class="text-secondary font-weight-normal pe-3">
              {{ description }}
            </h6>
          </div>
        </div>
        <div :class="`${col2 ?? 'col-lg-9'}`">
          <div :class="`row `">
            <div
              class="col-md-4 mt-md-0"
              v-for="{ id, image, title, subtitle, route, price, pro } in items"
              :key="title"
            >
              <ExampleCard
                class="min-height-160 shadow-lg mt-4"
                :id="id"
                :image="image"
                :title="title"
                :subtitle="subtitle"
                :route="route"
                :price="price"
                :pro="pro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.text-secondary {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
}

.bg-seblak {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    width: 85%;
  }
}
</style>
