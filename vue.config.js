module.exports = {
  publicPath: './',
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录  默认为‘’没有单独目录js/css/img在根目录中。
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
    },
    performance: {
      hints: 'warning',
      //入口起点的最大体积 整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      //生成文件的最大体积 整数类型（以字节为单位 300k）
      maxAssetSize: 30000000,
    }
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "AcFun弹幕视频网 - 汤嘚、晨宇嘚 认真你就输啦 (・ω・)ノ- ( ゜- ゜)つロ";
        // args[0].title = "AcFun弹幕视频网 - 汤嘚、晨宇嘚";
        return args;
      })
  },
  devServer: {
    // 配置多个代理
    proxy: {
      "/api": {
        target: "https://www.acfun.cn", // 要访问的接口域名
        ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "" //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        }
      }
    }

  }


}