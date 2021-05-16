import './assets/css/public.less'
import './assets/css/var.less'
import Popup from './Popup/index.vue';
import Toast from './Toast/index.vue';

function install(Vue) {
  const packages = [Popup,Toast];
  packages.forEach((item) => {
    Vue.component(item.name, item);
  });
}
export { Popup,Toast };
export default install;