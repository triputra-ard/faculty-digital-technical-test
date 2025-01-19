<template>
  <div class="px-[1rem] lg:px-[4rem] mt-[8rem]">
    <div class="swiper hero-carousel">
      <div class="swiper-wrapper">
        <template v-for="item in 2" :key="item">
          <div class="swiper-slide carousel-item">
            <img :src="`/images/slide-${item}.png`" alt="" srcset="" />
            <div class="carousel-caption col-6">
              <div class="hero-brand">
                <img
                  src="~/assets/icons/renue_logo_reverse.png"
                  alt="Hero brand images/logo"
                />
              </div>
              <h2 class="hero-title">Give. Thrift. Uplift</h2>
              <p class="hero-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                obcaecati animi, libero quae officiis nihil dolorem sunt
                repudiandae laboriosam magni sint porro ea repellendus vitae ab
                tempore distinctio similique nam.
              </p>
            </div>
            <div class="cursor-side on-right" @click="slideToRight"></div>
            <div class="cursor-side on-left" @click="slideToLeft"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  setup() {},
  data: () => ({
    swiper: null,
  }),
  methods: {
    initializeSwiper() {
      this.swiper = this.$createSwiper(".hero-carousel", {
        slidesPerView: 1,
        loop: true,
      });
    },
    slideToRight() {
      this.swiper.slidePrev();
    },
    slideToLeft() {
      this.swiper.slideNext();
    },
  },
  mounted() {
    this.initializeSwiper();
  },
});
</script>

<style lang="scss" src="./hero.scss"></style>
