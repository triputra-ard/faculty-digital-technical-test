<template>
  <div class="px-[0] lg:px-[4rem] mt-[0] lg:mt-[6rem]">
    <div class="swiper hero-carousel">
      <div class="swiper-wrapper">
        <template
          v-for="(hero, heroIndex) in webContent.getHeroList"
          :key="heroIndex"
        >
          <div class="swiper-slide carousel-item">
            <img
              class="carousel-image"
              :src="hero.image"
              :alt="`Hero images ${hero.title}`"
              srcset=""
            />
            <div class="carousel-caption col-10 col-lg-7">
              <template v-if="hero.brand">
                <div class="hero-brand">
                  <img :src="hero.brand" alt="Hero brand images/logo" />
                </div>
              </template>

              <h2 class="hero-title">{{ hero.title }}</h2>
              <template v-if="hero.subtitle">
                <p class="hero-description">
                  {{ hero.subtitle }}
                </p>
              </template>
              <div class="grid">
                <button
                  class="btn btn-lg cta-button-white !rounded-[4rem]"
                  role="button"
                >
                  <span class="font-medium text-lg"> {{ hero.ctaText }}</span>
                </button>
              </div>
            </div>
            <div class="cursor-side on-right" @click="slideToRight"></div>
            <div class="cursor-side on-left" @click="slideToLeft"></div>
          </div>
        </template>
        <div class="hero-progress-pagination">
          <template
            :key="progressIndex"
            v-for="(progress, progressIndex) in webContent.getHeroList"
          >
            <progress
              :class="`progress-slide-${progressIndex}`"
              :value="progressValues[progressIndex]"
              max="100"
              @click="switchToSlide(progressIndex)"
            ></progress>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Autoplay } from "swiper/modules";

export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return {
      webContent,
    };
  },
  data: () => ({
    swiper: null,
    progressValues: [], // Store progress for each slide
  }),
  methods: {
    initializeSwiper() {
      this.progressValues = Array(this.webContent.getHeroList.length).fill(0);
      this.swiper = this.$createSwiper(".hero-carousel", {
        modules: [Autoplay],
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        on: {
          autoplayTimeLeft: (s, time, progress) => {
            const activeIndex = s.realIndex;
            // Reverse progress so it increases from 0 to 100
            const reversedProgress = (1 - progress) * 100;

            // Update only the active slide's progress
            this.progressValues = this.progressValues.map((_, index) =>
              index === activeIndex ? Math.floor(reversedProgress) : 0
            );
          },
          slideChange: (s) => {
            // Reset progress values for inactive slides
            const activeIndex = s.realIndex;
            this.progressValues = this.progressValues.map((_, index) =>
              index === activeIndex ? 0 : 0
            );
          },
        },
      });
    },
    slideToRight() {
      this.swiper.slidePrev();
    },
    slideToLeft() {
      this.swiper.slideNext();
    },
    switchToSlide(index) {
      this.swiper.slideToLoop(index);
    },
  },
  mounted() {
    this.initializeSwiper();
  },
});
</script>

<style lang="scss" src="./hero.scss"></style>
