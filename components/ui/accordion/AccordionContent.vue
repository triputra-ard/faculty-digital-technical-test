<template>
  <div :class="classProps">
    <slot></slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    class: String,
  },
  computed: {
    classProps(): string {
      return cM("accordion-content ", this.class);
    },
  },
});
</script>
