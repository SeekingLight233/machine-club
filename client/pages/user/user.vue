<template>
	<view>
		<view id="myimage">
			<view class="cu-avatar xl round margin-left" style="background-image:url(https://www.jixieclub.com:3002/images/jixieclub.jpg);" id="center"></view>
		</view>
		<view class='cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-warp bg-white'>
			<view class='cu-item arrow shadow'    @click="donation()">
				捐赠
			</view>
			<view class='cu-item arrow shadow' id="mymargin"   @click="join()">
				合作
			</view>
		</view>
		<view class='cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-warp bg-white'>
			<view class='cu-item arrow ' id="mymargin"   @click="skip()">
				关于 “机械学霸”
			</view>
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
				uni.navigateTo({
					url:"../donation/donation"
				})
			},
			join(){
				uni.navigateTo({
					url:"../join/join"
				})
			},
			skip(){
				uni.navigateTo({
					url:"../about/about"
				})
			}
		}
	}
</script>

<style>
	#myimage {
		background: url(https://www.jixieclub.com:3002/images/user.jpg);
		width: 100%;
		height: 250px;
		background-size: contain;
	}
	#center{
		margin: 72px 137px;
		width: 100px;
		height: 100px;
	}
	#mymargin{
		border-top: #ebebeb solid 2px;
	}
	
</style>
