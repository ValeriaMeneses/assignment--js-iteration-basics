
/**
 * getFirstLetters()
 *
 * Write a function called `getFirstLetters` that takes an array of strings
 * and returns another array of strings with only the first letter
 *
 * Hint: you may want to invoke the `reverseString` function you wrote earlier
 * from the previous queestion
*/

function getFirstLetters(arrayInput) {
 var newArray = [];
  for (var i = 0; i < arrayInput.length; i++) {
    newArray.push(arrayInput[i][0]);
  }
    console.log(newArray);
    return newArray
}
//  Me da error en la linea 30






//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
let outputArray1 = getFirstLetters(['wow', 'milk', 'howdy'])
console.assert( getFirstLetters(outputArray1[0] === 'w')
console.assert( getFirstLetters(outputArray1[1] === 'm')
console.assert( getFirstLetters(outputArray1[2] === 'h')


let outputArray2 = getFirstLetters(['kayak', 'chair', 'jacket', 'nice!'])
console.assert( getFirstLetters(outputArray2[0] === 'k')
console.assert( getFirstLetters(outputArray2[1] === 'c')
console.assert( getFirstLetters(outputArray2[2] === 'j')
console.assert( getFirstLetters(outputArray2[3] === 'n')
