console.log("This is for 7 Functions in JS.html");

/* Function in JS is used to removed redudancy of code */
// A function can be declared using function keyword with function_name and function parameters if required
// if we assign a value within the parameter of the function then it acts as default value if the argument value isn't passed to the function
function callMe(usr_name, greetText = "Greeting from JS!") {
    console.log("\n" + usr_name + " is now registed...");
    console.log(greetText + " be calm and relax.");
    console.log(usr_name + " Welcome to this era!\n");
}
let name = "Mohd Saif";
let name1 = "MD Ahtesham";
let name2 = "Shahnawaz";
let name3 = "Shivam";
let greetText = "Aay! Aay! Captain!"
callMe(name, greetText);
callMe(name1);
callMe(name2, greetText);
callMe(name3, greetText);

function sum(a,b,c){
    return a+b+c;
}
let d = sum(3,2,1);
console.log(`The sum of 3, 2, 1 is: ${d}`);