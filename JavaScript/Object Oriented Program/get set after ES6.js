class student{
    #marks;
    constructor(marks){
        this.#marks = marks;
    }
    get Marks(){
        return this.#marks;
    }
    set Marks(value){
        this.#marks= value;
        if(value > 35 )
        {
            return "Pass"; 
        }
        else{
            return "Fail";
        }
    }
}
let obj = new student(12);
console.log(obj.marks);
obj.marks = 40;
console.log(obj.marks);
obj.marks = 30;
console.log(obj.marks);
obj.marks = 90;
console.log(obj.marks);