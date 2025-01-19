<template>
  <div class="py-[5rem]">
    <div class="container flex flex-row justify-normal lg:justify-center">
      <div class="col-12 col-lg-8">
        <div class="flex flex-column items-center mb-[2rem]">
          <h2 class="text-5xl font-semibold text-black mb-[1.5rem]">
            Our values
          </h2>
          <p class="text-black font-light">
            Guiding principles behind everything we do
          </p>
        </div>
        <accordion
          v-for="(accordion, accordionIndex) in webContent.getAccordionList"
          :key="accordionIndex"
        >
          <template #default="{ expanded, toggle }">
            <accordion-header :toggle="toggle">
              <component
                :class="`text-5xl icon-color is-${accordion.iconColor}`"
                :is="accordion.icon"
              ></component>
              <accordion-title class="text-4xl">{{
                accordion.title
              }}</accordion-title>
            </accordion-header>
            <accordion-content>{{ accordion.content }}</accordion-content>
          </template>
        </accordion>
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
  data: () => ({
    expandedIndex: 0,
  }),
  methods: {
    toggleAccordion(index: number) {
      this.expandedIndex = this.expandedIndex === index ? 0 : index;
    },
  },
  computed: {},
});
</script>
