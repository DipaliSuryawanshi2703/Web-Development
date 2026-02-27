class student{
    #marks
    constructor(marks){
        this.#marks = marks;
    }
    GetMarks(){
        return this.#marks;
    }
    SetMarks(value){
        if(value > 35 )
        {
            return "Pass"; 
        }
        else{
            return "Fail";
        }
    }
}
let std = new student(20);
console.log(std.GetMarks());
console.log(std.SetMarks(69));
console.log(std.GetMarks());
console.log(std.SetMarks(89));
console.log(std.GetMarks());
console.log(std.SetMarks(20));
console.log(std.GetMarks());
