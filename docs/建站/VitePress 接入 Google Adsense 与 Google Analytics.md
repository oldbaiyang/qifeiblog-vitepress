---
# 页面的标题
title: VitePress 接入 Google Adsense 与 Google Analytics
# 标题的后缀。
titleTemplate:
# 页面的描述
description:
# editLink: true
# 指定要为当前页面注入的额外 head 标签。将附加在站点级配置注入的头部标签之后。
# head:
#   - - meta
#     - name: description
#       content: hello
#   - - meta
#     - name: keywords
#       content: super duper SEO
# footer: true
categories:
  - 建站
tag: 
  - vitepress
---

## [Google Adsense](https://adsense.google.com)

- Google Adsense 一般需要在网站的 head 中添加这样的 JavaScript 代码
- 代码在 `Google Adsense -> 侧边栏“广告” -> 右侧“获取代码”` 中可以找到


```js
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX" crossorigin="anonymous"></script>
```

- 在 VitePress 中，只需要在 `config.ts` 中的 `head` 配置项中添加以下代码


```js
head: [
  [
    'script',
    {
      async: '',
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXX',
      crossorigin: 'anonymous'
    }
  ]
]
```

## [Google Analytics​](https://zhichao.org/posts/4d69f1.html#google-analytics)

- Google Analytics 一般需要在网站的 head 中添加这样的 JavaScript 代码
- 代码在 `Google Analytics -> 左下角“管理” -> 媒体资源 -> 数据流 -> 网站` 中可以找到，详情可参考[官方文档](https://support.google.com/analytics/answer/9304153?sjid=15157978542027275755-NA)

```js
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

- 在 VitePress 中，只需要在 `config.ts` 中的 `head` 配置项中添加以下代码


```js
head: [
  [
    'script',
    {
      async: '',
      src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
    }
  ],
  [
    'script',
    {},
    "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-XXXXXXXXXX');"
  ]
]
```