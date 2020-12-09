const footerNav = {
  state: () => ({
    footerNavBody: {
      footerCooperation: {
        footerNavDivClassName: 'item-cooperation',
        title: '合作',
        footerNav: [
          {footerNavItem: '关于我们'},
          {footerNavItem: '联系我们'},
        ]
      },
      footerRecruit: {
        footerNavDivClassName: 'item-recruit',
        title: '招聘',
        footerNav: [
          {footerNavItem: '社会招聘'},
          {footerNavItem: '实习招聘'},
        ]
      },
      footerOfficial: {
        footerNavDivClassName: 'item-official',
        title: '官方',
        footerNav: [
          {footerNavItem: '新浪微博'},
          {footerNavItem: '官方网店'},
          {footerNavItem: '微信公众号', ItemClassName: 'i-o-wx'},
          {footerNavItem: 'UP主学院'},
        ]
      },
      footerDownload: {
        footerNavDivClassName: 'item-download',
        title: '下载',
        footerNav: [
          {footerNavItem: '移动客户端', ItemClassName: 'new'},
          {footerNavItem: '直播/虚拟直播工具', ItemClassName: 'new'},
          {footerNavItem: 'AC娘表情包'},
        ]
      },
      footerFunction: {
        footerNavDivClassName: 'item-function',
        title: '友情链接',
        footerNav: [
          {footerNavItem: 'Acfun手机站'},
        ]
      },
      footerFeedback: {
        footerNavDivClassName: 'item-feedback',
        title: '反馈',
        footerNav: [
          {footerNavItem: '帮助中心'},
          {footerNavItem: '用户反馈'},
          {footerNavItem: '用户协议'},
          {footerNavItem: '隐私政策'},
          {footerNavItem: '侵权举报申诉'},
        ]
      }
    }
  }),
  mutations: {  },
  actions: {  },
  getters: {  }
}
export default footerNav