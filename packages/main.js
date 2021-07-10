import './assets/css/public.less'
import './assets/css/var.less'
import { ObserveVisibility } from 'vue-observe-visibility' 
import $toast from './Toast/index.js'
import Popup from './Popup/index.vue';
import Toast from './Toast/index.vue';
import Dialog from './Dialog/index.vue';
import Picker from './Picker/index.vue';
import actionSheet from './actionSheet/index.vue';
import pullRefresh from './pullRefresh/index.vue';
import infiniteScroll from './infiniteScroll/index.vue';
import lazyImg from './lazyImg/index.vue';

function install(Vue) {
  const packages = [Popup,Toast,Dialog,Picker,actionSheet,pullRefresh,infiniteScroll,lazyImg];
  packages.forEach((item) => {
    Vue.component(item.name, item);
  });
  Vue.directive("observe-visibility", {
    beforeMount: (el, binding, vnode) => {
      vnode.context = binding.instance
      ObserveVisibility.bind(el, binding, vnode)
    },
    updated: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind
  })
  Vue.config.globalProperties.$toast = $toast
}
export { Popup,Toast,Dialog,Picker,actionSheet,pullRefresh,infiniteScroll,lazyImg };
export default install;