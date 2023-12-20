// There were days in math class when I wished I had a simple way to quickly solve for any given variable in a formula and check my answers accordingly.
// If only I had a time machine...

// Oh well! Anyhow, using the following formula:

// Angle (in Radians) === Arc length / Radius length
// Write a function thetaFormula:

// 1. When given two of the values and "?" returns the number value of the missing one.
// 2. When given all three values returns a boolean value verifying if the statement is true or false.
// 3. When given one or no values as arguments or invalid arguments returns null.

// For Example:

//     thetaFormula("?", 12, 35)        -->    0.343
//     thetaFormula(3, "?", 14)         -->    42
//     thetaFormula(5, 16, "?")         -->    3.2

//     thetaFormula(2, 5, 7)            -->    false
//     thetaFormula(2, 20, 10)          -->    true
//     thetaFormula( -1, 1, -1)         -->    true

//     thetaFormula(1, 2)               -->   null
//     thetaFormula(1)                  -->   null
//     thetaFormula()                   -->   null
//     thetaFormula("?", "?", 2)        -->   null

// If the returned value contains more than three numbers after the decimal it should be fixed to three decimal places.
// The function should be able to return negative values, they will be tested for.

// CODE WARS EXCERCISE LINK -> https://www.codewars.com/kata/567610d21541a88876000024/train/javascript

function thetaFormula(radius, arc, angle) {
  let numberOfIncognitos = 0;
  if (radius == "?") {
    numberOfIncognitos++;
  }
  if (arc == "?") {
    numberOfIncognitos++;
  }
  if (angle == "?") {
    numberOfIncognitos++;
  }
  if (numberOfIncognitos >= 2) {
    return null;
  }

  if (radius == null || arc == null || angle == null) {
    return null;
  }

  if (radius == "?") {
    return arc / angle;
  } else if (arc == "?") {
    return radius * angle;
  } else if (angle == "?") {
    return arc / radius;
  } else {
    if (arc / radius == angle) {
      return true;
    } else {
      return false;
    }
  }
}

//console.log(thetaFormula(3, "?", 14));
//console.log(thetaFormula("?", 12, 35));
//console.log(thetaFormula(5, 16, "?"));
console.log(thetaFormula(2, 5, 2.5));
