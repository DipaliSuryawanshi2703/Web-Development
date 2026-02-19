let user ={
    name: "Dipali",
    Age: 25,
    Address:()=>{console.log(user.name);},//when arrow function with variablename.property
    show:function(Age){console.log(this.Age)},//use this.property name
    Contact:12344578
}
user.Address();
user.show();