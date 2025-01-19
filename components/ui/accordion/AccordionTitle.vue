<template>
  <h3 :class="classProps">
    <slot></slot>
  </h3>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    class: String,
  },
  computed: {
    classProps(): string {
      return cM(
        "text-3xl leading-6 font-bold ms-[1rem] pt-[0.5rem]",
        this.class
      );
    },
  },
});
</script>
