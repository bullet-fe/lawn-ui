<template>
  <main class="ln-infinite-scroll">
    <slot></slot>
    <footer
      class="ln-infinite-scroll_observe"
      v-if="!isFinish"
      v-observe-visibility="visibilityChanged"
    ></footer>
  </main>
</template>
  
  <script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ln-infinite-scroll",
  props: {
    isFinish: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const visibilityChanged = (isVisible) => {
      if (!isVisible || props.isFinish || props.isLoading) {
        return;
      }
      console.log("isVisible", isVisible);
      emit("onLoading");
    };
    return {
      visibilityChanged,
    };
  },
  emits: ["onLoading"],
});
</script>
  
  <style lang="less">
@import "index.less";
</style>
  