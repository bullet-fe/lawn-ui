import { createVNode, render } from "vue";
import Modal from './index.vue';
const container = document.documentElement;
const vnode = createVNode(Modal);
render(vnode, container);
const instance = vnode.component;

const Toast = (option) => {
    if (typeof option === 'string') {
        instance.props.instanceText = option
    } else if (typeof option === 'object') {
        instance.props.instanceText = option.msg
        instance.props.duration = option.duration || 2000
    } else {
        return new TypeError('Toast Option TypeError')
    }
    instance.props.show = true
    setTimeout(() => {
        instance.props.show = false
    }, instance.props.duration)
}
export default Toast