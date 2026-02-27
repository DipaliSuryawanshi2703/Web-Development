class MathUnits{
    static Add (No1,No2){
        return No1+No2;

    }
    Mult(No1,No2){
            this.No1 = No1;
            this.No2 = No2;
            return this.No1 *this.No2;
    }
}
let Calc = new MathUnits;

console.log(Calc.Mult(10,20));
console.log(Calc.Mult(12,20));
//console.log(Calc.Add(10,20));
console.log(MathUnits.Add(10,20));
