<template>
  <img
    :class="customClass"
    class="ln-lazy-img"
    v-observe-visibility="{
      callback: visibilityChanged,
      once: true,
    }"
    :src="imgSrc"
    :alt="alt"
    @error="imgErrorHandle"
    @load="imgLoadingHandle"
  />
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "ln-lazy-img",
  props: {
    src: {
      type: String,
      default: "",
    },
    defaultSrc: {
      type: String,
      default: "",
    },
    errorUrl: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    customClass: {
      type: String,
      default: "",
    },
    customStyle: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["imgError"],
  setup(props, { emit }) {
    const imgSrc = ref("");
    imgSrc.value = props.defaultSrc;

    const imgLoadingHandle = (e) => {
      // console.log(e);
    };
    const imgErrorHandle = (e) => {
      console.error('imgError',e);
      imgSrc.value = props.errorUrl || props.defaultSrc;
      emit("imgError", e);
    };

    const visibilityChanged = (isVisible) => {
      if (isVisible) {
        imgSrc.value = props.src;
      }
    };
    return {
      imgErrorHandle,
      visibilityChanged,
      imgSrc,
      imgLoadingHandle,
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
