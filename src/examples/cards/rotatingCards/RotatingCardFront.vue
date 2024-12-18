<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div>
    <img class="midas-seblak" src="@/assets/img/midas-seblak.jpeg"/>
  </div>
</template>

<style lang="scss">
.midas-seblak{
  object-fit: cover;
  height: 100%;
  width: 100%;
  border-radius: 10px;
}
</style>
