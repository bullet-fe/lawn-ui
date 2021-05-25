<template>
  <ln-popup v-model:show="show" :luckScroll="true" :canPointBg="canPointBg">
    <div class="ln-dialog" :style="customStyle" :class="customClass">
      <header v-if="headerText !== ''" class="ln-dialog-header">{{ headerText }}</header>
      <main class="ln-dialog-main">
        <slot></slot>
      </main>
      <footer class="ln-dialog-footer">
        <div
          class="ln-dialog-footer-btn"
          v-if="leftBtnText !== ''"
          @click="clickHandle('left')"
        >
          {{ leftBtnText }}
        </div>
        <div
          class="ln-dialog-footer-btn"
          v-if="centerBtnText !== ''"
          @click="clickHandle('center')"
        >
          {{ centerBtnText }}
        </div>
        <div
          class="ln-dialog-footer-btn"
          v-if="rightBtnText !== ''"
          @click="clickHandle('right')"
        >
          {{ rightBtnText }}
        </div>
      </footer>
    </div>
  </ln-popup>
</template>

<script>
import { defineComponent } from "vue";
import lnPopup from "../Popup/index.vue";
export default defineComponent({
  name: "ln-dialog",
  components: {
    lnPopup,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    canPointBg: {
      type: Boolean,
      default: true,
    },
    headerText: {
      type: String,
      default: "标题",
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    leftBtnText: {
      type: String,
      default: "取消",
    },
    centerBtnText: {
      type: String,
      default: "",
    },
    rightBtnText: {
      type: String,
      default: "确定",
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
    customClass: {
      type: String,
      default: "",
    }
  },
  emits: ["update:show", "clickBtnHandle"],
  setup(props, { emit }) {
    const clickHandle = (val) => {
      emit("clickBtnHandle", val);
      if (val === "left" && props.autoClose) {
        emit("update:show", false);
      }
    };
    return {
      clickHandle
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
