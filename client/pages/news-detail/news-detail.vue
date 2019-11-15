<template>
	<view>
		<web-view :src="link"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				link: "can u hear me????"
			}
		},
		methods: {},
		created() {
			// this.link = this.$store.state.link;
			console.log("这是created里面")
			console.log(this.link);
		},
		onLoad(option) {
			console.log("这是onload里面");
			console.log(this.link);
			
			if(option.link){
				//如果用户是从转发页面进入的，就将传进来的link放到link中
				console.log("这是opention.link,,"+option.link)
				let url = decodeURIComponent(option.link);
				this.link = url;
				console.log("这是里面的,"+ this.link);
			}else{
				//正常情况点击进入
				this.link = this.$store.state.link;
			}	
			
		},
		onShareAppMessage(res) {
			let url = encodeURIComponent(this.$store.state.link);
			console.log(url);
			return {
				title: this.$store.state.title,
				imageUrl: this.$store.state.imgsrc,
				path: '/pages/news-detail/news-detail?link='+url,
			}
		}
	}
</script>

<style>

</style>
