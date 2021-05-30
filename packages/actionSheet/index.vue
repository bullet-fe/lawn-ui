<template>
  <ln-popup
    v-model:show="show"
    :luckScroll="true"
    :canPointBg="canPointBg"
    @clickPopup="clickPopupHandle"
  >
    <transition name="lawnVertical">
      <div
        class="ln-action-sheet"
        @click.stop="clickActionSheet"
        v-if="showAction"
      >
        <div class="ln-action-sheet-item" v-if="sheetTitle">{{ sheetTitle }}</div>
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
    </transition>
  </ln-popup>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
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
    let showAction = ref(false);

    const clickPopupHandle = () => {
      if (props.clickOverlayClose) {
        showAction.value = false;
        setTimeout(() => {
          emit("update:show", false);
        }, 100);
      }
      emit("clickOverlay");
    };
    const clickActionSheet = () => {
      emit("clickContent");
    };
    const selectActionHandle = (item, index) => {
      if (props.clickItemClose) {
        showAction.value = false;
        setTimeout(() => {
          emit("update:show", false);
        }, 100);
      }
      emit("selectItem", item, index);
    };

    watch(
      () => props.show,
      () => {
        setTimeout(() => {
          showAction.value = props.show;
        }, 0);
      }
    );
    return {
      clickPopupHandle,
      clickActionSheet,
      selectActionHandle,
      showAction,
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
