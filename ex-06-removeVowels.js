/**
 * removeVowels()
 *
 * Write a function called `removeVowels()`.
 * It should accept a string as input,
 * and it should return a new string without the vowels.
 *
*/

function removeVowels(stringInput){
  stringInput = stringInput.toLowerCase()
  var nuevostring = [];

  for (var i = 0; i < stringInput.length; i++) {
    var cadaLetra = stringInput[i]

    if (cadaLetra !== "a"  && cadaLetra !== "e"  &&  cadaLetra !== "i"  &&  cadaLetra !== "o"  &&  cadaLetra !== "u") {
      nuevostring.push(cadaLetra);
    }

  }
  // console.log(nuevostring.join(""));
  return nuevostring.join("")

}




//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

console.assert( removeVowels('milk') === 'mlk' );
console.assert( removeVowels('christmas') === 'chrstms' )
console.assert( removeVowels('moo shoo pork') === 'm sh prk' )

//should handle capital letters
console.assert( removeVowels('Out of Order') === 't f rdr' )
console.assert( removeVowels('Estados Unidos') === 'stds nds' )
