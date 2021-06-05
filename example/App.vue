<template>
  <div>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/lawn-ui-logo.png"
      @click="showPopupHandle"
    />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <ln-popup
      v-model:show="showPopup"
      @clickPopup="clickPopup"
      :customStyle="{ color: 'red' }"
      customClass="12323"
      :luckScroll="true"
    >
      弹窗内容
    </ln-popup>
    <button @click="showToast">吐司</button>
    <button @click="closeToast">关闭吐司</button>
    <button @click="showDialogFlag = true">Dialog</button>
    <button @click="showActionHandle">动作面板</button>
    <ln-toast
      v-model:show="showToastFlag"
      position="center"
      :duration="0"
      @close="closeHandle"
      ><p>生生世世生生世世生生世世生生世世生生世世生生世世是谁</p></ln-toast
    >
    <ln-dialog v-model:show="showDialogFlag" @clickBtnHandle="clickBtnHandle">
      <p>请支付1000w，确保您的身份正确，确定继续吗？</p>
    </ln-dialog>
    <ln-action-sheet
      v-model:show="showActionFlag"
      :sheetList="sheetList"
    ></ln-action-sheet>
    <button @click="reloadHandle">reload</button>
    <div class="scroll-box">
      <ln-infinite-scroll
        :isLoading="isLoading"
        :isFinish="isFinishFlag"
        @onLoading="onInfinite"
      >
        <div
          class="testScrll"
          v-for="(item, index) in loadingList"
          :key="index"
        >
          <h1>{{ item.name }}{{ item.id }}</h1>
          <h3>{{ item.body }}</h3>
        </div>
      </ln-infinite-scroll>
      <div v-if="isLoading">加载中...</div>
      <div v-if="isFinishFlag">数据加载完成</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      showPopup: false,
      showPopup2: false,
      showToastFlag: false,
      showDialogFlag: false,
      showActionFlag: false,
      sheetList: [
        {
          label: "<p>选项一</p>",
          valeu: 1,
        },
        {
          label: "选项二",
          valeu: 2,
        },
      ],
      loadingList: [],
      page: 2,
      num: 30,
      isLoading: false,
      isFinishFlag: false,
      isErr: false,
      timer: null,
      page: 0,
    };
  },
  methods: {
    showPopupHandle() {
      this.showPopup = true;
    },
    clickPopup() {
      this.showPopup = false;
    },
    showToast() {
      this.showToastFlag = true;
    },
    closeHandle() {
      console.log("111");
    },
    closeToast() {
      this.showToastFlag = false;
    },
    clickBtnHandle(val) {
      console.log(val);
    },
    showActionHandle() {
      this.showActionFlag = !this.showActionFlag;
    },
    async onInfinite() {
      if (this.isFinishFlag) return;
      console.log("load");
      this.page++;
      this.isLoading = true;
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=${this.page}`
      );
      let items = await res.json();
      console.log(items);
      this.loadingList = this.loadingList.concat(items);
      if (this.loadingList.length > 40) {
        this.isFinishFlag = true;
      }
      this.isLoading = false;
    },
    reloadHandle() {
      this.loadingList = [];
      this.page = 0;
      this.isFinishFlag = false;
    },
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 200px;
}
.scroll-box {
  width: 100%;
  height: 300px;
  overflow: hidden;
}
</style>
