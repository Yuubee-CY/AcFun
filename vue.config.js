module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@': 'src'
        'assets': '@/assets',
        'commonJs': '@/commonJs',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  },
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        // args[0].title = "AcFun弹幕视频网 - 认真你就输啦 (・ω・)ノ- ( ゜- ゜)つロ";
        args[0].title = "AcFun弹幕视频网 - 汤嘚、晨宇嘚";
        return args;
      })
  }
}