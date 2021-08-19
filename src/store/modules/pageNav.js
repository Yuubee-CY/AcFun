const pageNav = {
  state: () => ({
    firstItem: [
      {
        title: '首页',
        aHrefUrl: '/'
      },
      {
        title: 'AC正义',
        aHrefUrl: "javascript:;",
        secondContainerShow: true,
        secondItem: [
          {
            title: '中国日报',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '环球时报',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '小央视频',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '中国网',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '法制进行时',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '浙样红TV',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '新青年工作室',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '新华社现场云',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '快手',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '人民咨询',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'AC正义展览区',
            aHrefUrl: 'javascript:;'
          },
        ]
      },
      {
        title: '番剧',
        aHrefUrl: "javascript:;",
        secondContainerShow: true,
        secondItem: [
          {
            title: '番剧列表',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'TV动画',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '剧场动画',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '国产动画',
            aHrefUrl: 'javascript:;'
          },
        ]
      },
      {
        title: '动画',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '动画综合',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '短篇动画',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'MAD·AMV',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'MMD·3D',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '虚拟偶像',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '动画资讯',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'COSPLAY·声优',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '布袋·特摄',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '番剧二创',
            aHrefUrl: 'javascript:;'
          },
        ]
      },
      {
        title: '娱乐',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '搞笑',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '鬼畜调教',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '娱乐圈',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '生活',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '生活日常',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '萌宠',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '美食',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '旅行',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '手工·绘画',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '美妆·造型',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '音乐',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '原唱·翻唱',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '演奏·乐器',
            aHrefUrl: 'javascript:;'
          },
          {
            title: 'Vocaloid',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '综合音乐·现场',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '音乐选集',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '舞蹈·偶像',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '宅舞',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '综合舞蹈',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '偶像',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '中国舞',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '游戏',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '我的世界',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '王者荣耀',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '英雄联盟',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '电竞赛事',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '网络游戏',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '主机单机',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '手机游戏',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '桌游卡牌',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '科技',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '手办模玩',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '科技制造',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '人文科普',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '汽车',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '数码',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '演讲·公开课',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '广告',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '影视',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '放映厅',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '预告·花絮',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '电影杂谈',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '剧透社',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '综艺Show',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '纪实·短片',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '体育',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '综合体育',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '足球',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '篮球',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '搏击健身',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '极限竞速  ',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '鱼塘',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '普法安全',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '国防军事',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '历史',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '新鲜事·正能量',
            aHrefUrl: 'javascript:;'
          }
        ]
      },
      {
        title: '文章',
        aHrefUrl: 'javascript:;',
        secondContainerShow: true,
        secondItem: [
          {
            title: '二次元画师',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '综合',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '生活情感',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '游戏',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '动漫文化',
            aHrefUrl: 'javascript:;'
          },
          {
            title: '漫画·文学',
            aHrefUrl: 'javascript:;'
          },
        ]
      },
      {
        title: '直播',
        aHrefUrl: 'javascript:;'
      },
      {
        title: '全站排行榜',
        aHrefUrl: 'javascript:;',
        rankClassName: 'nav-rank'
      }
    ]
  }),
  mutations: {},
  actions: {},
  getters: {}
}
export default pageNav