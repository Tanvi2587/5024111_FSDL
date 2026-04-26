
let password = "abc123";
// Password validation
if(password.length < 6){
    console.log("Validation Error: Password must be at least 6 characters long");
}
else if(!/[A-Z]/.test(password)){
    console.log("Validation Error: Password must contain at least one uppercase letter");
}
else if(!/[0-9]/.test(password)){
    console.log("Validation Error: Password must contain at least one number");
}
else{
    console.log("Password is valid");
}
