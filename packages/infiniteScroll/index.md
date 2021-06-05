# infiniteScroll 组件

## 使用

```javascript
<ln-infinite-scroll
    :isLoading="isLoading"
    :isFinish="isFinishFlag"
    @onLoading="onInfinite"
    >
    <div
        v-for="(item, index) in loadingList"
        :key="index"
    >
        {{item}}
    </div>
</ln-infinite-scroll>
```

## 参数

| 参数 | 描述 | 数据类型 | 默认值 |
| ---- | ---- | -------- | ------ |
| isFinish   | 是否加载完成   | Boolean    | false    |
| isLoading   | 是否正在加载   | Boolean    | false    |


## 方法

| 方法名称 | 描述 | 回调参数 |
| -------- | ---- | -------- |
| onLoading     | 滑到了加载的阈值  | --       |
