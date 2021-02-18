let code = "Le but de cet exercice est de vous mettre dans la peau d'un cryptanalyste qui devra casser ce chiffrement Caesar.\
La méthode manuelle est évidement la pire de toute et n'est pas une solution valide. En vous servant de Javascript essayez de casser ce code.\
Une interaction manuelle est possible, le but n'étant pas de déchiffrer ce code de manière totalement automatique, car pour bien le faire il vous faudrait un dictionnaire de mots.\
On attend de vous que vous minimalisiez les interactions manuelles pour déchiffrer ce code. Vous devrez rendre les codes que vous avez utilisé dans un fichier decypher.js\
 et ecrire en commentaire vos démarches et les différentes étapes que vous avez suivi pour obtenir le message en clair. Hypothèses:"

let cypher = (msg, d) => {
  let code 
  msg = msg.trim().toUpperCase()  

  for (let i = 0; i <= msg.length; i++) {
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
  return code
}
console.log(cypher(code,1))


