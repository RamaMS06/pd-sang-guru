<script setup>
import { onMounted, reactive, ref } from "vue";
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import { RouterLink } from "vue-router";
import AddressModal from "../Presentation/Components/AddressModal.vue";
import PaymentModal from "../Presentation/Components/PaymentModal.vue";

let products = reactive(JSON.parse(localStorage.getItem("products"))) || [];

let summaries = reactive([
  {
    label: "Subtotal",
    value: 0,
  },
  {
    label: "Ongkos Kirim",
    value: 0,
  },
  {
    label: "Total (ongkir dll)",
    value: 0,
  },
]);

let name = ref("");

let phone = ref("");

let address = ref("");

let addressMidas = ref("");

let isPickup = ref(false);

let isPay = ref(false);

let showModalAddress = ref(false);

let showModalPayment = ref(false);

let uploadedFile = ref(null);

const itemsAddress = [
  {
    id: 1,
    name: "Midas Thaitea (Rika)",
    phone: "+6281374019998",
    desc: "Simpang Metur, Jalan Prabumulih-Baturaja, Lubai Ulu (Samping Indomaret) LUBAI ULU, KAB.MUARA ENIM, SUMATERA SELATAN ID 31173",
  },
  {
    id: 2,
    name: "Ruko MIDAS thaitea",
    phone: "+6281379927964",
    desc: "MIDAS THAITEA .Jalan Putri Candi, Peninjauan Sumsel, Baturaja Timur BATURAJA TIMUR, KAB. OGAN KOMERING ULU, SUMATERA SELATAN, ID 32111",
  },
];

const handleSelectAddress = (item) => {
  addressMidas.value = item.desc;
  showModalAddress.value = false;
  goToWhatsapp(item.phone, item);
};

const handleSubmitPayment = (file) => {
  uploadedFile.value = file ? URL.createObjectURL(file) : null;
  goToWhatsapp();
};

const handlePickup = () => {
  if (isPickup.value) {
    address.value = "";
  }
};

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  minimumFractionDigits: 0, // Removes decimals
});

const removeProduct = (index) => {
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
};

const increaseQuantity = (index) => {
  const product = products[index];
  let totalPrice = 0;
  product.quantity = product.quantity + 1;
  totalPrice = product.quantity * product.price;
  product.totalPrice = totalPrice;
  localStorage.setItem("products", JSON.stringify(products));

  summaries[0].value = products.reduce((sum, item) => sum + item.totalPrice, 0);
};

const decreaseQuantity = (index) => {
  const quantity = products[index].quantity;
  let totalPrice = 0;

  if (quantity > 1) {
    const product = products[index];
    product.quantity = product.quantity - 1;
    totalPrice = product.quantity * product.price;
    product.totalPrice = totalPrice;
  } else {
    products.splice(index, 1);
  }

  localStorage.setItem("products", JSON.stringify(products));

  summaries[0].value = Math.abs(
    products.reduce((sum, item) => sum - item.totalPrice, 0)
  );
};

const submitCart = () => {
  if (isPickup.value) {
    showModalAddress.value = true;
  } else if (isPay.value) {
    showModalPayment.value = true;
  } else {
    goToWhatsapp();
  }
};

const goToWhatsapp = (midasPhone = "+6285174452316", cabang) => {
  const listMakananMinuman = products
    .map(
      (item, index) =>
        `${index + 1}. *${item.title}* - *Jumlah*: ${item.quantity}`
    )
    .join("\n");

  const pickup = isPickup.value
    ? `Pesanan diambil pada cabang:\n` +
      `*Nama Cabang*: ${cabang.name}\n` +
      `*Alamat Cabang*: ${cabang.desc}\n`
    : "";

  const newAddress = isPickup.value ? `` : `*Alamat*: ${address.value}\n\n`;

  const buktiTransfer = uploadedFile.value
    ? `Bukti Transfer:\n` + uploadedFile.value
    : "";

  const message =
    `Halo Midas Cafe, saya ingin memesan makanan atau minuman.\n` +
    `Berikut detail pesanan saya:\n\n` +
    `*Nama*: ${name.value}\n` +
    `*No. HP*: ${phone.value}\n` +
    newAddress +
    `\n*Pesanan*:\n` +
    listMakananMinuman +
    `\n\n` +
    pickup +
    `*Total Harga*: ${formatter.format(
      summaries[0].value + summaries[1].value
    )}\n\n` +
    `Tolong untuk konfirmasi pesanannya, Terima Kasih! \n\n` +
    buktiTransfer;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${midasPhone}?text=${encodedMessage}`);
};
onMounted(() => {
  products.forEach((item) => {
    item.totalPrice =
      item.totalPrice === undefined ? item.price : item.totalPrice;
    summaries[0].value += item.totalPrice;
  });
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
  <div class="empty-cart" v-if="products.length === 0">
    <img class="empty-cart--img mt-8" src="@/assets/img/empty-cart.png" />
    <span class="empty-cart--label">Keranjang kamu kosongg 😭</span>
    <RouterLink to="/">
      <span style="text-decoration: underline">Pesan seblak yuk</span>
    </RouterLink>
  </div>
  <div class="cart container position-sticky mt-8" v-if="products.length > 0">
    <div class="content__cart">
      <span class="content__cart--title">Keranjang Saya</span>
      <span class="content__cart--desc"
        >Kamu memiliki produk sebanyak {{ products.length }} dikeranjang</span
      >
      <div class="mt-3">
        <div
          class="cart__item"
          v-for="(product, index) in products"
          v-bind:key="index"
          :style="index != 0 ? 'margin-top: 18px' : ''"
        >
          <div class="cart__item__left">
            <img class="cart__item--img" :src="product.image" />
            <div class="cart__item__left__label">
              <span class="cart__item__left__label--title">{{
                product.title
              }}</span>
              <span class="cart__item__left__label--subtitle">{{
                product.subtitle
              }}</span>
            </div>
          </div>

          <div class="cart__item__right">
            <div class="cart__item__right__counter">
              <span
                class="cart__item__right__counter--decrease"
                v-on:click="decreaseQuantity(index)"
                >-</span
              >
              <div class="cart__item__right__counter--quantity mx-3">
                {{ product.quantity }}
              </div>
              <span
                class="cart__item__right__counter--increase"
                v-on:click="increaseQuantity(index)"
              >
                +
              </span>
            </div>
            <span class="cart__item__right--price">
              {{
                formatter.format(
                  product.totalPrice !== undefined
                    ? product.totalPrice
                    : product.price
                )
              }}
            </span>
            <img
              class="cart__item__right--delete"
              src="@/assets/img/ic-delete.svg"
              vo
              v-on:click="removeProduct(index)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="payment__cart">
      <span class="payment__cart--title">Detail Belanja</span>
      <div>
        <form @submit.prevent="submitCart">
          <div class="mt-2">
            <span style="font-size: 12px"
              >Nama Panjang <span style="color: red">*</span></span
            >
            <input
              type="text"
              id="name"
              class="input-data"
              autocomplete="off"
              v-model="name"
              required
            />
          </div>
          <div class="mt-2">
            <span style="font-size: 12px"
              >No HP <span style="color: red">*</span></span
            >
            <input
              type="tel"
              id="phone"
              autocomplete="off"
              class="input-data"
              v-model="phone"
              required
            />
          </div>
          <div class="mt-2">
            <span style="font-size: 12px">Alamat</span>
            <input
              type="text"
              id="address"
              :class="`${!isPickup ? 'input-data' : 'input-data disabled'}`"
              autocomplete="off"
              v-model="address"
              :disabled="isPickup"
              v-on:change="handlePickup"
            />
          </div>
          <div class="input-checkbox mt-2">
            <label style="display: flex; margin-left: 0px">
              <input
                class="cart-checkbox"
                type="checkbox"
                id="checkbox"
                v-model="isPickup"
                v-on:change="handlePickup"
              />
              <span class="custom-checkbox"></span>
              <span class="checkbox-label">Ambil di tempat</span>
            </label>
          </div>

          <div class="input-checkbox">
            <label style="display: flex; margin-left: 0px">
              <input
                class="cart-checkbox"
                type="checkbox"
                id="checkbox-payment"
                v-model="isPay"
              />
              <span class="custom-checkbox"></span>
              <span class="checkbox-label">Bayar sekarang</span>
            </label>
          </div>

          <AddressModal
            :is-open="showModalAddress"
            :items="itemsAddress"
            @close="showModalAddress = false"
            @select="handleSelectAddress"
          />
          <PaymentModal
            :is-open="showModalPayment"
            @close="showModalPayment = false"
            @submit="handleSubmitPayment"
          />

          <div class="payment__cart__summary">
            <hr
              style="
                width: 100%;
                background-color: white;
                height: 1px;
                margin-bottom: 18px;
              "
            />
            <div
              class="payment__cart__summary__info mt-2"
              v-for="(summary, index) in summaries"
              v-bind:key="index"
            >
              <span class="payment__cart__summary__info--label">
                {{ summary.label }}</span
              >
              <span class="payment__cart__summary__info--value">
                {{
                  index == 2
                    ? formatter.format(summaries[0].value + summaries[1].value)
                    : formatter.format(summary.value)
                }}
              </span>
            </div>
            <button class="button-checkout" type="submit" style="color: white">
              <span class="button-checkout--total">
                {{ formatter.format(summaries[0].value + summaries[1].value) }}
              </span>
              <span class="button-checkout--detail"> Pesan Sekarang </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.cart {
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.content__cart {
  width: 100%;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;

  &--title {
    font-weight: 600;
    font-size: 20px;
    color: black;
  }

  &--desc {
    font-size: 14px;
  }
}

.payment__cart {
  width: 65%;
  background-color: #5c6bc0;
  height: 40rem;
  border-radius: 20px;
  padding: 34px;
  color: white;
  font-family: "Poppins", sans-serif;
  box-shadow: 0px 4px 6px #5c6bc0;
  position: relative;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 100%;
  }

  &--title {
    font-weight: 600;
    font-size: 20px;
  }

  &__summary {
    position: absolute;
    bottom: 34px;
    left: 34px;
    right: 34px;

    &__info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &--label {
        font-weight: 600;
        font-size: 14px;
      }
    }
  }
}

.cart__item {
  font-family: "Poppins", sans-serif;
  padding: 14px;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &--img {
    object-fit: cover;
    height: 80px;
    width: 80px;
    border-radius: 10px;
  }

  &__left {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 14px;

    &__label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4px;

      &--title {
        color: black;
        font-weight: 600;
        font-size: 14px;
      }

      &--subtitle {
        font-size: 11px;
        text-overflow: ellipsis;
      }
    }
  }

  &__right {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    &--price {
      font-size: 18px;
      font-weight: 600;
      color: black;
    }

    &--delete {
      height: 24px;
      width: 24px;

      &:hover {
        cursor: pointer;
      }
    }

    &__counter {
      color: black;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: 20px;

      @media (max-width: 768px) {
        margin-right: 0px;
      }

      &--quantity {
        font-size: 16px;
        padding: 0px 10px;
        border-radius: 5px;
        border: 0.5px solid gray;
      }

      &--increase,
      &--decrease {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
        font-size: 24px;

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}

.input-data {
  margin-top: 6px;
  width: 100%;
  font-size: 12px;
  height: 45px;
  padding: 14px;
  border-radius: 8px;
  background-color: #7986cb;
  border: none;
  color: white;
  font-weight: 500;

  &.disabled {
    background-color: #c5cae9;
  }
}

.input-checkbox {
  display: flex;
  align-items: center;
  align-self: center;
  cursor: pointer;
}

.cart-checkbox {
  cursor: pointer;
}

.checkbox-label {
  color: white;
  font-size: 12px;
  align-self: center;
  margin-left: 8px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  cursor: pointer;
}

.button-checkout {
  width: 100%;
  margin-top: 24px;
  height: 60px;
  border-radius: 15px;
  border: none;
  background-color: #4caf50;
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  font-family: "Poppins", sans-serif;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: translateY(-2.5px);
    box-shadow: 0 4px 6px 0 rgba(255, 255, 255, 0.4);
  }

  &--total {
    font-weight: 700;
    font-size: 18px;
  }

  &--detail {
    font-size: 14px;
  }
}

.empty-cart {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;

  &--img {
    width: 200px;
  }

  &--label {
    font-size: 24px;
    color: black;
  }
}

.file-input {
  display: none; /* Hidden file input */
}

.upload-text {
  font-size: 12px;
  font-weight: bold;
}
</style>
