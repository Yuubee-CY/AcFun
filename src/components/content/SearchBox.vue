<template>
  <div id="search-box" class="search-box">
    <div class="form">
      <input
        type="text"
        placeholder="梦想演唱会招募令，AVUP冲刺 登舞台！"
        id="search-text"
        value autocomplete="off"
        @focus="searchResultShow"
        @blur="searchResultShowOff"
        data-url="">
      <button id="search-btn" class="search-btn">
        <i class="icon icon-search">
        </i>
      </button>
      <div class="search-result" v-if="searchResultFlag">
        <div class="rec">
          <div class="search-history-box">
            <div class="search-history-tool clear-fix">
              <p class="fl">历史记录</p>
              <p class="clear-history fr">清除历史</p>
            </div>
            <div class="search-history-body clear-fix">
              <a :href="item.hrefUrl"
                 target="_blank"
                 v-for="item in searchHistoryData">
                {{ item.title }}
              </a>
            </div>
          </div>
          <div class="hot-search">今日热搜</div>
          <ul>
            <li v-for="item in searchHotItem" :class="item.searchHotItemClassName">
              <a :href="item.hrefUrl" target="_blank">
                <span class="num">{{ item.num }}</span>
                <span class="ranking-key"> {{ item.rankingKey }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      searchResultFlag: false,
      searchHistoryData: this.$store.state.searchData.searchHistoryData,
      searchHotItem: this.$store.state.searchData.searchHotItem
    }
  },
  methods: {
    //用于显示/隐藏搜索栏结果
    searchResultShow() {
      this.searchResultFlag = true
    },
    //设置搜索结果框延迟关闭
    searchResultShowOff() {
      clearTimeout(time)
      const time = setTimeout(() => {
        this.searchResultFlag = false
      }, 250)
      // console.log(this.$refs.searchResult.className += ' searchResultShowOff')
    },
    //鼠标经过header-guide图标时，更改图标状态
    guideIconOver(e) {
      e.target.childNodes.forEach((item, index) => {
        switch (item.id) {
          case 'iconMessage' :
            item.src = this.$store.state.headerGuide.headerGuideItemMsg.iconUrlHover
            break;
          case 'iconHistory' :
            item.src = this.$store.state.headerGuide.headerGuideItemHistory.iconUrlHover
            break;
          case 'iconCollect' :
            item.src = this.$store.state.headerGuide.headerGuideItemCollect.iconUrlHover
            break;
          case 'iconCreative' :
            item.src = this.$store.state.headerGuide.headerGuideItemCreative.iconUrlHover
            break;
        }
      })
    }
  }
}
</script>

<style scoped>

</style>