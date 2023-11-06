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
        this.task = ""
      })
    },
    deleteTask(index){
      const data = new FormData();
      data.append("taskToDelete", index)

      axios.post("server.php", data)
      .then((result)=>{
        this.list = result.data;
      })
    },
    toggleDone(index){
      const data = new FormData();
      data.append("indexToToggle", index)

      axios.post("server.php", data)
      .then((result)=>{
        this.list = result.data;
      })
    }
  },
  mounted(){
    this.getApi();
  }
}).mount("#app")