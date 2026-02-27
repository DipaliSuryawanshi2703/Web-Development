class Student {
   Name = "Suraj"; 
   greet(){
    return  "Hello "+ this.Name;
   }

}
let Std = new Student();
console.log(Std);
console.log(Std.Name);
console.log(Std.greet());