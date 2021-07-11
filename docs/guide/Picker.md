---
title: Picker组件
---

# Picker 组件

## 使用

```javascript
<ln-picker :listData="listData" @onChange="onChange"></ln-picker>
```

## 参数

| 参数 | 描述 | 数据类型 | 默认值 |
| ---- | ---- | -------- | ------ |
| customClass  | 自定义类名  | --       | --     |
| title   | 标题  |    String    | --     |
| listData   | 选择器数据   | Array      | --     |
| defaultValueData   | 选中的数据   | Array      | --     |

## 方法

| 方法名称 | 描述 | 回调参数 |
| -------- | ---- | -------- |
| close       | 点击取消   | --       |
| confirm      | 点击确定  | --       |
| onChange       | 内容修改   | --       |
