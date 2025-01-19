<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";

const testimonies = [
  {
    name: "dewa prasetya",
    rating: 5,
    desc: "Sapi nya bagus bagus...ga diragukan pokoknya kalo buat kurban",
    ulasan: 3,
    tahun: "5 Bulan",
  },
  {
    name: "Darno Aja 2003",
    rating: 4,
    desc: "Lokasi mudah ditemui.lokasi kandang sapi nya bagus,bersih,pak haji ny juga ramah",
    ulasan: 4,
    tahun: "2 Tahun",
  },
  {
    name: "Muhammad Kiki afrizal",
    rating: 5,
    desc: "Sangat cocok untuk berbelanja hewan kurban",
    ulasan: 8,
    tahun: "2 Tahun",
  },
  {
    name: "Ananda Nabiel",
    rating: 5,
    desc: "tempat yg cocok buat beli sapi",
    ulasan: 69,
    tahun: "4 Tahun",
  },
  {
    name: "kasyfil aziz",
    rating: 5,
    desc: "Menjual sapi langsung di kandangnya mantul",
    ulasan: 41,
    tahun: "5 Tahun",
  },
  {
    name: "Ahmad Daroji",
    rating: 5,
    desc: "Sangat baik",
    ulasan: 3,
    tahun: "10 Bulan",
  },
  {
    name: "syamil mudzaka",
    rating: 4,
    desc: "Musholanya pas bagi yg sdg safar.",
    ulasan: 20,
    tahun: "5 Tahun",
  },
  {
    name: "Sliteracy54",
    rating: 5,
    desc: "Lingkungan sangat bersih dan nyaman",
    ulasan: 59,
    tahun: "5 Tahun",
  },
  {
    name: "paryo apriadi",
    rating: 5,
    desc: "Bagus dan ramah",
    ulasan: 59,
    tahun: "5 Tahun",
  },
];
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0 mb-6">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>

    <div
      class="mt-8 mx-2 mb-3 text-title"
      style="display: flex; flex-direction: column"
    >
      <span style="color: black; font-size: 24px; font-weight: 600">
        Testimoni & Rating Google Review
      </span>
      <span>
        Testimoni pengunjung dan pelanggan PD. Sang Guru
        <a
          href="https://www.google.com/search?q=pd+sang+guru&oq=pd+sang+guru&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQIxgnMgoIAhAAGAoYFhgeMgoIAxAAGIAEGKIEMgoIBBAAGIAEGKIEMgYIBRBFGD0yBggGEEUYPDIGCAcQRRg90gEIMjU1N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x2e69f9bd049c3bab:0xd5fa6ce1c0650ca5,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          style="text-decoration: underline"
        >
          (Ulasan Google)
        </a>
      </span>
    </div>

    <div class="testimoni text-title">
      <div
        class="testimoni__item"
        v-for="(testinmoni, id) in testimonies"
        :key="id"
        v-motion-slide-top
      >
        <div class="testimoni__item__header">
          <div class="testimoni__item__header--avatar">
            {{ testinmoni.name.charAt(0).toUpperCase() }}
          </div>

          <div style="display: flex; flex-direction: column">
            <span style="font-size: 14px; color: white">
              {{ testinmoni.name }}
            </span>
            <span style="font-size: 12px; color: white">
              {{ testinmoni.ulasan }} Ulasan
            </span>
          </div>
        </div>
        <div class="testimoni__item__rating my-2">
          <span
            v-for="star in 5"
            :key="star"
            class="star"
            :style="{
              color: star <= testinmoni.rating ? '#fdd835' : 'white',
            }"
          >
            ★
          </span>
          <span style="color: white; font-size: 12px; margin-left: 10px">
            {{ testinmoni.tahun }} Lalu</span
          >
        </div>
        <span style="color: white; font-size: 14px">
          {{ testinmoni.desc }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.title-tip {
  font-weight: 600;
  font-size: 22px;
}

.image-tip {
  height: 25%;
  width: 45%;
  border-radius: 16px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out forwards;
}

.profile-name,
.profile-year {
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.grid-profile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;

    &--title {
      font-weight: 600;
      font-size: 24px;

      animation: slideInFromLeft 0.5s ease-in-out forwards;
    }
  }

  &--desc {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    animation: slideInFromLeft 1.5s ease-in-out forwards;
  }

  @keyframes slideInFromLeft {
    from {
      transform: translateX(-10%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
