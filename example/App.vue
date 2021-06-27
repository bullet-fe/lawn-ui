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
    <ln-lazy-img v-for="(item,index) in imgList" :key="index" 
    :src="item.src"
    defaultSrc="data:image/png;base64,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"
    ></ln-lazy-img>
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
      imgList:[
        {
          src:'https://tse4-mm.cn.bing.net/th/id/OIP-C.T1-KOJxH7Dg0YqlcZiJ6vAHaHa?w=179&h=180&c=7&o=5&dpr=2&pid=1.7'
        },
        {
          src:'https://tse4-mm.cn.bing.net/th/id/OIP-C.PTZJ51e7xutqxF_1nXpdawHaEK?w=320&h=180&c=7&o=5&dpr=2&pid=1.7'
        },
        {
          src:'https://tse3-mm.cn.bing.net/th/id/OIP-C.H986GDFYxiuR5pDYvu5uvgHaLH?w=122&h=183&c=7&o=5&dpr=2&pid=1.7'
        },
        {
          src:'https://tse2-mm.cn.bing.net/th/id/OIP-C.0WavTrykz3VRCwWPx1Y1vAHaQC?w=115&h=180&c=7&o=5&dpr=2&pid=1.7'
        },
        {
          src:'https://tse2-mm.cn.bing.net/th/id/OIP-C.CRDY3qxQTD6jlnviczGE6gHaE_?w=273&h=184&c=7&o=5&dpr=2&pid=1.7'
        },
        {
          src:'123123'
        }
      ]
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
    }
  },
  mounted() {
    this.$toast('测试toast')
  },
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
