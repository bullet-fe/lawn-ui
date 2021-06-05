import './assets/css/public.less'
import './assets/css/var.less'
import { ObserveVisibility } from 'vue-observe-visibility' 
import Popup from './Popup/index.vue';
import Toast from './Toast/index.vue';
import Dialog from './Dialog/index.vue';
import actionSheet from './actionSheet/index.vue';
import infiniteScroll from './infiniteScroll/index.vue';

function install(Vue) {
  const packages = [Popup,Toast,Dialog,actionSheet,infiniteScroll];
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
}
export { Popup,Toast,Dialog,actionSheet,infiniteScroll };
export default install;