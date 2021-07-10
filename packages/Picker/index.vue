<template>
  <div class="nut-picker" :class="customClassName ? customClassName : null">
    <div class="nut-picker-control">
      <span class="nut-picker-cancel-btn" @click="closeActionSheet">关闭</span>
      <div class="nut-picker-title">{{ title ? title : "" }}</div>
      <span class="nut-picker-confirm-btn" @click="confirmHandle">确认</span>
    </div>
    <div class="nut-picker-panel">
      <div class="nut-picker-list" ref="listRef">
        <div class="nut-picker-roller" ref="rollerRef">
          <div
            class="nut-picker-roller-item"
            :class="{ 'nut-picker-roller-item-hidden': isHidden(index + 1) }"
            v-for="(item, index) in listData"
            :style="setRollerStyle(index + 1)"
            :key="item.label ? item.label : index"
          >
            {{ item.value ? item.value : item }}
          </div>
        </div>
        <div class="nut-picker-content">
          <div class="nut-picker-list-panel" ref="listPanelRef">
            <div
              class="nut-picker-item"
              v-for="(item, index) in listData"
              :key="item.label ? item.label : index"
            >
              {{ item.value ? item.value : item }}
            </div>
            <div
              class="nut-picker-placeholder"
              v-if="listData && listData.length === 1"
            ></div>
          </div>
        </div>
        <div class="nut-picker-mask"></div>
        <div class="nut-picker-indicator"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  defineComponent,
  reactive,
  ref,
  onMounted,
  onUnmounted,
  nextTick,
} from "vue";
export default defineComponent({
  name: "ln-picker",
  props: {
    customClassName: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: " ",
    },
    listData: {
      type: Array,
      default: () => [],
    },
    defaultValueData: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["close", "confirm", "onChange"],
  setup(props, { emit }) {
    const touchParams = reactive({
      startY: 0,
      endY: 0,
      startTime: 0,
      endTime: 0,
    });
    const currIndex = ref(1);
    const transformY = ref(0);
    const scrollDistance = ref(0);
    const lineSpacing = ref(36);
    const rotation = ref(20);
    const timer = ref(null);
    const listRef = ref(null);
    const rollerRef = ref(null);
    const listPanelRef = ref(null);

    const confirmHandle = () => {
      emit("confirm");
    };
    const closeActionSheet = () => {
      emit("close");
    };
    const setRollerStyle = (index) => {
      return `transform: rotate3d(1, 0, 0, ${
        -rotation.value * index
      }deg) translate3d(0px, 0px, 104px)`;
    };
    const isHidden = (index) => {
      if (index >= currIndex.value + 8 || index <= currIndex.value - 8) {
        return true;
      } else {
        return false;
      }
    };

    const setTransform = (translateY = 0, type, time = 1000, deg) => {
      if (type === "end") {
        listPanelRef.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        rollerRef.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
      } else {
        listPanelRef.value.style.webkitTransition = "";
        rollerRef.value.style.webkitTransition = "";
      }
      listPanelRef.value.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
      rollerRef.value.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
      scrollDistance.value = translateY;
    };
    const setMove = (move, type, time) => {
      let updateMove = move + transformY.value;
      if (type === "end") {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(props.listData.length - 1) * lineSpacing.value) {
          updateMove = -(props.listData.length - 1) * lineSpacing.value;
        }
        // 设置滚动距离为lineSpacing的倍数值
        let endMove =
          Math.round(updateMove / lineSpacing.value) * lineSpacing.value;
        let deg = `${
          (Math.abs(Math.round(endMove / lineSpacing.value)) + 1) *
          rotation.value
        }deg`;
        setTransform(endMove, type, time, deg);
        timer.value = setTimeout(() => {
          setChooseValue(endMove);
        }, time / 2);
        currIndex.value = Math.abs(Math.round(endMove / lineSpacing.value)) + 1;
      } else {
        let deg = "0deg";
        if (updateMove < 0) {
          deg = `${
            (Math.abs(updateMove / lineSpacing.value) + 1) * rotation.value
          }deg`;
        } else {
          deg = `${(-updateMove / lineSpacing.value + 1) * rotation.value}deg`;
        }
        setTransform(updateMove, null, null, deg);
        currIndex.value =
          Math.abs(Math.round(updateMove / lineSpacing.value)) + 1;
      }
    };

    const setChooseValue = (move) => {
      emit("onChange", props.listData[Math.round(-move / lineSpacing.value)]);
    };

    const touchStart = (event) => {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      touchParams.startY = changedTouches.pageY;
      touchParams.startTime = event.timestamp || Date.now();
      transformY.value = scrollDistance.value;
    };

    const touchMove = (event) => {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      touchParams.lastY = changedTouches.pageY;
      touchParams.lastTime = event.timestamp || Date.now();
      let move = touchParams.lastY - touchParams.startY;
      setMove(move);
    };

    const touchEnd = (event) => {
      event.preventDefault();
      let changedTouches = event.changedTouches[0];
      touchParams.lastY = changedTouches.pageY;
      touchParams.lastTime = event.timestamp || Date.now();
      let move = touchParams.lastY - touchParams.startY;
      let moveTime = touchParams.lastTime - touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        setMove(move, "end", moveTime);
      } else {
        setMove(move, "end");
      }
    };

    const modifyStatus = (type, defaultValue) => {
      defaultValue = defaultValue ? defaultValue : props.defaultValue;
      let index = -1;
      if (defaultValue && props.defaultValue) {
        props.listData.some((item, idx) => {
          if (item.value == props.defaultValue) {
            index = idx;
            return true;
          }
        });
      } else {
        index = props.listData.indexOf(defaultValue);
      }
      currIndex.value = index === -1 ? 1 : index + 1;
      let move = index === -1 ? 0 : index * lineSpacing.value;
      type && setChooseValue(-move);
      setMove(-move);
    };

    onMounted(() => {
      nextTick(() => {
        modifyStatus(true);
        listRef.value.addEventListener("touchstart", touchStart);
        listRef.value.addEventListener("touchmove", touchMove);
        listRef.value.addEventListener("touchend", touchEnd);
      });
    });

    onUnmounted(() => {
      listRef.value.removeEventListener("touchstart", touchStart);
      listRef.value.removeEventListener("touchmove", touchMove);
      listRef.value.removeEventListener("touchend", touchEnd);
      clearTimeout(timer.value);
    });

    return {
      touchParams,
      currIndex,
      transformY,
      scrollDistance,
      lineSpacing,
      rotation,
      timer,
      listRef,
      rollerRef,
      listPanelRef,
      confirmHandle,
      closeActionSheet,
      setRollerStyle,
      isHidden,
      setTransform,
      setMove,
      setChooseValue,
    };
  },
  watch: {
    defaultValue: function () {
      this.transformY = 0;
      this.modifyStatus();
    },
  },
});
</script>

<style lang="less">
@import "index.less";
</style>
