<script setup>
import CountTo from "vue-count-to/src";

defineProps({
  label: {
    type: String,
  },
  count: {
    type: Number,
    required: true,
  },
  suffix: {
    type: String,
    default: "",
  },
  duration: {
    type: Number,
    default: 4000,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    validator(value) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
      ].includes(value);
    },
  },
  divider: {
    validator(value) {
      return ["vertical", "horizontal"].includes(value);
    },
  },
});
</script>
<template>
  <div class="text-center">
    <h1 v-if="count" :class="`text-gradient text-${color ?? 'success'}`">
      <CountTo :start-val="0" :end-val="count" :duration="duration" />{{
        suffix
      }}
    </h1>
    <h5
      v-if="label"
      :class="`text-gradient text-title text-${color ?? 'success'}`"
      style="font-size: 32px"
    >
      {{ label }}
    </h5>
    <h5 class="text-title mt-2">{{ title }}</h5>
    <p class="text-secondary text-sm font-weight-normal">
      {{ description }}
    </p>
  </div>
  <hr :class="`${divider ? divider : ''} dark`" />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
</style>
