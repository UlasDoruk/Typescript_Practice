// "any" type in functions 
function number(num) {
    return num * num;
}
// console.log(number(5))
// --------------------------------------------------------
// default value parameter
function defaultParameter(name) {
    if (name === void 0) { name = "Ulas"; }
    return "Hi there ".concat(name);
}
defaultParameter(); // returns "Hi there Ulas"
defaultParameter("Icardi"); // returns "Hi there Icardi"
