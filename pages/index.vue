<template>
  <section>
    <landing-hero></landing-hero>
    <landing-counter></landing-counter>
    <landing-parallax-pillar></landing-parallax-pillar>
    <landing-values></landing-values>
    <landing-contact-us></landing-contact-us>
  </section>
</template>

<script setup lang="ts">
const message = ref("Hello World");
const list = ref([
  {
    name: "Nuxt JS",
  },
  {
    name: "Shadcdn",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Lucide Icon",
  },
  {
    name: "Pinia",
  },
]);
function clickMe() {
  alert("Your'e amazing");
}
onMounted(async () => {});
</script>
