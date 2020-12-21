const headerGuide = {
  state: () => ({
    //LoginNav-Data>headerGuide图标的各种属性
    headerGuideItemMobile: {
      liClassName: 'download-app',
      GuideText: '下载客户端'
    },
    headerGuideItemUser: {
      liClassName: 'guide-user',
      GuideText: '登录/注册',
      iconShow: false,
    },
    headerGuideItemMsg: {
      liClassName: 'guide-msg',
      aClassName: ' icon icon-message',
      guideItemConShow: true,
      iconShow: true,
      divClassName: 'div-guide-msg',
      iconUrl: require('../../assets/img/LoginNavImg/icon_message.svg'),
      iconUrlHover: require('../../assets/img/LoginNavImg/icon_message_hover.svg'),
      iconCurrent: 'iconMessage',
      guideItemList: [
        {title: '动态', hrefUrl: 'javascript:;'},
        {title: '评论', hrefUrl: 'javascript:;'},
        {title: '赞', hrefUrl: 'javascript:;'},
        {title: '站内公告', hrefUrl: 'javascript:;'},
        {title: '系统通知', hrefUrl: 'javascript:;'},
        {title: '私信', hrefUrl: 'javascript:;'},
      ]
    },
    headerGuideItemHistory: {
      liClassName: 'guide-history',
      aClassName: ' icon icon-history',
      guideItemConShow: true,
      iconShow: true,
      divClassName: 'div-guide-history',
      iconUrl: require('../../assets/img/LoginNavImg/icon_history.svg'),
      iconUrlHover: require('../../assets/img/LoginNavImg/icon_history_hover.svg'),
      iconCurrent: 'iconHistory',
      guideItemDiv: 'dddShow',
      guideItemH: 'hhhShow',
      guideItemLi: 'lllShow',
      guideItemListHistory: {
        toDay: [
          {data: '今天'},
          {
            historyData: [
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【独家✮雾奈】这肉肉的大腿真是要疯了！So Crazy',
                progress: '观看至00:55'
              },
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【南下】做好准备了吗~K/DA《THE BADDEST》',
                progress: '刚刚开始'
              }
            ]
          },
        ],
        yesterday: [
          {data: '昨天'},
          {
            historyData:[
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【独家★毛巾】恋之魔法   快乐魔法攻击！biubiubiubiu~',
                progress: '观看至03:16'
              },
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【小依】Nightglow（崩坏3）【即兴】',
                progress: '刚刚开始'
              },
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【独家★毛巾】sweets parade要一起吃甜食吗~妖狐×僕SS',
                progress: '观看至05:02'
              }
            ]
          }
        ],
        earlier: [
          {data: '更早'},
          {
            historyData:[
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '【AC娘】新曲《小酩酊》邀你共饮，一键买醉！',
                progress: '刚刚开始'
              },
              {
                hrefUrl: 'javascript:;',
                VideoTitle: '想做你冬天的阳光~summertime【阿呆】',
                progress: '观看至01:52'
              }
            ]
          }

        ]
      }
    },
    headerGuideItemCollect: {
      liClassName: 'guide-collect',
      aClassName: ' icon icon-collect',
      guideItemConShow: false,
      iconShow: true,
      iconUrl: require('../../assets/img/LoginNavImg/icon_collect.svg'),
      iconUrlHover: require('../../assets/img/LoginNavImg/icon_collect_hover.svg'),
      iconCurrent: 'iconCollect'
    },
    headerGuideItemCreative: {
      liClassName: 'guide-creative',
      aClassName: ' icon icon-creative',
      guideItemConShow: true,
      iconShow: true,
      divClassName: 'div-guide-creative',
      iconUrl: require('../../assets/img/LoginNavImg/icon_creative.svg'),
      iconUrlHover: require('../../assets/img/LoginNavImg/icon_creative_hover.svg'),
      iconLittle: 'iconLittle',
      iconCurrent: 'iconCreative',
      guideItemList: [
        {title: '稿件管理', hrefUrl: 'javascript:;'},
        {title: '数据中心 ', hrefUrl: 'javascript:;'},
        {title: '互动管理', hrefUrl: 'javascript:;'},
        {title: '阿普学院', hrefUrl: 'javascript:;'}
      ]
    },
    headerGuideItemUpload: {
      liClassName: 'guide-upload',
      aClassName: ' icon icon-upload',
      guideItemConShow: true,
      iconShow: true,
      divClassName: 'div-guide-upload',
      iconUrl: require('../../assets/img/LoginNavImg/icon_upload.svg'),
      iconUrlHover: require('../../assets/img/LoginNavImg/icon_upload.svg'),
      iconCurrent: 'iconUpload',
      guideItemList: [
        {title: '视频投稿', hrefUrl: 'javascript:;'},
        {title: '文章投稿 ', hrefUrl: 'javascript:;'},
        {title: '直播开播', hrefUrl: 'javascript:;'}
      ]
    }
  }),
  mutations: {  },
  actions: {  },
  getters: {  }
}
export default headerGuide