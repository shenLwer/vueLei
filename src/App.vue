<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2> -->
     <firstcomponent></firstcomponent>
     <child1 :son1='son1'></child1>
     <child2 v-on:son-say='listenSon'>212</child2>
     <p>son2 tell me {{son2message}}</p>
     <span>{{storename}}</span>
     <Header></Header>

    <ul>
      <li><router-link :to="{ name:'first', params: {num: 123} }">第一页</router-link></li>
      <li><router-link to="/second">第二页</router-link></li>
      <!-- <li v-for='value in list'>
      <div v-for='(value, key) in value'>
           <tbody>
            <tr>
              <td>{{key}}:</td>
              <td>{{value}}</td>
            </tr>
          </tbody>
      </div>
      </li> -->
      <!-- <li v-for="(value,index) in arr">{{value}}--{{index}}</li> -->

         <li v-for="value1 in list"><router-link v-bind:to="{ name:'first', params: {num:value1.id},query:{num2:value1.id}}">{{value1.name}}</router-link></li>


    </ul>
   <router-view class="view"></router-view>
    <button
    v-for="tab in tabs"
    v-bind:key="tab"
    v-bind:class="['tab-button', { active: currentTab === tab }]"
    v-on:click="currentTab = tab"
  >{{ tab }}</button>
   <keep-alive>
    <component
    v-bind:is="currentTabComponent"
    class="tab"
  ></component>
   </keep-alive>
    <span>{{info}}</span>
    <button @click="myajax">432424242424</button>

     <button @click="getNewsList">4324rere24242424</button>
  </div>
</template>

<script>
import firstcomponent from "./component/firstcomponent.vue";
import child1 from "./component/son1.vue";
import child2 from "./component/son2.vue";
import Header from "./component/Header.vue";
import "./css/App.css";

// import son2 from "./component/son2.vue";
import bus from "./js/event2.js";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      son1: "you are my son",
      son2message: "",
      info: null,

      list: [
        { name: "shenlei", age: 21, id: 1 },
        { name: "Shen", age: 20, id: 2 },
        { name: "Lei", age: 18, id: 3 }
      ],
      arr: ["哈哈", "嘻嘻", "哼哼"],
      currentTab: "Home",
      tabs: ["Home", "Posts", "Archive"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return "tab-" + this.currentTab.toLowerCase();
    },
    storename: function() {
      return this.$store.state.userName;
    }
  },
  components: { firstcomponent, child1, child2, Header },
  methods: {
    listenSon: function(word) {
      this.son2message = word;
    },
    getNewsList() {
      this.axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(response => {
          this.info = response;
          console.log(response);
        })
        .catch(response => {
          console.log(response);
        });
    },
    myajax: function() {
				this.$http.get("https://api.coindesk.com/v1/bpi/currentprice.json").then(response => {
					console.log("获取信息成功")
					console.log(response.data);
				}, response => {
					console.log("获取信息失败")
					console.log(response);
				})
			}

  }


};
</script>

<style lang="scss">
</style>
