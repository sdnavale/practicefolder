//using ternary operator

function adult(age){
    console.log(`Given age is: ${age}`);
    var result = age >=18?"your Adult":"your not Adult";
    console.log(`${result}`);
}
adult(18);
adult(7);