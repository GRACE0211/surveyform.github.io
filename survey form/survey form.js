const app = Vue.createApp({
  data(){
    return {
      name:"",
      email:"",
      age:"",
      numberOfVisits: "first-time",
      userRecommend: "definitely",
      reasonsToVisitAgain:[],
      improvedReasons:[]
    }
  }
}).mount("#app");