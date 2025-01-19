<script setup>
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0 mb-6">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>

    <div
      style="
        margin-top: 8rem;
        display: block;
        text-align: center;
        display: flex;
        flex-direction: column;
        font-weight: 600;
      "
    >
      <span
        v-motion-pop-visible
        class="text-dark text-title"
        style="font-size: 25px"
        >Kandang & Pakan</span
      >
      <span
        class="pakan-desc text-title mt-2"
        style="font-weight: 500; font-size: 14px"
      >
        Kami bangga mempersembahkan hewan qurban berkualitas tinggi yang
        dibesarkan dalam lingkungan yang bersih dan terawat.<br />
        Di peternakan kami, kebersihan adalah prioritas utama!
      </span>
      <img
        class="image-tip mt-4"
        src="https://static.republika.co.id/uploads/images/inpicture_slide/pekerja-memberi-pakan-sapi-di-tempat-penggemukan-sapi-di_220620162111-908.jpg"
        loading="eager"
      />
    </div>
    <div class="mt-6 text-title">
      <span class="text-success title-pakan">#Kandang</span>
      <div>
        <span class="text-dark mb-2" style="font-size: 15px">
          Setiap kandang dirawat dengan baik, dibersihkan secara rutin, dan
          dilengkapi dengan ventilasi yang baik untuk memastikan kenyamanan
          hewan qurban.
        </span>
      </div>
      <div class="kandang-wrapper mt-4">
        <div>
          <span class="text-info" style="font-weight: 600">Kandang Sapi</span>
          <img
            v-motion-fade-visible-once
            class="img-kandang mt-3"
            src="/kandang1.jpeg"
          />
        </div>
        <div>
          <span class="text-info" style="font-weight: 600"
            >Kandang Kambing</span
          >
          <img
            v-motion-fade-visible-once
            class="img-kandang mt-3"
            src="/kandang2.jpeg"
          />
        </div>
      </div>
    </div>

    <div class="mt-7 text-title">
      <span class="text-success title-pakan">#Pakan</span>
      <div>
        <span class="text-dark mb-2" style="font-size: 15px">
          Hewan qurban yang sehat berasal dari lingkungan yang bersih. Kami
          memastikan bahwa setiap sapi mendapatkan perawatan terbaik dan makanan
          bergizi.
        </span>
      </div>
      <div class="kandang-wrapper mt-4">
        <div>
          <div style="display: flex; flex-direction: column">
            <span class="text-info" style="font-weight: 600">Ampas Tahu</span>
            <span class="mt-2" style="font-size: 14px">
              Ampas tahu memiliki kandungan protein yang tinggi sehingga dapat
              menjadi sumber protein yang baik bagi sapi</span
            >
          </div>
          <img
            v-motion-fade-visible-once
            class="img-pakan mt-3"
            src="https://image-asset.parto.id/i/jX/f48fbeb6e340321bc326a994eaa8a6b6.jpg"
          />
        </div>
        <div>
          <div style="display: flex; flex-direction: column">
            <span class="text-info" style="font-weight: 600">Jerami</span>
            <span class="mt-2" style="font-size: 14px"
              >Jerami padi mengandung nutrisi seperti protein kasar, serat
              kasar, lemak kasar, dan ekstrak tanpa nitrogen, yang bermanfaat
              sebagai pakan ternak.</span
            >
          </div>

          <img
            v-motion-fade-visible-once
            class="img-pakan mt-3"
            src="https://ekafarma.com/wp-content/uploads/2023/07/pakan-jerami.png"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.title-pakan {
  font-weight: 600;
  font-size: 22px;
}

.kandang-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.pakan-desc {
}

.img-kandang {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
  object-fit: cover;
}

.img-pakan {
  width: 100%;
  height: 75%;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 2px solid #ddd;
  object-fit: cover;
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
