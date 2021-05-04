import './assets/css/reset.css'
import './assets/css/var.less'
import Popup from './Popup/index.vue';

function install(Vue) {
  const packages = [Popup];
  packages.forEach((item) => {
    Vue.component(item.name, item);
  });
}
export { Popup };
export default install;