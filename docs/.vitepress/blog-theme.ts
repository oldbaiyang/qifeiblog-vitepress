// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 开启RSS支持（RSS配置）
// import type { Theme } from '@sugarat/theme'

// const baseUrl = 'https://sugarat.top'
// const RSS: Theme.RSSOptions = {
//   title: '粥里有勺糖',
//   baseUrl,
//   copyright: 'Copyright (c) 2018-present, 粥里有勺糖',
//   description: '你的指尖,拥有改变世界的力量（大前端相关技术分享）',
//   language: 'zh-cn',
//   image: 'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
//   favicon: 'https://sugarat.top/favicon.ico',
// }

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 开启RSS支持
  // RSS,

  // 搜索
  // 默认开启pagefind离线的全文搜索支持（如使用其它的可以设置为false）
  // 如果npx pagefind 时间过长，可以手动将其安装为项目依赖 pnpm add pagefind
  // search: false,

  // 页脚
  footer: {
    // message 字段支持配置为HTML内容，配置多条可以配置为数组
    // message: '下面 的内容和图标都是可以修改的噢（当然本条内容也是可以隐藏的）',
    copyright: 'MIT License | 棋飞',
    // icpRecord: {
    //   name: '蜀ICP备19011724号',
    //   link: 'https://beian.miit.gov.cn/'
    // },
    // securityRecord: {
    //   name: '公网安备xxxxx',
    //   link: 'https://www.beian.gov.cn/portal/index.do'
    // },
  },

  // 主题色修改
  themeColor: 'el-blue',

  // 文章默认作者
  author: '棋飞',

  // 友链
  friend: [
    {
      nickname: '棋飞找书',
      des: '棋飞找书网 -pdf,txt,mobi,azw3,epub 把时间交给阅读',
      avatar:
        'https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/202405151411920.png',
      url: 'https://findbook.org',
    },
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],

  // 公告
  popover: {
    title: '公告',
    body: [
      { type: 'text', content: '👇公众号👇' },
      {
        type: 'image',
        src: 'https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/qrcode_for_gh_af8b4a83532b_258.jpg'
      },
      {
        type: 'text',
        content: '感谢关注'
      },
      {
        type: 'text',
        content: '探索AI新技术',
        style: 'padding-top:0'
      },
      // {
      //   type: 'button',
      //   content: '作者博客',
      //   link: 'https://qifeiai.top'
      // },
      // {
      //   type: 'button',
      //   content: '加群交流',
      //   props: {
      //     type: 'success'
      //   },
      //   link: 'https://theme.sugarat.top/group.html',
      // }
    ],
    duration: 0
  },
  // 用于控制推荐文章的展示卡片
  recommend: {
    title: '🔍 相关文章',
    nextText: '换一组',
    pageSize: 9,
    empty: '暂无相关文章',
    style: 'sidebar',
    sort: 'date'
  },
  // 用于设置文章页作者信息跳转相关信息默认情况下author仅做展示设置这个列表后，作者信息如果匹配上，即可跳转
  authorList: [
    {
      nickname: '棋飞',
      url: 'https://qifeiai.top',
      des: '硅基文明终将统治地球'
    }
  ],
  //文章赞赏二维码
  buttonAfterArticle: {
    // openTitle: '赞赏',
    // closeTitle: '下次一定',
    // content: '<img src="https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.png">',
    // icon: 'aliPay'
    openTitle: '赞赏',
    closeTitle: '下次一定',
    content: '<img src="https://qifei-blog-1256009448.cos.ap-chengdu.myqcloud.com/qifei-blog/%E5%BE%AE%E4%BF%A1%E8%B5%9E%E8%B5%8F.pic.jpg">',
    icon: 'wechatPay'
  },

})

export { blogTheme }
