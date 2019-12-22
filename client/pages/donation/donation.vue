<template>
	<view>
		<view class="center" @longpress="donation()">
			<image src="https://www.jixieclub.com:3002/images/donation.jpg" mode="" class="myimg"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			donation(){
				uni.previewImage({
					urls:"https://www.jixieclub.com:3002/images/donation.jpg"
				})
				//#ifdef MP-WEIXIN
				wx.previewImage({
				  current: 'https://www.jixieclub.com:3002/images/donation.jpg', // 当前显示图片的http链接
				  urls: ["https://www.jixieclub.com:3002/images/donation.jpg"] // 需要预览的图片http链接列表
				})
				//#endif
			}
		}
	}
</script>

<style>
.myimg{
	width: 300px;
	height: 405px;
}
.center{
	margin-left: 10%;
	margin-top: 20%;
}
</style>
