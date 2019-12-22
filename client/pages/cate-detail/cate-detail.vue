<template>
	<view>
		<view class="example-body cu-list menu card-menu margin-top shadow-lg">
			<view class="cu-bar bg-white solid-bottom">
				<view class="action">
					<text class="cuIcon-title text-black">

					</text>{{catetitle}}
				</view>
			</view>
		</view>

		<scroll-view scroll-y="true">
			<view v-for="(item,index) in list" :key="index" @tap="toDetail(item.link)">
				<news-card :title="item.title" :img="item.realImg" :link="item.link"></news-card>
			</view>
		</scroll-view>

		<view class="button-group">

			<view class="cu-btn line-grey shadow my-margin" @tap="pre">
				上一页
			</view>

			<view class="cu-btn bg-grey shadow" @tap="next">
				下一页
			</view>
		</view>

	</view>
</template>

<script>
	import newsCard from '../../components/news-card/news-card.vue'
	export default {
		data() {
			return {
				catetitle: "",
				list: [],
				Pnum: 1,
				realImg: [],
				time: 10,
				start: 0,
				end: 0
			}
		},
		methods: {
			getNews(num) {
				
				uni.showLoading({
				    title: '加载中'
				});
				
				this.Pnum++;
				uni.request({
					url: 'https://www.jixieclub.com:3002/cate',
					data: {
						Pnum: num,
						cate: this.$store.state.cate
					},
					success: (res) => {
						uni.hideLoading();
						if (res.data.length < 15) {
							this.list = res.data;
						}
						for (var j = 0; j < res.data.length; j++) {
							// console.log(res.result.data[j].imgsrc);
							var strtmp = "";
							strtmp = res.data[j].imgsrc;
							if (strtmp.substring(0, 21) == "https://mmbiz.qpic.cn") {
								var a = strtmp.split("")
								for (var i = 0; i < a.length; i++) {
									if (a[i] == '&') {
										a[i] = '/u0026';
									}
								}
								res.data[j].imgsrc = a.join("");
								// console.log(res.result.data[j].imgsrc);
							}
						}

						for (let i = 0; i < 15; i++) {
							// console.log(res.data[i]._id)
							// this.realImg.push("https://www.jixieclub.com:3002/static/"+res.data[i]._id+".png")
							res.data[i].realImg = "https://www.jixieclub.com:3002/static/" + res.data[i]._id + ".png"
						}
						this.list = res.data;
						// console.log(res.data);
						this.end = new Date().getTime();
						this.time = this.end - this.start;
						// console.log(this.time)
					}
				});

				//#ifdef  MP-WEIXIN
// 				wx.cloud.callFunction({
// 					name: 'pullcate',
// 					data: {
// 						Pnum: num,
// 						cate: this.$store.state.cate
// 					},
// 					success: res => {
// 						console.log(res.result);
// 						res.data = JSON.parse(res.result);
// 						console.log(res.data);
// 						if (res.data.length < 15) {
// 							this.list = res.data;
// 						}
// 						for (var j = 0; j < res.data.length; j++) {
// 							// console.log(res.result.data[j].imgsrc);
// 							var strtmp = "";
// 							strtmp = res.data[j].imgsrc;
// 							if (strtmp.substring(0, 21) == "https://mmbiz.qpic.cn") {
// 								var a = strtmp.split("")
// 								for (var i = 0; i < a.length; i++) {
// 									if (a[i] == '&') {
// 										a[i] = '/u0026';
// 									}
// 								}
// 								res.data[j].imgsrc = a.join("");
// 								// console.log(res.result.data[j].imgsrc);
// 							}
// 						}
// 
// 
// 						for (let i = 0; i < 15; i++) {
// 							// console.log(res.data[i]._id)
// 							// this.realImg.push("https://www.jixieclub.com:3002/static/"+res.data[i]._id+".png")
// 							res.data[i].realImg = "https://www.jixieclub.com:3002/static/" + res.data[i]._id + ".png"
// 						}
// 						this.list = res.data;
// 						// console.log(res.data);
// 						this.end = new Date().getTime();
// 						this.time = this.end - this.start;
// 					}
// 				});
// 				
				//#endif
			},
			next() {
				this.getNews(this.Pnum);
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			pre() {

				this.getNews(this.Pnum);
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			toDetail(link) {
				//#ifdef MP-WEIXIN
				this.$store.state.link = link;
				console.log(this.$store.state.link)
				uni.navigateTo({
					url: '../news-detail/news-detail'
				})
				//#endif

				//#ifdef H5
				window.open(link);
				//#endif
			},
		},
		components: {
			newsCard
		},
		created() {
			
			// #ifdef MP-WEIXIN
			// wx.showLoading({
			// 	title: '加载中',
			// });
			// setTimeout(function() {
			// 	wx.hideLoading()
			// }, 2000);
			// #endif
		},
		mounted() {
			this.catetitle = this.$store.state.catetitle;
			this.getNews(this.Pnum);
		}
	}
</script>

<style scoped>
	.button-group {
		margin-left: 179rpx;
		margin-bottom: 20rpx;
	}

	.my-margin {
		margin-right: 112rpx;
	}
</style>
