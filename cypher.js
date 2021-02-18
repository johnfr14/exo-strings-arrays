let code = "Le but de cet exercice est de vous mettre dans la peau d'un cryptanalyste qui devra casser ce chiffrement Caesar.\
La méthode manuelle est évidement la pire de toute et n'est pas une solution valide. En vous servant de Javascript essayez de casser ce code.\
Une interaction manuelle est possible, le but n'étant pas de déchiffrer ce code de manière totalement automatique, car pour bien le faire il vous faudrait un dictionnaire de mots.\
On attend de vous que vous minimalisiez les interactions manuelles pour déchiffrer ce code. Vous devrez rendre les codes que vous avez utilisé dans un fichier decypher.js\
 et ecrire en commentaire vos démarches et les différentes étapes que vous avez suivi pour obtenir le message en clair. Hypothèses:"

// Function to clear all of our string from characters undesired
let sanityze = (msg) => {
  let indesirable = [',', '?', '...', ';', '.', '-', ':', '\n']
  let str2 = ''

  for(let i = 0; i < msg.length; i++) {
    for(let j = 0; j < indesirable.length; j++) {
      if(msg[i] === indesirable[j]){
       i++
        j = -1
      }
    }
    if(str2[i] === ' '){
      str2 += ' '
    } else {
        str2 += msg[i]
      }
    }
  return str2.trim().toUpperCase() 
}

// Function that will encrypted the messages
let cypher = (msg) => {
  let d = Math.floor(Math.random() * 27) + 1                      // Initialization of the secret key randomly
  let code = ''
  msg = sanityze(msg)                                             // We clean the message
 // console.log(`${msg}\n`) 

  for (let i = 0; i <= msg.length; i++) {                         // We go through the message to change each letters one by one with our secret key execpt the --> ' '
   let ascii                                  
   if(msg[i] !== ' '){                                            
      ascii = msg.charCodeAt(i) + d
        if(ascii > 90)                                 
          code += String.fromCharCode(ascii - 26)   
        else 
          code += String.fromCharCode(ascii)
        } else {
            code += ' '
        }
  }
  return code                                                      // let's go !!!
}

console.log(cypher(code))


