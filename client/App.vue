<script>
	export default {
		
		
		onLaunch: function() {
			//初始化云能力
			wx.cloud.init({
				env: 'yun-asher-n6kbs',
				traceUser: true
			});
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	@import "colorui/main.css";
	@import "colorui/icon.css";
</style>
