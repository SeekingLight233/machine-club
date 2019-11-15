<template>
	<view class="container999">
		<!-- 刷新事件isRefresh需要异步操作返回resolve -->
		<refresh ref="refresh" @isRefresh='isRefresh'></refresh>
		<!-- 点击反馈组件 -->
		<clickCircle ref="clickCircle"></clickCircle>
		<view class='nav'>
			<!-- #ifdef H5 -->
			<view style="height: 44px;width: 100%;">边距盒子</view>
			<!-- #endif -->
			<!-- 搜索 -->
			<view class='searchInput999' id="mysearch">
				<view class='searchBox999'>
					<image src='/static/icon-search.png' class='search999'></image>
				</view>
				<input class='input999' placeholder="请输入你要查询的工具" @confirm="find" v-model="findtext" confirm-type="search"></input>
			</view>
			<!-- 导航栏 agents导航栏标题 -->
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper style="min-height: 100vh;" :current="currentTab" @change="swiperTab">
			<swiper-item v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true" @scrolltolower="lower1">
					<view style="width: 100%;height: 100upx;">边距盒子</view>
					<view class='cu-list menu card-menu margin-top-xl margin-bottom-xl shadow-lg'>
						<view class='cu-item arrow' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index" @click="skip(item[1])">
							<text id="tool-text">
								{{item[0]}}
							</text>
						</view>
					</view>
					<view class='noCard' v-if="listItem.length===0">
						暂无信息
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<!--  #ifdef  MP-WEIXIN -->
		<ad unit-id="adunit-c3603cee5eae1b78"></ad>
		<!--  #endif -->
	</view>
</template>

<script>
	const util = require('../../util/util.js');
	import refresh from '../../components/refresh.vue';
	import navTab from '../../components/navTab.vue';
	import clickCircle from '../../components/clickCircle.vue';
	export default {
		components: {
			refresh,
			navTab,
			clickCircle
		},
		data() {
			return {
				findtext: "",
				tabTitle: ['机械设计', '机械传动'], //导航栏格式 --导航栏组件
				currentTab: 0, //sweiper所在页
				pages: [1, 1, 1, 1], //第几个swiper的第几页
				list: [
					[
						['比转速', 'jxsj/about'],
						['冲击载荷', 'jxsj/cjzh'],
						['球轴承基本额定寿命', 'jxsj/qzc'],
						['滚子轴承基本额定寿命', 'jxsj/gzzc'],
						['V形槽角度计算', 'jxsj/vxc'],
						['扇形工件面积计算', 'jxsj/sxgj1'],
						['弓形工件面积计算', 'jxsj/gxmj'],
						['轴键槽深度计算', 'jxsj/zjc'],
						['孔键槽深度计算', 'jxsj/kjc'],
						['沟槽深度计算', 'jxsj/gcsd'],
						['内弯任意角弯曲件展开长度计算', 'jxsj/nwryj'],
						['长细比', 'jxsj/cxb'],
						['满实率', 'jxsj/msl'],
						['差动螺旋传动计算（旋向同向）', 'jxsj/cdlx'],
						['科氏加速度', 'jxsj/ksa'],
						['弹性模量', 'jxsj/txml'],
						['滚动摩擦力（力加在圆心时）', 'jxsj/gdf'],
						['材料纵向应变', 'jxsj/zxyb'],
						['许用应力', 'jxsj/xyyl'],
						['弯曲应力', 'jxsj/wqyl'],
						['滚子链的长度计算', 'jxsj/gzl'],
						['差动螺旋传动计算（旋向相反）', 'jxsj/cdlxcd'],
						['链轮（齿顶圆直径）', 'jxsj/cdyzj'],
						['链轮（周节）', 'jxsj/ll_zj'],
						['链轮（齿高）', 'jxsj/ll_cg'],
						['链轮（齿顶厚）', 'jxsj/ll_cdh'],
						['平面机构自由度', 'jxsj/pmjg'],
						['非液体润滑滑动轴承(轴承平均压强)', 'jxsj/zcpjyq'],
						['非液体润滑滑动轴承(轴承pv值)', 'jxsj/zcpv'],
						['非液体润滑滑动轴承(轴承的滑动速度)', 'jxsj/zchd'],
						['滚动轴承当量动载荷计算', 'jxsj/gdzcdl'],
						['单活塞杆液压缸差动连接时的速度', 'jxsj/dhs_sd'],
						['单活塞杆液压缸差动连接时的推力', 'jxsj/dhs_tl'],
						['液压马达的输出转矩', 'jxsj/yymd'],
						['液压马达的输入流量', 'jxsj/yymd_srll'],
						['滚动摩擦力（力加在圆周时）', 'jxsj/gdf_02'],
						['液压马达的输出转速(2)', 'jxsj/yymd_scv-02'],
						['液压马达的输出转速(1)', 'jxsj/yymd_scv-01'],
						['液压马达的输出功率(2)', 'jxsj/yymd_scp-02'],
						['液压马达的输出功率(1)', 'jxsj/yymd_scp-01'],
						['液压缸内径尺寸计算(3)', 'jxsj/xxxx'],
						['液压缸内径尺寸计算(2)', 'jxsj/yyg02'],
						['液压缸内径尺寸计算(1)', 'jxsj/yyg01'],
						['液压缸活塞杆直径计算', 'jxsj/yyghs'],
						['液压缸壁厚计算(2）', 'jxsj/yygbh02'],
						['液压缸壁厚计算(1)', 'jxsj/yygbh01'],
						['活塞杆的最大允许长度计算', 'jxsj/hsg'],
						['缸体螺纹连接的螺纹直径(1)', 'jxsj/gtlw'],
						['缸体焊接连接焊缝最小直径的计算', 'jxsj/xxxx'],
						['液压缸销轴直径的计算', 'jxsj/yyg_xz'],
						['液压缸耳环尺寸的计算', 'jxsj/yyg_eh'],
						['管子内径计算', 'jxsj/gz_nj'],
						['管子壁厚计算', 'jxsj/gz_bh'],
						['干空气密度的计算', 'jxsj/gkq'],
						['含有水蒸气的湿空气的密度计算', 'jxsj/szq'],
						['气缸同比厚度', 'jxsj/qgtbhd'],
						['气缸活塞杆直径计算', 'jxsj/qghsg'],
						['气缸进排口的大小计算', 'jxsj/qgjpk'],
						['气路系统管道压力损失计算(1)', 'jxsj/qlxt_1'],
						['气路系统管道压力损失计算（2）', 'jxsj/qlxt_2'],
						['气压传动管道内经的计算', 'jxsj/qycd'],
						['内燃机的指示功率', 'jxsj/nrj'],
						['零件的工艺成本计算', 'jxsj/ljgy'],
					],


					[
						['单根V带的预紧力', 'jxcd/dgvd'],
						['带传动作用在传动轴上的力', 'jxcd/dcdzy'],
						['蜗杆分度圆直径', 'jxcd/wgfdy'],
						['蜗杆传动齿面接触应力', 'jxcd/wg04'],
						['按齿根弯曲强度设计蜗杆分度圆直径', 'jxcd/ac05'],
						['蜗杆传动齿根弯曲应力', 'jxcd/wg06'],
						['蜗杆轴刚度验算', 'jxcd/wg07'],
						['传动工作中损耗的功率', 'jxcd/cd08'],
						['蜗杆导程角', 'jxcd/wg09'],
						['蜗杆传动中心距', 'jxcd/wg10'],
						['蜗杆分度圆直径d1', 'jxcd/fd11'],
						['蜗杆齿顶圆直径', 'jxcd/cd12'],
						['蜗杆齿根圆直径', 'jxcd/cg13'],
						['蜗轮分度圆直径d2', 'jxcd/fd14'],
						['蜗杆圆周力', 'jxcd/yz15'],
						['蜗杆轴向力', 'jxcd/zx16'],
						['蜗杆径向力', 'jxcd/jx17'],
						['蜗杆法向力', 'jxcd/fx18'],
						['蜗轮轴工作转矩', 'jxcd/zg19'],
						['蜗杆圆周速度', 'jxcd/yz20'],
						['蜗轮传动滑动速度', 'jxcd/cd21'],
						['滑动螺旋传动螺旋副的摩擦转矩', 'jxcd/hd22'],
						['滑动螺旋传动支撑面的滑动摩擦转矩', 'jxcd/hd23'],
						['滚动摩擦转矩', 'jxcd/gd24'],
						['螺杆中径', 'jxcd/lg25'],
						['工作比压', 'jxcd/gz26'],
						['滑动螺旋传动螺杆强度校核', 'jxcd/qd27'],
						['滑动螺旋传动螺杆抗剪强度校核', 'jxcd/kj28'],
						['滑动螺旋传动螺杆抗弯强度校核', 'jxcd/kw29'],
						['滑动螺旋传动螺杆临界载荷', 'jxcd/lj30'],
						['滑动螺旋传动螺杆临界载荷(未淬火钢)', 'jxcd/lj31'],
						['滑动螺旋传动螺杆临界载荷(淬火钢)', 'jxcd/lj32'],
						['弹性变形δSF', 'jxcd/tx33'],
						['弹性变形δST', 'jxcd/tx34'],
						['总弹性变形量', 'jxcd/zt35'],
						['滑动螺旋传动临界转速', 'jxcd/hd36'],
						['滑动螺旋传动临界转速 (钢制螺杆)', 'jxcd/hd37'],
						['滑动螺旋传动牙面滑动速度', 'jxcd/hd38'],
						['外啮合直齿轮传动接触强度简化设计', 'jxcd/wc39'],
						['内啮合直齿轮传动接触强度简化设计', 'jxcd/nc40'],
						['外啮合斜齿轮传动接触强度简化设计', 'jxcd/wc41'],
						['内啮合斜齿轮传动接触强度简化设计', 'jxcd/nc42'],
						['外啮合人字齿轮传动接触强度设计', 'jxcd/wc43'],
						['内啮合人字齿轮传动接触强度设计', 'jxcd/nc44'],
						['直齿轮传动弯曲强度模数设计', 'jxcd/zc45'],
						['斜齿轮传动弯曲强度模数设计', 'jxcd/xc46'],
						['人字齿轮传动弯曲强度模数设计', 'jxcd/rz47'],
						['齿根弯曲许用应力 σFP', 'jxcd/cg48'],
						['齿根弯曲疲劳强度校核安全系数', 'jxcd/cg49'],
						['外啮合最大齿面应力', 'jxcd/wc50'],
						['内啮合最大齿面应力', 'jxcd/nc51'],
						['最大齿根弯曲应力', 'jxcd/zd52'],
						['齿轮静强度校核许用齿面接触应力', 'jxcd/cl53'],
						['齿轮静强度校核许用齿根弯曲应力', 'jxcd/cl54'],
						['切向力', 'jxcd/qx55'],
						['外啮合齿面接触应力', 'jxcd/wc56'],
						['斜齿轮的分度圆直径', 'jxcd/xc57'],
						['内啮合齿面接触应力', 'jxcd/nc58'],
						['斜齿轮的端面压力角', 'jxcd/xc59'],
						['齿面接触许用应力', 'jxcd/cm60'],
						['标准齿轮的齿根高', 'jxcd/bz61'],
						['外啮合标准直齿轮的中心距', 'jxcd/wc62'],
						['齿根弯曲应力σF', 'jxcd/cg63'],
						['内啮合标准斜齿轮的齿顶高', 'jxcd/nc64'],
						['内啮合标准斜齿轮的齿顶高', 'jxcd/nc65'],
						['内啮合直齿轮的中心距', 'jxcd/nc66'],
						['标准齿轮齿顶厚', 'jxcd/bz67'],
						['外啮合高变位齿轮的齿顶高', 'jxcd/wc68'],
						['外啮合高变位齿轮的齿根高', 'jxcd/wc69'],
						['外啮合角变位齿轮的啮合角', 'jxcd/wc70'],
						['外啮合角变位直齿轮的中心距', 'jxcd/wc71'],
						['外啮合角变位斜齿轮的中心距', 'jxcd/wc72'],
						['内啮合高变位直齿轮的齿顶高', 'jxcd/nc73'],
						['内啮合高变位斜齿轮的齿顶高', 'jxcd/nc74'],
						['内啮合角变位齿轮的啮合角', 'jxcd/nc75'],
						['内啮合角变位直齿轮的中心距', 'jxcd/nc76'],
						['内啮合角变位斜齿轮的中心距', 'jxcd/nc77'],
						['外齿轮公称齿厚', 'jxcd/wc78'],
						['内齿轮公称齿厚', 'jxcd/nc79'],
						['外啮合斜齿轮的中心距', 'jxcd/wc80'],
						['内啮合斜齿轮的中心距', 'jxcd/nc81'],
						['齿轮齿顶圆压力角', 'jxcd/cl82'],
						['齿顶不过薄的条件齿顶厚', 'jxcd/cd83'],
						['带传动的带速', 'jxcd/cd84'],
						['带传动所需基准长度', 'jxcd/dc85'],
						['带传动小带轮包角', 'jxcd/dc86']
					]
				] //数据格式
			};
		},
		onLoad(e) {

		},
		onShow() {},
		onHide() {},
		methods: {
			find() {
				// console.log(this.findtext);
				// console.log(typeof(this.findtext))
				let keywords = this.findtext;
				this.$store.state.find_text = this.findtext;
				let search_list = [];
				for (let i = 0; i < 2; i++) {
					for (let j = 0; j < this.list[i].length; j++) {
						let str = this.list[i][j][0];
						//字符串匹配,匹配到的话就把当前的条目推进去
						if (str.search(keywords) != -1) {
							search_list.push(this.list[i][j]);
						}
					}
				}
				this.$store.state.search_list = search_list;
				uni.navigateTo({
					url: "../search-res-tool/search-res-tool"
				})
			},
			skip(router) {
				// console.log(router);
				this.$store.state.tool_link = router;
				uni.navigateTo({
					url: '../tools-detail/tools-detail'
				})

			},
			changeTab(index) {
				this.currentTab = index
			},
			// 点击反馈事件
			conClick(e) {
				this.$refs.clickCircle.conClick(e);
			},
			// 其他请求事件 当然刷新和其他请求可以写一起 多一层判断。
			isRequest(pages) {
				return new Promise((resolve, reject) => {
					this.pages[this.currentTab]++
					var that = this
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							icon: 'none',
							title: `请求第${that.currentTab + S1 }个导航栏的第${that.pages[that.currentTab]}页数据成功`
						})
						let newData = ['新数据1', '新数据2', '新数据3']
						resolve(newData)
					}, 1000)
				})
			},
			// swiper 滑动
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				if (this.tabTitle.length <= 5) {
					this.$refs.navTab.navClick(index)
				} else {
					this.$refs.navTab.longClick(index)
				}
			},
			// 加载更多 util.throttle为防抖函数
			// lower1: util.throttle(function(e) {
			// 	console.log(`加载${this.currentTab}`) //currentTab表示当前所在页数 根据当前所在页数发起请求并带上page页数
			// 	uni.showLoading({
			// 		title: '加载中',
			// 		mask: true
			// 	})
			// 	this.isRequest().then((res) => {
			// 		let tempList = this.list
			// 		tempList[this.currentTab] = tempList[this.currentTab].concat(res)
			// 		console.log(tempList)
			// 		this.list = tempList
			// 		this.$forceUpdate() //二维数组，开启强制渲染
			// 	})
			// }, 300),
			// 刷新touch监听
			// refreshStart(e) {
			// 	this.$refs.refresh.refreshStart(e);
			// },
			// refreshMove(e) {
			// 	this.$refs.refresh.refreshMove(e);
			// },
			// refreshEnd(e) {
			// 	this.$refs.refresh.refreshEnd(e);
			// },
			// isRefresh() {
			// 	setTimeout(() => {
			// 		uni.showToast({
			// 			icon: 'success',
			// 			title: '刷新成功'
			// 		})
			// 		this.$refs.refresh.endAfter() //刷新结束调用
			// 	}, 1000)
			// }
		}
	};
</script>

<style lang="scss">
	.container999 {
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 100%;
	}

	.card {
		width: 90%;
		height: 368upx;
		background-color: white;
		margin: 0 auto 42upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
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
		background-color: #BBBBBB;
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

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
	.my-text{
		
	}

	#mysearch {
		margin-top: 20upx;
		margin-bottom: -15upx;
	}
	#tool-text{
		font-size: 32upx;
	}
</style>
