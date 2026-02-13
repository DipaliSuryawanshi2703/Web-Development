let Arr = [20,30,40,50];

Arr.forEach(function(Val1)
{
    console.log(Val1);
});
console.log("=============********============");

Arr.forEach(function(Val1,val2)
{
    console.log(Val1,val2);
});

console.log("=============********============");

Arr.forEach(function(Val1,val2,val3)
{
    console.log(Val1,": value",val2,": Index",val3,": Full Array");
});