<view class="refreshBox" style="{{(isTranform)}}"><view class="{{['refresh',isEnd==2?'animationSmall':'']}}" style="{{(isZoom)}}"><block wx:if="{{isEnd==0}}"><view class="refreshWord">松开刷新</view></block><block wx:if="{{isEnd==1}}"><view class="refreshCirle animation"></view></block><block wx:if="{{isEnd==2}}"><image class="iconYes" src="../static/icon-yes.png"></image></block></view></view>