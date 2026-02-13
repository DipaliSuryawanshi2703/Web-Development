let User = {
    name: "Suraj",
    Age: 25,
    Address: "Pune",
    Contact : 4567
}
console.log("Before Delete Operator",User);

delete User.Contact;
console.log("After Delete Operatoe ",User);
