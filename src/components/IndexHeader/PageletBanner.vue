<template>
  <div id="pagelet-banner">
    <div class="page-top-banner">
      <a :href="BannerHref" target="_blank" class="banner-pic"></a>
      <a :href="BannerHref" target="_blank" class="banner-pendant"></a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PageletBanner",
  data() {
    return {
      BannerPicImgUrl: [],
      BannerPendantImgUrl: [],
      BannerHref: []
    }
  },
  mounted() {
    let httpAC = "/api";

    async function req(httpAC) {
      return new Promise((resolve, reject) => {
        axios.get(httpAC).then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      })
    }

    class BannerPicInfo {
      getBannerPicImgUrl(res) {
        let reg = /background-image: url\(\'(.*?)\'\);/igs
        return reg.exec(res.data)[1]
      }

      getBannerPendantImgUrl(res) {
        let reg = /class=\\"banner-pendant\\" style='background-image:url\(\\"(.*?)\\"\)'>/igs
        return reg.exec(res.data)[1]
      }

      getBannerHref(res) {
        let reg = /class=\\"page-top-banner\\"><a href=\\"(.*?)\\"/igs
        return reg.exec(res.data)[1]
      }
    }

    let BannerPicInfoObj = new BannerPicInfo();
    axios.all([req(httpAC)]).then(
      axios.spread((res) => {
        this.BannerHref = BannerPicInfoObj.getBannerHref(res)
        let banner = document.getElementById('pagelet-banner')
        let arrDom = []
        banner.querySelectorAll('a').forEach((dom) => {
          arrDom.push(dom)
        })
        arrDom[0].style.background="url("+ BannerPicInfoObj.getBannerPicImgUrl(res)+") 50% no-repeat"
        arrDom[1].style.background="url("+ BannerPicInfoObj.getBannerPendantImgUrl(res)+")  50% no-repeat"
      })
    )

  }
}


</script>

<style scoped>

</style>
