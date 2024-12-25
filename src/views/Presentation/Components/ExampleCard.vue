<script setup>
import { onMounted } from "vue";

// tooltip
import setTooltip from "@/assets/js/tooltip";
import { useRouter } from "vue-router";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();
const router = useRouter();

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  route: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  price: {
    type: Number,
    default: 0,
  },
  subtitle: {
    type: String,
    default: "",
  },
  pro: {
    type: Boolean,
    default: false,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Removes decimals
});

const openCart = async () => {
  if (!localStorage.getItem("products")) {
    localStorage.setItem(
      "products",
      JSON.stringify([
        {
          id: props.id,
          title: props.title,
          subtitle: props.subtitle,
          price: props.price,
          image: props.image,
          quantity: props.quantity,
        },
      ])
    );
  } else {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    const existingItem = products.find((item) => item.title === props.title);
    const index = products.indexOf(existingItem);

    if (existingItem) {
      if (index !== -1) {
        products[index].quantity = products[index].quantity + 1;
        products[index].totalPrice =
          products[index].price * products[index].quantity;
      }
    } else {
      products.push({
        title: props.title,
        subtitle: props.subtitle,
        price: props.price,
        image: props.image,
        quantity: props.quantity,
      });
    }
    localStorage.setItem("products", JSON.stringify(products));
  }
  await router.push("/pages/checkout-pages/checkout");
};

onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<script>
export default {
  inheritAttrs: false,
};
</script>
<template>
  <div
    class="card move-on-hover"
    v-bind="$attrs"
    :data-bs-toggle="pro ? 'tooltip' : null"
    :data-bs-placement="pro ? 'top' : null"
    :title="pro ? 'Pro Element' : null"
  >
    <img
      class="card-menu"
      :class="pro && 'opacity-6'"
      :src="props.image"
      :alt="title"
      loading="lazy"
    />
  </div>
  <div class="mt-2 ms-2">
    <h6 class="text-title mb-0">{{ props.title }}</h6>
    <p class="text-secondary text-sm font-weight-normal text-info">
      {{ formatter.format(price) }}
    </p>
  </div>

  <div class="buttons-footer">
    <button
      type="button"
      class="btn btn-light btn-card-example"
      style="width: 100%"
      :onclick="openCart"
    >
      <div class="material-icons opacity-6 me-2 text-md">shopping_cart</div>
      <span class="btn-label">Masukkan Keranjang</span>
    </button>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.text-secondary,
.text-title {
  font-family: "Poppins", "sans-serif";
}

.btn-label {
  font-family: "Poppins", sans-serif;
  text-transform: none;
  font-size: 12px;
  font-weight: 500;
}
.card {
  &.move-on-hover {
    height: 200px;
  }
}

.card-menu {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.buttons-footer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
</style>
