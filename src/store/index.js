import {createStore} from 'vuex'
import searchData from "./modules/searchData";
import headerGuide from "./modules/headerGuide";
import footerNav from "./modules/footerNav";
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
    footerNav: footerNav
  }
})

