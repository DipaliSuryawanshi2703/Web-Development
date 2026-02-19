let user = {
    name : "Suraj",
    //age: 25,
    Add:function(){
        console.log("hello")
        console.log("Hello",this.name)
    }
}
user.Add();