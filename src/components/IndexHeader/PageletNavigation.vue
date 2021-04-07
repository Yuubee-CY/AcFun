<template>
  <div id="pagelet-navigation">
    <div class="top-nav">
      <ul class="first-container wp" ref="firstContainer">
        <li class="first-item" @mouseover="secondShow($event)" @mouseout="secondHidden($event)"
            v-for="item in this.pageNavDate" :class="item.rankClassName">
          <a class="first-link" :href="item.aHrefUrl">{{ item.title }}</a>
          <div class="second-container" @mouseover="secondOverState($event)" @mousemove="secondMoveState($event)" ref="secondContainer"
               v-if="item.secondContainerShow">
            <ul>
              <li class="second-item" v-for="secondItem in item.secondItem">
                <a :href="secondItem.aHrefUrl" class="second-link">{{ secondItem.title }}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PpageletNavigation",
  data() {
    return {
      pageNavDate: this.$store.state.pageNav.firstItem,
      secondShowState: false
    }
  },
  methods: {
    secondShow(e) {
    },
    secondHidden(e) {
    },
    secondOverState(e) {
    },
    secondMoveState(e){
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/PageletNavigation.css";
</style>