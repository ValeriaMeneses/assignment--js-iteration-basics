/**
 * shortiesOnly()
 *
 * Write a function called `shortiesOnly`.
 * It should as input an array of strings,
 * and it should return a new array containing
 * only those strings with 4 or fewer characters.
 *
*/

function shortiesOnly(arrayInput) {
  newArray = []
  for (var i = 0; i < arrayInput.length; i++) {
    if (arrayInput[i].length <= 4) {
      newArray.push(arrayInput[i])
      // console.log(arrayInput[i])

    }
    // return newArray
  }
  console.log(newArray);
  return newArray
  // return shortiesOnly

}




//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]

var shortList = shortiesOnly(allNames)

console.assert( shortList.length === 4 )


// checks to see that 'Sam' is INCUDED in the output array.
console.assert( shortList.indexOf('Sam') >= 0 )

// checks to see that 'Fred' is INCUDED in the output array.
console.assert( shortList.indexOf('Fred') >= 0 )

// checks to see that WAYNE is NOT in the output array.
console.assert( shortList.indexOf('Wayne') === -1 )
