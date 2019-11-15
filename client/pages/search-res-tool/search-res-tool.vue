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
			<view class='cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg'>
				<view class='cu-item arrow' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index" @click="skip(item[1])">
					{{item[0]}}
					
				</view>
			</view>
			<view class='noCard' v-if="listItem.length===0">
				暂无信息
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				findtext:this.$store.state.find_text,
				listItem:[
					
				]
			}
		},
		methods: {
			skip(router) {
				console.log(router);
				this.$store.state.tool_link = router;
				uni.navigateTo({
					url: '../tools-detail/tools-detail'
				})
			},
		},
		created(){
			console.log(this.$store.state.search_list);
			this.listItem = this.$store.state.search_list;
		}
	}
</script>

<style>

</style>
