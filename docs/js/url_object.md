---
title: URL 妙用
---

## 基本使用

```js
const url = new URL('https://jweboy.com');

url.searchParams.set('model', 'test');

console.log(url.toString()); // https://jweboy.com/?model=test

const model = url.searchParams.get('model'); // 'test'



```

## 兼容性

主流浏览器基本上能够广泛兼容。

<img src="https://template-static.oss-cn-hangzhou.aliyuncs.com/idea/url_compatible.jpg" />;
