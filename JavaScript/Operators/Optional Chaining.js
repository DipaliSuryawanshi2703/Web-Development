let user = {
    name:"Suraj",
    Contact:{Address: "Pune"},
    email:"dipali@gmail.com"
};
 const city = user.contact?.Address?.Pune ??  "City Not Found";
console.log(city);

