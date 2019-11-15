<template>
	<view>
		<view id="myimage">
			<view class="cu-avatar xl round margin-left" style="background-image:url(http://www.jixieclub.com:3002/images/jixieclub.jpg);"
			 id="center"></view>
		</view>
		<view id="father">
			<view class="solid-bottom text-lg padding self-center mywidth">
				<text class="text-black my-margin-left"> 这是一个提高你机械视野和逼格的平台！</text>
			</view>
			<view class="solid-bottom text-lg padding self-center mywidth">
				<text class="text-black">机械学霸郑重承诺：搞机，我们是认真的! </text>
			</view>
			<view class="solid-bottom text-lg padding self-center mywidth">
				<text class="text-black">设计不是闭门造车，机械更不是墨守成规!</text>
			</view>
		</view>
		
		<view id="footer">
			<view class=" text-sm footer-margin">
				<text class="text-grey">合作与反馈</text>
			</view>
			<view class=" text-sm padding">
				<text class="text-grey">WeChat:15294639085</text>
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

		}
	}
</script>

<style>
	#myimage {
		background: url(http://www.jixieclub.com:3002/images/user.jpg);
		width: 100%;
		height: 250px;
		background-size: contain;
	}

	#center {
		margin: 72px 137px;
		width: 100px;
		height: 100px;
	}

	#mymargin {
		border-top: #ebebeb solid 2px;
	}

	#my-text {
		text-align: justify;
		width: 90%;
	}

	#center1 {
		display: block;
		width: 80%;
		display: flex;
		justify-content: center;
		margin-top: -10px;
	}
	.my-margin-left{
		margin-left: 5px;
	}
	#father{
		margin-left:23px;
		margin-top: 47px;
	}
	.mywidth{
		width: 323px;
	}
	.footer-margin{
		margin-left: 41px;
	}
	#footer{
		margin-left:111px ;
		margin-top: 50px;
	}
</style>
