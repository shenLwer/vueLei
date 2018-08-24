<template>
  <div>
    <p>this is c2 组件</p>
    <p >
        <button @click="submit">son2给父组件传值</button>
         <button @click="submit2">son2给son1传值</button>
    </p>
    <span>son1传值{{son12}}</span>
  </div>
</template>
<script>
import bus from "../js/event.js";
export default {
  data() {
    return {
      son2Message: "I am son2",
      son12:''
    };
  },
  created() {
    //  this.$root.Bus.$emit('eventName',123);
    bus.$on("son1给son2的信息", value => {
      console.log("son1给son2的信息", value);
      this.son12=value;
    });
    // this.$emit('son-say',this.son2Message)
  },
  methods: {
    submit() {
      //  this.$root.Bus.$emit('eventName',123);
      // this.$parent.Bus.$emit("你的名字", 123);
      this.$emit("son-say", this.son2Message);
    },
    submit2() {
      //  this.$root.Bus.$emit('eventName',123);
      bus.$emit("你的名字", 123);
      // this.$emit('son-say',this.son2Message)
    }
  }
};
</script>

