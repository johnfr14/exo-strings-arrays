let str = "Je suis le ténébreux, - le veuf, - l'inconsolé,\nLe prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends-moi le Pausilippe et la mer d'Italie,\n\
La fleur qui plaisait tant à mon cœur désolé,\n\
Et la treille où le pampre à la rose s'allie.\n\n\
Suis-je Amour ou Phébus ? ... Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine ;\n\
J'ai rêvé dans la grotte où nage la sirène...\n\n\
Et j'ai deux fois vainqueur traversé l'Achéron ;\n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."


//console.log(str)
//console.log('\n\n')

let indesirable = [',', '?', '...', ';', '.', '-', ':', '\n']
let str2 = ''

for(let i = 0; i < str.length; i++) {
  
  for(let j = 0; j < indesirable.length; j++) {
    if(str[i] === indesirable[j]){
      i++
      j = -1
    }
  }
  if(str2[i] === ' '){
    str2 += ' '
  }
  else {
    str2 += str[i]
  }
}

let arrayFinal = str2.split(' ')

console.log(str2)

