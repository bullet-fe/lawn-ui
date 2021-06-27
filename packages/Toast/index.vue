<template>
  <ln-popup
    v-model:show="show"
    :customStyle="toastPopupStyle"
    :canPointBg="canPointBg"
  >
    <div class="ln-toast" :class="toastPosition">{{instanceText}}<slot></slot></div>
  </ln-popup>
</template>

<script steup>
import { defineComponent, watch } from "vue";
import lnPopup from "../Popup/index.vue";
export default defineComponent({
  name: "ln-toast",
  components: {
    lnPopup,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 2000,
    },
    position: {
      type: String,
      default: "center",
    },
    canPointBg: {
      type: Boolean,
      default: false,
    },
    instanceText:{
      type: String,
      default: "",
    }
  },
  emits: ["update:show", "closeToask", "close"],
  setup(props, { emit }) {
    const toastPopupStyle = {
      "background-color": "transparent",
    };
    const toastPosition = {
      top: "ln-toast_top",
      center: "ln-toast_center",
      bottom: "ln-toast_bottom",
    };

    const openToask = () => {
      emit("update:show", true);
    };
    const closeToask = () => {
      emit("update:show", false);
    };

    watch(
      () => props.show,
      () => {
        if (props.duration !== 0) {
          let timer = setTimeout(() => {
            emit("update:show", false);
            clearTimeout(timer)
          }, props.duration);
        }
      }
    );
    return {
      toastPopupStyle,
      toastPosition: toastPosition[props.position],
      openToask,
      closeToask
    };
  }
});
</script>

<style lang="less">
@import "index.less";
</style>
