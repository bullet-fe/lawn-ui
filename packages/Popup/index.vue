<template>
  <teleport :to="teleportDom">
    <transition
      :name="transitionName"
      @before-enter="onBeforeEnter"
      @before-leave="onBeforeLeave"
      @after-enter="onAfterEnter"
      @after-leave="onAfterLeave"
    >
      <div
        class="ln-popup"
        :class="customClass"
        @click="clickPopupHandle"
        v-if="show"
        :style="{ 'z-index': zIndex, ...customStyle, ...controlStyle }"
      >
        <div class="ln-popup-content" :style="{ 'z-index': zIndex + 1 }">
          <slot></slot>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script steup>
import { defineComponent, computed } from "vue";
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
      default: "lawnPopuopShow",
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
    teleportDom: {
      type: String,
      default: "body",
    },
    canPointBg: {
      type: Boolean,
      default: true
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
    const clickPopupHandle = (e) => {
      emit("clickPopup", e);
    };
    const onBeforeEnter = (e) => {
      if (props.luckScroll) {
        lockScroll();
      }
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
    const controlStyle = {
      "pointer-events": props.canPointBg ? "auto" : "none",
    };
    return {
      zIndex,
      onBeforeEnter,
      onBeforeLeave,
      onAfterEnter,
      onAfterLeave,
      clickPopupHandle,
      controlStyle,
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>