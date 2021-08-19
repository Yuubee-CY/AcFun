import {createStore} from 'vuex'
import searchData from "./modules/searchData";
import headerGuide from "./modules/headerGuide";
import footerNav from "./modules/footerNav";
import pageNav from "./modules/pageNav";
import swiperItem from "@/store/modules/swiperItem";
export default createStore({
  state: {
    footerNavCount: 0,
  },
  mutations: {
    addFooterNavCount(state){
      state.footerNavCount++
    }
  },
  actions: {},
  modules: {
    searchData: searchData,
    headerGuide: headerGuide,
    footerNav: footerNav,
    pageNav: pageNav,
    swiperItem: swiperItem
  }
})

