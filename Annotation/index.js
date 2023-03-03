// tsc index.ts write to terminal for execute the code or
// tsc --watch index.ts
// --------------------------------------------------------
// Variable Annonation 
var x = 5;
x = 15;
// Error 
// x = "Hi there"  
// But there is "any" type for changind the value to other types
var y = "Hi there";
y = 20;
// little exmp.
// --------------------------------------------------------
var listMovie = ["Lotr1", "Lotr2", "Lotr3", "Django"];
var Django; // any type 
for (var _i = 0, listMovie_1 = listMovie; _i < listMovie_1.length; _i++) {
    var movie = listMovie_1[_i];
    if (movie === "Django") {
        Django = movie;
    }
}
console.log(Django);
Django = 15;
console.log(Django);
