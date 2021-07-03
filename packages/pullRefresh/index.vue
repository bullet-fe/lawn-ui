<template>
  <div class="ln-pull-refresh">
    <div
      class="ln-pull-refresh-container"
      @touchstart.stop="handlerTouchStart"
      @touchmove.stop="handlerTouchMove"
      @touchend.stop="handlerTouchEnd"
      ref="scrollContainer"
      :class="isCanLoading ? 'ln-pull-refresh-end' : ''"
    >
      <div v-show="isRefresh">松手开始刷新</div>
      <div v-show="isCanLoading">加载中</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
export default defineComponent({
  name: "ln-pull-refresh",
  data() {
    return {};
  },
  props: {
    // 收否在加载中
    isLoading: {
      type: Boolean,
      default: false,
    },
    // 能够拖拽的最大距离
    maxDistance: {
      type: Number,
      default: 200,
    },
    // 触发下拉刷新的阀值
    triggerDistance: {
      type: Number,
      default: 200,
    },
  },
  emits: ["refresh"],
  setup(props, { emit }) {
    onMounted(() => {});
    const startLocation = ref(0);
    const isRefresh = ref(false);
    const moveDistance = ref(0);
    const scrollContainer = ref(null);
    const isCanLoading = ref(false);
    
    const handlerTouchStart = (e) => {
      startLocation.value = e.touches[0].pageY;
      isRefresh.value = true;
    };

    const handlerTouchMove = (e) => {
      const touchPageY = Math.floor(e.touches[0].pageY - startLocation.value);
      moveDistance.value = touchPageY;
      scrollContainer.value.style.transform = `translateY(${
        moveDistance.value / 2
      }px)`;
    };

    const handlerTouchEnd = (e) => {
      // 判断是否达到触发条件
      if (Math.abs(moveDistance.value) < props.triggerDistance) {
        isRefresh.value = false;
        resetTouch();
      } else {
        isCanLoading.value = true;
        isRefresh.value = false;
        scrollContainer.value.style.transform = `translateY(${
          moveDistance.value / 2
        }px)`;
        emit("refresh");
        moveDistance.value = 0;
      }
    };

    const resetTouch = () => {
      isCanLoading.value = false;
      scrollContainer.value.style.transform = "translateY(0px)";
    };

    watch(
      () => props.isLoading,
      () => {
        if (!props.isLoading) {
          resetTouch();
        }
      }
    );

    return {
      handlerTouchStart,
      handlerTouchMove,
      handlerTouchEnd,
      startLocation,
      isRefresh,
      moveDistance,
      scrollContainer,
      isCanLoading,
    };
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
