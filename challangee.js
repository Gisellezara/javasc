//Very Easy
var x=10;
var y=5;
console.log(x-y);
//Easy
var name1= "giselle";
var name2= "tom";
var diffrence= name1.length - name2.length;
console.log("The name " + name2 + " is shorter then " + name1 + " by " + diffrence + " letters." );
//Medium
var input = prompt("What is your name?");
var inputupper= input.toUpperCase();
var inputlower= input.toLowerCase();
/*console.log("input", input);
console.log("uppercase", inputupper);
console.log("lowercase", inputlower);
*/
if (input === inputupper){
console.log("Shouting")
}
else if (input === inputlower){
    console.log("whispering");
}
else {
    console.log("Normal");
}
//Hard
function add(x,z){
    return x+z;
}
console.log(add(5,2));
function subtract(y,b){
    return y-b;
}
console.log(subtract(10,2));
function multiply(g,f){
    return g*f;
}
console.log(multiply(50,2));
function divide(a,d){
    return a/d;
}
console.log(divide(60,2));
//Very Hard
var inputnum11 = Number (prompt("number"))
var inputoper= prompt("symbol")
var inputnum22= Number (prompt("number"))
if (inputoper === `+`){
    console.log (inputnum11 + inputnum22)
}
else if (inputoper === `-`){
    console.log (inputnum11 - inputnum22)
}
else if (inputoper === `*`){
    console.log (inputnum11 * inputnum22)
}
else if (inputoper === `/`){
    console.log (inputnum11 / inputnum22)
}
else{
    console.log ("insert number")
}