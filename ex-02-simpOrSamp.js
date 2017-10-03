
/**
 * simpOrSamp()
 *
 * Write a function called `simpOrSamp` that takes an array of strings as input:
 *   If an element in the array is less than 6 characters, append 'Sampson': e.g. "Homer Sampson"
 *   If an element in the array is 6 characters or longer, append 'Simpson': 'Jessica Simpson'
 *
*/

// function simpOrSamp(simpList){
//   for (var i = 0; i < simpList.length; i++) {
//         if (simpList[i].length < 6) {
//           console.log(simpList[i] + " Sampson");
//           return (simpList[i] + " Sampson");
//
//         }else if (simpList[i].length >= 6 ) {
//           console.log(simpList[i] + " Simpson");
//           return (simpList[i] + " Simpson");
//         }
//   }
// }

function simpOrSamp(simpList){
  for (var i = 0; i < simpList.length; i++) {
        if (simpList[i].length < 6) {
            simpList[i] = simpList[i] + " Sampson"


        }else if (simpList[i].length >= 6 ) {
            simpList[i] = simpList[i] + " Simpson"

        }

  }
  // console.log(simpList);
  return(simpList)

}



//*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~
var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var modifiedNamesList = simpOrSamp(simpList)

// console.assert( modifiedNamesList[1] === 'OJ Sampson' )
// console.assert( modifiedNamesList[2] === 'Marge Sampson' )
// console.assert( modifiedNamesList[5] === 'Maggie Simpson' )
// console.assert( modifiedNamesList[0] !== 'Homer Simpson' )
