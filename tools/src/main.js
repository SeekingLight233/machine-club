import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'muse-ui/lib/styles/base.less';
import { Button, Select,Icon,TextField,Paper } from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
import { Image } from 'element-ui';

Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Select);
Vue.use(Icon);
Vue.use(TextField);
Vue.use(Paper);
Vue.use(Image);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
