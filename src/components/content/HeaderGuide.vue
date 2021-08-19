<template>
  <ul id="header-guide" class="header-guide">
    <li class="guide-item" :class="item.liClassName" v-for="(item,index) in headerGuide" :key="item.liClassName">
      <a class="item" @mouseover="guideIconOver" @mouseleave="guideIconLeave" :class="item.aClassName"
         :href="item.headerGuideHref" target="_blank">
        {{item.GuideText}}
        <img :src="item.iconUrl" :id="item.iconCurrent" :class="item.iconLittle" alt="" v-if="item.iconShow">
      </a>
      <div class="guide-item-con"  :class="item.divClassName" v-if="item.guideItemConShow">
        <ul>
          <li v-for="(guideItem,guideKey) in item.guideItemList">
            <a :href="guideItem.hrefUrl">{{ guideItem.title }}</a>
          </li>
          <div :class="item.guideItemDiv" v-for="(item2,index) in this.guideItemListHistoryData">
            <h3 :class="item.guideItemH">{{item2[0].data}}</h3>
            <li :class="item.guideItemLi" v-for="item3 in item2[1].historyData">
              <a :href="item3.hrefUrl" :title="item3.VideoTitle">
                <i class="device computer"></i>
                <span class="video-title item-title">
                      {{item3.VideoTitle}}
                    </span>
                <span class="watch-progress">{{item3.progress}}</span>
              </a>
            </li>
          </div>
        </ul>
        <a href="javascript:;" class="more">查看更多</a>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: "HeaderGuide",
    data(){
      return{
        headerGuide: [
          this.$store.state.headerGuide.headerGuideItemMobile,
          this.$store.state.headerGuide.headerGuideItemUser,
          this.$store.state.headerGuide.headerGuideItemMsg,
          this.$store.state.headerGuide.headerGuideItemHistory,
          this.$store.state.headerGuide.headerGuideItemCollect,
          this.$store.state.headerGuide.headerGuideItemCreative,
          this.$store.state.headerGuide.headerGuideItemUpload,
        ],
        guideIconOverIf: true,
        guideItemListHistoryData: this.$store.state.headerGuide.headerGuideItemHistory.guideItemListHistory,
      }
    },
    methods:{
      //鼠标离开header-guide图标时，更改图标状态
      guideIconLeave(e) {
        e.target.childNodes.forEach((item, index) => {
          switch (item.id) {
            case 'iconMessage' :
              item.src = this.$store.state.headerGuide.headerGuideItemMsg.iconUrl
              break;
            case 'iconHistory' :
              item.src = this.$store.state.headerGuide.headerGuideItemHistory.iconUrl
              break;
            case 'iconCollect' :
              item.src = this.$store.state.headerGuide.headerGuideItemCollect.iconUrl
              break;
            case 'iconCreative' :
              item.src = this.$store.state.headerGuide.headerGuideItemCreative.iconUrl
              break;
          }
        })
      },
      // 鼠标经过header-guide图标时，更改图标状态
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
      },
    }
  }
</script>

<style scoped>
</style>