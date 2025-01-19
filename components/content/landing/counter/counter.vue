<template>
  <div class="my-[5rem]">
    <div class="container">
      <div class="flex flex-wrap flex-row">
        <div
          class="col-6 col-lg-3"
          v-for="(counter, index) in webContent.getCounterList"
          :key="index"
        >
          <div
            class="flex flex-column flex-wrap items-center mb-[1rem] lg:mb-0"
          >
            <component
              :class="`text-[3.75rem] icon-color is-${counter.iconColor}`"
              :is="counter.icon"
            ></component>
            <h4 class="text-xl text-black font-medium">{{ counter.title }}</h4>
            <h3 class="text-3xl text-black font-bold">
              0 {{ counter.valueAffix }}
            </h3>
          </div>
        </div>
      </div>
      <div class="mt-[2rem]">
        <div class="col-12 col-lg-6 !mx-0 lg:!mx-auto">
          <p class="text-center text-black text-lg">
            As the social enterprise arm of The Salvation Army, Re:Nue aims to
            deliver excellent donation-in-kind service that meets underserved
            needs within our community.
          </p>
        </div>
      </div>
      <div class="mt-[1rem] flex flex-row justify-normal lg:justify-center">
        <div class="col-12 col-lg-2 d-grid">
          <button
            role="button"
            class="btn cta-button-black btn-lg !rounded-[4rem] block !py-[0.8rem]"
          >
            <span class="font-bold text-lg">About Re:Nue</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return {
      webContent,
    };
  },
  computed: {},
  methods: {
    counterDataCount(targetValue: number) {
      let count = 0;
      return setInterval(() => {
        count++;
      }, 20);
    },
  },
});
</script>
