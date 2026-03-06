export default [
    { text: '首页', link: '/zh-CN/',activeMatch: '^/zh-CN/?$' }, // 指向 zh-CN/index.md
    { text: '客制化之旅', link: '/zh-CN/基础定制/键盘内胆',activeMatch: '^/zh-CN/基础定制/'}, // 指向 zh-CN/基础定制/键盘内胆.md

    { text: '套件-果冻102',
        items: [
      { text: '基本配置', link: '/zh-CN/HAWKZ-jelly102-CN/基本配置' },
      { text: 'Vial改键', link: '/zh-CN/HAWKZ-jelly102-CN/Vial' },
      { text: '说明书', link: '/zh-CN/HAWKZ-jelly102-CN/说明书' }
    ]
    
        ,activeMatch: '//HAWKZ-jelly102-CN/基础配置'}, // 指向 zh-CN/基础定制/键盘内胆.md
    
    
    //{ text: '测试', link: '/测试',activeMatch: '/测试' }
];