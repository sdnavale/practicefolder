//using ternary operator

console.log(`::::: Odd or Even Number :::::`);
//function with argument and not return value
console.log(``);
function oddEven(a){
    console.log(`Given number is :${a}`);
    var result = a % 2 == 0?"a is Even Number":"a is odd Number";
    console.log(`${result}`);
}
oddEven(30);
oddEven(1345);
//function with argument and with return value
console.log(``);
function oddEven1(b){
    console.log(`Given number is :${b}`);
    var result1 = b % 2 == 0?"a is Even Number":"a is odd Number";
    console.log(`${result1}`);
    return result1;
}
oddEven1(46);
oddEven1(76);
//function with no argument and no return value
console.log(``);
function oddEven2(){
    var a = 10;
    console.log(`Given number is :${a}`);
    var result2 = a % 2 == 0?"a is Even Number":"a is odd number";
    console.log(`${result2}`);
}
oddEven2();
//function with no argument and with return value
console.log(``);
function oddEven3(){
    var a = 15;
    console.log(`Given number is :${a}`);
    var result3 = a % 2 == 0?"a is Even Number":"a is odd Number";
    console.log(`${result3}`);
    return  result3;
}
oddEven3();