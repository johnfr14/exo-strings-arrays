let str =  "JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript"
let array = str.split(" ")

console.log(array)

for(let i = 0; i < array.length; i++){
  if(array[i] === 'Javascript'){
   return console.log(`il y a bien le mot \'Javascript\' à l\'index ${i}!!!`)
  }
  else if(i == array.length - 1){
      console.log('rip il n\'y a pas le mot \'Javascript\'')
    }
}
