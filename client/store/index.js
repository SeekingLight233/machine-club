import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
	state:{
		total:0,
		link:"",
		title:"",
		imgsrc:"",
		cateindex:0,
		catetitle:"",
		cate:"",
		tool_link:"",
		find_text:"",
		search_list:[]
	},
});
export default store;
