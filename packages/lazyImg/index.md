# lazyImg 组件

## 使用

```javascript
 <ln-lazy-img
    :src="imgSrc"
    :defaultSrc="defaultSrc"
></ln-lazy-img>
```

## 参数

| 参数       | 描述                 | 数据类型 | 默认值 |
| ---------- | -------------------- | -------- | ------ |
| src        | 图片地址             | String   | --     |
| defaultSrc | 默认图片地址         | String   | --     |
| errorUrl   | 图片加载错误默认地址 | String   | --     |
| customClass   | 图片类名 | String   | --     |
| customStyle   | 图片样式 | String   | --     |

## 方法

| 方法名称 | 描述 | 回调参数 |
| -------- | ---- | -------- |
| imgError      | 图片加载错误回调  | --       |
