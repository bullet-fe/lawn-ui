# Popup 组件

## 使用

```javascript
<ln-popup v-model:show="showPopup">弹窗内容</ln-popup>
```

## 参数

| 参数           | 描述             | 数据类型   | 默认值            |
| -------------- | ---------------- | ---------- | ----------------- |
| show           | 是否展示弹出层   | Boolean    | false             |
| transitionName | 展示动画         | String     | 默认 opacity 过渡 |
| customStyle    | 自定义样式       | Object     | --                |
| customClass    | 自定义类名       | String     | --                |
| luckScroll     | 是否锁定         | Boolean    | false             |
| teleportDom    | 挂载的节点       | css 选择器 | body              |
| canPointBg     | 是否可以点击穿透背景 | Boolean   | true             |

## 方法

| 方法名称     | 描述         | 回调参数 |
| ------------ | ------------ | -------- |
| @clickPopup  | 点击事件回调 | event    |
| @beforeEnter | 即将进入回调 | event    |
| @aftereEnter | 进入回调     | event    |
| @beforeLeave | 即将退出回调 | event    |
| @afterLeave  | 退出回调     | event    |
