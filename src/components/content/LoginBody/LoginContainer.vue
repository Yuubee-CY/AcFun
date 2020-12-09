<template>
  <div id="login-container">
    <div id="login" ref="login">
      <div class="after-login">
        <a class="thumb">
          <img :src="thumbImg">
        </a>
        <p class="welcome">
          欢迎回来
          <br>
          <span class="username"></span>
        </p>
        <p class="notice">
          <span>3</span>
          秒后秒后自动跳转至首页...
        </p>
      </div>
      <div id="login-switch" @click="changeAccount"></div>
      <h3 id="login-header" class="not-select">手机扫码登录</h3>
      <div class="login-cont">
        <div id="prompt-tips" class="prompt-info"></div>
        <div class="login-box">
          <div id="qrcode" class="login-left">
            <div id="code" class="not-select" ref="code"></div>
            <div class="status ">
              <div class="status-bg"></div>
              <div class="status-info">二维码已失效</div>
              <div class="refresh-btn">请点击刷新</div>
              <div class="scan-success">
                <div class="success-msg">扫码成功！</div>
                <div class="success-tag">请在手机上进行授权操作</div>
              </div>
              <div class="fail-msg">登录失败</div>
            </div>
          </div>
          <div class="login-right"></div>
          <span class="clear-fix"></span>
          <div class="login-tips">打开AcFun手机APP进入“个人中心”扫码登录</div>
          <a href="https://www.acfun.cn/app/" target="_blank" class="app-download">点击下载客户端</a>
        </div>

        <div id="area-login">
          <div class="block r">
            <div class="area-login">
              <div id="form-login" class="form">
                <div class="area">
                  <i class="inp-icon icon icon-user"></i>
                  <input id="ipt-account-login"
                         class="name l"
                         type="text"
                         spellcheck="false"
                         autocomplete="off"
                         data-name="账号"
                         placeholder="请输入手机号/邮箱"
                         required="required">
                  <span class="clear-fix"></span>
                </div>
                <div class="area">
                  <i class="inp-icon icon icon-lock"></i>
                  <input id="ipt-pwd-login"
                         type="password"
                         autocomplete="off"
                         data-name="密码"
                         placeholder="请输入密码"
                         required="required"
                         data-length="6,32">
                  <span class="clear-fix"></span>
                </div>
                <div class="area-tool">
                  <div class="btn-login">登 录</div>
                </div>
              </div>
            </div>
          </div>
          <span class="clear-fix"></span>
        </div>
        <span class="clear-fix"></span>
      </div>
      <div class="login-options clearfix">
        <a class="login-help" target="_blank" href="javascript:;">帮助手册</a>
        <a href="javascript:;" target="_blank" id="login-account-switch">帐号登录</a>
        <a href="javascript:;" target="_blank" class="register">立即注册</a>
      </div>
    </div>
  </div>
  <div id="g-toast">
  </div>
</template>

<script>
import Code from "qrcodejs2"

export default {
  name: "LoginContainer",
  data() {
    return {
      srcUrl: "",
      code_data: "您好！这是爷的二维码，但他还没实现动态随机。",
      thumbImg: require("../../../assets/img/LoginBodyImg/avatar.jpg")
    }
  },
  methods: {
    changeAccount(e) {
      const login = this.$refs.login
      const loginHeader = login.childNodes.item(2)
      if (login.className == '') {
        login.className += 'login-account'
        loginHeader.innerHTML = '账号登录'
      } else {
        login.className = ''
        loginHeader.innerHTML = '手机扫码登录'
      }
    },
    // 生成二维码
    qrcode() {
      let that = this;
      let qrcode = new Code('code', {
        width: 144,
        height: 144,        // 高度
        text: this.code_data,   // 二维码内容
        // render: 'canvas' ,   // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f',   // 背景色
        // foreground: '#ff0'    // 前景色
        correctLevel: Code.CorrectLevel.H
      })
      this.$refs.code.title = ''
      setTimeout(() => {
        var mycanvas1 = document.getElementsByTagName('canvas')[0];
        //将转换后的img标签插入到html中
        var img = this.convertCanvasToImage(mycanvas1);
      }, 300)
    },
    convertCanvasToImage(canvas) {
      //新Image对象，可以理解为DOM
      var image = new Image();
      // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
      // 指定格式 PNG
      // image.src = canvas.toDataURL("image/png")
      this.srcUrl = canvas.toDataURL("image/png")
      return image;
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.qrcode();
    })
  }
}
</script>

<style scoped>

</style>