import { defineConfig } from 'vitepress'

const siteUrl = 'https://52mpzw-gif.github.io'
const siteBase = '/wenrugou-docs/'
const siteName = '稳如狗加速器'
const siteDescription = '稳如狗官方文档'

function pageUrl(page: string) {
  const path =
    page === 'index.md'
      ? siteBase
      : `${siteBase}${page.replace(/(^|\/)index\.md$/, '').replace(/\.md$/, '/')}`

  return new URL(path, siteUrl).href
}

export default defineConfig({
  title: siteName,
  description: siteDescription,
  base: siteBase,

  transformHead({ page, pageData, title, description }) {
    const url = pageUrl(page)
    const pageTitle = pageData.frontmatter.title || title || siteName
    const pageDescription =
      pageData.frontmatter.description || description || siteDescription

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: page === 'index.md' ? 'website' : 'article' }],
      ['meta', { property: 'og:site_name', content: siteName }],
      ['meta', { property: 'og:locale', content: 'zh_CN' }],
      ['meta', { property: 'og:title', content: pageTitle }],
      ['meta', { property: 'og:description', content: pageDescription }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: pageTitle }],
      ['meta', { name: 'twitter:description', content: pageDescription }]
    ]
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '新手入门', link: '/guide/windows-install' },
      { text: '使用建议', link: '/usage/choose-node' },
      { text: 'AI工具', link: '/ai/chatgpt' },
      { text: 'VPN指南', link: '/vpn/ai-tools-vpn-guide' },
      { text: '常见问题', link: '/faq/is-safe' }
    ],

    sidebar: [
      {
        text: '新手入门',
        items: [
          { text: 'Windows 下载安装教程', link: '/guide/windows-install' },
          { text: 'Android 下载安装教程', link: '/guide/android-install' },
          { text: '如何登录账号', link: '/guide/login' },
          { text: '第一次如何连接', link: '/guide/first-connect' },
          { text: '如何选择节点', link: '/guide/choose-node' },
          { text: '什么时候需要切换节点', link: '/guide/switch-node' }
        ]
      },
      {
        text: '使用建议',
        items: [
          { text: '如何选择节点？', link: '/usage/choose-node' },
          { text: '什么时候需要切换节点？', link: '/usage/when-switch-node' },
          { text: '为什么有时候速度会变慢？', link: '/usage/why-speed-slow' },
          { text: '使用 AI 工具应该选择哪个节点？', link: '/usage/ai-tools-node' },
          { text: '看视频应该选择哪个节点？', link: '/usage/video-node' }
        ]
      },
      {
        text: 'AI 工具访问指南',
        items: [
          { text: '如何稳定访问 ChatGPT？', link: '/ai/chatgpt' },
          { text: '如何稳定访问 Claude？', link: '/ai/claude' },
          { text: '如何稳定访问 Gemini？', link: '/ai/gemini' },
          { text: '如何稳定访问 Perplexity？', link: '/ai/perplexity' },
          { text: '使用 Cursor 应该选择哪个节点？', link: '/ai/cursor' },
          { text: '使用 GitHub Copilot 应该选择哪个节点？', link: '/ai/github-copilot' }
        ]
      },
      {
        text: 'VPN 与 AI 网络加速指南',
        items: [
          { text: 'AI 工具专用 VPN 怎么选？', link: '/vpn/ai-tools-vpn-guide' },
          { text: '稳定不掉线 VPN 推荐', link: '/vpn/stable-vpn-no-drop' },
          { text: 'VPN 经常断线是什么原因？', link: '/vpn/vpn-disconnect-reasons' },
          { text: 'VPN 和代理哪个好用？', link: '/vpn/vpn-vs-proxy-ai' },
          { text: '远程办公 VPN 推荐', link: '/vpn/remote-work-vpn' },
          { text: 'Cloudflare、自建、付费免费 VPN 对比', link: '/vpn/cloudflare-selfhost-paid-free' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '稳如狗安全吗？', link: '/faq/is-safe' },
          { text: '稳如狗会不会很复杂？', link: '/faq/is-complicated' },
          { text: '稳如狗适合小白用户吗？', link: '/faq/suitable-for-beginners' },
          { text: '稳如狗和普通代理工具有什么区别？', link: '/faq/difference-from-proxy' },
          { text: '连接失败怎么处理？', link: '/faq/connection-failed' },
          { text: '如何联系客服？', link: '/faq/contact-support' },
          { text: '账号无法登录怎么办？', link: '/faq/account-login' },
          { text: 'VIP 会员相关问题', link: '/faq/payment-vip' }
        ]
      },
      {
        text: '客服与故障处理',
        items: [
          { text: '如何联系客服？', link: '/support/contact' },
          { text: '连接失败排查指南', link: '/support/connection-failed' },
          { text: '速度慢怎么办？', link: '/support/slow-speed' },
          { text: 'Windows 杀毒软件误拦截怎么办？', link: '/support/windows-antivirus' },
          { text: '如何提交问题反馈？', link: '/support/feedback' }
        ]
      }
    ]
  }
})
