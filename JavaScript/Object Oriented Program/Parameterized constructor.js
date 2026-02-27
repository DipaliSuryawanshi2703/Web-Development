class Student{
    constructor(Name){
        this.Name = Name;
    }
    greet(){
        console.log("Hello : "+ this.Name)
    }
}
let obj1 =new Student("Shivani");
let obj2 =new Student("Prachi");
let obj3 =new Student("Priya");
obj1.greet();
obj2.greet();
obj3.greet();