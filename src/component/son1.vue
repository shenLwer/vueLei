<template>
  <div>
   <p>this is c1 组件</p>
   <span>son2传值:{{son21}}</span>
   <h6>父组件传值son1：{{son1}}</h6>
  <button @click="submit3">son1给送son2传值</button>
  </div>
</template>
<script>
import bus from "../js/event.js";
export default {
  props: ["son1"],
  data() {
    return {
      son21: "",
      sonprop:this.son1
    };
  },
  created() {
    //组件的钩子函数
    bus.$on("你的名字", value => {
      this.add(value);
    });
    // bus.$emit("son1给son2的信息",son1)
  },

  methods: {
    add(value) {
      console.log(value + 100);
      this.son21 = value;
    },
    submit3() {
      console.log(this.sonprop);
       bus.$emit("son1给son2的信息", 153);
    }
  },

  beforeDestory() {
    //组件的钩子函数
    bus.$off("你的名字");
  }
};
</script>

