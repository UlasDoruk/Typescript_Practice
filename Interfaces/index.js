// Interfaces in TS 
var me = { name: "Ulas", age: 25 };
var flag = {
    name: "Turkish flag",
    price: 100,
    calcuDiscount: function (discount) {
        this.price = this.price - (this.price * discount);
        return this.price;
    }
};
var Ulas = {
    name: "Ulas",
    age: 25,
    country: "Turkey",
    salary: function () {
        return 0;
    }
};
var UguBagu = {
    name: "UguBagu",
    age: 17,
    height: 1.67,
    IQ: 80
};
var Whale = {
    name: "Jon",
    age: 4,
    breast: true,
    height: 2.5,
    IQ: 70
};
console.log(Whale);
