const {createApp} = Vue;

createApp({
  data(){
    return{
      list: [],
      task: ""
    }
  },
  methods:{
    getApi(){
      axios.get("server.php")
      .then((result)=>{
        this.list = result.data;
      })
    },
    newTask(){
      const data = new FormData();
      data.append("task", this.task)

      axios.post("server.php", data)
      .then((result)=>{
        this.list = result.data;
        this.task = "";
      })
    }
  },
  mounted(){
    this.getApi();
  }
}).mount("#app")