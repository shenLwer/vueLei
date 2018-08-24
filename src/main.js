import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
// import store from './store/index'
import Vuex from 'vuex'
import store from './vuex/store'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.use(Vuex)
//开启debug模式
Vue.config.debug = true;
Vue.use(VueRouter);
Vue.use(VueResource);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
const First = { template: '<div><h2>我是第 1 个子页面{{ this.$route.query.num2 }}+{{ this.$route.params.num }}</h2><h4 v-if="this.$route.params.num==2">16546515</h4></div>' }
import secondcomponent from './component/secondcomponent.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      name: 'first',
      component: First
    },
    {
      path: '/second',
      name: 'second',
      component: secondcomponent
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  store,
  axios,

  render: h => h(App)
}).$mount('#app')
