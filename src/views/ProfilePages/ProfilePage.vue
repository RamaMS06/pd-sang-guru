<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultCounterCard from "../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0 mb-6">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>

    <div v-motion-slide-top>
      <img class="image-profile" src="/pemilik-sapi.jpeg" />
      <div class="row justify-content-center my-6">
        <div class="profile-name col-md-4 position-relative">
          <DefaultCounterCard
            label="H. Ambri"
            color="success"
            title="Pemilik Sapi"
            divider="vertical"
          />
        </div>
        <div class="profile-year col-md-4">
          <DefaultCounterCard
            label="2015"
            color="success"
            title="Tahun Berdiri"
          />
        </div>
      </div>
    </div>

    <div class="grid-profile text-title text-dark">
      <div class="grid-profile__item">
        <span class="grid-profile__item--title text-dark">#Visi </span>
        <span class="grid-profile__item--desc mt-1" style="font-size: 15px">
          "Menjadi penjual hewan qurban terpercaya dan unggul dalam kualitas,
          pelayanan, dan kejujuran, sehingga membantu masyarakat menjalankan
          ibadah qurban dengan mudah dan bermakna."
        </span>
      </div>

      <div class="grid-profile__item">
        <span class="grid-profile__item--title text-dark">#Misi </span>
        <span class="grid-profile__item--desc mt-1">
          <div
            style="
              display: flex;
              flex-direction: column;
              gap: 8px;
              font-size: 15px;
            "
          >
            <span
              v-for="(data, index) in [
                'Menyediakan hewan qurban yang sehat, berkualitas, dan sesuai syariat Islam',
                'Memberikan pelayanan ramah, profesional, dan transparan',
                'Membangun kepercayaan pelanggan melalui komunikasi yang efektif',
                'Mengembangkan kerjasama dengan peternak lokal untuk meningkatkan kualitas hewan',
                'Meningkatkan kesadaran masyarakat tentang pentingnya qurban',
              ]"
              :key="index"
            >
              <span class="text-success" style="font-weight: 700">
                {{ index + 1 }}.
              </span>
              {{ data }}
            </span>
          </div>
        </span>
      </div>

      <div class="grid-profile__item">
        <span class="grid-profile__item--title text-dark">#Nilai-Nilai </span>
        <span class="grid-profile__item--desc mt-1">
          <div style="display: flex; flex-direction: column">
            <span
              v-for="(data, index) in [
                'Integritas dan kejujuran',
                'Kualitas dan profesionalisme',
                'Kepercayaan dan transparansi',
                'Kepedulian sosial dan kebersamaan',
              ]"
              :key="index"
            >
              <span class="text-success" style="font-weight: 700">
                {{ index + 1 }}.
              </span>
              {{ data }}
            </span>
          </div>
        </span>
      </div>

      <div class="grid-profile__item">
        <span class="grid-profile__item--title text-dark">#Tagline </span>
        <span class="grid-profile__item--desc mt-1">
          Hewan qurban berkualitas, ibadah yang bermakna
        </span>
      </div>
    </div>

    <div v-motion-slide-bottom>
      <img class="image-profile" src="/penjaga.jpeg" />

      <div class="row justify-content-center my-6">
        <div class="profile-name col-md-4 position-relative">
          <DefaultCounterCard
            label="Ade Depi R.A"
            color="success"
            title="Penjaga Kandang"
            divider="vertical"
          />
        </div>
        <div class="profile-year col-md-4">
          <DefaultCounterCard
            label="085780878176"
            color="success"
            title="No Handphone"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.image-profile {
  margin-top: 6rem;
  height: 280px;
  width: 280px;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
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
