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
              icon="touch_app"
              title="Cobain Thai Tea rasa baru!"
              description="Sensasi segar yang tak terlupakan."
            />

            <RotatingCardBack
              image="https://i.pinimg.com/736x/20/2d/6a/202d6aed6af25e2afec26baea4b4cff4.jpg"
              title="Beli Sekarang Dapet Promo!!!"
              description="Promo sampai 10%, hanya berlaku hari ini."
              :action="[
                {
                  route: 'https://wa.me/+6285174452316?text=Your%20message%20here',
                  label: 'Pesan via whatsapp',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Full Documentation"
              description="Built by developers for developers. Check the foundation and
                  you will find everything inside our documentation."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Bootstrap 5 Ready"
              description="The world’s most popular front-end open source toolkit,
                  featuring Sass variables and mixins."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Save Time & Money"
              description="Creating your design from scratch with dedicated designers can
                be very expensive. Start with our Design System."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Fully Responsive"
              description="Regardless of the screen size, the website content will
                  naturally fit the given resolution."
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
