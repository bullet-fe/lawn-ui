<template>
  <teleport to="body">
    <transition
      :name="transitionName"
      @before-enter="onBeforeEnter"
      @before-leave="onBeforeLeave"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
      @click="onClick"
    >
      <div
        class="ln-popup"
        :class="customClass"
        @click="clickPopupHandle"
        v-if="show"
        :style="{ 'z-index': zIndex, ...customStyle }"
      >
        <slot></slot>
      </div>
    </transition>
  </teleport>
</template>

<script steup>
import { defineComponent, computed, onMounted } from "vue";
import { useZIndex, useLockScroll } from "../utils/index";
export default defineComponent({
  name: "ln-popup",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    transitionName: {
      type: String,
      default: "lawnFade",
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
    customClass: {
      type: String,
      default: "",
    },
    luckScroll: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    "update:show",
    "clickPopup",
    "beforeEnter",
    "beforeLeave",
    "aftereEnter",
    "afterLeave",
  ],
  setup(props, { emit }) {
    const zIndex = computed(() => {
      return useZIndex();
    });
    const [lockScroll, unlockScroll] = useLockScroll();
    onMounted(() => {
      if (props.uckScroll) {
        lockScroll();
      }
    });
    const clickPopupHandle = (e) => {
      emit("clickPopup", e);
    };
    const onBeforeEnter = (e) => {
      emit("beforeEnter", e);
    };
    const onBeforeLeave = (e) => {
      emit("beforeLeave", e);
    };
    const onAfterEnter = (e) => {
      emit("aftereEnter", e);
    };
    const onAfterLeave = (e) => {
      emit("afterLeave", e);
      unlockScroll();
    };
    const onClick = () => {};
    return {
      zIndex,
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave,
      onClick,
      clickPopupHandle,
    };
  }
});
</script>

<style lang="less">
@import "index.less";
</style>


     
      