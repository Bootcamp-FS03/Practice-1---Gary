// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

let string = "RqaEzty";
let result = ""
string = string.toLowerCase();
var init = true;
for (let index = 0; index < string.length; index++) {
    const element = string[index];
    let stringFormat = element.repeat(index + 1);

    // Convertir el primer carácter a mayúscula
    stringFormat = stringFormat.charAt(0).toUpperCase() + stringFormat.slice(1);
    if(!init){
        result+="-";
    }
    init = false;
    result += stringFormat;
}
console.log(result);