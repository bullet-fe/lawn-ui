module.exports = {
    title: 'lawn-ui',
    lang: 'zh-CN',
    description: '羽量级vue3组件库，基于vite开发',
    themeConfig: {
        nav: [
            { text: '开始', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/bullet-fe/lawn-ui' },
        ],
        sidebar:{
            '/': [
                {
                    text: '快速开始',
                    link: '/guide/'
                },
                {
                    text: '组件',
                    children: [
                        {
                            text: 'popup',
                            link: '/guide/popup'
                          },
                    ]
                }
            ]
        }
    }
}
