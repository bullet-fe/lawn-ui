
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

// 每次有新组件调用时候，增加z-index
export const useZIndex = () => {
    return defaultZIndex++;
}
