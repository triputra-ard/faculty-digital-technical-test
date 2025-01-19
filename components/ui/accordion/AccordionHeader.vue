<template>
  <button :class="classProps" @click="toggle">
    <slot></slot>
    <template v-if="title">
      <accordion-title>{{ title }}</accordion-title>
    </template>
    <icon class="text-4xl accordion-caret" icon="mdi-chevron-down"></icon>
  </button>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    class: String,
    title: String,
    toggle: {
      type: Function,
      required: true,
    },
  },
  computed: {
    classProps(): string {
      return cM("accordion-header flex flex-row py-[1rem]", this.class);
    },
  },
});
</script>
