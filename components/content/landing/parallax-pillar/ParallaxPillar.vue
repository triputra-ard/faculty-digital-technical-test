<template>
  <div class="bg-[var(--primary-blue)] py-[5rem] lg:py-[10rem] lg:px-[5rem]">
    <template
      v-for="(parallax, parallaxIndex) in webContent.getParallaxList"
      :key="parallaxIndex"
    >
      <div class="flex flex-row flex-wrap parallax my-[5rem] lg:my[1.5rem]">
        <div
          class="col-12 col-lg-6 !order-[2] lg:!order-[1] lg:py-[10rem] lg:px-[5rem] parallax-content mt-[2rem]"
        >
          <h5
            class="text-sm font-semibold text-[var(--secondary-blue)] text-center lg:text-justify"
          >
            Re:Nue pillars
          </h5>
          <h2
            class="text-6xl text-white font-bold mb-[1rem] text-center lg:text-justify"
          >
            {{ parallax.title }}
          </h2>
          <p class="text-center lg:text-left mb-[1.5rem]">
            {{ parallax.description }}
          </p>
          <div class="col-6 col-lg-6 grid mx-auto lg:mx-0">
            <button
              role="button"
              class="btn btn-lg cta-button-white !rounded-3xl"
            >
              <span class="text-[1rem] font-semibold">{{
                parallax.ctaText
              }}</span>
            </button>
          </div>
        </div>
        <div
          class="col-12 col-lg-6 !order-[1] lg:!order-[2] parallax-image-container"
        >
          <img
            class="h-[30rem] !rounded-[2rem] parallax-image mx-[1rem] lg:mx-0"
            :src="parallax.image"
            :alt="`Image of ${parallax.title}`"
          />
        </div>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return { webContent };
  },
  computed: {},
  mounted() {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".parallax").forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "50% center",
        end: "bottom center",
        // marker: true,
        onEnter: () => section.classList.add("active"),
        onLeave: () => section.classList.remove("active"),
        onEnterBack: () => section.classList.add("active"),
        onLeaveBack: () => section.classList.remove("active"),
      });
    });
  },
});
</script>
<style lang="scss" src="./ParralaxPillar.scss"></style>
