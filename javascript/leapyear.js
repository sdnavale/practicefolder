//using ternary operator

console.log(`leap year program`);
console.log(``);

function leapYear(year){
    console.log(`Given year is :${year}`);
    var result = year % 4 == 0?" year is leap":"year is not leap ";
    console.log(`${result}`);
}
leapYear(2000);
leapYear(1995);