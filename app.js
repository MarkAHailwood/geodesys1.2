let todos = [{
    name:"Debug UI",
    complete: false,
},{
    name:"Refactor build step",
    complete: true
},{
    name: "Upgrade Component",
    complete: false
}];

new Vue({
    
    el:`#app`,

 
    template:"#app-template",

    data:()=>(
        {
            text:``,
            testTextEntered: ``,
            testText: ""
        }
    ),

    methods:{

        getPosts (testTextEntered) {
            axios
      .get(`https://environment.data.gov.uk/flood-monitoring/id/floods?county=${testTextEntered}`)
      .then(response => (this.testText = response))            
        }  
    }
});
