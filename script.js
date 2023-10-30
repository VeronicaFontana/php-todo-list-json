const {createApp} = Vue;

createApp({
  data(){
    return{
      list: []
    }
  },
  methods:{
    getApi(){
      axios.get("server.php")
      .then((result)=>{
        this.list = result.data;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}).mount("#app")