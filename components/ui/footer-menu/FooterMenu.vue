<template>
  <footer>
    <div class="wave-border">
      <svg-webcontent-wave
        filled
        class="h-[50rem] w-[100rem]"
      ></svg-webcontent-wave>
    </div>
    <div class="footer-menu !px-[1rem] lg:!px-[2rem]">
      <div class="px-1 mx-0 flex flex-wrap flex-row lg:justify-between">
        <div
          class="col-12 col-lg-4 flex flex-column flex-wrap mb-[1rem] lg:mb-0"
        >
          <img
            class="footer-brand mx-[auto] lg:!mx-[0]"
            src="~/assets/icons/renue_logo_reverse.png"
            alt="re:nue logo with color white and red"
          />
          <p
            class="text-[0.8rem] lg:text-[1rem] leading-normal text-center lg:text-left"
          >
            Re:Nue, a social enterprise under The Salvation Army, is passionate
            about sustainability and community impact since 1996. By
            re-purposing and reselling your generous donations, we generate
            funds to support vital programs for the community, including
            children, youth, the elderly, migrant workers, and ex-offenders.
          </p>
        </div>
        <div class="col-12 col-lg-7 flex flex-wrap flex-lg-nowrap flex-row">
          <div
            :class="`col-12 p-2 ${
              index === webContent.getFooterMenu.length - 1
                ? 'col-lg-5 hidden lg:block'
                : 'col-lg-3'
            }`"
            v-for="(menu, index) in webContent.getFooterMenu"
            :key="index"
          >
            <h3 class="text-2xl font-semibold hidden lg:block mb-[1.2rem]">
              {{ menu.title }}
            </h3>
            <ul class="block">
              <li
                class="flex justify-center lg:justify-normal"
                v-for="(menuChild, menuChildIndex) in menu.children"
                :key="`item-${index}_${menuChildIndex}`"
              >
                <a
                  class="mb-[1rem] lg:mb-[0.7rem] text-justify text-md flex flex-row flex-nowrap"
                  :href="menuChild.url"
                >
                  <template v-if="menuChild.icon">
                    <icon class="me-[0.5rem]" :icon="menuChild.icon"></icon>
                  </template>
                  {{ menuChild.title }}</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap flex-row justify-center lg:justify-start">
        <a
          href="javascript:void(0)"
          class="text-4xl lg:text-3xl mx-[1rem] lg:mx-[0.5rem]"
        >
          <icon icon="mdi-facebook"></icon>
        </a>
        <a
          href="javascript:void(0)"
          class="text-4xl lg:text-3xl mx-[1rem] lg:mx-[0.5rem]"
        >
          <icon icon="mdi-instagram"></icon>
        </a>
      </div>
    </div>
    <div class="copyright-section py-[1rem]">
      <div class="mx-2 flex flex-row flex-wrap lg:justify-between">
        <div
          class="col-12 col-lg-4 flex flex-row justify-center lg:justify-start"
        >
          <p class="text-lg lg:text-[0.8rem]">Privacy policy</p>
          <p class="mx-[1rem]">|</p>
          <p class="text-lg lg:text-[0.8rem]">Terms & condition</p>
        </div>
        <div class="col-12 col-lg-4">
          <p
            class="lg:text-end text-center text-lg lg:text-[0.8rem] mt-[0.8rem] lg:mt-0"
          >
            &copy; 2025 Re:Nue. All rights reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return {
      webContent,
    };
  },
});
</script>

<style lang="scss" src="./FooterMenu.scss"></style>
