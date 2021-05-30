# actionSheet 组件

## 使用

```javascript
<ln-action-sheet v-model:show="showActionFlag" :sheetList="sheetList"></ln-action-sheet>
```

## 参数

| 参数              | 描述               | 数据类型      | 默认值                     |
| ----------------- | ------------------ | ------------- | -------------------------- |
| show              | 是否展示           | Boolean       | false                      |
| sheetTitle        | 标题文字           | String        | 标题（不传不展示标题 DOM） |
| clickItemClose    | 点击子项目是否关闭 | Boolean       | true                       |
| sheetList         | 动作列表           | Array, Object | []                         |
| clickOverlayClose | 点击背景是否关闭   | Boolean       | --                         |

## 方法

| 方法名称     | 描述       | 回调参数             |
| ------------ | ---------- | -------------------- |
| clickContent | 点击内容区 | --                   |
| clickOverlay | 点击遮罩层 | --                   |
| selectItem   | 选择子项目 | 选择的 item 和 index |
