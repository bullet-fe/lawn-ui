# Dialog 组件

## 使用

```javascript
<ln-dialog :autoClose="false" v-model:show="showDialogFlag" @clickBtnHandle="clickBtnHandle">
      <p>请支付1000w，确保您的身份正确，确定继续吗？</p>
</ln-dialog>
```

## 参数

| 参数          | 描述             | 数据类型 | 默认值                     |
| ------------- | ---------------- | -------- | -------------------------- |
| show          | 是否展示         | Boolean  | false                      |
| headerText    | 标题文字         | String   | 标题（不传不展示标题 DOM） |
| autoClose     | 点击返回自动关闭 | Boolean  | true                       |
| leftBtnText   | 左边按钮文字     | String   | 取消                       |
| centerBtnText | 中间按钮文字     | String   | --                         |
| rightBtnText  | 右边按钮文字     | String   | 确定                       |
| customStyle   | 自定义 style     | Object   | --                         |
| customClass   | 自定义 class     | String   | --                         |

## 方法

| 方法名称       | 描述     | 回调参数                            |
| -------------- | -------- | ----------------------------------- |
| clickBtnHandle | 点击按钮 | 'left','right','center'不同按钮位置 |
