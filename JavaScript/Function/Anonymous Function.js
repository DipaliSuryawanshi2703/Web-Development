let Login = function(Username,Password){
    if (Username== "Dipali" && Password == "Suraj")
    {
        console.log("Login Successfull");
    }
    else{
        console.log("Enetr Correct Username & Password");
    }
}
Login();
Login("Dipali","Suraj");
Login("Admin",123);

let Even = function(Num,Num)
{
    if(Num%2 == 0)
    {
        return true;
    }
    else {
        return false;
    }
}
let Odd = function(Num,Num)
{
    if(Num%2 == 1)
    {
        return true;
    }
    else {
        return false;
    }
}
let val = Even();
console.log(val,"Return To Main");