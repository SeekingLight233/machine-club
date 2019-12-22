<template>
	<view>
		<scroll-view scroll-y>

			<view class="flex my-margin-top">
				<view class=" radius shadow-warp bg-white my-margin" @click="preview('scan01.jpg')">
					<view class="flex-sub    radius">
						<image src="https://www.jixieclub.com:3002/images/scan01.jpg" mode="" class="myimg"></image>
					</view>
					<view class="solid-bottom text-sm text-center margin-bottom-sm">
						<text class="text-grey">机械学霸</text>
					</view>
				</view>
				<view class="  radius shadow-warp bg-white" @click="preview('scan02.jpg')">
					<view class="flex-sub    radius">
						<image src="https://www.jixieclub.com:3002/images/scan02.jpg" mode="" class="myimg"></image>
					</view>
					<view class="solid-bottom text-sm text-center margin-bottom-sm">
						<text class="text-grey">机械百宝箱</text>
					</view>
				</view>
			</view>
			<view class="flex my-margin-top">
				<view class=" radius shadow-warp bg-white my-margin" @click="preview('scan03.jpg')">
					<view class="flex-sub    radius">
						<image src="https://www.jixieclub.com:3002/images/scan03.jpg" mode="" class="myimg"></image>
					</view>
					<view class="solid-bottom text-sm text-center margin-bottom-sm">
						<text class="text-grey">机械创新设计研究中心</text>
					</view>
				</view>
				<view class="  radius shadow-warp bg-white" v-if="false" >
					<view class="flex-sub    radius">
						<image src="" mode="" class="myimg"></image>
					</view>
					<view class="solid-bottom text-sm text-center margin-bottom-sm">
						<text class="text-grey">机械百宝箱</text>
					</view>
				</view>
			</view>

			<view>

			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			preview(file){
				//#ifdef MP-WEIXIN
				wx.previewImage({
				  current: 'https://www.jixieclub.com:3002/images/'+file, // 当前显示图片的http链接
				  urls: ["https://www.jixieclub.com:3002/images/"+file] // 需要预览的图片http链接列表
				})
				//#endif
			}
		}
	}
</script>

<style>
	.myimg {
		width: 150px;
		height: 150px;
	}

	.info {}

	.mytext {
		margin-left: 20px;
		margin-bottom: 20px;
		display: block;
	}

	.my-margin {
		margin-left: 25px;
		margin-right: 25px;
	}

	.my-margin-top {
		margin-top: 50px;
		margin-bottom: 10px;
	}
</style>
