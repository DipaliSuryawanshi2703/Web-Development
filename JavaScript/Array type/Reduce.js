let Num = [1,2,3,4];

let Reduce = Num.reduce((No1,No2,index,No4)=>
{
    console.log(No1,No2,index,No4);
    return No1 * No2;
});
console.log(Num);
console.log(Reduce);