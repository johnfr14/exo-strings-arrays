let str = "Bonjour, je suis Sofiane"
let array = str.split(" ")

console.log(`${str}\n`)

for(let i = 0; i < array.length; i++){
  if(array[i] === 'Sofiane'){
  array[i] = 'Jonathan'
  }
  else if(i == array.length - 1){
      console.log('Mais où est Sofiane ??????')
    }
}

let strJohn = ""

for(let i = 0; i <= array.length - 1; i++){
  strJohn += array[i]
  strJohn += " "
}

console.log(strJohn)