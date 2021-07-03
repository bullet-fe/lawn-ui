
const CLSNAME = 'lawn-overflow-hidden';

let defaultZIndex = 2000;

export const useLockScroll = () => {
    const lock = () => {
        document.body.classList.add(CLSNAME);
    };

    const unlock = () => {
        document.body.classList.remove(CLSNAME);
    };
    return [lock, unlock];
};
// 是否为刘海屏
export const useBangsIphone = () => {
    return /iphone/gi.test(navigator.userAgent) && (screen.height >= 812 && screen.width >= 375)
};
export const useThrottle = (fn, delay, mustRunDelay) => {
    let timer = null
    let t_start
    return function () {
        const context = this
        const args = arguments
        const t_curr = +new Date()
        clearTimeout(timer)
        if (!t_start) {
            t_start = t_curr
        }
        if (t_curr - t_start >= mustRunDelay) {
            fn.apply(context, args)
            t_start = t_curr
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args)
            }, delay)
        }
    }
}
// 每次有新组件调用时候，增加z-index
export const useZIndex = () => {
    return defaultZIndex++;
}
