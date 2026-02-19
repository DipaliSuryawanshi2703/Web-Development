let Numbers = [1,2,3,4,5,6,7];
let Even = Numbers.filter((val1,index,array)=>
     { console.log(val1,index);
        return val1 %2 == 0;

});

let Odd = Numbers.filter((val,index,array)=>
{
    console.log(val,index);
    return val % 2 == 1;
});
console.log(Even);
console.log(Odd);
