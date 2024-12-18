<script setup>
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/7cfb79f22186cc268533023e8dd80b76/Derivates/332ef194335299044ce59aeff0d600482d22b916.jpg"
              icon="touch_app" title="Cobain Thai Tea rasa baru!" description="Sensasi segar yang tak terlupakan." />

            <RotatingCardBack image="https://i.pinimg.com/736x/20/2d/6a/202d6aed6af25e2afec26baea4b4cff4.jpg"
              title="Ayo Beli Sekarang!!!" description="Jangan sampai kehabisan :)" :action="[
                {
                  route:
                    'https://wa.me/+6285174452316?text=Your%20message%20here',
                  label: 'Pesan via whatsapp',
                },
              ]" />
          </RotatingCard>
        </div>
        <div class="home-content content-right-info col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard icon="payments" title="Harga Bersahabat"
              description="Cocok untuk mahasiswa, pekerja, hingga keluarga" />
            <DefaultInfoCard icon="thumb_up" title="Rasa Dijamin Enak"
              description="Setiap sajian kami dibuat dengan resep spesial yang menggugah selera" />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard class="mt-3" icon="sentiment_very_satisfied" title="Porsi Pas & Puas"
              description="Nikmati hidangan yang memuaskan tanpa khawatir kantong bolong" />
            <DefaultInfoCard class="mt-3" icon="dinner_dining" title="Pilihan Menu Beragam"
              description="Mulai dari makanan berat, camilan, hingga minuman kekinian" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@media (max-width: 768px) {

  .home-content.content-right-info.col-lg-6.ms-auto {
    margin-top: 60px;
  }
}
</style>
