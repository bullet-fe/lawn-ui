import './assets/css/public.less'
import './assets/css/var.less'
import Popup from './Popup/index.vue';
import Toast from './Toast/index.vue';
import Dialog from './Dialog/index.vue';
import actionSheet from './actionSheet/index.vue';

function install(Vue) {
  const packages = [Popup,Toast,Dialog,actionSheet];
  packages.forEach((item) => {
    Vue.component(item.name, item);
  });
}
export { Popup,Toast,Dialog,actionSheet };
export default install;