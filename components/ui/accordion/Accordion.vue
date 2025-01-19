<template>
  <div :class="classProps" :aria-expanded="isExpanded">
    <slot :expanded="expanded" :toggle="toggle"></slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    class: String,
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    isExpanded: false,
  }),
  computed: {
    classProps(): string {
      return cM("accordion mb-[2rem]", this.class);
    },
  },
  methods: {
    toggle() {
      this.isExpanded = !this.isExpanded;
      this.$emit("update:expanded", this.isExpanded);
    },
  },
});
</script>

<style lang="scss" src="./Accordion.scss"></style>
