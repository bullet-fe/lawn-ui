# pullRefresh 组件

## 使用

```javascript
<ln-pull-refresh v-model:isLoading="isLoading" :maxDistance="2000">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
</ln-pullRefresh>
```

## 参数

| 参数 | 描述 | 数据类型 | 默认值 |
| ---- | ---- | -------- | ------ |
| isLoading   | 收否在加载中  | Boolean     | false  |
| maxDistance   | 能够拖拽的最大距离  | Number     | 200  |
| triggerDistance   | 触发下拉刷新的阀值  | Number     | 200  |
## 方法

| 方法名称 | 描述 | 回调参数 |
| -------- | ---- | -------- |
| refresh       | 触发刷新   | --      |
