import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "MY 博客",
    base: '/my-blog/',
    description: "前端，博客",
    themeConfig: {
        search: {
            provider: 'local'
        },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '知识', link: '/knowledge/' },
            { text: '其他', link: '/weekly/' },
        ],

        sidebar: {
            '/weekly/': [
                {
                    text: '周刊',
                    collapsed: true,
                    items: [
                        { text: '01期', link: '/weekly/' },
                        { text: '02期', link: '/weekly/02' },
                        { text: '03期', link: '/weekly/03' },
                        { text: '04期', link: '/weekly/04' },
                        { text: '05期', link: '/weekly/05' },
                        { text: '06期', link: '/weekly/06' },
                        { text: '07期', link: '/weekly/07' },
                        { text: '08期', link: '/weekly/08' },
                        { text: '09期', link: '/weekly/09' },
                        { text: '10期', link: '/weekly/10' },
                    ],
                }
            ],
            '/knowledge/': [
                {
                    text: '知识',
                    collapsed: true,
                    items: [
                        { text: '爬取技术文档并转为 markdown', link: '/knowledge/09' },
                        { text: '浮点数与二进制', link: '/knowledge/' },
                        {
                            text: 'ESLint 和 Prettier 规范代码',
                            link: '/knowledge/02',
                        },
                        { text: '力扣 504 七进制转换', link: '/knowledge/03' },
                        { text: 'NPM 发布 TS 包', link: '/knowledge/04' },
                        { text: '小鹤双拼推荐', link: '/knowledge/05' },
                        {
                            text: '在 Mac 中像 Windows 一样切换应用',
                            link: '/knowledge/06',
                        },
                        { text: 'Chrome 96 更新', link: '/knowledge/07' },
                        { text: '浏览器插件入门实践', link: '/knowledge/08' },
                    ],
                },
                {
                    text: 'JavaScript',
                    collapsed: true,
                    items: [
                        {
                            text: 'defineProperty 详细解读',
                            link: '/knowledge/js101',
                        },
                        { text: 'JavaScript 对象解读', link: '/knowledge/js102' },
                        {
                            text: 'JavaScript 的对象与继承',
                            link: '/knowledge/js103',
                        },
                        {
                            text: 'JavaScript 异步与 Promise',
                            link: '/knowledge/js104',
                        },
                        { text: 'JavaScript 正则理解', link: '/knowledge/js105' },
                        {
                            text: '周下载量超1亿的库是如何判断JS类型的？',
                            link: '/knowledge/js106',
                        },
                        { text: 'JavaScript Symbol 解读', link: '/knowledge/js107' },
                        { text: '使用 npm link 调试包', link: '/knowledge/js108' },
                        { text: '可选链运算符', link: '/knowledge/js109' },
                        { text: 'JS try catch 与 return 的陷阱', link: '/knowledge/js110' },
                        { text: 'CommonJS require 循环依赖', link: '/knowledge/js111' },
                    ],
                }
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
