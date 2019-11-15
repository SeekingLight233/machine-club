<template>
	<view @tap="toDetail">
		<view class="radius shadow shadow bg-white my-top">
			<view class="flex  mb-sm container-card">
				<view class="flex-twice  padding-sm  radius ">
					<view class="">
						<text class="title">
							{{title}}
						</text>
					</view>			
				</view>
				<view class="flex-sub  padding-sm  radius right">
						<image class="image2" :src="img" mode="scaleToFill"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		name: "news-card",
		props: ["title", "img", "link"],
		data() {
			return {};
		}
	}
</script>

<style scoped>
	.container-card {
		height: 95px;
		/* border: red solid 1px; */
	}

	.left {
		/* background-color: #39B54A; */
	}

	.right {
		/* background-color: #5E00FF; */
	}
	
	.title {
		font-size: 32rpx;
		text-align: left;
		
	}
	.center{
		display: flex;
		justify-content: center;
		align-item: center;
		/* padding-left: 20rpx; */
	}
	.image2{
		  width: 100%;
		  height: 100%;
		  
	}
	.my-top{
		margin-top: 5px;
	}
	
</style>
