
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


// 每次有新组件调用时候，增加z-index
export const useZIndex = () => {
    return defaultZIndex++;
}
