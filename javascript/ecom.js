const vinMass= 67;
const vinHeight=1.76;
const vinBMI= vinMass/vinHeight**2;
const vasMass= 67;
const vasHeight= 1.76;
const vasBMI = vasMass/vasHeight**2;
console.log(vinBMI);
console.log(vasBMI);
// const compvinvas =vasBMI>=vinBMI;
// console.log(compvinvas);
if(vinBMI<vasBMI){
console.log("healthy"); 
}
else if(vinBMI>vasBMI)
{
    console.log("vas is great");
}
else if (vinBMI == vasBMI){
    console.log("both are same");
}
else{
    console.log("unhealthy");
}

const a = 5;
const b ="5";
if (a===b) { 
    console.log ("condition satisfied");
} else {
    console.log("please check the HT number");
}

const applicantAge=15;
const eligible= applicantAge>=18;
if(eligible)

{
    console.log("You are eligible for Driving License, proced to apply");
}
else{
    console.log(`You are not eligible, wait for ${18-applicantAge} years` );
}