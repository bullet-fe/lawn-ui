<template>
 <div>
    <img alt="Vue logo" class="logo" src="./assets/lawn-ui-logo.png" @click="showPopupHandle" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
    <ln-popup v-model:show="showPopup"  @clickPopup="clickPopup" :customStyle="{color:'red'}" customClass="12323" :luckScroll="true">
      弹窗内容
    </ln-popup>
    <button @click="showToast">吐司</button>
    <button @click="closeToast">关闭吐司</button>
    <button @click="showDialogFlag = true">Dialog</button>
    <button @click="showActionHandle">动作面板</button>
    <ln-toast v-model:show="showToastFlag" position="center" :duration="0" @close="closeHandle"><p>生生世世生生世世生生世世生生世世生生世世生生世世是谁</p></ln-toast>
    <ln-dialog  v-model:show="showDialogFlag" @clickBtnHandle="clickBtnHandle">
      <p>请支付1000w，确保您的身份正确，确定继续吗？</p>
    </ln-dialog>
    <ln-action-sheet v-model:show="showActionFlag" :sheetList="sheetList"></ln-action-sheet>
 </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default{
  components:{
    HelloWorld
  },
  created(){
    console.log(this)
  },
  data() {
    return {
      showPopup: false,
      showPopup2: false,
      showToastFlag:false,
      showDialogFlag: false,
      showActionFlag: false,
      sheetList:[
        {
          label:'<p>选项一</p>',
          valeu:1
        },
        {
          label:'选项二',
          valeu:2
        }
      ]
    }
  },
  methods:{
    showPopupHandle(){
      this.showPopup = true
    },
    clickPopup(){
      this.showPopup = false
    },
    showToast(){
      this.showToastFlag = true
    },
    closeHandle(){
      console.log('111')
    },
    closeToast(){
      this.showToastFlag = false
    },
    clickBtnHandle(val){
        console.log(val)
    },
    showActionHandle(){
      this.showActionFlag = !this.showActionFlag
    }
  },
  created(){
  }
}
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
.logo{
  width: 200px;
}
</style>
