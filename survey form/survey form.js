const app = Vue.createApp({
  data(){
    return {
      userInfo:{
      username:"",
      email:"",
      age:"",
      numberOfVisits: "first-time",
      userRecommend: "definitely",
      reasonsToVisitAgain:[],
      improvedReasons:[],
      comments:""
      }
    }
  },
  methods: {
    demo(){
      if(confirm('是否提交表單？')){
        console.log(JSON.stringify(this.userInfo));
        // this.userInfo.reset();
      }
    }
  },
}).mount("#app");
