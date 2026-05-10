export default [
    { text: '首頁', link: '/zh-HK/',activeMatch: '^/zh-HK/?$' },
    { text: '客製化之旅', link: '/zh-HK/基础定制/键盘内胆',activeMatch: '/zh-HK/基础定制' },

    { text: '套件-点心102',
        items: [
      { text: '基本配置', link: '/zh-HK/HAWKZ-dim-sum-102/基本配置' },
      { text: 'Vial改键', link: '/zh-HK/HAWKZ-dim-sum-102/Vial' },
      { text: '说明书', link: '/zh-HK/HAWKZ-dim-sum-102/说明书' }
    ]
    
        ,activeMatch: '//HAWKZ-dim-sum-102/基础配置'}, // 指向 zh-CN/基础定制/键盘内胆.md
   //  { text: '測試', link: '/测试',activeMatch: '/测试' }

];