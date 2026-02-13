let user = {
    name:"Suraj",
    Age: 25,
    Address:"Pune Maharashtra",
    contact:3456
}
for(let key in user){
    console.log(key,":",user[key]);
}
let arr = [1,2,3,4,5];
for(let i in arr)
{
    console.log( i,"index",arr[i]);
}