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
          <span>{{ loginInterval }}</span>
          秒后秒后自动跳转至首页...
        </p>
      </div>
      <div id="login-switch" @click="changeAccount"></div>
      <h3 id="login-header" class="not-select">手机扫码登录</h3>
      <div class="login-cont">
        <div id="prompt-tips" class="prompt-info" ref="promptInfo"></div>
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
                         @blur="changeAreaUnameBlur($event)"
                         @focus="changeAreaUnameFocus($event)"
                         v-model="formLogin"
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
                         @blur="changeAreaPwdBlur($event)"
                         @focus="changeAreaPwdFocus($event)"
                         type="password"
                         autocomplete="off"
                         data-name="密码"
                         placeholder="请输入密码"
                         required="required"
                         data-length="6,32">
                  <span class="clear-fix"></span>
                </div>
                <div class="area-tool">
                  <div @click="loginVerify($event)" class="btn-login">登 录</div>
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
        <a id="login-account-switch" @click="showLogin" v-if="showLoginSwitch">帐号登录</a>
        <a href="javascript:;" target="_blank" id="login-account-switch" v-else="showLoginSwitch">忘记密码</a>
        <a href="javascript:;" target="_blank" class="register">立即注册</a>
      </div>
    </div>
  </div>
  <div id="g-toast">
  </div>
</template>

<script>
import Code from "qrcodejs2"
import $ from 'jquery'

export default {
  name: "LoginContainer",
  data() {
    return {
      showLoginSwitch: true,
      srcUrl: "",
      code_data: "您好！这是爷的二维码，但他还没实现动态随机。",
      thumbImg: require("../../assets/img/LoginBodyImg/avatar.jpg"),
      formLogin: '',
      loginInterval: 3
    }
  },
  methods: {
    changeAccount() {
      const login = this.$refs.login
      const loginHeader = login.childNodes.item(2)
      let promptInfo = this.$refs.promptInfo
      if (login.className == '') {
        login.className += 'login-account'
        loginHeader.innerHTML = '账号登录'
        this.showLoginSwitch = false
        if(promptInfo.innerHTML.trim() == ''){
          promptInfo.style.display = 'none'
        }else {
          promptInfo.style.display = 'block'
        }
      } else {
        login.className = ''
        loginHeader.innerHTML = '手机扫码登录'
        this.showLoginSwitch = true
        promptInfo.style.display = 'none'
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
    },
    showLogin() {
      const login = this.$refs.login
      const loginHeader = login.childNodes.item(2)
      if (login.className == '') {
        login.className += 'login-account'
        loginHeader.innerHTML = '账号登录'
        this.showLoginSwitch = false
      }
    },
    changeAreaUnameBlur(e){
      let nextAreaInput = e.target.parentNode.nextSibling.childNodes[1]
      let patrn = /\s*/;
      // if (){
      //   console.log('有空格')
      // }
      let promptInfo = this.$refs.promptInfo
      if(e.target.value.trim() == '' ){
        e.target.parentNode.style.border = '1px solid #ff0000'
        promptInfo.innerHTML = '用户名不能为空。'
        promptInfo.style.display = 'block'
      }else {
        e.target.parentNode.style.border = '1px solid #ddd'
        promptInfo.innerHTML = ''
        promptInfo.style.display = 'none'
        if(nextAreaInput.value.trim() == ''){

          promptInfo.innerHTML = '密码长度应为6至32个字符之间！'
          promptInfo.style.display = 'block'
        }
      }
    },
    changeAreaUnameFocus(e){
      e.target.parentNode.style.border = '1px solid #ddd'
      let nextAreaInput = e.target.parentNode.nextSibling.childNodes[1]
      let promptInfo = this.$refs.promptInfo
      if(e.target.value.trim() == '' && nextAreaInput.value.trim() != ''){
        promptInfo.innerHTML = '用户名不能为空。'
        promptInfo.style.display = 'block'
      }
    },
    changeAreaPwdBlur(e){
      let promptInfo = this.$refs.promptInfo
      if(e.target.value.trim() == '' ){
        e.target.parentNode.style.border = '1px solid #ff0000'
        promptInfo.innerHTML = '密码长度应为6至32个字符之间！'
        promptInfo.style.display = 'block'
      }else {
        e.target.parentNode.style.border = '1px solid #ddd'
        promptInfo.innerHTML = ''
        promptInfo.style.display = 'none'
      }
    },
    changeAreaPwdFocus(e){
      e.target.parentNode.style.border = '1px solid #ddd'
    },
    loginVerify(e){
      let uname = e.target.parentNode.parentNode.children[0].children[1]
      let pwd = e.target.parentNode.parentNode.children[1].children[1]
      let promptInfo = this.$refs.promptInfo
      if(uname.value.trim() == ''){
        promptInfo.innerHTML = '用户名不能为空。'
        promptInfo.style.display = 'block'
        uname.parentNode.style.border = '1px solid #ff0000'
      }
      if(uname.value == '123' && pwd.value == '02'){
        $('#login').animate({
          opacity: 0,
        },800,() => {
          $('.after-login').siblings().each((index,item) => {
            item.style.display = 'none'
          })
          $('.after-login')[0].style.display = 'block'
          $('#login').animate({
            opacity: 1
          },800,() => {
            clearTimeout(timer)
            this.loginInterval -= 1
            let interval = setInterval(() => {
              this.loginInterval -= 1
            },1000)
            let timer = setTimeout(() => {
              this.$router.push('index')
              clearInterval(interval)
            },2000)
          })
        })
      }
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