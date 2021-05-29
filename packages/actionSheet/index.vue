<template>
  <ln-popup
    v-model:show="show"
    :luckScroll="true"
    :canPointBg="canPointBg"
    @clickPopup="clickPopupHandle"
  >
    <div
      class="ln-action-sheet"
      @click.stop="clickActionSheet"
      v-if="show"
    >
      <div class="ln-action-sheet-item">{{ sheetTitle }}</div>
      <div class="ln-action-sheet-list" v-if="sheetList.length > 0">
        <div
          class="ln-action-sheet-item"
          v-for="(item, index) in sheetList"
          :key="index"
          @click="selectActionHandle(item, index)"
        >
          <div v-html="item.label"></div>
        </div>
      </div>
      <slot></slot>
    </div>
  </ln-popup>
</template>

<script>
import { defineComponent, ref } from "vue";
import lnPopup from "../Popup/index.vue";
export default defineComponent({
  name: "ln-action-sheet",
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
    transitionName: {
      type: String,
      default: "lawnVertical",
    },
    clickOverlayClose: {
      type: Boolean,
      default: true,
    },
    sheetList: {
      type: [Array, Object],
      default: () => {
        return [];
      },
    },
    clickItemClose: {
      type: Boolean,
      default: true,
    },
    sheetTitle: {
      type: String,
      default: "标题",
    },
  },
  emits: ["update:show", "clickContent", "clickOverlay", "selectItem"],
  setup(props, { emit }) {
    const clickPopupHandle = () => {
      if (props.clickOverlayClose) {
        emit("update:show", false);
      }
      emit("clickOverlay");
    };
    const clickActionSheet = () => {
      emit("clickContent");
    };
    const selectActionHandle = (item, index) => {
      if (props.clickItemClose) {
        emit("update:show", false);
      }
      emit("selectItem", item, index);
    };
    return {
      clickPopupHandle,
      clickActionSheet,
      selectActionHandle
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
