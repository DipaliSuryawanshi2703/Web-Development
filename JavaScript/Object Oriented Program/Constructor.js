class Student {
    Name ="Dipali";
    constructor(){
        console.log("Inside Constructor");
    }
    Welcome(){
        console.log("Welcome : "+ this.Name);
    }
}
let Std = new Student();
console.log(Std);
console.log(Std.Name);