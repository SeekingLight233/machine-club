<template>
	<view>
		<view class='searchInput999' id="mysearch">
			<view class='searchBox999'>
				<image src='/static/icon-search.png' class='search999'></image>
			</view>
			<input class='input999' placeholder="请输入关键字搜索" @confirm="find" v-model="findtext" confirm-type="search"></input>
		</view>

		<scroll-view scroll-y="true">
			<view v-for="(item,index) in list" :key="index" @tap="toDetail(item.link,item.title,item.imgsrc)">
				<news-card :title="item.title" :img="item.imgsrc" :link="item.link"></news-card>
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
		<!--  #ifdef  MP-WEIXIN -->
		<ad unit-id="adunit-c3603cee5eae1b78"></ad>
		<!--  #endif -->
	</view>
</template>

<script>
	//这个引入组件的名称要驼峰命名法
	import zySearch from '../../components/zy-search/zy-search.vue'
	import newsCard from '../../components/news-card/news-card.vue'
	export default {
		data() {
			return {
				findtext: "",
				list: [],
				Pnum: 0,
				realImg: [],
				time: 10,
				start: 0,
				end: 0
			}
		},

		methods: {
			find() {
				let keywords = this.findtext;
				if(keywords == ""){
					uni.showToast({
					    title: '请输入内容哦',
					    duration: 2000,
						icon:'none'
					});
				}else{
					this.$store.state.find_text = this.findtext;
					uni.navigateTo({
						url: "../search-res-news/search-res-news"
					})
				}
				
				
			},
			// 			getNews(num) {
			// 				const db = wx.cloud.database();
			// 				db.collection('articleList').count().then((res) => {
			// 					this.$store.state.total = res.total;
			// 					console.log(this.$store.state.total)
			// 					console.log(num)
			// 					wx.cloud.callFunction({
			// 						name: 'getnewslist',
			// 						data: {
			// 							total: this.$store.state.total,
			// 							Pnum: num
			// 						},
			// 						// 传递给云函数的参数
			// 						success: res => {
			// 							//ios端图片显示问题，解决方案是讲图片链接中的所有&符号替换成'/u0026'
			// 							for (var j = 0; j < res.result.data.length; j++) {
			// 								// console.log(res.result.data[j].imgsrc);
			// 								var strtmp = "";
			// 								strtmp = res.result.data[j].imgsrc;
			// 								if (strtmp.substring(0, 21) == "https://mmbiz.qpic.cn") {
			// 									var a = strtmp.split("")
			// 									for (var i = 0; i < a.length; i++) {
			// 										if (a[i] == '&') {
			// 											a[i] = '/u0026';
			// 										}
			// 									}
			// 									res.result.data[j].imgsrc = a.join("");
			// 									// console.log(res.result.data[j].imgsrc);
			// 								}
			// 							}
			// 							this.list = res.result.data;
			// 							this.list = this.list.reverse();
			// 
			// 						},
			// 					});
			// 				});
			// 			},
			getNews(num) {

				uni.showLoading({
				    title: '加载中'
				});
				
				uni.request({
					url: 'https://www.jixieclub.com:3002/list',
					data: {
						Pnum: num
					},
					success: (res) => {
						console.log(res.data);
						console.log(res.data.length)
						uni.hideLoading();
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
						this.list = res.data.reverse();
						// console.log(res.data);
						this.end = new Date().getTime();
						this.time = this.end - this.start;
						console.log(this.time)
					}
				});

				//由于小程序中不能直接发起http请求，所以所有的请求只能由node云函数代理请求
				// #ifdef  MP-WEIXIN
// 				wx.cloud.callFunction({
// 					name: 'pullnews',
// 					data: {
// 						Pnum: num
// 					},
// 					success: res => {
// 						let tmp = JSON.parse(res.result);
// 						res.data = tmp.reverse();
// 						console.log(res.data);
// 						console.log(res.data.length);
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
// 						for (let i = 0; i < 15; i++) {
// 							// console.log(res.data[i]._id)
// 							// this.realImg.push("https://www.jixieclub.com:3002/static/"+res.data[i]._id+".png")
// 							res.data[i].realImg = "https://www.jixieclub.com:3002/static/" + res.data[i]._id + ".png"
// 						}
// 						this.list = res.data.reverse();
// 						// console.log(res.data);
// 						this.end = new Date().getTime();
// 						this.time = this.end - this.start;
// 						console.log(this.time)
// 					}
// 				});
// 			
				// #endif

			},
			next() {
				
				this.Pnum++;
				this.getNews(this.Pnum);
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
			pre() {
				this.Pnum--;
				this.getNews(this.Pnum);
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			},
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


		computed: {

		},
		created() {
			
			this.getNews(this.Pnum);
		},
		onLoad() {
			//在onload二次请求，防止第一次请求为空的情况
			if(this.Pnum == 0){
				
				this.getNews(this.Pnum);
			}
		},
		beforeMount() {

		},
		components: {
			zySearch,
			newsCard
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

	.nav {
		position: fixed;
		left: 0;
		top: 0;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #CCCCCC;
		z-index: 996;
	}

	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	#mysearch {
		margin-top: 20upx;
		margin-bottom: 15upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
</style>
