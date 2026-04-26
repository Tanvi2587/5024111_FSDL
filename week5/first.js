
try {
let num = -5;
if(num < 0){
    throw "Number cannot be negative";
}
console.log("Valid number");
}
catch(error){
    console.log("Error:", error);
}
