<template>
	<view>
		<view class="example-body cu-list menu card-menu margin-top shadow-lg">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-black"></text> " {{findtext}} "的搜索结果
				</view>
			</view>
		</view>
		<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1">
			<view v-for="(item,index) in list" :key="index" @tap="toDetail(item.link,item.title,item.imgsrc)">
				<news-card :title="item.title" :img="item.imgsrc" :link="item.link"></news-card>
			</view>
			<view class='noCard' v-if="list.length===0">
				
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import newsCard from '../../components/news-card/news-card.vue'
	export default {
		data() {
			return {
				findtext:this.$store.state.find_text,
				list:[
					
				]
			}
		},
		methods: {
			toDetail(link,title,imgsrc) {
				//#ifdef MP-WEIXIN
				//将数据发送到Vuex中，方便进行转发
				this.$store.state.link = link;
				this.$store.state.title = title;
				this.$store.state.imgsrc = imgsrc;
				
				console.log(this.$store.state.link)
				uni.navigateTo({
					url: '../news-detail/news-detail'
				})
				//#endif
			
				//#ifdef H5
				window.open(link);
				//#endif
			}
		},
		components: {
			newsCard
		},
		created(){
			let keywords = this.$store.state.find_text;
			uni.request({
			    url: 'https://www.jixieclub.com:8443/search?title='+keywords, //仅为示例，并非真实接口地址。
			    success: (res) => {
			        console.log(res.data);
					this.list = res.data;
			    }
			});
		}
	}
</script>

<style>

</style>
