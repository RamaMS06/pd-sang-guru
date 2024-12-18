<script setup>
import DefaultCounterCard from "../../../examples/cards/counterCards/DefaultCounterCard.vue";
</script>

<template>
  <section class="pt-3 pb-4" id="count-stats">
    <div class="container">
      <div class="row">
        <div class="col-lg-10 z-index-2 border-radius-xl mx-auto py-3">
          <div class="row">
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Seblak"
                description="Ceker, Sosis, Bakso, Otak-Otak Singapur, Komplit, Dumpling, & Korean Food"
                :count="7"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4 position-relative">
              <DefaultCounterCard
                color="success"
                title="Thai Tea"
                description="Stroberry Float, Manggo Float, Mocca Float, Yakult Melon"
                :count="21"
                suffix="+"
                :duration="3000"
                divider="vertical"
              />
            </div>
            <div class="col-md-4">
              <DefaultCounterCard
                color="success"
                title="Web Visitor"
                description="Midas cafetaria sudah dijumpai lebih dari 1,270 kali! "
                :count="1270"
                :duration="3000"
              />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
